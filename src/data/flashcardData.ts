import { Flashcard } from "../types";

export const IGCSE_FLASHCARDS: Flashcard[] = [
  // =========================================================================
  // UNIT 1: Motion, Forces & Energy / Measurements
  // =========================================================================
  {
    id: "fc-1",
    topicId: "unit-1",
    front: "What is the definition of Acceleration?",
    back: "The rate of change of velocity per unit time (a = (v - u) / t). SI unit: m/s².",
    category: "Definition",
    hint: "Think about change in velocity divided by time.",
  },
  {
    id: "fc-2",
    topicId: "unit-1",
    front: "State Hooke's Law.",
    back: "The extension of a spring is directly proportional to the applied load, provided the limit of proportionality is not exceeded (F = k · x).",
    category: "Law",
    hint: "Extension vs load relationship up to a specific limit.",
  },
  {
    id: "fc-3",
    topicId: "unit-1",
    front: "State the Principle of Moments.",
    back: "For an object in rotational equilibrium, the total clockwise moments about a pivot equal the total anticlockwise moments about the same pivot.",
    category: "Law",
  },
  {
    id: "fc-4",
    topicId: "unit-1",
    front: "What are the two conditions for complete mechanical equilibrium?",
    back: "1. Resultant Force is ZERO (no linear acceleration: ΣF = 0).\n2. Resultant Moment is ZERO (no rotational acceleration: Clockwise Moments = Anticlockwise Moments).",
    category: "Law",
  },
  {
    id: "fc-1-momentum",
    topicId: "unit-1",
    front: "State the Principle of Conservation of Momentum.",
    back: "In an isolated system with no external forces, the total momentum before a collision or explosion equals the total momentum after (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).",
    category: "Law",
  },
  {
    id: "fc-1-impulse",
    topicId: "unit-1",
    front: "Define Impulse and state its SI units.",
    back: "Impulse is the product of resultant force and the time duration for which it acts (Impulse = F · Δt = Δp = mv - mu). Units: N·s or kg·m/s.",
    category: "Formula",
  },
  {
    id: "fc-1-circular",
    topicId: "unit-1",
    front: "Describe the force required for Circular Motion.",
    back: "Centripetal force: a resultant force acting constantly towards the centre of the circle, perpendicular to the instantaneous direction of motion.",
    category: "Law",
  },
  {
    id: "fc-15",
    topicId: "unit-1",
    front: "How do you avoid Parallax Error when reading a ruler or measuring cylinder?",
    back: "Position your eye directly perpendicular (at 90°) to the scale marking, and at eye level with the bottom of the liquid meniscus.",
    category: "Experiment / Paper 6",
  },

  // =========================================================================
  // UNIT 2: Thermal Physics
  // =========================================================================
  {
    id: "fc-5",
    topicId: "unit-2",
    front: "Define Specific Heat Capacity.",
    back: "The energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K). Formula: Q = mcΔT. Unit: J/(kg·°C).",
    category: "Definition",
  },
  {
    id: "fc-6",
    topicId: "unit-2",
    front: "Why does temperature stay constant during boiling or melting?",
    back: "Thermal energy supplied is used to overcome intermolecular attractive forces and break bonds (increasing potential energy) rather than increasing kinetic energy. Since temperature measures average KE, temperature remains constant.",
    category: "Definition",
  },
  {
    id: "fc-2-brownian",
    topicId: "unit-2",
    front: "What is Brownian Motion and what does it prove?",
    back: "The random, jerky, continuous movement of visible particles (e.g. smoke or pollen) caused by bombardment from invisible, rapidly moving, energetic fluid molecules. It provides direct evidence for the kinetic particle theory.",
    category: "Experiment / Paper 6",
  },
  {
    id: "fc-2-surfaces",
    topicId: "unit-2",
    front: "Compare Dull Black vs Shiny Silver surfaces as thermal radiation emitters, absorbers, and reflectors.",
    back: "• Dull Matt Black: Best Emitter, Best Absorber, Worst Reflector.\n• Polished Shiny Silver/White: Worst Emitter, Worst Absorber, Best Reflector.",
    category: "Definition",
  },
  {
    id: "fc-2-thermocouple",
    topicId: "unit-2",
    front: "Why is a Thermocouple Thermometer preferred for rapidly changing high temperatures?",
    back: "It uses two dissimilar metal wires joined at junctions. The voltage created has very small thermal capacity (rapid response) and can measure extremely wide temperature ranges (-200 °C to 1100 °C).",
    category: "Experiment / Paper 6",
  },
  {
    id: "fc-16",
    topicId: "unit-2",
    front: "Name 3 standard precautions to improve accuracy in thermal cooling/heating experiments.",
    back: "1. Insulate beaker with cotton wool / bubble wrap.\n2. Place a lid on top of the beaker to prevent convection/evaporation loss.\n3. Stir liquid before recording temperature to ensure uniform heat distribution.",
    category: "Experiment / Paper 6",
  },

  // =========================================================================
  // UNIT 3: Waves, Light & Sound
  // =========================================================================
  {
    id: "fc-7",
    topicId: "unit-3",
    front: "What are the TWO conditions required for Total Internal Reflection (TIR) to occur?",
    back: "1. Light must travel from an optically DENSER medium to a LESS DENSE medium.\n2. The angle of incidence (i) must be GREATER than the critical angle (c) (i > c).",
    category: "Law",
    hint: "Medium density direction + angle comparison.",
  },
  {
    id: "fc-8",
    topicId: "unit-3",
    front: "State the standard human audible frequency range.",
    back: "20 Hz to 20,000 Hz (20 kHz). Frequencies above 20 kHz are Ultrasound.",
    category: "Unit",
  },
  {
    id: "fc-3-em-order",
    topicId: "unit-3",
    front: "State the order of the Electromagnetic Spectrum from longest to shortest wavelength.",
    back: "Radio waves -> Microwaves -> Infrared -> Visible light (ROYGBIV) -> Ultraviolet -> X-rays -> Gamma rays.\n(Mnemonic: Real Men In Venice Use X-ray Glasses)",
    category: "Formula",
  },
  {
    id: "fc-3-diffraction",
    topicId: "unit-3",
    front: "When does maximum diffraction occur when a wave passes through a gap?",
    back: "When the width of the gap is approximately equal to or smaller than the wavelength of the wave (gap width ≈ λ).",
    category: "Law",
  },
  {
    id: "fc-3-snell",
    topicId: "unit-3",
    front: "State Snell's Law and the Critical Angle formula.",
    back: "• n = sin(i) / sin(r)\n• n = c_vacuum / v_medium\n• sin(c) = 1 / n",
    category: "Formula",
  },

  // =========================================================================
  // UNIT 4: Electricity & Magnetism
  // =========================================================================
  {
    id: "fc-9",
    topicId: "unit-4",
    front: "State Ohm's Law.",
    back: "The current through a metallic conductor is directly proportional to the potential difference across it, provided temperature remains constant (V = IR).",
    category: "Law",
  },
  {
    id: "fc-10",
    topicId: "unit-4",
    front: "How does resistance change for an LDR and an NTC Thermistor?",
    back: "• LDR: Light Up -> Resistance DOWN (LURD)\n• Thermistor: Temperature Up -> Resistance DOWN (TURD)",
    category: "Formula",
  },
  {
    id: "fc-11",
    topicId: "unit-4",
    front: "Why are high voltages used for long-distance electricity transmission?",
    back: "Stepping up voltage reduces current (I) for the same transmitted power. Since power loss in transmission cables is P = I²R, lower current drastically reduces energy lost as heat.",
    category: "Law",
  },
  {
    id: "fc-4-softiron",
    topicId: "unit-4",
    front: "Compare Soft Iron vs Steel in magnetism.",
    back: "• Soft Iron: Magnetises easily, loses magnetism quickly (temporary magnet, used in transformer cores & relays).\n• Steel: Hard to magnetise, retains magnetism for a long time (permanent magnets).",
    category: "Definition",
  },
  {
    id: "fc-4-flemings",
    topicId: "unit-4",
    front: "Distinguish between Fleming's Left-Hand Rule and Right-Hand Rule.",
    back: "• Left-Hand Rule = Motors (Force/Motion, Magnetic Field, Current).\n• Right-Hand Rule = Generators/Induction (Motion, Magnetic Field, Induced Current).\n(Thumb = Motion/Force, First finger = Field, seCond finger = Current).",
    category: "Law",
  },

  // =========================================================================
  // UNIT 5: Nuclear & Atomic Physics
  // =========================================================================
  {
    id: "fc-12",
    topicId: "unit-5",
    front: "Compare Alpha, Beta, and Gamma radiation in terms of ionizing power and penetrating ability.",
    back: "• Alpha (α): Helium nucleus (⁴₂He), charge +2, highest ionizing, lowest penetration (stopped by paper / 5cm air).\n• Beta (β): High-speed electron (⁰₋₁e), charge -1, moderate ionizing, moderate penetration (stopped by 3-5mm aluminium).\n• Gamma (γ): High-frequency EM photon, charge 0, lowest ionizing, highest penetration (reduced by thick lead/concrete).",
    category: "Definition",
  },
  {
    id: "fc-13",
    topicId: "unit-5",
    front: "Define Radioactive Half-Life.",
    back: "The time taken for half the radioactive nuclei in a sample to decay (or the time taken for the activity/count rate to halve).",
    category: "Definition",
  },
  {
    id: "fc-5-fission-fusion",
    topicId: "unit-5",
    front: "Define Nuclear Fission and Nuclear Fusion.",
    back: "• Fission: The splitting of a large, heavy nucleus (e.g. U-235) into two smaller daughter nuclei and neutrons, releasing kinetic energy.\n• Fusion: The joining together of two light nuclei (e.g. Hydrogen isotopes) to form a heavier nucleus (Helium), releasing huge energy.",
    category: "Definition",
  },

  // =========================================================================
  // UNIT 6: Space Physics
  // =========================================================================
  {
    id: "fc-14",
    topicId: "unit-6",
    front: "What is Redshift and what does it prove about the universe?",
    back: "The increase in observed wavelength of light from distant receding galaxies. It proves that galaxies are moving away from each other and the universe is expanding.",
    category: "Definition",
  },
  {
    id: "fc-6-hubble",
    topicId: "unit-6",
    front: "State Hubble's Law and explain how it gives the age of the Universe.",
    back: "Hubble's Law: v = H₀ · d (recessional velocity is directly proportional to distance).\nThe age of the Universe can be estimated as t = 1 / H₀ ≈ 1.4 × 10¹⁰ years (14 billion years).",
    category: "Formula",
  },
  {
    id: "fc-6-lifecycle",
    topicId: "unit-6",
    front: "Describe the life cycle of a star with mass similar to the Sun.",
    back: "Nebula -> Protostar -> Stable Main Sequence Star -> Red Giant -> Planetary Nebula -> White Dwarf -> Black Dwarf.",
    category: "Definition",
  },
];
