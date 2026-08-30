import { PracticeProblem } from "../../types";

export const UNIT_3_PRACTICE_PROBLEMS: PracticeProblem[] = [
  // SECTION 3.1: General Wave Properties
  {
    id: "prob-3.1-1",
    topicId: "3.1",
    title: "3.1 Practice Problem 1: Wave Equation & Refraction in Water Waves",
    difficulty: "Core",
    marks: 4,
    question:
      "A ripple tank generator creates water waves with a frequency of 12 Hz. In the deep section of the tank, the wavelength is measured to be 0.050 m (5.0 cm). The waves then travel into a shallow section where their wave speed drops to 0.42 m/s.\n(a) Calculate the speed of the water waves in the deep section.\n(b) State the frequency of the waves in the shallow section.\n(c) Calculate the wavelength of the waves in the shallow section.",
    givenData: [
      "Frequency, f = 12 Hz",
      "Deep water wavelength, λ_deep = 0.050 m",
      "Shallow water wave speed, v_shallow = 0.42 m/s",
    ],
    formulaUsed: "Wave equation: v = f × λ => λ = v / f",
    hints: [
      "Wave frequency is set by the vibrating motor and NEVER changes when passing between media!",
    ],
    stepByStepSolution: [
      "Step 1: Calculate deep water speed: v_deep = f × λ_deep = 12 Hz × 0.050 m = 0.60 m/s.",
      "Step 2: Frequency remains unchanged when crossing into shallow water: f = 12 Hz.",
      "Step 3: Calculate shallow wavelength: λ_shallow = v_shallow / f = 0.42 m/s / 12 Hz = 0.035 m (3.5 cm).",
    ],
    finalAnswer: "(a) Speed in deep water = 0.60 m/s\n(b) Frequency in shallow water = 12 Hz (constant)\n(c) Wavelength in shallow water = 0.035 m (3.5 cm)",
    examinerTips:
      "One of the most heavily tested rules: When a wave refracts into a slower medium, speed decreases and wavelength decreases, but FREQUENCY IS CONSTANT.",
  },
  {
    id: "prob-3.1-2",
    topicId: "3.1",
    title: "3.1 Practice Problem 2: Wave Diffraction Through Gaps",
    difficulty: "Extended",
    marks: 3,
    question:
      "Water waves of wavelength λ = 4.0 cm approach a barrier with a gap.\n(a) Describe the wave pattern formed on the other side when the gap width is 4.0 cm.\n(b) Describe how the pattern changes when the gap width is widened to 25.0 cm.\n(c) State what is meant by the term 'diffraction'.",
    givenData: [
      "Wavelength λ = 4.0 cm",
      "Case 1: Gap width w₁ = 4.0 cm (w ≈ λ)",
      "Case 2: Gap width w₂ = 25.0 cm (w >> λ)",
    ],
    formulaUsed: "Diffraction condition: Maximum spreading occurs when gap size ≈ wavelength (w ≤ λ)",
    hints: ["When gap ≈ λ, waves spread out as semicircular wavefronts."],
    stepByStepSolution: [
      "Step 1: For gap width 4.0 cm (w = λ), maximum diffraction occurs. The waves spread out into circular/semicircular wavefronts radiating in all directions behind the barrier.",
      "Step 2: For gap width 25.0 cm (w >> λ), very little diffraction occurs. The waves pass straight through with minimal spreading only at the outer edges, creating straight wavefronts with a distinct shadow zone.",
      "Step 3: Diffraction is the spreading out of waves as they pass through a gap or around the edge of an obstacle.",
    ],
    finalAnswer: "(a) Semicircular, widely spread wavefronts.\n(b) Straight wavefronts passing through with slight curving only at the edges.\n(c) The spreading of waves as they pass through a gap or past an edge.",
    examinerTips:
      "When drawing diffraction diagrams, make sure the wavelength (distance between crests) remains EXACTLY the same before and after the gap!",
  },

  // SECTION 3.2: Light: Reflection, Refraction & Lenses
  {
    id: "prob-3.2-1",
    topicId: "3.2",
    title: "3.2 Practice Problem 1: Snell's Law & Refractive Index",
    difficulty: "Core",
    marks: 4,
    question:
      "A ray of monochromatic yellow light in air enters a rectangular glass block at an angle of incidence of 45.0° to the normal. The angle of refraction inside the glass is measured to be 28.0°.\n(a) Calculate the refractive index n of the glass.\n(b) Calculate the speed of light inside the glass block (speed of light in air c = 3.0 × 10⁸ m/s).\n(c) Calculate the critical angle c for the glass-air boundary.",
    givenData: [
      "Angle of incidence, i = 45.0°",
      "Angle of refraction, r = 28.0°",
      "Speed of light in air, c = 3.0 × 10⁸ m/s",
    ],
    formulaUsed: "n = sin(i) / sin(r), v = c / n, sin(c) = 1 / n",
    hints: ["Make sure your scientific calculator is set to DEGREES mode."],
    stepByStepSolution: [
      "Step 1: Calculate refractive index: n = sin(45.0°) / sin(28.0°) = 0.7071 / 0.4695 = 1.506 ≈ 1.51.",
      "Step 2: Calculate speed in glass: v = c / n = (3.0 × 10⁸ m/s) / 1.506 = 1.99 × 10⁸ m/s (or 2.0 × 10⁸ m/s).",
      "Step 3: Calculate critical angle: sin(c) = 1 / n = 1 / 1.506 = 0.6640 => c = arcsin(0.6640) = 41.6° (or 42°).",
    ],
    finalAnswer: "(a) Refractive index n = 1.51\n(b) Speed of light in glass = 1.99 × 10⁸ m/s\n(c) Critical angle = 41.6°",
    examinerTips:
      "Refractive index has no units (dimensionless). Always ensure n is greater than 1.0 for glass/water.",
  },
  {
    id: "prob-3.2-2",
    topicId: "3.2",
    title: "3.2 Practice Problem 2: Converging Convex Lens & Image Formation",
    difficulty: "Extended",
    marks: 4,
    question:
      "A thin converging lens has a focal length f = 15.0 cm. An illuminated object of height 4.0 cm is placed 45.0 cm in front of the lens (u = 3f).\n(a) State three nature characteristics of the image formed (Real/Virtual, Inverted/Upright, Magnified/Diminished).\n(b) State where the image is located relative to the focal length on the opposite side.\n(c) An object is now moved very close to the lens at distance u = 8.0 cm (u < f). State the nature and use of the image formed in this position.",
    givenData: [
      "Focal length, f = 15.0 cm",
      "Position 1: u = 45.0 cm (u > 2f)",
      "Position 2: u = 8.0 cm (u < f)",
    ],
    formulaUsed: "Convex lens rules: u > 2f => Real, Inverted, Diminished; u < f => Virtual, Upright, Magnified",
    hints: ["When u > 2f, image is between f and 2f on the opposite side."],
    stepByStepSolution: [
      "Step 1: Since object distance u = 45 cm > 2f (30 cm), the image is:\n   • Real (can be projected on a screen)\n   • Inverted (upside down)\n   • Diminished (smaller than 4.0 cm).",
      "Step 2: The image is formed between f (15 cm) and 2f (30 cm) on the opposite side of the lens (camera/eye configuration).",
      "Step 3: At u = 8 cm (u < f), the rays diverge after the lens. When traced backward with dashed lines, they meet on the same side as the object, forming a Virtual, Upright, and Magnified image (acting as a Magnifying Glass).",
    ],
    finalAnswer: "(a) Real, Inverted, and Diminished.\n(b) Located between f and 2f on the opposite side.\n(c) Virtual, Upright, and Magnified (Used as a Magnifying Glass).",
    examinerTips:
      "Remember: Real images are always inverted; Virtual images in single-lens systems are always upright.",
  },

  // SECTION 3.3: Electromagnetic Spectrum
  {
    id: "prob-3.3-1",
    topicId: "3.3",
    title: "3.3 Practice Problem 1: EM Wave Speed, Frequency & Wavelength",
    difficulty: "Core",
    marks: 3,
    question:
      "A radio station broadcasts FM signals at a frequency of 100 MHz (1.0 × 10⁸ Hz). In space, all electromagnetic waves travel at the speed of light c = 3.0 × 10⁸ m/s.\n(a) Calculate the wavelength of these radio waves in meters.\n(b) A gamma ray photon has a wavelength of 1.0 × 10⁻¹² m. Compare the speed of gamma rays in a vacuum to the speed of the radio waves.\n(c) Calculate the frequency of the gamma rays.",
    givenData: [
      "Radio frequency f = 100 MHz = 1.0 × 10⁸ Hz",
      "EM wave speed c = 3.0 × 10⁸ m/s",
      "Gamma wavelength λ_gamma = 1.0 × 10⁻¹² m",
    ],
    formulaUsed: "c = f × λ => λ = c / f, f = c / λ",
    hints: ["All electromagnetic waves travel at exactly the same speed in a vacuum."],
    stepByStepSolution: [
      "Step 1: Calculate radio wavelength: λ = c / f = (3.0 × 10⁸ m/s) / (1.0 × 10⁸ Hz) = 3.0 m.",
      "Step 2: All EM waves travel at the exact same speed in a vacuum (3.0 × 10⁸ m/s), so the speed of gamma rays is identical to radio waves.",
      "Step 3: Calculate gamma ray frequency: f = c / λ = (3.0 × 10⁸ m/s) / (1.0 × 10⁻¹² m) = 3.0 × 10²⁰ Hz.",
    ],
    finalAnswer: "(a) Radio wavelength = 3.0 m\n(b) Both travel at the same speed (3.0 × 10⁸ m/s)\n(c) Gamma frequency = 3.0 × 10²⁰ Hz",
    examinerTips:
      "Examiners often ask if higher energy waves travel faster. The speed in vacuum is CONSTANT for all EM waves!",
  },
  {
    id: "prob-3.3-2",
    topicId: "3.3",
    title: "3.3 Practice Problem 2: EM Hazards & Ionizing Radiation",
    difficulty: "Extended",
    marks: 4,
    question:
      "(a) State which three regions of the electromagnetic spectrum are ionizing radiation.\n(b) Explain why ionizing radiation poses a severe biological hazard to human body cells.\n(c) State one safe practical medical application of X-rays and one of Gamma rays.",
    givenData: [
      "EM spectrum wavebands",
      "Ionizing threshold: High frequency waves",
    ],
    formulaUsed: "Ionization: Removing electrons from atoms creating ions and free radicals",
    hints: ["Ultraviolet (high-end), X-rays, and Gamma rays have high photon energy."],
    stepByStepSolution: [
      "Step 1: The ionizing regions are High-energy Ultraviolet (UV), X-rays, and Gamma rays.",
      "Step 2: Ionizing radiation has enough energy to knock electrons out of living atoms and molecules. This damages cellular DNA, causing mutations that can lead to cancerous tumors and cell death.",
      "Step 3: Medical applications:\n   • X-rays: Bone fracture diagnosis / radiography, CT scanning.\n   • Gamma rays: Radiotherapy to target and destroy cancer cells, and sterilizing surgical scalpels.",
    ],
    finalAnswer: "(a) Ultraviolet (UV), X-rays, and Gamma rays.\n(b) Knocks electrons from atoms, damaging DNA and causing mutations / cancer.\n(c) X-rays: Bone imaging; Gamma rays: Cancer radiotherapy / sterilizing equipment.",
    examinerTips:
      "Always use the term 'DNA damage' or 'cell mutation' rather than just 'harmful to health'.",
  },

  // SECTION 3.4: Sound Waves & Ultrasound
  {
    id: "prob-3.4-1",
    topicId: "3.4",
    title: "3.4 Practice Problem 1: Echo Sounding & Sonar Depth Calculation",
    difficulty: "Core",
    marks: 3,
    question:
      "A research ship uses an ultrasound sonar pulse to measure the depth of the seabed. The pulse is emitted downwards into the sea and the reflected echo is detected by the ship's receiver 0.80 s later. The speed of sound in seawater is 1500 m/s.\n(a) Calculate the total round-trip distance travelled by the sound pulse.\n(b) Determine the depth of the seabed below the ship.\n(c) State the definition of ultrasound.",
    givenData: [
      "Echo round-trip time, t = 0.80 s",
      "Speed of sound in seawater, v = 1500 m/s",
    ],
    formulaUsed: "Total distance = v × t, Depth d = (v × t) / 2",
    hints: ["Remember to divide the total distance by 2 because sound travels down and back up."],
    stepByStepSolution: [
      "Step 1: Total round-trip distance = v × t = 1500 m/s × 0.80 s = 1200 m.",
      "Step 2: The sound travelled down to the seabed and back, so depth d = 1200 m / 2 = 600 m.",
      "Step 3: Ultrasound is high-frequency sound waves with a frequency greater than 20,000 Hz (20 kHz), which is above the upper limit of human hearing.",
    ],
    finalAnswer: "(a) Total round-trip distance = 1200 m\n(b) Depth of seabed = 600 m\n(c) Sound waves with frequency > 20 kHz.",
    examinerTips:
      "Forgetting to divide by 2 in echo calculations is the most common student error in Paper 2 and Paper 4.",
  },
  {
    id: "prob-3.4-2",
    topicId: "3.4",
    title: "3.4 Practice Problem 2: Oscilloscope Waveform Analysis",
    difficulty: "Extended",
    marks: 4,
    question:
      "A microphone is connected to a Cathode Ray Oscilloscope (CRO) to display a sound wave. The time-base is set to 2.5 ms/div (0.0025 s per division). One complete sound cycle occupies 4.0 horizontal divisions on the screen.\n(a) Calculate the time period T of the sound wave.\n(b) Calculate the frequency f of the sound.\n(c) State whether this sound wave is audible to a normal human ear, giving a reason.",
    givenData: [
      "Time-base setting = 2.5 ms/div = 0.0025 s/div",
      "1 cycle = 4.0 divisions",
      "Human hearing range = 20 Hz to 20,000 Hz",
    ],
    formulaUsed: "Period T = Number of divisions × Time-base setting, Frequency f = 1 / T",
    hints: ["Convert milliseconds to seconds before calculating frequency."],
    stepByStepSolution: [
      "Step 1: Calculate period T = 4.0 div × 2.5 ms/div = 10.0 ms = 0.010 s.",
      "Step 2: Calculate frequency: f = 1 / T = 1 / 0.010 s = 100 Hz.",
      "Step 3: Because 100 Hz lies between 20 Hz and 20,000 Hz, the sound is easily audible to a human (it is a low-pitch hum).",
    ],
    finalAnswer: "(a) Period T = 0.010 s (10 ms)\n(b) Frequency f = 100 Hz\n(c) Yes, it is audible because 100 Hz is within the human hearing range (20 Hz - 20 kHz).",
    examinerTips:
      "Always quote the standard human audible range (20 Hz to 20 kHz) when asked to justify audibility.",
  },
];
