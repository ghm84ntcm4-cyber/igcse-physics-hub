export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  score: number;
  quizzesCompleted: number;
  school?: string;
  targetGrade: string;
  badge: string;
  streakDays: number;
  isCurrentUser?: boolean;
}

export interface ScoreActivity {
  id: string;
  topicTitle: string;
  points: number;
  timestamp: number;
}

const STORAGE_KEY_LEADERBOARD = "abphysics_leaderboard_user";
const STORAGE_KEY_ACTIVITIES = "abphysics_score_activities";
const NICKNAME_KEY = "abphysics_nickname";
const SCORES_KEY = "abphysics_leaderboard_scores";

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  {
    id: "lead-1",
    name: "QuantumQueen",
    avatar: "👩‍🔬",
    score: 185,
    quizzesCompleted: 37,
    school: "Cairo English School (CES)",
    targetGrade: "Grade 9 / A*",
    badge: "⚡ Master Physicist",
    streakDays: 14,
  },
  {
    id: "lead-2",
    name: "NewtonFan22",
    avatar: "👨‍🎓",
    score: 170,
    quizzesCompleted: 34,
    school: "Jeddah International School",
    targetGrade: "Grade 9 / A*",
    badge: "🔥 Streak Champion",
    streakDays: 12,
  },
  {
    id: "lead-3",
    name: "VelocityViper",
    avatar: "🚀",
    score: 155,
    quizzesCompleted: 31,
    school: "Dubai British School",
    targetGrade: "Grade 9 / A*",
    badge: "🎯 High Precision",
    streakDays: 9,
  },
  {
    id: "lead-4",
    name: "OhmSweetOhm",
    avatar: "💡",
    score: 140,
    quizzesCompleted: 28,
    school: "British International School Riyadh",
    targetGrade: "Grade 8 / A",
    badge: "⭐ Rising Star",
    streakDays: 7,
  },
  {
    id: "lead-5",
    name: "SpeedyGonzalez",
    avatar: "⚡",
    score: 125,
    quizzesCompleted: 25,
    school: "Modern English School Cairo",
    targetGrade: "Grade 9 / A*",
    badge: "📘 Formula Pro",
    streakDays: 5,
  },
];

export interface UserStats {
  name: string;
  avatar: string;
  school: string;
  targetGrade: string;
  score: number;
  quizzesCompleted: number;
  streakDays: number;
  lastQuizDate?: string;
}

export function getUserStats(): UserStats {
  try {
    const nickname = localStorage.getItem(NICKNAME_KEY);
    const saved = localStorage.getItem(STORAGE_KEY_LEADERBOARD);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (nickname && parsed.name !== nickname) {
        parsed.name = nickname;
      }
      return parsed;
    } else if (nickname) {
      return {
        name: nickname,
        avatar: "🎓",
        school: "International School",
        targetGrade: "Grade 9 / A*",
        score: 0,
        quizzesCompleted: 0,
        streakDays: 1,
      };
    }
  } catch (e) {
    console.error(e);
  }
  return {
    name: "IGCSE Student",
    avatar: "🎓",
    school: "International School",
    targetGrade: "Grade 9 / A*",
    score: 0,
    quizzesCompleted: 0,
    streakDays: 1,
  };
}

export function saveUserStats(stats: UserStats) {
  try {
    localStorage.setItem(STORAGE_KEY_LEADERBOARD, JSON.stringify(stats));
    if (stats.name) {
      localStorage.setItem(NICKNAME_KEY, stats.name);
    }
  } catch (e) {
    console.error(e);
  }
}

export function getScoreActivities(): ScoreActivity[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_ACTIVITIES);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error(e);
  }
  return [];
}

export function recordScoreActivity(topicTitle: string, points: number) {
  try {
    const activities = getScoreActivities();
    const newActivity: ScoreActivity = {
      id: "act-" + Date.now(),
      topicTitle,
      points,
      timestamp: Date.now(),
    };
    const updated = [newActivity, ...activities].slice(0, 30);
    localStorage.setItem(STORAGE_KEY_ACTIVITIES, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
}

// Global ABLeaderboard object as requested by user prompt
export const ABLeaderboard = {
  setNickname: (nickname?: string) => {
    let name = nickname;
    if (!name && typeof document !== "undefined") {
      const input = document.getElementById("nickname-input") as HTMLInputElement;
      if (input) name = input.value.trim();
    }
    if (!name) return;
    const current = getUserStats();
    const updated: UserStats = {
      ...current,
      name,
    };
    saveUserStats(updated);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("abphysics:score-updated", { detail: { updated, points: 0 } }));
    }
  },
  addScore: (points: number, topicTitle: string = "Quick Quiz") => {
    if (points <= 0) return;
    const current = getUserStats();
    const today = new Date().toISOString().split("T")[0];
    let newStreak = current.streakDays || 1;

    if (current.lastQuizDate) {
      const lastDate = new Date(current.lastQuizDate);
      const currDate = new Date(today);
      const diffDays = Math.round((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
      if (diffDays === 1) {
        newStreak += 1;
      } else if (diffDays > 1) {
        newStreak = 1;
      }
    }

    const updated: UserStats = {
      ...current,
      score: (current.score || 0) + points,
      quizzesCompleted: (current.quizzesCompleted || 0) + 1,
      streakDays: newStreak,
      lastQuizDate: today,
    };

    saveUserStats(updated);
    recordScoreActivity(topicTitle, points);

    // Sync with legacy abphysics_leaderboard_scores
    try {
      let legacyScores: any[] = [];
      const stored = localStorage.getItem(SCORES_KEY);
      if (stored) legacyScores = JSON.parse(stored);
      let entry = legacyScores.find((s: any) => s.nickname === updated.name);
      if (!entry) {
        entry = { nickname: updated.name, totalScore: 0, quizzesTaken: 0 };
        legacyScores.push(entry);
      }
      entry.totalScore = updated.score;
      entry.quizzesTaken = updated.quizzesCompleted;
      localStorage.setItem(SCORES_KEY, JSON.stringify(legacyScores));
    } catch (e) {
      console.error(e);
    }

    // Dispatch custom event for real-time reactivity in header & leaderboard
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("abphysics:score-updated", { detail: { updated, points } }));
    }
  },
  getUserStats,
  saveUserStats,
  getScoreActivities,
};

// Also attach to window for any inline script compatibility
if (typeof window !== "undefined") {
  (window as any).ABLeaderboard = ABLeaderboard;
}
