export interface ExamPitfallItem {
  id: string;
  unitId: string;
  unitName: string;
  topicTitle: string;
  mistake: string;
  correction: string;
  examinerNote?: string;
  codeSnippet?: string;
}

export const EXAM_PITFALLS: ExamPitfallItem[] = [
  {
    id: "pitfall-1",
    unitId: "unit-1",
    unitName: "Unit 1: Motion, Forces & Energy",
    topicTitle: "Mass Units in Force and Energy Equations",
    mistake: "Forgetting to convert mass from grams (g) to kilograms (kg) before using F = ma or Ek = ½mv² or ΔEp = mgΔh.",
    correction: "Always divide grams by 1000 to obtain mass in SI units (kg) before calculating energy, forces, or momentum.",
    examinerNote: "Cambridge examiners report this as the single most common deduction in 3-mark and 4-mark calculation questions.",
  },
  {
    id: "pitfall-2",
    unitId: "unit-1",
    unitName: "Unit 1: Motion, Forces & Energy",
    topicTitle: "Speed-Time Graphs vs Distance-Time Graphs",
    mistake: "Calculating distance from a speed-time graph by simply multiplying speed at that instant by time, or confusing gradient with area.",
    correction: "On a speed-time graph: Gradient = Acceleration (Δv/Δt), and Area under the line = Total Distance travelled (split into triangles & rectangles). On a distance-time graph: Gradient = Speed.",
    examinerNote: "For non-linear speed-time graphs, estimate distance by counting grid squares or drawing a bounding trapezoid.",
  },
  {
    id: "pitfall-3",
    unitId: "unit-1",
    unitName: "Unit 1: Motion, Forces & Energy",
    topicTitle: "Weight vs Mass Confusion",
    mistake: "Treating weight and mass as identical concepts, or writing mass in Newtons and weight in kilograms.",
    correction: "Mass is the quantity of matter in an object (scalar, measured in kg, constant anywhere). Weight is the gravitational force acting on an object (vector, W = mg, measured in N, varies with gravitational field strength).",
    examinerNote: "Never say 'gravity makes the mass heavier'. State 'the gravitational field strength increases the weight'.",
  },
  {
    id: "pitfall-4",
    unitId: "unit-2",
    unitName: "Unit 2: Thermal Physics",
    topicTitle: "Evaporation vs Boiling",
    mistake: "Stating that evaporation and boiling are the same process, or that evaporation occurs at 100°C.",
    correction: "Evaporation occurs at ANY temperature, ONLY at the liquid surface, causes cooling (most energetic particles escape), with NO bubbles. Boiling occurs at a FIXED boiling point throughout the ENTIRE liquid with bubbling, at constant temperature.",
    examinerNote: "Examiners penalize answers that claim bubbles form during evaporation.",
  },
  {
    id: "pitfall-5",
    unitId: "unit-2",
    unitName: "Unit 2: Thermal Physics",
    topicTitle: "Thermal Conduction in Metals vs Non-Metals",
    mistake: "Explaining conduction in metals by only mentioning atomic/lattice vibrations, ignoring free electrons.",
    correction: "In metals, thermal conduction is primarily driven by fast-moving delocalized (free) electrons colliding with distant lattice ions. Atomic vibration alone explains conduction in non-metals (insulators), which is much slower.",
    examinerNote: "To gain full marks for metal conduction: Must mention 'free/delocalized electrons' transferring kinetic energy rapidly throughout the structure.",
  },
  {
    id: "pitfall-6",
    unitId: "unit-3",
    unitName: "Unit 3: Waves & Optics",
    topicTitle: "Angle of Incidence & Refraction Measurement",
    mistake: "Measuring angles of incidence (i), reflection (r), and refraction (r) relative to the boundary surface instead of the normal.",
    correction: "Always construct a 90° normal dashed line at the point of contact. Angles i and r are strictly measured between the ray and the NORMAL, never between the ray and the glass/mirror surface.",
    examinerNote: "In Paper 6 and Paper 4 ray diagrams, if angle is measured from the block surface, 0 marks are awarded.",
  },
  {
    id: "pitfall-7",
    unitId: "unit-3",
    unitName: "Unit 3: Waves & Optics",
    topicTitle: "Electromagnetic Spectrum Frequencies vs Wavelengths",
    mistake: "Assuming Gamma rays have the longest wavelength or that Radio waves travel faster than Light in a vacuum.",
    correction: "ALL electromagnetic waves travel at the EXACT same speed in vacuum (c = 3.0 × 10⁸ m/s). Radio waves have the LONGEST wavelength and LOWEST frequency. Gamma rays have the SHORTEST wavelength and HIGHEST frequency & photon energy.",
    examinerNote: "Remember the order: Radio -> Micro -> Infrared -> Visible -> Ultraviolet -> X-rays -> Gamma.",
  },
  {
    id: "pitfall-8",
    unitId: "unit-4",
    unitName: "Unit 4: Electricity & Magnetism",
    topicTitle: "Current in Series vs Parallel Circuits",
    mistake: "Thinking current gets 'used up' by resistors in a series circuit, or that current is identical in parallel branches with unequal resistors.",
    correction: "Current is CONSERVED. In a series circuit, current is identical at ALL points (I₁ = I₂ = I₃). In a parallel circuit, total current splits across branches inversely proportional to branch resistance (I_total = I₁ + I₂).",
    examinerNote: "Charges are not consumed; energy is transferred from electric potential to thermal/light energy.",
  },
  {
    id: "pitfall-9",
    unitId: "unit-4",
    unitName: "Unit 4: Electricity & Magnetism",
    topicTitle: "Parallel Resistance Calculation Formula",
    mistake: "Adding parallel resistors directly (R = R₁ + R₂) or forgetting to invert the result when using 1/R = 1/R₁ + 1/R₂.",
    correction: "Total resistance of parallel resistors is ALWAYS LESS than the smallest individual resistor. For two resistors: R_total = (R₁ × R₂) / (R₁ + R₂). If using 1/R, remember to take the reciprocal at the final step.",
    examinerNote: "If your calculated parallel resistance is larger than any branch resistor, your math contains an error.",
  },
  {
    id: "pitfall-10",
    unitId: "unit-5",
    unitName: "Unit 5: Nuclear Physics",
    topicTitle: "Half-Life Calculation with Background Radiation",
    mistake: "Calculating half-life directly from raw detector counts without first subtracting background radiation count rate.",
    correction: "Always subtract background radiation count rate from the measured count rate FIRST: Corrected Count = Measured Count - Background. Then divide the corrected count by 2 for each half-life.",
    examinerNote: "Cambridge Paper 4 and Paper 2 questions frequently include background count as a 1-mark trap.",
  },
  {
    id: "pitfall-11",
    unitId: "unit-6",
    unitName: "Unit 6: Space Physics",
    topicTitle: "Orbital Speed vs Radius in Solar System",
    mistake: "Believing planets further from the Sun travel faster because they have longer orbits.",
    correction: "Planets further from the Sun experience weaker gravitational pull (F ∝ 1/r²), so they have SLOWER orbital speeds and take vastly longer orbital periods (T). Mercury orbits fastest (~47 km/s); Neptune orbits slowest (~5.4 km/s).",
    examinerNote: "Orbital speed v = 2πr / T. As r increases, v decreases due to weaker solar gravitational field.",
  },
  {
    id: "pitfall-12",
    unitId: "unit-paper6",
    unitName: "Paper 6: Alternative to Practical",
    topicTitle: "Line of Best Fit & Graph Plotting Traps",
    mistake: "Connecting plotted points dot-to-dot with a ruler or forcing the line of best fit to pass through the origin (0,0) when it shouldn't.",
    correction: "Draw a single continuous smooth line (or ruler straight line) with an equal balance of plotted points above and below the line. Circle and ignore any obvious anomalous points. Do NOT force through (0,0) unless physical theory demands it.",
    examinerNote: "Points must be plotted with clean small 'x' or dot with circle to within ±½ small square precision.",
  },
];
