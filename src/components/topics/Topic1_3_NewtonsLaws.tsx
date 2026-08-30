import React from "react";
import { Link } from "react-router-dom";

export const Topic1_3_NewtonsLaws: React.FC = () => {
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
        <span className="text-slate-700 font-medium">Newton's Laws of Motion</span>
      </nav>

      {/* Title Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Newton's Laws of Motion
        </h1>
        <div className="flex items-center gap-3.5 flex-wrap text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            📘 Topic 1.3
          </span>
          <span className="flex items-center gap-1">⏱️ 10 min read</span>
          <span className="flex items-center gap-1 font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
            📊 Foundation-Higher
          </span>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        Three laws, and once you strip away the formal wording, they're really just describing things you already see happen every day — a ball sitting still until someone kicks it, a car needing more force to speed up quickly, and your body jerking forward when a bus brakes suddenly.
      </p>

      {/* Section 1: Newton's First Law */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Newton's First Law</h2>

        {/* Law Card */}
        <div className="bg-white border border-slate-200 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-3 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-blue-900 m-0">
            An object stays still, or keeps moving at a constant velocity, unless a resultant force acts on it.
          </h4>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          This is really about balance. If all the forces on an object cancel out — the resultant force is zero — nothing about its motion changes. A book on a table isn't moving because gravity pulling it down is exactly balanced by the table pushing back up. A car cruising at a steady 100 km/h on a flat motorway has the driving force balanced by air resistance and friction.
        </p>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            "Constant velocity" includes zero — a stationary object and one moving at a steady speed in a straight line are both covered by the same law. Don't assume the first law only applies to things at rest.
          </p>
        </div>
      </div>

      {/* Section 2: Newton's Second Law */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Newton's Second Law</h2>

        {/* Law Card */}
        <div className="bg-white border border-slate-200 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-3 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-blue-900 m-0">
            The bigger the resultant force, the bigger the acceleration. The bigger the mass, the smaller the acceleration for the same force.
          </h4>
        </div>

        {/* Definition Box */}
        <div className="bg-indigo-50/80 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-4 space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1">
            Formula
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-900 m-0">
            F = m × a
          </p>
          <span className="text-xs text-slate-600 block">
            Force (N) = Mass (kg) × Acceleration (m/s²)
          </span>
        </div>

        {/* Worked Example */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <span>✏️</span>
            <span>Worked Example</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-2">
            A resultant force of 20 N acts on a 5 kg trolley. Find its acceleration.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-800">
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 1:</strong> Rearrange the formula → a = F ÷ m
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 2:</strong> Substitute values → a = 20 ÷ 5
            </div>
            <div className="p-2.5 bg-white rounded-lg border-l-2 border-slate-300">
              <strong>Step 3:</strong> Calculate → a = <strong>4 m/s²</strong>
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
            Using the total force applied instead of the <em>resultant</em> force. If a question mentions friction or air resistance acting against the motion, you have to subtract that first before putting a number into F = ma.
          </p>
        </div>

        {/* Subsection: Inertia */}
        <div className="space-y-2 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Why heavier objects "resist" acceleration more
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            This is called inertia — the tendency of an object to resist a change in its motion. It's why pushing an empty shopping trolley is easy but pushing one loaded with a week's shopping takes real effort for the same change in speed. Same force, different mass, very different acceleration.
          </p>
        </div>
      </div>

      {/* Section 3: Newton's Third Law */}
      <div className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Newton's Third Law</h2>

        {/* Law Card */}
        <div className="bg-white border border-slate-200 border-l-4 border-blue-900 rounded-r-xl p-4 sm:p-5 my-3 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-blue-900 m-0">
            For every action force, there is an equal and opposite reaction force.
          </h4>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          These two forces act on <strong>different objects</strong>, and that's the part students most often get wrong. When you push against a wall, the wall pushes back on you with equal force — that's why your hand doesn't just sink into it. When a rocket pushes exhaust gas downward, the gas pushes the rocket upward with equal force.
        </p>

        {/* SVG Diagram: Action-Reaction */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-center space-y-2 my-4">
          <svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto h-auto">
            {/* Swimmer / Wall interaction */}
            <rect x="30" y="20" width="30" height="140" fill="#94a3b8" />
            <text x="35" y="100" fontSize="11" fill="#ffffff" fontWeight="bold" transform="rotate(-90 45,100)">POOL WALL</text>
            
            {/* Swimmer foot */}
            <rect x="60" y="70" width="120" height="40" rx="8" fill="#3b82f6" />
            <text x="90" y="95" fontSize="12" fill="#ffffff" fontWeight="bold">Swimmer</text>
            
            {/* Force arrows */}
            {/* Force on wall */}
            <line x1="60" y1="80" x2="10" y2="80" stroke="#dc2626" strokeWidth="4" markerEnd="url(#arrow-red)" />
            <polygon points="10,80 22,74 22,86" fill="#dc2626" />
            <text x="70" y="55" fontSize="11" fill="#dc2626" fontWeight="bold">Force on Wall (Left)</text>
            
            {/* Force on swimmer */}
            <line x1="60" y1="100" x2="140" y2="100" stroke="#16a34a" strokeWidth="4" />
            <polygon points="140,100 128,94 128,106" fill="#16a34a" />
            <text x="70" y="135" fontSize="11" fill="#16a34a" fontWeight="bold">Force on Swimmer (Right)</text>
          </svg>
          <div className="text-xs text-slate-500 italic mt-2">
            Newton's Third Law Pair: Forces are equal in magnitude, opposite in direction, and act on two DIFFERENT bodies.
          </div>
        </div>

        {/* Exam Tip Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 my-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
            <span>💡</span>
            <span>Exam Tip</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 m-0 leading-relaxed">
            Action-reaction pairs never act on the same object, and they never cancel each other out. If you're asked to describe a third law pair, always name two different objects — e.g. "the ball pushes on the foot; the foot pushes on the ball."
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="pt-4 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Quick Summary</h2>
        <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700">
          <li>
            <strong>First Law:</strong> No resultant force → no change in motion (stays still or keeps constant velocity).
          </li>
          <li>
            <strong>Second Law:</strong> F = ma — bigger force means bigger acceleration, bigger mass means smaller acceleration.
          </li>
          <li>
            <strong>Third Law:</strong> Every force has an equal, opposite reaction force, acting on a different object.
          </li>
        </ul>
      </div>

      {/* Chapter Navigation & Quiz CTA */}
      <div className="pt-6 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/topics/1.2"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            ← Previous: Distance-Time & Velocity-Time Graphs
          </Link>
          <Link
            to="/topics/1.4"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
          >
            Next: Forces, Mass & Weight →
          </Link>
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-md">
          <strong className="text-lg sm:text-xl font-bold block">Test yourself on Topic 1.3</strong>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto opacity-90">
            Try 5 quick questions on Newton's laws of motion.
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
