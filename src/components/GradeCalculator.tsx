import React, { useState, useMemo } from "react";
import {
  Calculator,
  Award,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
  HelpCircle,
  ArrowRight,
  Bookmark,
  Share2,
  Info,
} from "lucide-react";

export const GradeCalculator: React.FC = () => {
  // Input scores
  const [p1Score, setP1Score] = useState<number | string>(34);
  const [p4Score, setP4Score] = useState<number | string>(65);
  const [p6Score, setP6Score] = useState<number | string>(33);
  const [copied, setCopied] = useState<boolean>(false);

  // Parse numeric values
  const p1 = typeof p1Score === "number" ? p1Score : parseFloat(p1Score) || 0;
  const p4 = typeof p4Score === "number" ? p4Score : parseFloat(p4Score) || 0;
  const p6 = typeof p6Score === "number" ? p6Score : parseFloat(p6Score) || 0;

  // Clamped values for calculations
  const clampedP1 = Math.min(40, Math.max(0, p1));
  const clampedP4 = Math.min(80, Math.max(0, p4));
  const clampedP6 = Math.min(40, Math.max(0, p6));

  // Cambridge IGCSE Physics Weighting Formula:
  // Component 1 / 2 (MCQ): 40 marks * 1.25 = 50 weighted marks (25%)
  // Component 3 / 4 (Theory): 80 marks * 1.25 = 100 weighted marks (50%)
  // Component 5 / 6 (Practical): 40 marks * 1.0 = 40 weighted marks (25%)
  // Total = 200 marks
  const weightedP1 = clampedP1 * 1.25;
  const weightedP4 = clampedP4 * 1.25;
  const weightedP6 = clampedP6 * 1.0;
  const totalWeighted = weightedP1 + weightedP4 + weightedP6;
  const percentage = (totalWeighted / 200) * 100;

  // Grade Evaluation
  const gradeInfo = useMemo(() => {
    if (totalWeighted >= 145) {
      return {
        grade: "A* (Outstanding)",
        level: "Grade 9 / 8 Equivalent",
        bgColor: "bg-emerald-100/80 border-emerald-300 text-emerald-900",
        badgeColor: "bg-emerald-600 text-white",
        textColor: "text-emerald-800",
        message: "Exceptional performance! Well above the standard Cambridge A* threshold.",
        barColor: "bg-emerald-500",
      };
    } else if (totalWeighted >= 125) {
      return {
        grade: "A",
        level: "Grade 7 Equivalent",
        bgColor: "bg-emerald-50 border-emerald-200 text-emerald-800",
        badgeColor: "bg-emerald-500 text-white",
        textColor: "text-emerald-700",
        message: "Strong performance! Confidently meeting the Cambridge Grade A requirement.",
        barColor: "bg-emerald-400",
      };
    } else if (totalWeighted >= 105) {
      return {
        grade: "B",
        level: "Grade 6 Equivalent",
        bgColor: "bg-sky-50 border-sky-200 text-sky-800",
        badgeColor: "bg-sky-600 text-white",
        textColor: "text-sky-700",
        message: "Good standing. Boosting Paper 4 calculation marks can push this to an A.",
        barColor: "bg-sky-500",
      };
    } else if (totalWeighted >= 85) {
      return {
        grade: "C",
        level: "Grade 5 / 4 Pass",
        bgColor: "bg-amber-50 border-amber-200 text-amber-900",
        badgeColor: "bg-amber-500 text-white",
        textColor: "text-amber-800",
        message: "Passing grade. Focus on Paper 6 graph marks and Paper 2 definitions to reach a B/A.",
        barColor: "bg-amber-500",
      };
    } else {
      return {
        grade: "D / Below threshold",
        level: "Needs Review",
        bgColor: "bg-rose-50 border-rose-200 text-rose-900",
        badgeColor: "bg-rose-600 text-white",
        textColor: "text-rose-800",
        message: "Below targeted grade boundary. Revise core formulas and practice topical past papers.",
        barColor: "bg-rose-500",
      };
    }
  }, [totalWeighted]);

  const handleApplyPreset = (presetP1: number, presetP4: number, presetP6: number) => {
    setP1Score(presetP1);
    setP4Score(presetP4);
    setP6Score(presetP6);
  };

  const handleReset = () => {
    setP1Score(0);
    setP4Score(0);
    setP6Score(0);
  };

  const handleShareResult = () => {
    const text = `📊 My IGCSE Physics Estimated Grade:\n• Paper 1/2: ${clampedP1}/40 (Weighted: ${weightedP1.toFixed(1)})\n• Paper 3/4: ${clampedP4}/80 (Weighted: ${weightedP4.toFixed(1)})\n• Paper 5/6: ${clampedP6}/40 (Weighted: ${weightedP6.toFixed(1)})\n🎯 Total Score: ${totalWeighted.toFixed(1)} / 200 (${percentage.toFixed(1)}%)\n🏆 Estimated Grade: ${gradeInfo.grade}\nCalculate yours at: ${window.location.origin}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="grade-calculator" className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg border border-indigo-500/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold backdrop-blur-sm border border-white/10">
              <Calculator className="w-3.5 h-3.5 text-cyan-300" />
              <span>Official Cambridge 0625 / 0972 Component Weightings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              IGCSE Physics Grade Estimator & Calculator
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 max-w-2xl leading-relaxed">
              Enter your raw scores from Paper 1/2 (Multiple Choice), Paper 3/4 (Theory), and Paper 5/6 (Practical ATP) to compute your weighted score out of 200 and projected grade.
            </p>
          </div>

          {/* Quick Target Presets */}
          <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
            <button
              onClick={() => handleApplyPreset(36, 70, 36)}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Preset: Grade A* (173.5/200)</span>
            </button>
            <button
              onClick={() => handleApplyPreset(30, 56, 30)}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5"
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
              <span>Preset: Grade A (137.5/200)</span>
            </button>
            <button
              onClick={() => handleApplyPreset(26, 45, 25)}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
              <span>Preset: Grade B (113.8/200)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs vs Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Component Inputs */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span>Raw Component Scores</span>
            </h3>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors p-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-5">
            {/* Paper 1 Score */}
            <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-bold text-slate-800 block">
                    Paper 1 or 2: Multiple Choice (MCQ)
                  </label>
                  <span className="text-xs text-slate-500">
                    Max: 40 marks • Multiplier: ×1.25 (50 weighted marks)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={p1Score}
                    onChange={(e) => setP1Score(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-20 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-center font-bold text-base text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="text-xs text-slate-400 font-semibold">/ 40</span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={clampedP1}
                onChange={(e) => setP1Score(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>0</span>
                <span className="text-indigo-600">Weighted: {weightedP1.toFixed(1)} / 50</span>
                <span>40</span>
              </div>
            </div>

            {/* Paper 3 or 4 Score */}
            <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-bold text-slate-800 block">
                    Paper 3 or 4: Extended / Core Theory
                  </label>
                  <span className="text-xs text-slate-500">
                    Max: 80 marks • Multiplier: ×1.25 (100 weighted marks)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="80"
                    value={p4Score}
                    onChange={(e) => setP4Score(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-20 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-center font-bold text-base text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="text-xs text-slate-400 font-semibold">/ 80</span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="80"
                step="1"
                value={clampedP4}
                onChange={(e) => setP4Score(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>0</span>
                <span className="text-indigo-600">Weighted: {weightedP4.toFixed(1)} / 100</span>
                <span>80</span>
              </div>
            </div>

            {/* Paper 5 or 6 Score */}
            <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-bold text-slate-800 block">
                    Paper 5 or 6: Practical Test / Alternative to Practical (ATP)
                  </label>
                  <span className="text-xs text-slate-500">
                    Max: 40 marks • Multiplier: ×1.0 (40 weighted marks)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={p6Score}
                    onChange={(e) => setP6Score(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-20 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-center font-bold text-base text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="text-xs text-slate-400 font-semibold">/ 40</span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={clampedP6}
                onChange={(e) => setP6Score(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>0</span>
                <span className="text-indigo-600">Weighted: {weightedP6.toFixed(1)} / 40</span>
                <span>40</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Grade Evaluation Card */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Result Card */}
          <div className={`rounded-3xl p-6 sm:p-7 border ${gradeInfo.bgColor} shadow-sm space-y-5 transition-all`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Official Grade Projection
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-black shadow-xs ${gradeInfo.badgeColor}`}>
                {gradeInfo.level}
              </span>
            </div>

            {/* Huge Grade Display */}
            <div className="text-center py-2 space-y-1">
              <div className="text-4xl sm:text-5xl font-black tracking-tight font-sans">
                {gradeInfo.grade}
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-700">
                Weighted Total: <span className="text-slate-900 font-black">{totalWeighted.toFixed(1)}</span> / 200
              </div>
              <div className="text-xs font-semibold text-slate-500">
                Overall Percentage: <span className="font-bold text-indigo-700">{percentage.toFixed(1)}%</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full h-3 bg-slate-200/80 rounded-full overflow-hidden p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${gradeInfo.barColor}`}
                  style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-500">
                <span>0</span>
                <span>85 (C)</span>
                <span>105 (B)</span>
                <span>125 (A)</span>
                <span>145 (A*)</span>
                <span>200</span>
              </div>
            </div>

            {/* Feedback Message */}
            <p className="text-xs font-medium leading-relaxed text-slate-700 bg-white/70 p-3 rounded-xl border border-black/5">
              {gradeInfo.message}
            </p>

            {/* Share and Copy Button */}
            <button
              onClick={handleShareResult}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Score Breakdown Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Copy Score Report & Grade Breakdown</span>
                </>
              )}
            </button>
          </div>

          {/* Cambridge Official Weighting Breakdown Card */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 text-xs text-slate-600 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Info className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>How Cambridge Scales Your Marks</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                <div className="font-bold text-slate-800 text-sm">25%</div>
                <div className="text-[10px] text-slate-500 font-medium">Paper 1/2 MCQ</div>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                <div className="font-bold text-slate-800 text-sm">50%</div>
                <div className="text-[10px] text-slate-500 font-medium">Paper 3/4 Theory</div>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                <div className="font-bold text-slate-800 text-sm">25%</div>
                <div className="text-[10px] text-slate-500 font-medium">Paper 5/6 ATP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
