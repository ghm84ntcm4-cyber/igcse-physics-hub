import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./components/HomePage";
import { TopicDirectory } from "./components/TopicDirectory";
import { MasterStudyGuide } from "./components/MasterStudyGuide";
import { StudentTextbook } from "./components/StudentTextbook";
import { FormulaSheet } from "./components/FormulaSheet";
import { InteractiveSimulators } from "./components/InteractiveSimulators";
import { QuizBank } from "./components/QuizBank";
import { FlashcardReview } from "./components/FlashcardReview";
import { Paper6Guide } from "./components/Paper6Guide";
import { WorksheetGenerator } from "./components/WorksheetGenerator";
import { AITutorModal } from "./components/AITutorModal";
import { BookmarksModal } from "./components/BookmarksModal";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { AboutTeacherSection } from "./components/AboutTeacherSection";
import { GradeCalculator } from "./components/GradeCalculator";
import { YouTubeLessonWidget } from "./components/YouTubeLessonWidget";
import { ExamPitfallsSection } from "./components/CommonMistakeCard";
import { ClassifiedPastPapers } from "./components/ClassifiedPastPapers";
import { StudyPlanner } from "./components/StudyPlanner";
import { ExamBoardComparison } from "./components/ExamBoardComparison";
import { Leaderboard } from "./components/Leaderboard";
import { MyProgress } from "./components/MyProgress";
import { CertificateGenerator } from "./components/CertificateGenerator";
import { PWAInstallBanner } from "./components/PWAInstallBanner";
import { MessageCircle, ExternalLink } from "lucide-react";

export default function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("igcse_physics_bookmarks");
      return saved ? JSON.parse(saved) : ["1.2", "3.2", "4.3"];
    } catch {
      return ["1.2", "3.2", "4.3"];
    }
  });

  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState<boolean>(false);
  const [aiContextTopic, setAiContextTopic] = useState<string | undefined>();
  const [aiContextSubTopic, setAiContextSubTopic] = useState<string | undefined>();

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem("igcse_physics_bookmarks", JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  const handleToggleBookmark = (subTopicId: string) => {
    setBookmarks((prev) =>
      prev.includes(subTopicId)
        ? prev.filter((id) => id !== subTopicId)
        : [...prev, subTopicId]
    );
  };

  const handleOpenAITutorWithContext = (topicTitle: string, subTopicTitle: string) => {
    setAiContextTopic(topicTitle);
    setAiContextSubTopic(subTopicTitle);
    setIsAITutorOpen(true);
  };

  const handleOpenGeneralAITutor = () => {
    setAiContextTopic(undefined);
    setAiContextSubTopic(undefined);
    setIsAITutorOpen(true);
  };

  const handleSelectBookmarkedSubTopic = (topicId: string, subTopicId: string) => {
    navigate(`/topics/${subTopicId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      <ScrollToTop />

      {/* Top Sticky Navigation Bar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        bookmarkCount={bookmarks.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenAITutor={handleOpenGeneralAITutor}
      />

      {/* Main Content Area with Breadcrumbs and Routed Views */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <Breadcrumbs />

        <Routes>
          {/* Main Dashboard / Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Curriculum Directory */}
          <Route path="/directory" element={<TopicDirectory />} />

          {/* Dedicated Topic & Chapter Pages */}
          <Route
            path="/topics"
            element={
              <StudentTextbook
                searchQuery={searchQuery}
                bookmarks={bookmarks}
                onToggleBookmark={handleToggleBookmark}
                onAskAI={handleOpenAITutorWithContext}
              />
            }
          />
          <Route
            path="/topics/:topicId"
            element={
              <StudentTextbook
                searchQuery={searchQuery}
                bookmarks={bookmarks}
                onToggleBookmark={handleToggleBookmark}
                onAskAI={handleOpenAITutorWithContext}
              />
            }
          />
          <Route
            path="/notes"
            element={
              <StudentTextbook
                searchQuery={searchQuery}
                bookmarks={bookmarks}
                onToggleBookmark={handleToggleBookmark}
                onAskAI={handleOpenAITutorWithContext}
              />
            }
          />
          <Route
            path="/notes/:topicId"
            element={
              <StudentTextbook
                searchQuery={searchQuery}
                bookmarks={bookmarks}
                onToggleBookmark={handleToggleBookmark}
                onAskAI={handleOpenAITutorWithContext}
              />
            }
          />

          {/* Master Revision Booklet Routes */}
          <Route
            path="/booklet"
            element={
              <MasterStudyGuide
                searchQuery={searchQuery}
                onAskAI={(topic, q) => handleOpenAITutorWithContext(topic, q)}
              />
            }
          />
          <Route
            path="/booklet/:chapterId"
            element={
              <MasterStudyGuide
                searchQuery={searchQuery}
                onAskAI={(topic, q) => handleOpenAITutorWithContext(topic, q)}
              />
            }
          />

          {/* Virtual Simulators Routes */}
          <Route path="/simulators" element={<InteractiveSimulators />} />
          <Route path="/simulators/:simId" element={<InteractiveSimulators />} />

          {/* Formula Sheet & Solver Routes */}
          <Route path="/formulas" element={<FormulaSheet />} />
          <Route path="/formulas/:category" element={<FormulaSheet />} />

          {/* Past Paper Question Bank Routes */}
          <Route path="/quiz" element={<QuizBank />} />
          <Route path="/quiz/:unitId" element={<QuizBank />} />

          {/* Active Recall Flashcards */}
          <Route path="/flashcards" element={<FlashcardReview />} />

          {/* Worksheet Generator & PDF Exporter */}
          <Route path="/worksheets" element={<WorksheetGenerator />} />
          <Route path="/worksheet-generator" element={<WorksheetGenerator />} />

          {/* Classified Past Papers & Mark Schemes */}
          <Route path="/classified" element={<ClassifiedPastPapers />} />
          <Route path="/classified-papers" element={<ClassifiedPastPapers />} />

          {/* Paper 6 Practical Guide */}
          <Route path="/paper6" element={<Paper6Guide />} />

          {/* IGCSE Grade Calculator & Predictor */}
          <Route path="/calculator" element={<GradeCalculator />} />
          <Route path="/grade-calculator" element={<GradeCalculator />} />

          {/* Video Lessons & Solutions */}
          <Route
            path="/videos"
            element={
              <div className="space-y-6">
                <YouTubeLessonWidget title="IGCSE Physics Video Explanation & Worked Solution" topicBadge="Ahmed Badr Physics" />
              </div>
            }
          />

          {/* Examiner Pitfalls & Unit Traps */}
          <Route path="/pitfalls" element={<ExamPitfallsSection />} />
          <Route path="/common-mistakes" element={<ExamPitfallsSection />} />

          {/* Interactive Study Planner */}
          <Route path="/planner" element={<StudyPlanner />} />
          <Route path="/study-planner" element={<StudyPlanner />} />

          {/* Exam Board Comparison (Cambridge vs Edexcel) */}
          <Route path="/exam-boards" element={<ExamBoardComparison />} />
          <Route path="/exam-board-comparison" element={<ExamBoardComparison />} />
          <Route path="/comparison" element={<ExamBoardComparison />} />

          {/* Student Leaderboard */}
          <Route path="/leaderboard" element={<Leaderboard onNavigate={(tab) => navigate(`/${tab}`)} />} />
          <Route path="/rankings" element={<Leaderboard onNavigate={(tab) => navigate(`/${tab}`)} />} />

          {/* Student Progress & Certificate */}
          <Route path="/progress" element={<MyProgress />} />
          <Route path="/my-progress" element={<MyProgress />} />
          <Route path="/certificate" element={<CertificateGenerator onNavigateToTopics={() => navigate("/topics")} />} />
          <Route path="/certificates" element={<CertificateGenerator onNavigateToTopics={() => navigate("/topics")} />} />

          {/* Dedicated Teacher Bio & Contact Page */}
          <Route path="/about" element={<AboutTeacherSection />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Progressive Web App Install Banner */}
      <PWAInstallBanner />

      {/* Global Modals */}
      <AITutorModal
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
        initialTopicContext={aiContextTopic}
        initialSubTopicContext={aiContextSubTopic}
      />

      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onSelectSubTopic={handleSelectBookmarkedSubTopic}
        onRemoveBookmark={handleToggleBookmark}
      />

      {/* Floating WhatsApp Contact Widget */}
      <WhatsAppWidget instructorName="Mr. Ahmed Badr" />

      {/* Footer & Teacher Contact Information */}
      <footer className="mt-auto border-t border-slate-200 bg-white pt-8 pb-6 text-slate-600 text-xs shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Contact & Support Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Direct Student & Parent Contact
                </span>
                <span className="text-slate-400 text-xs font-semibold">Teacher: Mr. Ahmed Badr</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                Need Help with IGCSE Physics Past Papers or Tutoring?
              </h3>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Connect directly on WhatsApp for Cambridge & Pearson Edexcel syllabus inquiries, private tutoring schedules, Paper 4 calculation walkthroughs, and Paper 6 laboratory guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics%20tutoring%20and%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (KSA): +966 53 067 5155</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://wa.me/201099683837?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics%20tutoring%20and%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-teal-700/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (EG): +20 109 968 3837</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-bold text-slate-800">Ahmed Badr's IGCSE Physics Hub</span>
              <span className="text-slate-300">•</span>
              <span className="font-medium">Cambridge (0625 / 0972) & Pearson Edexcel (4PH1)</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-slate-500 font-medium text-[11px]">
              <span>KSA: +966 53 067 5155</span>
              <span>•</span>
              <span>EG: +20 109 968 3837</span>
              <span>•</span>
              <span>All 6 Units</span>
              <span>•</span>
              <span>8 Interactive Labs</span>
              <span>•</span>
              <span>Exam Quizzes</span>
              <span>•</span>
              <span>AI Exam Tutor</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
