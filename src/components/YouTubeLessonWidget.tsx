import React, { useState } from "react";
import { Play, Sparkles, ExternalLink, Video, CheckCircle2, Search, ListFilter } from "lucide-react";

export interface YouTubeLessonOption {
  id: string;
  videoId: string;
  title: string;
  unit: string;
  topic: string;
  duration: string;
  description: string;
}

export const CURATED_PHYSICS_VIDEOS: YouTubeLessonOption[] = [
  {
    id: "vid-1",
    videoId: "M_u73A1wO40",
    title: "Complete Mechanics & Kinematics Masterclass - Graphs & F = ma",
    unit: "Unit 1",
    topic: "Forces & Motion",
    duration: "45 mins",
    description: "In-depth derivation of speed-time graph areas, terminal velocity stages, Hooke's law limits, and momentum conservation equations.",
  },
  {
    id: "vid-2",
    videoId: "y4d0g5F7y8E",
    title: "Ray Optics, Refraction & Snell's Law Calculations (Paper 4 Walkthrough)",
    unit: "Unit 3",
    topic: "Waves & Light",
    duration: "38 mins",
    description: "Step-by-step angle of incidence vs refraction measurements, critical angle total internal reflection (TIR), and converging lens focal points.",
  },
  {
    id: "vid-3",
    videoId: "kOmswQZ2h1s",
    title: "Electric Circuits: Series vs Parallel Rules & Potential Dividers",
    unit: "Unit 4",
    topic: "Electricity",
    duration: "42 mins",
    description: "Mastering EMF, potential difference, current conservation, LDRs, thermistors, diodes, and parallel resistance calculations without errors.",
  },
  {
    id: "vid-4",
    videoId: "X7uL2gK3f7g",
    title: "Nuclear Half-Life & Decay Equations with Background Radiation",
    unit: "Unit 5",
    topic: "Nuclear Physics",
    duration: "30 mins",
    description: "Alpha, Beta, Gamma ionization & penetration comparisons, balanced nuclide equations, and subtracting background radiation traps.",
  },
  {
    id: "vid-5",
    videoId: "p4vP8Q3d9wL",
    title: "Paper 6 Alternative to Practical (ATP): Full Exam Mastery & Graphing",
    unit: "Paper 6",
    topic: "Experimental Skills",
    duration: "50 mins",
    description: "How to score 40/40 on Paper 6: Precise line of best fit, reading parallax avoidance, table columns with SI units, and planning experiments.",
  },
  {
    id: "vid-6",
    videoId: "E3r_8w9Xz2A",
    title: "Thermal Physics: Specific Heat Capacity & Evaporation vs Boiling",
    unit: "Unit 2",
    topic: "Thermal Properties",
    duration: "35 mins",
    description: "Molecular explanations of gas pressure, thermal conduction by free electrons, radiation emitters/absorbers, and E = mcΔT calculations.",
  },
];

interface YouTubeLessonWidgetProps {
  initialVideoId?: string;
  title?: string;
  topicBadge?: string;
  className?: string;
}

export const YouTubeLessonWidget: React.FC<YouTubeLessonWidgetProps> = ({
  initialVideoId = "M_u73A1wO40",
  title = "Video Explanation & Worked Solution",
  topicBadge,
  className = "",
}) => {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeLessonOption>(() => {
    const found = CURATED_PHYSICS_VIDEOS.find((v) => v.videoId === initialVideoId);
    return found || CURATED_PHYSICS_VIDEOS[0];
  });

  const [customInput, setCustomInput] = useState<string>("");
  const [activeVideoId, setActiveVideoId] = useState<string>(initialVideoId);

  const handleSelectCurated = (vid: YouTubeLessonOption) => {
    setSelectedVideo(vid);
    setActiveVideoId(vid.videoId);
  };

  const handleApplyCustomVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    let extractedId = customInput.trim();
    // Support full YouTube URLs
    if (extractedId.includes("youtube.com/watch?v=")) {
      extractedId = extractedId.split("v=")[1]?.split("&")[0] || extractedId;
    } else if (extractedId.includes("youtu.be/")) {
      extractedId = extractedId.split("youtu.be/")[1]?.split("?")[0] || extractedId;
    } else if (extractedId.includes("youtube.com/embed/")) {
      extractedId = extractedId.split("embed/")[1]?.split("?")[0] || extractedId;
    }

    setActiveVideoId(extractedId);
  };

  return (
    <div
      className={`youtube-lesson-container rounded-2xl border border-slate-200 bg-[#f8f9fa] p-5 sm:p-7 shadow-xs ${className}`}
      style={{ margin: "20px 0", background: "#f8f9fa", borderRadius: "16px", border: "1px solid #e9ecef" }}
    >
      {/* Video Header Matching Provided HTML Block with Enhanced Interactivity */}
      <div
        className="video-header flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", flexWrap: "wrap", gap: "10px" }}
      >
        <div className="flex items-center gap-2.5">
          <h3
            className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight"
            style={{ margin: 0, fontFamily: "sans-serif", color: "#212529" }}
          >
            🎥 {title}
          </h3>
          {topicBadge && (
            <span className="px-2.5 py-0.5 text-xs font-semibold bg-red-100 text-red-800 rounded-full border border-red-200">
              {topicBadge}
            </span>
          )}
        </div>

        {/* YouTube Channel Badge (Official Styling with Subscribe Parameter) */}
        <a
          href="https://www.youtube.com/@AhmedBadrPhysics?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#ff0000",
            color: "#ffffff",
            padding: "8px 18px",
            borderRadius: "20px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "14px",
            fontFamily: "sans-serif",
            boxShadow: "0 2px 8px rgba(255, 0, 0, 0.25)",
          }}
          className="hover:opacity-90 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ marginRight: "8px" }}>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Subscribe on YouTube
        </a>
      </div>

      {/* Responsive Embed Frame */}
      <div
        className="relative overflow-hidden rounded-xl bg-black shadow-md"
        style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px" }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${activeVideoId}?rel=0&modestbranding=1`}
          title="IGCSE Physics Lesson - Ahmed Badr"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Lesson Selection Pills & Description */}
      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-red-600" />
            <span>Select IGCSE Physics Video Lesson & Walkthrough:</span>
          </span>
          <span className="text-xs text-slate-500 font-medium">Teacher: Mr. Ahmed Badr</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {CURATED_PHYSICS_VIDEOS.map((vid) => {
            const isCurrent = activeVideoId === vid.videoId;
            return (
              <button
                key={vid.id}
                onClick={() => handleSelectCurated(vid)}
                className={`text-left p-3 rounded-xl border transition-all text-xs flex flex-col justify-between gap-1.5 ${
                  isCurrent
                    ? "bg-white border-red-500 shadow-sm ring-2 ring-red-500/20 text-slate-900"
                    : "bg-white/80 hover:bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-red-100 text-red-800 font-bold text-[10px]">
                    {vid.unit}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">{vid.duration}</span>
                </div>
                <div className="font-bold line-clamp-2 leading-snug">{vid.title}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
