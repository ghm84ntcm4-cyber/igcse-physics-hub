import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Printer,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Award,
  Filter,
} from "lucide-react";
import { GoogleCalendarReminders } from "./GoogleCalendarReminders";

export interface CurriculumTopicItem {
  id: string;
  title: string;
  unit: string;
  unitNum: number;
  durationMinutes: number;
  extendedOnly?: boolean;
}

export const ALL_CURRICULUM_TOPICS: CurriculumTopicItem[] = [
  // Unit 1: Motion, Forces & Energy
  { id: "1.1", title: "Speed, Velocity & Acceleration", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 45 },
  { id: "1.2", title: "Distance-Time & Velocity-Time Graphs", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 50 },
  { id: "1.3", title: "Newton's Laws of Motion", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 45 },
  { id: "1.4", title: "Forces, Mass & Weight", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 40 },
  { id: "1.5", title: "Resultant Forces & Free Body Diagrams", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 45 },
  { id: "1.6", title: "Moments & Equilibrium", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 45 },
  { id: "1.7", title: "Momentum & Conservation of Momentum", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 50, extendedOnly: true },
  { id: "1.8", title: "Work, Energy & Power", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 45 },
  { id: "1.9", title: "Energy Resources & Efficiency", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 40 },
  { id: "1.10", title: "Density & Pressure in Fluids", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 45 },
  { id: "1.11", title: "Hooke's Law & Elasticity", unit: "Motion, Forces & Energy", unitNum: 1, durationMinutes: 40 },

  // Unit 2: Thermal Physics
  { id: "2.1", title: "States of Matter & Kinetic Particle Model", unit: "Thermal Physics", unitNum: 2, durationMinutes: 40 },
  { id: "2.2", title: "Thermal Expansion of Solids, Liquids & Gases", unit: "Thermal Physics", unitNum: 2, durationMinutes: 35 },
  { id: "2.3", title: "Specific Heat Capacity", unit: "Thermal Physics", unitNum: 2, durationMinutes: 50, extendedOnly: true },
  { id: "2.4", title: "Specific Latent Heat & Phase Changes", unit: "Thermal Physics", unitNum: 2, durationMinutes: 45, extendedOnly: true },
  { id: "2.5", title: "Thermal Energy Transfer (Conduction, Convection, Radiation)", unit: "Thermal Physics", unitNum: 2, durationMinutes: 50 },

  // Unit 3: Waves & Optics
  { id: "3.1", title: "General Wave Properties & Wave Equation", unit: "Waves & Optics", unitNum: 3, durationMinutes: 45 },
  { id: "3.2", title: "Reflection, Refraction & Total Internal Reflection", unit: "Waves & Optics", unitNum: 3, durationMinutes: 55 },
  { id: "3.3", title: "Thin Converging Lenses & Ray Diagrams", unit: "Waves & Optics", unitNum: 3, durationMinutes: 50 },
  { id: "3.4", title: "Electromagnetic Spectrum & Applications", unit: "Waves & Optics", unitNum: 3, durationMinutes: 40 },
  { id: "3.5", title: "Sound Waves & Speed of Sound", unit: "Waves & Optics", unitNum: 3, durationMinutes: 40 },

  // Unit 4: Electricity & Magnetism
  { id: "4.1", title: "Electric Charge & Static Electricity", unit: "Electricity & Magnetism", unitNum: 4, durationMinutes: 40 },
  { id: "4.2", title: "Current, Potential Difference & Resistance", unit: "Electricity & Magnetism", unitNum: 4, durationMinutes: 50 },
  { id: "4.3", title: "Series & Parallel Circuits & Potential Dividers", unit: "Electricity & Magnetism", unitNum: 4, durationMinutes: 55 },
  { id: "4.4", title: "Electrical Power, Energy & Mains Safety", unit: "Electricity & Magnetism", unitNum: 4, durationMinutes: 45 },
  { id: "4.5", title: "Magnetic Fields & Electromagnetism", unit: "Electricity & Magnetism", unitNum: 4, durationMinutes: 40 },
  { id: "4.6", title: "The Motor Effect & Left-Hand Rule", unit: "Electricity & Magnetism", unitNum: 4, durationMinutes: 45, extendedOnly: true },
  { id: "4.7", title: "Electromagnetic Induction, Generators & Transformers", unit: "Electricity & Magnetism", unitNum: 4, durationMinutes: 55, extendedOnly: true },

  // Unit 5: Nuclear Physics
  { id: "5.1", title: "The Nuclear Atom & Isotopes", unit: "Nuclear Physics", unitNum: 5, durationMinutes: 40 },
  { id: "5.2", title: "Radioactive Emissions (Alpha, Beta, Gamma)", unit: "Nuclear Physics", unitNum: 5, durationMinutes: 45 },
  { id: "5.3", title: "Radioactive Decay Equations & Half-Life Calculations", unit: "Nuclear Physics", unitNum: 5, durationMinutes: 50 },
  { id: "5.4", title: "Nuclear Fission & Nuclear Fusion", unit: "Nuclear Physics", unitNum: 5, durationMinutes: 40, extendedOnly: true },

  // Unit 6: Space Physics
  { id: "6.1", title: "The Solar System, Gravity & Orbital Motion", unit: "Space Physics", unitNum: 6, durationMinutes: 40 },
  { id: "6.2", title: "Stars, Life Cycle & The Expanding Universe (Redshift)", unit: "Space Physics", unitNum: 6, durationMinutes: 45 },

  // Paper 6 Practical Skills
  { id: "p6", title: "Paper 6 Practical Skills, Errors, Instruments & Experiments", unit: "Alternative to Practical", unitNum: 7, durationMinutes: 60 },
];

interface StudySession {
  date: Date;
  dayNumber: number;
  topics: CurriculumTopicItem[];
}

export const StudyPlanner: React.FC = () => {
  // Default exam date set to 60 days in the future
  const getDefaultDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 60);
    return d.toISOString().split("T")[0];
  };

  const [examDateStr, setExamDateStr] = useState<string>(getDefaultDate());
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);
  const [tierFilter, setTierFilter] = useState<"all" | "core" | "extended">("all");
  const [generatedPlan, setGeneratedPlan] = useState<StudySession[] | null>(() => {
    try {
      const saved = localStorage.getItem("abphysics_study_plan");
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((item: any) => ({
          ...item,
          date: new Date(item.date),
        }));
      }
    } catch {}
    return null;
  });
  const [planStats, setPlanStats] = useState<{
    totalDaysUntilExam: number;
    availableStudyDays: number;
    topicsCount: number;
    examDate: Date;
    isTight: boolean;
  } | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("abphysics_completed_topics");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleTopicCompleted = (id: string) => {
    setCompletedTopics((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("abphysics_completed_topics", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!examDateStr) return;

    const examDate = new Date(examDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = examDate.getTime() - today.getTime();
    const totalDaysUntilExam = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (totalDaysUntilExam <= 0) {
      alert("Please choose a future exam date.");
      return;
    }

    // Filter topics by tier if chosen
    let topics = ALL_CURRICULUM_TOPICS;
    if (tierFilter === "core") {
      topics = ALL_CURRICULUM_TOPICS.filter((t) => !t.extendedOnly);
    }

    const totalWeeks = totalDaysUntilExam / 7;
    const availableStudyDays = Math.max(1, Math.floor(totalWeeks * daysPerWeek));
    const isTight = availableStudyDays < topics.length;

    const topicsPerDay = Math.max(1, Math.ceil(topics.length / availableStudyDays));
    const plan: StudySession[] = [];
    let topicIndex = 0;
    let dayOffset = 0;
    const dayIncrement = Math.max(1, Math.round(7 / daysPerWeek));

    let sessionCount = 1;
    while (topicIndex < topics.length && dayOffset < totalDaysUntilExam) {
      const dayTopics = topics.slice(topicIndex, topicIndex + topicsPerDay);
      const sessionDate = new Date(today);
      sessionDate.setDate(today.getDate() + dayOffset);

      plan.push({
        date: sessionDate,
        dayNumber: sessionCount,
        topics: dayTopics,
      });

      topicIndex += topicsPerDay;
      dayOffset += dayIncrement;
      sessionCount++;
    }

    // If remaining topics exist because of interval rounding, add to last session
    if (topicIndex < topics.length && plan.length > 0) {
      const lastSession = plan[plan.length - 1];
      const remainingTopics = topics.slice(topicIndex);
      lastSession.topics = [...lastSession.topics, ...remainingTopics];
    }

    setGeneratedPlan(plan);
    try {
      localStorage.setItem("abphysics_study_plan", JSON.stringify(plan));
    } catch (e) {
      console.error("Failed to persist study plan:", e);
    }
    setPlanStats({
      totalDaysUntilExam,
      availableStudyDays,
      topicsCount: topics.length,
      examDate,
      isTight,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const completedCount = ALL_CURRICULUM_TOPICS.filter((t) => completedTopics[t.id]).length;
  const progressPercent = Math.round((completedCount / ALL_CURRICULUM_TOPICS.length) * 100);

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  return (
    <div id="study-planner" className="max-w-5xl mx-auto space-y-8 pb-12 font-sans">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
          <Calendar className="w-3.5 h-3.5" />
          <span>Ahmed Badr's IGCSE Physics Study Planner</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          🗓️ Build Your Custom Study Plan
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tell us your exam date and how many days you study per week. We will distribute every Cambridge (0625/0972) and Edexcel (4PH1) topic evenly across your remaining schedule.
        </p>
      </div>

      {/* Input Configuration Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Exam Date */}
            <div>
              <label htmlFor="exam-date-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Exam Date (Target)
              </label>
              <input
                type="date"
                id="exam-date-input"
                value={examDateStr}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setExamDateStr(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                required
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Target date of your Physics Paper 2, 4 or 6.
              </span>
            </div>

            {/* Study Days per Week */}
            <div>
              <label htmlFor="days-per-week-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Study Days per Week
              </label>
              <select
                id="days-per-week-input"
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              >
                <option value="7">Every day (7 days / week)</option>
                <option value="5">5 days a week (Recommended)</option>
                <option value="4">4 days a week</option>
                <option value="3">3 days a week (Weekend + Midweek)</option>
                <option value="2">2 days a week (Intensive)</option>
              </select>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Days you will dedicate at least 45 mins to Physics.
              </span>
            </div>

            {/* Syllabus Tier Filter */}
            <div>
              <label htmlFor="tier-filter-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Syllabus Tier Focus
              </label>
              <select
                id="tier-filter-input"
                value={tierFilter}
                onChange={(e) => setTierFilter(e.target.value as any)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              >
                <option value="all">Core + Extended (Grades 9–1 / A*–G)</option>
                <option value="extended">Extended Specialist (Targeting 8–9 / A*)</option>
                <option value="core">Core Syllabus Only (Targeting Grades C/4–5)</option>
              </select>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Includes all 6 units + Paper 6 practical techniques.
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Completed Topics:</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                {completedCount} / {ALL_CURRICULUM_TOPICS.length} ({progressPercent}%)
              </span>
            </div>

            <button
              type="submit"
              id="generate-plan-btn"
              className="w-full sm:w-auto px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Generate My Daily Study Plan</span>
            </button>
          </div>
        </form>
      </div>

      {/* Generated Plan Output */}
      {generatedPlan && planStats && (
        <div id="plan-output" className="space-y-6">
          {/* Summary Box */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                  🎯 Target Exam: {planStats.examDate.toLocaleDateString("en-GB", dateOptions)}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Your Custom {generatedPlan.length}-Session Physics Roadmap
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
                  You have <strong>{planStats.totalDaysUntilExam} total days</strong> remaining until exam day. With {daysPerWeek} study days per week, we've scheduled <strong>{generatedPlan.length} sessions</strong> covering all <strong>{planStats.topicsCount} syllabus topics</strong>.
                </p>
              </div>

              <div className="flex flex-row md:flex-col gap-3 shrink-0">
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 bg-white hover:bg-amber-400 text-blue-950 font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-blue-900" />
                  <span>Print / Save Plan PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tight Timeline Warning */}
          {planStats.isTight && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-sm font-bold text-amber-900">
                  ⚠️ Fast-Paced Revision Timeline
                </strong>
                <p className="text-xs text-amber-800 leading-relaxed">
                  You have {planStats.availableStudyDays} available study days for {planStats.topicsCount} topics. Multiple topics have been grouped per session. If time permits, consider increasing your study days per week to 7 or extending daily revision time to 90 minutes.
                </p>
              </div>
            </div>
          )}

          {/* Sessions List */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-700" />
                <span>Scheduled Daily Sessions</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Tick checkboxes as you complete each topic
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {generatedPlan.map((session, index) => {
                const isAllCompleted = session.topics.every((t) => completedTopics[t.id]);

                return (
                  <div
                    key={index}
                    className={`py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors ${
                      isAllCompleted ? "bg-emerald-50/50 rounded-xl px-3" : ""
                    }`}
                  >
                    {/* Date & Session Badge */}
                    <div className="flex items-center gap-3 sm:w-44 shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex flex-col items-center justify-center text-center">
                        <span className="text-[10px] font-bold uppercase text-blue-700">
                          {session.date.toLocaleDateString("en-GB", { month: "short" })}
                        </span>
                        <span className="text-sm font-extrabold text-blue-950 leading-none">
                          {session.date.getDate()}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          Session #{session.dayNumber}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {session.date.toLocaleDateString("en-GB", { weekday: "short" })}
                        </div>
                      </div>
                    </div>

                    {/* Topics Scheduled */}
                    <div className="flex-1 space-y-2 w-full">
                      {session.topics.map((topic) => {
                        const isDone = !!completedTopics[topic.id];
                        return (
                          <div
                            key={topic.id}
                            className={`p-2.5 rounded-xl border flex items-center justify-between gap-3 text-xs transition-all ${
                              isDone
                                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                                : "bg-slate-50 border-slate-200 text-slate-800 hover:border-blue-300"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <input
                                type="checkbox"
                                checked={isDone}
                                onChange={() => toggleTopicCompleted(topic.id)}
                                className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
                                id={`topic-check-${topic.id}`}
                              />
                              <label
                                htmlFor={`topic-check-${topic.id}`}
                                className={`font-semibold cursor-pointer truncate ${
                                  isDone ? "line-through text-slate-500" : ""
                                }`}
                              >
                                📘 {topic.id} {topic.title}
                              </label>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[10px] text-slate-500 hidden md:inline">
                                ~{topic.durationMinutes} min
                              </span>
                              {topic.extendedOnly && (
                                <span className="px-1.5 py-0.2 rounded bg-purple-100 text-purple-700 font-bold text-[9px]">
                                  Ext
                                </span>
                              )}
                              <Link
                                to={topic.id.startsWith("1.") ? `/topics/${topic.id}` : `/topics`}
                                className="p-1 rounded-md hover:bg-white text-blue-700 hover:text-blue-900 transition-colors"
                                title="Open Topic Study Notes"
                              >
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Print & Share Action */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                💡 <em>Tip: Use the print button to export your plan as a clean PDF or print it for your study desk.</em>
              </div>
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>🖨️ Print / Save My Plan</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Google Calendar Reminders & Sync Integration */}
      <GoogleCalendarReminders plan={generatedPlan} />

      {/* Help & Tutoring Contact CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1.5 text-center md:text-left">
          <h3 className="text-lg font-bold">Need a Customized 1-on-1 Revision Schedule?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Contact Mr. Ahmed Badr directly on WhatsApp for diagnostic assessments, targeted Paper 4 calculation drills, and personalized exam timetable advice.
          </p>
        </div>
        <a
          href="https://wa.me/966530675155?text=Hello%20Mr.%20Ahmed%20Badr,%20I%20would%20like%20guidance%20on%20my%20IGCSE%20Physics%20study%20schedule."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shrink-0"
        >
          Message on WhatsApp →
        </a>
      </div>
    </div>
  );
};
