import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Waves, Sparkles, Activity, Layers } from "lucide-react";

type WaveMode = "plane" | "diffraction" | "interference" | "refraction";

export const RippleTankSimulator: React.FC = () => {
  const [waveMode, setWaveMode] = useState<WaveMode>("diffraction");
  const [frequencyHz, setFrequencyHz] = useState<number>(3.0); // Hz
  const [waveSpeedCmS, setWaveSpeedCmS] = useState<number>(18.0); // cm/s
  const [slitWidthCm, setSlitWidthCm] = useState<number>(6.0); // cm
  const [strobeFrozen, setStrobeFrozen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Wavelength lambda = v / f
  const wavelengthCm = waveSpeedCmS / frequencyHz;

  // Diffraction ratio (slit width / wavelength)
  const diffractionRatio = slitWidthCm / wavelengthCm;
  const isHighDiffraction = diffractionRatio <= 1.5;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const phaseRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (isPlaying && !strobeFrozen) {
        phaseRef.current += dt * frequencyHz * 2 * Math.PI;
      }

      const w = canvas.width;
      const h = canvas.height;
      const phase = phaseRef.current;

      // Background tank water color
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, w, h);

      // Pixel scale: 10 pixels = 1 cm
      const pxPerCm = 10;
      const lambdaPx = wavelengthCm * pxPerCm;
      const k = (2 * Math.PI) / lambdaPx; // wave number

      if (waveMode === "plane") {
        // Continuous plane wave moving down
        for (let y = 0; y < h; y += 2) {
          const val = Math.sin(k * y - phase);
          const intensity = Math.floor((val + 1) * 80);
          ctx.fillStyle = `rgb(14, ${110 + intensity}, ${180 + intensity})`;
          ctx.fillRect(0, y, w, 2);
        }
      } else if (waveMode === "diffraction") {
        const barrierY = 130;
        const slitWidthPx = slitWidthCm * pxPerCm;
        const slitLeft = w / 2 - slitWidthPx / 2;
        const slitRight = w / 2 + slitWidthPx / 2;

        // Incident plane waves before barrier
        for (let y = 0; y < barrierY; y += 2) {
          const val = Math.sin(k * y - phase);
          const intensity = Math.floor((val + 1) * 75);
          ctx.fillStyle = `rgb(14, ${100 + intensity}, ${170 + intensity})`;
          ctx.fillRect(0, y, w, 2);
        }

        // Diffracted waves after barrier
        for (let y = barrierY; y < h; y += 3) {
          for (let x = 0; x < w; x += 3) {
            let amp = 0;
            // Integrate Huygens secondary wavelets across the slit
            const numWavelets = 7;
            for (let s = 0; s < numWavelets; s++) {
              const sx = slitLeft + (s / (numWavelets - 1)) * slitWidthPx;
              const dist = Math.hypot(x - sx, y - barrierY);
              amp += Math.sin(k * dist - phase) / Math.max(1, Math.sqrt(dist / 15));
            }
            amp /= numWavelets;

            const clamped = Math.max(-1, Math.min(1, amp));
            const intensity = Math.floor((clamped + 1) * 85);
            ctx.fillStyle = `rgb(14, ${90 + intensity}, ${160 + intensity})`;
            ctx.fillRect(x, y, 3, 3);
          }
        }

        // Draw Barriers
        ctx.fillStyle = "#334155";
        ctx.fillRect(0, barrierY - 6, slitLeft, 12);
        ctx.fillRect(slitRight, barrierY - 6, w - slitRight, 12);

        // Slit label
        ctx.fillStyle = "#f8fafc";
        ctx.font = "10px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(`Slit Width = ${slitWidthCm.toFixed(1)} cm`, w / 2, barrierY + 22);
      } else if (waveMode === "interference") {
        // Two dipper sources S1 and S2
        const s1x = w / 2 - 50;
        const s2x = w / 2 + 50;
        const sy = 60;

        for (let y = 0; y < h; y += 3) {
          for (let x = 0; x < w; x += 3) {
            const r1 = Math.hypot(x - s1x, y - sy);
            const r2 = Math.hypot(x - s2x, y - sy);
            const w1 = Math.sin(k * r1 - phase) / Math.max(1, Math.sqrt(r1 / 20));
            const w2 = Math.sin(k * r2 - phase) / Math.max(1, Math.sqrt(r2 / 20));
            const total = (w1 + w2) / 2;

            const intensity = Math.floor((Math.max(-1, Math.min(1, total)) + 1) * 85);
            ctx.fillStyle = `rgb(14, ${90 + intensity}, ${170 + intensity})`;
            ctx.fillRect(x, y, 3, 3);
          }
        }

        // Draw Dippers
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(s1x, sy, 5, 0, Math.PI * 2);
        ctx.arc(s2x, sy, 5, 0, Math.PI * 2);
        ctx.fill();
      } else if (waveMode === "refraction") {
        // Refraction: Deep water (top) to Shallow water (bottom)
        const boundaryY = 150;
        const shallowSpeedRatio = 0.55; // slower in shallow water
        const kShallow = k / shallowSpeedRatio;

        for (let y = 0; y < boundaryY; y += 2) {
          const val = Math.sin(k * y - phase);
          const intensity = Math.floor((val + 1) * 80);
          ctx.fillStyle = `rgb(14, ${110 + intensity}, ${190 + intensity})`;
          ctx.fillRect(0, y, w, 2);
        }

        for (let y = boundaryY; y < h; y += 2) {
          const val = Math.sin(k * boundaryY + kShallow * (y - boundaryY) - phase);
          const intensity = Math.floor((val + 1) * 65);
          ctx.fillStyle = `rgb(30, ${80 + intensity}, ${140 + intensity})`;
          ctx.fillRect(0, y, w, 2);
        }

        // Boundary Glass Submerged Plate line
        ctx.strokeStyle = "#38bdf8";
        ctx.setLineDash([6, 4]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, boundaryY);
        ctx.lineTo(w, boundaryY);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 11px sans-serif";
        ctx.fillText("Deep Water (Fast, Long λ)", 15, 40);
        ctx.fillText("Shallow Water Glass Block (Slow, Short λ)", 15, boundaryY + 40);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [waveMode, frequencyHz, waveSpeedCmS, slitWidthCm, isPlaying, strobeFrozen, wavelengthCm]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Controls Column */}
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
              <Waves className="w-4 h-4" />
            </span>
            <h2 className="text-base font-bold text-slate-900">
              Ripple Tank & Wave Phenomena Lab
            </h2>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Observe wave equation ($v = f \cdot \lambda$), single-slit diffraction, two-source interference, and refraction.
          </p>
        </div>

        {/* Experiment Mode Selector */}
        <div>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
            Wave Experiment Mode:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setWaveMode("diffraction")}
              className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                waveMode === "diffraction"
                  ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
              }`}
            >
              🌊 Single-Slit Diffraction
            </button>
            <button
              onClick={() => setWaveMode("interference")}
              className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                waveMode === "interference"
                  ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
              }`}
            >
              ✨ Two-Point Interference
            </button>
            <button
              onClick={() => setWaveMode("refraction")}
              className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                waveMode === "refraction"
                  ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
              }`}
            >
              🔍 Deep → Shallow Refraction
            </button>
            <button
              onClick={() => setWaveMode("plane")}
              className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                waveMode === "plane"
                  ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
              }`}
            >
              📏 Continuous Plane Waves
            </button>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-4 pt-1">
          <div>
            <div className="flex justify-between text-xs text-slate-700 mb-1">
              <span className="font-semibold">Vibrator Frequency (f)</span>
              <span className="font-mono text-blue-700 font-bold">{frequencyHz.toFixed(1)} Hz</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="8.0"
              step="0.5"
              value={frequencyHz}
              onChange={(e) => setFrequencyHz(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-700 mb-1">
              <span className="font-semibold">Wave Speed in Deep Water (v)</span>
              <span className="font-mono text-emerald-700 font-bold">{waveSpeedCmS.toFixed(1)} cm/s</span>
            </div>
            <input
              type="range"
              min="10.0"
              max="30.0"
              step="2.0"
              value={waveSpeedCmS}
              onChange={(e) => setWaveSpeedCmS(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {waveMode === "diffraction" && (
            <div>
              <div className="flex justify-between text-xs text-slate-700 mb-1">
                <span className="font-semibold">Slit Gap Width (w)</span>
                <span className="font-mono text-amber-700 font-bold">{slitWidthCm.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="15.0"
                step="0.5"
                value={slitWidthCm}
                onChange={(e) => setSlitWidthCm(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Narrow (High Spreading)</span>
                <span>Wide (Straight Beams)</span>
              </div>
            </div>
          )}
        </div>

        {/* Strobe & Play Controls */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? "Pause Tank" : "Resume Waves"}</span>
          </button>

          <button
            onClick={() => setStrobeFrozen(!strobeFrozen)}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
              strobeFrozen
                ? "bg-amber-100 text-amber-900 border-amber-300"
                : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{strobeFrozen ? "Strobe: Frozen" : "Strobe View"}</span>
          </button>
        </div>

        {/* Live Calculation Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
            <span className="text-[11px] font-semibold text-blue-900 block">
              Wavelength (λ = v / f)
            </span>
            <span className="text-lg font-bold font-mono text-blue-950">
              {wavelengthCm.toFixed(2)} <span className="text-xs font-normal text-slate-600">cm</span>
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[11px] font-semibold text-emerald-900 block">
              Diffraction Condition
            </span>
            <span className="text-sm font-bold font-mono text-emerald-950">
              {waveMode === "diffraction"
                ? isHighDiffraction
                  ? "Semicircular (w ≈ λ)"
                  : "Minimal Bending (w > λ)"
                : "Continuous"}
            </span>
          </div>
        </div>
      </div>

      {/* Ripple Tank Canvas Column */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-2">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Waves className="w-4 h-4 text-blue-600" />
            <span>Ripple Tank Overhead Stroboscopic View</span>
          </h3>
          <span className="text-xs font-mono text-slate-500 font-semibold">
            λ = {wavelengthCm.toFixed(1)} cm • f = {frequencyHz.toFixed(1)} Hz
          </span>
        </div>

        {/* Canvas container */}
        <div className="w-full flex justify-center bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 p-2">
          <canvas
            ref={canvasRef}
            width={440}
            height={320}
            className="w-full max-w-[440px] h-[320px] rounded-xl cursor-crosshair"
          />
        </div>

        {/* Examiner Insight */}
        <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-slate-700 space-y-1">
          <strong className="block text-blue-950 font-bold">Examiner Mark Scheme Core Facts:</strong>
          <ul className="list-disc list-inside space-y-0.5 leading-relaxed text-slate-700">
            <li>
              <strong>Diffraction Rule:</strong> Maximum spreading occurs when the gap width is approximately equal to the wavelength ($w \approx \lambda$).
            </li>
            <li>
              <strong>Refraction Rule:</strong> When waves enter shallow water, wave speed $v$ decreases, wavelength $\lambda$ decreases, but frequency $f$ remains constant.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
