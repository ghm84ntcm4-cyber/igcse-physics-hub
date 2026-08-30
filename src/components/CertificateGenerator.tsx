import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Download,
  Share2,
  CheckCircle2,
  Calendar,
  User,
  GraduationCap,
  Sparkles,
  Lock,
  RefreshCw,
  Printer,
  ShieldCheck,
  Check,
  Flame,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { ALL_SYLLABUS_TOPIC_IDS } from "./ProgressTracker";
import { jsPDF } from "jspdf";
import confetti from "canvas-confetti";

export const ALL_TOPICS_COUNT = ALL_SYLLABUS_TOPIC_IDS.length; // 36 topics (1.1 - 6.2 + Paper 6)

interface ProgressStorageData {
  completed?: string[];
  badges?: any[];
}

export const CertificateGenerator: React.FC<{ onNavigateToTopics?: () => void }> = ({
  onNavigateToTopics,
}) => {
  const [completedCount, setCompletedCount] = useState<number>(() => {
    try {
      const raw = localStorage.getItem("abphysics_progress");
      if (raw) {
        const parsed: ProgressStorageData = JSON.parse(raw);
        return parsed.completed ? parsed.completed.length : 0;
      }
      const rawCompleted = localStorage.getItem("abphysics_completed_topics");
      if (rawCompleted) {
        const parsed = JSON.parse(rawCompleted);
        return Object.values(parsed).filter(Boolean).length;
      }
    } catch (e) {
      console.error(e);
    }
    return 0;
  });

  const [studentName, setStudentName] = useState<string>(() => {
    try {
      const stats = localStorage.getItem("abphysics_user_stats");
      if (stats) {
        const parsed = JSON.parse(stats);
        if (parsed.name) return parsed.name;
      }
      const savedName = localStorage.getItem("abphysics_student_name");
      if (savedName) return savedName;
    } catch {}
    return "IGCSE Physics Scholar";
  });

  const [issueDate, setIssueDate] = useState<string>(() => {
    const d = new Date();
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  const [certificateId, setCertificateId] = useState<string>(() => {
    const saved = localStorage.getItem("abphysics_certificate_id");
    if (saved) return saved;
    const newId = "ABP-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + new Date().getFullYear();
    try {
      localStorage.setItem("abphysics_certificate_id", newId);
    } catch {}
    return newId;
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [unlockPreview, setUnlockPreview] = useState(false); // allows previewing even before 100%

  useEffect(() => {
    const handleProgressUpdate = () => {
      try {
        const raw = localStorage.getItem("abphysics_progress");
        if (raw) {
          const parsed: ProgressStorageData = JSON.parse(raw);
          setCompletedCount(parsed.completed ? parsed.completed.length : 0);
        }
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener("storage", handleProgressUpdate);
    return () => window.removeEventListener("storage", handleProgressUpdate);
  }, []);

  const isEligible = completedCount >= ALL_TOPICS_COUNT || unlockPreview;
  const progressPercent = Math.min(100, Math.round((completedCount / ALL_TOPICS_COUNT) * 100));

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#1e3a8a", "#d97706", "#2563eb", "#10b981", "#fbbf24"],
      });
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  };

  const handleDownloadPDF = () => {
    setIsGenerating(true);
    triggerCelebration();

    try {
      // Create landscape A4 document (297mm x 210mm)
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 297;
      const pageHeight = 210;

      // 1. Background fill
      doc.setFillColor(253, 252, 248); // warm cream
      doc.rect(0, 0, pageWidth, pageHeight, "F");

      // 2. Outer Elegant Border
      doc.setDrawColor(30, 58, 138); // Navy #1e3a8a
      doc.setLineWidth(3);
      doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

      // Inner Gold Thin Border
      doc.setDrawColor(217, 119, 6); // Amber Gold #d97706
      doc.setLineWidth(0.8);
      doc.rect(14, 14, pageWidth - 28, pageHeight - 28);

      // Corner Decorative Accents
      const cornerSize = 12;
      doc.setFillColor(30, 58, 138);
      // Top-Left
      doc.rect(10, 10, cornerSize, cornerSize, "F");
      // Top-Right
      doc.rect(pageWidth - 10 - cornerSize, 10, cornerSize, cornerSize, "F");
      // Bottom-Left
      doc.rect(10, pageHeight - 10 - cornerSize, cornerSize, cornerSize, "F");
      // Bottom-Right
      doc.rect(pageWidth - 10 - cornerSize, pageHeight - 10 - cornerSize, cornerSize, cornerSize, "F");

      // 3. Header Ribbon / Badge
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(180, 83, 9); // dark amber
      doc.text("CAMBRIDGE (0625/0972) & EDEXCEL (4PH1) IGCSE PHYSICS", pageWidth / 2, 30, { align: "center" });

      // Title
      doc.setFont("times", "bold");
      doc.setFontSize(28);
      doc.setTextColor(30, 58, 138); // Deep Navy
      doc.text("CERTIFICATE OF CURRICULUM MASTERY", pageWidth / 2, 44, { align: "center" });

      // Subtitle
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(100, 116, 139); // Slate 500
      doc.text("This official certificate is proudly conferred to", pageWidth / 2, 54, { align: "center" });

      // Student Name (Prominent & Underlined)
      doc.setFont("times", "bolditalic");
      doc.setFontSize(26);
      doc.setTextColor(15, 23, 42); // Slate 900
      doc.text(studentName || "IGCSE Physics Student", pageWidth / 2, 70, { align: "center" });

      doc.setDrawColor(217, 119, 6);
      doc.setLineWidth(1.2);
      doc.line(75, 74, pageWidth - 75, 74);

      // Statement of accomplishment
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(51, 65, 85);
      const accomplishmentLines = [
        `for successfully studying, testing, and completing all ${ALL_TOPICS_COUNT} comprehensive syllabus units,`,
        "including General Physics, Thermal Physics, Wave Properties & Optics, Electricity & Magnetism,",
        "Nuclear Physics, Astrophysics & Space Physics, and Paper 6 Alternative to Practical skills.",
      ];
      doc.text(accomplishmentLines, pageWidth / 2, 85, { align: "center", lineHeightFactor: 1.4 });

      // 4. Distinction Badge Box
      doc.setFillColor(241, 245, 249);
      doc.setDrawColor(203, 213, 225);
      doc.setLineWidth(0.5);
      doc.roundedRect(60, 108, pageWidth - 120, 24, 3, 3, "FD");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(30, 58, 138);
      doc.text("AWARDED: IGCSE PHYSICS MASTER SCHOLAR (GRADE 9 / A* READY)", pageWidth / 2, 118, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text(`Completed: ${completedCount}/${ALL_TOPICS_COUNT} Topics  •  Certificate ID: ${certificateId}`, pageWidth / 2, 126, { align: "center" });

      // 5. Signatures & Seals
      const sigY = 160;

      // Left: Date
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(30, 58, 138);
      doc.text(issueDate, 55, sigY, { align: "center" });
      doc.setDrawColor(148, 163, 184);
      doc.setLineWidth(0.6);
      doc.line(30, sigY + 2, 80, sigY + 2);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text("Date of Concurrence", 55, sigY + 7, { align: "center" });

      // Center: Official Gold Seal
      doc.setDrawColor(217, 119, 6);
      doc.setFillColor(254, 243, 199);
      doc.setLineWidth(1.5);
      doc.circle(pageWidth / 2, sigY - 2, 14, "FD");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(180, 83, 9);
      doc.text("AHMED BADR", pageWidth / 2, sigY - 4, { align: "center" });
      doc.text("★ OFFICIAL ★", pageWidth / 2, sigY, { align: "center" });
      doc.text("SEAL", pageWidth / 2, sigY + 4, { align: "center" });

      // Right: Instructor Signature
      doc.setFont("times", "bolditalic");
      doc.setFontSize(14);
      doc.setTextColor(30, 58, 138);
      doc.text("Ahmed Badr", pageWidth - 55, sigY, { align: "center" });
      doc.setDrawColor(148, 163, 184);
      doc.setLineWidth(0.6);
      doc.line(pageWidth - 80, sigY + 2, pageWidth - 30, sigY + 2);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text("Mr. Ahmed Badr", pageWidth - 55, sigY + 7, { align: "center" });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139);
      doc.text("Head of IGCSE Physics Education", pageWidth - 55, sigY + 11, { align: "center" });

      // 6. Security Footer
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184);
      doc.text(
        "Verified digital credential issued via Ahmed Badr's IGCSE Physics Hub. Authenticate at ahmed-badr-physics.hub/verify",
        pageWidth / 2,
        pageHeight - 16,
        { align: "center" }
      );

      // Save PDF
      doc.save(`IGCSE_Physics_Certificate_${studentName.replace(/\s+/g, "_")}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Error generating PDF certificate. Please check browser settings.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `IGCSE Physics Completion Certificate - ${studentName}`,
          text: `I have completed the entire IGCSE Physics syllabus with Mr. Ahmed Badr! (${completedCount}/${ALL_TOPICS_COUNT} topics).`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `🏆 I completed all ${ALL_TOPICS_COUNT} IGCSE Physics topics on Ahmed Badr's Physics Hub! Certificate ID: ${certificateId}`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleSaveName = (name: string) => {
    setStudentName(name);
    try {
      localStorage.setItem("abphysics_student_name", name);
      const rawStats = localStorage.getItem("abphysics_user_stats");
      if (rawStats) {
        const parsed = JSON.parse(rawStats);
        parsed.name = name;
        localStorage.setItem("abphysics_user_stats", JSON.stringify(parsed));
      }
    } catch {}
  };

  return (
    <div id="certificate-section" className="max-w-5xl mx-auto space-y-8 py-6 font-sans">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800/60">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Official IGCSE Physics Credential</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          🎓 Certificate of Curriculum Mastery
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Complete all <strong className="text-blue-600 dark:text-blue-400">{ALL_TOPICS_COUNT} curriculum topics</strong> (Units 1–6 and Paper 6) to unlock and download your high-resolution official PDF certificate signed by Mr. Ahmed Badr.
        </p>
      </div>

      {/* Progress Status Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Syllabus Completion Progress
            </span>
            <div className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>{completedCount} of {ALL_TOPICS_COUNT} Topics Completed</span>
              {progressPercent === 100 ? (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  🎉 Ready to Claim!
                </span>
              ) : (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                  {progressPercent}% Complete
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isEligible && (
              <button
                onClick={() => setUnlockPreview(true)}
                className="text-xs px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Preview sample certificate with your name"
              >
                👁️ Preview Sample Certificate
              </button>
            )}
            {onNavigateToTopics && (
              <button
                onClick={onNavigateToTopics}
                className="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Resume Topics</span>
              </button>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
          <div
            style={{ width: `${progressPercent}%` }}
            className={`h-full rounded-full transition-all duration-500 ${
              progressPercent === 100
                ? "bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-600"
                : "bg-gradient-to-r from-blue-600 to-indigo-600"
            }`}
          />
        </div>

        {progressPercent < 100 && !unlockPreview && (
          <p className="text-xs text-amber-700 dark:text-amber-400 flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800/40">
            <Lock className="w-4 h-4 shrink-0" />
            <span>
              You need {ALL_TOPICS_COUNT - completedCount} more completed topics to claim your official certificate. Go through the chapters and click "Mark This Topic as Complete" at the bottom of each page.
            </span>
          </p>
        )}
      </div>

      {/* Certificate Customization Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <User className="w-4 h-4 text-blue-600" />
          <span>Certificate Personalization Details</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Student Full Name (As it should appear on the certificate)
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => handleSaveName(e.target.value)}
              placeholder="Enter your full name..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Concurrence Date
            </label>
            <input
              type="text"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* High Fidelity Certificate Preview Stage */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Official Certificate Preview</span>
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            ID: {certificateId}
          </span>
        </div>

        {/* Certificate Canvas Frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-800 bg-[#fdfcf8] text-slate-900 p-6 sm:p-10 md:p-12 transition-all">
          {/* Inner Golden Border */}
          <div className="border-2 border-amber-600/60 p-6 sm:p-8 rounded-xl relative space-y-6 text-center">
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 w-4 h-4 bg-blue-900"></div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-blue-900"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-blue-900"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-blue-900"></div>

            {/* Syllabus specification ribbon */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-800">
                Cambridge (0625 / 0972) & Pearson Edexcel (4PH1) IGCSE Physics
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-blue-950 tracking-tight">
                CERTIFICATE OF MASTERY
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                This academic achievement certificate is proudly presented to
              </p>
            </div>

            {/* Student Name Display */}
            <div className="py-2">
              <div className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 border-b-2 border-amber-500/80 inline-block pb-2 px-8">
                {studentName || "IGCSE Physics Scholar"}
              </div>
            </div>

            {/* Accomplishment description */}
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
              for successfully mastering and completing all <strong>{ALL_TOPICS_COUNT} curriculum topics</strong> spanning General Motion, Thermal Dynamics, Wave Properties & Optics, Electricity & Electromagnetism, Nuclear Decay, Astrophysics, and Paper 6 ATP Practical Investigations.
            </p>

            {/* Distinction Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 text-xs text-slate-700">
              <span className="font-bold text-blue-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                GRADE 9 / A* DISTINCTION LEVEL
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="font-mono text-slate-500 text-[11px]">
                {completedCount}/{ALL_TOPICS_COUNT} Topics Mastered
              </span>
            </div>

            {/* Signatures & Seal Section */}
            <div className="pt-6 grid grid-cols-3 items-end gap-2 text-center text-xs">
              {/* Date */}
              <div className="space-y-1">
                <div className="font-bold text-slate-800 text-xs sm:text-sm">{issueDate}</div>
                <div className="w-24 sm:w-32 h-0.5 bg-slate-400 mx-auto"></div>
                <div className="text-[10px] sm:text-xs text-slate-500">Date of Award</div>
              </div>

              {/* Gold Seal */}
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 border-2 border-amber-500 flex flex-col items-center justify-center text-blue-950 font-black shadow-md p-1">
                  <span className="text-[8px] sm:text-[9px] tracking-tight">AHMED BADR</span>
                  <span className="text-[10px] sm:text-xs">★ SEAL ★</span>
                  <span className="text-[7px] sm:text-[8px]">OFFICIAL</span>
                </div>
              </div>

              {/* Instructor Signature */}
              <div className="space-y-1">
                <div className="font-serif italic font-bold text-blue-900 text-sm sm:text-base">
                  Ahmed Badr
                </div>
                <div className="w-24 sm:w-32 h-0.5 bg-slate-400 mx-auto"></div>
                <div className="font-bold text-slate-800 text-[10px] sm:text-xs">Mr. Ahmed Badr</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500">IGCSE Physics Lead</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="download-certificate-btn"
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Generating High-Res PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Download Official Certificate (PDF)</span>
              </>
            )}
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Copied Credential to Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-blue-600" />
                <span>Share Credential</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
