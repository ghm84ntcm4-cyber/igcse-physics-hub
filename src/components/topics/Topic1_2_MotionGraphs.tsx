import React from "react";
import { Link } from "react-router-dom";

export const Topic1_2_MotionGraphs: React.FC = () => {
  return (
    <article className="space-y-6 text-slate-800 leading-relaxed font-sans max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 flex-wrap">
        <Link to="/" className="text-blue-900 font-semibold hover:underline">
          Home
        </Link>
        <span>/</span>
        <Link to="/topics" className="text-blue-900 font-semibold hover:underline">
          Motion, Forces & Energy
        </Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">Distance-Time & Velocity-Time Graphs</span>
      </nav>

      {/* Title Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Distance-Time and Velocity-Time Graphs
        </h1>
        <div className="flex items-center gap-3.5 flex-wrap text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            📘 Topic 1.2
          </span>
          <span className="flex items-center gap-1">⏱️ 9 min read</span>
          <span className="flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            📊 Foundation
          </span>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        These two graphs look similar at first glance — both have time on the x-axis, both are just lines — but they tell you completely different things. Read the wrong one the wrong way and you'll get an answer that's backwards.
      </p>

      {/* Section 1: Distance-Time Graphs */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Distance-Time Graphs</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          On a distance-time graph, the slope (gradient) at any point tells you the speed at that moment. The steeper the line, the faster the object is moving.
        </p>

        {/* SVG Graph 1: Distance-Time */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2">
          <svg
            viewBox="0 0 400 220"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-lg mx-auto h-auto"
          >
            <line x1="40" y1="10" x2="40" y2="190" stroke="#64748b" strokeWidth="2" />
            <line x1="40" y1="190" x2="380" y2="190" stroke="#64748b" strokeWidth="2" />
            <polyline points="40,190 120,120 200,120 320,20" fill="none" stroke="#1e3a8a" strokeWidth="3" />
            <text x="10" y="15" fontSize="11" fill="#64748b" fontWeight="bold">Distance (m)</text>
            <text x="340" y="210" fontSize="11" fill="#64748b" fontWeight="bold">Time (s)</text>
            <text x="60" y="165" fontSize="11" fill="#0f172a" fontWeight="bold">A (steady speed)</text>
            <text x="140" y="110" fontSize="11" fill="#0f172a" fontWeight="bold">B (stopped / flat)</text>
            <text x="240" y="60" fontSize="11" fill="#0f172a" fontWeight="bold">C (faster steady speed)</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            A: moving at constant speed · B: stationary (flat line, speed = 0) · C: moving faster (steeper line)
          </div>
        </div>

        {/* Key Rule Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Key Rule
          </div>
          <p className="text-xs sm:text-sm text-slate-900 m-0 leading-relaxed">
            Distance-time graph → <strong>gradient = speed</strong>. A flat (horizontal) section means the object has stopped, not that it's slow.
          </p>
        </div>

        {/* Common Mistake Box */}
        <div className="bg-rose-50 border-l-4 border-red-600 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-red-700 mb-1 flex items-center gap-1.5">
            <span>⚠️</span>
            <span>Common Mistake</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            Students see a flat line and think "moving slowly." A flat line has zero gradient, which means zero speed — the object is completely stopped, not just going slow.
          </p>
        </div>
      </div>

      {/* Section 2: Velocity-Time Graphs */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Velocity-Time Graphs</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          This is where a lot of students get confused, because the rules flip. On a velocity-time graph, the gradient tells you the <strong>acceleration</strong> — not the speed.
        </p>

        {/* SVG Graph 2: Velocity-Time */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2">
          <svg
            viewBox="0 0 400 220"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-lg mx-auto h-auto"
          >
            <line x1="40" y1="10" x2="40" y2="190" stroke="#64748b" strokeWidth="2" />
            <line x1="40" y1="190" x2="380" y2="190" stroke="#64748b" strokeWidth="2" />
            {/* Shaded Area */}
            <polygon points="40,190 120,80 220,80 320,190" fill="#dbeafe" opacity="0.6" />
            <polyline points="40,190 120,80 220,80 320,190" fill="none" stroke="#f59e0b" strokeWidth="3" />
            <text x="10" y="15" fontSize="11" fill="#64748b" fontWeight="bold">Velocity (m/s)</text>
            <text x="340" y="210" fontSize="11" fill="#64748b" fontWeight="bold">Time (s)</text>
            <text x="50" y="130" fontSize="11" fill="#0f172a" fontWeight="bold">Accelerating</text>
            <text x="140" y="70" fontSize="11" fill="#0f172a" fontWeight="bold">Constant velocity</text>
            <text x="250" y="130" fontSize="11" fill="#0f172a" fontWeight="bold">Decelerating</text>
            <text x="130" y="150" fontSize="11" fill="#1e40af" fontWeight="bold">Area = Distance Travelled</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Rising line: speeding up · Flat line: constant velocity (not stopped!) · Falling line: slowing down · Shaded Area: total distance
          </div>
        </div>

        {/* Key Rule Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Key Rule
          </div>
          <p className="text-xs sm:text-sm text-slate-900 m-0 leading-relaxed">
            Velocity-time graph → <strong>gradient = acceleration</strong>, and <strong>area under the graph = distance travelled</strong>.
          </p>
        </div>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            On a velocity-time graph, a flat horizontal line does NOT mean stopped — it means moving at a steady, unchanging speed. This is the exact opposite of what a flat line means on a distance-time graph, and it's the single most common mix-up in exam scripts.
          </p>
        </div>

        {/* Worked Example */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example — Finding Distance from a V-T Graph</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            An object accelerates from 0 to 8 m/s in 4 seconds, then travels at a constant 8 m/s for another 6 seconds. Find the total distance travelled.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> The area under the graph forms a triangle (0–4s) followed by a rectangle (4–10s)
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> Triangle area = ½ × base × height = ½ × 4 × 8 = 16 m
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 3:</strong> Rectangle area = base × height = 6 × 8 = 48 m
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 4:</strong> Total distance = 16 + 48 = <strong>64 m</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Falling Bodies & Terminal Velocity */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Falling Bodies & Terminal Velocity</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          When an object falls in a fluid (such as air), two forces act: downward <strong>Weight (W)</strong> and upward <strong>Air Resistance (Drag)</strong>.
        </p>

        {/* SVG Graph 3: Skydiver Terminal Velocity */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            <line x1="40" y1="20" x2="40" y2="190" stroke="#64748b" strokeWidth="2" />
            <line x1="40" y1="190" x2="400" y2="190" stroke="#64748b" strokeWidth="2" />
            
            {/* Curved line reaching terminal velocity */}
            <path d="M 40 190 Q 100 60 220 60 L 400 60" fill="none" stroke="#dc2626" strokeWidth="3" />
            <line x1="40" y1="60" x2="400" y2="60" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1.5" />
            
            <text x="10" y="25" fontSize="11" fill="#64748b" fontWeight="bold">Velocity (m/s)</text>
            <text x="360" y="210" fontSize="11" fill="#64748b" fontWeight="bold">Time (s)</text>
            <text x="230" y="50" fontSize="11" fill="#dc2626" fontWeight="bold">Terminal Velocity (Drag = Weight)</text>
            <text x="50" y="140" fontSize="11" fill="#0f172a">Initial acc = 9.8 m/s²</text>
            <text x="130" y="100" fontSize="11" fill="#0f172a">Drag increases → Acc decreases</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Speed-time curve for a falling body reaching terminal velocity when air resistance equals weight.
          </div>
        </div>

        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li><strong>At start:</strong> Speed is 0, so drag is 0. Downward resultant force = Weight. Initial acceleration = g (≈ 9.8 m/s²).</li>
          <li><strong>As speed increases:</strong> Air resistance increases. The upward drag opposes weight, reducing the net resultant force. Acceleration decreases.</li>
          <li><strong>At terminal velocity:</strong> Upward drag equals downward weight (resultant force = 0). The object continues falling at a constant terminal velocity with zero acceleration.</li>
        </ul>
      </div>

      {/* Quick Summary */}
      <div className="pt-4 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Quick Summary</h2>
        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li>
            <strong>Distance-time graph:</strong> gradient = speed. Flat line = stopped (speed = 0).
          </li>
          <li>
            <strong>Velocity-time graph:</strong> gradient = acceleration. Flat line = constant velocity (still moving).
          </li>
          <li>
            <strong>Velocity-time graph:</strong> area under the line = total distance travelled.
          </li>
          <li>
            <strong>Terminal velocity:</strong> reached when air resistance balances weight (net force = 0, acceleration = 0).
          </li>
        </ul>
      </div>

      {/* Chapter Navigation & Quiz CTA */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/topics/1.1"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            ← Previous: Speed, Velocity & Acceleration
          </Link>
          <Link
            to="/topics/1.3"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            Next: Newton's Laws of Motion →
          </Link>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-md">
          <strong className="text-lg sm:text-xl font-bold block">Test yourself on Topic 1.2</strong>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto opacity-90">
            Try 5 quick questions on reading and drawing motion graphs.
          </p>
          <div className="pt-2">
            <Link
              to="/quiz"
              className="inline-block bg-white hover:bg-amber-400 text-blue-950 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Take the Quiz →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
