import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IGCSE_TOPICS } from "../data/physicsData";
import { CHAPTER_SUPPLEMENTS } from "../data/textbookDetails";
import { Topic, SubTopic, Definition } from "../types";
import { CommonMistakeCard } from "./CommonMistakeCard";
import { YouTubeLessonWidget } from "./YouTubeLessonWidget";
import { RichTopicArticle } from "./topics/RichTopicArticle";
import { ProgressTracker } from "./ProgressTracker";
import { QuickQuiz } from "./QuickQuiz";
import { TopicFAQ } from "./TopicFAQ";
import { TopicComments } from "./TopicComments";
import { SectionPracticeProblems } from "./SectionPracticeProblems";
import {
  BookOpen,
  Bookmark,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Copy,
  Check,
  Edit3,
  Search,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Flame,
  Zap,
  Activity,
  Compass,
  Radio,
  Sun,
  FlaskConical,
  GraduationCap,
  Printer,
  HelpCircle,
  Cpu,
  Layers,
  ArrowRight,
  BookmarkCheck,
  Clock,
  Eye,
  Type,
  Palette,
  CheckSquare,
  Square,
  FileText,
} from "lucide-react";

interface StudentTextbookProps {
  searchQuery: string;
  bookmarks: string[];
  onToggleBookmark: (subTopicId: string) => void;
  onAskAI: (topicTitle: string, subTopicTitle: string) => void;
}

export type ReaderTheme = "dark" | "paper" | "midnight";
export type FontSize = "normal" | "large" | "xlarge";

export const StudentTextbook: React.FC<StudentTextbookProps> = ({
  searchQuery,
  bookmarks,
  onToggleBookmark,
  onAskAI,
}) => {
  const { topicId } = useParams<{ topicId?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Alias mapper for friendly topic routes (e.g. /topics/speed, /topics/graphs, /topics/newton)
  const aliasToTopicId: Record<string, string> = {
    "speed": "1.1",
    "velocity": "1.1",
    "acceleration": "1.1",
    "speed-velocity-acceleration": "1.1",
    "kinematics": "1.1",
    "graphs": "1.2",
    "motion-graphs": "1.2",
    "distance-time": "1.2",
    "velocity-time": "1.2",
    "distance-time-graphs": "1.2",
    "velocity-time-graphs": "1.2",
    "motion": "1.2",
    "newton": "1.3",
    "newtons-laws": "1.3",
    "newtons-laws-of-motion": "1.3",
    "dynamics": "1.3",
    "mass": "1.4",
    "weight": "1.4",
    "mass-and-weight": "1.4",
    "forces-mass-weight": "1.4",
    "mass-weight": "1.4",
    "forces": "1.5",
    "resultant-forces": "1.5",
    "free-body": "1.5",
    "free-body-diagrams": "1.5",
    "hookes-law": "1.5",
    "moments": "1.6",
    "equilibrium": "1.6",
    "moments-and-equilibrium": "1.6",
    "turning-effects": "1.6",
    "momentum": "1.7",
    "conservation-of-momentum": "1.7",
    "impulse": "1.7",
    "work": "1.8",
    "energy": "1.8",
    "power": "1.8",
    "work-energy-power": "1.8",
    "efficiency": "1.8",
    "thermal": "2.1",
    "heat": "2.1",
    "kinetic-theory": "2.1",
    "expansion": "2.2",
    "specific-heat": "2.2",
    "conduction": "2.3",
    "convection": "2.3",
    "radiation": "2.3",
    "waves": "3.1",
    "light": "3.2",
    "optics": "3.2",
    "reflection": "3.2",
    "refraction": "3.2",
    "lenses": "3.2",
    "electromagnetic-spectrum": "3.3",
    "em-spectrum": "3.3",
    "sound": "3.4",
    "magnetism": "4.1",
    "magnets": "4.1",
    "electricity": "4.2",
    "charge": "4.2",
    "current": "4.2",
    "circuits": "4.3",
    "electrical-safety": "4.4",
    "electromagnetism": "4.5",
    "motors": "4.5",
    "generators": "4.5",
    "transformers": "4.5",
    "nuclear": "5.1",
    "atom": "5.1",
    "nucleus": "5.1",
    "radioactivity": "5.2",
    "half-life": "5.2",
    "space": "6.1",
    "earth": "6.1",
    "solar-system": "6.1",
    "stars": "6.2",
    "universe": "6.2",
  };

  const resolvedTopicId = topicId ? (aliasToTopicId[topicId.toLowerCase()] || topicId) : "1.1";

  const [selectedUnitId, setSelectedUnitId] = useState<string>("unit-1");
  const [selectedSubTopicId, setSelectedSubTopicId] = useState<string>(resolvedTopicId);

  // Sync state when topicId param changes in URL
  useEffect(() => {
    if (resolvedTopicId) {
      // Find unit containing this subtopic
      for (const unit of IGCSE_TOPICS) {
        const found = unit.subTopics.find((s) => s.id === resolvedTopicId);
        if (found) {
          setSelectedUnitId(unit.id);
          setSelectedSubTopicId(resolvedTopicId);
          // Auto-expand that unit
          setExpandedUnits((prev) => ({ ...prev, [unit.id]: true }));
          break;
        }
      }
    }
  }, [resolvedTopicId]);
  const [copiedDefId, setCopiedDefId] = useState<string | null>(null);
  const [userNotes, setUserNotes] = useState<Record<string, string>>({});
  const [isEditingNote, setIsEditingNote] = useState<boolean>(false);
  const [currentNoteText, setCurrentNoteText] = useState<string>("");

  // Student Textbook reading preferences
  const [readerTheme, setReaderTheme] = useState<ReaderTheme>(() => {
    return (localStorage.getItem("igcse_reader_theme") as ReaderTheme) || "paper";
  });
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem("igcse_reader_fontsize") as FontSize) || "normal";
  });

  // Completed objectives tracking
  const [checkedObjectives, setCheckedObjectives] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("igcse_checked_objectives");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Concept check reveals
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Filtered subtopics when search query is active
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({
    "unit-1": true,
    "unit-2": true,
    "unit-3": true,
    "unit-4": true,
    "unit-5": true,
    "unit-6": true,
  });

  // Load saved notes
  useEffect(() => {
    try {
      const saved = localStorage.getItem("igcse_physics_user_notes");
      if (saved) {
        setUserNotes(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Update active note when subtopic changes
  useEffect(() => {
    setCurrentNoteText(userNotes[selectedSubTopicId] || "");
    setIsEditingNote(false);
    setRevealedAnswers({});
  }, [selectedSubTopicId, userNotes]);

  // Persist reader preferences
  useEffect(() => {
    localStorage.setItem("igcse_reader_theme", readerTheme);
  }, [readerTheme]);

  useEffect(() => {
    localStorage.setItem("igcse_reader_fontsize", fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("igcse_checked_objectives", JSON.stringify(checkedObjectives));
  }, [checkedObjectives]);

  const handleSaveNote = () => {
    const updated = { ...userNotes, [selectedSubTopicId]: currentNoteText };
    setUserNotes(updated);
    localStorage.setItem("igcse_physics_user_notes", JSON.stringify(updated));
    setIsEditingNote(false);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedDefId(id);
    setTimeout(() => setCopiedDefId(null), 2000);
  };

  const handleToggleObjective = (key: string) => {
    setCheckedObjectives((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleToggleRevealAnswer = (checkId: string) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [checkId]: !prev[checkId],
    }));
  };

  // Find active unit and subtopic
  const currentTopic = IGCSE_TOPICS.find((t) => t.id === selectedUnitId) || IGCSE_TOPICS[0];
  const currentSubTopic =
    currentTopic.subTopics.find((s) => s.id === selectedSubTopicId) || currentTopic.subTopics[0];

  // Get rich supplement data for active subtopic
  const supplement = CHAPTER_SUPPLEMENTS[selectedSubTopicId] || {
    learningObjectives: [
      `Master core principles and mathematical models of ${currentSubTopic.title}.`,
      `Apply relevant formulas and SI units accurately in structured calculation questions.`,
      `Explain physical phenomena using precise Cambridge mark scheme keywords.`,
      `Identify key sources of experimental error and precautions for Paper 6.`,
    ],
    workedExamples: [],
    realWorldApplications: [],
    conceptChecks: [],
    summaryChecklist: [
      `Review key definitions and physical laws for ${currentSubTopic.title}.`,
      `Ensure all relevant SI units are memorized and correctly converted.`,
      `Practice Paper 4 extended calculation and explanation questions.`,
    ],
  };

  // Find all subtopics in order to support Previous Chapter / Next Chapter
  const allSubTopicsList: { unitId: string; subTopic: SubTopic }[] = [];
  IGCSE_TOPICS.forEach((topic) => {
    topic.subTopics.forEach((st) => {
      allSubTopicsList.push({ unitId: topic.id, subTopic: st });
    });
  });

  const currentIndex = allSubTopicsList.findIndex((item) => item.subTopic.id === selectedSubTopicId);
  const prevChapter = currentIndex > 0 ? allSubTopicsList[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < allSubTopicsList.length - 1 ? allSubTopicsList[currentIndex + 1] : null;

  const navigateToChapter = (unitId: string, subTopicId: string) => {
    setSelectedUnitId(unitId);
    setSelectedSubTopicId(subTopicId);
    navigate(`/topics/${subTopicId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getUnitIcon = (unitId: string) => {
    switch (unitId) {
      case "unit-1":
        return <Activity className="w-4 h-4 text-cyan-400" />;
      case "unit-2":
        return <Flame className="w-4 h-4 text-rose-400" />;
      case "unit-3":
        return <Sun className="w-4 h-4 text-amber-400" />;
      case "unit-4":
        return <Zap className="w-4 h-4 text-yellow-400" />;
      case "unit-5":
        return <Radio className="w-4 h-4 text-purple-400" />;
      case "unit-6":
        return <Compass className="w-4 h-4 text-indigo-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
    }
  };

  // Theme styling configurations
  const themeContainerClass =
    readerTheme === "paper"
      ? "bg-white text-slate-900 border-slate-200"
      : readerTheme === "midnight"
      ? "bg-slate-950 text-slate-100 border-slate-900"
      : "bg-white text-slate-900 border-slate-200";

  const themeCardClass =
    readerTheme === "paper"
      ? "bg-slate-50/70 border-slate-200 shadow-2xs text-slate-800"
      : readerTheme === "midnight"
      ? "bg-zinc-950 border-zinc-900 shadow-md text-slate-200"
      : "bg-slate-50/70 border-slate-200 shadow-2xs text-slate-800";

  const themeHeadingClass =
    readerTheme === "paper"
      ? "text-slate-900 font-sans"
      : "text-slate-900 font-sans";

  const themeBodyTextClass =
    fontSize === "xlarge"
      ? "text-base sm:text-lg leading-relaxed"
      : fontSize === "large"
      ? "text-sm sm:text-base leading-relaxed"
      : "text-xs sm:text-sm leading-relaxed";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Sticky Progress Bar at the top of the chapter */}
      <ProgressTracker
        currentTopicId={currentSubTopic.id}
        currentTopicTitle={currentSubTopic.title}
        showCompleteButton={false}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Textbook Table of Contents (TOC) */}
      <aside className="lg:col-span-4 space-y-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs sticky top-20 max-h-[85vh] overflow-y-auto flex flex-col">
          {/* Table of Contents Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                <BookOpen className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Ahmed Badr's Textbook
                </h2>
                <p className="text-[11px] text-slate-500 font-medium">
                  Cambridge IGCSE & Edexcel Physics
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
              6 Units • 24 Ch.
            </span>
          </div>

          {/* Units Accordion List */}
          <div className="space-y-3 pt-3 flex-1 overflow-y-auto pr-1 no-scrollbar">
            {IGCSE_TOPICS.map((topic) => {
              const isSelectedUnit = topic.id === selectedUnitId;
              const isExpanded = expandedUnits[topic.id] ?? true;

              return (
                <div
                  key={topic.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
                >
                  {/* Unit Title Header */}
                  <button
                    onClick={() => {
                      setExpandedUnits((prev) => ({
                        ...prev,
                        [topic.id]: !prev[topic.id],
                      }));
                      setSelectedUnitId(topic.id);
                    }}
                    className={`w-full p-3.5 flex items-center justify-between text-left transition-colors ${
                      isSelectedUnit
                        ? "bg-slate-100 text-slate-900 font-bold"
                        : "hover:bg-slate-100/60 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="p-1.5 rounded-lg bg-white border border-slate-200 shrink-0">
                        {getUnitIcon(topic.id)}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold text-blue-700 block uppercase tracking-wider">
                          Unit {topic.unitNumber}
                        </span>
                        <span className="text-xs font-semibold leading-tight text-slate-900">
                          {topic.title}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Subtopics Chapters */}
                  {isExpanded && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      {topic.subTopics.map((subTopic) => {
                        const isSelectedSubTopic = subTopic.id === selectedSubTopicId;
                        const isBookmarked = bookmarks.includes(subTopic.id);

                        return (
                          <button
                            key={subTopic.id}
                            onClick={() => {
                              navigateToChapter(topic.id, subTopic.id);
                            }}
                            className={`w-full p-2.5 rounded-xl text-left text-xs flex items-center justify-between transition-all cursor-pointer ${
                              isSelectedSubTopic
                                ? "bg-blue-600 text-white font-bold shadow-xs"
                                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span
                                className={`font-mono text-[11px] ${
                                  isSelectedSubTopic ? "text-white font-bold" : "text-slate-400"
                                }`}
                              >
                                {subTopic.id}
                              </span>
                              <span className="truncate">{subTopic.title}</span>
                            </div>
                            {isBookmarked && (
                              <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0 ml-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* RIGHT COLUMN: Interactive Student Textbook Chapter View */}
      <main className="lg:col-span-8 space-y-6">
        {/* Textbook Chapter Container */}
        <article
          className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs transition-colors space-y-8"
        >
          {/* Top Chapter Meta & Reader Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono border border-blue-200">
                  Unit {currentTopic.unitNumber} • Chapter {currentSubTopic.id}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
                  {currentSubTopic.syllabusRef}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>8 min read</span>
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
                {currentSubTopic.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {currentSubTopic.summary}
              </p>
            </div>

            {/* Reader Controls Toolbar */}
            <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto flex-wrap">
              {/* Font Size Selector */}
              <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
                <button
                  onClick={() => setFontSize("normal")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    fontSize === "normal"
                      ? "bg-white text-blue-700 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Standard Font Size"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize("large")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    fontSize === "large"
                      ? "bg-white text-blue-700 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Large Font Size"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize("xlarge")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    fontSize === "xlarge"
                      ? "bg-white text-blue-700 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Extra Large Reader"
                >
                  A++
                </button>
              </div>

              {/* Bookmark Toggle */}
              <button
                onClick={() => onToggleBookmark(currentSubTopic.id)}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  bookmarks.includes(currentSubTopic.id)
                    ? "bg-amber-50 text-amber-800 border-amber-300 font-bold"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-100"
                }`}
                title="Bookmark this chapter"
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    bookmarks.includes(currentSubTopic.id) ? "fill-amber-500 text-amber-500" : ""
                  }`}
                />
              </button>

              {/* Print Chapter */}
              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
                title="Print Chapter / Save as PDF"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Ask AI Tutor */}
              <button
                onClick={() => onAskAI(currentTopic.title, currentSubTopic.title)}
                className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span className="hidden sm:inline">Ask AI Tutor</span>
              </button>
            </div>
          </div>

          {/* MAIN CHAPTER CONTENT BODY */}
          {["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8"].includes(currentSubTopic.id) ? (
            <div className="pt-2">
              <RichTopicArticle topicId={currentSubTopic.id} />
            </div>
          ) : (
            <>
              {/* SECTION 1: Chapter Learning Objectives Checklist */}
              {supplement.learningObjectives && supplement.learningObjectives.length > 0 && (
                <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      Chapter Learning Objectives (Syllabus Checkpoints)
                    </span>
                    <span className="text-[11px] text-blue-700 font-medium">
                      Click to mark as understood
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {supplement.learningObjectives.map((obj, idx) => {
                      const key = `${currentSubTopic.id}-obj-${idx}`;
                      const isChecked = !!checkedObjectives[key];
                      return (
                        <button
                          key={idx}
                          onClick={() => handleToggleObjective(key)}
                          className={`w-full p-3 rounded-xl text-left text-xs sm:text-sm flex items-start gap-3 transition-all cursor-pointer ${
                            isChecked
                              ? "bg-emerald-50 border border-emerald-300 text-emerald-950 font-medium"
                              : "bg-white hover:bg-slate-50 text-slate-800 border border-blue-100"
                          }`}
                        >
                          <span className="mt-0.5 shrink-0">
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-400" />
                            )}
                          </span>
                          <span className={`leading-relaxed ${isChecked ? "line-through text-slate-500" : ""}`}>
                            {obj}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SECTION 2: Official Cambridge & Edexcel Definitions */}
              {currentSubTopic.keyDefinitions && currentSubTopic.keyDefinitions.length > 0 && (
                <div className="space-y-4">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Word-for-Word Mark Scheme Definitions:
                  </span>
                  <div className="grid grid-cols-1 gap-3.5">
                    {currentSubTopic.keyDefinitions.map((def, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 space-y-2.5 relative group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm sm:text-base text-emerald-900">
                              {def.term}
                            </span>
                            {def.unit && (
                              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white text-emerald-800 border border-emerald-300 font-bold">
                                SI Unit: {def.unit}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => handleCopy(def.definition, `def-${idx}`)}
                            className="p-1.5 rounded-lg bg-white hover:bg-emerald-100 text-slate-600 hover:text-emerald-900 text-xs flex items-center gap-1 transition-colors border border-emerald-200 cursor-pointer shadow-2xs"
                            title="Copy definition"
                          >
                            {copiedDefId === `def-${idx}` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-[10px] text-emerald-700 font-bold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="text-[10px] hidden sm:inline">Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        <p className={`font-medium italic leading-relaxed text-slate-900 bg-white p-3 rounded-xl border border-emerald-200/60 ${themeBodyTextClass}`}>
                          "{def.definition}"
                        </p>

                        {def.keywords && (
                          <div className="flex items-center gap-1.5 flex-wrap pt-1 text-[11px]">
                            <span className="text-emerald-900 font-bold uppercase tracking-wider text-[10px]">
                              Key Mark Scheme Words:
                            </span>
                            {def.keywords.map((kw, kIdx) => (
                              <span
                                key={kIdx}
                                className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono text-[10px] font-semibold"
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

              {/* SECTION 3: Deep Pedagogical Theory & Core Concepts */}
              <div className="space-y-5">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  Comprehensive Theory & Detailed Mechanics:
                </span>

                <div className="space-y-4">
                  {currentSubTopic.coreConcepts.map((concept, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                        <span>{concept.heading}</span>
                      </h3>

                      <p className={`leading-relaxed text-slate-700 ${themeBodyTextClass}`}>
                        {concept.body}
                      </p>

                      {concept.bullets && concept.bullets.length > 0 && (
                        <ul className="space-y-2 pl-4 list-disc text-slate-700 text-xs sm:text-sm">
                          {concept.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 4: In-Depth Step-by-Step Worked Examples */}
              {supplement.workedExamples && supplement.workedExamples.length > 0 && (
                <div className="space-y-4">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-600" />
                    Textbook Worked Examples (Step-by-Step Calculations):
                  </span>

                  <div className="space-y-5">
                    {supplement.workedExamples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200 space-y-4"
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="text-sm sm:text-base font-bold text-amber-950 flex items-center gap-2">
                            <span>{ex.title}</span>
                          </h4>
                          {ex.difficulty && (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold uppercase tracking-wider">
                              {ex.difficulty} Level
                            </span>
                          )}
                        </div>

                        {/* Question Statement */}
                        <div className="p-4 rounded-xl bg-white border border-amber-200 text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed font-medium">
                          {ex.question}
                        </div>

                        {/* Given Data & Formula */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                            <span className="text-[11px] font-bold text-blue-700 block uppercase tracking-wider">
                              Given Data from Question:
                            </span>
                            <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                              {ex.givenData.map((g, gIdx) => (
                                <li key={gIdx}>{g}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                            <span className="text-[11px] font-bold text-emerald-700 block uppercase tracking-wider">
                              Governing Physics Formula:
                            </span>
                            <p className="font-mono font-bold text-emerald-800 text-xs sm:text-sm">
                              {ex.formulaUsed}
                            </p>
                          </div>
                        </div>

                        {/* Step-by-Step Solution */}
                        <div className="space-y-2">
                          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                            Full Step-by-Step Mathematical Derivation:
                          </span>
                          <div className="space-y-1.5">
                            {ex.stepByStepSolution.map((step, sIdx) => (
                              <div
                                key={sIdx}
                                className="p-3 rounded-xl bg-white border border-amber-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-mono font-medium"
                              >
                                {step}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Final Answer Banner */}
                        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs sm:text-sm font-bold text-emerald-900 whitespace-pre-line leading-relaxed">
                          Final Answer: {ex.finalAnswer}
                        </div>

                        {/* Examiner Margin Note */}
                        {ex.examinerNote && (
                          <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5 leading-relaxed">
                            <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="block text-blue-950 mb-0.5 font-bold">
                                Examiner Calculation Insight:
                              </strong>
                              <span>{ex.examinerNote}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 5: "Physics in the Real World" / Technology Spotlight */}
              {supplement.realWorldApplications && supplement.realWorldApplications.length > 0 && (
                <div className="space-y-4">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-600" />
                    Physics in the Real World (Engineering & Technology):
                  </span>

                  <div className="grid grid-cols-1 gap-4">
                    {supplement.realWorldApplications.map((app, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-200 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm sm:text-base font-bold text-emerald-950">
                            {app.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                            {app.technology}
                          </span>
                        </div>
                        <p className={`text-slate-700 leading-relaxed ${themeBodyTextClass}`}>
                          {app.description}
                        </p>
                        <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-900 font-medium">
                          <strong>Real-World Impact:</strong> {app.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 6: Practical Lab Investigation & Paper 6 Protocol */}
              {supplement.labInvestigation && (
                <div className="space-y-4">
                  <span className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-purple-600" />
                    Required Practical Investigation (Paper 6 Protocol):
                  </span>

                  <div className="p-6 rounded-2xl bg-purple-50/30 border border-purple-200 space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-purple-950">
                        {supplement.labInvestigation.title}
                      </h4>
                      <p className="text-xs text-slate-700 mt-1">
                        <strong>Objective:</strong> {supplement.labInvestigation.objective}
                      </p>
                    </div>

                    {/* Apparatus */}
                    <div className="p-3.5 rounded-xl bg-white border border-purple-200 space-y-1.5">
                      <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wider block">
                        Apparatus Checklist:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                        {supplement.labInvestigation.apparatus.map((app, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Variables */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-purple-200">
                        <span className="text-blue-700 font-bold block mb-1">Independent Variable</span>
                        <p className="text-slate-700">{supplement.labInvestigation.variables.independent}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-purple-200">
                        <span className="text-emerald-700 font-bold block mb-1">Dependent Variable</span>
                        <p className="text-slate-700">{supplement.labInvestigation.variables.dependent}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-purple-200">
                        <span className="text-amber-700 font-bold block mb-1">Controlled Variables</span>
                        <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                          {supplement.labInvestigation.variables.controlled.map((c, cIdx) => (
                            <li key={cIdx}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Method */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                        Standard Experimental Method:
                      </span>
                      {supplement.labInvestigation.procedure.map((p, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-2.5 rounded-xl bg-white border border-purple-200 text-xs text-slate-800"
                        >
                          {p}
                        </div>
                      ))}
                    </div>

                    {/* Key Observation & Safety */}
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                      <strong>Expected Result / Graph:</strong> {supplement.labInvestigation.keyObservation}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 7: Examiner Traps & Common Misconceptions */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Examiner Tips */}
                  {currentSubTopic.examTips && currentSubTopic.examTips.length > 0 && (
                    <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                      <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-emerald-600" />
                        Cambridge Examiner Tips:
                      </span>
                      <div className="space-y-2.5">
                        {currentSubTopic.examTips.map((tip, idx) => (
                          <div key={idx} className="text-xs text-emerald-950 space-y-0.5">
                            <strong className="block text-emerald-900 font-bold">{tip.title}</strong>
                            <p className="leading-relaxed text-slate-700">{tip.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Common Misconceptions */}
                  {currentSubTopic.commonMisconceptions &&
                    currentSubTopic.commonMisconceptions.length > 0 && (
                      <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-3">
                        <span className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-rose-600" />
                          Common Student Traps:
                        </span>
                        <ul className="space-y-2 text-xs text-rose-950">
                          {currentSubTopic.commonMisconceptions.map((mis, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-rose-600 font-bold shrink-0">⚠️</span>
                              <span className="leading-relaxed text-slate-700">{mis}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>

                {/* High-Yield Common Mistake Callout */}
                <CommonMistakeCard
                  title={`Exam Pitfall: ${currentSubTopic.title}`}
                  unitBadge={`Unit ${currentTopic.id}`}
                  mistake={
                    currentSubTopic.commonMisconceptions && currentSubTopic.commonMisconceptions.length > 0
                      ? currentSubTopic.commonMisconceptions[0]
                      : "Forgetting to convert units to SI standard (e.g. grams to kilograms, cm to meters) before substituting into formulas."
                  }
                  correction={
                    currentSubTopic.examTips && currentSubTopic.examTips.length > 0
                      ? currentSubTopic.examTips[0].content
                      : "Always check SI units before computing. Write out the formula, substitute given values, and double check units on the final answer."
                  }
                />

                {/* Classified Past Papers Direct Link Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-wrap items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300 font-bold shrink-0">
                      📂
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Classified Past Paper Questions & Mark Schemes
                      </h4>
                      <p className="text-xs text-indigo-200">
                        Practice all compiled Cambridge questions for Unit {currentTopic.id}: {currentTopic.title}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`/classified`}
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs"
                  >
                    <span>Open Classified Pack</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Chapter Video Walkthrough & Worked Solutions */}
                <YouTubeLessonWidget
                  title={`${currentSubTopic.title} - Video Explanation & Worked Solution`}
                  topicBadge={`Unit ${currentTopic.id}`}
                />
              </div>

              {/* SECTION 8: Interactive "Check Your Understanding" (Concept Checks) */}
              {supplement.conceptChecks && supplement.conceptChecks.length > 0 && (
                <div className="space-y-4">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600" />
                    Check Your Understanding (Interactive Concept Checks):
                  </span>

                  <div className="space-y-4">
                    {supplement.conceptChecks.map((check, idx) => {
                      const isRevealed = revealedAnswers[check.id];
                      return (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3"
                        >
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2">
                            <span className="p-1 rounded-lg bg-blue-100 text-blue-800 font-mono text-[10px] font-bold shrink-0 mt-0.5">
                              Q{idx + 1}
                            </span>
                            <span className="leading-relaxed">{check.question}</span>
                          </h4>

                          {check.options && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {check.options.map((opt, oIdx) => (
                                <div
                                  key={oIdx}
                                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-medium"
                                >
                                  {opt}
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="pt-2">
                            <button
                              onClick={() => handleToggleRevealAnswer(check.id)}
                              className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-blue-200 cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>
                                {isRevealed ? "Hide Solution" : "Reveal Answer & Marking Scheme"}
                              </span>
                            </button>

                            {isRevealed && (
                              <div className="mt-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-1.5 animate-in fade-in duration-200">
                                <span className="font-bold text-emerald-900 block">
                                  Correct Answer: {check.correctAnswer}
                                </span>
                                <p className="leading-relaxed text-slate-700">{check.explanation}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SECTION 9: Chapter Summary Checklist */}
              {supplement.summaryChecklist && supplement.summaryChecklist.length > 0 && (
                <div className="p-5 rounded-2xl bg-blue-50/30 border border-blue-200 space-y-3">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Chapter Key Takeaways & Exam Checklist:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {supplement.summaryChecklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* SECTION PRACTICE PROBLEMS & STEP-BY-STEP MARK SCHEME SOLUTIONS */}
          <SectionPracticeProblems
            topicId={currentSubTopic.id}
            topicTitle={`Section ${currentSubTopic.id}: ${currentSubTopic.title}`}
          />

          {/* INTERACTIVE IN-LESSON QUICK CHECK QUIZ (Connected to Leaderboard points) */}
          <QuickQuiz
            topicId={currentSubTopic.id}
            topicTitle={`Chapter ${currentSubTopic.id}: ${currentSubTopic.title}`}
          />

          {/* MARK TOPIC AS COMPLETE BUTTON & BADGE REWARD */}
          <ProgressTracker
            currentTopicId={currentSubTopic.id}
            currentTopicTitle={currentSubTopic.title}
            showCompleteButton={true}
          />

          {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
          <TopicFAQ topicId={currentSubTopic.id} />

          {/* 1. COMMENT & ASK MR. AHMED BADR SECTION (Directly after FAQ) */}
          <TopicComments
            topicId={currentSubTopic.id}
            topicTitle={`Chapter ${currentSubTopic.id}: ${currentSubTopic.title}`}
          />

          {/* SECTION 10: Student Margin Notes & Annotations */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-amber-600" />
                My Chapter Revision Notes & Sticky Annotations:
              </span>
              {!isEditingNote && (
                <button
                  onClick={() => setIsEditingNote(true)}
                  className="text-xs text-blue-700 hover:underline font-semibold cursor-pointer"
                >
                  {currentNoteText ? "Edit Note" : "+ Add Note"}
                </button>
              )}
            </div>

            {isEditingNote ? (
              <div className="space-y-2">
                <textarea
                  value={currentNoteText}
                  onChange={(e) => setCurrentNoteText(e.target.value)}
                  placeholder="Write your personal mnemonics, formula reminders, or difficult questions here... (auto-saved to your browser)"
                  rows={3}
                  className="w-full bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setIsEditingNote(false)}
                    className="px-3 py-1 rounded-lg bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveNote}
                    className="px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer"
                  >
                    Save Note
                  </button>
                </div>
              </div>
            ) : currentNoteText ? (
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                {currentNoteText}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">
                No personal notes added for Chapter {currentSubTopic.id} yet. Click "+ Add Note" to annotate.
              </p>
            )}
          </div>

          {/* SECTION 11: Chapter Pagination (Turn the Pages) */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
            {prevChapter ? (
              <button
                onClick={() => navigateToChapter(prevChapter.unitId, prevChapter.subTopic.id)}
                className="p-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold flex items-center gap-2 border border-slate-200 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-500 block">Previous Chapter</span>
                  <span>{prevChapter.subTopic.title}</span>
                </div>
              </button>
            ) : (
              <div></div>
            )}

            {nextChapter ? (
              <button
                onClick={() => navigateToChapter(nextChapter.unitId, nextChapter.subTopic.id)}
                className="p-3 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all ml-auto cursor-pointer"
              >
                <div className="text-right">
                  <span className="text-[10px] text-blue-100 block">Next Chapter</span>
                  <span>{nextChapter.subTopic.title}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </article>
      </main>
    </div>
  </div>
  );
};
