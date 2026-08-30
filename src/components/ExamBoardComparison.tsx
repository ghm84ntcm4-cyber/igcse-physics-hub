import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  Layers,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface ComparisonRow {
  id: string;
  topic: string;
  unit: string;
  cambridge: string;
  edexcel: string;
  status: "same" | "diff";
  details?: string;
}

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    id: "1",
    topic: "Speed, Velocity & Acceleration",
    unit: "Unit 1: Mechanics",
    cambridge: "✅ Included (Vectors vs Scalars, Equations of Motion)",
    edexcel: "✅ Included (Exact same formulas & definitions)",
    status: "same",
    details: "Identical formulas: v = s/t and a = (v - u)/t.",
  },
  {
    id: "2",
    topic: "Motion Graphs (d-t & v-t Graphs)",
    unit: "Unit 1: Mechanics",
    cambridge: "✅ Included (Gradient = speed/accel, Area = distance)",
    edexcel: "✅ Included (Gradient & Area interpretation identical)",
    status: "same",
    details: "Terminal velocity calculations and curved graphs are tested in both boards.",
  },
  {
    id: "3",
    topic: "Newton's Laws & Resultant Forces",
    unit: "Unit 1: Mechanics",
    cambridge: "✅ Included (F = ma, balanced vs unbalanced)",
    edexcel: "✅ Included (F = ma, Hooke's Law F = kx)",
    status: "same",
  },
  {
    id: "4",
    topic: "Momentum & Impulse",
    unit: "Unit 1: Mechanics",
    cambridge: "✅ Core + Extended (Impulse = FΔt = Δp)",
    edexcel: "✅ Higher Tier Emphasis (Collision & explosions)",
    status: "diff",
    details: "Cambridge tests impulse directly as FΔt = Δp in Paper 4; Edexcel embeds momentum safety in Paper 2P.",
  },
  {
    id: "5",
    topic: "Astrophysics & Space Physics",
    unit: "Unit 6: Space Physics",
    cambridge: "✅ Full Dedicated Topic (Unit 6: Solar System, Stellar Evolution, Redshift, Hubble's Law)",
    edexcel: "⚠️ Shorter Treatment (Basic planetary orbital speed v = 2πr/T)",
    status: "diff",
    details: "Cambridge added explicit 2023+ syllabus questions on Cosmic Microwave Background and Hubble Constant.",
  },
  {
    id: "6",
    topic: "Ultrasound & Infrasound Applications",
    unit: "Unit 3: Waves",
    cambridge: "⚪ Mentioned as >20 kHz frequency threshold only",
    edexcel: "✅ Detailed Medical & Sonar Echo Sounding calculations",
    status: "diff",
    details: "Edexcel frequently tests echo depth equation: d = (v × t) / 2 in clinical scanning scenarios.",
  },
  {
    id: "7",
    topic: "Mains Electricity, Domestic Safety & Fuses",
    unit: "Unit 4: Electricity",
    cambridge: "⚪ Brief mention in safe usage & circuit breakers",
    edexcel: "✅ Detailed Topic (Live, Neutral, Earth wires, Double insulation, Fuse ratings)",
    status: "diff",
    details: "Edexcel places heavy emphasis on wire color codes (Brown=Live, Blue=Neutral, Green/Yellow=Earth).",
  },
  {
    id: "8",
    topic: "Required Practical Papers (Paper 6 vs Paper 2P)",
    unit: "Practical Skills",
    cambridge: "Alternative to Practical (Paper 6 / 40 Marks / 20% weight)",
    edexcel: "Practical skills embedded inside Paper 1P & Paper 2P written exams",
    status: "diff",
    details: "Cambridge has a dedicated standalone 1-hour laboratory paper; Edexcel assesses experiment design questions inside theory papers.",
  },
  {
    id: "9",
    topic: "Radioactivity & Half-Life Calculations",
    unit: "Unit 5: Nuclear",
    cambridge: "✅ Included (Alpha, Beta, Gamma, Decay equations)",
    edexcel: "✅ Included (Identical background count & half-life graphs)",
    status: "same",
  },
  {
    id: "10",
    topic: "Nuclear Fission vs Nuclear Fusion",
    unit: "Unit 5: Nuclear",
    cambridge: "✅ Included (Extended syllabus uranium splitting & stellar fusion)",
    edexcel: "✅ Included (Detailed moderator, control rods & coolant function)",
    status: "diff",
    details: "Edexcel asks detailed structural questions on nuclear reactor components (Boron rods, Graphite moderator).",
  },
  {
    id: "11",
    topic: "Specific Heat Capacity & Latent Heat",
    unit: "Unit 2: Thermal",
    cambridge: "✅ Extended Syllabus (ΔE = mcΔT & ΔE = mL)",
    edexcel: "✅ Required Calculations (Specific heat experiments)",
    status: "same",
  },
  {
    id: "12",
    topic: "Electromagnetism & The Motor Effect",
    unit: "Unit 4: Magnetism",
    cambridge: "✅ Fleming's Left-Hand Rule & Transformer equations",
    edexcel: "✅ Fleming's Left-Hand Rule, Loudspeakers & Microphones",
    status: "same",
  },
];

export const ExamBoardComparison: React.FC = () => {
  const [filterMode, setFilterMode] = useState<"all" | "diff" | "same">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = COMPARISON_DATA.filter((item) => {
    if (filterMode === "diff" && item.status !== "diff") return false;
    if (filterMode === "same" && item.status !== "same") return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.topic.toLowerCase().includes(q) ||
        item.unit.toLowerCase().includes(q) ||
        item.cambridge.toLowerCase().includes(q) ||
        item.edexcel.toLowerCase().includes(q) ||
        (item.details && item.details.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const diffCount = COMPARISON_DATA.filter((i) => i.status === "diff").length;

  return (
    <div id="exam-comparison" className="max-w-5xl mx-auto space-y-8 pb-12 font-sans">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
          <Layers className="w-3.5 h-3.5" />
          <span>Syllabus Alignment & Cross-Board Reference</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          📋 Cambridge vs Edexcel: What's the Difference?
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Not sure which syllabus you are studying or whether your notes apply to both? Explore the exact topic overlaps and differences between Cambridge IGCSE (0625 / 0972) and Pearson Edexcel International GCSE (4PH1).
        </p>
      </div>

      {/* Quick Summary Cards of Both Boards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cambridge Card */}
        <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold border border-blue-200">
              Cambridge International
            </span>
            <span className="font-mono text-xs font-bold text-slate-500">Code: 0625 (A*–G) / 0972 (9–1)</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900">Cambridge IGCSE Physics</h2>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-700 font-bold">•</span>
              <span><strong>Paper 2:</strong> Multiple Choice (40 marks, 30% weight)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-700 font-bold">•</span>
              <span><strong>Paper 4:</strong> Extended Theory (80 marks, 50% weight)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-700 font-bold">•</span>
              <span><strong>Paper 6:</strong> Alternative to Practical (40 marks, 20% weight)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-700 font-bold">•</span>
              <span><strong>Features:</strong> Comprehensive Space Physics unit, dedicated Paper 6 practical exam.</span>
            </li>
          </ul>
        </div>

        {/* Edexcel Card */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200">
              Pearson Edexcel
            </span>
            <span className="font-mono text-xs font-bold text-slate-500">Code: 4PH1 (9–1)</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900">Edexcel International GCSE</h2>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold">•</span>
              <span><strong>Paper 1P:</strong> Core + Extended (110 marks, 61.1% weight, 2 hrs)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold">•</span>
              <span><strong>Paper 2P:</strong> Higher Tier Only (70 marks, 38.9% weight, 1 hr 15 mins)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold">•</span>
              <span><strong>Practical:</strong> Assessed within written papers 1P & 2P (no separate Paper 6).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-700 font-bold">•</span>
              <span><strong>Features:</strong> Extra detail on Ultrasound, Mains Safety, and Nuclear Reactors.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Filter & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Filter Buttons */}
          <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
            <button
              onClick={() => setFilterMode("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterMode === "all"
                  ? "bg-blue-900 text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              All Topics ({COMPARISON_DATA.length})
            </button>
            <button
              onClick={() => setFilterMode("diff")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                filterMode === "diff"
                  ? "bg-amber-500 text-slate-950 shadow-xs"
                  : "bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200"
              }`}
            >
              <span>⚠️ Key Differences Only</span>
              <span className="px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-950 font-extrabold text-[10px]">
                {diffCount}
              </span>
            </button>
            <button
              onClick={() => setFilterMode("same")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterMode === "same"
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200"
              }`}
            >
              Identical Overlaps Only
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search syllabus topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="py-3.5 px-4 sm:px-6 font-bold text-xs uppercase tracking-wider">Topic & Area</th>
                <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider text-blue-300">
                  Cambridge (0625 / 0972)
                </th>
                <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider text-emerald-300">
                  Edexcel (4PH1)
                </th>
                <th className="py-3.5 px-4 text-center font-bold text-xs uppercase tracking-wider">Alignment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row) => {
                const isDiff = row.status === "diff";

                return (
                  <tr
                    key={row.id}
                    className={`transition-colors ${
                      isDiff ? "bg-amber-50/40 hover:bg-amber-50/80" : "hover:bg-slate-50"
                    }`}
                  >
                    {/* Topic Name */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-slate-900">{row.topic}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{row.unit}</div>
                      {row.details && (
                        <div className="text-[11px] text-slate-600 mt-1 bg-white/80 p-1.5 rounded-lg border border-slate-200">
                          💡 <em>{row.details}</em>
                        </div>
                      )}
                    </td>

                    {/* Cambridge Column */}
                    <td className="py-4 px-4 text-slate-700 font-medium text-xs leading-relaxed">
                      {row.cambridge}
                    </td>

                    {/* Edexcel Column */}
                    <td className="py-4 px-4 text-slate-700 font-medium text-xs leading-relaxed">
                      {row.edexcel}
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-4 text-center shrink-0">
                      {isDiff ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-[10px] border border-amber-300">
                          <AlertCircle className="w-3 h-3" />
                          <span>Difference</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Identical</span>
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}

              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-slate-500 text-xs">
                    No topics matched your search filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom CTA for Textbook Notes */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <strong className="text-base sm:text-lg font-bold block">
            Ready to Study with Complete Syllabus Notes?
          </strong>
          <p className="text-xs sm:text-sm text-blue-100">
            Our notes and worked examples cover 100% of both Cambridge & Pearson Edexcel specifications.
          </p>
        </div>
        <Link
          to="/topics"
          className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <span>Explore All Topics</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
