import React, { useState } from "react";
import {
  FileText,
  CheckCircle2,
  Download,
  Eye,
  Filter,
  Layers,
  BookOpen,
  HelpCircle,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Printer,
  Search,
  Award,
  X,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { CLASSIFIED_PAPERS_DATA, ClassifiedPaperPack } from "../data/classifiedPapersData";

export const ClassifiedPastPapers: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPack, setSelectedPack] = useState<ClassifiedPaperPack | null>(null);
  const [viewMode, setViewMode] = useState<"questions" | "markscheme" | null>(null);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  // Filter tabs
  const topicTabs = [
    { id: "all", label: "All Topics" },
    { id: "mechanics", label: "1. General Physics & Mechanics" },
    { id: "thermal", label: "2. Thermal Physics" },
    { id: "waves", label: "3. Waves & Light" },
    { id: "electricity", label: "4. Electricity & Magnetism" },
    { id: "nuclear", label: "5. Nuclear Physics" },
    { id: "space", label: "6. Space Physics" },
    { id: "paper6", label: "7. Paper 6 (ATP Practical)" },
  ];

  // Filtering logic
  const filteredPacks = CLASSIFIED_PAPERS_DATA.filter((pack) => {
    const matchesTopic = activeTopic === "all" || pack.topicId === activeTopic;
    const matchesSearch =
      searchQuery.trim() === "" ||
      pack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pack.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pack.subtopics.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTopic && matchesSearch;
  });

  const handleOpenModal = (pack: ClassifiedPaperPack, mode: "questions" | "markscheme") => {
    setSelectedPack(pack);
    setViewMode(mode);
    setActiveQuestionId(pack.featuredQuestions[0]?.id || null);
  };

  const handleCloseModal = () => {
    setSelectedPack(null);
    setViewMode(null);
    setActiveQuestionId(null);
  };

  return (
    <div
      id="classified-past-papers-module"
      className="classified-papers-section max-w-7xl mx-auto space-y-8 p-4 sm:p-6 lg:p-8"
      style={{ maxWidth: "1150px", margin: "20px auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* Header Banner */}
      <div className="text-center space-y-3 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-8 sm:p-10 rounded-3xl shadow-lg border border-indigo-500/20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Cambridge IGCSE 0625 / 0972 Classified Bank</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight" style={{ margin: "10px 0" }}>
          📂 Classified IGCSE Physics Past Papers
        </h2>
        <p className="text-sm sm:text-base text-indigo-100 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "15px" }}>
          Select a syllabus topic below to access categorized past paper questions, official mark schemes, model solutions, and printable PDF packages.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative pt-3">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-6.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subtopic (e.g., Hooke's Law, Snell's Law, Half-Life)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/10 text-white placeholder-indigo-200 text-xs sm:text-sm rounded-2xl border border-white/20 focus:outline-hidden focus:ring-2 focus:ring-cyan-400 backdrop-blur-md"
          />
        </div>
      </div>

      {/* Topic Filter Tabs */}
      <div
        className="topic-tabs flex gap-2.5 overflow-x-auto pb-3 border-b-2 border-slate-200 no-scrollbar"
        style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "15px", marginBottom: "25px", borderBottom: "2px solid #e9ecef" }}
      >
        {topicTabs.map((tab) => {
          const isActive = activeTopic === tab.id;
          return (
            <button
              key={tab.id}
              className={`tab-btn px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80"
              }`}
              style={{
                padding: "10px 18px",
                border: "none",
                background: isActive ? "#007bff" : "#e9ecef",
                color: isActive ? "white" : "#495057",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
              onClick={() => setActiveTopic(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Classified PDF Cards Grid Container */}
      <div
        id="papersGrid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}
      >
        {filteredPacks.map((pack) => (
          <div
            key={pack.id}
            className="paper-card bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            data-topic={pack.topicId}
            style={{
              background: "#ffffff",
              border: "1px solid #e0e0e0",
              borderRadius: "14px",
              padding: "22px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top Details */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase border ${pack.topicBadgeColor}`}
                  style={{ fontSize: "11px", fontWeight: "bold", padding: "4px 10px", borderRadius: "12px", textTransform: "uppercase" }}
                >
                  {pack.topicBadge}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  {pack.questionCount} Questions
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 leading-snug" style={{ margin: "10px 0 6px 0", color: "#212529" }}>
                {pack.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2" style={{ margin: "0 0 14px 0", color: "#6c757d", fontSize: "13px" }}>
                {pack.subtitle}
              </p>

              {/* Subtopic checklist preview */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                  Included Subtopics:
                </span>
                <ul className="text-[11px] text-slate-600 space-y-0.5">
                  {pack.subtopics.slice(0, 3).map((sub, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="truncate">{sub}</span>
                    </li>
                  ))}
                  {pack.subtopics.length > 3 && (
                    <li className="text-[10px] font-semibold text-blue-600 pl-3">
                      +{pack.subtopics.length - 3} more key syllabus areas
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Action Buttons: Questions PDF & Mark Scheme */}
            <div className="pt-5 mt-4 border-t border-slate-100 space-y-2">
              <div className="flex gap-2.5" style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleOpenModal(pack, "questions")}
                  className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    background: "#28a745",
                    color: "white",
                    padding: "9px",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FileText className="w-4 h-4" />
                  <span>📄 Questions PDF</span>
                </button>

                <button
                  onClick={() => handleOpenModal(pack, "markscheme")}
                  className="flex-1 text-center bg-cyan-700 hover:bg-cyan-800 text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    background: "#17a2b8",
                    color: "white",
                    padding: "9px",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>✔ Mark Scheme</span>
                </button>
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                <span>{pack.yearRange}</span>
                <span className="font-semibold text-slate-600">{pack.totalMarks} Total Marks</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredPacks.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No Classified Packs Found</h3>
          <p className="text-xs text-slate-500">
            No past paper packs matched your query "{searchQuery}". Try selecting "All Topics" or searching for a different keyword.
          </p>
          <button
            onClick={() => {
              setActiveTopic("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Interactive Modal: Questions & Mark Schemes View */}
      {selectedPack && viewMode && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${selectedPack.topicBadgeColor}`}>
                    {selectedPack.topicBadge}
                  </span>
                  <span className="text-xs text-indigo-300 font-semibold">
                    {viewMode === "questions" ? "Classified Questions Pack" : "Official Mark Scheme & Model Solutions"}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {selectedPack.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode(viewMode === "questions" ? "markscheme" : "questions")}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all flex items-center gap-1.5 border border-white/20"
                >
                  {viewMode === "questions" ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Switch to Mark Scheme</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Switch to Questions</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
              {/* Question Navigation Tabs */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Exam Questions in this Pack:</span>
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {selectedPack.featuredQuestions.length} Questions Available
                </span>
              </div>

              {/* Questions List */}
              <div className="space-y-5">
                {selectedPack.featuredQuestions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-800">{q.source}</span>
                        <span className="text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md">
                          {q.paperType}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                        [{q.marks} Marks]
                      </span>
                    </div>

                    {/* Question Content */}
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                        {q.questionText}
                      </p>
                      {q.diagramDescription && (
                        <div className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded-lg border border-slate-100">
                          📌 Diagram: {q.diagramDescription}
                        </div>
                      )}
                    </div>

                    {/* Mode Specific Render */}
                    {viewMode === "markscheme" ? (
                      <div className="space-y-3 pt-2 border-t border-slate-100">
                        <div className="bg-cyan-50/70 p-4 rounded-xl border border-cyan-200 space-y-2">
                          <span className="text-xs font-bold text-cyan-950 uppercase tracking-wide flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-700" />
                            Official Cambridge Marking Scheme & Rubrics:
                          </span>
                          <ul className="text-xs sm:text-sm text-cyan-950 space-y-1.5 pl-2 font-mono">
                            {q.markSchemePoints.map((point, pIdx) => (
                              <li key={pIdx} className="leading-relaxed">
                                • {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Model Step-by-Step Answer */}
                        <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200 space-y-1.5">
                          <span className="text-xs font-bold text-emerald-950 uppercase tracking-wide flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-emerald-700" />
                            Teacher Model Answer & Working:
                          </span>
                          <p className="text-xs sm:text-sm text-emerald-900 whitespace-pre-line leading-relaxed font-sans font-medium">
                            {q.modelAnswer}
                          </p>
                        </div>

                        {/* Examiner Comment */}
                        {q.examinerComment && (
                          <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                            <div>
                              <strong>Cambridge Examiner Insight: </strong>
                              <span>{q.examinerComment}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => setViewMode("markscheme")}
                          className="text-xs font-bold text-cyan-700 hover:text-cyan-900 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1"
                        >
                          <span>Reveal Mark Scheme & Solution</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-slate-500">
                <span>Printable PDF Worksheet & Mark Scheme Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Pack</span>
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
