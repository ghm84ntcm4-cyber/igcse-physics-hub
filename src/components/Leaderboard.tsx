import React, { useState, useEffect } from "react";
import {
  Trophy,
  Award,
  Flame,
  Medal,
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
  User,
  GraduationCap,
  BookOpen,
  Edit3,
  Save,
  Clock,
} from "lucide-react";
import {
  LeaderboardEntry,
  INITIAL_LEADERBOARD,
  getUserStats,
  saveUserStats,
  getScoreActivities,
  ScoreActivity,
  UserStats,
} from "../utils/leaderboardStore";

interface LeaderboardProps {
  onNavigate?: (tab: string) => void;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ onNavigate }) => {
  const [userStats, setUserStats] = useState<UserStats>(getUserStats());
  const [activities, setActivities] = useState<ScoreActivity[]>(getScoreActivities());
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(userStats.name);
  const [editSchool, setEditSchool] = useState(userStats.school);
  const [editTargetGrade, setEditTargetGrade] = useState(userStats.targetGrade);
  const [selectedAvatar, setSelectedAvatar] = useState(userStats.avatar);
  const [activeTab, setActiveTab] = useState<"ranking" | "activities" | "rules">("ranking");

  const avatarOptions = ["🎓", "👨‍🎓", "👩‍🔬", "🚀", "⚡", "💡", "🔬", "🪐", "🏆"];

  useEffect(() => {
    const handleUpdate = () => {
      setUserStats(getUserStats());
      setActivities(getScoreActivities());
    };
    window.addEventListener("abphysics:score-updated", handleUpdate);
    return () => window.removeEventListener("abphysics:score-updated", handleUpdate);
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserStats = {
      ...userStats,
      name: editName.trim() || "IGCSE Student",
      school: editSchool.trim() || "International School",
      targetGrade: editTargetGrade,
      avatar: selectedAvatar,
    };
    saveUserStats(updated);
    setUserStats(updated);
    setIsEditingProfile(false);
  };

  // Merge current user into rankings and sort
  const combinedList: LeaderboardEntry[] = [
    ...INITIAL_LEADERBOARD,
    {
      id: "current-user",
      name: userStats.name,
      avatar: userStats.avatar,
      score: userStats.score,
      quizzesCompleted: userStats.quizzesCompleted,
      school: userStats.school,
      targetGrade: userStats.targetGrade,
      badge: userStats.score >= 150 ? "⚡ Master Physicist" : userStats.score >= 50 ? "🔥 Rising Talent" : "🚀 Physics Explorer",
      streakDays: userStats.streakDays,
      isCurrentUser: true,
    },
  ].sort((a, b) => b.score - a.score);

  const currentUserRank = combinedList.findIndex((item) => item.isCurrentUser) + 1;

  return (
    <div className="max-w-5xl mx-auto space-y-8 font-sans pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-blue-800/40">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wide">
              <Trophy className="w-3.5 h-3.5" />
              <span>IGCSE Physics Champions League</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Student Leaderboard
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Earn points by testing your understanding in Quick Quizzes, mastering formula definitions, and completing textbook chapters. Top students receive revision certificates and recognition!
            </p>
          </div>

          {/* User Fast Stats Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-3xl">
              {userStats.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base text-white">{userStats.name}</span>
                <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-black">
                  Rank #{currentUserRank}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-amber-300 font-bold">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> {userStats.score} pts
                </span>
                <span className="flex items-center gap-1 text-orange-300">
                  <Flame className="w-3.5 h-3.5 text-orange-400" /> {userStats.streakDays}d streak
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab("ranking")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "ranking"
              ? "bg-blue-900 text-white shadow-xs"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Top Candidates</span>
        </button>

        <button
          onClick={() => setActiveTab("activities")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "activities"
              ? "bg-blue-900 text-white shadow-xs"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Recent Activity ({activities.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("rules")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === "rules"
              ? "bg-blue-900 text-white shadow-xs"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
          }`}
        >
          <Award className="w-4 h-4" />
          <span>How Points Work</span>
        </button>
      </div>

      {/* TAB 1: RANKINGS */}
      {activeTab === "ranking" && (
        <div className="space-y-6">
          {/* User Profile Customization Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xs">
            {!isEditingProfile ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{userStats.avatar}</span>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span>{userStats.name}</span>
                      <span className="text-[11px] text-slate-500 font-normal">({userStats.school})</span>
                    </div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      Target: {userStats.targetGrade} • {userStats.quizzesCompleted} Quizzes Taken
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Profile</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                  Customise Your Student Profile
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium"
                      placeholder="e.g. Omar Farooq"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      School / Centre
                    </label>
                    <input
                      type="text"
                      value={editSchool}
                      onChange={(e) => setEditSchool(e.target.value)}
                      className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium"
                      placeholder="e.g. Cairo English School"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Target Grade
                    </label>
                    <select
                      value={editTargetGrade}
                      onChange={(e) => setEditTargetGrade(e.target.value)}
                      className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium"
                    >
                      <option value="Grade 9 / A*">Grade 9 / A*</option>
                      <option value="Grade 8 / A">Grade 8 / A</option>
                      <option value="Grade 7 / B">Grade 7 / B</option>
                      <option value="Grade 6 / B">Grade 6 / B</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                    Choose Avatar Emoji
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {avatarOptions.map((av) => (
                      <button
                        type="button"
                        key={av}
                        onClick={() => setSelectedAvatar(av)}
                        className={`w-9 h-9 rounded-xl border text-lg flex items-center justify-center cursor-pointer transition-all ${
                          selectedAvatar === av
                            ? "border-blue-600 bg-blue-50 dark:bg-blue-950 scale-110 shadow-xs"
                            : "border-slate-200 dark:border-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {av}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Profile</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Leaderboard Table */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Medal className="w-4 h-4 text-amber-500" />
                <span>Top Physics Candidates & Rankings</span>
              </h2>
              <span className="text-[11px] font-bold text-slate-500">Live Global Ranking</span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {combinedList.map((entry, index) => {
                const rank = index + 1;
                const isTop3 = rank <= 3;

                return (
                  <div
                    key={entry.id}
                    className={`p-4 sm:p-5 flex items-center justify-between gap-3 transition-colors ${
                      entry.isCurrentUser
                        ? "bg-blue-50/70 dark:bg-blue-950/40 border-l-4 border-l-blue-600"
                        : isTop3
                        ? "bg-amber-50/20 dark:bg-amber-950/10"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    {/* Rank & Student Info */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      {/* Rank Badge */}
                      <div className="w-8 sm:w-10 text-center shrink-0">
                        {rank === 1 ? (
                          <span className="text-2xl" title="1st Place (Gold)">🥇</span>
                        ) : rank === 2 ? (
                          <span className="text-2xl" title="2nd Place (Silver)">🥈</span>
                        ) : rank === 3 ? (
                          <span className="text-2xl" title="3rd Place (Bronze)">🥉</span>
                        ) : (
                          <span className="text-xs sm:text-sm font-extrabold text-slate-400">
                            #{rank}
                          </span>
                        )}
                      </div>

                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xl shrink-0">
                        {entry.avatar}
                      </div>

                      {/* Name & Subtext */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                            {entry.name}
                          </span>
                          {entry.isCurrentUser && (
                            <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase">
                              You
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">
                            {entry.badge}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          {entry.school || "International School"} • Target: {entry.targetGrade}
                        </div>
                      </div>
                    </div>

                    {/* Score & Streak */}
                    <div className="text-right shrink-0">
                      <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center justify-end gap-1">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span>{entry.score} pts</span>
                      </div>
                      <div className="text-[11px] text-orange-600 dark:text-orange-400 font-semibold flex items-center justify-end gap-1 mt-0.5">
                        <Flame className="w-3 h-3" />
                        <span>{entry.streakDays}d streak</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RECENT SCORE ACTIVITY */}
      {activeTab === "activities" && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs space-y-4">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Recent Points Earned</span>
          </h2>

          {activities.length === 0 ? (
            <div className="text-center py-10 text-slate-500 space-y-3">
              <BookOpen className="w-10 h-10 mx-auto text-slate-300" />
              <p className="text-xs sm:text-sm font-medium">
                No quiz scores recorded yet! Complete a Quick Check quiz inside any topic to start earning points.
              </p>
              {onNavigate && (
                <button
                  onClick={() => onNavigate("textbook")}
                  className="px-5 py-2 rounded-xl bg-blue-900 text-white font-bold text-xs cursor-pointer"
                >
                  Go to Textbook Notes
                </button>
              )}
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {activities.map((act) => (
                <div key={act.id} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
                      ✓
                    </span>
                    <div>
                      <strong className="font-bold text-slate-900 dark:text-slate-100">
                        {act.topicTitle}
                      </strong>
                      <div className="text-[11px] text-slate-400">
                        {new Date(act.timestamp).toLocaleDateString()} at{" "}
                        {new Date(act.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                  </div>
                  <span className="font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    +{act.points} pts
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: HOW POINTS WORK */}
      {activeTab === "rules" && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>How to Earn Points & Climb the Rankings</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Physics mastery rewards consistent practice and accuracy across all syllabus components.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-900 dark:text-blue-300 flex items-center justify-center font-black text-sm">
                +1
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                Quick Quiz Accuracy
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Earn 1 point for every multiple-choice question answered correctly on your first attempt.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-300 flex items-center justify-center font-black text-sm">
                🔥
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                Daily Study Streaks
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Study every consecutive day to multiply your streak bonus and earn the Streak Champion badge.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-300 flex items-center justify-center font-black text-sm">
                🏆
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                Topic Badges
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Unlock milestone badges as you complete 1, 5, 10, and all topics in the curriculum.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
