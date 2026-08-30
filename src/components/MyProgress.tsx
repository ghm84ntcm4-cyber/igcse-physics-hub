import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Award,
  CheckCircle2,
  BookOpen,
  Trophy,
  Flame,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Clock,
  Download,
} from "lucide-react";
import { ALL_CURRICULUM_TOPICS } from "./StudyPlanner";
import { ALL_SYLLABUS_TOPIC_IDS, BADGES } from "./ProgressTracker";
import { CertificateGenerator } from "./CertificateGenerator";

export const MyProgress: React.FC = () => {
  const navigate = useNavigate();
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("abphysics_completed_topics");
      if (saved) return JSON.parse(saved);
      const rawProgress = localStorage.getItem("abphysics_progress");
      if (rawProgress) {
        const parsed = JSON.parse(rawProgress);
        if (parsed.completed) {
          const map: Record<string, boolean> = {};
          parsed.completed.forEach((id: string) => {
            map[id] = true;
          });
          return map;
        }
      }
    } catch {}
    return {};
  });

  const [activeTab, setActiveTab] = useState<"overview" | "certificate">("overview");

  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const totalCount = ALL_SYLLABUS_TOPIC_IDS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const toggleTopic = (id: string) => {
    setCompletedTopics((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("abphysics_completed_topics", JSON.stringify(next));
        const completedArr = Object.keys(next).filter((k) => next[k]);
        const progressObj = {
          completed: completedArr,
          badges: BADGES.filter((b) => completedArr.length >= b.threshold).map((b) => ({
            id: b.id,
            title: b.title,
            unlockedAt: Date.now(),
          })),
        };
        localStorage.setItem("abphysics_progress", JSON.stringify(progressObj));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all completion status?")) {
      setCompletedTopics({});
      try {
        localStorage.removeItem("abphysics_completed_topics");
        localStorage.removeItem("abphysics_progress");
      } catch {}
    }
  };

  // Group topics by unit
  const unitsMap: Record<string, typeof ALL_CURRICULUM_TOPICS> = {};
  ALL_CURRICULUM_TOPICS.forEach((t) => {
    if (!unitsMap[t.unit]) {
      unitsMap[t.unit] = [];
    }
    unitsMap[t.unit].push(t);
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12 font-sans">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800/60">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>Student Learning & Revision Dashboard</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          📊 My Progress & Course Certificate
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Track your mastery across all {totalCount} IGCSE Physics topics, unlock milestone badges, and generate your official completion certificate.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "overview"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Syllabus Checklist ({completedCount}/{totalCount})</span>
        </button>

        <button
          onClick={() => setActiveTab("certificate")}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "certificate"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>Claim Certificate {completedCount === totalCount ? "🎉" : ""}</span>
        </button>
      </div>

      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Progress Summary Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Curriculum Mastery Status
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                  {progressPercent}% Complete
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {completedCount} of {totalCount} topics mastered across 6 Units + Paper 6 ATP
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab("certificate")}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
                  title="Reset Progress"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full h-3.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
              <div
                style={{ width: `${progressPercent}%` }}
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 rounded-full transition-all duration-500"
              />
            </div>

            {/* Badges Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {BADGES.map((b) => {
                const isUnlocked = completedCount >= b.threshold;
                return (
                  <div
                    key={b.id}
                    className={`p-3 rounded-xl border text-center space-y-1 transition-all ${
                      isUnlocked
                        ? "bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700/60"
                        : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60"
                    }`}
                  >
                    <div className="text-lg">{b.title.split(" ")[0]}</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                      {b.title.replace(/^[^\s]+\s/, "")}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {isUnlocked ? "✅ Unlocked" : `${b.threshold} topics required`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Unit-by-Unit Topics Checklist */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                📚 Full Curriculum Checklist
              </h2>
              <span className="text-xs text-slate-500">Click checkboxes to update status</span>
            </div>

            <div className="space-y-4">
              {Object.entries(unitsMap).map(([unitTitle, topics]) => {
                const unitCompletedCount = topics.filter((t) => completedTopics[t.id]).length;
                const unitPercent = Math.round((unitCompletedCount / topics.length) * 100);

                return (
                  <div
                    key={unitTitle}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xs space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <div>
                        <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                          {unitTitle}
                        </h3>
                        <span className="text-xs text-slate-500">
                          {unitCompletedCount} of {topics.length} topics completed ({unitPercent}%)
                        </span>
                      </div>
                      <div className="w-24 sm:w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${unitPercent}%` }}
                          className="h-full bg-blue-600 rounded-full transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {topics.map((topic) => {
                        const isDone = !!completedTopics[topic.id];
                        return (
                          <div
                            key={topic.id}
                            className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                              isDone
                                ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40"
                                : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800"
                            }`}
                          >
                            <label className="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
                              <input
                                type="checkbox"
                                checked={isDone}
                                onChange={() => toggleTopic(topic.id)}
                                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                              />
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                                  {topic.id}: {topic.title}
                                </div>
                                <div className="text-[10px] text-slate-500">
                                  {topic.durationMinutes} mins {topic.extendedOnly ? "• Extended" : ""}
                                </div>
                              </div>
                            </label>

                            <Link
                              to={`/topics/${topic.id}`}
                              className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-blue-600 hover:text-blue-800 dark:text-blue-400 border border-slate-200 dark:border-slate-700 text-xs transition-colors shrink-0"
                              title="Read Topic Notes"
                            >
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeTab === "certificate" && (
        <CertificateGenerator onNavigateToTopics={() => navigate("/topics")} />
      )}
    </div>
  );
};
