import React, { useState } from "react";
import { PracticeProblem } from "../types";
import { getPracticeProblemsForTopic } from "../data/practiceProblems";
import {
  FileCode,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Award,
  AlertTriangle,
  Lightbulb,
  Copy,
  Check,
  Printer,
  Calculator,
  Flame,
} from "lucide-react";

interface SectionPracticeProblemsProps {
  topicId: string;
  topicTitle: string;
}

export const SectionPracticeProblems: React.FC<SectionPracticeProblemsProps> = ({
  topicId,
  topicTitle,
}) => {
  const problems = getPracticeProblemsForTopic(topicId);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [expandedHints, setExpandedHints] = useState<Record<string, boolean>>({});
  const [solvedProblems, setSolvedProblems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`abphysics_solved_problems_${topicId}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!problems || problems.length === 0) {
    return null;
  }

  const filteredProblems =
    selectedDifficulty === "All"
      ? problems
      : problems.filter((p) => p.difficulty === selectedDifficulty);

  const toggleSolution = (id: string) => {
    setExpandedSolutions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleHint = (id: string) => {
    setExpandedHints((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSolved = (id: string) => {
    const updated = {
      ...solvedProblems,
      [id]: !solvedProblems[id],
    };
    setSolvedProblems(updated);
    try {
      localStorage.setItem(
        `abphysics_solved_problems_${topicId}`,
        JSON.stringify(updated)
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleCopy = (problem: PracticeProblem) => {
    const text = `${problem.title}\n\nQuestion:\n${problem.question}\n\nGiven Data:\n${problem.givenData.join("\n")}\n\nFormula:\n${problem.formulaUsed}\n\nSolution:\n${problem.stepByStepSolution.join("\n")}\n\nFinal Answer:\n${problem.finalAnswer}`;
    navigator.clipboard.writeText(text);
    setCopiedId(problem.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const solvedCount = Object.values(solvedProblems).filter(Boolean).length;

  return (
    <div
      id="section-practice-problems"
      className="mt-8 rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
    >
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-blue-100 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Targeted Practice Set
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Section Practice Problems & Detailed Solutions
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90 mt-1 max-w-2xl">
              Master the core calculation patterns and theoretical concepts for{" "}
              <span className="font-bold text-white underline decoration-white/30">{topicTitle}</span> with full step-by-step mark-scheme solutions.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-wider text-blue-200 font-bold">
                Completed
              </div>
              <div className="text-lg font-black">
                {solvedCount} / {problems.length}
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-300" />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-6 flex-wrap">
          <span className="text-xs font-bold text-blue-200 mr-1">Difficulty:</span>
          {["All", "Core", "Extended", "Challenging"].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedDifficulty === diff
                  ? "bg-white text-blue-900 shadow-sm"
                  : "bg-blue-800/60 hover:bg-blue-800 text-blue-100 border border-blue-600/50"
              }`}
            >
              {diff}
              {diff === "All" && ` (${problems.length})`}
              {diff !== "All" &&
                ` (${problems.filter((p) => p.difficulty === diff).length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Problems List */}
      <div className="p-6 space-y-6 bg-slate-50/50">
        {filteredProblems.map((problem, index) => {
          const isExpanded = !!expandedSolutions[problem.id];
          const isHintExpanded = !!expandedHints[problem.id];
          const isSolved = !!solvedProblems[problem.id];

          const diffBadgeColor =
            problem.difficulty === "Core"
              ? "bg-emerald-100 text-emerald-800 border-emerald-300"
              : problem.difficulty === "Extended"
              ? "bg-blue-100 text-blue-800 border-blue-300"
              : "bg-purple-100 text-purple-800 border-purple-300";

          return (
            <div
              key={problem.id}
              className={`rounded-2xl border transition-all ${
                isSolved
                  ? "bg-emerald-50/30 border-emerald-200"
                  : "bg-white border-slate-200 shadow-2xs hover:border-blue-300"
              }`}
            >
              {/* Problem Card Top */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                      #{index + 1}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900">
                      {problem.title}
                    </h3>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${diffBadgeColor}`}
                    >
                      {problem.difficulty}
                    </span>
                    {problem.marks && (
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        [{problem.marks} Marks]
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Mark as Solved Checkbox */}
                    <button
                      onClick={() => toggleSolved(problem.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                        isSolved
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isSolved ? "Solved" : "Mark as Solved"}</span>
                    </button>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(problem)}
                      className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                      title="Copy Problem & Solution"
                    >
                      {copiedId === problem.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm sm:text-base text-slate-800 font-medium leading-relaxed whitespace-pre-line">
                  {problem.question}
                </div>

                {/* Given Data & Formula Used */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs">
                    <span className="font-bold text-blue-900 uppercase tracking-wider block mb-1">
                      Given Data & Constants:
                    </span>
                    <ul className="space-y-1 text-slate-700">
                      {problem.givenData.map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-mono text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-xs">
                    <span className="font-bold text-amber-900 uppercase tracking-wider block mb-1">
                      Core Formula Used:
                    </span>
                    <div className="font-mono text-amber-950 font-semibold text-[11px] leading-relaxed">
                      {problem.formulaUsed}
                    </div>
                  </div>
                </div>

                {/* Hints Toggle */}
                {problem.hints && problem.hints.length > 0 && (
                  <div>
                    <button
                      onClick={() => toggleHint(problem.id)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>{isHintExpanded ? "Hide Hint" : "Need a Hint?"}</span>
                      {isHintExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                    {isHintExpanded && (
                      <div className="mt-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                        {problem.hints.map((h, hIdx) => (
                          <p key={hIdx}>💡 {h}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Show/Hide Solution Button */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleSolution(problem.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isExpanded
                        ? "bg-slate-200 text-slate-800 hover:bg-slate-300"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-sm"
                    }`}
                  >
                    <FileCode className="w-4 h-4" />
                    <span>
                      {isExpanded
                        ? "Hide Detailed Solution"
                        : "View Step-by-Step Mark Scheme Solution"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Detailed Solution Expanded View */}
                {isExpanded && (
                  <div className="mt-4 p-5 rounded-2xl bg-indigo-50/40 border border-indigo-200 space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-indigo-950 font-extrabold text-sm uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-indigo-600" />
                      Step-by-Step Mark Scheme Derivation:
                    </div>

                    <div className="space-y-2.5">
                      {problem.stepByStepSolution.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-white border border-indigo-100 text-xs sm:text-sm text-slate-800 font-mono leading-relaxed"
                        >
                          {step}
                        </div>
                      ))}
                    </div>

                    {/* Final Answer Highlight Box */}
                    <div className="p-4 rounded-xl bg-emerald-600 text-white space-y-1 shadow-xs">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-200 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" />
                        Final Expected Answer & Units:
                      </div>
                      <div className="text-sm sm:text-base font-black whitespace-pre-line leading-relaxed font-mono">
                        {problem.finalAnswer}
                      </div>
                    </div>

                    {/* Examiner's Note */}
                    {problem.examinerTips && (
                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5 text-amber-950">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          Examiner's Mark Scheme & Common Trap Advice:
                        </div>
                        <p className="leading-relaxed">{problem.examinerTips}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
