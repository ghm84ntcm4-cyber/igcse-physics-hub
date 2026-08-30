export interface ClassifiedPaperPack {
  id: string;
  topicId: "mechanics" | "thermal" | "waves" | "electricity" | "nuclear" | "space" | "paper6";
  topicBadge: string;
  topicBadgeColor: string;
  title: string;
  subtitle: string;
  syllabusCodes: string[];
  paperTypes: string[];
  yearRange: string;
  questionCount: number;
  totalMarks: number;
  pdfQuestionsUrl: string;
  pdfMarkSchemeUrl: string;
  summary: string;
  subtopics: string[];
  featuredQuestions: {
    id: string;
    source: string; // e.g. "0625/03 Nov 2003 Q1"
    paperType: string; // "Paper 4 Extended" | "Paper 2 Core" | "Paper 6 ATP"
    questionText: string;
    marks: number;
    diagramDescription?: string;
    markSchemePoints: string[];
    examinerComment?: string;
    modelAnswer: string;
  }[];
}

export const CLASSIFIED_PAPERS_DATA: ClassifiedPaperPack[] = [
  {
    id: "classified-mechanics",
    topicId: "mechanics",
    topicBadge: "Mechanics",
    topicBadgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    title: "1. Motion, Forces & Energy",
    subtitle: "Paper 2 (MCQs) & Paper 4 (Extended Theory) - Compiled Topical Past Papers",
    syllabusCodes: ["0625/2", "0625/4", "0972/4"],
    paperTypes: ["Paper 2 (MCQ)", "Paper 4 (Extended)", "Paper 3 (Core)"],
    yearRange: "2018 - 2025 Series",
    questionCount: 48,
    totalMarks: 240,
    pdfQuestionsUrl: "/pdfs/classified/mechanics_questions.pdf",
    pdfMarkSchemeUrl: "/pdfs/classified/mechanics_ms.pdf",
    summary: "Comprehensive compilation of motion graphs, acceleration, Hooke's law, moments, vectors, kinetic and gravitational potential energy calculations.",
    subtopics: [
      "Speed-Time & Distance-Time Graphs",
      "Acceleration & Free Fall (g = 9.8 m/s²)",
      "Resultant Forces & Newton's 2nd Law (F = ma)",
      "Hooke's Law & Limit of Proportionality",
      "Principle of Moments & Equilibrium (Clockwise = Anticlockwise)",
      "Work Done (W = Fd) & Power (P = W/t)",
      "Kinetic (½mv²) & Potential Energy (mgh)",
      "Pressure & Liquid Pressure (p = ρgh)"
    ],
    featuredQuestions: [
      {
        id: "m-q1",
        source: "Cambridge 0625/03 Nov 2003 Q1",
        paperType: "Paper 4 Extended",
        questionText: "A bus driver starts to brake at t = 0. In test 1, the speed decreases from 20 m/s to 0 in 7.0 s with varying deceleration. In test 2, a braking device is fitted so that the bus decelerates uniformly from 15 m/s to rest in 8.0 s. Calculate the deceleration in test 2 and distance travelled.",
        marks: 4,
        diagramDescription: "Speed-time graph with curves for Test 1 and linear deceleration line for Test 2.",
        markSchemePoints: [
          "C1: deceleration = change in speed / time taken = 15 / 8.0",
          "A1: deceleration = 1.88 m/s² (allow 1.9 m/s²)",
          "C1: distance = average speed × time or area under graph = ½ × 15 × 8.0",
          "A1: distance = 60 m"
        ],
        examinerComment: "Candidates must remember that for uniform acceleration, distance is strictly the area under the speed-time graph. Never multiply initial speed by total time.",
        modelAnswer: "Deceleration = (v - u) / t = (0 - 15) / 8.0 = -1.875 m/s² (Magnitude = 1.9 m/s²). Distance = Area of triangle = ½ × base × height = ½ × 8.0 s × 15 m/s = 60 m."
      },
      {
        id: "m-q2",
        source: "Cambridge 0625/03 June 2004 Q2",
        paperType: "Paper 4 Extended",
        questionText: "A rock of mass 75 kg falls from rest through a vertical distance of 15 m from a cliff into a river. (a) Calculate the weight of the rock (g = 10 m/s²). (b) Calculate its kinetic energy just before hitting the water.",
        marks: 4,
        diagramDescription: "Rock falling vertically 15m from cliff into water.",
        markSchemePoints: [
          "A1: Weight = mg = 75 × 10 = 750 N",
          "C1: Loss of gravitational potential energy = mgh = 75 × 10 × 15",
          "C1: Gain in kinetic energy = Loss in GPE = 11,250 J",
          "A1: Ek = 11,250 J (or 11.3 kJ)"
        ],
        examinerComment: "Directly equating ΔEk = ΔEp (conservation of energy) avoids lengthy two-step v² = u² + 2as calculations and prevents rounding errors.",
        modelAnswer: "(a) Weight = m × g = 75 kg × 10 N/kg = 750 N.\n(b) By conservation of energy: Kinetic Energy gained = GPE lost = m × g × h = 75 kg × 10 N/kg × 15 m = 11,250 J (1.13 × 10⁴ J)."
      },
      {
        id: "m-q3",
        source: "Cambridge 0625/03 Nov 2003 Q3",
        paperType: "Paper 4 Extended",
        questionText: "A see-saw is balanced horizontally on a central pivot. Child A of mass 18.0 kg sits at distance 2.50 m from the pivot. Calculate the distance of Child B (mass 20.0 kg) from the pivot.",
        marks: 3,
        diagramDescription: "Balanced see-saw with pivot in center and children at opposite ends.",
        markSchemePoints: [
          "B1: State Principle of Moments: Total clockwise moment = Total anticlockwise moment",
          "C1: (18.0 × g) × 2.50 = (20.0 × g) × distance",
          "A1: distance = 2.25 m"
        ],
        examinerComment: "Remember g cancels on both sides when equating moments of masses. The heavier child must sit closer to the pivot.",
        modelAnswer: "Clockwise Moment = Anticlockwise Moment\nWeight_A × d_A = Weight_B × d_B\n(18.0 × 10) × 2.50 = (20.0 × 10) × d_B\n450 = 200 × d_B ⇒ d_B = 450 / 200 = 2.25 m from pivot."
      }
    ]
  },
  {
    id: "classified-thermal",
    topicId: "thermal",
    topicBadge: "Thermal",
    topicBadgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    title: "2. Thermal Physics",
    subtitle: "Paper 4 Theory Classified Questions & Structured Problems (2018 - 2025)",
    syllabusCodes: ["0625/2", "0625/4"],
    paperTypes: ["Paper 4 (Extended)", "Paper 2 (MCQ)"],
    yearRange: "2018 - 2025 Series",
    questionCount: 36,
    totalMarks: 180,
    pdfQuestionsUrl: "/pdfs/classified/thermal_questions.pdf",
    pdfMarkSchemeUrl: "/pdfs/classified/thermal_ms.pdf",
    summary: "Kinetic particle model of matter, gas laws, thermal expansion, specific heat capacity (mcΔT), latent heat of vaporisation, and heat transfer mechanisms.",
    subtopics: [
      "States of Matter & Molecular Arrangement",
      "Brownian Motion & Molecular Collisions",
      "Evaporation vs. Boiling (Molecular View)",
      "Boyle's Law for Gas Pressure (p₁V₁ = p₂V₂)",
      "Specific Heat Capacity (Q = mcΔT)",
      "Specific Latent Heat of Fusion & Vaporisation (Q = mL)",
      "Thermal Conduction (Role of Delocalised Electrons in Metals)",
      "Thermal Convection & Radiation Emitters/Absorbers"
    ],
    featuredQuestions: [
      {
        id: "t-q1",
        source: "Cambridge 0625/03 Nov 2003 Q4",
        paperType: "Paper 4 Extended",
        questionText: "In an experiment, water in a can at 100°C is boiled using a 60 W electrical heater. In 120 s, the mass of water decreases by 3.2 g. Calculate the specific latent heat of vaporisation of water.",
        marks: 3,
        diagramDescription: "Beaker with immersion heater evaporating boiling water.",
        markSchemePoints: [
          "C1: Energy supplied Q = Power × time = 60 W × 120 s = 7200 J",
          "C1: L = Q / m = 7200 J / 3.2 g or 7200 / 0.0032 kg",
          "A1: L = 2250 J/g (or 2.25 × 10⁶ J/kg)"
        ],
        examinerComment: "Common pitfall: writing unit J/kg when mass was substituted in grams. Either use 2250 J/g or 2.25 × 10⁶ J/kg.",
        modelAnswer: "Energy supplied Q = P × t = 60 W × 120 s = 7,200 J.\nSpecific latent heat of vaporisation L_v = Q / m = 7,200 J / 0.0032 kg = 2.25 × 10⁶ J/kg (or 2250 J/g)."
      },
      {
        id: "t-q2",
        source: "Cambridge 0625/03 Nov 2003 Q5",
        paperType: "Paper 4 Extended",
        questionText: "Equal volumes of nitrogen gas, water, and copper at 20°C are heated to 50°C. (i) Which has the greatest expansion? (ii) Explain why in terms of molecular forces and structure.",
        marks: 3,
        diagramDescription: "Three containers comparing solid copper, liquid water, and nitrogen gas.",
        markSchemePoints: [
          "M1: Nitrogen (gas)",
          "B1: In copper (solid) molecules are tightly bonded with strong intermolecular forces and fixed in lattice.",
          "B1: In nitrogen (gas) intermolecular forces are negligible/free, allowing large separation upon gaining kinetic energy."
        ],
        examinerComment: "Must contrast the negligible bonding forces in gases with the rigid lattice bonding in solids.",
        modelAnswer: "(i) Nitrogen gas.\n(ii) In copper (solid), atoms are bound by strong electrostatic bonds in a fixed lattice, restricting expansion. In nitrogen gas, intermolecular forces are negligible, so when particles gain kinetic energy, their average spacing increases dramatically."
      }
    ]
  },
  {
    id: "classified-waves",
    topicId: "waves",
    topicBadge: "Waves",
    topicBadgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    title: "3. Waves & Light",
    subtitle: "Full Classified Pack with Ray Diagrams, Optics, Sound & EM Spectrum",
    syllabusCodes: ["0625/2", "0625/4"],
    paperTypes: ["Paper 4 (Extended)", "Paper 2 (MCQ)"],
    yearRange: "2018 - 2025 Series",
    questionCount: 42,
    totalMarks: 210,
    pdfQuestionsUrl: "/pdfs/classified/waves_questions.pdf",
    pdfMarkSchemeUrl: "/pdfs/classified/waves_ms.pdf",
    summary: "Wave equation (v = fλ), reflection, refraction, Snell's law (n = sin i / sin r), critical angle & total internal reflection (TIR), converging lenses, and sound echoes.",
    subtopics: [
      "Wave Properties: Transverse vs. Longitudinal Waves",
      "Wave Equation Calculations (v = fλ)",
      "Wavefront Diffraction through Gaps",
      "Reflection at Plane Mirrors & Virtual Images",
      "Refraction & Snell's Law (n = c / v = sin i / sin r)",
      "Total Internal Reflection & Critical Angle (sin c = 1/n)",
      "Converging Lenses: Real vs. Virtual Ray Diagrams",
      "Sound Waves: Compressions, Rarefactions & Echo Timing"
    ],
    featuredQuestions: [
      {
        id: "w-q1",
        source: "Cambridge 0625/03 Nov 2004 Q6",
        paperType: "Paper 4 Extended",
        questionText: "Light in an optical glass fibre has wavelength 3.2 × 10⁻⁷ m and speed 1.9 × 10⁸ m/s. (i) Calculate the frequency of the light. (ii) Calculate the refractive index of the glass (speed of light in air = 3.0 × 10⁸ m/s).",
        marks: 4,
        diagramDescription: "Optical fibre showing total internal reflection of ray XY.",
        markSchemePoints: [
          "C1: v = fλ ⇒ f = v / λ = 1.9 × 10⁸ / (3.2 × 10⁻⁷)",
          "A1: f = 5.94 × 10¹⁴ Hz (or 5.9 × 10¹⁴ Hz)",
          "C1: Refractive index n = speed in air / speed in glass = (3.0 × 10⁸) / (1.9 × 10⁸)",
          "A1: n = 1.58 (no unit)"
        ],
        examinerComment: "Refractive index is a ratio of speeds and has no unit. Full marks require correct powers of 10 in frequency calculations.",
        modelAnswer: "(i) Frequency f = v / λ = (1.9 × 10⁸ m/s) / (3.2 × 10⁻⁷ m) = 5.94 × 10¹⁴ Hz.\n(ii) Refractive index n = c / v = (3.0 × 10⁸ m/s) / (1.9 × 10⁸ m/s) = 1.58."
      },
      {
        id: "w-q2",
        source: "Cambridge 0625/03 June 2004 Q7",
        paperType: "Paper 4 Extended",
        questionText: "A loudspeaker emits sound waves towards a large vertical wall 50 m away. Speed of sound in air is 340 m/s. Calculate the time taken for the echo to return to the loudspeaker.",
        marks: 2,
        diagramDescription: "Sound wave pulses propagating to wall and reflecting back.",
        markSchemePoints: [
          "C1: Total distance = 2 × 50 m = 100 m",
          "A1: time = distance / speed = 100 / 340 = 0.294 s (0.29 s)"
        ],
        examinerComment: "In all echo questions, the distance is doubled because the sound wave travels there and back.",
        modelAnswer: "Total distance for echo = 2 × d = 2 × 50 m = 100 m.\nTime interval t = distance / speed = 100 m / 340 m/s = 0.294 s (0.29 s)."
      }
    ]
  },
  {
    id: "classified-electricity",
    topicId: "electricity",
    topicBadge: "Electricity",
    topicBadgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    title: "4. Electricity & Magnetism",
    subtitle: "Classified Circuit Calculations, Electromagnetic Induction & Component Logic",
    syllabusCodes: ["0625/2", "0625/4"],
    paperTypes: ["Paper 4 (Extended)", "Paper 2 (MCQ)"],
    yearRange: "2018 - 2025 Series",
    questionCount: 52,
    totalMarks: 260,
    pdfQuestionsUrl: "/pdfs/classified/electricity_questions.pdf",
    pdfMarkSchemeUrl: "/pdfs/classified/electricity_ms.pdf",
    summary: "Current, voltage, Ohm's law, series/parallel combinations, potential dividers with LDRs/thermistors, transformers, electromagnetic induction, and CRO oscilloscope traces.",
    subtopics: [
      "Current, Voltage & Resistance (V = IR)",
      "Charge & Current Equation (Q = It)",
      "Electrical Energy & Power (P = VI, E = VIt)",
      "Series Circuits vs. Parallel Branch Rules",
      "Potential Dividers with LDRs & Thermistors",
      "Magnetic Field of Bar Magnets & Solenoids",
      "Electromagnetic Induction & Faraday's Law",
      "Transformers Equation (Vp/Vs = Np/Ns & IpVp = IsVs)"
    ],
    featuredQuestions: [
      {
        id: "e-q1",
        source: "Cambridge 0625/03 Nov 2004 Q7",
        paperType: "Paper 4 Extended",
        questionText: "A 12 V battery is connected to a circuit with two 4.0 Ω resistors in parallel and two 5.0 Ω resistors in series. Calculate: (a) combined resistance of the two 4.0 Ω resistors, (b) total power dissipated when current is 6.0 A.",
        marks: 4,
        diagramDescription: "Circuit diagram with mixed series and parallel resistor networks.",
        markSchemePoints: [
          "C1: Parallel resistance 1/Rp = 1/4 + 1/4 = 2/4 ⇒ Rp = 2.0 Ω",
          "C1: Power P = I²R or P = VI = 6.0 A × 12 V",
          "A1: Power = 72 W"
        ],
        examinerComment: "When calculating parallel resistance for two identical resistors R, the equivalent is simply R / 2.",
        modelAnswer: "(a) For two 4.0 Ω resistors in parallel: 1/R = 1/4 + 1/4 = 2/4 ⇒ R_parallel = 2.0 Ω.\n(b) Total power dissipated P = V × I = 12 V × 6.0 A = 72 W (or P = I²R = 6.0² × 2.0 = 72 W)."
      },
      {
        id: "e-q2",
        source: "Cambridge 0625/03 June 2004 Q9",
        paperType: "Paper 4 Extended",
        questionText: "A 100% efficient transformer has a primary input of 240 V a.c. and delivers 24 V at 2.0 A on the secondary. Calculate: (i) the power output, (ii) the current in the primary coil.",
        marks: 4,
        diagramDescription: "Step-down transformer with primary and secondary coils on laminated iron core.",
        markSchemePoints: [
          "A1: Power output = Vs × Is = 24 V × 2.0 A = 48 W",
          "C1: For 100% efficiency, Power in = Power out ⇒ Vp × Ip = 48 W",
          "C1: 240 V × Ip = 48 W ⇒ Ip = 48 / 240",
          "A1: Primary current Ip = 0.20 A (or 0.40 A for 120V system)"
        ],
        examinerComment: "Remember that transformers step down voltage while stepping up current (conservation of energy).",
        modelAnswer: "(i) Power output P_out = V_s × I_s = 24 V × 2.0 A = 48 W.\n(ii) For a 100% efficient transformer, P_in = P_out ⇒ V_p × I_p = 48 W ⇒ 240 V × I_p = 48 W ⇒ I_p = 48 / 240 = 0.20 A."
      }
    ]
  },
  {
    id: "classified-nuclear",
    topicId: "nuclear",
    topicBadge: "Nuclear",
    topicBadgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    title: "5. Nuclear Physics",
    subtitle: "Alpha, Beta, Gamma Radiations, Decay Equations & Half-Life Graphs",
    syllabusCodes: ["0625/2", "0625/4"],
    paperTypes: ["Paper 4 (Extended)", "Paper 2 (MCQ)"],
    yearRange: "2018 - 2025 Series",
    questionCount: 30,
    totalMarks: 150,
    pdfQuestionsUrl: "/pdfs/classified/nuclear_questions.pdf",
    pdfMarkSchemeUrl: "/pdfs/classified/nuclear_ms.pdf",
    summary: "Atomic structure, nuclide notation, alpha/beta/gamma properties & ionizing power, decay equations, background radiation subtraction, and half-life decay curves.",
    subtopics: [
      "Atomic Models & Rutherford Alpha Scattering",
      "Nuclide Notation (Protons, Neutrons, Mass Number)",
      "Alpha, Beta & Gamma Ionising vs. Penetration Powers",
      "Balanced Radioactive Decay Equations",
      "Background Radiation Sources & Subtraction",
      "Half-Life Determinations from Count Rate Graphs",
      "Medical & Industrial Tracer Applications"
    ],
    featuredQuestions: [
      {
        id: "n-q1",
        source: "Cambridge 0625/03 Nov 2004 Q11",
        paperType: "Paper 4 Extended",
        questionText: "Radium-226 (²²⁶₈₈Ra) decays by alpha emission to form Radon (Rn). Write down the nuclear equation for this decay and determine the nucleon and proton number of Radon.",
        marks: 2,
        diagramDescription: "Decay equation with blank boxes for mass and atomic numbers.",
        markSchemePoints: [
          "B1: Top line: 226 = 222 + 4 (Radon mass number = 222, Alpha particle = 4)",
          "B1: Bottom line: 88 = 86 + 2 (Radon proton number = 86, Alpha particle = 2)"
        ],
        examinerComment: "Conservation of nucleon number (A) and proton number (Z) must balance on both sides of the arrow.",
        modelAnswer: "²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂α (or ⁴₂He)\nNucleon number of Radon = 226 - 4 = 222.\nProton number of Radon = 88 - 2 = 86."
      },
      {
        id: "n-q2",
        source: "Cambridge 0625/01 Nov 2004 Q39",
        paperType: "Paper 2 MCQ",
        questionText: "A radioactive isotope contains 72 billion unstable nuclei. Its half-life is 4 hours. How many unstable nuclei remain after 12 hours?",
        marks: 1,
        diagramDescription: "Exponential decay curve calculation.",
        markSchemePoints: [
          "C1: Number of half-lives = 12 h / 4 h = 3 half-lives",
          "A1: Remaining = 72 × (½)³ = 72 / 8 = 9 billion nuclei"
        ],
        examinerComment: "Always calculate the number of half-lives first: n = total time / t_half.",
        modelAnswer: "Number of half-lives n = 12 hours / 4 hours = 3.\nAfter 1 half-life (4 h): 72 / 2 = 36 billion\nAfter 2 half-lives (8 h): 36 / 2 = 18 billion\nAfter 3 half-lives (12 h): 18 / 2 = 9 billion nuclei remain."
      }
    ]
  },
  {
    id: "classified-space",
    topicId: "space",
    topicBadge: "Space Physics",
    topicBadgeColor: "bg-purple-100 text-purple-900 border-purple-200",
    title: "6. Space Physics",
    subtitle: "Latest Cambridge 0625 / 0972 Syllabus Syllabus Chapter Past Papers",
    syllabusCodes: ["0625/2", "0625/4"],
    paperTypes: ["Paper 4 (Extended)", "Paper 2 (MCQ)"],
    yearRange: "2023 - 2026 Latest Syllabus",
    questionCount: 24,
    totalMarks: 120,
    pdfQuestionsUrl: "/pdfs/classified/space_questions.pdf",
    pdfMarkSchemeUrl: "/pdfs/classified/space_ms.pdf",
    summary: "Solar system components, planetary orbital speeds (v = 2πr / T), stellar lifecycles (Protostar, Main Sequence, Red Giant, Supernova, Neutron Star, Black Hole), and Big Bang cosmology.",
    subtopics: [
      "Earth Motion: Rotation & Tilt (Seasons, Day & Night)",
      "Solar System Components & Gravitational Pull",
      "Orbital Speed Formula (v = 2πr / T)",
      "Life Cycle of Stars (Sun-like Stars vs. Massive Stars)",
      "Nuclear Fusion in Stellar Cores (Hydrogen to Helium)",
      "Light-Year as Astronomical Distance Unit",
      "Redshift, Hubble's Law (v = H₀d), & Big Bang Evidence"
    ],
    featuredQuestions: [
      {
        id: "s-q1",
        source: "Cambridge 0625 Space Physics Specimen Question",
        paperType: "Paper 4 Extended",
        questionText: "The average distance from the Earth to the Sun is 1.5 × 10⁸ km. The Earth takes 365.25 days to complete one circular orbit. Calculate the orbital speed of the Earth in km/s.",
        marks: 3,
        diagramDescription: "Orbital path of Earth around the Sun.",
        markSchemePoints: [
          "C1: Orbital period in seconds T = 365.25 × 24 × 3600 = 3.156 × 10⁷ s",
          "C1: v = 2πr / T = (2 × π × 1.5 × 10⁸ km) / (3.156 × 10⁷ s)",
          "A1: v = 29.9 km/s (or 30 km/s)"
        ],
        examinerComment: "Ensure time is converted into seconds if finding speed in km/s.",
        modelAnswer: "Circumference of orbit = 2 × π × r = 2 × π × 1.5 × 10⁸ km = 9.425 × 10⁸ km.\nOrbital period T in seconds = 365.25 × 24 × 3600 s = 3.156 × 10⁷ s.\nOrbital speed v = 2πr / T = 9.425 × 10⁸ km / 3.156 × 10⁷ s = 29.86 km/s ≈ 29.9 km/s."
      }
    ]
  },
  {
    id: "classified-paper6",
    topicId: "paper6",
    topicBadge: "Paper 6 ATP",
    topicBadgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    title: "7. Alternative to Practical (Paper 6)",
    subtitle: "Complete Experimental Skills, Line of Best Fit & Lab Technique Classified Past Papers",
    syllabusCodes: ["0625/6", "0972/6"],
    paperTypes: ["Paper 6 (ATP)", "Paper 5 (Practical Test)"],
    yearRange: "2018 - 2025 Series",
    questionCount: 40,
    totalMarks: 160,
    pdfQuestionsUrl: "/pdfs/classified/paper6_questions.pdf",
    pdfMarkSchemeUrl: "/pdfs/classified/paper6_ms.pdf",
    summary: "Experimental planning, measuring cylinder parallax avoidance, line of best fit rules, large triangle gradient determinations, and controlling variables.",
    subtopics: [
      "Precision & Reading Parallax Error Avoidance",
      "Multiple Turns / Stacks Measurement (Wires, Paper Sheets)",
      "Table Columns with Quantity Names and SI Units",
      "Graph Plotting: Axes Scales occupying > 50% of grid",
      "Thin Continuous Line of Best Fit (Ignoring Anomalies)",
      "Large Triangle Gradient Calculation (Δy / Δx)",
      "Standard Lab Precautions (Mirrors, Pins > 5cm, Lids/Insulation)"
    ],
    featuredQuestions: [
      {
        id: "p6-q1",
        source: "Cambridge 0625/06 Nov 2004 Q1",
        paperType: "Paper 6 ATP",
        questionText: "A student wraps a thin string 5 times round a beaker. The measured distance on the metre rule between marks is 75 cm. (i) Calculate the circumference c. (ii) State one source of error and one improvement to this technique.",
        marks: 4,
        diagramDescription: "String wrapped 5 turns around cylindrical glass beaker.",
        markSchemePoints: [
          "A1: Circumference c = 75 cm / 5 = 15 cm",
          "B1: Source of error: thickness of string / gaps between windings / stretch in string / diagonal turns",
          "B1: Improvement: use thinner inextensible string / ensure adjacent windings touch without overlapping / repeat and take average"
        ],
        examinerComment: "Examiners do not credit vague statements like 'I made a mistake'. You must cite a physical limitation of the apparatus.",
        modelAnswer: "(i) Circumference c = Total length / number of turns = 75 cm / 5 = 15.0 cm.\n(ii) Source of error: String stretches when wound, or gaps exist between consecutive turns.\n(iii) Improvement: Use a thin, inextensible thread or strip of paper, ensuring turns are tight and parallel with no gaps."
      }
    ]
  }
];
