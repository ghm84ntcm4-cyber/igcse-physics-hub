import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IGCSE_QUIZ_QUESTIONS, PAST_PAPER_EXAMS } from "../data/quizData";
import { Question, PastPaperExam } from "../types";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  RefreshCw,
  Award,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Clock,
  Play,
  Pause,
  RotateCcw,
  FileText,
  Filter,
  Search,
  Check,
  AlertCircle,
  Printer,
  ChevronLeft,
  ChevronRight,
  Bookmark,
} from "lucide-react";

type MainViewMode = "exam_papers" | "topical_bank" | "print_view";

export const QuizBank: React.FC = () => {
  const { unitId } = useParams<{ unitId?: string }>();
  const [viewMode, setViewMode] = useState<MainViewMode>(unitId ? "topical_bank" : "exam_papers");

  // Filter state for Topical Bank
  const [selectedTopic, setSelectedTopic] = useState<string>(unitId || "all");
  const [selectedPaper, setSelectedPaper] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (unitId) {
      setSelectedTopic(unitId);
      setViewMode("topical_bank");
    }
  }, [unitId]);

  // Track answers and mark scheme revelations for topical bank
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealedMarkSchemes, setRevealedMarkSchemes] = useState<Record<string, boolean>>({});

  // Active Exam State
  const [selectedExamId, setSelectedExamId] = useState<string>(PAST_PAPER_EXAMS[0].id);
  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [currentExamQuestionIdx, setCurrentExamQuestionIdx] = useState<number>(0);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(45 * 60);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [examSelfMarks, setExamSelfMarks] = useState<Record<string, number>>({});

  const activeExam = PAST_PAPER_EXAMS.find((e) => e.id === selectedExamId) || PAST_PAPER_EXAMS[0];
  const activeExamQuestions = activeExam.questionIds
    .map((id) => IGCSE_QUIZ_QUESTIONS.find((q) => q.id === id))
    .filter((q): q is Question => q !== undefined);

  // Timer Effect
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isExamRunning && !isTimerPaused && !isExamSubmitted) {
      timerRef.current = window.setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsExamSubmitted(true);
            setIsExamRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isExamRunning, isTimerPaused, isExamSubmitted]);

  // Start Exam Handler
  const handleStartExam = (exam: PastPaperExam) => {
    setSelectedExamId(exam.id);
    setTimeRemainingSeconds(exam.durationMinutes * 60);
    setIsExamRunning(true);
    setIsExamSubmitted(false);
    setCurrentExamQuestionIdx(0);
    setExamAnswers({});
    setFlaggedQuestions({});
    setExamSelfMarks({});
    setIsTimerPaused(false);
  };

  // Submit Exam Handler
  const handleSubmitExam = () => {
    setIsExamSubmitted(true);
    setIsExamRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Reset Active Exam
  const handleResetExam = () => {
    setIsExamRunning(false);
    setIsExamSubmitted(false);
    setCurrentExamQuestionIdx(0);
    setExamAnswers({});
    setFlaggedQuestions({});
    setExamSelfMarks({});
    setTimeRemainingSeconds(activeExam.durationMinutes * 60);
  };

  // Format Seconds to MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Calculate Exam Score
  const calculateExamScore = () => {
    let score = 0;
    activeExamQuestions.forEach((q) => {
      if (q.options && q.options.length > 0) {
        if (examAnswers[q.id] === q.correctAnswer) score += q.marks;
      } else {
        score += examSelfMarks[q.id] || 0;
      }
    });
    return score;
  };

  // Determine Cambridge Grade
  const getExamGrade = (score: number, exam: PastPaperExam) => {
    const t = exam.gradeThresholds;
    if (score >= t.grade9) return { grade: "Grade 9", label: "A** (Highest Merit)", color: "text-emerald-700 bg-emerald-50 border-emerald-300" };
    if (score >= t.grade8) return { grade: "Grade 8", label: "A* (Distinction)", color: "text-blue-700 bg-blue-50 border-blue-300" };
    if (score >= t.grade7) return { grade: "Grade 7", label: "A (Excellent)", color: "text-indigo-700 bg-indigo-50 border-indigo-300" };
    if (score >= t.grade6) return { grade: "Grade 6", label: "B (Good Pass)", color: "text-purple-700 bg-purple-50 border-purple-300" };
    if (score >= t.grade5) return { grade: "Grade 5", label: "C (Strong Pass)", color: "text-amber-700 bg-amber-50 border-amber-300" };
    return { grade: "Grade 4 / U", label: "D / Review Required", color: "text-rose-700 bg-rose-50 border-rose-300" };
  };

  // Filtered Topical Questions
  const filteredQuestions = IGCSE_QUIZ_QUESTIONS.filter((q) => {
    const topicMatch = selectedTopic === "all" || q.topicId === selectedTopic;
    const paperMatch = selectedPaper === "all" || q.paperType.includes(selectedPaper);
    const diffMatch = selectedDifficulty === "all" || q.difficulty === selectedDifficulty;
    const searchMatch =
      searchQuery.trim() === "" ||
      q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.markScheme.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return topicMatch && paperMatch && diffMatch && searchMatch;
  });

  const handleSelectOption = (questionId: string, optionChar: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionChar }));
  };

  const toggleMarkScheme = (questionId: string) => {
    setRevealedMarkSchemes((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const resetTopicalQuiz = () => {
    setUserAnswers({});
    setRevealedMarkSchemes({});
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Mode Switcher */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                <HelpCircle className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Cambridge IGCSE Physics Past Paper Suite
              </h1>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Complete official May/June & Oct/Nov exam papers, timed mock exam simulation with Grade 9 boundaries, and topical question bank.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setViewMode("exam_papers");
                setIsExamRunning(false);
                setIsExamSubmitted(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === "exam_papers"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Full Past Paper Exam Mode</span>
            </button>

            <button
              onClick={() => setViewMode("topical_bank")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === "topical_bank"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Topical Question Bank</span>
            </button>

            <button
              onClick={() => setViewMode("print_view")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                viewMode === "print_view"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Printable Exam View</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
         VIEW MODE 1: FULL PAST PAPER EXAM SIMULATOR (TIMED EXAM)
         ========================================================================= */}
      {viewMode === "exam_papers" && (
        <div className="space-y-6">
          {!isExamRunning && !isExamSubmitted ? (
            /* Exam Selector Screen */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Select an Official Cambridge Past Paper to Practice:</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PAST_PAPER_EXAMS.map((exam) => (
                  <div
                    key={exam.id}
                    className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold font-mono border border-blue-200">
                          {exam.paperCode}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {exam.session}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {exam.title}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-slate-600 pt-1">
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          {exam.durationMinutes} Minutes
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-slate-700">
                          {exam.totalMarks} Marks
                        </span>
                        <span>•</span>
                        <span className="font-mono text-purple-700 font-bold">
                          Grade 9 @ {exam.gradeThresholds.grade9}+
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        {exam.questionIds.length} Curated Questions
                      </span>
                      <button
                        onClick={() => handleStartExam(exam)}
                        className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Start Timed Exam</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : isExamRunning ? (
            /* Live Exam Sitting Screen */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Question Screen */}
              <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
                {/* Exam Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-bold font-mono text-blue-700 block">
                      {activeExam.paperCode} • {activeExam.session}
                    </span>
                    <h2 className="text-sm font-bold text-slate-900">
                      Question {currentExamQuestionIdx + 1} of {activeExamQuestions.length}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setFlaggedQuestions((prev) => ({
                          ...prev,
                          [activeExamQuestions[currentExamQuestionIdx]?.id]:
                            !prev[activeExamQuestions[currentExamQuestionIdx]?.id],
                        }))
                      }
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 border transition-all cursor-pointer ${
                        flaggedQuestions[activeExamQuestions[currentExamQuestionIdx]?.id]
                          ? "bg-amber-100 text-amber-900 border-amber-300"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>
                        {flaggedQuestions[activeExamQuestions[currentExamQuestionIdx]?.id]
                          ? "Flagged for Review"
                          : "Flag Question"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Active Question Content */}
                {activeExamQuestions[currentExamQuestionIdx] && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                        {activeExamQuestions[currentExamQuestionIdx].paperType} •{" "}
                        {activeExamQuestions[currentExamQuestionIdx].difficulty}
                      </span>
                      <span className="text-xs font-bold text-slate-600 font-mono">
                        [{activeExamQuestions[currentExamQuestionIdx].marks} Mark
                        {activeExamQuestions[currentExamQuestionIdx].marks > 1 ? "s" : ""}]
                      </span>
                    </div>

                    <p className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                      {activeExamQuestions[currentExamQuestionIdx].questionText}
                    </p>

                    {/* MCQ Options */}
                    {activeExamQuestions[currentExamQuestionIdx].options && (
                      <div className="space-y-2 pt-2">
                        {activeExamQuestions[currentExamQuestionIdx].options!.map((opt) => {
                          const optChar = opt.charAt(0);
                          const isSelected =
                            examAnswers[activeExamQuestions[currentExamQuestionIdx].id] === optChar;

                          return (
                            <button
                              key={opt}
                              onClick={() =>
                                setExamAnswers((prev) => ({
                                  ...prev,
                                  [activeExamQuestions[currentExamQuestionIdx].id]: optChar,
                                }))
                              }
                              className={`w-full p-3 rounded-xl border text-xs text-left font-medium transition-all flex items-start gap-2.5 cursor-pointer ${
                                isSelected
                                  ? "bg-blue-50 border-blue-400 text-blue-950 font-bold shadow-2xs"
                                  : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                              }`}
                            >
                              <span
                                className={`font-bold font-mono px-2 py-0.5 rounded text-[11px] ${
                                  isSelected
                                    ? "bg-blue-600 text-white"
                                    : "bg-white border border-slate-200 text-slate-800"
                                }`}
                              >
                                {optChar}
                              </span>
                              <span className="leading-snug">{opt.substring(3)}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Non-MCQ Theory / Calculation Response Box */}
                    {(!activeExamQuestions[currentExamQuestionIdx].options ||
                      activeExamQuestions[currentExamQuestionIdx].options!.length === 0) && (
                      <div className="space-y-2 pt-2">
                        <label className="text-xs font-bold text-slate-700 block">
                          Your Working & Final Calculated Answer:
                        </label>
                        <textarea
                          rows={4}
                          value={examAnswers[activeExamQuestions[currentExamQuestionIdx].id] || ""}
                          onChange={(e) =>
                            setExamAnswers((prev) => ({
                              ...prev,
                              [activeExamQuestions[currentExamQuestionIdx].id]: e.target.value,
                            }))
                          }
                          placeholder="Type your step-by-step formula substitutions and final numerical value with units..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 font-mono focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom Navigation Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentExamQuestionIdx((prev) => Math.max(0, prev - 1))}
                    disabled={currentExamQuestionIdx === 0}
                    className="py-2 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <div className="text-xs text-slate-500 font-medium">
                    Question {currentExamQuestionIdx + 1} / {activeExamQuestions.length}
                  </div>

                  {currentExamQuestionIdx < activeExamQuestions.length - 1 ? (
                    <button
                      onClick={() =>
                        setCurrentExamQuestionIdx((prev) =>
                          Math.min(activeExamQuestions.length - 1, prev + 1)
                        )
                      }
                      className="py-2 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitExam}
                      className="py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                    >
                      <Check className="w-4 h-4" />
                      <span>Submit Paper</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Exam Timer & Question Navigator Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                {/* Countdown Timer Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>Time Remaining:</span>
                    </span>
                    <button
                      onClick={() => setIsTimerPaused(!isTimerPaused)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
                    >
                      {isTimerPaused ? "Resume" : "Pause"}
                    </button>
                  </div>

                  <div
                    className={`text-3xl font-extrabold font-mono text-center py-2 px-4 rounded-xl border ${
                      timeRemainingSeconds < 300
                        ? "bg-rose-50 border-rose-300 text-rose-700 animate-pulse"
                        : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}
                  >
                    {formatTime(timeRemainingSeconds)}
                  </div>

                  <div className="text-[11px] text-slate-500 text-center">
                    Official Exam Duration: {activeExam.durationMinutes} mins
                  </div>
                </div>

                {/* Question Grid Navigator */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Question Navigator:
                  </h3>

                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {activeExamQuestions.map((q, idx) => {
                      const isAnswered =
                        examAnswers[q.id] !== undefined && examAnswers[q.id].trim() !== "";
                      const isFlagged = !!flaggedQuestions[q.id];
                      const isCurrent = idx === currentExamQuestionIdx;

                      let btnStyle = "bg-slate-50 text-slate-700 border-slate-200";
                      if (isCurrent) {
                        btnStyle = "ring-2 ring-blue-600 bg-blue-50 text-blue-900 font-bold border-blue-300";
                      } else if (isFlagged) {
                        btnStyle = "bg-amber-100 text-amber-900 border-amber-300 font-bold";
                      } else if (isAnswered) {
                        btnStyle = "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold";
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentExamQuestionIdx(idx)}
                          className={`p-2 rounded-xl text-xs border text-center transition-all cursor-pointer font-mono ${btnStyle}`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span>Answered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span>Flagged for Review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                      <span>Unanswered</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmitExam}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs mt-3"
                  >
                    <Check className="w-4 h-4" />
                    <span>Submit & View Mark Scheme</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Exam Results & Complete Mark Scheme Review Screen */
            <div className="space-y-6">
              {/* Score & Cambridge Grade Card */}
              {(() => {
                const totalScore = calculateExamScore();
                const totalMaxMarks = activeExamQuestions.reduce((acc, q) => acc + q.marks, 0);
                const percentage = totalMaxMarks > 0 ? (totalScore / totalMaxMarks) * 100 : 0;
                const gradeInfo = getExamGrade(totalScore, activeExam);

                return (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold font-mono text-blue-700 block">
                          EXAM COMPLETED • {activeExam.paperCode}
                        </span>
                        <h2 className="text-xl font-bold text-slate-900">
                          Your Cambridge Assessment Performance
                        </h2>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className={`px-4 py-2 rounded-xl border text-center font-bold ${gradeInfo.color}`}
                        >
                          <div className="text-xs uppercase tracking-wider font-semibold">
                            Projected Grade:
                          </div>
                          <div className="text-xl font-extrabold font-mono">
                            {gradeInfo.grade}
                          </div>
                        </div>

                        <button
                          onClick={handleResetExam}
                          className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
                          title="Re-attempt Exam Paper"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
                        <span className="text-[11px] font-semibold text-blue-900 block">
                          Total Marks Awarded
                        </span>
                        <span className="text-lg font-bold font-mono text-blue-950">
                          {totalScore} / {totalMaxMarks}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                        <span className="text-[11px] font-semibold text-emerald-900 block">
                          Percentage Score
                        </span>
                        <span className="text-lg font-bold font-mono text-emerald-950">
                          {percentage.toFixed(1)}%
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200">
                        <span className="text-[11px] font-semibold text-purple-900 block">
                          Grade 9 Benchmark
                        </span>
                        <span className="text-lg font-bold font-mono text-purple-950">
                          ≥ {activeExam.gradeThresholds.grade9} Marks
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                        <span className="text-[11px] font-semibold text-amber-900 block">
                          Grade 8 Benchmark
                        </span>
                        <span className="text-lg font-bold font-mono text-amber-950">
                          ≥ {activeExam.gradeThresholds.grade8} Marks
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Question-by-Question Mark Scheme Breakdown */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Official Mark Scheme & Step-by-Step Examiner Verification:</span>
                </h3>

                {activeExamQuestions.map((q, idx) => {
                  const userAnswer = examAnswers[q.id];
                  const isMcq = q.options && q.options.length > 0;
                  const isCorrect = isMcq && userAnswer === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold font-mono border border-blue-200">
                            Q{idx + 1} • {q.paperType}
                          </span>
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-purple-50 text-purple-700 border border-purple-200">
                            {q.difficulty}
                          </span>
                        </div>

                        <div className="text-xs font-bold text-slate-500">
                          [{q.marks} Mark{q.marks > 1 ? "s" : ""}]
                        </div>
                      </div>

                      <p className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                        {q.questionText}
                      </p>

                      {/* User's response display */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                        <span className="font-bold text-slate-700 block">Your Recorded Answer:</span>
                        <div className="font-mono text-slate-900">
                          {userAnswer ? userAnswer : <span className="text-slate-400 italic">No answer submitted</span>}
                        </div>
                      </div>

                      {/* Official Mark Scheme Box */}
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <strong className="text-blue-950 font-bold">
                            Official Cambridge Mark Scheme:
                          </strong>
                          {isMcq && (
                            <span
                              className={`px-2 py-0.5 rounded-md font-bold text-[11px] ${
                                isCorrect
                                  ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                                  : "bg-rose-100 text-rose-900 border border-rose-300"
                              }`}
                            >
                              {isCorrect ? "Correct (+1 Mark)" : `Correct Option: ${q.correctAnswer}`}
                            </span>
                          )}
                        </div>

                        <div className="font-mono text-slate-900 bg-white p-3 rounded-lg border border-blue-200 space-y-1 font-semibold">
                          {q.markScheme.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-1.5">
                              <span className="text-blue-600 font-bold shrink-0">•</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>

                        {/* Examiner Explanation */}
                        <div className="pt-2 text-slate-700">
                          <strong className="text-blue-900 block font-bold mb-0.5">
                            Examiner Guidance & Tips:
                          </strong>
                          <p className="leading-relaxed">{q.examinerExplanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
         VIEW MODE 2: TOPICAL QUESTION BANK (FILTERABLE)
         ========================================================================= */}
      {viewMode === "topical_bank" && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search questions by keyword, formula, or concept (e.g. refraction, half-life, spring constant)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div>
                <label className="text-xs text-slate-500 font-semibold block mb-1">
                  Unit / Syllabus Block:
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                >
                  <option value="all">All Units (1 - 6)</option>
                  <option value="unit-1">Unit 1: Motion, Forces & Energy</option>
                  <option value="unit-2">Unit 2: Thermal Physics</option>
                  <option value="unit-3">Unit 3: Waves & Optics</option>
                  <option value="unit-4">Unit 4: Electricity & Magnetism</option>
                  <option value="unit-5">Unit 5: Nuclear Physics</option>
                  <option value="unit-6">Unit 6: Space Physics</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-500 font-semibold block mb-1">
                  Exam Paper Type:
                </label>
                <select
                  value={selectedPaper}
                  onChange={(e) => setSelectedPaper(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                >
                  <option value="all">All Papers (2, 4 & 6)</option>
                  <option value="Paper 2">Paper 2 (Multiple Choice)</option>
                  <option value="Paper 4">Paper 4 (Theory & Calculation)</option>
                  <option value="Paper 6">Paper 6 (Alternative to Practical)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-500 font-semibold block mb-1">
                  Difficulty Level:
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                >
                  <option value="all">All Difficulties</option>
                  <option value="Core">Core (Grades C - G)</option>
                  <option value="Extended">Extended (Grades A* - B)</option>
                  <option value="Challenging">Challenging (Grade 9 / A*)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-medium">
              <span>Showing {filteredQuestions.length} exam questions</span>
              <button
                onClick={resetTopicalQuiz}
                className="text-blue-700 hover:text-blue-800 font-bold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset All Answers</span>
              </button>
            </div>

            {filteredQuestions.map((q, idx) => {
              const userAnswer = userAnswers[q.id];
              const isAnswered = userAnswer !== undefined;
              const isCorrect = userAnswer === q.correctAnswer;
              const isMarkSchemeOpen = !!revealedMarkSchemes[q.id];

              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs"
                >
                  {/* Question Top Tags */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold font-mono border border-blue-200">
                        Q{idx + 1} • {q.paperType}
                      </span>
                      {q.paperCode && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-bold border border-slate-200">
                          {q.paperCode}
                        </span>
                      )}
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                          q.difficulty === "Extended" || q.difficulty === "Challenging"
                            ? "bg-purple-50 text-purple-700 border border-purple-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {q.difficulty}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-slate-500">
                      [{q.marks} Mark{q.marks > 1 ? "s" : ""}]
                    </div>
                  </div>

                  {/* Question Text */}
                  <p className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                    {q.questionText}
                  </p>

                  {/* MCQ Options */}
                  {q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {q.options.map((opt) => {
                        const optChar = opt.charAt(0);
                        const isSelected = userAnswer === optChar;
                        const isCorrectOpt = optChar === q.correctAnswer;

                        let btnClass =
                          "bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100 cursor-pointer";
                        if (isAnswered) {
                          if (isCorrectOpt) {
                            btnClass =
                              "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold shadow-xs";
                          } else if (isSelected) {
                            btnClass =
                              "bg-rose-50 border-rose-300 text-rose-900 font-bold shadow-xs";
                          } else {
                            btnClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={opt}
                            onClick={() => handleSelectOption(q.id, optChar)}
                            disabled={isAnswered}
                            className={`p-3 rounded-xl border text-xs text-left font-medium transition-all flex items-start gap-2.5 ${btnClass}`}
                          >
                            <span className="font-bold font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-800 text-[11px]">
                              {optChar}
                            </span>
                            <span className="leading-snug">{opt.substring(3)}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Mark Scheme & Explanation Expander */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => toggleMarkScheme(q.id)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>
                        {isMarkSchemeOpen
                          ? "Hide Mark Scheme & Examiner Notes"
                          : "Show Mark Scheme & Examiner Notes"}
                      </span>
                      {isMarkSchemeOpen ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isAnswered && (
                      <span className="text-xs font-bold flex items-center gap-1">
                        {isCorrect ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Correct
                          </span>
                        ) : (
                          <span className="text-rose-700 flex items-center gap-1">
                            <XCircle className="w-4 h-4" /> Incorrect (Answer: {q.correctAnswer})
                          </span>
                        )}
                      </span>
                    )}
                  </div>

                  {isMarkSchemeOpen && (
                    <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2.5 text-xs">
                      <div>
                        <span className="font-bold text-blue-900 block mb-0.5">
                          Official Mark Scheme ({q.marks} Mark{q.marks > 1 ? "s" : ""}):
                        </span>
                        <div className="font-mono text-slate-800 bg-white p-2.5 rounded-lg border border-blue-200 leading-relaxed font-semibold space-y-1">
                          {q.markScheme.map((item, mIdx) => (
                            <div key={mIdx} className="flex items-start gap-1.5">
                              <span className="text-blue-600 font-bold shrink-0">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-bold text-blue-900 block mb-0.5">
                          Examiner Insights & Strategy:
                        </span>
                        <p className="text-slate-700 leading-relaxed">{q.examinerExplanation}</p>
                      </div>

                      {q.formulaUsed && (
                        <div className="pt-1 text-[11px] text-blue-800 font-semibold font-mono">
                          Formula Reference: {q.formulaUsed}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
         VIEW MODE 3: PRINTABLE EXAM PAPER / REVISION WORKSHEET VIEW
         ========================================================================= */}
      {viewMode === "print_view" && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Printer className="w-4 h-4 text-blue-600" />
                <span>Cambridge Examination Paper Revision Sheet</span>
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Print or export to PDF formatted with official candidate instructions, lined answer boxes, and separate mark schemes.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs space-y-8 print:border-none print:shadow-none">
            {/* Exam Header */}
            <div className="border-b-2 border-slate-900 pb-4 text-center space-y-1">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                Cambridge Assessment International Education
              </div>
              <h1 className="text-xl font-extrabold text-slate-900">
                CAMBRIDGE IGCSE™ PHYSICS 0625/42
              </h1>
              <div className="text-xs font-semibold text-slate-600">
                Paper 4 Theory (Extended) • Time Allowed: 1 hour 15 minutes • Total Marks: 80
              </div>
            </div>

            {/* Questions with Answer Lines */}
            {IGCSE_QUIZ_QUESTIONS.slice(0, 8).map((q, idx) => (
              <div key={q.id} className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                  <span>Question {idx + 1} [{q.paperType}]</span>
                  <span>[{q.marks} marks]</span>
                </div>
                <p className="text-sm text-slate-900 font-medium leading-relaxed">
                  {q.questionText}
                </p>

                {/* Blank ruled lines for paper writing */}
                <div className="space-y-4 pt-2">
                  <div className="border-b border-slate-300 h-6"></div>
                  <div className="border-b border-slate-300 h-6"></div>
                  <div className="border-b border-slate-300 h-6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
