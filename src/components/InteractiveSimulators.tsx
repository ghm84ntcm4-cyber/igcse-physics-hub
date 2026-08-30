import React, { useState, useEffect, Suspense, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Activity,
  Zap,
  Radio,
  Sun,
  Eye,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  Scale,
  Waves,
  Droplets,
  Flame,
  Loader2,
} from "lucide-react";

// Lazy load complex heavy canvas & calculation simulator subcomponents
const HookesLawSimulator = lazy(() =>
  import("./simulators/HookesLawSimulator").then((m) => ({ default: m.HookesLawSimulator }))
);
const RippleTankSimulator = lazy(() =>
  import("./simulators/RippleTankSimulator").then((m) => ({ default: m.RippleTankSimulator }))
);
const DensityArchimedesSimulator = lazy(() =>
  import("./simulators/DensityArchimedesSimulator").then((m) => ({ default: m.DensityArchimedesSimulator }))
);
const CalorimetrySimulator = lazy(() =>
  import("./simulators/CalorimetrySimulator").then((m) => ({ default: m.CalorimetrySimulator }))
);

type SimTab =
  | "motion"
  | "hooke"
  | "snell"
  | "waves"
  | "circuits"
  | "density"
  | "thermal"
  | "lens"
  | "halflife";

export const InteractiveSimulators: React.FC = () => {
  const { simId } = useParams<{ simId?: string }>();
  const navigate = useNavigate();

  const validSims: SimTab[] = [
    "motion",
    "hooke",
    "snell",
    "waves",
    "circuits",
    "density",
    "thermal",
    "lens",
    "halflife",
  ];

  const initialSim: SimTab =
    simId && validSims.includes(simId as SimTab) ? (simId as SimTab) : "motion";

  const [activeSim, setActiveSim] = useState<SimTab>(initialSim);

  useEffect(() => {
    if (simId && validSims.includes(simId as SimTab)) {
      setActiveSim(simId as SimTab);
    }
  }, [simId]);

  const handleSelectSim = (tab: SimTab) => {
    setActiveSim(tab);
    navigate(`/simulators/${tab}`);
  };

  return (
    <div className="space-y-6">
      {/* Header & Simulator Selector */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                <Sparkles className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Ahmed Badr's Physics Lab Simulators
              </h1>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Interactive laboratory rigs: motion kinematics, spring elasticity, optics ray tracing, wave interference, circuit schematics, Archimedes upthrust, calorimetry, and radioactive decay.
            </p>
          </div>

          {/* Simulator switcher tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSelectSim("motion")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "motion"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Velocity-Time</span>
            </button>

            <button
              onClick={() => handleSelectSim("hooke")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "hooke"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Hooke's Law & Springs</span>
            </button>

            <button
              onClick={() => handleSelectSim("snell")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "snell"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Snell's Law & TIR</span>
            </button>

            <button
              onClick={() => handleSelectSim("waves")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "waves"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Waves className="w-3.5 h-3.5" />
              <span>Ripple Tank Waves</span>
            </button>

            <button
              onClick={() => handleSelectSim("circuits")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "circuits"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Circuit & Ohm's Lab</span>
            </button>

            <button
              onClick={() => handleSelectSim("density")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "density"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Droplets className="w-3.5 h-3.5" />
              <span>Density & Archimedes</span>
            </button>

            <button
              onClick={() => handleSelectSim("thermal")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "thermal"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Calorimetry & Heat</span>
            </button>

            <button
              onClick={() => handleSelectSim("lens")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "lens"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Converging Lens</span>
            </button>

            <button
              onClick={() => handleSelectSim("halflife")}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSim === "halflife"
                  ? "bg-blue-600 text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Half-Life Decay</span>
            </button>
          </div>
        </div>
      </div>

      {/* Render active simulation tool with Suspense lazy loading */}
      <Suspense
        fallback={
          <div className="bg-white border border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center gap-3 text-slate-500 shadow-xs min-h-[300px]">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            <p className="text-sm font-semibold text-slate-700">جاري تشغيل المحاكي المعملي التفاعلي...</p>
            <span className="text-xs text-slate-400">Loading interactive physics laboratory module</span>
          </div>
        }
      >
        {activeSim === "motion" && <MotionSimulator />}
        {activeSim === "hooke" && <HookesLawSimulator />}
        {activeSim === "snell" && <SnellSimulator />}
        {activeSim === "waves" && <RippleTankSimulator />}
        {activeSim === "circuits" && <CircuitSimulator />}
        {activeSim === "density" && <DensityArchimedesSimulator />}
        {activeSim === "thermal" && <CalorimetrySimulator />}
        {activeSim === "lens" && <LensSimulator />}
        {activeSim === "halflife" && <HalfLifeSimulator />}
      </Suspense>
    </div>
  );
};

/* =========================================================================
   1. MOTION & VELOCITY-TIME GRAPH SIMULATOR
   ========================================================================= */
const MotionSimulator: React.FC = () => {
  const [initialV, setInitialV] = useState<number>(0);
  const [acceleration, setAcceleration] = useState<number>(3);
  const [time, setTime] = useState<number>(10);

  const finalV = initialV + acceleration * time;
  // Distance = area under graph = ut + 0.5 a t^2
  const distance = initialV * time + 0.5 * acceleration * time * time;
  const avgSpeed = time > 0 ? (distance / time).toFixed(2) : "0";

  const setPreset = (u: number, a: number, t: number) => {
    setInitialV(u);
    setAcceleration(a);
    setTime(t);
  };

  // SVG graph coordinates
  const svgWidth = 480;
  const svgHeight = 240;
  const padding = 40;

  const maxT = Math.max(15, time + 2);
  const maxV = Math.max(30, Math.abs(finalV) + 10, Math.abs(initialV) + 10);

  const getX = (t: number) => padding + (t / maxT) * (svgWidth - padding * 2);
  const getY = (v: number) => svgHeight - padding - ((v + maxV / 2) / maxV) * (svgHeight - padding * 2);

  const x0 = getX(0);
  const y0 = getY(initialV);
  const x1 = getX(time);
  const y1 = getY(finalV);
  const yAxisZero = getY(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Controls Column */}
      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            Motion Graph Parameters
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Adjust initial velocity (u), uniform acceleration (a), and time (t).
          </p>
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Initial Velocity (u)</span>
              <span className="font-mono text-cyan-400 font-bold">{initialV} m/s</span>
            </div>
            <input
              type="range"
              min="-10"
              max="30"
              step="1"
              value={initialV}
              onChange={(e) => setInitialV(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Acceleration (a = gradient)</span>
              <span className="font-mono text-emerald-400 font-bold">
                {acceleration > 0 ? `+${acceleration}` : acceleration} m/s²
              </span>
            </div>
            <input
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={acceleration}
              onChange={(e) => setAcceleration(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Time Interval (t)</span>
              <span className="font-mono text-amber-400 font-bold">{time} s</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
        </div>

        {/* Presets */}
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Exam Scenario Presets:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setPreset(0, 4, 6)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 text-left transition-colors"
            >
              🚀 Accelerating from Rest (0→24 m/s)
            </button>
            <button
              onClick={() => setPreset(20, -4, 5)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 text-left transition-colors"
            >
              🛑 Braking Car (20→0 m/s)
            </button>
            <button
              onClick={() => setPreset(0, 9.8, 4)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 text-left transition-colors"
            >
              🍎 Free Fall under Gravity (g=9.8)
            </button>
            <button
              onClick={() => setPreset(15, 0, 10)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 text-left transition-colors"
            >
              🚗 Constant Speed (a = 0)
            </button>
          </div>
        </div>

        {/* Live Calculation Cards */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-[11px] text-slate-400 block font-medium">Final Velocity (v = u + at)</span>
            <span className="text-lg font-bold font-mono text-cyan-300">
              {finalV.toFixed(1)} <span className="text-xs font-normal text-slate-400">m/s</span>
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-[11px] text-slate-400 block font-medium">Distance (Area under curve)</span>
            <span className="text-lg font-bold font-mono text-emerald-300">
              {distance.toFixed(1)} <span className="text-xs font-normal text-slate-400">m</span>
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Visual Graph Column */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Velocity-Time (v-t) Graph</h3>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Gradient = Acceleration
              </span>
              <span className="flex items-center gap-1 text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/40"></span> Shaded Area = Distance
              </span>
            </div>
          </div>

          {/* SVG Rendering */}
          <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 flex justify-center items-center overflow-x-auto">
            <svg width={svgWidth} height={svgHeight} className="overflow-visible select-none">
              {/* Grid Lines */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" strokeOpacity="0.4" />
                </pattern>
                <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <rect x={padding} y={padding} width={svgWidth - padding * 2} height={svgHeight - padding * 2} fill="url(#grid)" />

              {/* Shaded Area Polygon under line */}
              <polygon
                points={`${x0},${yAxisZero} ${x0},${y0} ${x1},${y1} ${x1},${yAxisZero}`}
                fill="url(#areaGrad)"
                stroke="#0891b2"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* Axes */}
              {/* X Axis (Time) */}
              <line x1={padding - 5} y1={yAxisZero} x2={svgWidth - padding + 15} y2={yAxisZero} stroke="#94a3b8" strokeWidth="1.5" />
              <text x={svgWidth - padding + 20} y={yAxisZero + 4} fill="#cbd5e1" fontSize="11" fontWeight="bold">
                t (s)
              </text>

              {/* Y Axis (Velocity) */}
              <line x1={padding} y1={svgHeight - padding + 5} x2={padding} y2={padding - 15} stroke="#94a3b8" strokeWidth="1.5" />
              <text x={padding - 25} y={padding - 20} fill="#cbd5e1" fontSize="11" fontWeight="bold">
                v (m/s)
              </text>

              {/* Origin dot */}
              <circle cx={padding} cy={yAxisZero} r="3" fill="#94a3b8" />
              <text x={padding - 12} y={yAxisZero + 14} fill="#64748b" fontSize="10">
                0
              </text>

              {/* Key points markers */}
              {/* (0, u) */}
              <circle cx={x0} cy={y0} r="4" fill="#06b6d4" />
              <text x={x0 - 28} y={y0 + 4} fill="#06b6d4" fontSize="11" fontWeight="bold">
                u={initialV}
              </text>

              {/* (t, v) */}
              <circle cx={x1} cy={y1} r="4" fill="#10b981" />
              <text x={x1 + 8} y={y1 + 4} fill="#10b981" fontSize="11" fontWeight="bold">
                v={finalV.toFixed(1)}
              </text>

              {/* Dotted lines to axes */}
              <line x1={x1} y1={y1} x2={x1} y2={yAxisZero} stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
              <text x={x1 - 6} y={yAxisZero + 15} fill="#f59e0b" fontSize="10" fontWeight="bold">
                {time}s
              </text>

              {/* Main Velocity Line */}
              <line x1={x0} y1={y0} x2={x1} y2={y1} stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Exam takeaways callout */}
        <div className="mt-4 p-3.5 bg-slate-800/60 border border-slate-700/60 rounded-xl flex items-start gap-2.5 text-xs text-slate-300">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Cambridge Exam Mark Scheme Rules:</span>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-400">
              <li>Gradient = (v - u) / t = ({finalV.toFixed(1)} - {initialV}) / {time} = {acceleration} m/s² (Acceleration).</li>
              <li>Area = ½ × (u + v) × t = ½ × ({initialV} + {finalV.toFixed(1)}) × {time} = {distance.toFixed(1)} m (Distance).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   2. SNELL'S LAW & TOTAL INTERNAL REFLECTION (TIR) SIMULATOR
   ========================================================================= */
const SnellSimulator: React.FC = () => {
  const [n1, setN1] = useState<number>(1.5); // Medium 1 (Glass = 1.5)
  const [n2, setN2] = useState<number>(1.0); // Medium 2 (Air = 1.0)
  const [angleI, setAngleI] = useState<number>(30); // Angle of incidence in deg

  // Critical angle c = arcsin(n2 / n1) when n1 > n2
  const isDenserToLessDense = n1 > n2;
  const criticalAngleDeg = isDenserToLessDense ? (Math.asin(n2 / n1) * 180) / Math.PI : null;
  const isTIR = isDenserToLessDense && criticalAngleDeg !== null && angleI > criticalAngleDeg;

  // Refraction angle by Snell's Law: n1 sin i = n2 sin r => sin r = (n1 * sin i) / n2
  const sinI = Math.sin((angleI * Math.PI) / 180);
  const sinR = (n1 * sinI) / n2;
  const angleRDeg = !isTIR && sinR <= 1.0 ? (Math.asin(sinR) * 180) / Math.PI : null;

  // Medium presets
  const applyPreset = (presetN1: number, presetN2: number, name: string) => {
    setN1(presetN1);
    setN2(presetN2);
  };

  // SVG Geometry
  const width = 440;
  const height = 300;
  const cx = width / 2;
  const cy = height / 2;
  const rayLength = 120;

  // Angle in radians (measured from normal)
  const radI = (angleI * Math.PI) / 180;
  // Incident ray comes from bottom (Medium 1)
  const ix = cx - rayLength * Math.sin(radI);
  const iy = cy + rayLength * Math.cos(radI);

  // Reflected ray (reflection angle = i, reflects back into Medium 1)
  const rx = cx + rayLength * Math.sin(radI);
  const ry = cy + rayLength * Math.cos(radI);

  // Refracted ray (enters Medium 2 at top)
  let refX = cx;
  let refY = cy - rayLength;
  if (angleRDeg !== null) {
    const radR = (angleRDeg * Math.PI) / 180;
    refX = cx + rayLength * Math.sin(radR);
    refY = cy - rayLength * Math.cos(radR);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Controls */}
      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-cyan-400" />
            Snell's Law & Refraction Lab
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Observe ray behavior at the interface, calculate critical angle, and trigger Total Internal Reflection.
          </p>
        </div>

        {/* Medium Controls */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Medium 1 (Source, bottom) Refractive Index (n₁)</span>
              <span className="font-mono text-cyan-400 font-bold">{n1.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="2.5"
              step="0.05"
              value={n1}
              onChange={(e) => setN1(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Medium 2 (Receiver, top) Refractive Index (n₂)</span>
              <span className="font-mono text-emerald-400 font-bold">{n2.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="2.5"
              step="0.05"
              value={n2}
              onChange={(e) => setN2(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Angle of Incidence (i, to Normal)</span>
              <span className="font-mono text-amber-400 font-bold">{angleI}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="89"
              step="1"
              value={angleI}
              onChange={(e) => setAngleI(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
        </div>

        {/* Material Presets */}
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Standard IGCSE Media Pairs:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => applyPreset(1.5, 1.0, "Glass to Air")}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 text-left transition-colors"
            >
              🔍 Glass (1.50) → Air (1.00)
            </button>
            <button
              onClick={() => applyPreset(1.33, 1.0, "Water to Air")}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 text-left transition-colors"
            >
              💧 Water (1.33) → Air (1.00)
            </button>
            <button
              onClick={() => applyPreset(2.42, 1.0, "Diamond to Air")}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 text-left transition-colors"
            >
              💎 Diamond (2.42) → Air (1.00)
            </button>
            <button
              onClick={() => applyPreset(1.0, 1.5, "Air to Glass")}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 text-left transition-colors"
            >
              ☀️ Air (1.00) → Glass (1.50)
            </button>
          </div>
        </div>

        {/* Calculated Status Badge */}
        <div className="space-y-2">
          {criticalAngleDeg !== null && (
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-xs">
              <span className="text-slate-300">Critical Angle (c = arcsin(n₂/n₁)):</span>
              <span className="font-mono text-amber-400 font-bold text-sm">
                c = {criticalAngleDeg.toFixed(1)}°
              </span>
            </div>
          )}

          {isTIR ? (
            <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping"></span>
              <span>TOTAL INTERNAL REFLECTION (i &gt; c)! 100% of light reflected back into Medium 1.</span>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-xs">
              <span className="text-slate-300">Angle of Refraction (r):</span>
              <span className="font-mono text-emerald-400 font-bold text-sm">
                r = {angleRDeg !== null ? `${angleRDeg.toFixed(1)}°` : "90.0°"}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Visual Ray Tracing Canvas */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Ray Tracing Diagram</h3>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Incident Ray
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Refracted Ray
              </span>
              <span className="flex items-center gap-1 text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Reflected Ray
              </span>
            </div>
          </div>

          <div className="w-full bg-slate-950 rounded-xl p-4 border border-slate-800 flex justify-center items-center">
            <svg width={width} height={height} className="select-none">
              {/* Upper Medium (Medium 2) */}
              <rect x="0" y="0" width={width} height={cy} fill="#1e293b" opacity="0.4" />
              <text x="20" y="30" fill="#94a3b8" fontSize="12" fontWeight="bold">
                Medium 2 (n₂ = {n2.toFixed(2)})
              </text>

              {/* Lower Medium (Medium 1) */}
              <rect x="0" y={cy} width={width} height={cy} fill="#0f172a" opacity="0.8" />
              <text x="20" y={cy + 30} fill="#94a3b8" fontSize="12" fontWeight="bold">
                Medium 1 (n₁ = {n1.toFixed(2)})
              </text>

              {/* Boundary Line */}
              <line x1="0" y1={cy} x2={width} y2={cy} stroke="#64748b" strokeWidth="2" />

              {/* Normal Line (Dashed) */}
              <line x1={cx} y1="20" x2={cx} y2={height - 20} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x={cx + 6} y="30" fill="#94a3b8" fontSize="10">
                Normal (90°)
              </text>

              {/* Incident Ray (Amber) */}
              <line x1={ix} y1={iy} x2={cx} y2={cy} stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
              {/* Arrow on incident ray */}
              <polygon
                points={`${(ix + cx) / 2},${(iy + cy) / 2 - 4} ${(ix + cx) / 2 + 6},${(iy + cy) / 2 + 4} ${(ix + cx) / 2 - 6},${(iy + cy) / 2 + 4}`}
                fill="#f59e0b"
                transform={`rotate(${90 - angleI}, ${(ix + cx) / 2}, ${(iy + cy) / 2})`}
              />

              {/* Angle i Arc */}
              <path
                d={`M ${cx} ${cy + 30} A 30 30 0 0 1 ${cx - 30 * Math.sin(radI)} ${cy + 30 * Math.cos(radI)}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
              />
              <text x={cx - 24} y={cy + 40} fill="#f59e0b" fontSize="11" fontWeight="bold">
                i={angleI}°
              </text>

              {/* If NOT TIR: Draw Refracted Ray (Emerald) */}
              {!isTIR && angleRDeg !== null && (
                <>
                  <line x1={cx} y1={cy} x2={refX} y2={refY} stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                  <text x={refX + 6} y={refY} fill="#10b981" fontSize="11" fontWeight="bold">
                    r={angleRDeg.toFixed(1)}°
                  </text>
                </>
              )}

              {/* Reflected Ray (Cyan) */}
              <line
                x1={cx}
                y1={cy}
                x2={rx}
                y2={ry}
                stroke="#06b6d4"
                strokeWidth={isTIR ? "3.5" : "1.5"}
                strokeOpacity={isTIR ? 1.0 : 0.4}
                strokeLinecap="round"
              />
              <text x={rx + 6} y={ry} fill="#06b6d4" fontSize="10">
                Reflected Ray ({angleI}°)
              </text>
            </svg>
          </div>
        </div>

        {/* Mark scheme tip */}
        <div className="mt-4 p-3.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs text-slate-300">
          <span className="font-semibold text-white">TIR Conditions Checklist (Exam Favorite):</span>
          <p className="text-slate-400 mt-1">
            1. Light MUST travel from denser medium (higher n₁) to less dense medium (lower n₂).<br />
            2. Angle of incidence i ({angleI}°) must exceed the critical angle c ({criticalAngleDeg ? `${criticalAngleDeg.toFixed(1)}°` : "N/A"}).
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. ELECTRIC CIRCUIT & OHM'S LAW LAB
   ========================================================================= */
const CircuitSimulator: React.FC = () => {
  const [circuitType, setCircuitType] = useState<"series" | "parallel" | "divider">("series");
  const [vSupply, setVSupply] = useState<number>(12);
  const [r1, setR1] = useState<number>(4);
  const [r2, setR2] = useState<number>(6);
  const [sensorLight, setSensorLight] = useState<number>(50); // For LDR / Thermistor potential divider

  // Calculations
  let rTotal = 0;
  let iTotal = 0;
  let v1 = 0;
  let v2 = 0;
  let i1 = 0;
  let i2 = 0;
  let pTotal = 0;

  if (circuitType === "series") {
    rTotal = r1 + r2;
    iTotal = vSupply / rTotal;
    v1 = iTotal * r1;
    v2 = iTotal * r2;
    i1 = iTotal;
    i2 = iTotal;
    pTotal = vSupply * iTotal;
  } else if (circuitType === "parallel") {
    rTotal = (r1 * r2) / (r1 + r2);
    iTotal = vSupply / rTotal;
    v1 = vSupply;
    v2 = vSupply;
    i1 = vSupply / r1;
    i2 = vSupply / r2;
    pTotal = vSupply * iTotal;
  } else {
    // Potential divider with LDR (sensorLight 0-100%)
    // LDR resistance decreases with light: R_ldr = 1000 / (sensorLight + 5)
    const rLDR = Math.max(1, Math.round(50 / (sensorLight * 0.1 + 1)));
    rTotal = r1 + rLDR;
    iTotal = vSupply / rTotal;
    v1 = (r1 / rTotal) * vSupply; // Fixed resistor
    v2 = (rLDR / rTotal) * vSupply; // LDR voltage
    pTotal = vSupply * iTotal;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Controls */}
      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Circuit & Potential Divider Lab
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Toggle series, parallel, and sensor divider circuits to see current splitting and voltage drops.
          </p>
        </div>

        {/* Circuit Type Switcher */}
        <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setCircuitType("series")}
            className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
              circuitType === "series" ? "bg-yellow-500 text-slate-950" : "text-slate-400 hover:text-white"
            }`}
          >
            Series Circuit
          </button>
          <button
            onClick={() => setCircuitType("parallel")}
            className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
              circuitType === "parallel" ? "bg-yellow-500 text-slate-950" : "text-slate-400 hover:text-white"
            }`}
          >
            Parallel Circuit
          </button>
          <button
            onClick={() => setCircuitType("divider")}
            className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
              circuitType === "divider" ? "bg-yellow-500 text-slate-950" : "text-slate-400 hover:text-white"
            }`}
          >
            LDR Divider
          </button>
        </div>

        {/* Sliders */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Supply Voltage (V_in)</span>
              <span className="font-mono text-yellow-400 font-bold">{vSupply} V</span>
            </div>
            <input
              type="range"
              min="2"
              max="24"
              step="1"
              value={vSupply}
              onChange={(e) => setVSupply(Number(e.target.value))}
              className="w-full accent-yellow-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Resistor 1 (R₁)</span>
              <span className="font-mono text-cyan-400 font-bold">{r1} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={r1}
              onChange={(e) => setR1(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          {circuitType !== "divider" ? (
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Resistor 2 (R₂)</span>
                <span className="font-mono text-emerald-400 font-bold">{r2} Ω</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={r2}
                onChange={(e) => setR2(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
          ) : (
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Light Level on LDR (Light Up → Resistance Down)</span>
                <span className="font-mono text-amber-400 font-bold">{sensorLight}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={sensorLight}
                onChange={(e) => setSensorLight(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          )}
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-[11px] text-slate-400 block font-medium">Total Resistance (R_total)</span>
            <span className="text-lg font-bold font-mono text-cyan-300">
              {rTotal.toFixed(2)} <span className="text-xs font-normal text-slate-400">Ω</span>
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-[11px] text-slate-400 block font-medium">Total Current (I = V / R)</span>
            <span className="text-lg font-bold font-mono text-emerald-300">
              {iTotal.toFixed(2)} <span className="text-xs font-normal text-slate-400">A</span>
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-[11px] text-slate-400 block font-medium">Voltage Across R₁ (V₁)</span>
            <span className="text-lg font-bold font-mono text-yellow-300">
              {v1.toFixed(2)} <span className="text-xs font-normal text-slate-400">V</span>
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-[11px] text-slate-400 block font-medium">
              {circuitType === "divider" ? "Voltage Across LDR (V_out)" : "Voltage Across R₂ (V₂)"}
            </span>
            <span className="text-lg font-bold font-mono text-pink-300">
              {v2.toFixed(2)} <span className="text-xs font-normal text-slate-400">V</span>
            </span>
          </div>
        </div>
      </div>

      {/* Visual Schematic Diagram */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Circuit Schematic & Voltmeter Readings</h3>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-yellow-400 border border-slate-700 font-mono">
              P_total = {pTotal.toFixed(1)} W
            </span>
          </div>

          {/* SVG Circuit */}
          <div className="w-full bg-slate-950 rounded-xl p-4 border border-slate-800 flex justify-center items-center">
            <svg width="440" height="240" className="select-none font-mono">
              {/* Battery Source */}
              <line x1="40" y1="120" x2="100" y2="120" stroke="#facc15" strokeWidth="2.5" />
              {/* Long bar (+) */}
              <line x1="100" y1="100" x2="100" y2="140" stroke="#facc15" strokeWidth="3" />
              {/* Short bar (-) */}
              <line x1="110" y1="108" x2="110" y2="132" stroke="#facc15" strokeWidth="4" />
              <text x="96" y="90" fill="#facc15" fontSize="11" fontWeight="bold">
                + {vSupply}V -
              </text>
              <line x1="110" y1="120" x2="160" y2="120" stroke="#facc15" strokeWidth="2.5" />

              {/* Main ammeter */}
              <circle cx="160" cy="120" r="14" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <text x="155" y="124" fill="#10b981" fontSize="12" fontWeight="bold">
                A
              </text>
              <text x="140" y="150" fill="#10b981" fontSize="10">
                {iTotal.toFixed(2)}A
              </text>

              {circuitType === "series" ? (
                <>
                  {/* Wire to top */}
                  <line x1="174" y1="120" x2="220" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                  {/* Resistor 1 */}
                  <rect x="220" y="108" width="60" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <text x="236" y="124" fill="#38bdf8" fontSize="11">
                    {r1}Ω
                  </text>
                  <text x="232" y="148" fill="#facc15" fontSize="10">
                    V₁={v1.toFixed(1)}V
                  </text>

                  <line x1="280" y1="120" x2="310" y2="120" stroke="#94a3b8" strokeWidth="2.5" />

                  {/* Resistor 2 */}
                  <rect x="310" y="108" width="60" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
                  <text x="326" y="124" fill="#34d399" fontSize="11">
                    {r2}Ω
                  </text>
                  <text x="322" y="148" fill="#facc15" fontSize="10">
                    V₂={v2.toFixed(1)}V
                  </text>

                  {/* Return wire */}
                  <line x1="370" y1="120" x2="410" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="410" y1="120" x2="410" y2="200" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="410" y1="200" x2="40" y2="200" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="40" y1="200" x2="40" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                </>
              ) : circuitType === "parallel" ? (
                <>
                  {/* Parallel branches */}
                  <line x1="174" y1="120" x2="220" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="220" y1="70" x2="220" y2="170" stroke="#94a3b8" strokeWidth="2.5" />

                  {/* Branch 1 (top) */}
                  <line x1="220" y1="70" x2="260" y2="70" stroke="#94a3b8" strokeWidth="2.5" />
                  <rect x="260" y="58" width="60" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <text x="276" y="74" fill="#38bdf8" fontSize="11">
                    {r1}Ω
                  </text>
                  <text x="265" y="48" fill="#10b981" fontSize="10">
                    I₁={i1.toFixed(2)}A
                  </text>
                  <line x1="320" y1="70" x2="360" y2="70" stroke="#94a3b8" strokeWidth="2.5" />

                  {/* Branch 2 (bottom) */}
                  <line x1="220" y1="170" x2="260" y2="170" stroke="#94a3b8" strokeWidth="2.5" />
                  <rect x="260" y="158" width="60" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
                  <text x="276" y="174" fill="#34d399" fontSize="11">
                    {r2}Ω
                  </text>
                  <text x="265" y="198" fill="#10b981" fontSize="10">
                    I₂={i2.toFixed(2)}A
                  </text>
                  <line x1="320" y1="170" x2="360" y2="170" stroke="#94a3b8" strokeWidth="2.5" />

                  {/* Junction join */}
                  <line x1="360" y1="70" x2="360" y2="170" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="360" y1="120" x2="410" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="410" y1="120" x2="410" y2="210" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="410" y1="210" x2="40" y2="210" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="40" y1="210" x2="40" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                </>
              ) : (
                <>
                  {/* Potential Divider LDR */}
                  <line x1="174" y1="120" x2="230" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                  <rect x="230" y="108" width="50" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <text x="240" y="124" fill="#38bdf8" fontSize="11">
                    R₁={r1}Ω
                  </text>

                  <line x1="280" y1="120" x2="320" y2="120" stroke="#94a3b8" strokeWidth="2.5" />

                  {/* LDR box with arrows */}
                  <rect x="320" y="108" width="50" height="24" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <text x="330" y="124" fill="#f59e0b" fontSize="10">
                    LDR
                  </text>
                  {/* Incoming light arrows */}
                  <line x1="325" y1="92" x2="335" y2="104" stroke="#facc15" strokeWidth="1.5" />
                  <line x1="335" y1="92" x2="345" y2="104" stroke="#facc15" strokeWidth="1.5" />

                  <text x="315" y="148" fill="#ec4899" fontSize="10">
                    V_out={v2.toFixed(1)}V
                  </text>

                  <line x1="370" y1="120" x2="410" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="410" y1="120" x2="410" y2="200" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="410" y1="200" x2="40" y2="200" stroke="#94a3b8" strokeWidth="2.5" />
                  <line x1="40" y1="200" x2="40" y2="120" stroke="#94a3b8" strokeWidth="2.5" />
                </>
              )}
            </svg>
          </div>
        </div>

        {/* Cambridge Mark Scheme Note */}
        <div className="mt-4 p-3.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs text-slate-300">
          <span className="font-semibold text-white">Series vs Parallel Golden Rules:</span>
          <div className="grid grid-cols-2 gap-2 mt-1 text-slate-400">
            <div>
              <span className="text-cyan-400 font-semibold">Series:</span> Current is identical everywhere. Voltage splits: V_in = V₁ + V₂.
            </div>
            <div>
              <span className="text-emerald-400 font-semibold">Parallel:</span> Voltage is identical across branches. Total current = I₁ + I₂.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   4. RADIOACTIVE HALF-LIFE DECAY SIMULATOR
   ========================================================================= */
const HalfLifeSimulator: React.FC = () => {
  const [initialCount, setInitialCount] = useState<number>(800);
  const [halfLifeSeconds, setHalfLifeSeconds] = useState<number>(5);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Remaining nuclei N(t) = N0 * (0.5)^(t / T_half)
  const remaining = Math.round(initialCount * Math.pow(0.5, elapsedTime / halfLifeSeconds));
  const decayed = initialCount - remaining;
  const halfLivesElapsed = (elapsedTime / halfLifeSeconds).toFixed(2);

  // Timer tick
  useEffect(() => {
    let timer: any = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setElapsedTime((prev) => {
          if (prev >= halfLifeSeconds * 4) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 800);
    }
    return () => clearInterval(timer);
  }, [isPlaying, halfLifeSeconds]);

  const resetSim = () => {
    setIsPlaying(false);
    setElapsedTime(0);
  };

  // SVG Graph coords
  const svgW = 440;
  const svgH = 220;
  const pad = 35;
  const maxSimTime = halfLifeSeconds * 4;

  const points = [];
  for (let t = 0; t <= maxSimTime; t += 0.5) {
    const N = initialCount * Math.pow(0.5, t / halfLifeSeconds);
    const px = pad + (t / maxSimTime) * (svgW - pad * 2);
    const py = svgH - pad - (N / initialCount) * (svgH - pad * 2);
    points.push(`${px},${py}`);
  }
  const pathD = `M ${points.join(" L ")}`;

  const currentX = pad + (elapsedTime / maxSimTime) * (svgW - pad * 2);
  const currentY = svgH - pad - (remaining / initialCount) * (svgH - pad * 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Controls */}
      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Radio className="w-5 h-5 text-purple-400" />
            Half-Life Decay Simulator
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Observe the exponential decay curve, step through half-lives, and see nuclei disintegration.
          </p>
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Initial Activity / Count Rate (N₀)</span>
              <span className="font-mono text-purple-400 font-bold">{initialCount} counts/s</span>
            </div>
            <input
              type="range"
              min="100"
              max="1600"
              step="50"
              value={initialCount}
              onChange={(e) => {
                setInitialCount(Number(e.target.value));
                resetSim();
              }}
              className="w-full accent-purple-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Half-Life (T_½)</span>
              <span className="font-mono text-cyan-400 font-bold">{halfLifeSeconds} s</span>
            </div>
            <input
              type="range"
              min="2"
              max="10"
              step="1"
              value={halfLifeSeconds}
              onChange={(e) => {
                setHalfLifeSeconds(Number(e.target.value));
                resetSim();
              }}
              className="w-full accent-cyan-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Elapsed Time (t)</span>
              <span className="font-mono text-amber-400 font-bold">{elapsedTime} s ({halfLivesElapsed} T_½)</span>
            </div>
            <input
              type="range"
              min="0"
              max={halfLifeSeconds * 4}
              step="0.5"
              value={elapsedTime}
              onChange={(e) => setElapsedTime(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex-1 py-2 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? "Pause Decay" : "Start Decay Sim"}</span>
          </button>
          <button
            onClick={resetSim}
            className="py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>

        {/* Live Metrics */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-[11px] text-slate-400 block font-medium">Remaining Undecayed (N)</span>
            <span className="text-xl font-bold font-mono text-purple-300">
              {remaining} <span className="text-xs font-normal text-slate-400">({((remaining / initialCount) * 100).toFixed(1)}%)</span>
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-[11px] text-slate-400 block font-medium">Decayed Daughter Nuclei</span>
            <span className="text-xl font-bold font-mono text-slate-300">
              {decayed} <span className="text-xs font-normal text-slate-400">({((decayed / initialCount) * 100).toFixed(1)}%)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Visual Decay Curve Column */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Radioactive Decay Curve</h3>
            <span className="text-xs text-slate-400 font-mono">
              T_½ = {halfLifeSeconds}s | 4 Half-Lives Total
            </span>
          </div>

          <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 flex justify-center items-center">
            <svg width={svgW} height={svgH} className="select-none font-mono">
              {/* Axes */}
              <line x1={pad} y1={svgH - pad} x2={svgW - pad + 10} y2={svgH - pad} stroke="#94a3b8" strokeWidth="1.5" />
              <text x={svgW - pad + 15} y={svgH - pad + 4} fill="#cbd5e1" fontSize="10">
                Time (s)
              </text>

              <line x1={pad} y1={svgH - pad} x2={pad} y2={pad - 10} stroke="#94a3b8" strokeWidth="1.5" />
              <text x={pad - 25} y={pad - 15} fill="#cbd5e1" fontSize="10">
                Count Rate (cpm)
              </text>

              {/* Half-Life Grid Lines (1 T_half, 2 T_half, 3 T_half) */}
              {[1, 2, 3].map((hl) => {
                const tx = pad + ((hl * halfLifeSeconds) / maxSimTime) * (svgW - pad * 2);
                const ny = svgH - pad - Math.pow(0.5, hl) * (svgH - pad * 2);
                return (
                  <g key={hl}>
                    <line x1={tx} y1={pad} x2={tx} y2={svgH - pad} stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1={pad} y1={ny} x2={tx} y2={ny} stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
                    <text x={tx - 8} y={svgH - pad + 14} fill="#94a3b8" fontSize="9">
                      {hl}T_½
                    </text>
                    <text x={pad - 28} y={ny + 3} fill="#a855f7" fontSize="9">
                      N₀/{Math.pow(2, hl)}
                    </text>
                  </g>
                );
              })}

              {/* Exponential Curve */}
              <path d={pathD} fill="none" stroke="#c084fc" strokeWidth="2.5" />

              {/* Active Current Position Tracker */}
              <circle cx={currentX} cy={currentY} r="5" fill="#f59e0b" />
              <line x1={currentX} y1={currentY} x2={currentX} y2={svgH - pad} stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>
        </div>

        {/* Mark scheme tip */}
        <div className="mt-4 p-3.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs text-slate-300">
          <span className="font-semibold text-white">Half-Life Calculation Steps for Exams:</span>
          <p className="text-slate-400 mt-1">
            • 1 Half-life: Activity halves to 50% (N₀ / 2)<br />
            • 2 Half-lives: Activity quarters to 25% (N₀ / 4)<br />
            • 3 Half-lives: Activity drops to 12.5% (N₀ / 8)<br />
            Always subtract background count rate before halving!
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   5. THIN CONVERGING LENS RAY TRACER SIMULATOR
   ========================================================================= */
const LensSimulator: React.FC = () => {
  const [focalLength, setFocalLength] = useState<number>(30); // f in cm
  const [objectDistance, setObjectDistance] = useState<number>(50); // u in cm
  const [objectHeight, setObjectHeight] = useState<number>(20); // h_o in cm

  // Thin lens equation: 1/f = 1/u + 1/v => 1/v = 1/f - 1/u = (u - f) / (u * f)
  // Image distance v:
  const isAtFocalPoint = objectDistance === focalLength;
  const imageDistance = !isAtFocalPoint ? (objectDistance * focalLength) / (objectDistance - focalLength) : 99999;
  const magnification = !isAtFocalPoint ? -imageDistance / objectDistance : 0;
  const imageHeight = magnification * objectHeight;

  // Image Nature:
  let nature = "";
  if (objectDistance > 2 * focalLength) {
    nature = "Real, Inverted, Diminished (e.g. Camera, Eye)";
  } else if (objectDistance === 2 * focalLength) {
    nature = "Real, Inverted, Same Size (e.g. Photocopier 1:1)";
  } else if (objectDistance > focalLength) {
    nature = "Real, Inverted, Magnified (e.g. Projector)";
  } else if (objectDistance === focalLength) {
    nature = "No Image Formed (Rays are parallel at infinity)";
  } else {
    nature = "Virtual, Upright, Magnified (e.g. Magnifying Glass)";
  }

  // SVG dimensions
  const svgW = 460;
  const svgH = 220;
  const lensX = svgW / 2;
  const axisY = svgH / 2;
  const scale = 2.0; // scale pixels per cm

  const objX = lensX - objectDistance * scale;
  const objTopY = axisY - objectHeight * scale;

  const f1X = lensX - focalLength * scale;
  const f2X = lensX + focalLength * scale;

  const imgX = lensX + imageDistance * scale;
  const imgTopY = axisY + imageHeight * scale; // Note: if inverted, imageHeight is negative so it goes down

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Controls */}
      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-400" />
            Converging Lens Ray Tracer
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Change object distance relative to F and 2F to observe real vs virtual image formations.
          </p>
        </div>

        {/* Sliders */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Object Distance (u)</span>
              <span className="font-mono text-amber-400 font-bold">{objectDistance} cm</span>
            </div>
            <input
              type="range"
              min="15"
              max="90"
              step="1"
              value={objectDistance}
              onChange={(e) => setObjectDistance(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Focal Length (f)</span>
              <span className="font-mono text-cyan-400 font-bold">{focalLength} cm (2F = {focalLength * 2} cm)</span>
            </div>
            <input
              type="range"
              min="20"
              max="45"
              step="1"
              value={focalLength}
              onChange={(e) => setFocalLength(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Object Height</span>
              <span className="font-mono text-slate-300 font-bold">{objectHeight} cm</span>
            </div>
            <input
              type="range"
              min="10"
              max="30"
              step="2"
              value={objectHeight}
              onChange={(e) => setObjectHeight(Number(e.target.value))}
              className="w-full accent-slate-500"
            />
          </div>
        </div>

        {/* Image Classification Output */}
        <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300">Image Nature:</span>
            <span className="font-semibold text-cyan-300">{nature}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Image Distance (v):</span>
            <span className="text-emerald-400 font-bold">
              {isAtFocalPoint ? "Infinity" : `${imageDistance.toFixed(1)} cm`}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Linear Magnification (m = v/u):</span>
            <span className="text-amber-400 font-bold">
              {isAtFocalPoint ? "N/A" : `${Math.abs(magnification).toFixed(2)}×`}
            </span>
          </div>
        </div>
      </div>

      {/* SVG Ray Diagram */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Ray Diagram Tracer</h3>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Object
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Image
              </span>
            </div>
          </div>

          <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 flex justify-center items-center overflow-x-auto">
            <svg width={svgW} height={svgH} className="select-none font-mono">
              {/* Principal Axis */}
              <line x1="10" y1={axisY} x2={svgW - 10} y2={axisY} stroke="#64748b" strokeWidth="1.5" />
              <text x={svgW - 25} y={axisY - 8} fill="#64748b" fontSize="9">
                Axis
              </text>

              {/* Converging Lens (vertical line with arrows at ends) */}
              <line x1={lensX} y1="20" x2={lensX} y2={svgH - 20} stroke="#38bdf8" strokeWidth="2.5" />
              {/* Top arrow */}
              <polygon points={`${lensX},15 ${lensX - 5},25 ${lensX + 5},25`} fill="#38bdf8" />
              {/* Bottom arrow */}
              <polygon points={`${lensX},${svgH - 15} ${lensX - 5},${svgH - 25} ${lensX + 5},${svgH - 25}`} fill="#38bdf8" />

              {/* Optical center C */}
              <circle cx={lensX} cy={axisY} r="3" fill="#38bdf8" />
              <text x={lensX + 4} y={axisY + 12} fill="#38bdf8" fontSize="10">
                C
              </text>

              {/* Focal Points F1 and F2 */}
              <circle cx={f1X} cy={axisY} r="3" fill="#94a3b8" />
              <text x={f1X - 4} y={axisY + 14} fill="#94a3b8" fontSize="10">
                F
              </text>

              <circle cx={f2X} cy={axisY} r="3" fill="#94a3b8" />
              <text x={f2X - 4} y={axisY + 14} fill="#94a3b8" fontSize="10">
                F
              </text>

              {/* Object Arrow (Amber) */}
              {objX >= 20 && (
                <>
                  <line x1={objX} y1={axisY} x2={objX} y2={objTopY} stroke="#f59e0b" strokeWidth="3" />
                  <polygon points={`${objX},${objTopY} ${objX - 4},${objTopY + 8} ${objX + 4},${objTopY + 8}`} fill="#f59e0b" />
                  <text x={objX - 8} y={objTopY - 6} fill="#f59e0b" fontSize="10" fontWeight="bold">
                    Object
                  </text>
                </>
              )}

              {/* Ray 1: Parallel to axis, refracts through F2 */}
              {objX >= 20 && (
                <>
                  <line x1={objX} y1={objTopY} x2={lensX} y2={objTopY} stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1={lensX} y1={objTopY} x2={svgW - 20} y2={objTopY + ((svgW - 20 - lensX) * (axisY - objTopY)) / (f2X - lensX)} stroke="#38bdf8" strokeWidth="1.5" />
                </>
              )}

              {/* Ray 2: Through optical center C undeviated */}
              {objX >= 20 && (
                <line
                  x1={objX}
                  y1={objTopY}
                  x2={svgW - 20}
                  y2={axisY + ((svgW - 20 - lensX) * (axisY - objTopY)) / (lensX - objX)}
                  stroke="#a855f7"
                  strokeWidth="1.5"
                />
              )}

              {/* Image Arrow (Emerald if Real, Pink dashed if Virtual) */}
              {!isAtFocalPoint && imgX > 20 && imgX < svgW - 20 && (
                <>
                  <line
                    x1={imgX}
                    y1={axisY}
                    x2={imgX}
                    y2={imgTopY}
                    stroke={objectDistance > focalLength ? "#10b981" : "#ec4899"}
                    strokeWidth="3"
                    strokeDasharray={objectDistance < focalLength ? "3 3" : undefined}
                  />
                  <text
                    x={imgX - 6}
                    y={objectDistance > focalLength ? imgTopY + 14 : imgTopY - 6}
                    fill={objectDistance > focalLength ? "#10b981" : "#ec4899"}
                    fontSize="10"
                    fontWeight="bold"
                  >
                    Image
                  </text>
                </>
              )}
            </svg>
          </div>
        </div>

        {/* Key rules */}
        <div className="mt-4 p-3.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs text-slate-300">
          <span className="font-semibold text-white">Cambridge Ray Diagram Rules:</span>
          <p className="text-slate-400 mt-1">
            1. Ray parallel to axis passes through principal focus F on other side.<br />
            2. Ray through optical center C passes straight through without deviation.
          </p>
        </div>
      </div>
    </div>
  );
};
