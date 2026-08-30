import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  FileText,
  Cpu,
  Calculator,
  HelpCircle,
  FlaskConical,
  Sparkles,
  Printer,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  GraduationCap,
  Award,
  Zap,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "booklet",
      path: "/booklet",
      titleEn: "Master Revision Booklet",
      titleAr: "المذكرة الشاملة",
      description: "Condensed syllabus summaries with the exact keywords mark schemes require, key equations, and common question formats.",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      accentBg: "bg-blue-50/70 hover:bg-blue-100/70 border-blue-200/80 text-blue-950",
      badge: "Cambridge & Edexcel",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: "topics",
      path: "/topics",
      titleEn: "Interactive Student Textbook",
      titleAr: "الكتاب الدراسي التفاعلي",
      description: "Step-by-step topic explanations with clear diagrams, worked examples, and specific warnings about where students lose marks.",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      accentBg: "bg-indigo-50/70 hover:bg-indigo-100/70 border-indigo-200/80 text-indigo-950",
      badge: "Full Syllabus",
      badgeColor: "bg-indigo-100 text-indigo-700",
    },
    {
      id: "simulators",
      path: "/simulators",
      titleEn: "Physics Lab Simulators",
      titleAr: "المختبر الافتراضي والمحاكيات",
      description: "8 virtual labs to test laws yourself: refract rays of light, construct circuits, and watch radioactive decay in real time.",
      icon: <Cpu className="w-6 h-6 text-cyan-600" />,
      accentBg: "bg-cyan-50/70 hover:bg-cyan-100/70 border-cyan-200/80 text-cyan-950",
      badge: "8 Lab Simulators",
      badgeColor: "bg-cyan-100 text-cyan-700",
    },
    {
      id: "formulas",
      path: "/formulas",
      titleEn: "Formula Sheet & Solver",
      titleAr: "حاسبة ومعادلات الفيزياء",
      description: "Every syllabus equation with its correct SI unit prefixes, plus a built-in calculator to check your multi-step working.",
      icon: <Calculator className="w-6 h-6 text-amber-600" />,
      accentBg: "bg-amber-50/70 hover:bg-amber-100/70 border-amber-200/80 text-amber-950",
      badge: "Interactive Solver",
      badgeColor: "bg-amber-100 text-amber-700",
    },
    {
      id: "classified",
      path: "/classified",
      titleEn: "Classified Past Papers & Mark Schemes",
      titleAr: "امتحانات مصنفة حسب الفصول ونماذج الإجابة",
      description: "Past paper questions grouped by topic with official marking rubrics, so you can practice target units without flipping through full papers.",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      accentBg: "bg-blue-50/70 hover:bg-blue-100/70 border-blue-200/80 text-blue-950",
      badge: "Classified PDFs",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: "quiz",
      path: "/quiz",
      titleEn: "Past Paper Question Bank",
      titleAr: "بنك الأسئلة والامتحانات",
      description: "Topical multiple choice and structured questions with immediate feedback and time limits to build exam speed.",
      icon: <HelpCircle className="w-6 h-6 text-purple-600" />,
      accentBg: "bg-purple-50/70 hover:bg-purple-100/70 border-purple-200/80 text-purple-950",
      badge: "Paper 2 & 4 Ready",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      id: "worksheets",
      path: "/worksheets",
      titleEn: "Study Worksheet & PDF Generator",
      titleAr: "أوراق العمل التفاعلية وPDF",
      description: "Topic summaries, formula boxes, and targeted exam questions ready to solve on screen or print out as PDFs.",
      icon: <Printer className="w-6 h-6 text-emerald-600" />,
      accentBg: "bg-emerald-50/70 hover:bg-emerald-100/70 border-emerald-200/80 text-emerald-950",
      badge: "Download PDF",
      badgeColor: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "calculator",
      path: "/calculator",
      titleEn: "IGCSE Grade Calculator",
      titleAr: "حاسبة التقدير والدرجات",
      description: "Calculate your overall mark out of 200 using official Cambridge weightings (P2 × 1.25, P4 × 1.25, P6 × 1.0) to see where you stand.",
      icon: <Award className="w-6 h-6 text-amber-600" />,
      accentBg: "bg-amber-50/70 hover:bg-amber-100/70 border-amber-200/80 text-amber-950",
      badge: "Target A* Predictor",
      badgeColor: "bg-amber-100 text-amber-700",
    },
    {
      id: "paper6",
      path: "/paper6",
      titleEn: "Paper 6 Practical Mastery",
      titleAr: "دليل العملي Paper 6",
      description: "Clear guides on drawing graphs, scaling axes, controlling variables, identifying error sources, and planning experiments.",
      icon: <FlaskConical className="w-6 h-6 text-teal-600" />,
      accentBg: "bg-teal-50/70 hover:bg-teal-100/70 border-teal-200/80 text-teal-950",
      badge: "Paper 6 ATP",
      badgeColor: "bg-teal-100 text-teal-700",
    },
  ];

  return (
    <section aria-label="Hero Section" className="mb-8 space-y-6">
      {/* Main Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white border border-slate-700/60 p-6 sm:p-10 lg:p-12 shadow-xl">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
          {/* Syllabus Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-xs">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span>Cambridge IGCSE (0625 / 0972) & Pearson Edexcel Physics (4PH1)</span>
          </div>

          {/* Main Title & Subtitle in English */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              IGCSE Physics, Explained by Your Teacher
            </h1>
            <p className="text-sm sm:text-lg text-cyan-200/90 font-medium">
              Understand the physical principles, see them in virtual labs, and answer the way examiners grade.
            </p>
          </div>

          {/* Value Proposition Description */}
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            I built this hub to give you the exact tools we use in class: straightforward notes across Cambridge (0625 / 0972) and Edexcel (4PH1), 8 interactive virtual labs, and classified past paper questions paired with official mark scheme rules.
          </p>

          {/* Key Metric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Complete 2023–2028 Syllabus Specs
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              8 Interactive Virtual Labs
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Exact Mark Scheme Phrasing
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            {/* Primary CTA - 48px touch target */}
            <Link
              id="hero-start-btn"
              to="/topics/1.1"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Start Studying Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Secondary CTA: Simulators */}
            <Link
              to="/simulators"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-100 border border-slate-600 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Virtual Lab Simulators</span>
            </Link>

            {/* WhatsApp Direct Contact Buttons (KSA & Egypt) */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20am%20using%20your%20IGCSE%20Physics%20Hub%20and%20need%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial min-h-[48px] px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
                title="WhatsApp KSA: +966 53 067 5155"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (KSA)</span>
              </a>

              <a
                href="https://wa.me/201099683837?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20am%20using%20your%20IGCSE%20Physics%20Hub%20and%20need%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial min-h-[48px] px-4 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-teal-700/20 cursor-pointer"
                title="WhatsApp Egypt: +20 109 968 3837"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (EG)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid (Multi-page Quick Navigation) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Core Learning Modules</span>
            </h2>
            <p className="text-xs text-slate-500">
              Select a module below to open its dedicated page, solve past questions, or explore lab experiments
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Dedicated Clean Routes
          </span>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              className={`group min-h-[120px] p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md active:scale-[0.99] flex flex-col justify-between ${section.accentBg}`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-white shadow-2xs border border-slate-200/60 group-hover:scale-105 transition-transform">
                    {section.icon}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${section.badgeColor}`}>
                    {section.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors">
                  {section.titleEn}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  {section.titleAr}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {section.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-blue-600">
                <span className="flex items-center gap-1 text-xs text-blue-600 font-bold">
                  <span>Open {section.titleEn.split(" ")[0]} Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-slate-400 font-mono">/{section.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
