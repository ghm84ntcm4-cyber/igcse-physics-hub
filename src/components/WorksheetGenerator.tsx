import React, { useState, useRef } from "react";
import {
  Download,
  Printer,
  FileText,
  CheckCircle2,
  HelpCircle,
  Calculator,
  User,
  Sparkles,
  Award,
  Layers,
  Copy,
  Check,
  Eye,
  Sliders,
  RefreshCw,
  Phone,
  Bookmark,
  Share2,
} from "lucide-react";
import { IGCSE_WORKSHEET_TEMPLATES, WorksheetTemplate } from "../data/worksheetTemplates";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const WorksheetGenerator: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    IGCSE_WORKSHEET_TEMPLATES[0].id
  );

  // Educator Profile State
  const [teacherName, setTeacherName] = useState("Mr. Ahmed Badr");
  const [teacherSpecialization, setTeacherSpecialization] = useState("IGCSE Physics Specialist");
  const [gradeLevel, setGradeLevel] = useState("Year 10 / 11 • Cambridge IGCSE (0625/0972)");
  const [contactHandle, setContactHandle] = useState("WhatsApp: +966 53 067 5155 / +20 109 968 3837");
  const [institutionName, setInstitutionName] = useState("Ahmed Badr Physics Masterclass");

  // Section Toggles
  const [showTheory, setShowTheory] = useState(true);
  const [showFormulas, setShowFormulas] = useState(true);
  const [showWorkedExample, setShowWorkedExample] = useState(true);
  const [showMCQs, setShowMCQs] = useState(true);
  const [showStructured, setShowStructured] = useState(true);
  const [showChallenge, setShowChallenge] = useState(true);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [isTeacherMode, setIsTeacherMode] = useState(false);

  // UI state
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const worksheetRef = useRef<HTMLDivElement>(null);

  const currentTemplate: WorksheetTemplate =
    IGCSE_WORKSHEET_TEMPLATES.find((t) => t.id === selectedTemplateId) ||
    IGCSE_WORKSHEET_TEMPLATES[0];

  // Direct PDF Download Handler using html2canvas and jsPDF
  const handleDownloadPDF = async () => {
    if (!worksheetRef.current) return;
    setIsGeneratingPDF(true);

    try {
      const element = worksheetRef.current;
      
      // Temporary styling adjustments for crisp screenshot capture
      const canvas = await html2canvas(element, {
        scale: 2, // High resolution retina scale
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: 1200,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // First Page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= pageHeight;

      // Multi-page loop if content exceeds 1 page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
        heightLeft -= pageHeight;
      }

      const safeTitle = currentTemplate.topicTitle.replace(/[^a-zA-Z0-9]/g, "_");
      pdf.save(`IGCSE_Physics_Worksheet_${safeTitle}_Mr_Ahmed_Badr.pdf`);
    } catch (error) {
      console.error("PDF generation failed:", error);
      // Fallback to window print
      window.print();
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${currentTemplate.topicTitle} - IGCSE Physics Study Worksheet
**Educator:** ${teacherName} (${teacherSpecialization})
**Grade / Level:** ${gradeLevel}
**Contact:** ${contactHandle}
**Syllabus Ref:** ${currentTemplate.syllabusRef}
**Total Marks:** ${currentTemplate.totalMarks} | **Estimated Time:** ${currentTemplate.estimatedTime}

---

## 1. Theory & Key Formulas
${currentTemplate.theorySummary.overview}

### Key Definitions:
${currentTemplate.theorySummary.keyDefinitions.map((d) => `- **${d.term}**: ${d.definition} ${d.unit ? `*(Unit: ${d.unit})*` : ""}`).join("\n")}

### Essential Formulas:
${currentTemplate.theorySummary.essentialFormulas.map((f) => `- **${f.name}**: \`${f.formula}\` (${f.units})`).join("\n")}

---

## 2. Worked Example
**Problem:** ${currentTemplate.workedExample.problem}
**Model Solution:**
${currentTemplate.workedExample.steps.map((s) => `${s.stepNumber}. ${s.description}: \`${s.equation}\` -> ${s.calculation} ${s.mark}`).join("\n")}
**Final Answer:** ${currentTemplate.workedExample.finalAnswer}

---

## 3. Practice Questions

### Part A: Multiple Choice Questions
${currentTemplate.mcqs.map((q) => `${q.number}. ${q.question}\n${q.options.map((o) => `   [${o.label}] ${o.text}`).join("\n")}`).join("\n\n")}

### Part B: Structured Questions
${currentTemplate.structuredQuestions.map((q) => `${q.number} ${q.part} ${q.questionText} [${q.marks} marks]`).join("\n\n")}

### Part C: Challenge Question
**${currentTemplate.challengeQuestion.title}**
${currentTemplate.challengeQuestion.questionText} [${currentTemplate.challengeQuestion.marks} marks]

---

## Answer Key & Mark Scheme
${currentTemplate.mcqs.map((q) => `MCQ ${q.number}: [${q.correctAnswer}] - ${q.explanation}`).join("\n")}
${currentTemplate.structuredQuestions.map((q) => `Q${q.number}: ${q.modelAnswer}`).join("\n\n")}
${currentTemplate.challengeQuestion.modelAnswer}
`;

    navigator.clipboard.writeText(md);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Banner */}
        <div className="mb-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 no-print">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Publication-Ready PDF Engine
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  Cambridge 0625 / 0972
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                IGCSE Physics Study Worksheet Generator
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                Generate student-ready revision worksheets with personalized educator branding, theory summaries, essential formula boxes, worked examples, MCQs, structured questions, challenge problems, and step-by-step mark schemes.
              </p>
            </div>

            {/* Main Action Export Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                title="Download high-resolution formatted PDF file"
              >
                {isGeneratingPDF ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Rendering PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                title="Print directly to standard A4 paper"
              >
                <Printer className="w-4 h-4" />
                <span>Print Worksheet</span>
              </button>

              <button
                onClick={handleCopyMarkdown}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm border border-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy entire worksheet in clean Markdown for Word/LMS"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDEBAR: Controls, Customization & Topic Picker */}
          <div className="lg:col-span-4 space-y-6 no-print">
            {/* Topic Selector Card */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-blue-600" />
                Select Syllabus Topic
              </h2>
              <div className="space-y-2">
                {IGCSE_WORKSHEET_TEMPLATES.map((tmpl) => {
                  const isSelected = tmpl.id === selectedTemplateId;
                  return (
                    <button
                      key={tmpl.id}
                      onClick={() => setSelectedTemplateId(tmpl.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-blue-50/80 border-blue-500 ring-2 ring-blue-500/20 shadow-xs"
                          : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-700 uppercase">
                          {tmpl.topicTitle.split("&")[0]}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {tmpl.totalMarks} Marks
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-900 mt-1">
                        {tmpl.topicTitle}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {tmpl.subTopic}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Educator Profile Customization */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-indigo-600" />
                Educator Branding Details
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teacher Name
                  </label>
                  <input
                    type="text"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    className="w-full text-xs font-medium px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject / Specialization
                  </label>
                  <input
                    type="text"
                    value={teacherSpecialization}
                    onChange={(e) => setTeacherSpecialization(e.target.value)}
                    className="w-full text-xs font-medium px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Grade / Level
                  </label>
                  <input
                    type="text"
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    className="w-full text-xs font-medium px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact / WhatsApp Handles
                  </label>
                  <input
                    type="text"
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    className="w-full text-xs font-medium px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Academy / School Header
                  </label>
                  <input
                    type="text"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    className="w-full text-xs font-medium px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Worksheet Section Toggles */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                <Sliders className="w-4 h-4 text-blue-600" />
                Worksheet Structure Modules
              </h2>
              <div className="space-y-2.5">
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <span>Theory & Concept Summary</span>
                  <input
                    type="checkbox"
                    checked={showTheory}
                    onChange={(e) => setShowTheory(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                </label>
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <span>Formula Callout Box</span>
                  <input
                    type="checkbox"
                    checked={showFormulas}
                    onChange={(e) => setShowFormulas(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                </label>
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <span>Step-by-Step Worked Example</span>
                  <input
                    type="checkbox"
                    checked={showWorkedExample}
                    onChange={(e) => setShowWorkedExample(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                </label>
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <span>Part A: Multiple Choice (MCQs)</span>
                  <input
                    type="checkbox"
                    checked={showMCQs}
                    onChange={(e) => setShowMCQs(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                </label>
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <span>Part B: Structured Questions</span>
                  <input
                    type="checkbox"
                    checked={showStructured}
                    onChange={(e) => setShowStructured(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                </label>
                <label className="flex items-center justify-between text-xs font-medium text-slate-700 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <span>Part C: Challenge / HOTs Question</span>
                  <input
                    type="checkbox"
                    checked={showChallenge}
                    onChange={(e) => setShowChallenge(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                </label>
                <div className="pt-2 border-t border-slate-200">
                  <label className="flex items-center justify-between text-xs font-bold text-purple-700 p-2 rounded-lg bg-purple-50 hover:bg-purple-100 cursor-pointer">
                    <span>Include Mark Scheme at End</span>
                    <input
                      type="checkbox"
                      checked={showAnswerKey}
                      onChange={(e) => setShowAnswerKey(e.target.checked)}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Mode Switcher: Student vs Teacher */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  View Mode
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                  {isTeacherMode ? "Teacher Edition" : "Student Edition"}
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                {isTeacherMode
                  ? "Answers and mark allocations are rendered directly in the worksheet."
                  : "Student copy with blank answer response lines for examination practice."}
              </p>
              <button
                onClick={() => setIsTeacherMode(!isTeacherMode)}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Switch to {isTeacherMode ? "Student Copy" : "Teacher Answer Key"}</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: LIVE WORKSHEET PREVIEW & PRINT CANVAS */}
          <div className="lg:col-span-8">
            <div
              ref={worksheetRef}
              id="publication-worksheet-canvas"
              className="bg-white rounded-2xl shadow-xl border border-slate-300 p-8 sm:p-10 font-sans text-slate-900 print:shadow-none print:p-0 print:border-none print:rounded-none"
              style={{ minHeight: "1050px" }}
            >
              {/* ========================================================================= */}
              {/* WORKSHEET HEADER - REPEATED IN BRANDING */}
              {/* ========================================================================= */}
              <div className="border-b-2 border-slate-900 pb-5 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-xs">
                      AB
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                        {institutionName}
                      </h3>
                      <p className="text-xs font-bold text-blue-700">
                        {teacherName} • {teacherSpecialization}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {gradeLevel}
                      </p>
                    </div>
                  </div>
                  <div className="text-right sm:border-l sm:border-slate-200 sm:pl-4">
                    <span className="inline-block px-2.5 py-1 rounded bg-slate-900 text-white font-mono text-xs font-bold mb-1">
                      {currentTemplate.syllabusRef}
                    </span>
                    <p className="text-[11px] font-semibold text-slate-600">
                      {contactHandle}
                    </p>
                    <p className="text-[11px] font-bold text-emerald-700">
                      Target: Grade 9 / A* Excellence
                    </p>
                  </div>
                </div>

                {/* Worksheet Title & Meta */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                      Topic Masterclass Worksheet
                    </span>
                    <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {currentTemplate.topicTitle}
                    </h1>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      {currentTemplate.subTopic}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-800 rounded border border-slate-200">
                      Marks: <strong>{currentTemplate.totalMarks}</strong>
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-800 rounded border border-slate-200">
                      Time: <strong>{currentTemplate.estimatedTime}</strong>
                    </span>
                  </div>
                </div>

                {/* Student Info Lines Box */}
                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-600 block">Student Name:</span>
                    <div className="border-b border-slate-400 h-5 mt-0.5"></div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600 block">Date:</span>
                    <div className="border-b border-slate-400 h-5 mt-0.5"></div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600 block">Class / Set:</span>
                    <div className="border-b border-slate-400 h-5 mt-0.5"></div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600 block">Score / Grade:</span>
                    <div className="border-b border-slate-400 h-5 mt-0.5 text-right font-mono font-bold text-slate-700">
                      / {currentTemplate.totalMarks}
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 1: THEORY & FORMULA CALLOUT */}
              {/* ========================================================================= */}
              {showTheory && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2.5 border-b border-slate-200 pb-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      Theory & Core Principles Summary
                    </h2>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    {currentTemplate.theorySummary.overview}
                  </p>

                  {/* Definitions Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3.5">
                    {currentTemplate.theorySummary.keyDefinitions.map((d, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                      >
                        <span className="font-bold text-slate-900 block">
                          {d.term} {d.unit && <span className="font-normal text-slate-500">({d.unit})</span>}
                        </span>
                        <p className="text-slate-600 text-[11px] mt-0.5">{d.definition}</p>
                      </div>
                    ))}
                  </div>

                  {/* Essential Formula Visual Box */}
                  {showFormulas && (
                    <div className="p-3 bg-blue-50/70 border-2 border-blue-600/30 rounded-xl mb-3.5">
                      <div className="flex items-center gap-1.5 mb-2 text-blue-900 font-bold text-xs">
                        <Calculator className="w-4 h-4 text-blue-700" />
                        <span>Essential Syllabus Formulas & SI Units</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {currentTemplate.theorySummary.essentialFormulas.map((f, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-2 rounded-lg border border-blue-200 text-center"
                          >
                            <span className="text-[10px] font-bold uppercase text-slate-500 block">
                              {f.name}
                            </span>
                            <code className="text-xs font-bold text-blue-800 font-mono block my-0.5">
                              {f.formula}
                            </code>
                            <span className="text-[10px] text-slate-500 block">
                              {f.units}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Rules Bullet Points */}
                  <div className="bg-amber-50/70 border border-amber-300 rounded-xl p-3 text-xs">
                    <span className="font-bold text-amber-900 block mb-1">
                      Examiner Key Rules & Golden Tips:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-amber-950 text-[11px]">
                      {currentTemplate.theorySummary.keyRules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* SECTION 2: WORKED EXAMPLE */}
              {/* ========================================================================= */}
              {showWorkedExample && (
                <div className="mb-6 p-4 bg-emerald-50/50 border border-emerald-300 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                        Step-by-Step Worked Example (Model Solution)
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
                      Examiner Method
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-900 mb-2">
                    {currentTemplate.workedExample.problem}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-800 mb-2.5">
                    {currentTemplate.workedExample.steps.map((s) => (
                      <div
                        key={s.stepNumber}
                        className="bg-white/80 p-2 rounded border border-emerald-200 flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="font-bold text-emerald-800">
                            Step {s.stepNumber}: {s.description}
                          </span>
                          <div className="font-mono text-[11px] text-slate-700 mt-0.5">
                            {s.equation} ➔ <strong>{s.calculation}</strong>
                          </div>
                        </div>
                        <span className="font-bold text-[11px] text-emerald-700 shrink-0">
                          {s.mark}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 bg-white p-2 rounded border border-emerald-200">
                    <span>
                      <strong className="text-emerald-800">Final Result:</strong>{" "}
                      {currentTemplate.workedExample.finalAnswer}
                    </span>
                    <span className="text-amber-800 font-medium italic">
                      Tip: {currentTemplate.workedExample.commonPitfall}
                    </span>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* SECTION 3: PART A - MULTIPLE CHOICE QUESTIONS */}
              {/* ========================================================================= */}
              {showMCQs && (
                <div className="mb-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center">
                        2
                      </span>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                        Part A: Multiple Choice Questions (Paper 1 / Paper 2)
                      </h2>
                    </div>
                    <span className="text-xs font-bold text-slate-500">[4 Marks]</span>
                  </div>

                  <div className="space-y-4">
                    {currentTemplate.mcqs.map((mcq) => (
                      <div
                        key={mcq.id}
                        className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs"
                      >
                        <p className="font-bold text-slate-900 mb-2">
                          <span className="text-blue-700 font-mono mr-1">
                            Q{mcq.number}.
                          </span>{" "}
                          {mcq.question}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mcq.options.map((opt) => {
                            const isCorrect = isTeacherMode && opt.label === mcq.correctAnswer;
                            return (
                              <div
                                key={opt.label}
                                className={`p-2 rounded-lg border flex items-start gap-2 ${
                                  isCorrect
                                    ? "bg-emerald-100 border-emerald-400 font-bold text-emerald-950"
                                    : "bg-white border-slate-200 text-slate-700"
                                }`}
                              >
                                <span
                                  className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${
                                    isCorrect
                                      ? "bg-emerald-600 text-white"
                                      : "bg-slate-100 text-slate-700 border border-slate-300"
                                  }`}
                                >
                                  {opt.label}
                                </span>
                                <span className="text-[11px] leading-tight mt-0.5">
                                  {opt.text}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                        {isTeacherMode && (
                          <div className="mt-2.5 p-2 bg-emerald-50 rounded border border-emerald-200 text-[11px] text-emerald-900">
                            <strong>Mark Scheme Explanation:</strong> {mcq.explanation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* SECTION 4: PART B - STRUCTURED QUESTIONS */}
              {/* ========================================================================= */}
              {showStructured && (
                <div className="mb-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center">
                        3
                      </span>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                        Part B: Structured Theory & Calculation Questions (Paper 3 / Paper 4)
                      </h2>
                    </div>
                    <span className="text-xs font-bold text-slate-500">
                      [
                      {currentTemplate.structuredQuestions.reduce(
                        (acc, q) => acc + q.marks,
                        0
                      )}{" "}
                      Marks]
                    </span>
                  </div>

                  <div className="space-y-5">
                    {currentTemplate.structuredQuestions.map((sq) => (
                      <div key={sq.id} className="text-xs">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <p className="font-bold text-slate-900 leading-relaxed whitespace-pre-line">
                            <span className="text-blue-700 font-mono mr-1">
                              {sq.number} {sq.part}
                            </span>
                            {sq.questionText}
                          </p>
                          <span className="font-bold text-slate-600 shrink-0 font-mono text-[11px]">
                            [{sq.marks}]
                          </span>
                        </div>

                        {/* Student Working Area or Teacher Key */}
                        {isTeacherMode ? (
                          <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-300 text-xs text-purple-950 my-2">
                            <span className="font-bold text-purple-900 block mb-1">
                              Model Answer & Mark Breakdown:
                            </span>
                            <p className="whitespace-pre-line leading-relaxed mb-2 font-mono text-[11px]">
                              {sq.modelAnswer}
                            </p>
                            <div className="space-y-0.5 text-[10px] text-purple-800 border-t border-purple-200 pt-1.5">
                              {sq.markBreakdown.map((mb, idx) => (
                                <div key={idx} className="flex items-center gap-1.5">
                                  <Check className="w-3 h-3 text-purple-600" />
                                  <span>{mb}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4 my-3 px-2">
                            {Array.from({ length: sq.lines }).map((_, idx) => (
                              <div
                                key={idx}
                                className="border-b border-dotted border-slate-300 h-3"
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* SECTION 5: PART C - CHALLENGE / HIGH ORDER THINKING */}
              {/* ========================================================================= */}
              {showChallenge && (
                <div className="mb-6 p-4 bg-indigo-50/60 border-2 border-indigo-200 rounded-2xl">
                  <div className="flex items-center justify-between border-b border-indigo-200 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-indigo-700" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-indigo-950">
                        Part C: Challenge / Higher-Order Thinking Question (Grade 9 / A*)
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-indigo-800 font-mono">
                      [{currentTemplate.challengeQuestion.marks} Marks]
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-900 mb-1">
                    {currentTemplate.challengeQuestion.title}
                  </p>
                  <p className="text-xs text-slate-800 leading-relaxed whitespace-pre-line mb-3">
                    {currentTemplate.challengeQuestion.questionText}
                  </p>

                  {isTeacherMode ? (
                    <div className="p-3 bg-white rounded-xl border border-indigo-300 text-xs text-slate-900">
                      <span className="font-bold text-indigo-900 block mb-1">
                        Complete Mark Scheme Solution:
                      </span>
                      <p className="whitespace-pre-line leading-relaxed text-[11px] font-mono text-slate-800 mb-2">
                        {currentTemplate.challengeQuestion.modelAnswer}
                      </p>
                      <div className="p-2 bg-indigo-50 rounded text-[11px] text-indigo-900 italic">
                        <strong>Examiner Insight:</strong>{" "}
                        {currentTemplate.challengeQuestion.examinerInsight}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 my-3 px-2">
                      {Array.from({ length: currentTemplate.challengeQuestion.lines }).map(
                        (_, idx) => (
                          <div
                            key={idx}
                            className="border-b border-dotted border-indigo-300 h-3"
                          ></div>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================================= */}
              {/* SECTION 6: ANSWER KEY / MARK SCHEME (IF TOGGLED) */}
              {/* ========================================================================= */}
              {showAnswerKey && !isTeacherMode && (
                <div className="mt-8 pt-6 border-t-2 border-slate-900">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-700" />
                      Comprehensive Answer Key & Mark Scheme
                    </h3>
                    <span className="text-xs font-bold text-purple-700">Teacher's Guide</span>
                  </div>

                  {/* MCQ Answers Table */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-800 block mb-1.5">
                      Part A: Multiple Choice Solutions
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {currentTemplate.mcqs.map((q) => (
                        <div
                          key={q.id}
                          className="p-2 bg-slate-50 rounded border border-slate-200"
                        >
                          <span className="font-bold text-blue-700">Q{q.number}:</span>{" "}
                          <strong className="text-emerald-700">[{q.correctAnswer}]</strong>
                          <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-2">
                            {q.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Structured Answers */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-800 block">
                      Part B & C: Calculation & Structured Mark Scheme
                    </span>
                    {currentTemplate.structuredQuestions.map((sq) => (
                      <div
                        key={sq.id}
                        className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs"
                      >
                        <span className="font-bold text-slate-900">
                          Q{sq.number} {sq.part} Model Answer:
                        </span>
                        <p className="text-[11px] font-mono text-slate-700 whitespace-pre-line mt-1">
                          {sq.modelAnswer}
                        </p>
                      </div>
                    ))}
                    <div className="p-2.5 bg-indigo-50/50 rounded-lg border border-indigo-200 text-xs">
                      <span className="font-bold text-indigo-950">
                        Challenge Question Model Answer:
                      </span>
                      <p className="text-[11px] font-mono text-indigo-900 whitespace-pre-line mt-1">
                        {currentTemplate.challengeQuestion.modelAnswer}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* WORKSHEET FOOTER - PRESENT ON EVERY PRINT/PDF PAGE */}
              {/* ========================================================================= */}
              <div className="mt-8 pt-4 border-t border-slate-300 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-slate-500 font-medium gap-2">
                <div>
                  <span>
                    Prepared by: <strong>{teacherName}</strong> • {teacherSpecialization}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{contactHandle}</span>
                  <span>•</span>
                  <span className="font-bold text-slate-800">
                    Page 1 / 1 • {institutionName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
