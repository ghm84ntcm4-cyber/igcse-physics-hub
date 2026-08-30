import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ExternalLink,
  Download,
  Share2,
  Sparkles,
  AlertCircle,
  Bell,
  Check,
  Copy,
} from "lucide-react";

export interface StudyPlanSessionItem {
  date: string | Date;
  dayNumber: number;
  topics: Array<{
    id: string;
    title: string;
    unit: string;
    durationMinutes?: number;
  }>;
}

export const GoogleCalendarReminders: React.FC<{
  plan?: StudyPlanSessionItem[] | null;
}> = ({ plan: propPlan }) => {
  const [plan, setPlan] = useState<StudyPlanSessionItem[] | null>(() => {
    if (propPlan && propPlan.length > 0) return propPlan;
    try {
      const saved = localStorage.getItem("abphysics_study_plan");
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });

  const [reminderTime, setReminderTime] = useState<string>("17:00"); // 5:00 PM default
  const [sessionDurationMinutes, setSessionDurationMinutes] = useState<number>(60);
  const [addedSessions, setAddedSessions] = useState<Record<number, boolean>>({});
  const [copiedLink, setCopiedLink] = useState<number | null>(null);

  // Sync with prop if it changes
  useEffect(() => {
    if (propPlan && propPlan.length > 0) {
      setPlan(propPlan);
    }
  }, [propPlan]);

  // Also listen for local storage changes
  useEffect(() => {
    const handleStorage = () => {
      try {
        const saved = localStorage.getItem("abphysics_study_plan");
        if (saved) setPlan(JSON.parse(saved));
      } catch {}
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!plan || plan.length === 0) {
    return (
      <div className="bg-blue-50/50 dark:bg-slate-900/50 border border-blue-200 dark:border-slate-800 rounded-2xl p-6 text-center space-y-3 font-sans">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto text-xl">
          📅
        </div>
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Sync Study Sessions to Google Calendar
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Generate your custom study timetable above, and you will be able to export your revision sessions directly to Google Calendar or download an .ICS calendar file for Apple Calendar & Outlook.
        </p>
      </div>
    );
  }

  const formatGoogleDate = (dateObj: Date, timeStr: string, durationMinutes: number) => {
    const [hours, mins] = timeStr.split(":").map(Number);
    const start = new Date(dateObj);
    start.setHours(hours || 17, mins || 0, 0, 0);

    const end = new Date(start.getTime() + durationMinutes * 60000);

    const pad = (n: number) => String(n).padStart(2, "0");
    const toGCalString = (d: Date) =>
      `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;

    return {
      startStr: toGCalString(start),
      endStr: toGCalString(end),
      formattedLocal: start.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
      }),
    };
  };

  const createGoogleCalendarUrl = (session: StudyPlanSessionItem) => {
    const dateObj = new Date(session.date);
    const { startStr, endStr } = formatGoogleDate(dateObj, reminderTime, sessionDurationMinutes);

    const topicTitles = session.topics.map((t) => `• Section ${t.id}: ${t.title} (${t.unit})`).join("\n");
    const title = encodeURIComponent(
      `📚 IGCSE Physics Study Session #${session.dayNumber} - Mr. Ahmed Badr`
    );
    const details = encodeURIComponent(
      `IGCSE Physics Revision Session #${session.dayNumber}\n\nTopics to cover:\n${topicTitles}\n\nStudy Material & Notes:\nhttps://ahmed-badr-s-igcse-physics-hub-263597105912.europe-west2.run.app/topics\n\nInstructor: Mr. Ahmed Badr (+966 53 067 5155)`
    );
    const location = encodeURIComponent("IGCSE Physics Online Hub");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${details}&location=${location}&sf=true&output=xml`;
  };

  const handleExportAllICS = () => {
    let icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ahmed Badr//IGCSE Physics Hub//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
    ];

    plan.forEach((session) => {
      const dateObj = new Date(session.date);
      const { startStr, endStr } = formatGoogleDate(dateObj, reminderTime, sessionDurationMinutes);
      const topicList = session.topics.map((t) => `Section ${t.id}: ${t.title}`).join("\\n");

      icsContent.push(
        "BEGIN:VEVENT",
        `UID:abphysics-${session.dayNumber}-${Date.now()}@ahmedbadr.com`,
        `DTSTAMP:${startStr}`,
        `DTSTART:${startStr}`,
        `DTEND:${endStr}`,
        `SUMMARY:📚 IGCSE Physics Study Session #${session.dayNumber}`,
        `DESCRIPTION:Topics to cover:\\n${topicList}\\n\\nInstructor: Mr. Ahmed Badr`,
        "LOCATION:IGCSE Physics Hub",
        "STATUS:CONFIRMED",
        "END:VEVENT"
      );
    });

    icsContent.push("END:VCALENDAR");

    const blob = new Blob([icsContent.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "IGCSE_Physics_Study_Plan.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="calendar-reminders" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800/60">
            <Calendar className="w-3.5 h-3.5" />
            <span>Calendar Reminders & Sync</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            📅 Add Study Sessions to Google Calendar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Never miss a revision day. Set your preferred study time and sync each session or export the entire timetable to Apple / Google / Outlook calendar.
          </p>
        </div>

        {/* Global ICS Download Button */}
        <button
          onClick={handleExportAllICS}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Export All ({plan.length} Sessions) to .ICS</span>
        </button>
      </div>

      {/* Time & Preference Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Daily Study Notification Time</span>
          </label>
          <input
            type="time"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
            <Bell className="w-3.5 h-3.5 text-amber-500" />
            <span>Estimated Duration per Session</span>
          </label>
          <select
            value={sessionDurationMinutes}
            onChange={(e) => setSessionDurationMinutes(Number(e.target.value))}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value={45}>45 Minutes (Quick Focus)</option>
            <option value={60}>60 Minutes (Recommended Standard)</option>
            <option value={90}>90 Minutes (Deep Study & Calculations)</option>
            <option value={120}>120 Minutes (Intensive Practice)</option>
          </select>
        </div>
      </div>

      {/* Individual Sessions List */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Scheduled Study Sessions ({plan.length} Total)
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1">
          {plan.map((session) => {
            const dateObj = new Date(session.date);
            const formattedDate = dateObj.toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            const gcalUrl = createGoogleCalendarUrl(session);
            const isAdded = addedSessions[session.dayNumber];

            return (
              <div
                key={session.dayNumber}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col justify-between gap-3 shadow-2xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                      Session #{session.dayNumber}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{formattedDate}</span>
                  </div>

                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {session.topics.map((t, idx) => (
                      <div key={idx} className="truncate">
                        • {t.id}: {t.title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400">
                    🕒 {reminderTime} ({sessionDurationMinutes}m)
                  </span>

                  <a
                    href={gcalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setAddedSessions((prev) => ({ ...prev, [session.dayNumber]: true }))}
                    className={`text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                      isAdded
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-2xs"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Added to GCal</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>+ Add to Google Calendar</span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
