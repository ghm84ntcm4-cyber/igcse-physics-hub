import React, { useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Calculator,
  Cpu,
  HelpCircle,
  Layers,
  Sparkles,
  FlaskConical,
  Bookmark,
  Search,
  Printer,
  Compass,
  FileText,
  Home,
  MessageCircle,
  User,
  Award,
  Video,
  AlertTriangle,
  Calendar,
  Moon,
  Sun,
  Scale,
  Trophy,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  bookmarkCount: number;
  onOpenBookmarks: () => void;
  onOpenAITutor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  bookmarkCount,
  onOpenBookmarks,
  onOpenAITutor,
}) => {
  const { theme, toggleTheme } = useTheme();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { path: "/progress", label: "My Progress", icon: <Award className="w-4 h-4 text-emerald-600" />, badge: "🎓 Certificate" },
    { path: "/leaderboard", label: "Leaderboard", icon: <Trophy className="w-4 h-4 text-amber-500" />, badge: "🏆 Top Students" },
    { path: "/planner", label: "Study Planner", icon: <Calendar className="w-4 h-4 text-blue-600" />, badge: "🗓️ Custom Plan" },
    { path: "/exam-boards", label: "Cambridge vs Edexcel", icon: <Scale className="w-4 h-4 text-emerald-600" />, badge: "Comparison" },
    { path: "/topics", label: "Textbook & Resources", icon: <BookOpen className="w-4 h-4 text-indigo-600" />, badge: "6 Units" },
    { path: "/#how-it-works", label: "How It Works", icon: <Layers className="w-4 h-4 text-amber-500" /> },
    { path: "/classified", label: "Classified Papers", icon: <FileText className="w-4 h-4 text-blue-600" />, badge: "Topical PDFs" },
    { path: "/simulators", label: "Lab Simulators", icon: <Cpu className="w-4 h-4 text-cyan-600" />, badge: "8 Labs" },
    { path: "/calculator", label: "Grade Calculator", icon: <Award className="w-4 h-4 text-amber-500" />, badge: "A* Predictor" },
    { path: "/paper6", label: "Paper 6 Practical", icon: <FlaskConical className="w-4 h-4 text-rose-600" />, badge: "Essential" },
    { path: "/booklet", label: "Master Study Guide", icon: <FileText className="w-4 h-4 text-blue-600" /> },
    { path: "/videos", label: "Video Lessons", icon: <Video className="w-4 h-4 text-red-600" /> },
    { path: "/pitfalls", label: "Exam Pitfalls", icon: <AlertTriangle className="w-4 h-4 text-rose-500" /> },
    { path: "/worksheets", label: "Worksheets", icon: <Printer className="w-4 h-4 text-emerald-600" /> },
    { path: "/formulas", label: "Formula Sheet", icon: <Calculator className="w-4 h-4 text-amber-600" /> },
    { path: "/quiz", label: "Past Paper Quizzes", icon: <HelpCircle className="w-4 h-4 text-purple-600" /> },
    { path: "/flashcards", label: "Active Recall", icon: <Layers className="w-4 h-4 text-emerald-600" /> },
    { path: "/about", label: "About Mr. Ahmed Badr", icon: <User className="w-4 h-4 text-slate-600" /> },
  ];

  // Listen for "/" or "Cmd+K" to quickly focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key === "k")) &&
        document.activeElement !== searchInputRef.current
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && location.pathname !== "/topics" && location.pathname !== "/booklet") {
      navigate(`/topics`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 text-slate-800 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Academic Syllabus Spec Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1 px-4 sm:px-8 font-medium flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>2023–2028 Verified Syllabus</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-slate-400">
            Cambridge IGCSE (0625 / 0972) & Pearson Edexcel (4PH1) Specification
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20have%20an%20IGCSE%20Physics%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-mono font-bold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>KSA: +966 53 067 5155</span>
          </a>
          <span className="text-slate-600 hidden md:inline">•</span>
          <a
            href="https://wa.me/201099683837?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20have%20an%20IGCSE%20Physics%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-teal-400 hover:text-teal-300 font-mono font-bold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>EG: +20 109 968 3837</span>
          </a>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/30 font-mono text-[10px] font-bold">
            Grade 9 / A* Ready
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Platform Title */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 cursor-pointer group"
            title="Return to Home Dashboard"
          >
            <div
              id="app-logo"
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-bold group-hover:scale-105 transition-transform"
            >
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  Ahmed Badr's Physics
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  IGCSE Hub
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block font-medium">
                Comprehensive Physics Syllabus & Exam Masterclass
              </p>
            </div>
          </Link>

          {/* Search Bar & Fast Section Links */}
          <div className="flex items-center gap-3 flex-1 max-w-xl hidden md:flex">
            <form onSubmit={handleSearchSubmit} className="flex-1">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search formulas, laws, terms... (Press / to focus)"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-xl pl-9 pr-14 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white placeholder-slate-400 transition-all font-medium"
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-[11px] text-slate-400 hover:text-slate-700 font-semibold px-1 py-0.5 rounded bg-slate-200/60 cursor-pointer"
                    >
                      Clear
                    </button>
                  ) : (
                    <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded pointer-events-none">
                      /
                    </kbd>
                  )}
                </div>
              </div>
            </form>

            <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-600">
              <Link to="/#resources" className="px-2 py-1 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors">
                Resources
              </Link>
              <Link to="/#how-it-works" className="px-2 py-1 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors">
                How It Works
              </Link>
              <Link to="/#about" className="px-2 py-1 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Start Now Button */}
            <Link
              to="/topics"
              id="nav-start-now-btn"
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm shadow-amber-500/20 flex items-center gap-1.5 transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Start Now</span>
              <span className="font-bold">→</span>
            </Link>

            {/* Bookmarks Counter */}
            <button
              id="bookmarks-button"
              onClick={onOpenBookmarks}
              className="relative p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-all border border-slate-200 flex items-center gap-1.5 text-xs font-semibold shadow-2xs cursor-pointer"
              title="Saved Revision Sections"
            >
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              <span className="hidden sm:inline">Saved</span>
              {bookmarkCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-amber-500 text-white font-bold text-[10px]">
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* WhatsApp Contact Button */}
            <a
              href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20have%20an%20IGCSE%20Physics%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 transition-all border border-emerald-300 flex items-center gap-1.5 text-xs font-bold shadow-2xs cursor-pointer"
              title="Chat with Mr. Ahmed Badr on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* AI Tutor Button */}
            <button
              id="ai-tutor-nav-btn"
              onClick={onOpenAITutor}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-xs flex items-center gap-1.5 transition-all transform active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="hidden sm:inline">AI Tutor</span>
            </button>

            {/* Dark Mode Toggle Button */}
            <button
              id="dark-mode-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-transform active:scale-90 border border-slate-200 flex items-center justify-center text-xs font-semibold shadow-2xs cursor-pointer"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark mode"
            >
              <span id="dark-mode-icon" className="text-base leading-none">
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
            </button>

            {/* Print Revision Summary */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 hidden lg:block shadow-2xs cursor-pointer"
              title="Print Revision Sheet"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Multi-Page Navigation Links Bar */}
        <nav className="flex space-x-1 sm:space-x-1.5 overflow-x-auto py-2.5 no-scrollbar border-t border-slate-100 items-center">
          {navItems.map((item) => {
            const isHome = item.path === "/";
            const isActive = isHome
              ? location.pathname === "/"
              : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs font-bold ring-1 ring-blue-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
