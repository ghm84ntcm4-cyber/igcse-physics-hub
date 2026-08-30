import React, { useState, useEffect, useRef } from "react";
import { IGCSE_TOPICS } from "../data/physicsData";
import { Topic, SubTopic, Definition } from "../types";
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
  Flame,
  Zap,
  Activity,
  Compass,
  Radio,
  Sun,
  FlaskConical,
  Download,
  Printer,
  Loader2,
  GraduationCap,
} from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface TopicViewerProps {
  searchQuery: string;
  bookmarks: string[];
  onToggleBookmark: (subTopicId: string) => void;
  onAskAI: (topicTitle: string, subTopicTitle: string) => void;
}

export const TopicViewer: React.FC<TopicViewerProps> = ({
  searchQuery,
  bookmarks,
  onToggleBookmark,
  onAskAI,
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>("unit-1");
  const [selectedSubTopicId, setSelectedSubTopicId] = useState<string>("1.1");
  const [copiedDefId, setCopiedDefId] = useState<string | null>(null);
  const [userNotes, setUserNotes] = useState<Record<string, string>>({});
  const [isEditingNote, setIsEditingNote] = useState<boolean>(false);
  const [currentNoteText, setCurrentNoteText] = useState<string>("");

  // Load saved notes from localStorage
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
  }, [selectedSubTopicId, userNotes]);

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

  const [isGeneratingPDF, setIsGeneratingPDF] = useState<boolean>(false);
  const noteCardRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!noteCardRef.current) return;
    setIsGeneratingPDF(true);
    try {
      const element = noteCardRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#0f172a",
        windowWidth: 1200,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add First Page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= pageHeight;

      // Add subsequent pages if note spans multiple A4 pages
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
        heightLeft -= pageHeight;
      }

      const safeTitle = `${currentSubTopic.id}_${currentSubTopic.title}`.replace(/[^a-zA-Z0-9]/g, "_");
      pdf.save(`IGCSE_Physics_Notes_${safeTitle}_Mr_Ahmed_Badr.pdf`);
    } catch (err) {
      console.error("PDF generation error:", err);
      window.print();
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const currentTopic = IGCSE_TOPICS.find((t) => t.id === selectedUnitId) || IGCSE_TOPICS[0];
  const currentSubTopic =
    currentTopic.subTopics.find((s) => s.id === selectedSubTopicId) || currentTopic.subTopics[0];

  const getUnitIcon = (unitId: string) => {
    switch (unitId) {
      case "unit-1":
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case "unit-2":
        return <Flame className="w-5 h-5 text-rose-400" />;
      case "unit-3":
        return <Sun className="w-5 h-5 text-amber-400" />;
      case "unit-4":
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case "unit-5":
        return <Radio className="w-5 h-5 text-purple-400" />;
      case "unit-6":
        return <Compass className="w-5 h-5 text-indigo-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Unit Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {IGCSE_TOPICS.map((topic) => {
          const isSelected = topic.id === selectedUnitId;
          const bookmarkedInTopic = topic.subTopics.some((st) => bookmarks.includes(st.id));

          return (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedUnitId(topic.id);
                setSelectedSubTopicId(topic.subTopics[0].id);
              }}
              className={`p-3.5 rounded-2xl text-left border transition-all relative flex flex-col justify-between ${
                isSelected
                  ? "bg-slate-800/95 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/50"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                    {getUnitIcon(topic.id)}
                  </span>
                  {bookmarkedInTopic && (
                    <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  )}
                </div>
                <h3 className="text-xs font-bold text-white line-clamp-2 leading-tight">
                  {topic.title}
                </h3>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 block">
                {topic.subTopics.length} Subtopics
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Revision Viewer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Subtopic Navigation Drawer */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 h-fit">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {currentTopic.title}
            </span>
            <span className="text-[11px] text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Syllabus 2023-2025
            </span>
          </div>

          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {currentTopic.subTopics.map((st) => {
              const isSubSelected = st.id === selectedSubTopicId;
              const isBookmarked = bookmarks.includes(st.id);
              const hasNote = Boolean(userNotes[st.id]);

              return (
                <button
                  key={st.id}
                  onClick={() => setSelectedSubTopicId(st.id)}
                  className={`w-full p-3 rounded-xl text-left text-xs font-medium flex items-center justify-between transition-all ${
                    isSubSelected
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span
                      className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                        isSubSelected ? "bg-slate-950/20 text-slate-900 font-bold" : "bg-slate-800 text-cyan-400"
                      }`}
                    >
                      {st.id}
                    </span>
                    <span className="truncate">{st.title}</span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {hasNote && (
                      <Edit3 className={`w-3 h-3 ${isSubSelected ? "text-slate-950" : "text-slate-400"}`} />
                    )}
                    {isBookmarked && (
                      <Bookmark className={`w-3 h-3 ${isSubSelected ? "text-slate-950 fill-slate-950" : "text-amber-400 fill-amber-400"}`} />
                    )}
                    <ChevronRight className={`w-3.5 h-3.5 ${isSubSelected ? "text-slate-950" : "text-slate-500"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onAskAI(currentTopic.title, currentSubTopic.title)}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all mt-3"
          >
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>Ask AI Tutor About This Section</span>
          </button>
        </div>

        {/* Right Column: Detailed Subtopic Notes */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Lesson Content Card (Printable / PDF exportable container) */}
          <div
            ref={noteCardRef}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 text-slate-100"
          >
            {/* Custom Educator Header (Rendered on Notes, PDF Exports & Prints) */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-400/30 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Mr. Ahmed Badr - IGCSE Physics Educator
                  </span>
                  <span className="text-[10px] text-cyan-300 font-mono hidden sm:inline">
                    Cambridge (0625/0972) & Edexcel (4PH1)
                  </span>
                </div>
                <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Physics Master Study Notes • Grade 9 / A* Syllabus Guide
                </h2>
              </div>
              <div className="text-left sm:text-right text-[11px] text-slate-300 font-mono space-y-0.5 border-t sm:border-t-0 pt-1.5 sm:pt-0 border-slate-800">
                <div className="font-semibold text-emerald-400 flex items-center sm:justify-end gap-1">
                  <span>WhatsApp:</span>
                  <span className="text-white">+966 53 067 5155 (KSA)</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-white">+20 109 968 3837 (EG)</span>
                </div>
                <div className="text-slate-400 text-[10px]">
                  Ahmed Badr Physics Hub • Certified Curriculum Resources
                </div>
              </div>
            </div>

            {/* Header: Title, Syllabus Ref, Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[11px] font-mono font-bold">
                    Section {currentSubTopic.id}
                  </span>
                  <span className="text-xs text-slate-400">
                    {currentTopic.title}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {currentSubTopic.title}
                </h1>
              </div>

              {/* Action Buttons: PDF Export, Print, Bookmark, and AI */}
              <div className="flex items-center gap-2 shrink-0 flex-wrap no-print">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPDF}
                  className="p-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/50 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-emerald-900/30 disabled:opacity-50"
                  title="Download physics notes as PDF with custom educator header"
                >
                  {isGeneratingPDF ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Exporting...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF Note</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="p-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  title="Print note"
                >
                  <Printer className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Print</span>
                </button>

                <button
                  onClick={() => onToggleBookmark(currentSubTopic.id)}
                  className={`p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                    bookmarks.includes(currentSubTopic.id)
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                      : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
                  }`}
                  title="Bookmark for quick revision"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      bookmarks.includes(currentSubTopic.id) ? "fill-amber-400 text-amber-400" : ""
                    }`}
                  />
                  <span>
                    {bookmarks.includes(currentSubTopic.id) ? "Saved" : "Save"}
                  </span>
                </button>

                <button
                  onClick={() => onAskAI(currentTopic.title, currentSubTopic.title)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">AI Explain</span>
                </button>
              </div>
            </div>

            {/* Official Definitions Card */}
            {currentSubTopic.keyDefinitions && currentSubTopic.keyDefinitions.length > 0 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  Official Exam Definitions (Word-for-Word Mark Scheme Standard):
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {currentSubTopic.keyDefinitions.map((def, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 space-y-2 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white font-mono">
                          {def.term}
                        </span>
                        <button
                          onClick={() => handleCopy(def.definition, `${currentSubTopic.id}-${idx}`)}
                          className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 px-2 py-1 rounded bg-slate-800/80 border border-slate-700"
                        >
                          {copiedDefId === `${currentSubTopic.id}-${idx}` ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400 font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {def.definition}
                      </p>
                      {def.keywords && def.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          <span className="text-[10px] text-slate-400 font-medium mr-1">
                            Key scoring terms:
                          </span>
                          {def.keywords.map((kw, kidx) => (
                            <span
                              key={kidx}
                              className="px-1.5 py-0.2 text-[10px] rounded bg-cyan-500/10 text-cyan-300 font-mono"
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

            {/* Core Concepts Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Key Syllabus Concepts:
              </span>
              <div className="space-y-4">
                {currentSubTopic.coreConcepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
                      <span>{concept.heading}</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{concept.body}</p>
                    {concept.bullets && concept.bullets.length > 0 && (
                      <ul className="space-y-1 pl-4 list-disc text-slate-400 text-xs">
                        {concept.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Examiner Tips & Paper 6 Insights */}
            {currentSubTopic.examTips && currentSubTopic.examTips.length > 0 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  Cambridge Examiner Tips & Insights:
                </span>
                <div className="space-y-2">
                  {currentSubTopic.examTips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-emerald-300 mb-0.5">{tip.title}</strong>
                        <span>{tip.content}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Pitfalls / Misconceptions */}
            {currentSubTopic.commonMisconceptions && currentSubTopic.commonMisconceptions.length > 0 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Common Misconceptions (Frequent Grade-Dropping Traps):
                </span>
                <div className="space-y-2">
                  {currentSubTopic.commonMisconceptions.map((mistake, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200 leading-relaxed flex items-start gap-2.5"
                    >
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{mistake}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Paper 6 Practical Tips if present */}
            {currentSubTopic.paper6Notes && currentSubTopic.paper6Notes.length > 0 && (
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FlaskConical className="w-4 h-4" />
                  Paper 6 Alternative to Practical Notes:
                </span>
                <div className="space-y-2">
                  {currentSubTopic.paper6Notes.map((note, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-amber-400 shrink-0 font-bold">•</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Personal Sticky Notes Section */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                  My Personal Sticky Notes ({currentSubTopic.title}):
                </span>
                {!isEditingNote && (
                  <button
                    onClick={() => setIsEditingNote(true)}
                    className="text-xs text-cyan-400 hover:underline"
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
                    placeholder="Write your personal summary, reminders, or mnemonic tricks..."
                    rows={3}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg p-2.5 focus:outline-none focus:ring-1 focus:ring-cyan-500 placeholder-slate-500"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsEditingNote(false)}
                      className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveNote}
                      className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400"
                    >
                      Save Note
                    </button>
                  </div>
                </div>
              ) : currentNoteText ? (
                <p className="text-xs text-amber-200/90 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 leading-relaxed font-sans">
                  {currentNoteText}
                </p>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  No personal notes added yet. Click &ldquo;+ Add Note&rdquo; to jot down key takeaways.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
