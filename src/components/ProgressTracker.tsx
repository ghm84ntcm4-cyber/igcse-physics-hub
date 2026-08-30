import React, { useState } from "react";
import { Award, CheckCircle2, RotateCcw, Sparkles } from "lucide-react";

export interface ProgressBadge {
  id: string;
  threshold: number;
  title: string;
  desc: string;
}

export const ALL_SYLLABUS_TOPIC_IDS = [
  "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10", "1.11",
  "2.1", "2.2", "2.3", "2.4", "2.5",
  "3.1", "3.2", "3.3", "3.4", "3.5",
  "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7",
  "5.1", "5.2", "5.3", "5.4",
  "6.1", "6.2",
  "p6"
];

export const BADGES: ProgressBadge[] = [
  { id: "first-topic", threshold: 1, title: "🚀 First Step", desc: "Completed your first physics topic!" },
  { id: "five-topics", threshold: 5, title: "🔥 Getting Serious", desc: "5 topics completed!" },
  { id: "ten-topics", threshold: 10, title: "⭐ Halfway Hero", desc: "10 topics mastered!" },
  { id: "all-topics", threshold: ALL_SYLLABUS_TOPIC_IDS.length, title: "🏆 Unit Master", desc: "Completed the entire physics curriculum!" },
];

const STORAGE_KEY = "abphysics_progress";

interface UnlockedBadge {
  id: string;
  title: string;
  unlockedAt: number;
}

interface ProgressData {
  completed: string[];
  badges: UnlockedBadge[];
}

export const ProgressTracker: React.FC<{
  currentTopicId?: string;
  currentTopicTitle?: string;
  showCompleteButton?: boolean;
}> = ({ currentTopicId = "1.1", currentTopicTitle, showCompleteButton = true }) => {
  const [data, setData] = useState<ProgressData>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error(e);
    }
    return { completed: [], badges: [] };
  });

  const [activePopup, setActivePopup] = useState<{ title: string; desc: string } | null>(null);

  const saveData = (nextData: ProgressData) => {
    setData(nextData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextData));
      const topicObj: Record<string, boolean> = {};
      nextData.completed.forEach((id) => {
        topicObj[id] = true;
      });
      localStorage.setItem("abphysics_completed_topics", JSON.stringify(topicObj));
    } catch (e) {
      console.error(e);
    }
  };

  const checkNewBadges = (updatedCompleted: string[], currentBadges: UnlockedBadge[]) => {
    const newBadges = [...currentBadges];
    BADGES.forEach((badge) => {
      const alreadyUnlocked = newBadges.some((b) => b.id === badge.id);
      if (!alreadyUnlocked && updatedCompleted.length >= badge.threshold) {
        newBadges.push({ id: badge.id, title: badge.title, unlockedAt: Date.now() });
        setActivePopup({ title: badge.title, desc: badge.desc });
        setTimeout(() => {
          setActivePopup(null);
        }, 4500);
      }
    });
    return newBadges;
  };

  const markCurrentTopicComplete = () => {
    if (!currentTopicId) return;
    if (!data.completed.includes(currentTopicId)) {
      const nextCompleted = [...data.completed, currentTopicId];
      const nextBadges = checkNewBadges(nextCompleted, data.badges);
      saveData({ completed: nextCompleted, badges: nextBadges });
    }
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
      const empty = { completed: [], badges: [] };
      saveData(empty);
    }
  };

  const isCompleted = currentTopicId ? data.completed.includes(currentTopicId) : false;
  const percent = Math.round((data.completed.length / ALL_SYLLABUS_TOPIC_IDS.length) * 100);

  return (
    <>
      {/* Sticky Progress Bar Widget */}
      <div
        id="progress-widget"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-2.5 shadow-2xs transition-colors dark:bg-slate-900/95 dark:border-slate-800"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-5 font-sans">
          {/* Completion Percentage */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xs font-extrabold text-blue-900 dark:text-blue-300">
              📊 <span id="progress-percent">{percent}%</span> Complete
            </span>
            <span className="text-[11px] text-slate-500 hidden md:inline">
              ({data.completed.length}/{ALL_SYLLABUS_TOPIC_IDS.length} topics)
            </span>
          </div>

          {/* Progress Bar Container */}
          <div className="flex-1 h-2 sm:h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200/60 dark:border-slate-700">
            <div
              id="progress-bar-fill"
              style={{ width: `${percent}%` }}
              className="h-full bg-gradient-to-r from-blue-900 via-indigo-600 to-amber-500 rounded-full transition-all duration-500 ease-out shadow-xs"
            />
          </div>

          {/* Badges Count & Reset Action */}
          <div className="flex items-center gap-2 shrink-0">
            <span
              id="badge-count"
              className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 px-2.5 py-1 rounded-full flex items-center gap-1"
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>{data.badges.length} badges</span>
            </span>

            <button
              onClick={resetProgress}
              className="p-1 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
              title="Reset All Progress"
              aria-label="Reset Progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mark As Complete Button */}
      {showCompleteButton && (
        <div className="text-center my-8">
          <button
            id="mark-complete-btn"
            onClick={markCurrentTopicComplete}
            disabled={isCompleted}
            className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 mx-auto cursor-pointer active:scale-95 ${
              isCompleted
                ? "bg-slate-400 text-white cursor-default shadow-none"
                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25 hover:shadow-lg"
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>{isCompleted ? "✅ Topic Completed" : "Mark This Topic as Complete"}</span>
          </button>
          {isCompleted && (
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Great job! Your progress has been saved in your browser.
            </p>
          )}
        </div>
      )}

      {/* Floating Badge Popup Notification */}
      {activePopup && (
        <div
          id="badge-popup"
          className="fixed bottom-5 right-5 z-50 bg-white dark:bg-slate-900 border-2 border-amber-400 dark:border-amber-500 rounded-2xl p-4 sm:p-5 shadow-2xl max-w-xs font-sans animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-xl shrink-0">
              🏅
            </div>
            <div className="space-y-0.5">
              <div
                id="badge-popup-title"
                className="font-extrabold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5"
              >
                <span>{activePopup.title}</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <p id="badge-popup-desc" className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {activePopup.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
