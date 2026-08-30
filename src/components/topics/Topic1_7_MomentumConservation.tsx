import React from "react";
import { Link } from "react-router-dom";

export const Topic1_7_MomentumConservation: React.FC = () => {
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
        <span className="text-slate-700 font-medium">Momentum & Conservation of Momentum</span>
      </nav>

      {/* Title Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Momentum and Conservation of Momentum
        </h1>
        <div className="flex items-center gap-3.5 flex-wrap text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            📘 Topic 1.7
          </span>
          <span className="flex items-center gap-1">⏱️ 10 min read</span>
          <span className="flex items-center gap-1 font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            📊 Extended Syllabus
          </span>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        Why is a fast-moving cricket ball harder to catch than a tennis ball travelling at the same speed? And why does a supertanker take several kilometres to stop even when its engines are in full reverse? The answer is <strong>momentum</strong> — the quantity of motion an object possesses.
      </p>

      {/* Section 1: Linear Momentum */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Linear Momentum</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Momentum is defined as the product of an object's mass and its velocity. It is a <strong>vector quantity</strong>, meaning its direction is identical to the velocity vector.
        </p>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Key Formula
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 m-0">
            Momentum = Mass × Velocity &nbsp;&nbsp;(p = m × v)
          </p>
          <span className="text-xs text-slate-600 block pt-1">
            where p = Momentum in kilogram-metres per second (kg·m/s), m = Mass in kilograms (kg), v = Velocity in metres per second (m/s)
          </span>
        </div>
      </div>

      {/* Section 2: Principle of Conservation of Momentum */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Principle of Conservation of Momentum</h2>

        {/* Law Card */}
        <div className="bg-white border border-slate-200 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-3 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-blue-900 m-0">
            The Principle of Conservation of Momentum: For a collision or explosion in a closed system, the total momentum before the event is equal to the total momentum after the event, provided no external resultant forces act.
          </h4>
        </div>

        {/* Math formulation */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl font-mono text-center text-xs sm:text-sm font-bold text-blue-950">
          Total Momentum Before = Total Momentum After &nbsp;&nbsp;→&nbsp;&nbsp; m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂
        </div>

        {/* SVG Diagram 1: Collision on a track */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Track */}
            <line x1="20" y1="90" x2="440" y2="90" stroke="#94a3b8" strokeWidth="2" />
            <text x="25" y="30" fontSize="11" fontWeight="bold" fill="#0f172a">BEFORE COLLISION:</text>

            {/* Trolley A */}
            <rect x="50" y="55" width="70" height="35" rx="4" fill="#2563eb" />
            <text x="85" y="77" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#ffffff">2.0 kg</text>
            <line x1="120" y1="72" x2="165" y2="72" stroke="#2563eb" strokeWidth="2.5" />
            <polygon points="170,72 160,67 160,77" fill="#2563eb" />
            <text x="145" y="60" fontSize="10" fontWeight="bold" fill="#1e40af">u₁ = 3.0 m/s</text>

            {/* Trolley B */}
            <rect x="220" y="55" width="60" height="35" rx="4" fill="#64748b" />
            <text x="250" y="77" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#ffffff">1.0 kg</text>
            <text x="250" y="45" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#475569">u₂ = 0 m/s (Stationary)</text>

            {/* Divider */}
            <line x1="20" y1="110" x2="440" y2="110" stroke="#e2e8f0" strokeDasharray="3 3" strokeWidth="1.5" />

            {/* Track After */}
            <line x1="20" y1="185" x2="440" y2="185" stroke="#94a3b8" strokeWidth="2" />
            <text x="25" y="130" fontSize="11" fontWeight="bold" fill="#0f172a">AFTER COLLISION (Coupled):</text>

            {/* Combined Trolleys */}
            <rect x="180" y="150" width="130" height="35" rx="4" fill="#7c3aed" />
            <text x="245" y="172" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#ffffff">3.0 kg (Joined)</text>
            <line x1="310" y1="167" x2="365" y2="167" stroke="#7c3aed" strokeWidth="2.5" />
            <polygon points="370,167 360,162 360,172" fill="#7c3aed" />
            <text x="340" y="155" fontSize="10" fontWeight="bold" fill="#6d28d9">v = 2.0 m/s</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Inelastic Collision: Total momentum before = 2.0 kg × 3.0 m/s = 6.0 kg·m/s. Total momentum after = 3.0 kg × 2.0 m/s = 6.0 kg·m/s.
          </div>
        </div>

        {/* Worked Example 1 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 1: Inelastic Trolley Collision</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A trolley of mass 2.0 kg moving at 3.0 m/s collides with a stationary trolley of mass 1.0 kg. The two trolleys couple and move off together. Calculate their combined velocity after the collision.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> Calculate momentum before collision:
              <br />p_before = (m₁ × u₁) + (m₂ × u₂) = (2.0 × 3.0) + (1.0 × 0) = <strong>6.0 kg·m/s</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> State conservation of momentum: p_after = p_before = 6.0 kg·m/s
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 3:</strong> Calculate velocity: (m₁ + m₂) × v = 6.0 → (2.0 + 1.0) × v = 6.0 → 3.0v = 6.0 → v = <strong>2.0 m/s</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Force, Impulse and Vehicle Safety */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Force, Impulse & Vehicle Safety</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Newton's Second Law can be expressed in terms of momentum: <strong>Force is the rate of change of momentum</strong>.
        </p>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-2">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Impulse & Force Formulas
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 m-0">
            F = Δp ÷ Δt = (mv − mu) ÷ t
          </p>
          <p className="text-base sm:text-lg font-bold text-slate-900 m-0">
            Impulse = Force × Time = Change in Momentum &nbsp;&nbsp;(Impulse = F × Δt = Δp)
          </p>
          <span className="text-xs text-slate-600 block">
            Impulse is measured in <strong>Newton-seconds (N·s)</strong> or <strong>kg·m/s</strong>.
          </span>
        </div>

        {/* SVG Diagram 2: Impact Force vs Time */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            <line x1="40" y1="20" x2="40" y2="180" stroke="#64748b" strokeWidth="2" />
            <line x1="40" y1="180" x2="420" y2="180" stroke="#64748b" strokeWidth="2" />
            
            {/* Sharp Hard Impact Peak */}
            <path d="M 50 180 Q 90 20 130 180" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5" />
            <text x="90" y="45" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#dc2626">Hard Collision (Short Δt → High Peak Force!)</text>

            {/* Cushioned Airbag / Crumple Zone Peak */}
            <path d="M 50 180 Q 200 90 350 180" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5" opacity="0.8" />
            <text x="210" y="110" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#2563eb">With Airbag / Crumple Zone (Long Δt → Low Safe Force)</text>

            <text x="10" y="25" fontSize="11" fill="#64748b" fontWeight="bold">Impact Force (N)</text>
            <text x="360" y="200" fontSize="11" fill="#64748b" fontWeight="bold">Time (s)</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Equal change in momentum (same area under curve): Increasing collision time (Δt) dramatically reduces the peak force (F) on passengers.
          </div>
        </div>

        {/* Safety Features Explanation */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <h4 className="text-sm font-bold text-slate-900">How Car Safety Features Work (Crumple Zones, Airbags, Seatbelts):</h4>
          <ul className="text-xs sm:text-sm text-slate-700 list-disc pl-5 space-y-1.5">
            <li>When a car crashes, the passengers must lose all their momentum to stop (Δp is fixed).</li>
            <li>Crumple zones and airbags deform gradually during the impact, which <strong>increases the duration of the collision (Δt)</strong>.</li>
            <li>Since <strong>F = Δp ÷ Δt</strong>, a larger time interval causes a <strong>much smaller impact force</strong> on the passenger, preventing fatal injuries.</li>
          </ul>
        </div>

        {/* Worked Example 2 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 2: Tennis Racket Impulse</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A tennis racket strikes a stationary tennis ball of mass 0.060 kg. The racket exerts an average force of 120 N for an impact time of 0.025 s.
            <br />(a) Calculate the impulse delivered to the tennis ball.
            <br />(b) Calculate the velocity at which the ball leaves the racket.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(a) Impulse:</strong> Impulse = F × Δt = 120 N × 0.025 s = <strong>3.0 N·s (or 3.0 kg·m/s)</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(b) Exit Velocity:</strong> Impulse = Change in Momentum = m(v − u)
              <br />3.0 = 0.060 × (v − 0) → 0.060v = 3.0 → v = 3.0 ÷ 0.060 = <strong>50 m/s</strong>
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
            Treating momentum as a scalar and ignoring signs when objects travel in opposite directions. If object A moves right at +3 m/s and object B moves left at 2 m/s, you MUST use u_B = −2 m/s in your momentum equation.
          </p>
        </div>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            When explaining seatbelts, helmets or crumple zones in Paper 4, always use the 3-step phrasing to score maximum marks: (1) Increases the time taken for collision / stopping, (2) Reduces the rate of change of momentum, (3) Therefore reduces the force exerted on the person.
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="pt-4 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Quick Summary</h2>
        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li>
            <strong>Momentum:</strong> Mass × Velocity (p = mv) [Vector, kg·m/s].
          </li>
          <li>
            <strong>Conservation of Momentum:</strong> Total momentum before = Total momentum after in a closed system (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).
          </li>
          <li>
            <strong>Impulse:</strong> Force × Time = Change in momentum (Impulse = FΔt = Δp) [N·s].
          </li>
          <li>
            <strong>Safety:</strong> Longer impact duration (Δt) reduces impact force (F = Δp/Δt).
          </li>
        </ul>
      </div>

      {/* Chapter Navigation & Quiz CTA */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/topics/1.6"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            ← Previous: Moments & Equilibrium
          </Link>
          <Link
            to="/topics/1.8"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            Next: Work, Energy & Power →
          </Link>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-md">
          <strong className="text-lg sm:text-xl font-bold block">Test yourself on Topic 1.7</strong>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto opacity-90">
            Try 5 quick questions on momentum, collisions, explosions and impulse.
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
