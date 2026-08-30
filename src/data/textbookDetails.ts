import {
  WorkedExample,
  RealWorldApplication,
  ConceptCheck,
  LabInvestigation,
} from "../types";

export interface ChapterSupplement {
  learningObjectives: string[];
  workedExamples: WorkedExample[];
  realWorldApplications: RealWorldApplication[];
  conceptChecks: ConceptCheck[];
  labInvestigation?: LabInvestigation;
  summaryChecklist: string[];
}

export const CHAPTER_SUPPLEMENTS: Record<string, ChapterSupplement> = {
  "1.1": {
    learningObjectives: [
      "Distinguish between scalar (magnitude only) and vector (magnitude + direction) physical quantities.",
      "Select and use appropriate instruments (meter ruler, vernier caliper, micrometer screw gauge, measuring cylinder) with correct precision.",
      "Apply the multiple measurement technique to accurately determine tiny quantities (e.g. wire diameter, pendulum period, paper thickness).",
      "Identify and eliminate systematic errors (such as zero error) and random errors (such as parallax error).",
    ],
    workedExamples: [
      {
        title: "Example 1.1: Accurately Determining the Period of a Pendulum",
        difficulty: "Core",
        question:
          "A student wishes to determine the period T of a simple pendulum. Using a digital stopwatch, they measure the time for 20 complete oscillations to be 32.40 s.\n(a) Calculate the period T of the pendulum.\n(b) Explain why timing 20 oscillations is significantly more accurate than timing a single oscillation.",
        givenData: [
          "Number of complete oscillations, N = 20",
          "Total elapsed time, t = 32.40 s",
        ],
        formulaUsed: "T = Total Time (t) / Number of Oscillations (N)",
        stepByStepSolution: [
          "Step 1: Write down the period formula: T = t / N.",
          "Step 2: Substitute the measured values: T = 32.40 s / 20.",
          "Step 3: Perform calculation: T = 1.620 s.",
          "Step 4: Round to appropriate precision (3 significant figures): T = 1.62 s.",
        ],
        finalAnswer: "(a) T = 1.62 s (or 1.620 s). (b) Human reaction time (≈ 0.2 s to start/stop) produces a large percentage error on a single swing. Timing 20 oscillations spreads the human reaction time error across 20 cycles, reducing percentage uncertainty by a factor of 20.",
        examinerNote:
          "Always state the full formula before substituting numbers. Mentioning 'human reaction time error is divided by 20' earns the explanation mark in Paper 4 and Paper 6.",
      },
      {
        title: "Example 1.2: Micrometer Zero Error Correction",
        difficulty: "Extended",
        question:
          "Before taking a measurement, a student notices that when the micrometer screw gauge is fully closed, it reads +0.04 mm (zero error). When clamped onto a copper wire, the reading is 1.86 mm. What is the actual diameter of the wire?",
        givenData: [
          "Zero error = +0.04 mm (positive zero error)",
          "Observed reading = 1.86 mm",
        ],
        formulaUsed: "Actual Value = Observed Reading - Zero Error",
        stepByStepSolution: [
          "Step 1: Identify the type of zero error: +0.04 mm means the gauge over-reads by 0.04 mm.",
          "Step 2: Apply the correction formula: Actual Diameter = 1.86 mm - (+0.04 mm).",
          "Step 3: Calculate: 1.86 - 0.04 = 1.82 mm.",
        ],
        finalAnswer: "Actual diameter = 1.82 mm",
        examinerNote:
          "Remember: If zero error is positive, subtract it. If zero error is negative, add its absolute value (or subtract a negative).",
      },
    ],
    realWorldApplications: [
      {
        title: "Aerospace Structural Tolerances",
        description:
          "Modern jet engines spin at over 10,000 RPM at temperatures exceeding 1,000°C. Turbine blade clearances must be measured to within ±0.005 mm using laser interferometry and micrometer gauges to prevent catastrophic friction failures.",
        impact: "Prevents mechanical failure and optimizes fuel efficiency by 15%.",
        technology: "Precision Metrology & Laser Gauge Tooling",
      },
    ],
    conceptChecks: [
      {
        id: "cc-1.1-1",
        question: "Which of the following contains ONLY vector quantities?",
        options: [
          "A. Speed, acceleration, mass",
          "B. Velocity, force, momentum",
          "C. Distance, weight, energy",
          "D. Time, temperature, displacement",
        ],
        correctAnswer: "B. Velocity, force, momentum",
        explanation:
          "Vectors have both magnitude and direction. Velocity (displacement/time), force (push/pull in a direction), and momentum (mass × velocity) are all vectors. Mass, speed, distance, time, and energy are scalars.",
      },
      {
        id: "cc-1.1-2",
        question:
          "A student measures the diameter of a thin nylon string. Which method yields the highest accuracy?",
        options: [
          "A. Measuring 1 string with a wooden 30 cm ruler.",
          "B. Using a measuring cylinder with displacement.",
          "C. Winding 50 turns closely around a pencil and measuring total width with a ruler, then dividing by 50.",
          "D. Estimating using a magnifying glass.",
        ],
        correctAnswer:
          "C. Winding 50 turns closely around a pencil and measuring total width with a ruler, then dividing by 50.",
        explanation:
          "The multiple turns technique multiplies the measurable dimension, allowing a standard ruler with ±1 mm uncertainty to achieve an effective precision of ±0.02 mm per turn.",
      },
    ],
    labInvestigation: {
      title: "Investigating the Period of a Simple Pendulum",
      objective: "Determine how the length L of a pendulum affects its period T.",
      apparatus: [
        "Retort stand with boss and clamp",
        "Light inextensible string (0.2 m to 1.0 m)",
        "Small metal bob",
        "Digital stopwatch (precision 0.01 s)",
        "Meter ruler",
        "Two small wooden blocks (to clamp string at a precise pivot point)",
      ],
      variables: {
        independent: "Length of pendulum L (measured from clamp to center of mass of bob)",
        dependent: "Period T (time for one complete oscillation)",
        controlled: [
          "Mass of bob (constant)",
          "Angular release amplitude (small angle < 10°)",
          "Location / local gravitational field strength g",
        ],
      },
      procedure: [
        "1. Clamp string between wooden blocks at length L = 0.40 m.",
        "2. Pull bob aside by small angle (< 10°) and release smoothly.",
        "3. Using a fiducial mark at the center of the swing (equilibrium position), start stopwatch as bob crosses the mark.",
        "4. Time 20 full oscillations (to and fro = 1 oscillation).",
        "5. Repeat timing and compute average time t_avg, then T = t_avg / 20.",
        "6. Repeat for lengths L = 0.60 m, 0.80 m, 1.00 m.",
      ],
      keyObservation:
        "T increases as length L increases. A graph of T² against L produces a straight line through the origin, proving T² ∝ L (and gradient = 4π²/g).",
      safetyPrecautions: [
        "Ensure retort stand base is weighted with a G-clamp so it does not topple.",
        "Ensure bob does not strike glassware or nearby students.",
      ],
    },
    summaryChecklist: [
      "Scalar = magnitude only; Vector = magnitude + direction.",
      "Ruler precision: ±1 mm; Vernier: ±0.1 mm; Micrometer: ±0.01 mm.",
      "Always measure at eye level perpendicular to scale to avoid parallax error.",
      "Period T = Total Time / Number of Oscillations.",
    ],
  },

  "1.2": {
    learningObjectives: [
      "Interpret and construct distance-time and speed-time (velocity-time) graphs.",
      "Calculate speed from the gradient of a distance-time graph.",
      "Calculate acceleration from the gradient of a velocity-time graph (a = Δv / Δt).",
      "Calculate total distance traveled from the area under a velocity-time graph.",
      "Describe terminal velocity in terms of balanced downward weight and upward drag forces.",
    ],
    workedExamples: [
      {
        title: "Example 1.2: Two-Stage Motion & Area Under Graph",
        difficulty: "Extended",
        question:
          "A racing car accelerates uniformly from rest to a speed of 30 m/s in 6.0 s. It then travels at this constant speed of 30 m/s for 14.0 s before braking uniformly to a stop in 5.0 s.\n(a) Calculate the acceleration during the first 6.0 seconds.\n(b) Calculate the total distance traveled during the entire 25.0 s journey.\n(c) Calculate the average speed for the whole journey.",
        givenData: [
          "Stage 1 (Acceleration): u = 0 m/s, v = 30 m/s, t₁ = 6.0 s",
          "Stage 2 (Constant Speed): v = 30 m/s, t₂ = 14.0 s (from t = 6.0 to t = 20.0 s)",
          "Stage 3 (Deceleration): u = 30 m/s, v = 0 m/s, t₃ = 5.0 s (from t = 20.0 to t = 25.0 s)",
        ],
        formulaUsed: "a = (v - u) / t, Area of Trapezium = ½(a + b)h, Average Speed = Total Distance / Total Time",
        stepByStepSolution: [
          "Step 1: Calculate initial acceleration: a = (30 - 0) / 6.0 = 5.0 m/s².",
          "Step 2: Calculate distance via area under v-t graph (split into 3 geometric sections):",
          "   • Area 1 (Triangle): ½ × base × height = ½ × 6.0 s × 30 m/s = 90 m.",
          "   • Area 2 (Rectangle): base × height = 14.0 s × 30 m/s = 420 m.",
          "   • Area 3 (Triangle): ½ × base × height = ½ × 5.0 s × 30 m/s = 75 m.",
          "   • Total Distance = 90 m + 420 m + 75 m = 585 m.",
          "Step 3: Alternatively, as a single trapezium: Total Distance = ½(parallel side 1 + parallel side 2) × height = ½(14.0 + 25.0) × 30 = ½(39.0) × 30 = 585 m.",
          "Step 4: Average speed = Total Distance / Total Time = 585 m / 25.0 s = 23.4 m/s.",
        ],
        finalAnswer: "(a) Acceleration = 5.0 m/s²\n(b) Total Distance = 585 m\n(c) Average Speed = 23.4 m/s",
        examinerNote:
          "Common Error: Many students try to use s = v × t using 30 m/s for the entire 25 s, getting 750 m (0 marks). You MUST find the area under the curve for accelerating objects!",
      },
    ],
    realWorldApplications: [
      {
        title: "Autonomous Vehicle Collision Avoidance",
        description:
          "Self-driving cars continuously compute real-time velocity-time curves of surrounding vehicles. If a lead car decelerates at -6.5 m/s², the system integrates the area under the deceleration curve to compute minimum stopping distance and triggers regenerative braking in < 15 ms.",
        impact: "Reduces rear-end collision rates by up to 70%.",
        technology: "LiDAR & Real-Time Kinematic Telemetry",
      },
    ],
    conceptChecks: [
      {
        id: "cc-1.2-1",
        question: "What does the gradient of a speed-time graph represent?",
        options: ["A. Distance", "B. Speed", "C. Acceleration", "D. Force"],
        correctAnswer: "C. Acceleration",
        explanation: "Gradient = Δy / Δx = Δspeed / Δtime = acceleration (in m/s²).",
      },
      {
        id: "cc-1.2-2",
        question: "A skydiver falls at terminal velocity. Which statement is correct?",
        options: [
          "A. The skydiver's acceleration is 9.8 m/s² downwards.",
          "B. Upward air resistance is equal to downward weight.",
          "C. The resultant force is acting downwards.",
          "D. The skydiver is stationary.",
        ],
        correctAnswer: "B. Upward air resistance is equal to downward weight.",
        explanation: "At terminal velocity, the upward drag force equals the downward gravitational force (weight). The resultant force is 0 N, and acceleration is 0 m/s².",
      },
    ],
    summaryChecklist: [
      "Distance-time gradient = Speed.",
      "Speed-time gradient = Acceleration.",
      "Area under speed-time graph = Total Distance Traveled.",
      "Terminal velocity occurs when Air Resistance = Weight (Resultant Force = 0).",
    ],
  },

  "1.3": {
    learningObjectives: [
      "Distinguish clearly between mass (kg, scalar, constant) and weight (N, vector, dependent on gravity).",
      "State and apply the relationship W = mg.",
      "Define density as mass per unit volume (ρ = m/V) and convert between g/cm³ and kg/m³.",
      "Describe the displacement method to measure the volume and density of irregular solids.",
      "Predict whether an object will float or sink based on relative densities.",
    ],
    workedExamples: [
      {
        title: "Example 1.3: Mass, Weight on Moon & Density Calculation",
        difficulty: "Extended",
        question:
          "An astronaut has a mass of 75 kg. On Earth, g = 9.8 N/kg. On the Moon, g_moon = 1.6 N/kg.\n(a) Calculate the astronaut's weight on Earth.\n(b) State the astronaut's mass on the Moon.\n(c) Calculate the astronaut's weight on the Moon.\n(d) A sample of moon rock has mass 288 g. When lowered into a measuring cylinder containing 150 cm³ of water, the level rises to 230 cm³. Calculate the density of the rock in kg/m³.",
        givenData: [
          "Astronaut mass m = 75 kg",
          "g_earth = 9.8 N/kg",
          "g_moon = 1.6 N/kg",
          "Rock mass m_rock = 288 g = 0.288 kg",
          "Initial volume V₁ = 150 cm³, Final volume V₂ = 230 cm³",
        ],
        formulaUsed: "W = mg, ρ = m / V, 1 g/cm³ = 1000 kg/m³",
        stepByStepSolution: [
          "Step 1: Weight on Earth: W_earth = m × g_earth = 75 kg × 9.8 N/kg = 735 N.",
          "Step 2: Mass on Moon: Mass is the amount of matter and does NOT change with location, so m_moon = 75 kg.",
          "Step 3: Weight on Moon: W_moon = m × g_moon = 75 kg × 1.6 N/kg = 120 N.",
          "Step 4: Rock volume V = V₂ - V₁ = 230 cm³ - 150 cm³ = 80 cm³.",
          "Step 5: Density in g/cm³: ρ = 288 g / 80 cm³ = 3.6 g/cm³.",
          "Step 6: Convert to kg/m³: Multiply by 1000: 3.6 × 1000 = 3600 kg/m³.",
        ],
        finalAnswer: "(a) Weight on Earth = 735 N\n(b) Mass on Moon = 75 kg\n(c) Weight on Moon = 120 N\n(d) Rock density = 3600 kg/m³",
        examinerNote:
          "Examiners frequently test whether candidates remember that mass is invariant (unchanged) on other planets. Weight changes; mass stays constant.",
      },
    ],
    realWorldApplications: [
      {
        title: "Submarine Ballast Tank Buoyancy Control",
        description:
          "Submarines dive and surface by altering their average density. By flooding ballast tanks with seawater, total mass increases while external volume remains fixed, making the submarine denser than water (sinking). Pumping compressed air expels water, decreasing average density to float.",
        impact: "Enables controlled deep-sea exploration and military stealth navigation.",
        technology: "Pneumatic Ballast & Fluid Mechanics",
      },
    ],
    conceptChecks: [
      {
        id: "cc-1.3-1",
        question: "A metal block has a mass of 540 g and dimensions 5 cm × 4 cm × 3 cm. What is its density?",
        options: ["A. 9.0 g/cm³", "B. 4.5 g/cm³", "C. 18.0 g/cm³", "D. 0.11 g/cm³"],
        correctAnswer: "A. 9.0 g/cm³",
        explanation: "Volume V = 5 × 4 × 3 = 60 cm³. Density ρ = m / V = 540 g / 60 cm³ = 9.0 g/cm³.",
      },
    ],
    summaryChecklist: [
      "Mass (kg) = quantity of matter (constant everywhere).",
      "Weight (N) = force of gravity (W = mg).",
      "Density ρ = m / V (1 g/cm³ = 1000 kg/m³).",
      "Volume of irregular solid = displacement difference (V₂ - V₁).",
    ],
  },

  "1.4": {
    learningObjectives: [
      "State and apply Newton's First, Second (F = ma), and Third Laws of Motion.",
      "State Hooke's Law (F = kx) and identify the limit of proportionality on a force-extension graph.",
      "Define momentum (p = mv) and state the principle of conservation of momentum.",
      "Define impulse as force × time and relate it to change in momentum (FΔt = Δp).",
    ],
    workedExamples: [
      {
        title: "Example 1.4: Hooke's Law Spring Constant & Limit",
        difficulty: "Core",
        question:
          "A helical spring has an unstretched length of 12.0 cm. When a load of 4.5 N is hung from the spring, its total length becomes 18.0 cm.\n(a) Calculate the spring constant k in N/m.\n(b) Calculate the total length of the spring when a load of 7.5 N is applied (assuming the limit of proportionality is not exceeded).",
        givenData: [
          "Unstretched original length, L₀ = 12.0 cm = 0.12 m",
          "Stretched length L₁ = 18.0 cm = 0.18 m",
          "Extension x₁ = 18.0 - 12.0 = 6.0 cm = 0.060 m",
          "Load F₁ = 4.5 N",
          "New Load F₂ = 7.5 N",
        ],
        formulaUsed: "F = k · x  =>  k = F / x,  New Length = L₀ + x",
        stepByStepSolution: [
          "Step 1: Calculate extension x₁: x₁ = 18.0 cm - 12.0 cm = 6.0 cm = 0.060 m.",
          "Step 2: Calculate spring constant k: k = F₁ / x₁ = 4.5 N / 0.060 m = 75 N/m.",
          "Step 3: For new load F₂ = 7.5 N, calculate new extension x₂: x₂ = F₂ / k = 7.5 N / 75 N/m = 0.10 m = 10.0 cm.",
          "Step 4: Calculate total stretched length: Total Length = L₀ + x₂ = 12.0 cm + 10.0 cm = 22.0 cm.",
        ],
        finalAnswer: "(a) Spring constant k = 75 N/m (or 0.75 N/cm)\n(b) Total stretched length = 22.0 cm",
        examinerNote:
          "Examiner Tip: Never confuse EXTENSION (x = L - L₀) with TOTAL LENGTH (L). Hooke's Law uses extension!",
      },
      {
        title: "Example 1.5: Car Crash Safety & Impulse",
        difficulty: "Extended",
        question:
          "A car of mass 1200 kg traveling at 20 m/s crashes into a barrier and comes to rest in 0.20 s.\n(a) Calculate the change in momentum (impulse) of the car.\n(b) Calculate the average resultant force exerted on the car.\n(c) Explain how crumple zones and airbags protect passengers during a crash.",
        givenData: [
          "Mass m = 1200 kg",
          "Initial velocity u = 20 m/s",
          "Final velocity v = 0 m/s",
          "Impact duration Δt = 0.20 s",
        ],
        formulaUsed: "Δp = m(v - u),  Impulse = F · Δt  =>  F = Δp / Δt",
        stepByStepSolution: [
          "Step 1: Calculate change in momentum: Δp = m·v - m·u = (1200 × 0) - (1200 × 20) = -24,000 kg·m/s.",
          "Step 2: Calculate impact force: F = Δp / Δt = -24,000 / 0.20 = -120,000 N (magnitude 1.2 × 10⁵ N).",
          "Step 3: Explain safety mechanism: The crumple zone increases the impact time Δt during the collision. Since F = Δp / Δt, for the same change in momentum Δp, increasing the time interval Δt reduces the average impact force F experienced by the passenger, preventing fatal injury.",
        ],
        finalAnswer: "(a) Impulse = -24,000 N·s (or kg·m/s)\n(b) Resultant Force = 120,000 N\n(c) Crumple zones collapse slowly, extending impact time Δt. Since Force = Δp / Δt, increasing time decreases the impact force.",
        examinerNote:
          "Full 3-mark explanation structure: 1) State that change in momentum is constant. 2) State that crumple zones increase impact time. 3) State that larger time results in a smaller impact force (F = Δp / Δt).",
      },
    ],
    realWorldApplications: [
      {
        title: "Automotive Crumple Zones & Airbag Deployment",
        description:
          "Crash safety engineering is directly based on the impulse equation F = Δp / Δt. Seatbelts stretch slightly and airbags inflate in 30 ms to decelerate the passenger over a longer time span, reducing peak chest deceleration force from 40 kN to < 8 kN.",
        impact: "Saves over 50,000 lives globally every year.",
        technology: "Passive Vehicle Safety Systems",
      },
    ],
    conceptChecks: [
      {
        id: "cc-1.4-1",
        question: "What is the unit of Momentum?",
        options: ["A. N/m", "B. kg·m/s", "C. Joules", "D. Watts"],
        correctAnswer: "B. kg·m/s",
        explanation: "Momentum p = m × v = kg × (m/s) = kg·m/s (also equivalent to N·s).",
      },
    ],
    summaryChecklist: [
      "Newton's 2nd Law: Resultant Force F = m × a.",
      "Hooke's Law: F = k × x (up to limit of proportionality).",
      "Momentum p = m × v; Impulse = F × Δt = Δp.",
      "Conservation of Momentum: Total momentum before collision = Total momentum after collision (in a closed system).",
    ],
  },

  "1.5": {
    learningObjectives: [
      "Identify various energy stores (kinetic, gravitational potential, chemical, elastic, nuclear, thermal) and transfers (mechanical, electrical, heating, radiation).",
      "State the Principle of Conservation of Energy.",
      "Calculate Kinetic Energy ($E_k = \\frac{1}{2}mv^2$) and Gravitational Potential Energy ($\Delta E_p = mg\Delta h$).",
      "Calculate Work Done ($W = Fd = \Delta E$) and Power ($P = \Delta E / t = W / t$).",
      "Calculate efficiency ($Efficiency = \\frac{\\text{Useful Output}}{\\text{Total Input}} \\times 100\\%$).",
    ],
    workedExamples: [
      {
        title: "Example 1.6: Rollercoaster Energy Conservation & Speed",
        difficulty: "Extended",
        question:
          "A rollercoaster car of mass 400 kg starts from rest at the top of a hill at height h = 25 m. It descends without friction to the bottom of the track (height 0 m).\n(a) Calculate the gravitational potential energy of the car at the top (g = 9.8 N/kg).\n(b) Using conservation of energy, calculate the speed of the car at the bottom.\n(c) In reality, the speed measured at the bottom is only 20 m/s. Calculate the energy lost to thermal energy (friction/air resistance).",
        givenData: [
          "Mass m = 400 kg",
          "Height h = 25 m",
          "g = 9.8 N/kg",
          "Actual speed v_real = 20 m/s",
        ],
        formulaUsed: "E_p = mgh,  E_k = ½mv²,  Conservation of Energy: E_p = E_k + Thermal Losses",
        stepByStepSolution: [
          "Step 1: Calculate initial GPE: E_p = m × g × h = 400 kg × 9.8 N/kg × 25 m = 98,000 J (98 kJ).",
          "Step 2: Ideal conservation of energy: E_k = E_p = 98,000 J.",
          "   • ½ × m × v² = 98,000  =>  v² = (2 × 98,000) / 400 = 490.",
          "   • v = √490 = 22.1 m/s.",
          "Step 3: Calculate actual kinetic energy at 20 m/s:",
          "   • E_k_actual = ½ × 400 × (20)² = 200 × 400 = 80,000 J.",
          "Step 4: Calculate thermal energy lost to friction: Thermal Loss = E_p_initial - E_k_actual = 98,000 J - 80,000 J = 18,000 J (18 kJ).",
        ],
        finalAnswer: "(a) GPE = 98,000 J (98 kJ)\n(b) Ideal speed = 22.1 m/s\n(c) Thermal energy lost = 18,000 J (18 kJ)",
        examinerNote:
          "Notice that in the ideal case (no friction), mass cancels out: mgh = ½mv² => v = √(2gh). Speed does NOT depend on mass!",
      },
    ],
    realWorldApplications: [
      {
        title: "Hydroelectric Pumped Storage Power Stations",
        description:
          "During periods of low electricity demand (night), cheap excess electricity is used to pump millions of liters of water up into an elevated mountain reservoir (storing gravitational potential energy $E_p = mgh$). During peak morning demand, the water rushes down through turbines to generate gigawatts of electrical power in seconds.",
        impact: "Provides rapid-response grid stabilization and energy storage efficiency up to 80%.",
        technology: "Hydro-Turbine Generators & Grid Energy Storage",
      },
    ],
    conceptChecks: [
      {
        id: "cc-1.5-1",
        question: "An electric crane lifts a 500 kg crate through a height of 10 m in 5.0 s (g = 10 N/kg). What is the useful power output?",
        options: ["A. 10 kW", "B. 50 kW", "C. 2.5 kW", "D. 100 kW"],
        correctAnswer: "A. 10 kW",
        explanation: "Work Done W = F × d = mg × h = (500 × 10) × 10 = 50,000 J. Power P = W / t = 50,000 J / 5.0 s = 10,000 W = 10 kW.",
      },
    ],
    summaryChecklist: [
      "Principle of Conservation: Energy cannot be created or destroyed, only transferred between stores.",
      "$E_k = \\frac{1}{2}mv^2$ and $\Delta E_p = mg\Delta h$.",
      "Work Done $W = F \\times d = \\Delta E$ (1 Joule = 1 N·m).",
      "Power $P = W / t$ (1 Watt = 1 Joule/second).",
      "Efficiency = (Useful output energy / Total input energy) × 100%.",
    ],
  },

  "2.1": {
    learningObjectives: [
      "Describe the structure of solids, liquids, and gases in terms of particle arrangement, spacing, and motion.",
      "Explain Brownian motion as evidence for the continuous random motion of microscopic particles colliding with invisible molecules.",
      "Explain gas pressure in terms of particle collisions with container walls (Force per unit area).",
      "Explain why gas pressure increases when temperature increases (at constant volume) and when volume decreases (Boyle's Law $p_1V_1 = p_2V_2$).",
    ],
    workedExamples: [
      {
        title: "Example 2.1: Boyle's Law Gas Compression",
        difficulty: "Core",
        question:
          "A cylinder with a moveable piston contains 240 cm³ of air at a pressure of 100 kPa. The piston is slowly pushed inwards until the volume of the air is reduced to 80 cm³, keeping temperature constant.\n(a) Calculate the new pressure of the compressed gas.\n(b) Explain in terms of particles why the pressure increased.",
        givenData: [
          "Initial Pressure, p₁ = 100 kPa",
          "Initial Volume, V₁ = 240 cm³",
          "Final Volume, V₂ = 80 cm³",
          "Temperature is constant (Isothermal compression)",
        ],
        formulaUsed: "p₁V₁ = p₂V₂  =>  p₂ = (p₁V₁) / V₂",
        stepByStepSolution: [
          "Step 1: Write down Boyle's Law equation: p₁V₁ = p₂V₂.",
          "Step 2: Rearrange for final pressure p₂: p₂ = (p₁ × V₁) / V₂.",
          "Step 3: Substitute values: p₂ = (100 kPa × 240 cm³) / 80 cm³.",
          "Step 4: Calculate: p₂ = 24,000 / 80 = 300 kPa.",
        ],
        finalAnswer: "(a) New Pressure p₂ = 300 kPa (or 3.0 × 10⁵ Pa).\n(b) When volume decreases, the gas molecules are crowded into a smaller space. They collide with the inside walls of the container MORE FREQUENTLY. Each collision exerts a force; therefore, the total force per unit area (pressure) increases.",
        examinerNote:
          "Examiner Trap: Never just say 'molecules collide harder' when volume decreases at constant temperature! Speed is unchanged because temperature is constant. The correct mark scheme phrase is 'particles collide MORE FREQUENTLY with container walls'.",
      },
    ],
    realWorldApplications: [
      {
        title: "Scuba Diving Tank Decompression",
        description:
          "Scuba tanks store 12 liters of breathing gas compressed to 200 atmospheres (20,000 kPa) at constant ambient temperature. Boyle's law ($p_1V_1 = p_2V_2$) dictates that when the regulator drops the pressure to 1 atmosphere at the diver's mouthpiece, it yields 2,400 liters of breathable air.",
        impact: "Enables safe underwater diving for over 60 minutes.",
        technology: "High-Pressure Gas Regulators & Life Support",
      },
    ],
    conceptChecks: [
      {
        id: "cc-2.1-1",
        question: "In Brownian motion, smoke particles in air are seen to move in a random, erratic zig-zag path. Why?",
        options: [
          "A. Smoke particles are alive and move by themselves.",
          "B. Invisible, fast-moving air molecules bombard the smoke particles unevenly.",
          "C. Convection currents lift the smoke particles upward.",
          "D. Light photons push the smoke particles.",
        ],
        correctAnswer: "B. Invisible, fast-moving air molecules bombard the smoke particles unevenly.",
        explanation: "Brownian motion occurs because tiny, invisible air molecules moving at high speeds constantly collide with the larger microscopic smoke particles from random directions with unequal forces.",
      },
    ],
    summaryChecklist: [
      "Solids: Regular lattice, vibrate about fixed positions, strong bonds.",
      "Liquids: Irregular arrangement, particles slide past each other, close together.",
      "Gases: Widely spaced, rapid random motion, negligible forces between collisions.",
      "Pressure = Force / Area due to collisions of gas molecules on container walls.",
      "Boyle's Law: $p_1V_1 = p_2V_2$ at constant temperature.",
    ],
  },

  "2.2": {
    learningObjectives: [
      "Distinguish between temperature (measure of average kinetic energy of particles) and internal energy.",
      "Define Specific Heat Capacity ($c$) and apply the formula $\Delta E = mc\Delta T$.",
      "Define Specific Latent Heat of Fusion ($l_f$) and Vaporization ($l_v$) and apply $\Delta E = ml$.",
      "Explain why temperature remains CONSTANT during melting and boiling (energy is used to break intermolecular bonds, not increase kinetic energy).",
    ],
    workedExamples: [
      {
        title: "Example 2.2: Electric Kettle Heating & Latent Heat",
        difficulty: "Extended",
        question:
          "An electric kettle rated at 2.2 kW (2200 W) contains 0.80 kg of water at an initial temperature of 20°C. Specific heat capacity of water c = 4200 J/(kg·°C).\n(a) Calculate the thermal energy needed to heat the water to its boiling point (100°C).\n(b) Calculate the time taken to reach 100°C (assuming 100% efficiency).\n(c) Once at 100°C, the kettle continues boiling for 60 seconds. Calculate the mass of water converted to steam (Specific latent heat of vaporization $l_v = 2.3 \\times 10^6$ J/kg).",
        givenData: [
          "Kettle Power P = 2200 W",
          "Water mass m = 0.80 kg",
          "Initial temp T₁ = 20°C, Final temp T₂ = 100°C => ΔT = 80°C",
          "c_water = 4200 J/(kg·°C)",
          "l_v = 2.3 × 10⁶ J/kg",
          "Boiling duration t_boil = 60 s",
        ],
        formulaUsed: "ΔE = mcΔT,  P = ΔE / t  =>  t = ΔE / P,  ΔE = m · l_v  =>  m = ΔE / l_v",
        stepByStepSolution: [
          "Step 1: Calculate energy to reach 100°C: ΔE = m × c × ΔT = 0.80 kg × 4200 J/(kg·°C) × (100 - 20)°C = 0.80 × 4200 × 80 = 268,800 J (268.8 kJ).",
          "Step 2: Calculate time to reach boiling: t = ΔE / P = 268,800 J / 2200 W = 122.2 s (≈ 2 minutes 2 seconds).",
          "Step 3: Calculate energy supplied during 60 s of boiling: Energy supplied = Power × time = 2200 W × 60 s = 132,000 J.",
          "Step 4: Calculate mass of water vaporized: m_steam = ΔE / l_v = 132,000 J / (2.3 × 10⁶ J/kg) = 0.0574 kg (57.4 g).",
        ],
        finalAnswer: "(a) Energy required = 268,800 J (269 kJ)\n(b) Time taken = 122 s\n(c) Mass of steam produced = 0.0574 kg (57.4 g)",
        examinerNote:
          "Mark Scheme Golden Rule: Explain why temperature doesn't rise during boiling: 'Thermal energy is supplied to break intermolecular bonds between liquid molecules (increasing potential energy), so average kinetic energy (temperature) remains constant.'",
      },
    ],
    realWorldApplications: [
      {
        title: "Cooling Nuclear Power Reactors & High c of Water",
        description:
          "Water has an exceptionally high specific heat capacity (4,200 J/(kg·°C)), meaning it can absorb massive quantities of thermal energy with only a modest rise in temperature. This makes water the ultimate coolant for car engines and nuclear reactor primary cooling loops.",
        impact: "Prevents thermal meltdown and safely transfers gigawatts of thermal power.",
        technology: "Pressurized Water Nuclear Reactors (PWR)",
      },
    ],
    conceptChecks: [
      {
        id: "cc-2.2-1",
        question: "During the melting of pure ice at 0°C, what happens to the internal energy and temperature?",
        options: [
          "A. Internal energy increases, temperature increases.",
          "B. Internal energy increases, temperature remains constant.",
          "C. Internal energy stays constant, temperature increases.",
          "D. Both internal energy and temperature stay constant.",
        ],
        correctAnswer: "B. Internal energy increases, temperature remains constant.",
        explanation: "Heat energy absorbed increases the potential energy of the particles by overcoming intermolecular bonds (so internal energy increases), but the average kinetic energy of the molecules does not change, keeping temperature constant at 0°C.",
      },
    ],
    summaryChecklist: [
      "Specific Heat Capacity $c$: energy needed to raise 1 kg of a substance by 1°C ($\Delta E = mc\Delta T$).",
      "Specific Latent Heat $l$: energy needed to change state of 1 kg without temperature change ($\Delta E = ml$).",
      "Melting/Boiling plateau on heating curves occurs because energy breaks intermolecular bonds.",
    ],
  },

  "3.2": {
    learningObjectives: [
      "State the Law of Reflection: Angle of incidence = Angle of reflection ($i = r$).",
      "State Snell's Law of Refraction: $n = \\frac{\\sin i}{\\sin r} = \\frac{c}{v}$.",
      "Define Critical Angle $c$ and explain Total Internal Reflection (TIR) when light travels from a denser to a less dense medium at $i > c$.",
      "Apply the critical angle formula: $\\sin c = \\frac{1}{n}$.",
      "Describe principal rays for a thin converging lens (convex lens) and distinguish real vs virtual images.",
    ],
    workedExamples: [
      {
        title: "Example 3.1: Snell's Law & Total Internal Reflection in an Optical Fiber",
        difficulty: "Extended",
        question:
          "A light ray enters a glass optical fiber core of refractive index n = 1.50 from air (n_air = 1.00).\n(a) If the ray strikes the flat end face from air with an angle of incidence i = 30.0°, calculate the angle of refraction r inside the glass.\n(b) Calculate the critical angle c for the glass-air boundary.\n(c) The ray travels along the fiber and hits the glass-air side wall at an angle of 65.0°. Explain what happens to the ray.",
        givenData: [
          "Refractive index of glass n = 1.50",
          "Angle of incidence on end face i = 30.0°",
          "Angle of incidence on side wall θ = 65.0°",
        ],
        formulaUsed: "n = sin(i) / sin(r)  =>  sin(r) = sin(i) / n,  sin(c) = 1 / n",
        stepByStepSolution: [
          "Step 1: Calculate angle of refraction r: sin(r) = sin(30.0°) / 1.50 = 0.500 / 1.50 = 0.3333.",
          "   • r = arcsin(0.3333) = 19.5°.",
          "Step 2: Calculate critical angle c: sin(c) = 1 / n = 1 / 1.50 = 0.6667.",
          "   • c = arcsin(0.6667) = 41.8°.",
          "Step 3: Analyze the side wall encounter at 65.0°:",
          "   • The light ray is travelling in the optically denser medium (glass) towards the less dense medium (air).",
          "   • The angle of incidence on the wall (65.0°) is GREATER than the critical angle (41.8°).",
          "   • Therefore, Total Internal Reflection (TIR) occurs. 100% of the light is reflected back into the glass core with no refraction or loss of signal.",
        ],
        finalAnswer: "(a) Angle of refraction r = 19.5°\n(b) Critical angle c = 41.8°\n(c) Total Internal Reflection (TIR) occurs because the ray is in the denser medium and angle of incidence (65.0°) exceeds critical angle (41.8°).",
        examinerNote:
          "For TIR questions, examiners require TWO explicit conditions for full marks: 1) Light must be traveling from an optically denser to a less dense medium. 2) The angle of incidence must be greater than the critical angle ($i > c$).",
      },
    ],
    realWorldApplications: [
      {
        title: "Medical Endoscopy & Fiber Optic Internet",
        description:
          "Endoscopes use thousands of ultra-pure flexible glass fibers to transmit light into the human body and reflect high-definition images back to surgeons without invasive incisions. Transatlantic undersea fiber-optic cables carry 99% of international internet traffic via TIR across 10,000 km.",
        impact: "Powers global high-speed telecommunications and minimally invasive surgery.",
        technology: "Total Internal Reflection & Glass Waveguides",
      },
    ],
    conceptChecks: [
      {
        id: "cc-3.2-1",
        question: "When a ray of light passes from air into a glass block at an angle of 45°, what happens to its speed and wavelength?",
        options: [
          "A. Speed decreases, wavelength decreases, frequency stays constant.",
          "B. Speed decreases, wavelength increases, frequency stays constant.",
          "C. Speed stays constant, wavelength decreases, frequency increases.",
          "D. Both speed and frequency decrease.",
        ],
        correctAnswer: "A. Speed decreases, wavelength decreases, frequency stays constant.",
        explanation: "Glass is optically denser than air. Light slows down ($v = c/n$). Frequency $f$ is set by the source and is constant. By $v = f\lambda$, since speed decreases, wavelength must also decrease.",
      },
    ],
    summaryChecklist: [
      "Law of reflection: $i = r$ (measured to normal).",
      "Snell's Law: $n = \\frac{\\sin i}{\\sin r} = \\frac{c}{v}$.",
      "Critical angle: $\\sin c = \\frac{1}{n}$.",
      "TIR requires: 1) Denser to less dense medium, 2) $i > c$.",
      "Converging lens: Real image formed when rays intersect; Virtual image formed behind lens when object is inside focal length $F$.",
    ],
  },

  "4.2": {
    learningObjectives: [
      "Define electric charge $Q$ in Coulombs (C) and current $I$ as rate of flow of charge ($I = Q/t$).",
      "Define Electromotive Force (e.m.f.) and Potential Difference (p.d.) $V$ as work done per unit charge ($V = W/Q$).",
      "State Ohm's Law: Current is directly proportional to p.d. across a conductor at constant temperature ($V = IR$).",
      "Calculate electrical power ($P = IV = I^2R = \\frac{V^2}{R}$) and electrical energy ($E = Pt = IVt$).",
    ],
    workedExamples: [
      {
        title: "Example 4.1: Current, Charge & Electrical Energy Calculation",
        difficulty: "Core",
        question:
          "A 60 W car headlight bulb is connected to a 12 V battery.\n(a) Calculate the current flowing through the bulb.\n(b) Calculate the electrical resistance of the bulb.\n(c) Calculate the total electric charge that passes through the bulb in 10 minutes.\n(d) Calculate the total electrical energy transferred in Joules.",
        givenData: [
          "Power P = 60 W",
          "Voltage V = 12 V",
          "Time t = 10 minutes = 10 × 60 = 600 s",
        ],
        formulaUsed: "P = IV  =>  I = P / V,  V = IR  =>  R = V / I,  Q = It,  E = Pt",
        stepByStepSolution: [
          "Step 1: Calculate current: I = P / V = 60 W / 12 V = 5.0 A.",
          "Step 2: Calculate resistance: R = V / I = 12 V / 5.0 A = 2.4 Ω.",
          "Step 3: Calculate charge: Q = I × t = 5.0 A × 600 s = 3000 C.",
          "Step 4: Calculate total electrical energy: E = P × t = 60 W × 600 s = 36,000 J (36 kJ).",
        ],
        finalAnswer: "(a) Current I = 5.0 A\n(b) Resistance R = 2.4 Ω\n(c) Charge Q = 3000 C\n(d) Energy E = 36,000 J (36 kJ)",
        examinerNote:
          "Remember to convert time from minutes into SI seconds (10 mins = 600 s) before calculating charge $Q = It$ or energy $E = Pt$.",
      },
    ],
    realWorldApplications: [
      {
        title: "Electric Vehicle High-Voltage Architecture",
        description:
          "Modern EVs use 800 V battery packs instead of 400 V. By doubling the voltage $V$, delivering the same charging power ($P = IV$) requires half the current $I$. Since cable heat loss is $P_{loss} = I^2R$, halving the current reduces thermal resistive loss by 75%, allowing ultra-fast 350 kW charging without overheating cables.",
        impact: "Enables 10% to 80% battery recharge in under 18 minutes.",
        technology: "800V Silicon-Carbide EV Inverters",
      },
    ],
    conceptChecks: [
      {
        id: "cc-4.2-1",
        question: "What is the definition of 1 Volt?",
        options: ["A. 1 Coulomb per second", "B. 1 Joule per Coulomb", "C. 1 Ohm per Ampere", "D. 1 Watt per second"],
        correctAnswer: "B. 1 Joule per Coulomb",
        explanation: "Potential difference $V = W / Q$. Therefore, 1 Volt = 1 Joule of electrical energy transferred per 1 Coulomb of charge ($1\\text{ V} = 1\\text{ J/C}$).",
      },
    ],
    summaryChecklist: [
      "Current $I = Q / t$ (Amperes, A; measured with series ammeter).",
      "Voltage $V = W / Q$ (Volts, V; measured with parallel voltmeter).",
      "Ohm's Law: $V = IR$ (for Ohmic conductors at constant temp).",
      "Power $P = IV = I^2R = V^2/R$ (Watts, W).",
      "Energy $E = Pt = IVt$ (Joules, J).",
    ],
  },

  "4.3": {
    learningObjectives: [
      "Analyze Series Circuits: Current is identical everywhere ($I_{total} = I_1 = I_2$); Voltages add ($V_{total} = V_1 + V_2$); Total resistance $R_{total} = R_1 + R_2$.",
      "Analyze Parallel Circuits: Voltage is identical across each branch ($V_1 = V_2 = V_{supply}$); Currents add ($I_{total} = I_1 + I_2$); Total resistance $\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2}$.",
      "Explain the behavior of sensing components: LDR (resistance drops when light increases) and Thermistor (NTC: resistance drops when temperature increases).",
      "Calculate output voltages in potential divider circuits ($V_{out} = V_{in} \\times \\frac{R_2}{R_1 + R_2}$).",
    ],
    workedExamples: [
      {
        title: "Example 4.2: Combined Series-Parallel Circuit & Potential Divider",
        difficulty: "Extended",
        question:
          "A 12.0 V battery of negligible internal resistance is connected to a circuit containing a 6.0 Ω resistor in series with two resistors (12.0 Ω and 6.0 Ω) connected in parallel with each other.\n(a) Calculate the combined resistance of the parallel pair.\n(b) Calculate the total circuit resistance.\n(c) Calculate the total current supplied by the battery.\n(d) Calculate the potential difference across the 6.0 Ω series resistor.",
        givenData: [
          "Supply voltage V = 12.0 V",
          "Series resistor R₁ = 6.0 Ω",
          "Parallel branch resistors R₂ = 12.0 Ω, R₃ = 6.0 Ω",
        ],
        formulaUsed: "1/R_parallel = 1/R₂ + 1/R₃,  R_total = R₁ + R_parallel,  I = V / R,  V₁ = I · R₁",
        stepByStepSolution: [
          "Step 1: Calculate resistance of parallel pair (R_p):",
          "   • 1 / R_p = (1 / 12.0) + (1 / 6.0) = 1/12 + 2/12 = 3/12 = 1/4.",
          "   • R_p = 4.0 Ω.",
          "Step 2: Calculate total circuit resistance: R_total = R₁ + R_p = 6.0 Ω + 4.0 Ω = 10.0 Ω.",
          "Step 3: Calculate total battery current: I_total = V / R_total = 12.0 V / 10.0 Ω = 1.2 A.",
          "Step 4: Calculate p.d. across 6.0 Ω series resistor: V₁ = I_total × R₁ = 1.2 A × 6.0 Ω = 7.2 V.",
          "   • (Note: The remaining voltage across the parallel pair is 12.0 V - 7.2 V = 4.8 V).",
        ],
        finalAnswer: "(a) Parallel resistance R_p = 4.0 Ω\n(b) Total resistance R_total = 10.0 Ω\n(c) Total battery current I_total = 1.2 A\n(d) Voltage across series resistor V₁ = 7.2 V",
        examinerNote:
          "Parallel resistance rule check: The combined resistance of parallel resistors (4.0 Ω) is ALWAYS less than the smallest individual resistor in the branch (6.0 Ω).",
      },
    ],
    realWorldApplications: [
      {
        title: "Automated Street Lighting using LDR Potential Dividers",
        description:
          "Automatic street lights use a light-dependent resistor (LDR) in a potential divider circuit. As evening falls and light levels drop, LDR resistance skyrockets. This raises the output voltage across the LDR, which turns on a transistor switch or relay to ignite high-intensity LED street lamps.",
        impact: "Automates city lighting and conserves gigawatt-hours of unnecessary daylight energy.",
        technology: "Solid-State Relay & Optoelectronic Sensing",
      },
    ],
    conceptChecks: [
      {
        id: "cc-4.3-1",
        question: "Two identical 10 Ω resistors are connected in parallel. What is their combined resistance?",
        options: ["A. 20 Ω", "B. 10 Ω", "C. 5 Ω", "D. 2.5 Ω"],
        correctAnswer: "C. 5 Ω",
        explanation: "For two identical resistors in parallel, $R_{combined} = R / 2 = 10 / 2 = 5\\,\\Omega$.",
      },
    ],
    summaryChecklist: [
      "Series: $I$ constant, $V$ splits, $R_{total} = R_1 + R_2$.",
      "Parallel: $V$ constant, $I$ splits, $\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2}$.",
      "LDR: Light UP $\\rightarrow$ Resistance DOWN.",
      "Thermistor (NTC): Temperature UP $\\rightarrow$ Resistance DOWN.",
      "Potential Divider: $V_{out} = V_{in} \\times \\frac{R_2}{R_1 + R_2}$.",
    ],
  },

  "4.5": {
    learningObjectives: [
      "Describe electromagnetic induction (Faraday's Law) and factors affecting induced e.m.f.",
      "State and apply Fleming's Left-Hand Rule (Motors: Force, Field, Current) and Right-Hand Rule (Generators: Induced Current).",
      "Explain the construction and operation of an AC generator and DC motor.",
      "Apply the transformer equations: $\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$ and $I_p V_p = I_s V_s$ (for 100% efficient transformers).",
      "Explain why high-voltage AC electricity is used in national grids to minimize $I^2R$ power loss.",
    ],
    workedExamples: [
      {
        title: "Example 4.3: Step-Up Transformer & Grid Transmission Loss",
        difficulty: "Extended",
        question:
          "A power station generator produces 50 MW (5.0 × 10⁷ W) of electrical power at a voltage of 25,000 V (25 kV). A step-up transformer with a turns ratio of 1:16 steps up the voltage before sending it through transmission cables having a total resistance of 8.0 Ω.\n(a) Calculate the output voltage from the step-up transformer.\n(b) Calculate the transmission current flowing through the cables.\n(c) Calculate the power wasted as heat in the transmission cables ($P = I^2R$).\n(d) Calculate the power wasted if the electricity had been transmitted directly at 25 kV without a transformer.",
        givenData: [
          "Power generated P = 50,000,000 W",
          "Primary voltage V_p = 25,000 V",
          "Turns ratio N_s / N_p = 16 / 1",
          "Cable resistance R_cable = 8.0 Ω",
        ],
        formulaUsed: "V_s / V_p = N_s / N_p  =>  V_s = V_p × (N_s / N_p),  P = IV  =>  I = P / V,  P_loss = I² · R",
        stepByStepSolution: [
          "Step 1: Calculate stepped-up voltage: V_s = 25,000 V × 16 = 400,000 V (400 kV).",
          "Step 2: Calculate transmission current at 400 kV: I_trans = P / V_s = 50,000,000 W / 400,000 V = 125 A.",
          "Step 3: Calculate power loss at 400 kV: P_loss = I_trans² × R_cable = (125 A)² × 8.0 Ω = 15,625 × 8.0 = 125,000 W (125 kW = 0.125 MW, which is only 0.25% loss!).",
          "Step 4: Comparison without transformer at 25 kV: I_orig = 50,000,000 / 25,000 = 2000 A.",
          "   • P_loss_orig = (2000)² × 8.0 = 4,000,000 × 8.0 = 32,000,000 W (32 MW, wasting 64% of total power!).",
        ],
        finalAnswer: "(a) Output voltage = 400,000 V (400 kV)\n(b) Transmission current = 125 A\n(c) Power wasted at 400 kV = 125 kW (0.125 MW)\n(d) Power wasted at 25 kV without transformer = 32 MW",
        examinerNote:
          "Standard 3-mark Exam Question: Explain why transformers are used in national grids: 1) Step-up transformers increase voltage, which decreases transmission current ($I = P/V$). 2) Lower current drastically reduces power lost as heat in cables ($P_{loss} = I^2R$). 3) Step-down transformers reduce voltage to safe levels (230 V) for consumers.",
      },
    ],
    realWorldApplications: [
      {
        title: "Super-Grid High-Voltage Transmission",
        description:
          "National power grids transmit electricity at up to 400,000 V. Stepping up the voltage reduces the current by a factor of 16, which reduces the $I^2R$ power loss in overhead aluminum cables by a factor of $16^2 = 256$, enabling power to travel 500 km with < 2% total loss.",
        impact: "Enables distant offshore wind farms and nuclear plants to power major cities hundreds of kilometers away.",
        technology: "High-Voltage AC & HVDC Substation Transformers",
      },
    ],
    conceptChecks: [
      {
        id: "cc-4.5-1",
        question: "Why do transformers only work with Alternating Current (AC) and NOT with Direct Current (DC)?",
        options: [
          "A. DC current is too weak to create a magnetic field.",
          "B. AC creates a constantly changing magnetic field, which is required to induce an e.m.f. in the secondary coil.",
          "C. DC creates too much heat in the iron core.",
          "D. Transformers require high speed electrons only found in AC.",
        ],
        correctAnswer: "B. AC creates a constantly changing magnetic field, which is required to induce an e.m.f. in the secondary coil.",
        explanation: "Faraday's Law of Electromagnetic Induction states that an e.m.f. is only induced when there is a changing magnetic flux. Direct Current (DC) produces a steady, constant magnetic field, so no e.m.f. is induced in the secondary coil.",
      },
    ],
    summaryChecklist: [
      "Electromagnetic induction: moving conductor cutting magnetic field lines induces an e.m.f.",
      "Fleming's Left-Hand Rule: Motors ($F$ Thumb, $B$ First finger, $I$ Second finger).",
      "Transformer equation: $\\frac{V_p}{V_s} = \\frac{N_p}{N_s}$.",
      "100% efficient transformer: $I_p V_p = I_s V_s$.",
      "Grid transmission: High voltage $\\rightarrow$ Low current $\\rightarrow$ minimal $I^2R$ heat loss.",
    ],
  },

  "5.2": {
    learningObjectives: [
      "Compare the nature, charge, ionizing power, and penetrating ability of Alpha ($\alpha$), Beta ($\beta$), and Gamma ($\gamma$) radiation.",
      "Write balanced nuclear decay equations for alpha decay (mass -4, proton -2) and beta-minus decay (mass 0, proton +1).",
      "Define Half-Life ($t_{1/2}$) as the time taken for half the radioactive nuclei in a sample to decay (or count rate to halve).",
      "Account for Background Radiation when solving half-life calculation problems.",
      "Describe industrial and medical applications of radioactive isotopes (smoke detectors, medical tracers, carbon dating).",
    ],
    workedExamples: [
      {
        title: "Example 5.1: Half-Life Calculation with Background Radiation",
        difficulty: "Extended",
        question:
          "A Geiger-Müller (GM) tube detects a background radiation count rate of 25 counts/minute in a laboratory. When a radioactive sample of isotope X is placed near the GM tube, the initial total count rate measured is 425 counts/minute. After 18 hours, the total measured count rate has dropped to 75 counts/minute.\n(a) Calculate the initial corrected count rate of the sample.\n(b) Calculate the corrected count rate after 18 hours.\n(c) Determine the half-life of isotope X.\n(d) Predict the total count rate measured after a further 12 hours (total 30 hours).",
        givenData: [
          "Background count rate = 25 counts/min",
          "Initial total count rate = 425 counts/min",
          "Total count rate after 18 hours = 75 counts/min",
          "Elapsed time t = 18 hours",
        ],
        formulaUsed: "Corrected Count Rate = Total Measured Count Rate - Background Count Rate",
        stepByStepSolution: [
          "Step 1: Calculate initial corrected count rate: Initial Corrected = 425 - 25 = 400 counts/min.",
          "Step 2: Calculate corrected count rate at 18 hours: Corrected at 18 h = 75 - 25 = 50 counts/min.",
          "Step 3: Determine number of half-lives elapsed from 400 to 50 counts/min:",
          "   • 400 -> (1st half-life) -> 200",
          "   • 200 -> (2nd half-life) -> 100",
          "   • 100 -> (3rd half-life) -> 50",
          "   • 3 half-lives have elapsed in 18 hours.",
          "Step 4: Calculate half-life $t_{1/2}$: $t_{1/2} = 18 \\text{ hours} / 3 = 6 \\text{ hours}$.",
          "Step 5: Predict count rate at 30 hours (30 h = 5 half-lives total):",
          "   • 4th half-life (at 24 h): 50 / 2 = 25 counts/min.",
          "   • 5th half-life (at 30 h): 25 / 2 = 12.5 counts/min.",
          "   • Total measured count rate = Corrected + Background = 12.5 + 25 = 37.5 counts/min.",
        ],
        finalAnswer: "(a) Initial corrected count rate = 400 counts/min\n(b) Corrected count rate after 18 h = 50 counts/min\n(c) Half-life = 6.0 hours\n(d) Total measured count rate after 30 h = 37.5 counts/min (or 38 counts/min)",
        examinerNote:
          "Crucial Exam Trap: You MUST subtract background radiation BEFORE halving count rates, and remember to add background radiation back if asked for the TOTAL measured count rate!",
      },
    ],
    realWorldApplications: [
      {
        title: "Medical Radiotherapy & PET Scanning",
        description:
          "Technetium-99m (half-life of 6 hours) is injected into patients as a medical tracer. It emits gamma rays that pass easily through the body to be detected by gamma cameras, imaging tumors without causing high internal ionization. Its 6-hour half-life ensures radioactivity decays to negligible levels within 24 hours.",
        impact: "Allows early diagnosis of bone cancers and organ malfunctions worldwide.",
        technology: "Nuclear Medicine & Gamma Scintigraphy",
      },
    ],
    conceptChecks: [
      {
        id: "cc-5.2-1",
        question: "Which radiation type has the highest ionizing power and shortest penetration range in air?",
        options: ["A. Alpha particles (α)", "B. Beta particles (β)", "C. Gamma rays (γ)", "D. X-rays"],
        correctAnswer: "A. Alpha particles (α)",
        explanation: "Alpha particles are Helium nuclei ($^4_2\\text{He}$) with mass 4 and +2 charge. Their large mass and double positive charge produce massive ionization, but they are stopped by a single sheet of paper or 5 cm of air.",
      },
    ],
    summaryChecklist: [
      "Alpha ($\alpha$): He nucleus ($^4_2\\text{He}$), +2 charge, high ionization, stopped by paper.",
      "Beta ($\beta^-$): Fast electron ($^0_{-1}\\text{e}$), -1 charge, medium ionization, stopped by 3 mm aluminum.",
      "Gamma ($\gamma$): High-energy EM wave, 0 mass, 0 charge, low ionization, reduced by thick lead.",
      "Half-life $t_{1/2}$: time for activity / count rate / nuclei to halve.",
      "Always subtract background radiation before computing half-life!",
    ],
  },

  "6.2": {
    learningObjectives: [
      "Describe the life cycle of stars: Protostar $\\rightarrow$ Main Sequence $\\rightarrow$ Red Giant / Supergiant $\\rightarrow$ White Dwarf / Supernova $\\rightarrow$ Neutron Star or Black Hole.",
      "Define astronomical distance units: Astronomical Unit (AU) and Light-Year (ly).",
      "Describe Redshift: the observed increase in the wavelength of light from distant galaxies.",
      "State and apply Hubble's Law: $v = H_0 d$, and estimate the age of the Universe ($t = 1/H_0$).",
      "Explain how Redshift and Cosmic Microwave Background Radiation (CMBR) provide overwhelming evidence for the Big Bang Theory.",
    ],
    workedExamples: [
      {
        title: "Example 6.1: Hubble's Law & Galactic Recession Speed",
        difficulty: "Extended",
        question:
          "Hubble's constant is approximately $H_0 = 2.2 \\times 10^{-18} \\text{ s}^{-1}$. A distant galaxy is located at a distance of $d = 1.2 \\times 10^{24} \\text{ m}$ from Earth.\n(a) Calculate the recession speed v at which the galaxy is moving away from Earth.\n(b) Using Hubble's constant, estimate the age of the Universe in years (1 year $\\approx 3.15 \\times 10^7$ s).\n(c) State two major pieces of observational evidence that support the Big Bang Theory.",
        givenData: [
          "Hubble Constant H₀ = 2.2 × 10⁻¹⁸ s⁻¹",
          "Galaxy distance d = 1.2 × 10²⁴ m",
          "1 year ≈ 3.15 × 10⁷ s",
        ],
        formulaUsed: "v = H₀ · d,  Age of Universe t ≈ 1 / H₀",
        stepByStepSolution: [
          "Step 1: Calculate recession speed: v = H₀ × d = (2.2 × 10⁻¹⁸ s⁻¹) × (1.2 × 10²⁴ m) = 2.64 × 10⁶ m/s (2,640 km/s).",
          "Step 2: Calculate age of Universe in seconds: t = 1 / H₀ = 1 / (2.2 × 10⁻¹⁸ s⁻¹) = 4.545 × 10¹⁷ s.",
          "Step 3: Convert age to years: t_years = (4.545 × 10¹⁷ s) / (3.15 × 10⁷ s/year) = 1.44 × 10¹⁰ years ≈ 13.8 to 14.4 billion years.",
          "Step 4: State evidence for Big Bang:",
          "   1. Galactic Redshift: Light from almost all distant galaxies is shifted to longer wavelengths (redshift), showing that the Universe is expanding in all directions.",
          "   2. Cosmic Microwave Background Radiation (CMBR): Microwave radiation filling all space uniformly at 2.7 Kelvin, representing the redshifted thermal relic radiation from the hot, dense early Big Bang.",
        ],
        finalAnswer: "(a) Recession speed v = 2.64 × 10⁶ m/s (2,640 km/s)\n(b) Age of Universe ≈ 1.44 × 10¹⁰ years (≈ 14 billion years)\n(c) 1. Cosmological Redshift of distant galaxies. 2. Cosmic Microwave Background Radiation (CMBR).",
        examinerNote:
          "Cambridge Space Physics Syllabus Key Phrase: Redshift shows that 'distant galaxies are moving away from us, and galaxies further away are moving away faster ($v \\propto d$), proving that space itself is expanding'.",
      },
    ],
    realWorldApplications: [
      {
        title: "James Webb Space Telescope (JWST) Deep Field Infrared Astronomy",
        description:
          "Because the universe has been expanding for 13.8 billion years, light emitted by the very first stars and galaxies as ultraviolet/visible light has been stretched by cosmic expansion into the infrared spectrum (cosmological redshift). JWST's cryogenic infrared mirrors detect these redshifted photons to look back 13.6 billion years in time.",
        impact: "Unveils the formation of the first galaxies and planetary atmospheres.",
        technology: "Cryogenic Infrared Space Telescopes",
      },
    ],
    conceptChecks: [
      {
        id: "cc-6.2-1",
        question: "What is observed when light from a distant receding galaxy is passed through a spectrometer?",
        options: [
          "A. Spectral lines are shifted toward higher frequencies (blue shift).",
          "B. Spectral lines are shifted toward longer wavelengths (red shift).",
          "C. The light becomes monochromatic green.",
          "D. Spectral lines disappear completely.",
        ],
        correctAnswer: "B. Spectral lines are shifted toward longer wavelengths (red shift).",
        explanation: "As a galaxy recedes away from Earth, the wavelength of light emitted is stretched by the Doppler effect / expansion of space, shifting absorption lines toward the longer wavelength (red) end of the spectrum.",
      },
    ],
    summaryChecklist: [
      "Main sequence stars generate energy via nuclear fusion of Hydrogen into Helium.",
      "Massive stars end as Supernovae leaving a Neutron star or Black Hole.",
      "Redshift: light from distant galaxies has longer observed wavelength.",
      "Hubble's Law: $v = H_0 d$ (speed of recession $\\propto$ distance).",
      "Big Bang evidence: Galactic Redshift + Cosmic Microwave Background Radiation (CMBR).",
    ],
  },
};
