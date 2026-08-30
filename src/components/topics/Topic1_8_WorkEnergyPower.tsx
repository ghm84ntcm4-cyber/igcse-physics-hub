import React from "react";
import { Link } from "react-router-dom";

export const Topic1_8_WorkEnergyPower: React.FC = () => {
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
        <span className="text-slate-700 font-medium">Work, Energy & Power</span>
      </nav>

      {/* Title Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Work, Energy and Power
        </h1>
        <div className="flex items-center gap-3.5 flex-wrap text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            📘 Topic 1.8
          </span>
          <span className="flex items-center gap-1">⏱️ 11 min read</span>
          <span className="flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            📊 Core & Extended
          </span>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        Energy is the currency of the universe — without it, nothing can happen. In physics, doing "work" doesn't mean sitting at a desk studying; it means transferring energy by applying a force that moves an object through a distance.
      </p>

      {/* Section 1: Work Done */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Work Done</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          <strong>Work done</strong> is the amount of energy transferred when a force moves an object through a distance in the direction of the force.
        </p>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Key Formula
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 m-0">
            Work Done = Force × Distance moved in direction of force &nbsp;&nbsp;(W = F × d)
          </p>
          <span className="text-xs text-slate-600 block pt-1">
            where W = Work Done in Joules (J), F = Force in Newtons (N), d = Distance in metres (m)
          </span>
          <span className="text-xs text-blue-800 font-semibold block pt-0.5">
            1 Joule (J) = 1 Newton-metre (N·m)
          </span>
        </div>
      </div>

      {/* Section 2: Kinetic & Gravitational Potential Energy */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Kinetic & Potential Energy Stores</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          {/* Kinetic Energy */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 sm:p-5 space-y-2">
            <h3 className="text-base font-bold text-blue-950">
              ⚡ Kinetic Energy (Ek)
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              The energy possessed by an object due to its motion.
            </p>
            <div className="p-2.5 bg-white border border-blue-200 rounded-lg font-mono text-sm font-bold text-blue-900 text-center">
              Ek = ½ × m × v²
            </div>
            <p className="text-xs text-slate-600">
              Notice that speed is <strong>squared</strong>: doubling the speed increases the kinetic energy by four times (2² = 4)!
            </p>
          </div>

          {/* Gravitational Potential Energy */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5 space-y-2">
            <h3 className="text-base font-bold text-emerald-950">
              🏔️ Gravitational Potential Energy (Ep)
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              The energy stored in an object due to its vertical position in a gravitational field.
            </p>
            <div className="p-2.5 bg-white border border-emerald-200 rounded-lg font-mono text-sm font-bold text-emerald-900 text-center">
              Ep = m × g × h
            </div>
            <p className="text-xs text-slate-600">
              where m = mass (kg), g = gravitational field strength (N/kg), h = vertical height (m).
            </p>
          </div>
        </div>

        {/* Conservation of Energy Principle */}
        <div className="bg-white border border-slate-200 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-3 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-blue-900 m-0">
            The Principle of Conservation of Energy: Energy cannot be created or destroyed, only transferred from one store to another. Total energy in a closed system remains constant.
          </h4>
        </div>

        {/* SVG Diagram 1: Roller Coaster Energy Transformations */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Ground */}
            <line x1="20" y1="180" x2="440" y2="180" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Roller Coaster Track */}
            <path d="M 40 50 Q 140 180 230 180 Q 320 180 360 110 Q 400 50 430 180" fill="none" stroke="#334155" strokeWidth="3" />

            {/* Position 1: Peak (Max GPE) */}
            <circle cx="50" cy="50" r="10" fill="#2563eb" />
            <text x="50" y="30" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#1e40af">Top: Max Ep, Ek = 0</text>

            {/* Position 2: Bottom (Max KE) */}
            <circle cx="230" cy="180" r="10" fill="#16a34a" />
            <text x="230" y="160" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#15803d">Bottom: Max Ek, Ep = 0</text>

            {/* Position 3: Intermediate Loop */}
            <circle cx="360" cy="110" r="10" fill="#f59e0b" />
            <text x="360" y="90" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#b45309">Mid: Ep + Ek mixed</text>

            <text x="230" y="200" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#0f172a">Loss in Ep = Gain in Ek (mgh = ½mv²)</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Energy Conservation: As the cart descends, gravitational potential energy is converted entirely into kinetic energy (neglecting friction).
          </div>
        </div>

        {/* Worked Example 1 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 1: Falling Metal Ball</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A metal sphere of mass 0.40 kg is dropped from rest from a balcony 5.0 m above the ground. Assuming air resistance is negligible and taking g = 10 N/kg:
            <br />(a) Calculate the gravitational potential energy of the ball before release.
            <br />(b) Calculate the velocity of the ball just before it strikes the ground.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(a) GPE before release:</strong> Ep = m × g × h = 0.40 kg × 10 N/kg × 5.0 m = <strong>20 Joules (J)</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(b) Velocity before ground:</strong> Loss in Ep = Gain in Ek = 20 J
              <br />Ek = ½ × m × v² → 20 = ½ × 0.40 × v² → 20 = 0.20v²
              <br />v² = 20 ÷ 0.20 = 100 → v = √100 = <strong>10 m/s</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Power & Efficiency */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Power & Efficiency</h2>

        {/* Power Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Power Formula
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 m-0">
            Power = Work Done ÷ Time taken = Energy Transferred ÷ Time &nbsp;&nbsp;(P = W ÷ t = ΔE ÷ t)
          </p>
          <span className="text-xs text-slate-600 block pt-1">
            where Power is in <strong>Watts (W)</strong> (1 Watt = 1 Joule per second, 1 W = 1 J/s), Work/Energy is in Joules (J), Time is in seconds (s).
          </span>
        </div>

        {/* Efficiency Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Efficiency Formulas
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-900 m-0">
            Efficiency (%) = (Useful energy output ÷ Total energy input) × 100%
          </p>
          <p className="text-xs sm:text-sm font-bold text-slate-900 m-0 pt-1">
            Efficiency (%) = (Useful power output ÷ Total power input) × 100%
          </p>
        </div>

        {/* SVG Diagram 2: Sankey Diagram */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Input Energy Arrow (100 J) */}
            <path d="M 20 60 L 150 60 L 150 40 L 320 40 L 320 20 L 380 50 L 320 80 L 320 60 L 220 60 L 220 120 L 200 120 L 230 160 L 260 120 L 240 120 L 240 80 L 150 80 L 150 100 L 20 100 Z" fill="#3b82f6" opacity="0.3" stroke="#1d4ed8" strokeWidth="2" />
            
            <text x="30" y="85" fontSize="11" fontWeight="bold" fill="#1e3a8a">100 J Electrical Input</text>
            <text x="390" y="55" fontSize="11" fontWeight="bold" fill="#15803d">75 J Useful Kinetic Output</text>
            <text x="240" y="175" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#dc2626">25 J Wasted Thermal Energy</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Sankey Diagram: Arrow width represents energy magnitude. Efficiency = (75 J ÷ 100 J) × 100% = 75%.
          </div>
        </div>

        {/* Worked Example 2 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 2: Electric Crane Power & Efficiency</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            An electric motor on a crane lifts a 400 kg crate through a vertical height of 12 m in 15 seconds (take g = 10 N/kg).
            <br />(a) Calculate the useful work done in lifting the crate.
            <br />(b) Calculate the useful power output of the motor.
            <br />(c) If the motor draws 4000 W of electrical power from the mains, calculate the motor's efficiency.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(a) Work Done:</strong> Weight of crate = mg = 400 kg × 10 N/kg = 4000 N
              <br />W = F × d = 4000 N × 12 m = <strong>48,000 Joules (48 kJ)</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(b) Useful Power Output:</strong> P = W ÷ t = 48,000 J ÷ 15 s = <strong>3200 Watts (3.2 kW)</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(c) Efficiency:</strong> Efficiency = (3200 W ÷ 4000 W) × 100% = <strong>80%</strong>
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
            Stating that wasted energy is "destroyed" or "lost." Energy is never destroyed — it dissipates into the surroundings, primarily as thermal energy (heat) and sound, warming up the environment.
          </p>
        </div>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            In free-fall conservation problems (GPE converted to KE with no air resistance), mass cancels out: mgh = ½mv² → gh = ½v² → v = √(2gh). The final speed of a falling object is independent of its mass!
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="pt-4 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Quick Summary</h2>
        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li>
            <strong>Work Done:</strong> Force × distance moved in direction of force (W = Fd) [Joules, J].
          </li>
          <li>
            <strong>Kinetic Energy:</strong> Ek = ½mv² [J].
          </li>
          <li>
            <strong>Gravitational Potential Energy:</strong> Ep = mgh [J].
          </li>
          <li>
            <strong>Power:</strong> Rate of doing work: P = W/t [Watts, W].
          </li>
          <li>
            <strong>Efficiency:</strong> (Useful Output ÷ Total Input) × 100%.
          </li>
        </ul>
      </div>

      {/* Chapter Navigation & Quiz CTA */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/topics/1.7"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            ← Previous: Momentum & Conservation of Momentum
          </Link>
          <span className="text-xs sm:text-sm text-slate-400 font-medium">Final topic of Unit 1</span>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-md">
          <strong className="text-lg sm:text-xl font-bold block">Test yourself on Topic 1.8</strong>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto opacity-90">
            Try 5 quick questions on work, kinetic energy, gravitational potential energy, power and efficiency.
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
