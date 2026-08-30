import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  Cpu,
  Award,
  FlaskConical,
  HelpCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  MessageCircle,
  Search,
  ShieldCheck,
  Star,
  Zap,
  Target,
  BarChart3,
  Lightbulb,
  ExternalLink,
  GraduationCap,
  Calculator,
  Compass,
  Calendar,
  Scale,
} from "lucide-react";

export const HomePage: React.FC = () => {
  const stats = [
    {
      value: "6",
      label: "Syllabus Units",
      subtext: "Cambridge & Edexcel Specs",
      icon: <Layers className="w-5 h-5 text-amber-500" />,
    },
    {
      value: "500+",
      label: "Exam Questions",
      subtext: "Topical Papers & Mark Schemes",
      icon: <HelpCircle className="w-5 h-5 text-blue-500" />,
    },
    {
      value: "8",
      label: "Virtual Lab Simulators",
      subtext: "Optics, Circuits & Mechanics",
      icon: <Cpu className="w-5 h-5 text-cyan-500" />,
    },
    {
      value: "100%",
      label: "Free & Open",
      subtext: "Study at Your Own Pace",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    },
  ];

  const resourceCards = [
    {
      id: "leaderboard",
      title: "Student Leaderboard & Streaks",
      arabicTitle: "لوحة الشرف وتحدي الطلاب",
      description:
        "Check your understanding with quick mini-quizzes at the end of each topic, earn points, track your daily revision streaks, and stay motivated.",
      icon: <Award className="w-7 h-7 text-amber-500" />,
      badge: "🏆 Top Students",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      link: "/leaderboard",
      features: ["Live Points from Quick Quizzes", "Custom Profile & Target Grade", "Daily Streak & Achievement Badges"],
    },
    {
      id: "textbook",
      title: "Student Textbook",
      arabicTitle: "الكتاب الدراسي والشرح الشامل",
      description:
        "Direct explanations across all 6 syllabus units with ray and circuit diagrams, key definitions, and specific notes on where students lose marks.",
      icon: <BookOpen className="w-7 h-7 text-indigo-600" />,
      badge: "Core & Extended",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      link: "/topics",
      features: ["Syllabus Core & Extended Notes", "Ray & Circuit SVG Diagrams", "Targeted Concept Checks"],
    },
    {
      id: "revision-guide",
      title: "Master Revision Guide",
      arabicTitle: "دليل المراجعة المركزة والقوانين",
      description:
        "Condensed equation sheet with standard SI units, quick definition tables, and examiner rules for showing working in Paper 4 calculations.",
      icon: <FileText className="w-7 h-7 text-blue-600" />,
      badge: "Formula Sheet",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      link: "/booklet",
      features: ["All Required Equations & Units", "Exact Mark Scheme Keywords", "Printable Quick-Reference Sheet"],
    },
    {
      id: "simulators",
      title: "Interactive Lab Simulators",
      arabicTitle: "المختبر الافتراضي والمحاكاة التفاعلية",
      description:
        "Adjust variables yourself in real time: measure refraction angles with Snell's law, build series and parallel circuits, and observe radioactive decay.",
      icon: <Cpu className="w-7 h-7 text-cyan-600" />,
      badge: "8 Virtual Labs",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      link: "/simulators",
      features: ["Ray Optics & Snell's Law", "Ohm's Law & Circuit Builder", "Decay & Half-Life Graphs"],
    },
    {
      id: "calculator",
      title: "IGCSE Grade Calculator",
      arabicTitle: "حاسبة الدرجات والتقدير المتوقع",
      description:
        "Check how your component marks translate into an overall grade using official Cambridge weightings (Paper 2 × 1.25, Paper 4 × 1.25, Paper 6 × 1.0).",
      icon: <Award className="w-7 h-7 text-amber-600" />,
      badge: "A* Target Predictor",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      link: "/calculator",
      features: ["Cambridge Weighted Total (200 M)", "Live Grade Boundary Ranges", "Component Target Calculator"],
    },
    {
      id: "paper6-quiz",
      title: "Paper 6 Practical & Question Bank",
      arabicTitle: "تدريبات الورقة السادسة وبنك الأسئلة",
      description:
        "Practical guidance: how to draw a proper line of best fit, avoid parallax errors, format tables with units, and structure 6-mark plan investigations.",
      icon: <FlaskConical className="w-7 h-7 text-rose-600" />,
      badge: "Practical Mastery",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      link: "/paper6",
      features: ["Line of Best Fit Guidelines", "Parallax & Accuracy Precautions", "Classified Questions with MS"],
    },
    {
      id: "study-planner",
      title: "Interactive Study Planner",
      arabicTitle: "منظم ومخطط المذاكرة التفاعلي",
      description:
        "Pick your exam date and study days to generate a balanced schedule covering all syllabus topics without cramming at the last minute.",
      icon: <Calendar className="w-7 h-7 text-blue-600" />,
      badge: "🗓️ Custom Schedule",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      link: "/planner",
      features: ["Dynamic Daily Session Breakdown", "Track Completed Topics", "Printable PDF Study Timetable"],
    },
    {
      id: "exam-boards",
      title: "Cambridge vs Edexcel Comparison",
      arabicTitle: "مقارنة منهج كامبريدج وإدكسل",
      description:
        "Direct comparison between Cambridge 0625/0972 and Pearson Edexcel 4PH1: paper differences, shared topics, and unique syllabus requirements.",
      icon: <Scale className="w-7 h-7 text-emerald-600" />,
      badge: "📋 Cross-Board Guide",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      link: "/exam-boards",
      features: ["Topic-by-Topic Alignment Matrix", "Filter Board Differences", "Paper Format & Marking Rules"],
    },
  ];

  const steps = [
    {
      stepNumber: "01",
      title: "Build Physical Intuition",
      description:
        "Read the topic explanation and picture what the particles, rays, or forces are doing before rushing to memorize equations.",
      icon: <Target className="w-6 h-6 text-amber-500" />,
    },
    {
      stepNumber: "02",
      title: "Test with Simulators",
      description:
        "Change variables, measure angles, and observe current flows in our 8 interactive virtual labs to verify the physical laws yourself.",
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
    },
    {
      stepNumber: "03",
      title: "Practice Past Papers",
      description:
        "Solve topical Cambridge and Edexcel questions. Always write the base formula first to secure the method (M) mark.",
      icon: <HelpCircle className="w-6 h-6 text-indigo-500" />,
    },
    {
      stepNumber: "04",
      title: "Review Common Traps",
      description:
        "Check my examiner notes on unit conversions and exact mark scheme phrasing so you don't lose marks on details you already know.",
      icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-12">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        aria-label="Welcome Hero"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-12 lg:p-16 border border-slate-800 shadow-xl"
      >
        {/* Subtle geometric backdrop */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Syllabus Spec Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Cambridge IGCSE (0625 / 0972) & Pearson Edexcel Physics</span>
          </div>

          {/* Bold Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Physics That Makes Sense,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
              Direct From Your Teacher
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Welcome! I built this platform after seeing students struggle not because physics is hard, but because textbooks overcomplicate it. Here is everything in one place: concise topic notes, 8 virtual labs to test ideas, and classified past papers with the exact keywords examiners reward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              to="/topics"
              id="hero-start-now-cta"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
            >
              <span>Explore Lesson Notes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/simulators"
              id="hero-simulators-cta"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-sm sm:text-base border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Interactive Labs</span>
            </Link>

            <Link
              to="/calculator"
              id="hero-calculator-cta"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-sm sm:text-base border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Grade Predictor</span>
            </Link>
          </div>

          {/* 4-Stat Bar */}
          <div className="pt-8 sm:pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-700/80 flex items-start gap-3.5 hover:border-slate-600 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-200">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESOURCES SECTION */}
      <section id="resources" aria-label="Learning Resources" className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <Layers className="w-3.5 h-3.5" />
            <span>Curated Revision Tools</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need in One Place
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From quick concept checks to complete past paper breakdowns, choose the tool that fits where you are in your revision today.
          </p>
        </div>

        {/* 5 Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-slate-300"
            >
              <div className="space-y-4">
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-[11px] font-medium text-slate-500 font-arabic mt-0.5">
                    {card.arabicTitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                {/* Features list */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {card.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <Link
                  to={card.link}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white font-bold text-xs flex items-center justify-between transition-all group/btn"
                >
                  <span>Open {card.title}</span>
                  <span className="text-amber-500 font-bold group-hover/btn:translate-x-1 transition-transform">
                    Open →
                  </span>
                </Link>
              </div>
            </div>
          ))}

          {/* Bonus Quick Access Card: Classified Past Papers */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xs flex flex-col justify-between border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-amber-400">
                  <FileText className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
                  Topical Papers
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Classified Past Papers & MS
                </h3>
                <div className="text-[11px] font-medium text-slate-400 font-arabic mt-0.5">
                  امتحانات مصنفة حسب الفصول ونماذج الإجابة
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Topic-by-topic compiled Cambridge IGCSE questions with official marking rubrics, model solutions, and downloadable revision PDFs.
              </p>

              <ul className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-indigo-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Mechanics, Thermal, Waves & Electricity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Marking scheme method (M) & accuracy (A) marks</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-4 border-t border-white/10">
              <Link
                to="/classified"
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-between transition-all"
              >
                <span>Explore Classified Packs</span>
                <span>Open →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section
        id="how-it-works"
        aria-label="How It Works"
        className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 lg:p-12 space-y-10"
      >
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <Zap className="w-3.5 h-3.5" />
            <span>My 4-Step Method</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How to Use This Site to Prepare for Exams
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            This is the same 4-step sequence I teach in class to take students from initial confusion to exam confidence.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between hover:border-slate-300 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-amber-500 transition-colors">
                    {s.stepNumber}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                <span>Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT AHMED BADR SECTION */}
      <section id="about" aria-label="About the Instructor">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xs overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Profile Badge */}
            <div className="w-full lg:w-96 shrink-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden text-center space-y-4">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 text-3xl font-black shadow-lg shadow-amber-500/20 border-2 border-white/20 mx-auto">
                  AB
                </div>
                <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 text-white rounded-full border-2 border-slate-900" title="Online & Available">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Mr. Ahmed Badr
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-medium">
                  IGCSE & Pearson Edexcel Physics Specialist
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 space-y-2 text-xs text-slate-300 text-left">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>15+ Years Teaching Cambridge & Edexcel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Hundreds of A* / Grade 9 Students Guided</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tutoring across Egypt & Saudi Arabia</span>
                </div>
              </div>

              {/* Direct WhatsApp Contact CTA */}
              <div className="pt-3 space-y-2">
                <a
                  href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics%20tutoring."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-between transition-colors shadow-sm cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp (Saudi Arabia)</span>
                  </span>
                  <span className="font-mono text-[11px]">+966 53 067 5155</span>
                </a>

                <a
                  href="https://wa.me/201099683837?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics%20tutoring."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-between transition-colors border border-slate-700 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp (Egypt)</span>
                  </span>
                  <span className="font-mono text-[11px]">+20 109 968 3837</span>
                </a>
              </div>
            </div>

            {/* Right Bio & Methodology */}
            <div className="space-y-5 flex-1 text-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Meet Your Physics Teacher
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Demystifying Physics & Building Real Exam Confidence
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over 15+ years teaching Cambridge (0625/0972) and Edexcel (4PH1) in Egypt and Saudi Arabia, I've seen students struggle with the exact same sticking points year after year: confusing velocity-time graphs with distance-time graphs, or forgetting that examiners require the formula written explicitly before numbers are substituted. This platform is built to make sure you never drop those marks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>Intuition Before Equations</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Understand what happens to particles and fields before attempting the mathematical derivation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Examiner Mark Schemes</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Learn the exact keywords, method working lines, and units that ensure full marks in Papers 2, 4, and 6.
                  </p>
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Why I Built This & Tutoring Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION BANNER */}
      <section
        id="final-cta"
        aria-label="Final Call to Action"
        className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-8 sm:p-12 lg:p-14 text-center space-y-6 shadow-xl border border-indigo-500/20 relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <GraduationCap className="w-4 h-4" />
            <span>Ready to Start Your Revision?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Take Control of Your Physics Preparation
          </h2>

          <p className="text-sm sm:text-base text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            All 6 syllabus chapters, 8 virtual lab simulators, Cambridge grade calculators, and classified topical past papers are open for you to study at your own pace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Link
              to="/topics"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 transform active:scale-95"
            >
              <span>Open Student Textbook</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Contact Mr. Ahmed Badr</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
