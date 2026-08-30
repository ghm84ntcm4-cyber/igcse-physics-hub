import { PracticeProblem } from "../../types";

export const UNIT_6_PRACTICE_PROBLEMS: PracticeProblem[] = [
  // SECTION 6.1: The Earth & The Solar System
  {
    id: "prob-6.1-1",
    topicId: "6.1",
    title: "6.1 Practice Problem 1: Orbital Speed of the Earth & Mars",
    difficulty: "Core",
    marks: 4,
    question:
      "The Earth orbits the Sun in an approximately circular path at an average radius of r = 1.5 × 10⁸ km (1.5 × 10¹¹ m). The orbital period of the Earth is 1 year (365 days = 3.15 × 10⁷ s).\n(a) Calculate the total orbital distance (circumference) travelled by Earth in one year.\n(b) Calculate Earth's average orbital speed in m/s and in km/s.\n(c) Mars has an orbital radius of 2.3 × 10¹¹ m. Predict whether Mars orbits faster or slower than Earth, giving a gravitational reason.",
    givenData: [
      "Orbital radius, r = 1.5 × 10¹¹ m",
      "Orbital period, T = 3.15 × 10⁷ s",
      "Mars orbital radius = 2.3 × 10¹¹ m",
    ],
    formulaUsed: "Circumference C = 2 × π × r, Orbital Speed v = (2 × π × r) / T",
    hints: ["Use 2πr for the circular orbit path."],
    stepByStepSolution: [
      "Step 1: Calculate circumference: C = 2 × π × r = 2 × 3.1416 × (1.5 × 10¹¹ m) = 9.42 × 10¹¹ m.",
      "Step 2: Calculate orbital speed: v = C / T = (9.42 × 10¹¹ m) / (3.15 × 10⁷ s) = 29,900 m/s ≈ 29.9 km/s (approx 30 km/s).",
      "Step 3: Mars is further from the Sun, so it experiences a weaker gravitational pull from the Sun. Therefore, it travels slower (lower orbital speed, approx 24 km/s) and takes longer to complete an orbit.",
    ],
    finalAnswer: "(a) Circumference = 9.42 × 10¹¹ m\n(b) Orbital speed = 29.9 km/s (29,900 m/s)\n(c) Mars travels slower because the gravitational pull from the Sun is weaker at greater distances.",
    examinerTips:
      "Planets further from the Sun always have lower orbital speeds and longer orbital periods.",
  },
  {
    id: "prob-6.1-2",
    topicId: "6.1",
    title: "6.1 Practice Problem 2: Elliptical Orbit of a Comet & Conservation of Energy",
    difficulty: "Extended",
    marks: 3,
    question:
      "A comet moves around the Sun in a highly elongated elliptical orbit.\n(a) State at which point in its orbit (closest to Sun / perihelion or furthest / aphelion) the comet travels at its maximum speed.\n(b) Explain this change in speed in terms of gravitational potential energy (GPE) and kinetic energy (KE).\n(c) State the direction in which the comet's gas and dust tail points as it sweeps past the Sun.",
    givenData: [
      "Elliptical orbit of comet around Sun",
    ],
    formulaUsed: "Conservation of Energy: Total Mechanical Energy = GPE + KE = Constant",
    hints: [
      "As a comet gets closer to the Sun, it loses GPE and gains KE. Solar radiation blows the tail away from the Sun.",
    ],
    stepByStepSolution: [
      "Step 1: The comet moves fastest at perihelion (the point closest to the Sun).",
      "Step 2: As the comet approaches the Sun, gravitational force pulls it inwards, converting Gravitational Potential Energy into Kinetic Energy (KE = ½mv²). At the closest approach, GPE is at a minimum and KE is at its maximum, producing highest speed.",
      "Step 3: The comet's tail always points directly AWAY from the Sun, pushed outwards by the solar wind and radiation pressure.",
    ],
    finalAnswer: "(a) Fastest when closest to the Sun (perihelion).\n(b) GPE is converted into Kinetic Energy as it gets closer to the Sun.\n(c) Points directly away from the Sun.",
    examinerTips:
      "Common error: Students think the tail trails behind the comet like smoke. The tail always points AWAY from the Sun!",
  },

  // SECTION 6.2: Stars, Galaxies & The Universe
  {
    id: "prob-6.2-1",
    topicId: "6.2",
    title: "6.2 Practice Problem 1: Redshift, Hubble's Law & Speed of Distant Galaxies",
    difficulty: "Core",
    marks: 4,
    question:
      "Astronomers observe light from a distant galaxy. The characteristic absorption spectrum of hydrogen is shifted towards longer (redder) wavelengths (redshift). The galaxy is estimated to be at a distance of d = 8.0 × 10²⁴ m from Earth. The Hubble constant H₀ is approximately 2.2 × 10⁻¹⁸ s⁻¹.\n(a) What does galactic redshift tell us about the motion of this galaxy?\n(b) State Hubble's Law as an equation.\n(c) Calculate the recession speed v of this galaxy in m/s and km/s.\n(d) Explain how redshift provides crucial evidence for the Big Bang Theory.",
    givenData: [
      "Distance, d = 8.0 × 10²⁴ m",
      "Hubble constant, H₀ = 2.2 × 10⁻¹⁸ s⁻¹",
    ],
    formulaUsed: "Hubble's Law: v = H₀ × d",
    hints: ["v = H₀ × d gives recession speed directly in m/s."],
    stepByStepSolution: [
      "Step 1: Redshift means the galaxy is moving away from us (receding) due to the expansion of space.",
      "Step 2: Hubble's Law is: v = H₀ × d.",
      "Step 3: Calculate recession speed: v = 2.2 × 10⁻¹⁸ s⁻¹ × (8.0 × 10²⁴ m) = 1.76 × 10⁷ m/s (17,600 km/s).",
      "Step 4: Evidence for Big Bang: Because nearly all distant galaxies show redshift, and more distant galaxies are moving away faster (v ∝ d), this proves that space itself is expanding uniformly in all directions. Tracing this expansion backwards in time leads to a single, dense, hot point of origin (the Big Bang).",
    ],
    finalAnswer: "(a) The galaxy is moving away from Earth (receding).\n(b) v = H₀ × d\n(c) Recession speed = 1.76 × 10⁷ m/s (17,600 km/s)\n(d) Shows the universe is expanding; rewinding expansion indicates a single origin point.",
    examinerTips:
      "Galaxies are not moving *through* static space; space itself is stretching and carrying galaxies apart.",
  },
  {
    id: "prob-6.2-2",
    topicId: "6.2",
    title: "6.2 Practice Problem 2: Stellar Evolution of Average vs Massive Stars",
    difficulty: "Extended",
    marks: 4,
    question:
      "(a) Describe the equilibrium of forces that keeps our Sun stable on the Main Sequence.\n(b) Describe the sequence of stages in the death of a star with mass similar to our Sun.\n(c) Describe how the final stages differ for a very massive star (mass > 8 solar masses).",
    givenData: [
      "Main sequence star (e.g. Sun)",
      "Low mass path vs High mass path",
    ],
    formulaUsed: "Stellar equilibrium: Inward Gravitational Force = Outward Radiation Pressure from Fusion",
    hints: [
      "Sun -> Red Giant -> Planetary Nebula -> White Dwarf.",
      "Massive Star -> Red Supergiant -> Supernova -> Neutron Star or Black Hole.",
    ],
    stepByStepSolution: [
      "Step 1 (Main sequence stability): Inward gravitational pull attempting to collapse the star is perfectly balanced by the outward radiation and thermal pressure generated by hydrogen nuclear fusion in the core.",
      "Step 2 (Sun-like star lifecycle): When hydrogen runs out in the core:\n   1. Core contracts and heats up; outer layers expand and cool to form a Red Giant.\n   2. Helium fuses into carbon and oxygen.\n   3. Outer gas layers are ejected into space as a Planetary Nebula.\n   4. The dense, hot white-hot core is left behind as a White Dwarf, which eventually cools to a Black Dwarf.",
      "Step 3 (Massive star lifecycle): Massive stars expand into Red Supergiants, then violently explode in a Supernova (producing elements heavier than iron). The remaining core collapses into an ultra-dense Neutron Star, or a Black Hole if extremely massive.",
    ],
    finalAnswer: "(a) Inward gravity balances outward radiation pressure from fusion.\n(b) Main Sequence -> Red Giant -> Planetary Nebula -> White Dwarf -> Black Dwarf.\n(c) Massive star -> Red Supergiant -> Supernova -> Neutron Star / Black Hole.",
    examinerTips:
      "Examiners often ask for the two forces in equilibrium: 'Inward gravity' and 'Outward radiation pressure'.",
  },
];
