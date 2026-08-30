import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Sparkles, Scale, Activity } from "lucide-react";

export const HookesLawSimulator: React.FC = () => {
  // Parameters
  const [springConstantK, setSpringConstantK] = useState<number>(40); // N/m
  const [hangingMassGrams, setHangingMassGrams] = useState<number>(300); // grams
  const [isOscillating, setIsOscillating] = useState<boolean>(false);
  const [oscillationTime, setOscillationTime] = useState<number>(0);

  const initialLengthCm = 15.0; // cm unstretched
  const g = 9.8; // m/s²
  const massKg = hangingMassGrams / 1000;
  const loadForceN = massKg * g;

  // Extension in meters: x = F / k
  // Beyond limit of proportionality (e.g. 8 N), non-linear plastic stretch
  const elasticLimitForce = 8.0;
  let extensionMeters = loadForceN / springConstantK;
  let isBeyondElasticLimit = false;

  if (loadForceN > elasticLimitForce) {
    isBeyondElasticLimit = true;
    const extraForce = loadForceN - elasticLimitForce;
    extensionMeters = elasticLimitForce / springConstantK + (extraForce * 1.8) / springConstantK;
  }

  const extensionCm = extensionMeters * 100;
  const currentLengthCm = initialLengthCm + extensionCm;
  const strainEnergyJoules = 0.5 * springConstantK * (extensionMeters * extensionMeters);

  // Period of oscillation T = 2 * pi * sqrt(m / k)
  const periodT = massKg > 0 ? 2 * Math.PI * Math.sqrt(massKg / springConstantK) : 0;
  const frequencyHz = periodT > 0 ? 1 / periodT : 0;

  // Animation frame for oscillation
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOscillating || massKg <= 0) return;

    let startTime = performance.now();
    const animate = (time: number) => {
      const elapsed = (time - startTime) / 1000;
      setOscillationTime(elapsed);
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isOscillating, massKg, springConstantK]);

  // Dynamic oscillating offset in cm
  const amplitudeCm = isOscillating ? 3.5 * Math.exp(-0.15 * (oscillationTime % 10)) : 0;
  const dynamicOffsetCm = isOscillating
    ? amplitudeCm * Math.cos((2 * Math.PI * oscillationTime) / Math.max(0.2, periodT))
    : 0;

  const displayLengthCm = currentLengthCm + dynamicOffsetCm;

  // SVG Drawing constants
  const svgHeight = 360;
  const svgWidth = 260;
  const topY = 40;
  const numCoils = 14;
  const springVisualLength = Math.min(220, 60 + displayLengthCm * 4.5);
  const coilSpacing = springVisualLength / numCoils;

  // Generate zigzag path for spring
  let springPath = `M 130 ${topY}`;
  for (let i = 0; i < numCoils; i++) {
    const yMid = topY + (i + 0.5) * coilSpacing;
    const xSide = i % 2 === 0 ? 150 : 110;
    springPath += ` L ${xSide} ${yMid}`;
  }
  const springEndY = topY + springVisualLength;
  springPath += ` L 130 ${springEndY}`;

  const massBlockWidth = Math.min(80, Math.max(40, 30 + massKg * 40));
  const massBlockHeight = Math.min(60, Math.max(30, 20 + massKg * 30));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Parameters & Control Column */}
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
              <Scale className="w-4 h-4" />
            </span>
            <h2 className="text-base font-bold text-slate-900">
              Hooke's Law & Elasticity Lab
            </h2>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Investigate how load force produces spring extension ($F = k \cdot x$) and determine the spring constant.
          </p>
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-slate-700 mb-1">
              <span className="font-semibold">Spring Constant (k)</span>
              <span className="font-mono text-blue-700 font-bold">{springConstantK} N/m</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={springConstantK}
              onChange={(e) => setSpringConstantK(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Loose (10 N/m)</span>
              <span>Stiff (100 N/m)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-700 mb-1">
              <span className="font-semibold">Hanging Mass (m)</span>
              <span className="font-mono text-emerald-700 font-bold">
                {hangingMassGrams} g ({massKg.toFixed(3)} kg)
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1200"
              step="50"
              value={hangingMassGrams}
              onChange={(e) => setHangingMassGrams(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>0 g</span>
              <span>Load Force = {loadForceN.toFixed(2)} N</span>
              <span>1200 g</span>
            </div>
          </div>
        </div>

        {/* Quick Mass Presets */}
        <div>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
            Standard Lab Slotted Masses:
          </span>
          <div className="grid grid-cols-4 gap-2">
            {[100, 200, 500, 1000].map((m) => (
              <button
                key={m}
                onClick={() => setHangingMassGrams(m)}
                className={`py-1.5 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  hangingMassGrams === m
                    ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                +{m}g ({((m * g) / 1000).toFixed(1)}N)
              </button>
            ))}
          </div>
        </div>

        {/* Oscillation Toggle */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs">
            <span className="font-bold text-slate-900 block">SHM Oscillation Mode</span>
            <span className="text-slate-500 text-[11px]">Simulate simple harmonic bounce</span>
          </div>
          <button
            onClick={() => {
              setIsOscillating(!isOscillating);
              setOscillationTime(0);
            }}
            disabled={hangingMassGrams === 0}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isOscillating
                ? "bg-amber-100 text-amber-900 border border-amber-300"
                : "bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
            }`}
          >
            {isOscillating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isOscillating ? "Pause Bounce" : "Displace & Release"}</span>
          </button>
        </div>

        {/* Real-time Calculation Data Cards */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
            <span className="text-[11px] font-semibold text-blue-900 block">
              Spring Extension (x)
            </span>
            <span className="text-lg font-bold font-mono text-blue-950">
              {extensionCm.toFixed(2)} <span className="text-xs font-normal text-slate-600">cm</span>
            </span>
            <span className="text-[10px] text-blue-700 block mt-0.5">
              Total L = {currentLengthCm.toFixed(1)} cm
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[11px] font-semibold text-emerald-900 block">
              Elastic Strain Energy (E)
            </span>
            <span className="text-lg font-bold font-mono text-emerald-950">
              {strainEnergyJoules.toFixed(3)} <span className="text-xs font-normal text-slate-600">J</span>
            </span>
            <span className="text-[10px] text-emerald-700 block mt-0.5">
              E = ½ · k · x²
            </span>
          </div>
        </div>

        {/* Warning if beyond limit */}
        {isBeyondElasticLimit && (
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 flex items-start gap-2">
            <span className="text-amber-600 font-bold text-sm shrink-0">⚠️</span>
            <div>
              <strong className="block font-bold">Limit of Proportionality Exceeded!</strong>
              <span>
                Load exceeds 8.0 N. The spring enters plastic deformation and no longer strictly obeys Hooke's Law.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Visual Stand Column */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600" />
            <span>Apparatus View & Real-time Force-Extension Graph</span>
          </h3>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1 text-blue-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Gradient = k ({springConstantK} N/m)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Spring & Stand Visual (SVG) */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-3 flex justify-center items-center relative overflow-hidden">
            <svg width={svgWidth} height={svgHeight} className="overflow-visible select-none">
              {/* Clamp Stand */}
              <rect x="20" y="340" width="80" height="12" rx="3" fill="#64748b" />
              <rect x="35" y="20" width="10" height="320" rx="2" fill="#94a3b8" />
              <rect x="35" y="25" width="105" height="10" rx="2" fill="#64748b" />
              <circle cx="130" cy="30" r="5" fill="#475569" />

              {/* Ruler Alongside Stand */}
              <rect x="195" y="40" width="25" height="290" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
              {Array.from({ length: 15 }).map((_, idx) => (
                <g key={idx}>
                  <line
                    x1="195"
                    y1={40 + idx * 20}
                    x2={idx % 5 === 0 ? "212" : "205"}
                    y2={40 + idx * 20}
                    stroke="#854d0e"
                    strokeWidth={idx % 5 === 0 ? "1.5" : "0.75"}
                  />
                  {idx % 5 === 0 && (
                    <text x="214" y={44 + idx * 20} fontSize="8" fill="#854d0e" fontFamily="monospace">
                      {idx * 2}
                    </text>
                  )}
                </g>
              ))}

              {/* Equilibrium Reference Line */}
              <line
                x1="80"
                y1={topY + 60 + initialLengthCm * 4.5}
                x2="195"
                y2={topY + 60 + initialLengthCm * 4.5}
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <text
                x="82"
                y={topY + 56 + initialLengthCm * 4.5}
                fontSize="8"
                fill="#64748b"
                fontFamily="sans-serif"
              >
                Unstretched (15 cm)
              </text>

              {/* Spring Coils */}
              <path
                d={springPath}
                fill="none"
                stroke={isBeyondElasticLimit ? "#ea580c" : "#2563eb"}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Mass Hook & Mass Cylinder */}
              <circle cx="130" cy={springEndY + 4} r="4" fill="#334155" />
              <line x1="130" y1={springEndY + 4} x2="130" y2={springEndY + 16} stroke="#334155" strokeWidth="2.5" />

              {hangingMassGrams > 0 && (
                <g>
                  <rect
                    x={130 - massBlockWidth / 2}
                    y={springEndY + 16}
                    width={massBlockWidth}
                    height={massBlockHeight}
                    rx="4"
                    fill="#475569"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                  <text
                    x="130"
                    y={springEndY + 16 + massBlockHeight / 2 + 4}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {hangingMassGrams}g
                  </text>
                </g>
              )}

              {/* Pointer Arrow to ruler */}
              <polygon
                points={`135,${springEndY + 12} 185,${springEndY + 12} 190,${springEndY + 12}`}
                stroke="#dc2626"
                strokeWidth="2"
              />
              <line
                x1="135"
                y1={springEndY + 12}
                x2="190"
                y2={springEndY + 12}
                stroke="#dc2626"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
            </svg>
          </div>

          {/* Force-Extension Graph (SVG) */}
          <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-700">
              <span className="font-bold">Force-Extension (F-x) Graph</span>
              <span className="text-[11px] text-slate-500 font-mono">F = {loadForceN.toFixed(2)} N</span>
            </div>

            {/* F vs x Chart */}
            <div className="w-full flex justify-center">
              <svg width="260" height="200" className="overflow-visible select-none">
                {/* Axes */}
                <line x1="35" y1="165" x2="250" y2="165" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="35" y1="165" x2="35" y2="20" stroke="#94a3b8" strokeWidth="1.5" />

                {/* Labels */}
                <text x="250" y="180" textAnchor="end" fontSize="10" fill="#475569" fontWeight="600">
                  Extension x (cm)
                </text>
                <text x="25" y="15" textAnchor="start" fontSize="10" fill="#475569" fontWeight="600">
                  Force F (N)
                </text>

                {/* Grid */}
                {[0, 2.5, 5.0, 7.5, 10.0].map((fVal, idx) => (
                  <g key={idx}>
                    <line x1="35" y1={165 - fVal * 14} x2="250" y2={165 - fVal * 14} stroke="#e2e8f0" strokeWidth="1" />
                    <text x="30" y={168 - fVal * 14} textAnchor="end" fontSize="8" fill="#94a3b8">
                      {fVal}
                    </text>
                  </g>
                ))}

                {/* Shaded Area (Strain Energy) */}
                <polygon
                  points={`35,165 35,165 ${Math.min(240, 35 + extensionCm * 7)},${165 - Math.min(10, loadForceN) * 14} ${Math.min(240, 35 + extensionCm * 7)},165`}
                  fill="#dbeafe"
                  opacity="0.7"
                />

                {/* Elastic Linear Line */}
                <line
                  x1="35"
                  y1="165"
                  x2={35 + (elasticLimitForce / springConstantK) * 100 * 7}
                  y2={165 - elasticLimitForce * 14}
                  stroke="#2563eb"
                  strokeWidth="2.5"
                />

                {/* Plastic Region beyond elastic limit */}
                <path
                  d={`M ${35 + (elasticLimitForce / springConstantK) * 100 * 7} ${165 - elasticLimitForce * 14} Q ${35 + (elasticLimitForce / springConstantK) * 100 * 7 + 25} ${165 - elasticLimitForce * 14 - 10} 245 ${165 - 11.5 * 14}`}
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />

                {/* Current Operating Point */}
                <circle
                  cx={Math.min(240, 35 + extensionCm * 7)}
                  cy={165 - Math.min(10, loadForceN) * 14}
                  r="5"
                  fill="#dc2626"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Key Takeaways */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-slate-900 block">Examiner Mark-Scheme Fact:</span>
              <p className="leading-relaxed">
                The gradient of the linear region represents the spring constant k = ΔF / Δx. The area under the graph equals work done in stretching = Elastic Strain Energy E = ½ F·x = ½ k·x².
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
