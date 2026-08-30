import React from "react";
import { Link } from "react-router-dom";

export const Topic1_5_ResultantForcesFreeBody: React.FC = () => {
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
        <span className="text-slate-700 font-medium">Resultant Forces & Free Body Diagrams</span>
      </nav>

      {/* Title Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Resultant Forces and Free Body Diagrams
        </h1>
        <div className="flex items-center gap-3.5 flex-wrap text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            📘 Topic 1.5
          </span>
          <span className="flex items-center gap-1">⏱️ 9 min read</span>
          <span className="flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            📊 Core & Extended
          </span>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        Rarely does an object experience just a single force in the real world. A moving car has thrust, friction, air resistance, weight, and the upward support from the road all acting at once. To predict how an object will move, we combine all these forces into a single overall force: the <strong>resultant force</strong>.
      </p>

      {/* Section 1: What is a Resultant Force? */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">What is a Resultant Force?</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The resultant force (or net force) is the single overall force that has the same effect as all the individual forces acting on the object combined.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h3 className="text-sm font-bold text-slate-900">Forces in the Same Direction</h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Add the magnitudes together:
            </p>
            <div className="p-2.5 bg-white border border-slate-200 rounded-lg font-mono text-xs sm:text-sm text-blue-950 font-bold">
              F_resultant = F₁ + F₂
            </div>
            <p className="text-xs text-slate-500">e.g. 5 N right + 3 N right = 8 N to the right</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h3 className="text-sm font-bold text-slate-900">Forces in Opposite Directions</h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Subtract the smaller force from the larger one:
            </p>
            <div className="p-2.5 bg-white border border-slate-200 rounded-lg font-mono text-xs sm:text-sm text-blue-950 font-bold">
              F_resultant = F_larger − F_smaller
            </div>
            <p className="text-xs text-slate-500">e.g. 10 N forward − 4 N drag = 6 N forward</p>
          </div>
        </div>

        {/* Definition Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Golden Rule
          </div>
          <p className="text-xs sm:text-sm text-slate-900 m-0 leading-relaxed">
            • If <strong>Resultant Force = 0</strong>: Forces are <em>balanced</em>. The object stays at rest or continues at constant velocity.<br />
            • If <strong>Resultant Force ≠ 0</strong>: Forces are <em>unbalanced</em>. The object accelerates in the direction of the resultant force (F = ma).
          </p>
        </div>
      </div>

      {/* Section 2: Free Body Diagrams */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Free Body Diagrams</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          A free-body force diagram shows the object isolated with arrows representing all individual forces acting ON the object. Each arrow points in the direction of the force, and the arrow's length represents its relative size.
        </p>

        {/* SVG Diagram 1: Free Body Diagram of a Car */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Ground */}
            <line x1="20" y1="170" x2="440" y2="170" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Car body representation */}
            <rect x="180" y="100" width="100" height="50" rx="8" fill="#1e3a8a" />
            <circle cx="205" cy="155" r="12" fill="#334155" />
            <circle cx="255" cy="155" r="12" fill="#334155" />
            <circle cx="230" cy="125" r="4" fill="#fbbf24" />
            <text x="230" y="129" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0f172a">COM</text>

            {/* Normal contact force (Upward) */}
            <line x1="230" y1="100" x2="230" y2="30" stroke="#16a34a" strokeWidth="3" />
            <polygon points="230,25 224,37 236,37" fill="#16a34a" />
            <text x="240" y="45" fontSize="11" fontWeight="bold" fill="#16a34a">Normal Contact Force (R)</text>

            {/* Weight (Downward) */}
            <line x1="230" y1="125" x2="230" y2="195" stroke="#dc2626" strokeWidth="3" />
            <polygon points="230,200 224,188 236,188" fill="#dc2626" />
            <text x="240" y="195" fontSize="11" fontWeight="bold" fill="#dc2626">Weight (W = mg)</text>

            {/* Engine Driving Force / Thrust (Forward - Right) */}
            <line x1="280" y1="125" x2="390" y2="125" stroke="#2563eb" strokeWidth="3" />
            <polygon points="395,125 383,119 383,131" fill="#2563eb" />
            <text x="310" y="115" fontSize="11" fontWeight="bold" fill="#2563eb">Driving Thrust (T)</text>

            {/* Resistive forces (Friction & Drag - Left) */}
            <line x1="180" y1="125" x2="90" y2="125" stroke="#ea580c" strokeWidth="3" />
            <polygon points="85,125 97,119 97,131" fill="#ea580c" />
            <text x="75" y="115" fontSize="11" fontWeight="bold" fill="#ea580c">Drag & Friction</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Free Body Diagram: Upward R balances downward W. Resultant horizontal force = Thrust − Drag.
          </div>
        </div>

        {/* Worked Example 1 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 1: Accelerating Car</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A car of mass 1200 kg has an engine driving force of 2800 N. The total resistive force (friction and air drag) acting on the car is 1000 N.
            <br />(a) Calculate the resultant force acting on the car.
            <br />(b) Calculate the acceleration of the car.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(a) Resultant Force:</strong> F_res = Forward Force − Opposing Force = 2800 N − 1000 N = <strong>1800 N forward</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(b) Acceleration:</strong> Using F = ma → a = F_res ÷ m = 1800 N ÷ 1200 kg = <strong>1.5 m/s²</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Hooke's Law & Elasticity */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Hooke's Law & Elasticity</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          When forces act on an elastic object (like a spring or rubber band), they cause a change in shape or length. Hooke's Law states:
        </p>

        {/* Law Card */}
        <div className="bg-white border border-slate-200 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-3 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-blue-900 m-0">
            Hooke's Law: The extension of a spring is directly proportional to the applied stretching force, provided the limit of proportionality is not exceeded.
          </h4>
        </div>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Formula
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 m-0">
            F = k × x
          </p>
          <span className="text-xs text-slate-600 block pt-1">
            where F = Load/Force (N), k = Spring constant (N/m or N/cm), x = Extension (m or cm)
          </span>
          <span className="text-xs text-blue-800 font-semibold block pt-0.5">
            Extension (x) = Stretched Length (L) − Original Unstretched Length (L₀)
          </span>
        </div>

        {/* SVG Diagram 2: Force-Extension Graph */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            <line x1="40" y1="20" x2="40" y2="190" stroke="#64748b" strokeWidth="2" />
            <line x1="40" y1="190" x2="420" y2="190" stroke="#64748b" strokeWidth="2" />
            
            {/* Linear Hooke's Law region */}
            <line x1="40" y1="190" x2="220" y2="80" stroke="#16a34a" strokeWidth="3" />
            
            {/* Non-linear curve beyond limit of proportionality */}
            <path d="M 220 80 Q 280 40 400 35" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="5 3" />
            
            {/* Point of proportionality */}
            <circle cx="220" cy="80" r="5" fill="#1e3a8a" />
            <text x="225" y="75" fontSize="11" fontWeight="bold" fill="#1e3a8a">Limit of Proportionality (P)</text>

            <text x="10" y="25" fontSize="11" fill="#64748b" fontWeight="bold">Force / Load (N)</text>
            <text x="340" y="210" fontSize="11" fill="#64748b" fontWeight="bold">Extension (cm or m)</text>
            
            <text x="90" y="125" fontSize="11" fontWeight="bold" fill="#16a34a">F ∝ x (Straight line through origin)</text>
            <text x="280" y="55" fontSize="10" fontWeight="bold" fill="#dc2626">Plastic deformation</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Force-Extension graph: Linear region follows F = kx. Beyond P, the spring deforms permanently (plastic deformation).
          </div>
        </div>

        {/* Worked Example 2 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 2: Calculating Spring Constant</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A helical spring has an unstretched length of 15.0 cm. When a mass of 0.60 kg (weight = 6.0 N) is suspended from it, its total length becomes 19.0 cm.
            <br />(a) Calculate the spring constant k in N/cm and in N/m.
            <br />(b) Find the extension when a load of 9.0 N is hung from the spring (assuming limit of proportionality is not reached).
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> Calculate extension x = 19.0 cm − 15.0 cm = <strong>4.0 cm = 0.040 m</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> Calculate k = F ÷ x = 6.0 N ÷ 4.0 cm = <strong>1.5 N/cm</strong> (or 6.0 N ÷ 0.040 m = <strong>150 N/m</strong>)
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 3:</strong> Extension for 9.0 N load: x = F ÷ k = 9.0 N ÷ 1.5 N/cm = <strong>6.0 cm</strong>
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
            Plugging the total length (19.0 cm) into F = kx instead of the <strong>extension</strong> (19.0 − 15.0 = 4.0 cm). Always subtract the original unstretched length before doing any Hooke's Law calculation!
          </p>
        </div>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            When drawing free-body force diagrams in exams: (1) draw arrows pointing strictly AWAY from the object, (2) align each arrow with the true line of action, and (3) clearly label every force (e.g., 'normal contact force', 'weight', 'friction', 'air resistance').
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="pt-4 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Quick Summary</h2>
        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li>
            <strong>Resultant Force:</strong> The single combined force that determines acceleration (F_res = ma).
          </li>
          <li>
            <strong>Free Body Diagram:</strong> Shows all forces acting on one object with directional arrows.
          </li>
          <li>
            <strong>Hooke's Law:</strong> F = kx, where extension x = L − L₀. Valid up to the limit of proportionality.
          </li>
        </ul>
      </div>

      {/* Chapter Navigation & Quiz CTA */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/topics/1.4"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            ← Previous: Forces, Mass & Weight
          </Link>
          <Link
            to="/topics/1.6"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            Next: Moments & Equilibrium →
          </Link>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-md">
          <strong className="text-lg sm:text-xl font-bold block">Test yourself on Topic 1.5</strong>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto opacity-90">
            Try 5 quick questions on resultant forces, free-body diagrams and Hooke's Law.
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
