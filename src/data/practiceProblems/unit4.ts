import { PracticeProblem } from "../../types";

export const UNIT_4_PRACTICE_PROBLEMS: PracticeProblem[] = [
  // SECTION 4.1: Magnetism & Magnetic Fields
  {
    id: "prob-4.1-1",
    topicId: "4.1",
    title: "4.1 Practice Problem 1: Soft Iron vs Steel in Electromagnets",
    difficulty: "Core",
    marks: 4,
    question:
      "(a) State the difference between a magnetically 'soft' material (like soft iron) and a magnetically 'hard' material (like steel).\n(b) Explain why soft iron is chosen for the core of a scrapyard electromagnet instead of steel.\n(c) Describe two ways to increase the magnetic field strength of an electromagnet.",
    givenData: [
      "Magnetic core materials: Soft iron vs Steel",
      "Electromagnet application in cranes/relays",
    ],
    formulaUsed: "Electromagnet strength factors: Core material, Number of coil turns (N), Current (I)",
    hints: [
      "Soft iron magnetizes and demagnetizes quickly; steel stays permanently magnetized.",
    ],
    stepByStepSolution: [
      "Step 1 (Material difference): Magnetically soft materials (iron) are easily magnetized and lose their magnetism quickly when the external field is removed. Hard magnetic materials (steel) are hard to magnetize but retain their magnetism permanently.",
      "Step 2 (Scrapyard core): Soft iron allows the electromagnet to drop scrap metal instantly when the electrical current is switched off. If steel were used, the scrap metal would remain permanently stuck to the core.",
      "Step 3 (Increasing strength): 1) Increase the current flowing through the coil; 2) Increase the number of turns of wire on the solenoid coil; 3) Insert a soft iron core.",
    ],
    finalAnswer: "(a) Iron loses magnetism readily; steel retains it permanently.\n(b) Iron loses its magnetism immediately when current is switched off, releasing the load.\n(c) Increase current (I) and increase number of turns (N).",
    examinerTips:
      "A classic trap: Never suggest steel for an electromagnet core, as it cannot be switched off!",
  },

  // SECTION 4.2: Current, Voltage & Resistance
  {
    id: "prob-4.2-1",
    topicId: "4.2",
    title: "4.2 Practice Problem 1: Charge, Current, Voltage & Resistance in a Lamp",
    difficulty: "Core",
    marks: 4,
    question:
      "A 12 V car headlight bulb draws a steady electric current of 4.5 A when operated normally for 20 minutes.\n(a) Calculate the total electric charge that flows through the filament in Coulombs.\n(b) Calculate the resistance of the hot filament under these operating conditions.\n(c) Calculate the total electrical energy transformed into heat and light in 20 minutes.",
    givenData: [
      "Voltage, V = 12 V",
      "Current, I = 4.5 A",
      "Time, t = 20 minutes = 20 × 60 s = 1200 s",
    ],
    formulaUsed: "Q = I × t, R = V / I, Energy E = V × I × t = V × Q",
    hints: ["Always convert time in minutes to seconds (1 min = 60 s)."],
    stepByStepSolution: [
      "Step 1: Convert time to seconds: t = 20 × 60 = 1200 s.",
      "Step 2: Calculate charge: Q = I × t = 4.5 A × 1200 s = 5400 C.",
      "Step 3: Calculate resistance: R = V / I = 12 V / 4.5 A = 2.67 Ω.",
      "Step 4: Calculate energy: E = V × I × t = 12 V × 4.5 A × 1200 s = 64,800 J = 64.8 kJ.",
    ],
    finalAnswer: "(a) Charge Q = 5400 C\n(b) Resistance R = 2.67 Ω\n(c) Electrical energy E = 64,800 J (64.8 kJ)",
    examinerTips:
      "Forgetting to multiply minutes by 60 is the most common mathematical slip on electricity papers.",
  },
  {
    id: "prob-4.2-2",
    topicId: "4.2",
    title: "4.2 Practice Problem 2: Resistance of a Conductor Wire",
    difficulty: "Extended",
    marks: 3,
    question:
      "A copper wire of length L and cross-sectional area A has a resistance of 8.0 Ω. Determine the new resistance if:\n(a) The length of the wire is doubled to 2L with unchanged area.\n(b) The diameter of the wire is doubled with unchanged length.",
    givenData: [
      "Original wire: Resistance R = 8.0 Ω",
      "R ∝ Length (L), R ∝ 1 / Area (A)",
      "Area of cylinder = π(d/2)² ∝ d²",
    ],
    formulaUsed: "R ∝ L / A ∝ L / d²",
    hints: ["Doubling diameter quadruples the cross-sectional area (2² = 4)."],
    stepByStepSolution: [
      "Step 1 (Length doubled): Resistance is directly proportional to length. Doubling length doubles resistance: R_new = 8.0 Ω × 2 = 16.0 Ω.",
      "Step 2 (Diameter doubled): Area A = π(d/2)². Doubling diameter increases area by a factor of 2² = 4. Since resistance is inversely proportional to area, resistance is divided by 4: R_new = 8.0 Ω / 4 = 2.0 Ω.",
    ],
    finalAnswer: "(a) New resistance = 16.0 Ω\n(b) New resistance = 2.0 Ω",
    examinerTips:
      "Be careful: Doubling diameter divides resistance by 4, not 2!",
  },

  // SECTION 4.3: Circuit Rules, LDRs, Thermistors & Potential Dividers
  {
    id: "prob-4.3-1",
    topicId: "4.3",
    title: "4.3 Practice Problem 1: Combined Series & Parallel Circuit Resistors",
    difficulty: "Extended",
    marks: 4,
    question:
      "A circuit is connected to a 12.0 V battery of negligible internal resistance. Resistors R₁ = 6.0 Ω and R₂ = 12.0 Ω are connected in parallel with each other. This parallel pair is connected in series with a resistor R₃ = 4.0 Ω.\n(a) Calculate the equivalent resistance of the parallel combination (R₁ and R₂).\n(b) Calculate the total resistance of the entire circuit.\n(c) Calculate the total current leaving the 12.0 V battery.\n(d) Calculate the potential difference across the parallel combination.",
    givenData: [
      "Supply voltage, V_total = 12.0 V",
      "Parallel pair: R₁ = 6.0 Ω, R₂ = 12.0 Ω",
      "Series resistor: R₃ = 4.0 Ω",
    ],
    formulaUsed: "1/R_p = 1/R₁ + 1/R₂, R_total = R_p + R₃, I = V / R_total, V_p = I × R_p",
    hints: ["Combine the parallel pair first, then add the series resistor."],
    stepByStepSolution: [
      "Step 1: Calculate parallel resistance: 1/R_p = 1/6.0 + 1/12.0 = 2/12 + 1/12 = 3/12 = 1/4 => R_p = 4.0 Ω.",
      "Step 2: Total circuit resistance: R_total = R_p + R₃ = 4.0 Ω + 4.0 Ω = 8.0 Ω.",
      "Step 3: Total battery current: I_total = V / R_total = 12.0 V / 8.0 Ω = 1.5 A.",
      "Step 4: Voltage across parallel pair: V_p = I_total × R_p = 1.5 A × 4.0 Ω = 6.0 V.",
    ],
    finalAnswer: "(a) Parallel equivalent R_p = 4.0 Ω\n(b) Total circuit resistance = 8.0 Ω\n(c) Battery current = 1.5 A\n(d) Voltage across parallel section = 6.0 V",
    examinerTips:
      "Notice that the 12 V splits equally (6 V + 6 V) because R_p (4 Ω) equals R₃ (4 Ω).",
  },
  {
    id: "prob-4.3-2",
    topicId: "4.3",
    title: "4.3 Practice Problem 2: Potential Divider with LDR Sensor",
    difficulty: "Challenging",
    marks: 4,
    question:
      "A potential divider circuit consists of a fixed 10.0 kΩ resistor in series with a Light Dependent Resistor (LDR) connected across a 9.0 V DC power supply. An output voltmeter is connected across the fixed resistor.\n(a) In bright sunlight, the LDR resistance is 2.0 kΩ. Calculate the voltage reading on the voltmeter.\n(b) In total darkness, the LDR resistance rises to 80.0 kΩ. Calculate the new voltmeter reading.\n(c) Explain how this circuit can be used to switch on a night security light.",
    givenData: [
      "Supply voltage, V_in = 9.0 V",
      "Fixed resistor, R_fixed = 10.0 kΩ",
      "LDR bright resistance = 2.0 kΩ",
      "LDR dark resistance = 80.0 kΩ",
    ],
    formulaUsed: "Potential Divider: V_out = (R_fixed / (R_fixed + R_LDR)) × V_in",
    hints: ["Since both resistances are in kΩ, you can work directly with kΩ."],
    stepByStepSolution: [
      "Step 1 (Bright light): Total R = 10 kΩ + 2 kΩ = 12 kΩ.\n   V_out = (10 / 12) × 9.0 V = 7.5 V.",
      "Step 2 (Darkness): Total R = 10 kΩ + 80 kΩ = 90 kΩ.\n   V_out = (10 / 90) × 9.0 V = 1.0 V across the fixed resistor (meaning 8.0 V is across the LDR).",
      "Step 3 (Sensor application): In the dark, the resistance and voltage across the LDR become high (8.0 V). This high voltage across the LDR can be fed into the base of a transistor to turn on a relay switch that activates the lamp.",
    ],
    finalAnswer: "(a) Voltmeter reading in bright light = 7.5 V\n(b) Voltmeter reading in darkness = 1.0 V\n(c) High voltage across the LDR in the dark triggers a transistor switch to turn on the lamp.",
    examinerTips:
      "Remember the mnemonic LURD: Light Up, Resistance Down.",
  },

  // SECTION 4.4: Electrical Safety & Domestic Power
  {
    id: "prob-4.4-1",
    topicId: "4.4",
    title: "4.4 Practice Problem 1: Selecting Fuse Ratings & Power",
    difficulty: "Core",
    marks: 4,
    question:
      "An electric heater is rated at 2300 W, 230 V mains supply.\n(a) Calculate the normal operating current of the heater.\n(b) Standard available fuse ratings are 3 A, 5 A, 10 A, and 13 A. State which fuse must be fitted in the plug, giving a clear reason.\n(c) Explain the danger of choosing a 30 A fuse for this appliance.",
    givenData: [
      "Power rating, P = 2300 W",
      "Mains voltage, V = 230 V",
      "Available fuses: 3 A, 5 A, 10 A, 13 A",
    ],
    formulaUsed: "I = P / V",
    hints: ["Choose the next standard fuse rating ABOVE the operating current."],
    stepByStepSolution: [
      "Step 1: Calculate normal current: I = P / V = 2300 W / 230 V = 10.0 A.",
      "Step 2: Choose the 13 A fuse. A 10 A or 5 A fuse would blow under normal operation (or close to threshold), while a 13 A fuse allows the 10 A current to flow safely while melting if a fault occurs.",
      "Step 3: A 30 A fuse would allow an excessively high current (e.g. 25 A during a fault) to flow through the cable without melting. This would cause the wires to overheat and start an electrical fire.",
    ],
    finalAnswer: "(a) Operating current = 10.0 A\n(b) 13 A fuse, because it is the smallest rating that exceeds the normal 10 A current.\n(c) Cable could overheat and cause a fire before the 30 A fuse blows.",
    examinerTips:
      "Always pick the closest fuse rating ABOVE the calculated operating current.",
  },
  {
    id: "prob-4.4-2",
    topicId: "4.4",
    title: "4.4 Practice Problem 2: Earthing & Double Insulation",
    difficulty: "Extended",
    marks: 4,
    question:
      "(a) Explain how the combination of an Earth wire and a fuse prevents a user from getting an electric shock if a fault occurs in a metal-cased washing machine.\n(b) A hairdryer has a plastic outer casing and a 2-core cable with only live and neutral wires. State what this safety design is called and explain why an earth wire is not needed.",
    givenData: [
      "Metal-cased appliance with 3-pin plug",
      "Plastic-cased appliance with 2-pin plug",
    ],
    formulaUsed: "Earthing mechanism: Low resistance path -> surge current -> fuse melts",
    hints: ["Earth wire provides a path of very low resistance to ground."],
    stepByStepSolution: [
      "Step 1: If a loose live wire touches the metal casing, the earth wire provides a very low-resistance path to ground.",
      "Step 2: A massive surge of electric current flows down the earth wire, exceeding the fuse rating.",
      "Step 3: The fuse wire in the live cable melts and cuts off the electricity supply, making the casing safe before anyone touches it.",
      "Step 4: The hairdryer has Double Insulation. Because the entire outer case is made of non-conducting plastic (insulator), the user cannot touch any internal live electrical parts, eliminating the risk of shock without needing an earth wire.",
    ],
    finalAnswer: "(a) Fault makes live wire touch case -> current surges safely down earth wire -> fuse melts -> circuit disconnected.\n(b) Double insulation; plastic casing cannot conduct electricity to the user.",
    examinerTips:
      "Mark scheme requires 3 points: 1) Low resistance path; 2) Large surge current; 3) Fuse melts / circuit broken.",
  },

  // SECTION 4.5: Electromagnetic Effects: Motors, Induction & Transformers
  {
    id: "prob-4.5-1",
    topicId: "4.5",
    title: "4.5 Practice Problem 1: Step-Up Transformer & Grid Power Transmission",
    difficulty: "Core",
    marks: 4,
    question:
      "A step-up transformer at a power station has 400 turns on its primary coil and 8000 turns on its secondary coil. The primary input voltage is 12,500 V (12.5 kV) AC.\n(a) Calculate the secondary output voltage delivered to the high-voltage transmission lines.\n(b) The primary current is 80.0 A. Assuming the transformer is 100% efficient, calculate the secondary transmission current.\n(c) Explain why transmitting electricity at high voltage reduces energy losses in long-distance cables.",
    givenData: [
      "Primary turns, N_p = 400",
      "Secondary turns, N_s = 8000",
      "Primary voltage, V_p = 12,500 V",
      "Primary current, I_p = 80.0 A",
    ],
    formulaUsed: "V_p / V_s = N_p / N_s => V_s = V_p × (N_s / N_p), V_p × I_p = V_s × I_s => I_s = (V_p × I_p) / V_s, P_loss = I² R",
    hints: ["When voltage steps up, current steps down in equal proportion for ideal transformers."],
    stepByStepSolution: [
      "Step 1: Calculate secondary voltage: V_s = V_p × (N_s / N_p) = 12,500 V × (8000 / 400) = 12,500 × 20 = 250,000 V (250 kV).",
      "Step 2: Calculate secondary current (Power In = Power Out): 12,500 V × 80.0 A = 250,000 V × I_s => I_s = 1,000,000 / 250,000 = 4.0 A.",
      "Step 3: Power dissipated as heat in the resistance of cables is P_loss = I²R. Because stepping up voltage reduces current from 80 A to 4 A (20 times smaller), power loss is reduced by a factor of 20² = 400 times!",
    ],
    finalAnswer: "(a) Secondary voltage = 250,000 V (250 kV)\n(b) Secondary current = 4.0 A\n(c) High voltage reduces current; since P_loss = I²R, lower current drastically reduces heat energy loss in cables.",
    examinerTips:
      "Always quote the formula P_loss = I²R when explaining the purpose of national grid transformers.",
  },
  {
    id: "prob-4.5-2",
    topicId: "4.5",
    title: "4.5 Practice Problem 2: DC Motor Split-Ring Commutator Function",
    difficulty: "Extended",
    marks: 3,
    question:
      "(a) State the role of the split-ring commutator in a simple direct current (DC) electric motor.\n(b) State what would happen to the coil if the split-ring commutator were replaced with simple fixed connections.\n(c) State two modifications that would increase the turning speed (torque) of the motor.",
    givenData: [
      "DC Motor with permanent magnetic field and spinning coil",
    ],
    formulaUsed: "Fleming's Left-Hand Rule (Motor effect)",
    hints: ["The commutator reverses the current every 180° rotation."],
    stepByStepSolution: [
      "Step 1: The split-ring commutator reverses the direction of current flowing through the coil every half-turn (every 180°).",
      "Step 2: This ensures that the upward force remains on one side and downward force on the other, allowing continuous rotation in one direction. Without it, the coil would simply oscillate back and forth and stop at the vertical position.",
      "Step 3: To increase motor turning torque: 1) Increase current in the coil; 2) Use stronger permanent magnets; 3) Increase number of turns of wire on the coil; 4) Wrap the coil around a soft iron core.",
    ],
    finalAnswer: "(a) Reverses the current every half-turn to keep the coil rotating continuously in the same direction.\n(b) The coil would stop rotating and stick in the vertical position.\n(c) Increase current, increase number of turns, and use stronger magnets.",
    examinerTips:
      "DC motor = Split-ring commutator (reverses current). AC generator = Slip rings (preserves AC waveform).",
  },
];
