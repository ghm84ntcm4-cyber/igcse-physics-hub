import React, { useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Copy, Check, Lightbulb } from "lucide-react";
import { ExamPitfallItem, EXAM_PITFALLS } from "../data/examPitfallsData";

interface CommonMistakeCardProps {
  title?: string;
  mistake?: string;
  correction?: string;
  examinerNote?: string;
  unitBadge?: string;
  item?: ExamPitfallItem;
  className?: string;
}

export const CommonMistakeCard: React.FC<CommonMistakeCardProps> = ({
  title,
  mistake,
  correction,
  examinerNote,
  unitBadge,
  item,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayTitle = title || item?.topicTitle || "Common Exam Pitfall";
  const displayMistake = mistake || item?.mistake || "Forgetting to convert mass from grams (g) to kilograms (kg) before using F = ma or Ek = ½mv².";
  const displayCorrection = correction || item?.correction || "Always divide grams by 1000 to obtain mass in SI units (kg) before calculating energy or forces.";
  const displayExaminerNote = examinerNote || item?.examinerNote;
  const displayUnit = unitBadge || item?.unitName;

  const handleCopy = () => {
    const textToCopy = `⚠️ Exam Pitfall: ${displayTitle}\n❌ Mistake: ${displayMistake}\n✔️ Correction: ${displayCorrection}${displayExaminerNote ? `\n💡 Examiner Tip: ${displayExaminerNote}` : ""}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={item?.id || `pitfall-${Math.random().toString(36).substring(2, 7)}`}
      className={`common-mistake-card relative rounded-xl border-l-[5px] border-l-rose-500 bg-[#fff8f8] border border-rose-100 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl shrink-0" role="img" aria-label="warning">⚠️</span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm sm:text-base font-bold text-rose-600 tracking-wide uppercase font-sans">
                {displayTitle}
              </h4>
              {displayUnit && (
                <span className="px-2 py-0.5 text-[11px] font-semibold bg-rose-100/80 text-rose-800 rounded-md border border-rose-200">
                  {displayUnit}
                </span>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleCopy}
          title="Copy Pitfall & Correction"
          className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-rose-100 rounded-lg transition-colors shrink-0"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Mistake Content */}
      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
        <strong className="text-rose-950 font-semibold">Mistake: </strong>
        <span>{displayMistake}</span>
      </p>

      {/* Correction Content */}
      <div className="text-emerald-700 text-sm sm:text-base font-medium leading-relaxed bg-emerald-50/60 p-3 rounded-lg border border-emerald-200/70">
        <span className="text-emerald-800 font-bold flex items-start gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
          <span>
            <strong>Correction: </strong>
            {displayCorrection}
          </span>
        </span>
      </div>

      {/* Examiner Tip / Collapsible Note */}
      {displayExaminerNote && (
        <div className="mt-3 pt-3 border-t border-rose-100/80">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-xs font-semibold text-rose-800 hover:text-rose-950 transition-colors py-0.5"
          >
            <span className="flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Cambridge Examiner Insight & Scoring Tip</span>
            </span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {isExpanded && (
            <p className="mt-2 text-xs text-slate-600 bg-white/80 p-2.5 rounded-md border border-rose-100 italic leading-relaxed">
              "{displayExaminerNote}"
            </p>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Dedicated Section listing top Cambridge Exam Pitfalls with Unit filtering
 */
export const ExamPitfallsSection: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>("all");

  const filteredPitfalls = selectedUnit === "all"
    ? EXAM_PITFALLS
    : EXAM_PITFALLS.filter((p) => p.unitId === selectedUnit);

  const units = [
    { id: "all", label: "All Syllabus Units" },
    { id: "unit-1", label: "Unit 1: Mechanics" },
    { id: "unit-2", label: "Unit 2: Thermal" },
    { id: "unit-3", label: "Unit 3: Waves & Optics" },
    { id: "unit-4", label: "Unit 4: Electricity" },
    { id: "unit-5", label: "Unit 5: Nuclear" },
    { id: "unit-6", label: "Unit 6: Space" },
    { id: "unit-paper6", label: "Paper 6 Practical" },
  ];

  return (
    <div id="exam-pitfalls-section" className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>High-Yield Mark Protection</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Top Cambridge IGCSE Examiner Pitfalls & Unit Traps
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Over 30% of lost marks in Papers 2, 4 & 6 come from preventable unit mismatches, missing normal lines, and graph plotting habits.
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
            {filteredPitfalls.length} Verified Exam Traps
          </span>
        </div>
      </div>

      {/* Unit Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-2">
        {units.map((u) => (
          <button
            key={u.id}
            onClick={() => setSelectedUnit(u.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedUnit === u.id
                ? "bg-rose-600 text-white shadow-sm shadow-rose-600/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60"
            }`}
          >
            {u.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPitfalls.map((pitfall) => (
          <CommonMistakeCard key={pitfall.id} item={pitfall} />
        ))}
      </div>
    </div>
  );
};
