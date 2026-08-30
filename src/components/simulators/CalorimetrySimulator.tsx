import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Flame, Sparkles, Thermometer, ShieldCheck } from "lucide-react";

interface Substance {
  name: string;
  c: number; // J / (kg * °C)
  boilingPoint: number; // °C
  color: string;
}

const SUBSTANCES: Substance[] = [
  { name: "Liquid Water", c: 4200, boilingPoint: 100, color: "#0284c7" },
  { name: "Ethanol", c: 2440, boilingPoint: 78, color: "#8b5cf6" },
  { name: "Cooking Oil", c: 2000, boilingPoint: 220, color: "#d97706" },
  { name: "Aluminium Block", c: 900, boilingPoint: 660, color: "#64748b" },
  { name: "Copper Block", c: 385, boilingPoint: 1085, color: "#b45309" },
];

export const CalorimetrySimulator: React.FC = () => {
  const [substanceIdx, setSubstanceIdx] = useState<number>(0); // Water
  const [massKg, setMassKg] = useState<number>(0.5); // kg
  const [heaterPowerW, setHeaterPowerW] = useState<number>(800); // Watts
  const [isLidOn, setIsLidOn] = useState<boolean>(true);
  const [isHeating, setIsHeating] = useState<boolean>(false);
  const [elapsedTimeSec, setElapsedTimeSec] = useState<number>(0);
  const [tempHistory, setTempHistory] = useState<{ t: number; temp: number }[]>([
    { t: 0, temp: 20 },
  ]);

  const substance = SUBSTANCES[substanceIdx];
  const initialTemp = 20; // °C

  // Thermal loss coefficient (if lid is off, faster heat loss)
  const lossRatePerDegree = isLidOn ? 0.005 : 0.025; // W/°C

  const currentTemp = tempHistory[tempHistory.length - 1]?.temp || initialTemp;
  const isBoiling = currentTemp >= substance.boilingPoint;

  // Energy supplied Q = P * t
  const energySuppliedJ = heaterPowerW * elapsedTimeSec;

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHeating) return;

    timerRef.current = window.setInterval(() => {
      setElapsedTimeSec((prevT) => {
        const nextT = prevT + 1;
        setTempHistory((prevHist) => {
          const lastTemp = prevHist[prevHist.length - 1].temp;
          if (lastTemp >= substance.boilingPoint) {
            // Temperature stays fixed during boiling phase change!
            return [...prevHist, { t: nextT, temp: substance.boilingPoint }];
          }

          // Net Power = Heater Power - heat losses
          const tempDiffRoom = Math.max(0, lastTemp - 20);
          const heatLossW = tempDiffRoom * lossRatePerDegree * 50;
          const netPower = Math.max(0, heaterPowerW - heatLossW);

          // Delta T = (P_net * dt) / (m * c)
          const dt = 1; // 1 second step
          const deltaT = (netPower * dt) / (massKg * substance.c);
          const newTemp = Math.min(substance.boilingPoint, lastTemp + deltaT);

          return [...prevHist, { t: nextT, temp: newTemp }];
        });
        return nextT;
      });
    }, 200); // Fast simulation tick (5x speed)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHeating, heaterPowerW, massKg, substance, isLidOn, lossRatePerDegree]);

  const resetSimulator = () => {
    setIsHeating(false);
    setElapsedTimeSec(0);
    setTempHistory([{ t: 0, temp: initialTemp }]);
  };

  // Theoretical rate of temperature rise dT/dt = P / (m * c)
  const theoreticalRate = heaterPowerW / (massKg * substance.c);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Controls Column */}
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
              <Flame className="w-4 h-4" />
            </span>
            <h2 className="text-base font-bold text-slate-900">
              Specific Heat Capacity & Calorimeter Lab
            </h2>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Supply electrical energy (Q = P·t) to heat substances and verify Q = m·c·ΔT and boiling plateaus.
          </p>
        </div>

        {/* Substance Selector */}
        <div>
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
            1. Select Substance:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SUBSTANCES.map((s, idx) => (
              <button
                key={s.name}
                onClick={() => {
                  setSubstanceIdx(idx);
                  resetSimulator();
                }}
                className={`p-2 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                  substanceIdx === idx
                    ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                <div className="truncate">{s.name}</div>
                <div className="text-[10px] opacity-80">{s.c} J/(kg·°C)</div>
              </button>
            ))}
          </div>
        </div>

        {/* Mass & Power Sliders */}
        <div className="space-y-4 pt-1">
          <div>
            <div className="flex justify-between text-xs text-slate-700 mb-1">
              <span className="font-semibold">Substance Mass (m)</span>
              <span className="font-mono text-blue-700 font-bold">{massKg.toFixed(2)} kg ({massKg * 1000} g)</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2.0"
              step="0.05"
              value={massKg}
              disabled={isHeating}
              onChange={(e) => {
                setMassKg(Number(e.target.value));
                resetSimulator();
              }}
              className="w-full accent-blue-600 cursor-pointer disabled:opacity-50"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-700 mb-1">
              <span className="font-semibold">Immersion Heater Power (P)</span>
              <span className="font-mono text-amber-700 font-bold">{heaterPowerW} W</span>
            </div>
            <input
              type="range"
              min="200"
              max="2400"
              step="100"
              value={heaterPowerW}
              onChange={(e) => setHeaterPowerW(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Insulation Lid Toggle */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs">
            <span className="font-bold text-slate-900 block">Insulated Lid & Cotton Lagging</span>
            <span className="text-slate-500 text-[11px]">
              {isLidOn ? "Minimizes convection & thermal loss" : "High heat loss to surroundings"}
            </span>
          </div>
          <button
            onClick={() => setIsLidOn(!isLidOn)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isLidOn
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : "bg-slate-100 text-slate-700 border-slate-300"
            }`}
          >
            {isLidOn ? "Lid: ON (Insulated)" : "Lid: OFF (Bare)"}
          </button>
        </div>

        {/* Heating Controls */}
        <div className="pt-1 flex items-center gap-3">
          <button
            onClick={() => setIsHeating(!isHeating)}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
              isHeating
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isHeating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isHeating ? "Pause Heater" : "Switch On Heater"}</span>
          </button>

          <button
            onClick={resetSimulator}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
            title="Reset Experiment"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Live Calculation Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
            <span className="text-[11px] font-semibold text-blue-900 block">
              Energy Supplied (Q = Pt)
            </span>
            <span className="text-base font-bold font-mono text-blue-950">
              {(energySuppliedJ / 1000).toFixed(2)} <span className="text-xs font-normal text-slate-600">kJ</span>
            </span>
            <span className="text-[10px] text-blue-700 block mt-0.5">
              Timer: {elapsedTimeSec} s
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[11px] font-semibold text-emerald-900 block">
              Temperature Rise (ΔT)
            </span>
            <span className="text-base font-bold font-mono text-emerald-950">
              +{(currentTemp - initialTemp).toFixed(1)} <span className="text-xs font-normal text-slate-600">°C</span>
            </span>
            <span className="text-[10px] text-emerald-700 block mt-0.5">
              Current T = {currentTemp.toFixed(1)} °C
            </span>
          </div>
        </div>

        {isBoiling && (
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 flex items-start gap-2">
            <span className="text-amber-600 font-bold text-sm shrink-0">♨️</span>
            <div>
              <strong className="block font-bold">Phase Change Plateau Active!</strong>
              <span>
                Substance has reached boiling point ({substance.boilingPoint}°C). Temperature remains constant while absorbing Specific Latent Heat of Vaporization (Q = m·Lv).
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Temperature vs Time Heating Curve Column */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-blue-600" />
            <span>Temperature-Time Heating Curve & Calorimeter Stand</span>
          </h3>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-200 font-mono">
              Rate = {theoreticalRate.toFixed(2)} °C/s
            </span>
          </div>
        </div>

        {/* Live SVG Graph of Temperature vs Time */}
        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center">
          <div className="w-full flex justify-between text-xs text-slate-600 mb-2">
            <span className="font-semibold text-slate-900">Heating Curve T(t)</span>
            <span className="font-mono text-slate-500">
              Boiling Plateau @ {substance.boilingPoint}°C
            </span>
          </div>

          <svg width="380" height="220" className="overflow-visible select-none">
            {/* Graph Axes */}
            <line x1="45" y1="180" x2="360" y2="180" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="45" y1="180" x2="45" y2="20" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Labels */}
            <text x="360" y="196" textAnchor="end" fontSize="10" fill="#475569" fontWeight="600">
              Time t (s)
            </text>
            <text x="35" y="15" textAnchor="start" fontSize="10" fill="#475569" fontWeight="600">
              Temp T (°C)
            </text>

            {/* Grid ticks */}
            {[20, 40, 60, 80, 100, 120].map((tVal, idx) => (
              <g key={idx}>
                <line x1="45" y1={180 - (tVal - 20) * 1.3} x2="360" y2={180 - (tVal - 20) * 1.3} stroke="#e2e8f0" strokeWidth="1" />
                <text x="40" y={184 - (tVal - 20) * 1.3} textAnchor="end" fontSize="8" fill="#94a3b8">
                  {tVal}
                </text>
              </g>
            ))}

            {/* Boiling point reference dashed line */}
            <line
              x1="45"
              y1={180 - Math.min(100, substance.boilingPoint - 20) * 1.3}
              x2="360"
              y2={180 - Math.min(100, substance.boilingPoint - 20) * 1.3}
              stroke="#ea580c"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />

            {/* Plot History Line */}
            {tempHistory.length > 1 && (
              <polyline
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
                points={tempHistory
                  .map((pt) => {
                    const x = 45 + Math.min(300, (pt.t / Math.max(60, elapsedTimeSec + 10)) * 300);
                    const y = 180 - Math.min(160, (pt.temp - 20) * 1.3);
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
            )}

            {/* Current Point Marker */}
            {tempHistory.length > 0 && (
              <circle
                cx={45 + Math.min(300, (elapsedTimeSec / Math.max(60, elapsedTimeSec + 10)) * 300)}
                cy={180 - Math.min(160, (currentTemp - 20) * 1.3)}
                r="4.5"
                fill="#dc2626"
                stroke="#ffffff"
                strokeWidth="2"
              />
            )}
          </svg>
        </div>

        {/* Paper 6 Practical Precautions */}
        <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-slate-700 space-y-1">
          <strong className="block text-blue-950 font-bold">Paper 6 Experimental Precautions:</strong>
          <ul className="list-disc list-inside space-y-0.5 leading-relaxed text-slate-700">
            <li>
              <strong>Stirring:</strong> Stir the liquid continuously to ensure uniform temperature throughout.
            </li>
            <li>
              <strong>Thermal Insulation:</strong> Wrap beaker with insulating lagging and use a lid to minimize heat loss to surroundings.
            </li>
            <li>
              <strong>Thermal Equilibrium:</strong> Wait after switching off the heater for thermometer reading to peak before recording final temperature.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
