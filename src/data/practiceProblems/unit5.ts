import { PracticeProblem } from "../../types";

export const UNIT_5_PRACTICE_PROBLEMS: PracticeProblem[] = [
  // SECTION 5.1: The Nuclear Model & Isotopes
  {
    id: "prob-5.1-1",
    topicId: "5.1",
    title: "5.1 Practice Problem 1: Rutherford Alpha Scattering Conclusions",
    difficulty: "Core",
    marks: 3,
    question:
      "In the classic Geiger-Marsden-Rutherford experiment, alpha particles were fired at a thin gold foil.\n(a) Observation 1: Most alpha particles passed straight through with no deflection. State the conclusion about the atom.\n(b) Observation 2: A small fraction of alpha particles were deflected through large angles (> 90°). State the conclusion about the nucleus.",
    givenData: [
      "Alpha particles (+2 positive charge, heavy helium nuclei)",
      "Gold foil target",
    ],
    formulaUsed: "Rutherford nuclear model of the atom",
    hints: [
      "Thomson's plum pudding model was disproved because mass and charge are concentrated in a tiny nucleus.",
    ],
    stepByStepSolution: [
      "Step 1: Observation 1 (Passed straight through): Concludes that the atom is mostly EMPTY SPACE.",
      "Step 2: Observation 2 (Deflected by large angles / rebounded): Concludes that the mass and positive charge of the atom are concentrated in a tiny, extremely dense, central region called the NUCLEUS.",
    ],
    finalAnswer: "(a) The atom is mostly empty space.\n(b) The nucleus is tiny, very dense, and positively charged.",
    examinerTips:
      "Full marks require 'mostly empty space' and 'positive, dense central nucleus'.",
  },
  {
    id: "prob-5.1-2",
    topicId: "5.1",
    title: "5.1 Practice Problem 2: Nuclide Notation & Isotopes of Carbon",
    difficulty: "Extended",
    marks: 3,
    question:
      "Two isotopes of Carbon are Carbon-12 (¹²₆C) and Carbon-14 (¹⁴₆C).\n(a) State the number of protons, neutrons, and electrons in a neutral atom of Carbon-12.\n(b) State the number of protons, neutrons, and electrons in a neutral atom of Carbon-14.\n(c) Explain why both isotopes have identical chemical properties.",
    givenData: [
      "Carbon-12: A = 12, Z = 6",
      "Carbon-14: A = 14, Z = 6",
    ],
    formulaUsed: "Protons = Z, Neutrons = A - Z, Electrons = Protons (for neutral atom)",
    hints: ["Isotopes have the same number of protons and electrons, but different numbers of neutrons."],
    stepByStepSolution: [
      "Step 1 (Carbon-12): Protons = 6, Neutrons = 12 - 6 = 6, Electrons = 6.",
      "Step 2 (Carbon-14): Protons = 6, Neutrons = 14 - 6 = 8, Electrons = 6.",
      "Step 3 (Chemical properties): Chemical properties depend strictly on the number and electronic configuration of outer-shell electrons. Because both isotopes have exactly 6 electrons (electron configuration 2,4), their chemical reactions and bonding are identical.",
    ],
    finalAnswer: "(a) C-12: 6 protons, 6 neutrons, 6 electrons\n(b) C-14: 6 protons, 8 neutrons, 6 electrons\n(c) Both have the same number of electrons (same electronic configuration).",
    examinerTips:
      "Always mention 'same number of outer electrons' when explaining chemical similarity.",
  },

  // SECTION 5.2: Radioactive Decay: Alpha, Beta & Gamma
  {
    id: "prob-5.2-1",
    topicId: "5.2",
    title: "5.2 Practice Problem 1: Balancing Nuclear Decay Equations",
    difficulty: "Core",
    marks: 4,
    question:
      "(a) Uranium-238 (²³⁸₉₂U) decays by emitting an alpha particle (⁴₂He) to form an isotope of Thorium (Th). Write the balanced nuclear equation and state the nucleon and proton number of Thorium.\n(b) Carbon-14 (¹⁴₆C) decays by beta emission (⁰₋₁e) to form Nitrogen (N). Write the balanced nuclear decay equation.",
    givenData: [
      "Alpha particle = ⁴₂He (or ⁴₂α)",
      "Beta particle = ⁰₋₁e (or ⁰₋₁β)",
    ],
    formulaUsed: "Conservation of Nucleon Number (Top numbers balance) & Conservation of Proton Number (Bottom numbers balance)",
    hints: ["In alpha decay, A decreases by 4 and Z decreases by 2. In beta decay, A stays same and Z increases by 1."],
    stepByStepSolution: [
      "Step 1 (Alpha decay of U-238):\n   ²³⁸₉₂U -> ²³⁴₉₀Th + ⁴₂He\n   Nucleon number of Thorium = 238 - 4 = 234.\n   Proton number of Thorium = 92 - 2 = 90.",
      "Step 2 (Beta decay of C-14):\n   ¹⁴₆C -> ¹⁴₇N + ⁰₋₁e\n   Nucleon number of Nitrogen = 14 - 0 = 14.\n   Proton number of Nitrogen = 6 - (-1) = 7.",
    ],
    finalAnswer: "(a) ²³⁸₉₂U -> ²³⁴₉₀Th + ⁴₂He (Thorium-234, Z = 90)\n(b) ¹⁴₆C -> ¹⁴₇N + ⁰₋₁e (Nitrogen-14, Z = 7)",
    examinerTips:
      "Make sure the sums on both sides are strictly equal: Top: 234 + 4 = 238; Bottom: 90 + 2 = 92.",
  },
  {
    id: "prob-5.2-2",
    topicId: "5.2",
    title: "5.2 Practice Problem 2: Radiation Identification & Penetration Test",
    difficulty: "Extended",
    marks: 3,
    question:
      "A radioactive source is placed in front of a Geiger-Muller tube connected to a counter. The count rate is recorded with different absorbers:\n• No absorber: 850 counts/min\n• Sheet of paper: 850 counts/min\n• 5 mm Aluminum sheet: 120 counts/min\n• 5 cm Lead block: 20 counts/min (background level)\n(a) Identify the two types of radiation emitted by the source, explaining your reasoning.\n(b) Explain why alpha radiation was NOT emitted.",
    givenData: [
      "No absorber = 850 cpm",
      "Paper = 850 cpm (no change)",
      "5 mm Al = 120 cpm (large drop)",
      "5 cm Lead = 20 cpm (dropped to background)",
    ],
    formulaUsed: "Penetrating powers: Alpha stopped by paper; Beta stopped by mm Al; Gamma reduced by thick Lead",
    hints: ["No drop with paper means no alpha particles."],
    stepByStepSolution: [
      "Step 1 (Paper test): The count rate did not decrease at all when paper was inserted (850 -> 850 cpm). This proves that NO alpha radiation is present, because alpha is completely stopped by paper.",
      "Step 2 (Aluminum test): The count rate dropped significantly from 850 to 120 cpm when 5 mm aluminum was added. This proves the presence of Beta radiation, which is stopped by aluminum.",
      "Step 3 (Lead test): The remaining 120 cpm penetrated the aluminum but was absorbed by 5 cm of lead down to background level (20 cpm). This proves the presence of Gamma radiation.",
    ],
    finalAnswer: "(a) Beta and Gamma radiation are present.\n(b) Alpha radiation is absent because the count rate did not change when paper was inserted.",
    examinerTips:
      "Paper 2 and 4 love this table question: Always link each absorber to its specific radiation type.",
  },

  // SECTION 5.3: Half-Life & Practical Applications
  {
    id: "prob-5.3-1",
    topicId: "5.3",
    title: "5.3 Practice Problem 1: Half-Life Decay with Background Radiation",
    difficulty: "Core",
    marks: 4,
    question:
      "A radioactive sample has an initial raw count rate of 520 counts/s. The background radiation count rate in the laboratory is measured to be a constant 40 counts/s. After 24.0 hours, the measured raw count rate is 70 counts/s.\n(a) Calculate the initial corrected count rate of the sample.\n(b) Calculate the final corrected count rate after 24.0 hours.\n(c) Determine the number of half-lives that have elapsed.\n(d) Calculate the half-life of the radioactive isotope in hours.",
    givenData: [
      "Initial raw count rate = 520 counts/s",
      "Background count rate = 40 counts/s",
      "Final raw count rate = 70 counts/s after t = 24.0 hours",
    ],
    formulaUsed: "Corrected Count Rate = Raw Count Rate - Background, Remaining Fraction = (1/2)^n, Half-life T_1/2 = Total Time / n",
    hints: ["ALWAYS subtract background radiation first before halving!"],
    stepByStepSolution: [
      "Step 1: Initial corrected count rate = 520 - 40 = 480 counts/s.",
      "Step 2: Final corrected count rate = 70 - 40 = 30 counts/s.",
      "Step 3: Count rate halving progression:\n   480 -> 240 (1 half-life)\n   240 -> 120 (2 half-lives)\n   120 -> 60 (3 half-lives)\n   60 -> 30 (4 half-lives).\n   Therefore, n = 4 half-lives have elapsed.",
      "Step 4: Calculate half-life: T_1/2 = Total Time / n = 24.0 hours / 4 = 6.0 hours.",
    ],
    finalAnswer: "(a) Initial corrected count rate = 480 counts/s\n(b) Final corrected count rate = 30 counts/s\n(c) 4 half-lives have elapsed\n(d) Half-life = 6.0 hours",
    examinerTips:
      "The #1 mistake is halving 520 directly. You MUST subtract the 40 counts/s background from BOTH start and end values.",
  },
  {
    id: "prob-5.3-2",
    topicId: "5.3",
    title: "5.3 Practice Problem 2: Choosing Isotopes for Medical Tracers",
    difficulty: "Extended",
    marks: 3,
    question:
      "A doctor wants to inject a radioactive tracer into a patient's bloodstream to detect a blockage in the kidney. The three available isotopes are:\n• Isotope X: Alpha emitter, half-life = 6 hours\n• Isotope Y: Gamma emitter, half-life = 6 hours (Technetium-99m)\n• Isotope Z: Gamma emitter, half-life = 30 years\n(a) Explain why Isotope Y is the most suitable choice.\n(b) Explain why Isotope X is dangerous and unsuitable.\n(c) Explain why Isotope Z is unsuitable.",
    givenData: [
      "Isotope X: Alpha, 6h",
      "Isotope Y: Gamma, 6h",
      "Isotope Z: Gamma, 30y",
    ],
    formulaUsed: "Medical tracer requirements: Penetrating radiation (Gamma), short half-life (hours)",
    hints: [
      "Gamma rays can penetrate out of the body to be detected by gamma cameras; short half-life minimizes exposure.",
    ],
    stepByStepSolution: [
      "Step 1 (Why Y is ideal): Gamma radiation easily penetrates through skin and tissue to be detected by external gamma cameras outside the body. A 6-hour half-life provides enough time for the hospital scan while decaying quickly so the patient is not irradiated for weeks.",
      "Step 2 (Why X is dangerous): Alpha radiation is highly ionizing and cannot penetrate through body tissue to reach external detectors, but would cause severe localized cell damage and DNA mutations inside the kidney.",
      "Step 3 (Why Z is unsuitable): A 30-year half-life means the patient would remain radioactive for their entire lifetime, receiving a dangerously high cumulative radiation dose.",
    ],
    finalAnswer: "(a) Isotope Y: Gamma penetrates out of the body; 6h half-life decays rapidly after the test.\n(b) Alpha is highly ionizing and cannot penetrate out of the body.\n(c) 30-year half-life leaves the patient radioactive for decades.",
    examinerTips:
      "For medical tracers: Always recommend Gamma + short half-life (hours/days). For smoke alarms: Alpha + long half-life (years).",
  },

  // SECTION 5.4: Nuclear Fission vs Nuclear Fusion
  {
    id: "prob-5.4-1",
    topicId: "5.4",
    title: "5.4 Practice Problem 1: Nuclear Fission Chain Reaction & Control",
    difficulty: "Core",
    marks: 4,
    question:
      "(a) State what is meant by nuclear fission.\n(b) Explain how a single slow neutron hitting a Uranium-235 nucleus can trigger an uncontrolled chain reaction.\n(c) Describe the specific functions of the moderator and the control rods in a commercial nuclear reactor.",
    givenData: [
      "Uranium-235 fission",
      "Reactor components: Moderator vs Control rods",
    ],
    formulaUsed: "Fission: ²³⁵₉₂U + ¹₀n -> ²³⁶₉₂U* -> Daughter Nuclei + 2-3 ¹₀n + Energy",
    hints: ["Moderators slow neutrons; control rods absorb neutrons."],
    stepByStepSolution: [
      "Step 1: Nuclear fission is the splitting of a heavy, unstable nucleus (like Uranium-235) into two smaller daughter nuclei, releasing neutrons and large thermal energy.",
      "Step 2: When U-235 splits, it releases 2 or 3 fast neutrons. If each of these neutrons is captured by other U-235 nuclei, they trigger further fissions, multiplying exponentially in an uncontrolled chain reaction.",
      "Step 3: Reactor components:\n   • Moderator (Graphite or water): Slows down fast neutrons to thermal speeds so they can be captured by U-235.\n   • Control Rods (Boron or Cadmium): Absorb excess neutrons. Lowering the rods absorbs more neutrons, slowing the chain reaction down.",
    ],
    finalAnswer: "(a) Splitting of a heavy nucleus into two smaller daughter nuclei, releasing neutrons and energy.\n(b) Released neutrons trigger successive fissions, multiplying the reaction.\n(c) Moderator slows down neutrons; Control rods absorb excess neutrons.",
    examinerTips:
      "Never confuse moderator (slows down neutrons) with control rods (absorbs neutrons).",
  },
  {
    id: "prob-5.4-2",
    topicId: "5.4",
    title: "5.4 Practice Problem 2: Nuclear Fusion in Stars & Electrostatic Repulsion",
    difficulty: "Extended",
    marks: 3,
    question:
      "(a) State what is meant by nuclear fusion.\n(b) Write the nuclear equation for the fusion of Deuterium (²₁H) and Tritium (³₁H) into Helium-4 (⁴₂He) and a neutron (¹₀n).\n(c) Explain why nuclear fusion requires temperatures in excess of 100 million °C to occur.",
    givenData: [
      "Reactants: ²₁H and ³₁H",
      "Products: ⁴₂He and ¹₀n",
    ],
    formulaUsed: "²₁H + ³₁H -> ⁴₂He + ¹₀n + Energy",
    hints: ["Both hydrogen nuclei are positively charged and repel each other strongly."],
    stepByStepSolution: [
      "Step 1: Nuclear fusion is the joining together of two light atomic nuclei to form a single heavier nucleus, releasing massive amounts of energy.",
      "Step 2: Nuclear equation: ²₁H + ³₁H -> ⁴₂He + ¹₀n.",
      "Step 3: Both hydrogen nuclei have positive charges (+1e) and strongly repel each other due to electrostatic repulsion (Coulomb force). Extremely high temperatures give the nuclei immense kinetic energy (very high speeds) to overcome this electrostatic repulsion and come close enough for the strong nuclear attractive force to fuse them.",
    ],
    finalAnswer: "(a) Joining of light nuclei to form a heavier nucleus.\n(b) ²₁H + ³₁H -> ⁴₂He + ¹₀n\n(c) Extremely high temperatures provide high kinetic energy to overcome electrostatic repulsion between positive nuclei.",
    examinerTips:
      "Mark scheme keywords: 'Positive nuclei repel' + 'high kinetic energy / speed to overcome repulsion'.",
  },
];
