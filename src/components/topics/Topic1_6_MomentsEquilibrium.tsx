import React from "react";
import { Link } from "react-router-dom";

export const Topic1_6_MomentsEquilibrium: React.FC = () => {
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
        <span className="text-slate-700 font-medium">Moments & Equilibrium</span>
      </nav>

      {/* Title Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Moments and Equilibrium
        </h1>
        <div className="flex items-center gap-3.5 flex-wrap text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            📘 Topic 1.6
          </span>
          <span className="flex items-center gap-1">⏱️ 10 min read</span>
          <span className="flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            📊 Core & Extended
          </span>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        Forces don't just push things in straight lines — they can also cause objects to rotate. Opening a door, using a spanner to loosen a tight nut, using a crowbar, or balancing on a see-saw all depend on the turning effect of a force, known in physics as a <strong>moment</strong>.
      </p>

      {/* Section 1: What is a Moment? */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">What is a Moment?</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The <strong>moment of a force</strong> is a measure of its turning effect about a fixed point called the <strong>pivot</strong> (or fulcrum).
        </p>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Key Formula
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 m-0">
            Moment = Force × Perpendicular Distance from Pivot &nbsp;&nbsp;(M = F × d)
          </p>
          <span className="text-xs text-slate-600 block pt-1">
            where Moment is in Newton-metres (N·m) or Newton-centimetres (N·cm), Force is in Newtons (N), and Distance is the perpendicular distance in metres (m) or cm.
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          To maximize the turning effect (moment), you can either:
        </p>
        <ul className="text-xs sm:text-sm text-slate-700 list-disc pl-5 space-y-1">
          <li>Apply a <strong>larger force (F)</strong>.</li>
          <li>Apply the force at a <strong>greater perpendicular distance (d)</strong> from the pivot (e.g. pushing a door at the handle rather than near the hinge).</li>
        </ul>
      </div>

      {/* Section 2: The Principle of Moments */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">The Principle of Moments</h2>

        {/* Law Card */}
        <div className="bg-white border border-slate-200 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-3 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-blue-900 m-0">
            Principle of Moments: For an object in rotational equilibrium, the sum of clockwise moments about any pivot must equal the sum of anticlockwise moments about that same pivot.
          </h4>
        </div>

        {/* Formula Representation */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl font-mono text-center text-sm font-bold text-blue-950">
          Σ Clockwise Moments = Σ Anticlockwise Moments &nbsp;&nbsp;→&nbsp;&nbsp; (F₁ × d₁) = (F₂ × d₂)
        </div>

        {/* SVG Diagram 1: Balanced See-Saw */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Plank */}
            <rect x="40" y="110" width="380" height="12" rx="3" fill="#334155" />
            
            {/* Pivot Triangle */}
            <polygon points="230,122 210,165 250,165" fill="#1e3a8a" />
            <circle cx="230" cy="122" r="4" fill="#fbbf24" />
            <text x="230" y="182" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Pivot</text>

            {/* Left Weight (Anticlockwise) */}
            <line x1="100" y1="122" x2="100" y2="70" stroke="#dc2626" strokeWidth="3" />
            <polygon points="100,122 94,110 106,110" fill="#dc2626" />
            <rect x="75" y="45" width="50" height="25" rx="4" fill="#dc2626" />
            <text x="100" y="62" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#ffffff">300 N</text>
            
            {/* Left Distance Line */}
            <line x1="100" y1="135" x2="230" y2="135" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="165" y="150" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#64748b">d₁ = 1.6 m</text>

            {/* Right Weight (Clockwise) */}
            <line x1="330" y1="122" x2="330" y2="70" stroke="#16a34a" strokeWidth="3" />
            <polygon points="330,122 324,110 336,110" fill="#16a34a" />
            <rect x="305" y="45" width="50" height="25" rx="4" fill="#16a34a" />
            <text x="330" y="62" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#ffffff">400 N</text>
            
            {/* Right Distance Line */}
            <line x1="230" y1="135" x2="330" y2="135" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="280" y="150" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#64748b">d₂ = 1.2 m</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Balanced See-Saw: Anticlockwise moment (300 N × 1.6 m = 480 N·m) equals Clockwise moment (400 N × 1.2 m = 480 N·m).
          </div>
        </div>

        {/* Section: Conditions for Complete Equilibrium */}
        <div className="space-y-2 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Two Conditions for Complete Equilibrium
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            For an object to be in complete mechanical equilibrium (no linear acceleration and no turning):
          </p>
          <ol className="text-xs sm:text-sm text-slate-800 list-decimal pl-5 space-y-1.5 font-medium">
            <li><strong>Resultant Force = 0:</strong> The upward forces must equal downward forces (and left forces equal right forces).</li>
            <li><strong>Resultant Moment = 0:</strong> The sum of clockwise moments must equal the sum of anticlockwise moments about any point.</li>
          </ol>
        </div>

        {/* Worked Example 1 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 1: Balancing a See-Saw</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A child of weight 300 N sits 1.6 m to the left of the pivot of a see-saw. Where must a second child of weight 400 N sit on the right side to balance the see-saw?
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> State Principle of Moments: Anticlockwise Moment = Clockwise Moment
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> Substitute values: 300 N × 1.6 m = 400 N × d
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 3:</strong> Calculate: 480 N·m = 400d → d = 480 ÷ 400 = <strong>1.2 metres from the pivot</strong>
            </div>
          </div>
        </div>

        {/* Worked Example 2 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 2: Uniform Meter Rule</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A uniform meter rule of weight 2.0 N is pivoted at its center (50 cm mark). A weight of 3.0 N is suspended at the 20 cm mark (30 cm from pivot). What force F applied at the 90 cm mark (40 cm from pivot) restores equilibrium?
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> Note that rule's own weight acts directly at the 50 cm pivot (moment = 0).
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> Anticlockwise Moment = 3.0 N × 30 cm = 90 N·cm
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 3:</strong> Clockwise Moment = F × 40 cm → 40 F = 90 → F = 90 ÷ 40 = <strong>2.25 N</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Centre of Gravity & Stability */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Centre of Gravity and Stability</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The <strong>centre of gravity (or centre of mass)</strong> of an object is the point through which the entire weight of the object may be considered to act.
        </p>

        {/* SVG Diagram 2: Toppling Physics */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Ground */}
            <line x1="20" y1="160" x2="440" y2="160" stroke="#94a3b8" strokeWidth="2" />

            {/* Stable Block (Tilted slightly) */}
            <g transform="rotate(15 120 160)">
              <rect x="70" y="60" width="100" height="100" fill="#3b82f6" opacity="0.3" stroke="#1d4ed8" strokeWidth="2" />
              <circle cx="120" cy="110" r="5" fill="#1d4ed8" />
              <text x="120" y="100" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#1d4ed8">CG</text>
            </g>
            {/* Weight Line for Stable Block */}
            <line x1="130" y1="110" x2="130" y2="180" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="3 3" />
            <polygon points="130,185 125,175 135,175" fill="#16a34a" />
            <text x="120" y="195" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#16a34a">Line of weight inside base (Returns to rest)</text>

            {/* Toppling Block (Tilted heavily) */}
            <g transform="rotate(45 340 160)">
              <rect x="290" y="60" width="100" height="100" fill="#ef4444" opacity="0.3" stroke="#b91c1c" strokeWidth="2" />
              <circle cx="340" cy="110" r="5" fill="#b91c1c" />
              <text x="340" y="100" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#b91c1c">CG</text>
            </g>
            {/* Weight Line for Toppling Block */}
            <line x1="390" y1="110" x2="390" y2="180" stroke="#dc2626" strokeWidth="2.5" />
            <polygon points="390,185 385,175 395,175" fill="#dc2626" />
            <text x="360" y="195" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#dc2626">Line of weight outside base (TOPPLES)</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Stability: An object topples over when the vertical line of action of its weight falls outside its base of support.
          </div>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <h4 className="text-sm font-bold text-slate-900">How to increase stability:</h4>
          <ul className="text-xs sm:text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li><strong>Lower the centre of gravity</strong> (e.g. keeping heavy cargo in the bottom of a ship or double-decker bus).</li>
            <li><strong>Widen the base of support</strong> (e.g. a tripod, or spreading your feet when balancing).</li>
          </ul>
        </div>

        {/* Common Mistake Box */}
        <div className="bg-rose-50 border-l-4 border-red-600 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-red-700 mb-1 flex items-center gap-1.5">
            <span>⚠️</span>
            <span>Common Mistake</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            Measuring distance from the end of the ruler instead of <strong>from the pivot</strong>. In moments calculations, the distance (d) MUST always be measured perpendicularly from the pivot point.
          </p>
        </div>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            Always write down: "Sum of clockwise moments = Sum of anticlockwise moments" as your very first step in moments questions. Cambridge examiners award a dedicated method mark just for stating the Principle of Moments.
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="pt-4 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Quick Summary</h2>
        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li>
            <strong>Moment:</strong> Turning effect = Force × Perpendicular distance from pivot (M = F × d) [N·m].
          </li>
          <li>
            <strong>Principle of Moments:</strong> For equilibrium, Σ Clockwise Moments = Σ Anticlockwise Moments.
          </li>
          <li>
            <strong>Equilibrium:</strong> Requires both Resultant Force = 0 and Resultant Moment = 0.
          </li>
          <li>
            <strong>Stability:</strong> Higher stability achieved with a wide base and low centre of mass.
          </li>
        </ul>
      </div>

      {/* Chapter Navigation & Quiz CTA */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/topics/1.5"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            ← Previous: Resultant Forces & Free Body Diagrams
          </Link>
          <Link
            to="/topics/1.7"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            Next: Momentum & Conservation of Momentum →
          </Link>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-md">
          <strong className="text-lg sm:text-xl font-bold block">Test yourself on Topic 1.6</strong>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto opacity-90">
            Try 5 quick questions on moments, balancing beams and stability.
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
