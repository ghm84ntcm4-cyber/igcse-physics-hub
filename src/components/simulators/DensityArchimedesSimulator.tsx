import React, { useState } from "react";
import { Scale, Sparkles, Droplets, Info, CheckCircle2, RotateCcw } from "lucide-react";

interface Material {
  name: string;
  density: number; // kg/m3
  color: string;
}

interface Fluid {
  name: string;
  density: number; // kg/m3
  color: string;
  transparency: string;
}

const MATERIALS: Material[] = [
  { name: "Wood (Pine)", density: 600, color: "#b45309" },
  { name: "Ice", density: 920, color: "#7dd3fc" },
  { name: "Dense Plastic", density: 1150, color: "#475569" },
  { name: "Aluminium", density: 2700, color: "#94a3b8" },
  { name: "Iron / Steel", density: 7800, color: "#334155" },
  { name: "Gold", density: 19300, color: "#eab308" },
];

const FLUIDS: Fluid[] = [
  { name: "Fresh Water", density: 1000, color: "#0284c7", transparency: "rgba(2, 132, 199, 0.35)" },
  { name: "Saltwater (Sea)", density: 1030, color: "#0369a1", transparency: "rgba(3, 105, 161, 0.45)" },
  { name: "Vegetable Oil", density: 800, color: "#ca8a04", transparency: "rgba(202, 138, 4, 0.35)" },
  { name: "Liquid Mercury", density: 13600, color: "#475569", transparency: "rgba(71, 85, 105, 0.85)" },
];

export const DensityArchimedesSimulator: React.FC = () => {
  const [selectedMaterialIdx, setSelectedMaterialIdx] = useState<number>(3); // Aluminium
  const [selectedFluidIdx, setSelectedFluidIdx] = useState<number>(0); // Water
  const [objectVolumeCm3, setObjectVolumeCm3] = useState<number>(100); // cm3
  const [submergedPercent, setSubmergedPercent] = useState<number>(100); // %
  const [isAutoFloating, setIsAutoFloating] = useState<boolean>(false);

  const material = MATERIALS[selectedMaterialIdx];
  const fluid = FLUIDS[selectedFluidIdx];
  const g = 9.8; // m/s²

  // Volume in m³: 1 cm³ = 1e-6 m³
  const volumeM3 = objectVolumeCm3 * 1e-6;
  const objectMassKg = material.density * volumeM3;
  const objectMassGrams = objectMassKg * 1000;
  const weightInAirN = objectMassKg * g;

  // Equilibrium float percentage
  const floatSubmergedPercent = Math.min(100, Math.max(0, (material.density / fluid.density) * 100));
  const willFloatNaturally = material.density < fluid.density;

  const actualSubmergedPercent = isAutoFloating ? floatSubmergedPercent : submergedPercent;
  const submergedFraction = actualSubmergedPercent / 100;
  const displacedVolumeCm3 = objectVolumeCm3 * submergedFraction;
  const displacedVolumeM3 = displacedVolumeCm3 * 1e-6;

  // Upthrust Fb = rho_fluid * V_submerged * g
  const upthrustN = fluid.density * displacedVolumeM3 * g;

  // Apparent weight W' = W - Fb
  const apparentWeightN = Math.max(0, weightInAirN - upthrustN);

  const initialWaterVolumeCm3 = 250;
  const finalCylinderVolumeCm3 = initialWaterVolumeCm3 + displacedVolumeCm3;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Controls Column */}
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
              <Droplets className="w-4 h-4" />
            </span>
            <h2 className="text-base font-bold text-slate-900">
              Density & Archimedes' Upthrust Lab
            </h2>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Submerge objects into fluids to measure volume displacement ($\Delta V$), buoyant upthrust ($F_b = \rho V g$), and apparent loss in weight.
          </p>
        </div>

        {/* Material Selection */}
        <div>
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
            1. Select Object Material:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {MATERIALS.map((m, idx) => (
              <button
                key={m.name}
                onClick={() => {
                  setSelectedMaterialIdx(idx);
                  setIsAutoFloating(false);
                }}
                className={`p-2 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                  selectedMaterialIdx === idx
                    ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                <div className="truncate">{m.name}</div>
                <div className="text-[10px] opacity-80">{m.density} kg/m³</div>
              </button>
            ))}
          </div>
        </div>

        {/* Fluid Selection */}
        <div>
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
            2. Select Immersion Liquid:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {FLUIDS.map((f, idx) => (
              <button
                key={f.name}
                onClick={() => {
                  setSelectedFluidIdx(idx);
                  setIsAutoFloating(false);
                }}
                className={`p-2 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                  selectedFluidIdx === idx
                    ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                }`}
              >
                <div>{f.name}</div>
                <div className="text-[10px] opacity-80">{f.density} kg/m³</div>
              </button>
            ))}
          </div>
        </div>

        {/* Object Volume Slider */}
        <div className="space-y-4 pt-1">
          <div>
            <div className="flex justify-between text-xs text-slate-700 mb-1">
              <span className="font-semibold">Object Volume (V)</span>
              <span className="font-mono text-blue-700 font-bold">{objectVolumeCm3} cm³</span>
            </div>
            <input
              type="range"
              min="20"
              max="250"
              step="10"
              value={objectVolumeCm3}
              onChange={(e) => setObjectVolumeCm3(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-700 mb-1">
              <span className="font-semibold">Submerged Depth Fraction</span>
              <span className="font-mono text-emerald-700 font-bold">
                {actualSubmergedPercent.toFixed(0)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={actualSubmergedPercent}
              onChange={(e) => {
                setSubmergedPercent(Number(e.target.value));
                setIsAutoFloating(false);
              }}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Auto Floating Equilibrium Button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs">
            <span className="font-bold text-slate-900 block">Flotation Equilibrium</span>
            <span className="text-slate-500 text-[11px]">
              {willFloatNaturally
                ? `Floats at ${floatSubmergedPercent.toFixed(0)}% submerged`
                : "Denser than fluid → Sinks to bottom"}
            </span>
          </div>

          <button
            onClick={() => setIsAutoFloating(!isAutoFloating)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isAutoFloating
                ? "bg-amber-100 text-amber-900 border-amber-300"
                : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
            }`}
          >
            {isAutoFloating ? "Manual Drag Mode" : "Release & Float"}
          </button>
        </div>

        {/* Live Calculation Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
            <span className="text-[11px] font-semibold text-blue-900 block">
              Displaced Fluid (ΔV)
            </span>
            <span className="text-base font-bold font-mono text-blue-950">
              {displacedVolumeCm3.toFixed(1)} <span className="text-xs font-normal text-slate-600">cm³</span>
            </span>
            <span className="text-[10px] text-blue-700 block mt-0.5">
              Cylinder: {finalCylinderVolumeCm3.toFixed(1)} cm³
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[11px] font-semibold text-emerald-900 block">
              Buoyant Upthrust (Fb)
            </span>
            <span className="text-base font-bold font-mono text-emerald-950">
              {upthrustN.toFixed(3)} <span className="text-xs font-normal text-slate-600">N</span>
            </span>
            <span className="text-[10px] text-emerald-700 block mt-0.5">
              Fb = ρ_fluid · V · g
            </span>
          </div>
        </div>
      </div>

      {/* Visual Apparatus Column */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Scale className="w-4 h-4 text-blue-600" />
            <span>Measuring Cylinder & Newton-Meter Spring Balance</span>
          </h3>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200">
              Weight in Air: {weightInAirN.toFixed(2)} N ({objectMassGrams.toFixed(1)}g)
            </span>
          </div>
        </div>

        {/* SVG Lab Diagram */}
        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex justify-center items-center overflow-x-auto">
          <svg width="420" height="320" className="overflow-visible select-none">
            {/* Lab Bench */}
            <rect x="20" y="300" width="380" height="15" rx="3" fill="#cbd5e1" />

            {/* Stand Base & Rod */}
            <rect x="40" y="290" width="80" height="10" rx="2" fill="#64748b" />
            <rect x="50" y="20" width="8" height="270" rx="2" fill="#94a3b8" />
            <rect x="50" y="25" width="130" height="8" rx="2" fill="#64748b" />

            {/* Spring Balance (Newton Meter) */}
            <g transform="translate(170, 30)">
              {/* Casing */}
              <rect x="-12" y="0" width="24" height="85" rx="4" fill="#f8fafc" stroke="#475569" strokeWidth="1.5" />
              {/* Glass scale markings */}
              {[0, 1, 2, 3, 4, 5].map((val, idx) => (
                <line key={idx} x1="-6" y1={15 + idx * 12} x2="6" y2={15 + idx * 12} stroke="#94a3b8" strokeWidth="1" />
              ))}
              {/* Pointer */}
              <circle cx="0" cy={15 + Math.min(60, apparentWeightN * 18)} r="3" fill="#dc2626" />
              <text x="16" y={19 + Math.min(60, apparentWeightN * 18)} fontSize="10" fill="#dc2626" fontWeight="bold" fontFamily="monospace">
                {apparentWeightN.toFixed(2)} N
              </text>
              {/* Hook String */}
              <line x1="0" y1="85" x2="0" y2="130" stroke="#475569" strokeWidth="1.5" />
            </g>

            {/* Measuring Cylinder */}
            <g transform="translate(230, 90)">
              {/* Glass Cylinder Body */}
              <rect x="0" y="0" width="100" height="210" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" opacity="0.9" />

              {/* Fluid Fill */}
              {/* Initial height = 110px, + displacement */}
              <rect
                x="3"
                y={208 - (100 + displacedVolumeCm3 * 0.4)}
                width="94"
                height={100 + displacedVolumeCm3 * 0.4}
                rx="3"
                fill={fluid.transparency}
              />

              {/* Cylinder Graduations */}
              {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((vol, idx) => (
                <g key={idx}>
                  <line x1="3" y1={208 - idx * 24} x2="16" y2={208 - idx * 24} stroke="#475569" strokeWidth="1" />
                  {idx % 2 === 0 && (
                    <text x="20" y={212 - idx * 24} fontSize="8" fill="#475569" fontFamily="monospace">
                      {vol}
                    </text>
                  )}
                </g>
              ))}

              {/* Meniscus Line */}
              <line
                x1="3"
                y1={208 - (100 + displacedVolumeCm3 * 0.4)}
                x2="97"
                y2={208 - (100 + displacedVolumeCm3 * 0.4)}
                stroke={fluid.color}
                strokeWidth="2"
              />
              <text
                x="105"
                y={212 - (100 + displacedVolumeCm3 * 0.4)}
                fontSize="9"
                fill="#0369a1"
                fontWeight="bold"
                fontFamily="monospace"
              >
                {finalCylinderVolumeCm3.toFixed(0)} cm³
              </text>
            </g>

            {/* Submerged Object */}
            {/* Height of block proportional to volume */}
            <g
              transform={`translate(${280 - Math.min(30, objectVolumeCm3 * 0.15)}, ${
                160 + (1 - submergedFraction) * 40
              })`}
            >
              <rect
                x="0"
                y="0"
                width={Math.min(60, objectVolumeCm3 * 0.3)}
                height={Math.min(50, objectVolumeCm3 * 0.25)}
                rx="4"
                fill={material.color}
                stroke="#1e293b"
                strokeWidth="1.5"
              />
              <text
                x={Math.min(60, objectVolumeCm3 * 0.3) / 2}
                y={Math.min(50, objectVolumeCm3 * 0.25) / 2 + 3}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="8"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {material.name}
              </text>
            </g>
          </svg>
        </div>

        {/* Paper 6 Lab Summary */}
        <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-slate-700 space-y-1">
          <strong className="block text-blue-950 font-bold">Cambridge Paper 6 Alternative to Practical Takeaways:</strong>
          <ul className="list-disc list-inside space-y-0.5 leading-relaxed text-slate-700">
            <li>
              <strong>Volume by Displacement:</strong> V_solid = V₂ - V₁ = {finalCylinderVolumeCm3.toFixed(0)} - {initialWaterVolumeCm3} = {displacedVolumeCm3.toFixed(0)} cm³.
            </li>
            <li>
              <strong>Archimedes' Principle:</strong> Upthrust equals the weight of fluid displaced: F_upthrust = ρ_fluid · V_disp · g = {upthrustN.toFixed(2)} N.
            </li>
            <li>
              <strong>Apparent Weight:</strong> Reading on the newton meter decreases by exactly the upthrust: W_apparent = W - F_upthrust = {apparentWeightN.toFixed(2)} N.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
