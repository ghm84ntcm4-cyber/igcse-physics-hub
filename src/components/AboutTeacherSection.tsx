import React, { useState } from "react";
import {
  User,
  GraduationCap,
  Award,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Globe,
  Clock,
  Star,
} from "lucide-react";

export const AboutTeacherSection: React.FC = () => {
  const [copiedKSA, setCopiedKSA] = useState(false);
  const [copiedEG, setCopiedEG] = useState(false);

  const handleCopyKSA = () => {
    navigator.clipboard.writeText("+966530675155");
    setCopiedKSA(true);
    setTimeout(() => setCopiedKSA(false), 2000);
  };

  const handleCopyEG = () => {
    navigator.clipboard.writeText("+201099683837");
    setCopiedEG(true);
    setTimeout(() => setCopiedEG(false), 2000);
  };

  return (
    <section
      id="about-teacher"
      aria-label="About the Instructor"
      className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left Column: Teacher Profile Card */}
        <div className="w-full lg:w-84 shrink-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col items-center text-center space-y-3 relative z-10">
            {/* Avatar Initials Badge */}
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shadow-cyan-500/20 border-2 border-white/20">
                AB
              </div>
              <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 text-white rounded-full border-2 border-slate-900" title="Available for tutoring">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Mr. Ahmed Badr
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-medium font-mono">
                IGCSE & Pearson Edexcel Physics Specialist
              </p>
            </div>

            <div className="w-full pt-3 border-t border-slate-700/60 space-y-2 text-xs text-slate-300 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cambridge (0625 / 0972) Masterclass</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pearson Edexcel (4PH1) Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Consistent Grade 9 / A* Track Record</span>
              </div>
            </div>

            {/* Direct Contact Numbers & Actions */}
            <div className="w-full pt-3 space-y-2.5">
              {/* KSA WhatsApp / Call */}
              <div className="space-y-1">
                <a
                  href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics%20tutoring."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-between transition-colors shadow-sm cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp (Saudi Arabia)</span>
                  </span>
                  <span className="font-mono text-[11px] opacity-90">+966 53 067 5155</span>
                </a>

                <button
                  onClick={handleCopyKSA}
                  className="w-full min-h-[38px] px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedKSA ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKSA ? "Copied KSA Number!" : "Copy: +966 53 067 5155"}</span>
                </button>
              </div>

              {/* Egypt WhatsApp / Call */}
              <div className="space-y-1 pt-1 border-t border-slate-700/50">
                <a
                  href="https://wa.me/201099683837?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics%20tutoring."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs flex items-center justify-between transition-colors shadow-sm cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp (Egypt)</span>
                  </span>
                  <span className="font-mono text-[11px] opacity-90">+20 109 968 3837</span>
                </a>

                <button
                  onClick={handleCopyEG}
                  className="w-full min-h-[38px] px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEG ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEG ? "Copied Egypt Number!" : "Copy: +20 109 968 3837"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Methodology, and Trust Elements */}
        <div className="flex-1 space-y-6 text-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Why I Built This Platform • قصة إنشاء المنصة</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              From the Classroom Desk to Your Screen: Why Physics Doesn't Have to Be Confusing
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                A few years ago, right after marking a batch of mock exam papers, a student came to my desk looking completely defeated. He had spent weeks memorizing formulas, yet he lost 14 marks on Paper 4. When we reviewed his paper together, the issue was clear: he understood the general concept, but he wrote <span className="font-semibold text-rose-600">"heat rises"</span> instead of <span className="font-semibold text-emerald-700">"warm air expands, becomes less dense, and rises by convection"</span>. On another calculation, he lost the method mark entirely because he typed the numbers into his calculator without writing down the base equation first.
              </p>
              <p>
                That moment stayed with me. I realized that traditional textbooks and generic revision sites fail students in two ways: they treat physics as abstract mathematical rules rather than observable reality, and they keep the examiner's marking criteria a secret.
              </p>
              <p>
                I built this <strong>IGCSE Physics Hub</strong> to fix both problems. Every topic note, virtual lab simulation, and classified past paper here is written as if you and I are sitting together at a desk, dissecting actual exam questions line by line.
              </p>
            </div>
          </div>

          {/* Pillars of Success Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <BookOpen className="w-4 h-4" />
                <h4>No Unnecessary Jargon</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Concepts explained simply, starting with the physical picture before introducing equations. Full coverage of the 2023–2028 Cambridge & Edexcel specs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <h4>Virtual Labs to Test Ideas</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When you can tweak the angle of incidence or adjust resistance in real time, you don't need to memorize what happens — you've seen it.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h4>Real Examiner Marking Rules</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn how Method (M), Accuracy (A), and Independent (B) marks are awarded so you never drop easy marks on calculation steps or keyword omissions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <h4>Direct Teacher Access</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Have a question about a tricky question from June 2023 Paper 42? Reach out directly via WhatsApp for tutoring and revision support.
              </p>
            </div>
          </div>

          {/* Direct Communication Bar with Dual Contacts */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/70">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-blue-600 text-white shadow-xs shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[11px] text-blue-900 font-bold uppercase tracking-wider block">
                  Direct Inquiries & Tutoring Bookings
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs font-mono font-bold text-slate-800">
                  <span>KSA: +966 53 067 5155</span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span>EG: +20 109 968 3837</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics%20lessons."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp KSA</span>
              </a>

              <a
                href="https://wa.me/201099683837?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20to%20inquire%20about%20IGCSE%20Physics%20lessons."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Egypt</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
