import React, { useState } from "react";
import { IGCSE_PRACTICALS, PAPER_6_GOLDEN_RULES } from "../data/paper6Data";
import { PracticalExperiment } from "../types";
import {
  FlaskConical,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  ShieldAlert,
  HelpCircle,
  Sparkles,
  TrendingUp,
  Printer,
  GraduationCap,
} from "lucide-react";

export const Paper6Guide: React.FC = () => {
  const [selectedExperiment, setSelectedExperiment] = useState<PracticalExperiment>(IGCSE_PRACTICALS[0]);

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
            <span className="text-[10px] text-slate-600 ml-2">Paper 6 Practical Alternative Guide (0625 / 0972)</span>
          </div>
          <div className="text-[10px] text-slate-700 font-mono">
            WhatsApp: +966 53 067 5155 (KSA) | +20 109 968 3837 (EG)
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
            <FlaskConical className="w-6 h-6" />
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center gap-1 border border-emerald-200">
                <GraduationCap className="w-3.5 h-3.5" />
                Curated by Ahmed Badr
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Ahmed Badr's Paper 6 Practical Masterclass
            </h1>
            <p className="text-sm text-slate-600 mt-0.5">
              Guaranteed mark-scheme strategies for experiment design, sources of error, safety precautions, and graph plotting rules.
            </p>
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm shrink-0 no-print"
          title="Print Paper 6 guide or export as PDF"
        >
          <Printer className="w-4 h-4 text-cyan-400" />
          <span>Print / PDF Export</span>
        </button>
      </div>

      {/* Golden Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PAPER_6_GOLDEN_RULES.map((rule, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs"
          >
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{rule.title}</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {rule.rules.map((r, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Standard Practical Experiments Walkthrough */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        {/* Left selector */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 space-y-2 h-fit shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block px-2 pb-2 border-b border-slate-100">
            Core Required Experiments:
          </span>
          {IGCSE_PRACTICALS.map((exp) => {
            const isSelected = exp.id === selectedExperiment.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExperiment(exp)}
                className={`w-full p-3 rounded-xl text-left text-xs font-semibold flex flex-col gap-1 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white font-bold shadow-xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                <span>{exp.title}</span>
                <span className={`text-[10px] font-normal ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                  {exp.topic}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right detail view */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                {selectedExperiment.topic}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedExperiment.title}</h2>
            </div>

            {/* Apparatus */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Apparatus Checklist:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedExperiment.apparatus.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Method Steps */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Standard Experimental Method:
              </span>
              <div className="space-y-2">
                {selectedExperiment.method.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Variables */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <span className="text-blue-700 font-bold block">Independent Variable</span>
                <p className="text-slate-800 font-medium">{selectedExperiment.keyVariables.independent}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <span className="text-emerald-700 font-bold block">Dependent Variable</span>
                <p className="text-slate-800 font-medium">{selectedExperiment.keyVariables.dependent}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <span className="text-amber-700 font-bold block">Control Variables</span>
                <ul className="list-disc list-inside text-slate-700 space-y-0.5 font-medium">
                  {selectedExperiment.keyVariables.controlled.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Errors & Improvements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Sources of Experimental Error:
                </span>
                <ul className="space-y-1.5 text-xs text-rose-900 font-medium">
                  {selectedExperiment.sourcesOfError.map((err, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 shrink-0">•</span>
                      <span>{err}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Standard Improvements:
                </span>
                <ul className="space-y-1.5 text-xs text-emerald-900 font-medium">
                  {selectedExperiment.improvements.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 shrink-0">•</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Safety Precautions & Graph Guidance */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5 font-medium">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-1 text-amber-950">Safety Precautions:</span>
                  <ul className="list-disc list-inside space-y-0.5">
                    {selectedExperiment.safetyPrecautions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5 font-medium">
                <TrendingUp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5 text-blue-950">Graph Plotting & Gradient Guide:</span>
                  <p>{selectedExperiment.graphGuidance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
