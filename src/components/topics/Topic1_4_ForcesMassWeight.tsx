import React from "react";
import { Link } from "react-router-dom";

export const Topic1_4_ForcesMassWeight: React.FC = () => {
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
        <span className="text-slate-700 font-medium">Forces, Mass & Weight</span>
      </nav>

      {/* Title Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Forces, Mass and Weight
        </h1>
        <div className="flex items-center gap-3.5 flex-wrap text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            📘 Topic 1.4
          </span>
          <span className="flex items-center gap-1">⏱️ 8 min read</span>
          <span className="flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            📊 Core & Extended
          </span>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        In everyday speech, people say things like "I weighed myself and I am 65 kilograms." In physics, that sentence makes no sense. Kilograms measure <strong>mass</strong>, not weight. Weight is a force, measured in <strong>Newtons</strong>. Mixing these two up is one of the most common ways to lose easy marks on Paper 2 and Paper 4.
      </p>

      {/* Section 1: Mass vs Weight */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Mass vs Weight: The Core Difference</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 sm:p-5 space-y-2">
            <h3 className="text-base font-bold text-blue-950 flex items-center gap-2">
              ⚖️ Mass (m)
            </h3>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
              <li>The quantity of matter in an object.</li>
              <li>A measure of the object's <strong>inertia</strong> (resistance to changes in motion).</li>
              <li><strong>Scalar quantity</strong> (has magnitude only).</li>
              <li>Measured in <strong>kilograms (kg)</strong> or grams (g).</li>
              <li><strong>Constant everywhere:</strong> Your mass is the same on Earth, on the Moon, or floating in deep space.</li>
              <li>Measured using a <strong>beam balance</strong> (comparing with known standard masses).</li>
            </ul>
          </div>

          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5 space-y-2">
            <h3 className="text-base font-bold text-amber-950 flex items-center gap-2">
              🌍 Weight (W)
            </h3>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
              <li>The gravitational force exerted on an object by a planet.</li>
              <li>Acts vertically downwards towards the centre of the planet.</li>
              <li><strong>Vector quantity</strong> (has magnitude and downward direction).</li>
              <li>Measured in <strong>Newtons (N)</strong>.</li>
              <li><strong>Varies with location:</strong> Depends on the local gravitational field strength (g).</li>
              <li>Measured using a <strong>spring balance</strong> or calibrated newton-meter.</li>
            </ul>
          </div>
        </div>

        {/* Formula Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Key Formula
          </div>
          <p className="text-base sm:text-lg font-bold text-slate-900 m-0">
            Weight = Mass × Gravitational Field Strength &nbsp;&nbsp;(W = m × g)
          </p>
          <span className="text-xs text-slate-600 block pt-1">
            where W = Weight in Newtons (N), m = Mass in kilograms (kg), g = Gravitational field strength in N/kg (or m/s²)
          </span>
        </div>
      </div>

      {/* Section 2: Gravitational Field Strength (g) */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Gravitational Field Strength (g)</h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Gravitational field strength (g) is defined as the <strong>gravitational force per unit mass</strong> placed in that field.
        </p>

        {/* Comparison Values Table */}
        <div className="overflow-x-auto my-3">
          <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Celestial Body</th>
                <th className="p-3">Gravitational Field Strength (g)</th>
                <th className="p-3">Weight of 10 kg mass (W = mg)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-900">Earth</td>
                <td className="p-3 font-mono">≈ 9.8 N/kg (or 10 N/kg)</td>
                <td className="p-3 font-bold text-blue-900">98 N (or 100 N)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-900">Moon</td>
                <td className="p-3 font-mono">≈ 1.6 N/kg (⅙ of Earth)</td>
                <td className="p-3 font-bold text-amber-700">16 N</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-900">Mars</td>
                <td className="p-3 font-mono">≈ 3.7 N/kg</td>
                <td className="p-3 font-bold text-red-700">37 N</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-900">Deep Space</td>
                <td className="p-3 font-mono">≈ 0 N/kg (weightless)</td>
                <td className="p-3 font-bold text-slate-600">0 N (mass remains 10 kg)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SVG Diagram: Earth vs Moon Comparison */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Earth Side */}
            <circle cx="110" cy="100" r="45" fill="#3b82f6" opacity="0.2" />
            <text x="110" y="60" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Earth (g = 10 N/kg)</text>
            <rect x="85" y="80" width="50" height="40" rx="4" fill="#1e3a8a" />
            <text x="110" y="105" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#ffffff">10 kg</text>
            <line x1="110" y1="120" x2="110" y2="170" stroke="#dc2626" strokeWidth="3" />
            <polygon points="110,175 104,165 116,165" fill="#dc2626" />
            <text x="110" y="190" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#dc2626">Weight = 100 N</text>

            {/* Divider */}
            <line x1="230" y1="20" x2="230" y2="180" stroke="#cbd5e1" strokeDasharray="4 4" strokeWidth="2" />

            {/* Moon Side */}
            <circle cx="350" cy="100" r="30" fill="#f59e0b" opacity="0.2" />
            <text x="350" y="60" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#b45309">Moon (g = 1.6 N/kg)</text>
            <rect x="325" y="80" width="50" height="40" rx="4" fill="#1e3a8a" />
            <text x="350" y="105" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#ffffff">10 kg</text>
            <line x1="350" y1="120" x2="350" y2="145" stroke="#dc2626" strokeWidth="3" />
            <polygon points="350,150 344,140 356,140" fill="#dc2626" />
            <text x="350" y="190" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#dc2626">Weight = 16 N</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Mass remains identically 10 kg in both places, but weight decreases by over 80% on the Moon due to smaller gravitational field strength.
          </div>
        </div>

        {/* Worked Example 1 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 1: Astronaut on the Moon</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            An astronaut wearing a spacesuit has a total mass of 80 kg. Taking g_earth = 9.8 N/kg and g_moon = 1.6 N/kg:
            <br />(a) Calculate their weight on Earth.
            <br />(b) Calculate their weight on the Moon.
            <br />(c) State their mass on the Moon.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(a) On Earth:</strong> W = m × g = 80 kg × 9.8 N/kg = <strong>784 N</strong> (or 800 N if using g = 10 N/kg)
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(b) On the Moon:</strong> W = m × g = 80 kg × 1.6 N/kg = <strong>128 N</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>(c) Mass on Moon:</strong> Mass does not change with location, so mass = <strong>80 kg</strong>
            </div>
          </div>
        </div>

        {/* Worked Example 2 */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example 2: Rock from Mars</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A geological probe on Mars measures the weight of a soil sample to be 18.5 N. Given that g_mars = 3.7 N/kg and g_earth = 10 N/kg:
            <br />(a) Find the mass of the sample.
            <br />(b) Calculate what this soil sample will weigh when brought back to a lab on Earth.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> Rearrange formula: m = W ÷ g_mars = 18.5 N ÷ 3.7 N/kg = <strong>5.0 kg</strong>
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> Calculate Earth weight: W_earth = m × g_earth = 5.0 kg × 10 N/kg = <strong>50 N</strong>
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
            Writing that an object is "lighter" on the Moon because it has "less mass." Mass is the amount of matter in an object and is strictly constant — only the gravitational force (weight) changes because the gravitational field strength (g) is weaker.
          </p>
        </div>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            Check the front cover of your examination paper for the value of g to use. Cambridge syllabus uses either g = 9.8 N/kg or g = 10 N/kg. Always show your substitution clearly and include correct SI units (kg for mass, N for weight).
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="pt-4 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Quick Summary</h2>
        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li>
            <strong>Mass:</strong> Quantity of matter (kg), scalar, never changes with location.
          </li>
          <li>
            <strong>Weight:</strong> Force of gravity acting on a mass (N), vector pointing downwards: <strong>W = m × g</strong>.
          </li>
          <li>
            <strong>Gravitational Field Strength (g):</strong> Force per unit mass (N/kg). Earth g ≈ 9.8 N/kg or 10 N/kg.
          </li>
        </ul>
      </div>

      {/* Chapter Navigation & Quiz CTA */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/topics/1.3"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            ← Previous: Newton's Laws of Motion
          </Link>
          <Link
            to="/topics/1.5"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            Next: Resultant Forces & Free Body Diagrams →
          </Link>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-md">
          <strong className="text-lg sm:text-xl font-bold block">Test yourself on Topic 1.4</strong>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto opacity-90">
            Try 5 quick questions on mass, weight and gravitational calculations.
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
