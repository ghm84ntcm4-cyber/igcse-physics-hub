import React from "react";
import { Link } from "react-router-dom";

export const Topic1_1_SpeedVelocityAcceleration: React.FC = () => {
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
        <span className="text-slate-700 font-medium">Speed, Velocity & Acceleration</span>
      </nav>

      {/* Title Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Speed, Velocity and Acceleration
        </h1>
        <div className="flex items-center gap-3.5 flex-wrap text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            📘 Topic 1.1
          </span>
          <span className="flex items-center gap-1">⏱️ 7 min read</span>
          <span className="flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            📊 Foundation
          </span>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        Speed and velocity get mixed up more than almost anything else in this course. They sound like the same thing, and half the time in everyday conversation they are. In an exam, they're not — and that one word can decide whether you get the mark or not.
      </p>

      {/* Section 1: Speed */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Speed</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Speed just tells you how fast something is moving. It doesn't care which way it's going. It is a <strong>scalar quantity</strong> — meaning it has magnitude (size), but no direction.
        </p>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Formula
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-900 m-0">
            Speed = Distance ÷ Time &nbsp;&nbsp;(v = s / t)
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          If a car covers 100 metres in 10 seconds, its speed is 10 m/s. That's it — no direction attached.
        </p>
      </div>

      {/* Section 2: Velocity */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Velocity</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Velocity is speed with a direction stuck onto it. "10 m/s" is a speed. "10 m/s north" is a velocity. Velocity is a <strong>vector quantity</strong> because it has both magnitude and direction.
        </p>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Formula
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-900 m-0">
            Velocity = Displacement ÷ Time &nbsp;&nbsp;(v = s / t in a stated direction)
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Notice the formula uses <strong>displacement</strong>, not distance. Displacement is how far you are from where you started, in a straight line — not how far you actually travelled.
        </p>

        {/* Subsection: A trip that shows the difference */}
        <div className="space-y-2 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            A trip that shows the difference
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Say a cyclist rides 5 km east, then turns around and rides 5 km back west to their starting point. They've covered a distance of 10 km, so they definitely have a speed above zero the whole ride. But their displacement is zero — they ended up exactly where they started. That means their average velocity for the whole trip is zero, even though they were moving the entire time.
          </p>
        </div>

        {/* SVG Diagram: Scalar vs Vector */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Start point */}
            <circle cx="60" cy="90" r="8" fill="#1e3a8a" />
            <text x="50" y="120" fontSize="12" fontWeight="bold" fill="#0f172a">Start</text>
            
            {/* Outward path */}
            <path d="M 60 90 Q 220 30 380 90" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="6 4" />
            <text x="210" y="45" fontSize="11" fill="#1e40af" fontWeight="bold">Outward 5 km East</text>
            
            {/* Turnaround point */}
            <circle cx="380" cy="90" r="8" fill="#f59e0b" />
            <text x="360" y="120" fontSize="12" fontWeight="bold" fill="#0f172a">Turnaround</text>
            
            {/* Return path */}
            <path d="M 380 90 Q 220 150 60 90" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="6 4" />
            <text x="210" y="165" fontSize="11" fill="#991b1b" fontWeight="bold">Return 5 km West</text>
          </svg>
          <div className="text-xs text-slate-600 italic">
            Total Distance = 10 km (Speed &gt; 0) | Overall Displacement = 0 km (Average Velocity = 0 m/s)
          </div>
        </div>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            If a question mentions direction — north, south, up, down, or gives you positive/negative values on a graph — it wants <strong>velocity</strong>. Writing "speed" instead is one of the easiest marks to lose, and examiners specifically penalise omitting direction when asking for velocity.
          </p>
        </div>
      </div>

      {/* Section 3: Acceleration */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Acceleration</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Acceleration is how quickly velocity changes. People assume it only means "speeding up," but that's not the full picture. Slowing down is acceleration too (sometimes called deceleration or negative acceleration). So is changing direction while moving at a constant speed — like a car going round a roundabout at a steady 30 km/h. The speed hasn't changed, but the velocity has, because the direction has.
        </p>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Formula
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-900 m-0">
            a = (v − u) ÷ t
          </p>
          <span className="text-xs text-slate-600 block">
            where v = final velocity (m/s), u = initial velocity (m/s), t = time taken (s)
          </span>
        </div>

        {/* Worked Example 1 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 1: Speeding Up</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A cyclist speeds up from 2 m/s to 10 m/s in 4 seconds. Find the acceleration.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> Write the formula → a = (v − u) ÷ t
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> Substitute the values → a = (10 − 2) ÷ 4
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 3:</strong> Calculate → a = 8 ÷ 4 = <strong>2 m/s²</strong>
            </div>
          </div>
        </div>

        {/* Worked Example 2: Deceleration */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 2: Braking & Deceleration</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A car travelling at 24 m/s hits the brakes and comes to a complete halt in 6.0 seconds. Calculate its acceleration.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> Identify values: u = 24 m/s, v = 0 m/s (at rest), t = 6.0 s
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> Substitute: a = (0 − 24) ÷ 6.0
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 3:</strong> Calculate: a = −24 ÷ 6.0 = <strong>−4.0 m/s²</strong> (or a deceleration of <strong>4.0 m/s²</strong>)
            </div>
          </div>
        </div>

        {/* Common Mistake Box */}
        <div className="bg-rose-50 border-l-4 border-red-600 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-red-700 mb-1 flex items-center gap-1.5">
            <span>⚠️</span>
            <span>Common Mistake</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            Writing the unit as m/s instead of m/s². Acceleration is a change in velocity <em>per second</em>, so the unit has to have that extra "per second" built in — hence the squared (m/s²).
          </p>
        </div>

        {/* Subsection: Negative acceleration */}
        <div className="space-y-2 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Negative acceleration
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            If something is slowing down, the acceleration comes out negative when you do the calculation. That's completely normal — it just means the object is decelerating. Don't panic and think you've made an error if your answer has a minus sign in front of it; check whether it actually makes sense for the situation first.
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="pt-4 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Quick Summary</h2>
        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li>
            <strong>Speed</strong> — how fast, no direction (Distance ÷ Time) [Scalar, m/s]
          </li>
          <li>
            <strong>Velocity</strong> — how fast, with direction (Displacement ÷ Time) [Vector, m/s]
          </li>
          <li>
            <strong>Acceleration</strong> — rate of change of velocity: a = (v − u) / t (speeding up, slowing down, or turning all count) [Vector, m/s²]
          </li>
        </ul>
      </div>

      {/* Chapter Navigation & Quiz CTA */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="text-xs sm:text-sm text-slate-400 font-medium">First topic of Unit 1</span>
          <Link
            to="/topics/1.2"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            Next: Distance-Time & Velocity-Time Graphs →
          </Link>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-md">
          <strong className="text-lg sm:text-xl font-bold block">Test yourself on Topic 1.1</strong>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto opacity-90">
            Try 5 quick questions on speed, velocity and acceleration calculations.
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
