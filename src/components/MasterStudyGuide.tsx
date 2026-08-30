import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MASTER_BOOKLET_DATA, BookletUnit, BookletChapter } from "../data/bookletData";
import {
  BookOpen,
  Printer,
  FileText,
  Sparkles,
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  Calculator,
  FlaskConical,
  GraduationCap,
  Copy,
  Check,
  Search,
  Filter,
  Languages,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  Minimize2,
  Maximize2,
  ArrowUp,
  Layers,
  CheckSquare,
  MessageCircle,
  Phone,
  ExternalLink,
} from "lucide-react";

interface MasterStudyGuideProps {
  searchQuery: string;
  onAskAI?: (topic: string, query: string) => void;
}

type ContentFilterType = "all" | "formulas" | "definitions" | "theory" | "problems" | "practicals";

export const MasterStudyGuide: React.FC<MasterStudyGuideProps> = ({
  searchQuery,
  onAskAI,
}) => {
  const { chapterId } = useParams<{ chapterId?: string }>();
  const navigate = useNavigate();

  const [selectedUnitId, setSelectedUnitId] = useState<string>("all");
  const [activeChapterId, setActiveChapterId] = useState<string | null>(chapterId || null);
  const [contentFilter, setContentFilter] = useState<ContentFilterType>("all");
  const [showArabicSubtitles, setShowArabicSubtitles] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [collapsedChapters, setCollapsedChapters] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (chapterId) {
      setActiveChapterId(chapterId);
      setCollapsedChapters((prev) => ({ ...prev, [chapterId]: false }));
      const timer = setTimeout(() => {
        const element = document.getElementById(`chapter-card-${chapterId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [chapterId]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleCollapse = (chId: string) => {
    setCollapsedChapters((prev) => ({
      ...prev,
      [chId]: !prev[chId],
    }));
  };

  const handleExpandAll = () => {
    setCollapsedChapters({});
  };

  const handleCollapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    MASTER_BOOKLET_DATA.forEach((unit) => {
      unit.chapters.forEach((ch) => {
        allCollapsed[ch.id] = true;
      });
    });
    setCollapsedChapters(allCollapsed);
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToChapter = (targetChapterId: string) => {
    setActiveChapterId(targetChapterId);
    navigate(`/booklet/${targetChapterId}`);
    setCollapsedChapters((prev) => ({ ...prev, [targetChapterId]: false }));
    const element = document.getElementById(`chapter-card-${targetChapterId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filter units and chapters
  const filteredUnits = useMemo(() => {
    return MASTER_BOOKLET_DATA.map((unit) => {
      if (selectedUnitId !== "all" && unit.unitId !== selectedUnitId) {
        return null;
      }
      
      const chapters = unit.chapters.filter((ch) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        const inTitle =
          ch.titleEn.toLowerCase().includes(q) ||
          ch.titleAr.toLowerCase().includes(q) ||
          ch.syllabusRef.toLowerCase().includes(q);
        const inOverview = ch.keyOverview.toLowerCase().includes(q);
        const inDefs = ch.mustKnowDefinitions.some(
          (d) =>
            d.term.toLowerCase().includes(q) ||
            d.definition.toLowerCase().includes(q) ||
            (d.markSchemeKeywords && d.markSchemeKeywords.some((k) => k.toLowerCase().includes(q)))
        );
        const inFormulas = ch.coreFormulas.some(
          (f) => f.name.toLowerCase().includes(q) || f.equation.toLowerCase().includes(q)
        );
        return inTitle || inOverview || inDefs || inFormulas;
      });

      if (chapters.length === 0 && searchQuery) return null;

      return {
        ...unit,
        chapters,
      };
    }).filter(Boolean) as BookletUnit[];
  }, [selectedUnitId, searchQuery]);

  // Overall Statistics
  const totalChaptersCount = useMemo(() => {
    return MASTER_BOOKLET_DATA.reduce((acc, u) => acc + u.chapters.length, 0);
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Top Banner - Clean White & Light Theme */}
      <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono border border-blue-200">
                Cambridge IGCSE & Edexcel Physics (0625 / 0972)
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center gap-1 border border-emerald-200">
                <GraduationCap className="w-3.5 h-3.5" />
                Curated by Ahmed Badr
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ahmed Badr's Physics Master Study Guide
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Welcome to Ahmed Badr's comprehensive physics learning suite covering all 6 blocks and 24 syllabus chapters. Includes core formulas with SI units, official Cambridge Mark Scheme definitions, detailed physical explanations, worked calculations, and Paper 6 laboratory investigations.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <div>
                  <span className="font-bold text-slate-900 block">6 Units</span>
                  <span className="text-slate-500 text-[11px]">24 Chapters</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-600" />
                <div>
                  <span className="font-bold text-slate-900 block">48+ Formulas</span>
                  <span className="text-slate-500 text-[11px]">With SI Units</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <div>
                  <span className="font-bold text-slate-900 block">Mark Scheme</span>
                  <span className="text-slate-500 text-[11px]">Exact Definitions</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-purple-600" />
                <div>
                  <span className="font-bold text-slate-900 block">Paper 6 Labs</span>
                  <span className="text-slate-500 text-[11px]">Variables & Errors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap lg:flex-col items-start sm:items-center lg:items-end gap-2.5 shrink-0">
            {/* Arabic Subtitles Toggle */}
            <button
              onClick={() => setShowArabicSubtitles(!showArabicSubtitles)}
              className={`px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all shadow-xs ${
                showArabicSubtitles
                  ? "bg-blue-600 text-white border-blue-600 font-bold"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
              title="Toggle bilingual Arabic subtitles"
            >
              <Languages className="w-4 h-4 text-blue-500" />
              <span>{showArabicSubtitles ? "English + Arabic Subtitles" : "English Only"}</span>
            </button>

            {/* Quick Expand / Collapse */}
            <div className="flex items-center bg-slate-50 rounded-xl border border-slate-200 p-0.5">
              <button
                onClick={handleExpandAll}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white flex items-center gap-1 transition-all"
                title="Expand all chapters"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand All</span>
              </button>
              <button
                onClick={handleCollapseAll}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white flex items-center gap-1 transition-all"
                title="Collapse all chapters"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Collapse</span>
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
              title="Print booklet or save as PDF"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print / PDF Export</span>
            </button>

            {/* WhatsApp Contact Button */}
            <a
              href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20have%20an%20IGCSE%20Physics%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-emerald-600/20"
              title="Contact Mr. Ahmed Badr on WhatsApp (KSA: +966 53 067 5155 | EG: +20 109 968 3837)"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp Support</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Section Focus Filter Tabs */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>Filter By Component:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar flex-wrap">
            <button
              onClick={() => setContentFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                contentFilter === "all"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Sections
            </button>
            <button
              onClick={() => setContentFilter("formulas")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                contentFilter === "formulas"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Formulas Only</span>
            </button>
            <button
              onClick={() => setContentFilter("definitions")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                contentFilter === "definitions"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Definitions Only</span>
            </button>
            <button
              onClick={() => setContentFilter("theory")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                contentFilter === "theory"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Theory & Rules</span>
            </button>
            <button
              onClick={() => setContentFilter("problems")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                contentFilter === "problems"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Worked Problems</span>
            </button>
            <button
              onClick={() => setContentFilter("practicals")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                contentFilter === "practicals"
                  ? "bg-purple-600 text-white shadow-xs"
                  : "bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100"
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Paper 6 Labs</span>
            </button>
          </div>
        </div>

        {/* Unit Selector Pills */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setSelectedUnitId("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedUnitId === "all"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Units (6 Blocks)
          </button>
          {MASTER_BOOKLET_DATA.map((unit) => (
            <button
              key={unit.unitId}
              onClick={() => setSelectedUnitId(unit.unitId)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedUnitId === unit.unitId
                  ? "bg-blue-600 text-white shadow-xs font-bold"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span className="font-bold">Unit {unit.unitNumber}:</span>
              <span>{unit.blockTitleEn.replace(/^Block \d+:\s*/, "")}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Sticky Chapter Directory (Left) + Detailed Content (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sticky Table of Contents Directory (Desktop) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-4 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1 no-scrollbar">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Chapter Directory</span>
              </h3>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                {totalChaptersCount} Chapters
              </span>
            </div>

            {/* Units & Chapters Index Tree */}
            <div className="space-y-3 text-xs">
              {MASTER_BOOKLET_DATA.map((unit) => {
                const isSelected = selectedUnitId === "all" || selectedUnitId === unit.unitId;
                if (!isSelected) return null;
                return (
                  <div key={unit.unitId} className="space-y-1">
                    <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider px-2 py-1 bg-slate-50 rounded-lg flex items-center justify-between">
                      <span>Unit {unit.unitNumber}: {unit.blockTitleEn.replace(/^Block \d+:\s*/, "")}</span>
                      <span className="text-[10px] text-slate-400 font-mono">({unit.chapters.length})</span>
                    </div>
                    <div className="space-y-0.5 pl-2">
                      {unit.chapters.map((ch) => {
                        const isActive = activeChapterId === ch.id;
                        return (
                          <button
                            key={ch.id}
                            onClick={() => scrollToChapter(ch.id)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between gap-2 transition-colors ${
                              isActive
                                ? "bg-blue-50 text-blue-700 font-bold border border-blue-200"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            <span className="truncate">{ch.titleEn}</span>
                            <span className="text-[10px] font-mono text-slate-400 shrink-0">
                              {ch.chapterNumber}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Detailed Chapter Content (Right Main Column) */}
        <main className="lg:col-span-8 space-y-8">
          {filteredUnits.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-lg text-slate-800">No chapters match your search</h3>
              <p className="text-sm text-slate-500">
                Try searching for different terms like "speed", "refraction", "Hooke", or "transformer".
              </p>
            </div>
          ) : (
            filteredUnits.map((unit) => (
              <section
                key={unit.unitId}
                className="space-y-6 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs"
              >
                {/* Unit Header Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-extrabold text-white text-sm shadow-xs">
                      {unit.unitNumber}
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {unit.blockTitleEn}
                      </h2>
                      {showArabicSubtitles && (
                        <p className="text-xs text-blue-600 font-semibold mt-0.5">
                          {unit.blockTitleAr}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 w-fit">
                    {unit.chapters.length} In-Depth Chapters
                  </span>
                </div>

                {/* Chapters in this Unit */}
                <div className="space-y-6">
                  {unit.chapters.map((ch) => {
                    const isCollapsed = !!collapsedChapters[ch.id];
                    return (
                      <article
                        key={ch.id}
                        id={`chapter-card-${ch.id}`}
                        className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 sm:p-6 space-y-5 transition-all hover:border-slate-300 chapter-card"
                      >
                        {/* Educator Print Header for this chapter */}
                        <div className="print-header-banner p-3 rounded-lg bg-slate-100 border border-slate-300 mb-4 hidden print:block">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-extrabold text-xs text-slate-900">Mr. Ahmed Badr - IGCSE Physics Educator</span>
                              <span className="text-[10px] text-slate-600 ml-2">Cambridge (0625/0972) & Edexcel (4PH1)</span>
                            </div>
                            <div className="text-[10px] text-slate-700 font-mono">
                              WhatsApp: +966 53 067 5155 (KSA) | +20 109 968 3837 (EG)
                            </div>
                          </div>
                        </div>

                        {/* Chapter Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-xs font-mono font-bold">
                                {ch.chapterNumber}
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium bg-slate-200/70 px-2 py-0.5 rounded">
                                {ch.syllabusRef}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                              {ch.titleEn}
                            </h3>
                            {showArabicSubtitles && (
                              <h4 className="text-xs font-semibold text-blue-600">
                                {ch.titleAr}
                              </h4>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 no-print">
                            {onAskAI && (
                              <button
                                onClick={() => onAskAI(ch.titleEn, `Explain the core concepts and exam tips for ${ch.titleEn}`)}
                                className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200 flex items-center gap-1 transition-colors"
                                title="Ask AI Tutor about this chapter"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                <span className="hidden sm:inline">Ask AI</span>
                              </button>
                            )}
                            <button
                              onClick={() => {
                                setCollapsedChapters((prev) => ({ ...prev, [ch.id]: false }));
                                setTimeout(() => window.print(), 100);
                              }}
                              className="p-1.5 px-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium flex items-center gap-1 transition-colors"
                              title="Print this chapter with Mr. Ahmed Badr educator header"
                            >
                              <Printer className="w-3.5 h-3.5 text-slate-500" />
                              <span className="hidden sm:inline">Print</span>
                            </button>
                            <button
                              onClick={() => toggleCollapse(ch.id)}
                              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 border border-slate-200 transition-colors"
                              title={isCollapsed ? "Expand Chapter Content" : "Collapse Chapter"}
                            >
                              {isCollapsed ? (
                                <ChevronDown className="w-4 h-4" />
                              ) : (
                                <ChevronUp className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>

                        {!isCollapsed && (
                          <div className="space-y-5 pt-1">
                            {/* SECTION: Conceptual Framework & Overview */}
                            {(contentFilter === "all" || contentFilter === "theory") && (
                              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2 text-xs sm:text-sm">
                                <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
                                  <BookOpen className="w-4 h-4 text-blue-600" />
                                  <span>Chapter Framework & Key Overview:</span>
                                </div>
                                <p className="text-slate-800 leading-relaxed font-normal">
                                  {ch.keyOverview}
                                </p>
                                {showArabicSubtitles && (
                                  <p className="text-slate-600 leading-relaxed pt-1.5 border-t border-blue-200/60 font-medium">
                                    {ch.keyOverviewAr}
                                  </p>
                                )}
                              </div>
                            )}

                            {/* SECTION 1: Core Mathematical Formulas */}
                            {(contentFilter === "all" || contentFilter === "formulas") &&
                              ch.coreFormulas && ch.coreFormulas.length > 0 && (
                              <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                                  <Calculator className="w-4 h-4 text-amber-600" />
                                  <span>Core Mathematical Formulas & SI Units:</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {ch.coreFormulas.map((form, fIdx) => (
                                    <div
                                      key={fIdx}
                                      className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2"
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-amber-900">
                                          {form.name}
                                        </span>
                                        <button
                                          onClick={() => handleCopy(form.equation, `form-${ch.id}-${fIdx}`)}
                                          className="p-1 rounded-md bg-white text-slate-500 hover:text-slate-900 border border-amber-200 text-[10px] flex items-center gap-1 shadow-2xs"
                                          title="Copy Formula"
                                        >
                                          {copiedId === `form-${ch.id}-${fIdx}` ? (
                                            <Check className="w-3 h-3 text-emerald-600" />
                                          ) : (
                                            <Copy className="w-3 h-3" />
                                          )}
                                        </button>
                                      </div>
                                      <div className="font-mono text-sm font-bold text-slate-900 bg-white p-2 rounded-lg text-center border border-amber-200 shadow-2xs">
                                        {form.equation}
                                      </div>
                                      {showArabicSubtitles && (
                                        <p className="text-xs text-slate-700">
                                          {form.meaningAr}
                                        </p>
                                      )}
                                      <p className="text-[11px] text-amber-800 font-mono font-medium">
                                        SI Units: {form.units}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* SECTION 2: Official Mark Scheme Definitions */}
                            {(contentFilter === "all" || contentFilter === "definitions") &&
                              ch.mustKnowDefinitions && ch.mustKnowDefinitions.length > 0 && (
                              <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                                  <span>Official Mark Scheme Exact Definitions:</span>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                  {ch.mustKnowDefinitions.map((def, dIdx) => (
                                    <div
                                      key={dIdx}
                                      className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-2"
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <span className="font-bold text-sm text-emerald-900">
                                            {def.term}
                                          </span>
                                          {showArabicSubtitles && (
                                            <span className="text-xs text-slate-500">
                                              ({def.termAr})
                                            </span>
                                          )}
                                        </div>
                                        <button
                                          onClick={() => handleCopy(def.definition, `def-${ch.id}-${dIdx}`)}
                                          className="p-1 rounded-md bg-white text-slate-500 hover:text-slate-900 border border-emerald-200 text-[10px] shadow-2xs"
                                          title="Copy Definition"
                                        >
                                          {copiedId === `def-${ch.id}-${dIdx}` ? (
                                            <Check className="w-3 h-3 text-emerald-600" />
                                          ) : (
                                            <Copy className="w-3 h-3" />
                                          )}
                                        </button>
                                      </div>
                                      <p className="text-xs sm:text-sm font-semibold italic text-slate-800 bg-white p-2.5 rounded-lg border border-emerald-200/60">
                                        "{def.definition}"
                                      </p>
                                      {showArabicSubtitles && (
                                        <p className="text-xs text-slate-700 font-medium">
                                          {def.definitionAr}
                                        </p>
                                      )}
                                      {def.markSchemeKeywords && (
                                        <div className="flex items-center gap-1.5 flex-wrap pt-1">
                                          <span className="text-[11px] font-bold text-emerald-900 uppercase">
                                            Keywords:
                                          </span>
                                          {def.markSchemeKeywords.map((kw, kIdx) => (
                                            <span
                                              key={kIdx}
                                              className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 text-[11px] font-mono font-medium"
                                            >
                                              {kw}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* SECTION 3: Detailed Pedagogical Theory & Concepts */}
                            {(contentFilter === "all" || contentFilter === "theory") &&
                              ch.detailedTheory && ch.detailedTheory.length > 0 && (
                              <div className="space-y-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                                  <Lightbulb className="w-4 h-4 text-blue-600" />
                                  <span>In-Depth Pedagogical Theory & Physical Principles:</span>
                                </div>
                                <div className="space-y-4">
                                  {ch.detailedTheory.map((theory, tIdx) => (
                                    <div
                                      key={tIdx}
                                      className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3"
                                    >
                                      <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                                        <span>{theory.topicHeading}</span>
                                        {showArabicSubtitles && (
                                          <span className="text-xs text-blue-600 font-normal">
                                            ({theory.topicHeadingAr})
                                          </span>
                                        )}
                                      </h4>

                                      {/* English bullet points */}
                                      <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                                        {theory.content.map((point, pIdx) => (
                                          <li key={pIdx}>{point}</li>
                                        ))}
                                      </ul>

                                      {/* Bilingual Arabic bullet points */}
                                      {showArabicSubtitles && (
                                        <div className="pt-2 border-t border-slate-100">
                                          <span className="text-[11px] font-bold text-slate-500 block mb-1">
                                            Arabic Explanation:
                                          </span>
                                          <ul className="space-y-1.5 pr-4 list-disc text-xs text-slate-600 leading-relaxed">
                                            {theory.contentAr.map((arPoint, arIdx) => (
                                              <li key={arIdx}>{arPoint}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {/* Examiner Warning Callout Box */}
                                      {theory.examinerWarning && (
                                        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2.5">
                                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                          <div>
                                            <strong className="block text-rose-800 font-bold mb-0.5">
                                              Cambridge Examiner Warning & Common Pitfall:
                                            </strong>
                                            <span className="text-rose-900 leading-relaxed font-normal">
                                              {theory.examinerWarning}
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* SECTION 4: Step-by-Step Worked Calculation Problems */}
                            {(contentFilter === "all" || contentFilter === "problems") &&
                              ch.workedProblems && ch.workedProblems.length > 0 && (
                              <div className="space-y-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider">
                                  <FileText className="w-4 h-4 text-sky-600" />
                                  <span>Step-by-Step Worked Numerical Problems:</span>
                                </div>
                                <div className="space-y-4">
                                  {ch.workedProblems.map((prob, pIdx) => (
                                    <div
                                      key={pIdx}
                                      className="p-4 sm:p-5 rounded-xl bg-sky-50/40 border border-sky-200/80 space-y-3"
                                    >
                                      <h4 className="text-sm font-bold text-sky-900">
                                        {prob.title}
                                      </h4>
                                      <div className="p-3 rounded-lg bg-white text-xs sm:text-sm text-slate-800 font-medium leading-relaxed border border-sky-100 shadow-2xs">
                                        {prob.question}
                                      </div>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                        <div className="p-2.5 rounded-lg bg-white border border-sky-200/60 text-slate-700 shadow-2xs">
                                          <strong className="text-blue-700 block mb-0.5">Given Quantities:</strong>
                                          <span>{prob.given}</span>
                                        </div>
                                        <div className="p-2.5 rounded-lg bg-white border border-sky-200/60 text-slate-700 shadow-2xs">
                                          <strong className="text-emerald-700 block mb-0.5">Formula Applied:</strong>
                                          <span className="font-mono text-emerald-800 font-bold">{prob.formula}</span>
                                        </div>
                                      </div>

                                      <div className="space-y-1">
                                        <span className="text-[11px] font-bold text-slate-600 uppercase">
                                          Step-by-Step Working:
                                        </span>
                                        {prob.solutionSteps.map((step, sIdx) => (
                                          <div
                                            key={sIdx}
                                            className="p-2 rounded-lg bg-white font-mono text-xs text-slate-800 border border-slate-200"
                                          >
                                            {step}
                                          </div>
                                        ))}
                                      </div>

                                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-900">
                                        Final Answer with SI Unit: {prob.finalAnswer}
                                      </div>

                                      {prob.teacherInsightAr && (
                                        <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 text-xs text-blue-900">
                                          <strong>Examiner & Teacher Insight:</strong> {prob.teacherInsightAr}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* SECTION 5: Paper 6 Practical Investigation Key */}
                            {(contentFilter === "all" || contentFilter === "practicals") && ch.paper6PracticalKey && (
                              <div className="p-4 sm:p-5 rounded-xl bg-purple-50/50 border border-purple-200 space-y-3">
                                <div className="flex items-center gap-2 text-xs font-bold text-purple-900 uppercase tracking-wider">
                                  <FlaskConical className="w-4 h-4 text-purple-600" />
                                  <span>Paper 6 Alternative to Practical Investigation:</span>
                                </div>
                                <h4 className="text-sm font-bold text-purple-950">
                                  {ch.paper6PracticalKey.experimentName}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                                  <div className="p-2.5 rounded-lg bg-white border border-purple-200 text-slate-700 shadow-2xs">
                                    <strong className="text-blue-700 block mb-0.5">Independent Variable:</strong>
                                    <span>{ch.paper6PracticalKey.independentVar}</span>
                                  </div>
                                  <div className="p-2.5 rounded-lg bg-white border border-purple-200 text-slate-700 shadow-2xs">
                                    <strong className="text-emerald-700 block mb-0.5">Dependent Variable:</strong>
                                    <span>{ch.paper6PracticalKey.dependentVar}</span>
                                  </div>
                                  <div className="p-2.5 rounded-lg bg-white border border-purple-200 text-slate-700 shadow-2xs">
                                    <strong className="text-amber-700 block mb-0.5">Control Variables:</strong>
                                    <span>{ch.paper6PracticalKey.controlVars.join(", ")}</span>
                                  </div>
                                </div>
                                <div className="space-y-1 pt-1">
                                  <strong className="text-xs text-purple-900 block">Precautions & Accuracy Safeguards:</strong>
                                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                                    {ch.paper6PracticalKey.precautionAndAccuracy.map((prec, pIdx) => (
                                      <li key={pIdx}>{prec}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            ))
          )}
        </main>
      </div>
    </div>
  );
};
