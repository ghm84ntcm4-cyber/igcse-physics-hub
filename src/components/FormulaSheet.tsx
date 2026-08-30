import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IGCSE_FORMULAS } from "../data/formulaData";
import { Formula } from "../types";
import { Calculator, Search, Check, Sparkles, HelpCircle, Printer, GraduationCap } from "lucide-react";

export const FormulaSheet: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  const categoryMap: Record<string, string> = {
    "mechanics": "unit-1",
    "motion": "unit-1",
    "forces": "unit-1",
    "energy": "unit-1",
    "thermal": "unit-2",
    "heat": "unit-2",
    "waves": "unit-3",
    "optics": "unit-3",
    "light": "unit-3",
    "sound": "unit-3",
    "electricity": "unit-4",
    "circuits": "unit-4",
    "magnetism": "unit-4",
    "nuclear": "unit-5",
    "space": "unit-6",
    "unit-1": "unit-1",
    "unit-2": "unit-2",
    "unit-3": "unit-3",
    "unit-4": "unit-4",
    "unit-5": "unit-5",
    "unit-6": "unit-6",
  };

  const initialTopic = category ? (categoryMap[category.toLowerCase()] || "all") : "all";

  const [search, setSearch] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopic);
  const [activeFormula, setActiveFormula] = useState<Formula | null>(IGCSE_FORMULAS[0]);
  const [calcInputs, setCalcInputs] = useState<Record<string, string>>({});
  const [calcResult, setCalcResult] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      const mapped = categoryMap[category.toLowerCase()] || "all";
      setSelectedTopic(mapped);
    }
  }, [category]);

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    if (topic === "all") {
      navigate("/formulas");
    } else {
      navigate(`/formulas/${topic}`);
    }
  };

  const filteredFormulas = IGCSE_FORMULAS.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.equation.toLowerCase().includes(search.toLowerCase()) ||
      f.variables.some((v) => v.name.toLowerCase().includes(search.toLowerCase()));
    const matchesTopic = selectedTopic === "all" || f.topicId === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  const handleSelectFormula = (f: Formula) => {
    setActiveFormula(f);
    setCalcInputs({});
    setCalcResult(null);
  };

  const handleInputChange = (symbol: string, value: string) => {
    setCalcInputs((prev) => ({ ...prev, [symbol]: value }));
  };

  const handleSolve = () => {
    if (!activeFormula) return;

    // Quick solver logic based on standard formulas
    const vals: Record<string, number> = {};
    for (const [k, v] of Object.entries(calcInputs)) {
      const num = parseFloat(String(v));
      if (!isNaN(num)) vals[k] = num;
    }

    if (activeFormula.id === "speed") {
      if (vals.s !== undefined && vals.t !== undefined && vals.t > 0) {
        setCalcResult(`Speed v = ${vals.s} / ${vals.t} = ${(vals.s / vals.t).toFixed(3)} m/s`);
      } else if (vals.v !== undefined && vals.t !== undefined) {
        setCalcResult(`Distance s = ${vals.v} × ${vals.t} = ${(vals.v * vals.t).toFixed(3)} m`);
      } else if (vals.s !== undefined && vals.v !== undefined && vals.v > 0) {
        setCalcResult(`Time t = ${vals.s} / ${vals.v} = ${(vals.s / vals.v).toFixed(3)} s`);
      } else {
        setCalcResult("Please fill in any 2 values to calculate the 3rd.");
      }
    } else if (activeFormula.id === "acceleration") {
      if (vals.v !== undefined && vals.u !== undefined && vals.t !== undefined && vals.t > 0) {
        setCalcResult(`Acceleration a = (${vals.v} - ${vals.u}) / ${vals.t} = ${((vals.v - vals.u) / vals.t).toFixed(3)} m/s²`);
      } else {
        setCalcResult("Please enter Initial Velocity (u), Final Velocity (v), and Time (t).");
      }
    } else if (activeFormula.id === "newton2") {
      if (vals.m !== undefined && vals.a !== undefined) {
        setCalcResult(`Resultant Force F = ${vals.m} × ${vals.a} = ${(vals.m * vals.a).toFixed(3)} N`);
      } else if (vals.F !== undefined && vals.m !== undefined && vals.m > 0) {
        setCalcResult(`Acceleration a = ${vals.F} / ${vals.m} = ${(vals.F / vals.m).toFixed(3)} m/s²`);
      } else if (vals.F !== undefined && vals.a !== undefined && vals.a > 0) {
        setCalcResult(`Mass m = ${vals.F} / ${vals.a} = ${(vals.F / vals.a).toFixed(3)} kg`);
      } else {
        setCalcResult("Please fill in any 2 values to calculate the 3rd.");
      }
    } else if (activeFormula.id === "weight") {
      if (vals.m !== undefined) {
        const g = vals.g || 9.8;
        setCalcResult(`Weight W = ${vals.m} × ${g} = ${(vals.m * g).toFixed(3)} N`);
      } else if (vals.W !== undefined) {
        const g = vals.g || 9.8;
        setCalcResult(`Mass m = ${vals.W} / ${g} = ${(vals.W / g).toFixed(3)} kg`);
      }
    } else if (activeFormula.id === "density") {
      if (vals.m !== undefined && vals.V !== undefined && vals.V > 0) {
        setCalcResult(`Density ρ = ${vals.m} / ${vals.V} = ${(vals.m / vals.V).toFixed(3)} kg/m³ (or g/cm³)`);
      } else if (vals.ρ !== undefined && vals.V !== undefined) {
        setCalcResult(`Mass m = ${vals.ρ} × ${vals.V} = ${(vals.ρ * vals.V).toFixed(3)} kg`);
      } else if (vals.m !== undefined && vals.ρ !== undefined && vals.ρ > 0) {
        setCalcResult(`Volume V = ${vals.m} / ${vals.ρ} = ${(vals.m / vals.ρ).toFixed(3)} m³`);
      }
    } else if (activeFormula.id === "ohms_law") {
      if (vals.I !== undefined && vals.R !== undefined) {
        setCalcResult(`Voltage V = ${vals.I} × ${vals.R} = ${(vals.I * vals.R).toFixed(3)} V`);
      } else if (vals.V !== undefined && vals.R !== undefined && vals.R > 0) {
        setCalcResult(`Current I = ${vals.V} / ${vals.R} = ${(vals.V / vals.R).toFixed(3)} A`);
      } else if (vals.V !== undefined && vals.I !== undefined && vals.I > 0) {
        setCalcResult(`Resistance R = ${vals.V} / ${vals.I} = ${(vals.V / vals.I).toFixed(3)} Ω`);
      }
    } else if (activeFormula.id === "wave_speed") {
      if (vals.f !== undefined && vals.λ !== undefined) {
        setCalcResult(`Wave Speed v = ${vals.f} × ${vals.λ} = ${(vals.f * vals.λ).toFixed(3)} m/s`);
      } else if (vals.v !== undefined && vals.f !== undefined && vals.f > 0) {
        setCalcResult(`Wavelength λ = ${vals.v} / ${vals.f} = ${(vals.v / vals.f).toFixed(4)} m`);
      } else if (vals.v !== undefined && vals.λ !== undefined && vals.λ > 0) {
        setCalcResult(`Frequency f = ${vals.v} / ${vals.λ} = ${(vals.v / vals.λ).toFixed(3)} Hz`);
      }
    } else if (activeFormula.id === "shc") {
      if (vals.m !== undefined && vals.c !== undefined && vals.ΔT !== undefined) {
        setCalcResult(`Thermal Energy Q = ${vals.m} × ${vals.c} × ${vals.ΔT} = ${(vals.m * vals.c * vals.ΔT).toFixed(2)} J`);
      } else {
        setCalcResult("Enter Mass (m), Specific Heat Capacity (c), and Temp Change (ΔT).");
      }
    } else {
      setCalcResult("Calculation formula evaluated. Fill values in SI units.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Educator Print Header */}
      <div className="print-header-banner p-3 rounded-lg bg-slate-100 border border-slate-300 mb-4 hidden print:block">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-extrabold text-xs text-slate-900">Mr. Ahmed Badr - IGCSE Physics Educator</span>
            <span className="text-[10px] text-slate-600 ml-2">Official Formula Sheet & Unit Definitions</span>
          </div>
          <div className="text-[10px] text-slate-700 font-mono">
            WhatsApp: +966 53 067 5155 (KSA) | +20 109 968 3837 (EG)
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center gap-1 border border-emerald-200">
                <GraduationCap className="w-3.5 h-3.5" />
                Curated by Ahmed Badr
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                <Calculator className="w-5 h-5" />
              </span>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Ahmed Badr's Formula Sheet & Solver
              </h1>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Every official Cambridge & Edexcel formula, formula triangles, standard SI units, and interactive calculation tools.
            </p>
          </div>

          {/* Actions & Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm shrink-0 no-print"
              title="Print formula sheet or export as PDF"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print / PDF Export</span>
            </button>

            <div className="relative no-print">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter formulas..."
                className="bg-slate-50 text-slate-900 text-xs rounded-xl pl-9 pr-3 py-2 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
              />
            </div>

            <select
              value={selectedTopic}
              onChange={(e) => handleTopicChange(e.target.value)}
              className="bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium no-print"
            >
              <option value="all">All Units</option>
              <option value="unit-1">Unit 1: Motion, Forces & Energy</option>
              <option value="unit-2">Unit 2: Thermal Physics</option>
              <option value="unit-3">Unit 3: Waves & Optics</option>
              <option value="unit-4">Unit 4: Electricity & Magnetism</option>
              <option value="unit-6">Unit 6: Space Physics</option>
            </select>
          </div>
        </div>
      </div>

      {/* SI Unit Prefix Cheat Sheet */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2.5">
          Standard SI Unit Prefixes & Conversions (Exam Must-Knows):
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">Giga (G)</span>
            <span className="block text-slate-500 font-mono text-[11px]">10⁹ (× 1,000,000,000)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">Mega (M)</span>
            <span className="block text-slate-500 font-mono text-[11px]">10⁶ (× 1,000,000)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">Kilo (k)</span>
            <span className="block text-slate-500 font-mono text-[11px]">10³ (× 1,000)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">Milli (m)</span>
            <span className="block text-slate-500 font-mono text-[11px]">10⁻³ (÷ 1,000)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">Micro (μ)</span>
            <span className="block text-slate-500 font-mono text-[11px]">10⁻⁶ (÷ 1,000,000)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900">Nano (n)</span>
            <span className="block text-slate-500 font-mono text-[11px]">10⁻⁹ (÷ 10⁹)</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Formula List on left, Interactive Triangle & Calculator on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Formulas List */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-medium">
            <span>Showing {filteredFormulas.length} formulas</span>
            <span>Click any formula to calculate</span>
          </div>

          <div className="space-y-3 max-h-[700px] overflow-y-auto pr-1 no-scrollbar">
            {filteredFormulas.map((f) => {
              const isSelected = activeFormula?.id === f.id;
              return (
                <div
                  key={f.id}
                  onClick={() => handleSelectFormula(f)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-50/70 border-blue-300 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{f.name}</h3>
                      <div className="font-mono text-base font-bold text-blue-700 my-1 tracking-wide">
                        {f.equation}
                      </div>
                    </div>
                    {f.triangle && (
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                        ▲ Triangle
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-2">
                    {f.variables.map((v) => (
                      <span key={v.symbol} className="inline-flex items-center gap-1">
                        <strong className="font-mono text-slate-900">{v.symbol}</strong> = {v.name} ({v.unit})
                      </span>
                    ))}
                  </div>

                  {f.notes && (
                    <p className="text-[11px] text-amber-900 mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200 font-medium">
                      💡 {f.notes}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Formula Triangle & Interactive Calculator */}
        <div className="lg:col-span-5 space-y-6">
          {activeFormula ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24 space-y-5 shadow-xs">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  Interactive Formula Tool
                </span>
                <h2 className="text-lg font-bold text-slate-900">{activeFormula.name}</h2>
                <div className="font-mono text-base text-blue-700 font-bold mt-1">
                  {activeFormula.equation}
                </div>
              </div>

              {/* Visual Formula Triangle */}
              {activeFormula.triangle && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center">
                  <span className="text-xs text-slate-600 mb-2 font-medium">
                    Formula Triangle (Cover variable to solve)
                  </span>
                  <div className="relative w-40 h-36 flex flex-col items-center justify-center">
                    {/* SVG Triangle */}
                    <svg viewBox="0 0 100 85" className="w-full h-full">
                      <polygon points="50,5 95,80 5,80" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                      {/* Horizontal dividing line */}
                      <line x1="25" y1="48" x2="75" y2="48" stroke="#2563eb" strokeWidth="2" />
                      {/* Vertical dividing line */}
                      <line x1="50" y1="48" x2="50" y2="80" stroke="#2563eb" strokeWidth="2" />

                      {/* Top variable */}
                      <text x="50" y="36" textAnchor="middle" fill="#1d4ed8" fontSize="14" fontWeight="bold" fontFamily="monospace">
                        {activeFormula.triangle[0]}
                      </text>
                      {/* Bottom-left variable */}
                      <text x="32" y="68" textAnchor="middle" fill="#047857" fontSize="14" fontWeight="bold" fontFamily="monospace">
                        {activeFormula.triangle[1]}
                      </text>
                      {/* Multiplication symbol */}
                      <text x="50" y="68" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="bold">
                        ×
                      </text>
                      {/* Bottom-right variable */}
                      <text x="68" y="68" textAnchor="middle" fill="#b45309" fontSize="14" fontWeight="bold" fontFamily="monospace">
                        {activeFormula.triangle[2]}
                      </text>
                    </svg>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 text-center font-mono">
                    {activeFormula.triangle[0]} = {activeFormula.triangle[1]} × {activeFormula.triangle[2]} |{" "}
                    {activeFormula.triangle[1]} = {activeFormula.triangle[0]} / {activeFormula.triangle[2]}
                  </p>
                </div>
              )}

              {/* Instant Numerical Calculator */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-700 block">
                  Calculate Values (Leave 1 variable blank):
                </span>

                {activeFormula.variables.map((v) => (
                  <div key={v.symbol} className="flex items-center gap-3">
                    <label className="w-28 text-xs text-slate-700 font-medium shrink-0">
                      {v.name} (<span className="font-mono font-bold text-blue-600">{v.symbol}</span>):
                    </label>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        step="any"
                        placeholder={`Enter ${v.symbol} in ${v.unit}`}
                        value={calcInputs[v.symbol] || ""}
                        onChange={(e) => handleInputChange(v.symbol, e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-lg px-3 py-2 font-mono focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>
                ))}

                <button
                  onClick={handleSolve}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition-all mt-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Solve Variable</span>
                </button>

                {calcResult && (
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs space-y-1">
                    <span className="text-blue-900 font-bold block">Calculation Result:</span>
                    <p className="text-blue-800 font-mono font-bold text-sm">{calcResult}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-sm">
              Select a formula from the list to view its triangle and calculator.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
