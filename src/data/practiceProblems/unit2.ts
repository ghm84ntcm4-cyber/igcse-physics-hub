import { PracticeProblem } from "../../types";

export const UNIT_2_PRACTICE_PROBLEMS: PracticeProblem[] = [
  // SECTION 2.1: Kinetic Particle Model & Gas Laws
  {
    id: "prob-2.1-1",
    topicId: "2.1",
    title: "2.1 Practice Problem 1: Boyle's Law & Gas Pressure in a Syringe",
    difficulty: "Core",
    marks: 3,
    question:
      "A gas cylinder with a movable piston traps 250 cm³ of air at standard atmospheric pressure of 100 kPa (1.0 × 10⁵ Pa). Without changing the temperature, the piston is pushed slowly until the gas is compressed to a new volume of 100 cm³.\n(a) Name the gas law relating pressure and volume at constant temperature.\n(b) Calculate the new pressure of the compressed gas.\n(c) Explain in terms of particles why compressing the gas increases its pressure.",
    givenData: [
      "Initial volume, V₁ = 250 cm³",
      "Initial pressure, p₁ = 100 kPa",
      "Final volume, V₂ = 100 cm³",
      "Temperature T = constant",
    ],
    formulaUsed: "Boyle's Law: p₁ V₁ = p₂ V₂ => p₂ = (p₁ V₁) / V₂",
    hints: ["Since units of volume match on both sides (cm³), you can keep volume in cm³."],
    stepByStepSolution: [
      "Step 1: The law is Boyle's Law (or pressure-volume law for an ideal gas).",
      "Step 2: Apply Boyle's Law: p₁ V₁ = p₂ V₂.",
      "   100 kPa × 250 cm³ = p₂ × 100 cm³.",
      "   25,000 = 100 p₂.",
      "   p₂ = 25,000 / 100 = 250 kPa (or 2.5 × 10⁵ Pa).",
      "Step 3: Particle explanation: In a smaller volume, gas molecules are packed closer together. The molecules collide more frequently with the inner walls of the container per second, exerting a larger total force per unit area.",
    ],
    finalAnswer: "(a) Boyle's Law\n(b) New pressure p₂ = 250 kPa (2.5 × 10⁵ Pa)\n(c) Molecules collide more frequently with the container walls.",
    examinerTips:
      "Always state 'more frequent collisions with walls per second' rather than just 'more collisions'.",
  },
  {
    id: "prob-2.1-2",
    topicId: "2.1",
    title: "2.1 Practice Problem 2: Evaporative Cooling Mechanism",
    difficulty: "Extended",
    marks: 4,
    question:
      "A drop of ethanol at room temperature (20 °C) is placed onto the back of a student's hand. Within seconds, the liquid evaporates and the student feels a cold sensation on their skin.\n(a) Explain in terms of molecular kinetic energy why evaporation causes cooling.\n(b) State two factors that would increase the rate of evaporation of the liquid.",
    givenData: [
      "Ethanol evaporating at 20 °C (below boiling point of 78 °C)",
      "Skin feels noticeably cold",
    ],
    formulaUsed: "Average Kinetic Energy ∝ Absolute Temperature",
    hints: [
      "Particles in a liquid have a distribution of kinetic energies; only the fastest can escape attractive intermolecular bonds.",
    ],
    stepByStepSolution: [
      "Step 1 (Escape of high-energy molecules): In the liquid, particles have a range of speeds. The molecules with the highest kinetic energy near the surface have enough energy to overcome intermolecular bonds and escape into the gas phase.",
      "Step 2 (Drop in average KE): Because the fastest particles have left, the average kinetic energy of the remaining liquid molecules decreases.",
      "Step 3 (Temperature drop): Since temperature is directly proportional to average kinetic energy of particles, the temperature of the liquid falls.",
      "Step 4 (Conduction from skin): Thermal energy flows from the warmer hand into the cooler liquid by conduction, causing the skin to feel cold.",
      "Step 5 (Factors increasing rate): 1) Increasing surface area; 2) Increasing temperature; 3) Increasing air movement/draft over the surface; 4) Decreasing atmospheric humidity.",
    ],
    finalAnswer: "(a) Energetic molecules escape surface -> average KE of remaining liquid drops -> temperature decreases -> conducts heat from skin.\n(b) Higher surface area and higher airflow / wind.",
    examinerTips:
      "Full 3 marks require: 1) Most energetic particles escape; 2) Average KE of remaining molecules decreases; 3) Temperature is proportional to average KE.",
  },

  // SECTION 2.2: Thermal Properties, SHC & Latent Heat
  {
    id: "prob-2.2-1",
    topicId: "2.2",
    title: "2.2 Practice Problem 1: Specific Heat Capacity of Water in a Kettle",
    difficulty: "Core",
    marks: 4,
    question:
      "An electric kettle rated at 2200 W contains 1.5 kg of water at an initial temperature of 20 °C. The specific heat capacity of water is 4200 J/(kg·°C).\n(a) Calculate the thermal energy required to heat the water to its boiling point of 100 °C.\n(b) Calculate the minimum time required for the kettle to boil this water, assuming no heat is lost to the surroundings.",
    givenData: [
      "Power rating, P = 2200 W (J/s)",
      "Mass of water, m = 1.5 kg",
      "Initial temperature T₁ = 20 °C, Final temperature T₂ = 100 °C",
      "c_water = 4200 J/(kg·°C)",
    ],
    formulaUsed: "ΔT = T₂ - T₁, Q = m × c × ΔT, Time t = Q / P",
    hints: ["Temperature rise ΔT = 100 - 20 = 80 °C."],
    stepByStepSolution: [
      "Step 1: Calculate temperature change: ΔT = 100 °C - 20 °C = 80 °C.",
      "Step 2: Calculate thermal energy required: Q = m × c × ΔT = 1.5 kg × 4200 J/(kg·°C) × 80 °C.",
      "   Q = 504,000 J = 504 kJ.",
      "Step 3: Calculate heating time: Energy = Power × time => t = Q / P.",
      "   t = 504,000 J / 2200 W = 229.1 s ≈ 229 s (3.8 minutes).",
    ],
    finalAnswer: "(a) Thermal energy required = 504,000 J (504 kJ)\n(b) Time taken = 229 s (approx 3.8 minutes)",
    examinerTips:
      "In real life, the time is slightly longer because some thermal energy is lost to the kettle walls and surrounding air.",
  },
  {
    id: "prob-2.2-2",
    topicId: "2.2",
    title: "2.2 Practice Problem 2: Melting Ice & Latent Heat of Fusion",
    difficulty: "Extended",
    marks: 4,
    question:
      "A warm drink contains 0.25 kg of juice at 24 °C. To cool the drink, a student adds ice cubes at 0 °C until the whole mixture reaches an equilibrium temperature of 0 °C. Specific latent heat of fusion of ice L_f = 334,000 J/kg; specific heat capacity of juice c = 4000 J/(kg·°C).\n(a) Calculate the heat energy lost by the juice in cooling from 24 °C to 0 °C.\n(b) Calculate the mass of ice that melts to 0 °C water.",
    givenData: [
      "Mass of juice, m_juice = 0.25 kg",
      "Initial juice temp = 24 °C, Final temp = 0 °C",
      "c_juice = 4000 J/(kg·°C)",
      "L_f of ice = 334,000 J/kg",
    ],
    formulaUsed: "Q_lost = m_juice × c_juice × ΔT, Q_gain = m_ice × L_f, Q_lost = Q_gain",
    hints: [
      "The ice is already at 0 °C, so it only requires latent heat Q = mL to melt into water at 0 °C.",
    ],
    stepByStepSolution: [
      "Step 1: Calculate heat energy lost by juice: Q_lost = m × c × ΔT = 0.25 kg × 4000 J/(kg·°C) × 24 °C = 24,000 J.",
      "Step 2: Since heat lost = heat gained (assuming no heat transfer with surroundings): Q_gain = 24,000 J.",
      "Step 3: Calculate mass of ice melted: Q = m_ice × L_f => m_ice = Q / L_f.",
      "   m_ice = 24,000 J / 334,000 J/kg = 0.07186 kg ≈ 0.072 kg (72 g).",
    ],
    finalAnswer: "(a) Thermal energy lost by juice = 24,000 J (24 kJ)\n(b) Mass of ice melted = 0.072 kg (72 g)",
    examinerTips:
      "Notice that during melting at 0 °C, temperature remains constant because energy is used to break intermolecular bonds.",
  },

  // SECTION 2.3: Thermal Energy Transfer
  {
    id: "prob-2.3-1",
    topicId: "2.3",
    title: "2.3 Practice Problem 1: Convection Current in a Room Radiator",
    difficulty: "Core",
    marks: 4,
    question:
      "A room is heated by a hot water radiator positioned on the floor next to one wall.\n(a) Explain in four sequential steps how a convection current circulates thermal energy throughout the entire room.\n(b) Explain why installing the radiator high up near the ceiling would be inefficient for heating the floor level.",
    givenData: [
      "Radiator on floor emitting heat to adjacent air",
      "Air density changes with temperature",
    ],
    formulaUsed: "Density = Mass / Volume (ρ = m/V), Buoyancy in fluids",
    hints: ["Warm air expands, becomes less dense, and floats upwards."],
    stepByStepSolution: [
      "Step 1: Air in contact with the radiator is heated by conduction.",
      "Step 2: As air temperature increases, air molecules vibrate faster and push further apart, so the air expands.",
      "Step 3: Expansion causes the density of the warm air to decrease. The warm, less dense air rises towards the ceiling.",
      "Step 4: Cooler, denser air from across the room sinks downwards to take the place of the rising warm air, establishing a continuous convection current.",
      "Step 5 (Ceiling radiator): If placed at ceiling level, warm air is already at the top and remains trapped near the ceiling because it is less dense; cooler air near the floor would not be circulated effectively.",
    ],
    finalAnswer: "(a) Air heats -> expands -> density decreases -> rises -> cool dense air sinks to replace it.\n(b) Warm less-dense air stays trapped near the ceiling, leaving the floor cold.",
    examinerTips:
      "Never write 'heat rises' (which loses marks). Always write 'warm, less dense air rises'.",
  },
  {
    id: "prob-2.3-2",
    topicId: "2.3",
    title: "2.3 Practice Problem 2: Thermal Radiation & Leslie Cube Experiment",
    difficulty: "Extended",
    marks: 3,
    question:
      "A Leslie cube with four different outer vertical surfaces (matte black, dull dark grey, shiny white, polished silver) is filled with boiling water at 100 °C. An infrared radiation detector is placed at equal distances (15 cm) from each face.\n(a) State which surface will produce the highest reading on the infrared detector.\n(b) State which surface is the poorest emitter of infrared radiation.\n(c) Explain why solar water heating panels are painted matte black rather than shiny silver.",
    givenData: [
      "Leslie cube at 100 °C",
      "Faces: Matte black, dull grey, shiny white, polished silver",
      "Detector distance = 15 cm (constant control variable)",
    ],
    formulaUsed: "Surface emission & absorption properties of EM radiation",
    hints: [
      "Matte black surfaces are the best emitters and best absorbers of radiation; shiny silver is the best reflector.",
    ],
    stepByStepSolution: [
      "Step 1: Matte black surfaces are the most effective emitters of infrared radiation, so the detector will give the highest reading facing the matte black surface.",
      "Step 2: Polished silver (or shiny metallic) is the poorest emitter (and best reflector) of infrared radiation.",
      "Step 3: Solar panels are painted matte black because matte black is the best absorber of solar thermal radiation, maximizing heat transferred to water pipes inside.",
    ],
    finalAnswer: "(a) Matte black surface\n(b) Polished silver surface\n(c) Matte black is the best absorber of infrared radiation, maximizing heat energy absorbed.",
    examinerTips:
      "Remember: Good absorbers are also good emitters! Shiny surfaces reflect radiation.",
  },
];
