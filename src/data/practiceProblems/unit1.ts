import { PracticeProblem } from "../../types";

export const UNIT_1_PRACTICE_PROBLEMS: PracticeProblem[] = [
  // SECTION 1.1: Speed, Velocity & Acceleration
  {
    id: "prob-1.1-1",
    topicId: "1.1",
    title: "1.1 Practice Problem 1: Constant Acceleration & Braking Distance",
    difficulty: "Core",
    marks: 4,
    question:
      "A high-speed train travels at an initial speed of 45 m/s. The driver applies the emergency brakes, bringing the train uniformly to rest over a time interval of 15.0 s.\n(a) Calculate the deceleration of the train.\n(b) Calculate the average speed of the train during the braking period.\n(c) Determine the stopping distance covered while braking.",
    givenData: [
      "Initial velocity, u = 45 m/s",
      "Final velocity, v = 0 m/s (comes to rest)",
      "Time taken, t = 15.0 s",
    ],
    formulaUsed: "a = (v - u) / t, v_avg = (u + v) / 2, d = v_avg × t",
    hints: [
      "Remember that deceleration is negative acceleration.",
      "For uniform acceleration, the average speed is simply half the sum of initial and final speeds.",
    ],
    stepByStepSolution: [
      "Step 1: Calculate acceleration using a = (v - u) / t.",
      "   a = (0 - 45) / 15.0 = -3.0 m/s².",
      "   The deceleration is 3.0 m/s² (or acceleration = -3.0 m/s²).",
      "Step 2: Calculate average speed: v_avg = (u + v) / 2 = (45 + 0) / 2 = 22.5 m/s.",
      "Step 3: Calculate distance travelled: d = v_avg × t = 22.5 m/s × 15.0 s = 337.5 m.",
      "Step 4: Round to 3 significant figures: Distance = 338 m (or 337.5 m).",
    ],
    finalAnswer: "(a) Deceleration = 3.0 m/s²\n(b) Average speed = 22.5 m/s\n(c) Stopping distance = 338 m",
    examinerTips:
      "If a question asks for 'deceleration', the answer is given as a positive number (3.0 m/s²). If it asks for 'acceleration', write -3.0 m/s².",
  },
  {
    id: "prob-1.1-2",
    topicId: "1.1",
    title: "1.1 Practice Problem 2: Distance vs Displacement & Average Velocity",
    difficulty: "Extended",
    marks: 4,
    question:
      "A runner completes 3 full laps around a 400 m oval running track in a total time of 300 s (5.0 minutes). The start and finish lines are at the exact same location.\n(a) State the total distance travelled by the runner.\n(b) Calculate the runner's average speed in m/s.\n(c) State the displacement of the runner at the end of the race.\n(d) Calculate the runner's average velocity for the entire run.",
    givenData: [
      "Track lap length = 400 m",
      "Number of laps = 3",
      "Total time, t = 300 s",
      "Start and end positions are identical",
    ],
    formulaUsed: "Distance = Number of laps × lap length, Average Speed = Total Distance / Total Time, Average Velocity = Displacement / Total Time",
    hints: [
      "Distance is a scalar quantity (path length), while displacement is a vector quantity (straight-line distance from start).",
    ],
    stepByStepSolution: [
      "Step 1: Total distance = 3 × 400 m = 1200 m.",
      "Step 2: Average speed = Total Distance / Total Time = 1200 m / 300 s = 4.0 m/s.",
      "Step 3: Because the runner finishes at the exact starting point, the net change in position (displacement) = 0 m.",
      "Step 4: Average velocity = Total Displacement / Total Time = 0 m / 300 s = 0 m/s.",
    ],
    finalAnswer: "(a) Total Distance = 1200 m\n(b) Average Speed = 4.0 m/s\n(c) Displacement = 0 m\n(d) Average Velocity = 0 m/s",
    examinerTips:
      "Cambridge Paper 2 & 4 frequently test the definition of velocity. Zero displacement always produces zero average velocity, even if total distance is large.",
  },
  {
    id: "prob-1.1-3",
    topicId: "1.1",
    title: "1.1 Practice Problem 3: Period of Oscillating Pendulum & Systematic Error",
    difficulty: "Challenging",
    marks: 4,
    question:
      "A student measures the time for 25 complete swings of a pendulum three times, recording: 41.2 s, 41.6 s, and 41.4 s. However, the digital stopwatch has a systematic zero error of +0.3 s (it starts at 0.3 s instead of 0.0 s).\n(a) Calculate the corrected mean time for 25 oscillations.\n(b) Calculate the true period T of the pendulum.\n(c) Calculate the frequency of oscillation in Hertz.",
    givenData: [
      "Measured times for 25 swings: t₁ = 41.2 s, t₂ = 41.6 s, t₃ = 41.4 s",
      "Stopwatch zero error = +0.3 s",
      "Number of swings, N = 25",
    ],
    formulaUsed: "t_raw_mean = (t₁ + t₂ + t₃)/3, t_corrected = t_raw_mean - zero_error, T = t_corrected / N, f = 1 / T",
    hints: [
      "First find the average measured time, subtract the positive zero error, then divide by the number of swings.",
    ],
    stepByStepSolution: [
      "Step 1: Calculate raw mean time: (41.2 + 41.6 + 41.4) / 3 = 124.2 / 3 = 41.4 s.",
      "Step 2: Correct for the systematic zero error: 41.4 s - 0.3 s = 41.1 s.",
      "Step 3: Calculate the period T for 1 single swing: T = 41.1 s / 25 = 1.644 s ≈ 1.64 s.",
      "Step 4: Calculate frequency f: f = 1 / T = 1 / 1.644 s = 0.608 Hz.",
    ],
    finalAnswer: "(a) Corrected mean time = 41.1 s\n(b) Period T = 1.64 s\n(c) Frequency f = 0.608 Hz",
    examinerTips:
      "In Paper 6, always correct for zero error before dividing by the number of oscillations.",
  },

  // SECTION 1.2: Distance-Time & Velocity-Time Graphs
  {
    id: "prob-1.2-1",
    topicId: "1.2",
    title: "1.2 Practice Problem 1: Velocity-Time Graph Area & Acceleration",
    difficulty: "Core",
    marks: 4,
    question:
      "A motorcycle starts from rest and accelerates uniformly at 4.0 m/s² for 5.0 s. It continues at this constant top speed for 20.0 s, then applies brakes to decelerate uniformly to a stop in 4.0 s.\n(a) Determine the top speed reached by the motorcycle.\n(b) Sketch or calculate the total distance covered during the entire 29.0 s run.\n(c) Calculate the average speed of the motorcycle.",
    givenData: [
      "Stage 1: u = 0, a = 4.0 m/s², t₁ = 5.0 s",
      "Stage 2: v = const, t₂ = 20.0 s (from t = 5.0 to 25.0 s)",
      "Stage 3: v_final = 0, t₃ = 4.0 s (from t = 25.0 to 29.0 s)",
    ],
    formulaUsed: "v = u + at, Distance = Area under v-t graph = Area(Triangle 1) + Area(Rectangle) + Area(Triangle 2)",
    hints: [
      "Top speed v = 0 + (4.0 × 5.0).",
      "Distance is the total area under the three sections of the graph.",
    ],
    stepByStepSolution: [
      "Step 1: Top speed = u + a t₁ = 0 + (4.0 × 5.0) = 20.0 m/s.",
      "Step 2: Section 1 Area (0 to 5 s) = ½ × base × height = ½ × 5.0 × 20.0 = 50.0 m.",
      "Step 3: Section 2 Area (5 to 25 s) = base × height = 20.0 × 20.0 = 400.0 m.",
      "Step 4: Section 3 Area (25 to 29 s) = ½ × base × height = ½ × 4.0 × 20.0 = 40.0 m.",
      "Step 5: Total distance = 50.0 + 400.0 + 40.0 = 490.0 m.",
      "Step 6: Average speed = Total Distance / Total Time = 490.0 m / 29.0 s = 16.9 m/s.",
    ],
    finalAnswer: "(a) Top speed = 20.0 m/s\n(b) Total distance = 490 m\n(c) Average speed = 16.9 m/s",
    examinerTips:
      "You can also use the trapezium formula: Area = ½(a + b)h = ½(20.0 + 29.0) × 20.0 = ½(49.0) × 20.0 = 490 m.",
  },
  {
    id: "prob-1.2-2",
    topicId: "1.2",
    title: "1.2 Practice Problem 2: Distance-Time Graph Gradient & Speed",
    difficulty: "Extended",
    marks: 4,
    question:
      "A student walks to school. For the first 300 s, they walk 450 m at constant speed. They stop at a traffic light for 60 s, then run the remaining 600 m in 140 s.\n(a) Calculate their walking speed in the first section.\n(b) What is the gradient of the distance-time graph during the 60 s stop?\n(c) Calculate the overall average speed for the whole journey from home to school.",
    givenData: [
      "Section 1: d₁ = 450 m, t₁ = 300 s",
      "Section 2: d₂ = 0 m (stopped), t₂ = 60 s",
      "Section 3: d₃ = 600 m, t₃ = 140 s",
    ],
    formulaUsed: "Speed = Gradient = Δd / Δt, Average Speed = Total Distance / Total Time",
    hints: [
      "On a distance-time graph, gradient = speed. When stopped, speed is 0.",
    ],
    stepByStepSolution: [
      "Step 1: Walking speed = 450 m / 300 s = 1.5 m/s.",
      "Step 2: During the stop, the object is stationary, so gradient = 0 m/s.",
      "Step 3: Total distance = 450 m + 0 m + 600 m = 1050 m.",
      "Step 4: Total time = 300 s + 60 s + 140 s = 500 s.",
      "Step 5: Overall average speed = 1050 m / 500 s = 2.1 m/s.",
    ],
    finalAnswer: "(a) Walking speed = 1.5 m/s\n(b) Gradient during stop = 0 m/s\n(c) Average speed = 2.1 m/s",
    examinerTips:
      "Include the waiting time (60 s) in the total time when calculating average speed.",
  },
  {
    id: "prob-1.2-3",
    topicId: "1.2",
    title: "1.2 Practice Problem 3: Skydiver Velocity-Time Graph & Terminal Velocity",
    difficulty: "Challenging",
    marks: 4,
    question:
      "A skydiver jumps from a plane. Describe and explain the shape of their velocity-time graph from jump until terminal velocity is reached, referring to weight, air resistance, and resultant force.",
    givenData: [
      "At t = 0: Velocity = 0 m/s, Air resistance = 0 N",
      "Downward force = Weight (W = mg, constant)",
      "Upward force = Air resistance (increases with velocity squared)",
    ],
    formulaUsed: "Resultant Force F = W - Drag, a = F / m",
    hints: [
      "Initial acceleration is g (approx 9.8 or 10 m/s²). As speed increases, drag increases, so acceleration decreases until drag = weight.",
    ],
    stepByStepSolution: [
      "Step 1 (At release): Velocity is 0, so air resistance is zero. The only force is weight downwards, so initial acceleration is g (10 m/s²). The v-t graph has its steepest gradient.",
      "Step 2 (Falling): As speed increases, air resistance increases. The upward drag opposes weight, so resultant force (W - Drag) decreases.",
      "Step 3 (Decreasing gradient): Since a = F/m, acceleration decreases. The slope of the v-t graph gradually curves and flattens.",
      "Step 4 (Terminal velocity): Eventually, upward air resistance equals downward weight. Resultant force becomes zero (F = 0), acceleration is zero, and the v-t graph becomes a horizontal flat line at constant terminal speed.",
    ],
    finalAnswer: "The v-t graph starts with a steep gradient (g), curves downwards with decreasing gradient as air resistance increases, and levels off to a horizontal line when Drag = Weight (Terminal Velocity).",
    examinerTips:
      "Always mention: 1) Initial acceleration = g; 2) Drag increases with speed; 3) Resultant force decreases; 4) Drag = Weight => zero acceleration.",
  },

  // SECTION 1.3: Newton's Laws of Motion
  {
    id: "prob-1.3-1",
    topicId: "1.3",
    title: "1.3 Practice Problem 1: Resultant Force & Newton's Second Law",
    difficulty: "Core",
    marks: 3,
    question:
      "A rocket of mass 1200 kg is launched vertically upwards. Its engines produce a continuous upward thrust of 18,000 N. Taking gravitational field strength g = 9.8 N/kg (or 10 N/kg):\n(a) Calculate the weight of the rocket.\n(b) Calculate the resultant upward force on the rocket at launch.\n(c) Calculate the initial upward acceleration of the rocket.",
    givenData: [
      "Mass, m = 1200 kg",
      "Upward thrust, T = 18,000 N",
      "g = 9.8 N/kg (using 10 N/kg gives W = 12,000 N)",
    ],
    formulaUsed: "W = m × g, F_resultant = Thrust - Weight, a = F_resultant / m",
    hints: [
      "Don't forget that weight acts downwards opposing the thrust.",
    ],
    stepByStepSolution: [
      "Step 1: Weight W = m × g = 1200 kg × 9.8 N/kg = 11,760 N (or 12,000 N if using g = 10).",
      "Step 2: Resultant upward force = Thrust - Weight = 18,000 N - 11,760 N = 6,240 N (or 6,000 N).",
      "Step 3: Acceleration a = F_resultant / m = 6,240 N / 1200 kg = 5.2 m/s² (or 5.0 m/s² with g=10).",
    ],
    finalAnswer: "(a) Weight = 11,760 N (or 12,000 N)\n(b) Resultant force = 6,240 N (or 6,000 N)\n(c) Acceleration = 5.2 m/s² (or 5.0 m/s²)",
    examinerTips:
      "A common error is using 18,000 N directly in F = ma without subtracting weight. Always calculate resultant force first!",
  },
  {
    id: "prob-1.3-2",
    topicId: "1.3",
    title: "1.3 Practice Problem 2: Newton's Third Law Pairs",
    difficulty: "Extended",
    marks: 3,
    question:
      "A person of mass 70 kg stands stationary on the floor.\n(a) Name the two forces acting on the person and explain why they are balanced.\n(b) State the Newton's Third Law reaction force to the person's gravitational pull on the Earth.\n(c) State the Newton's Third Law reaction force to the normal contact force from the floor on the person's feet.",
    givenData: [
      "Person mass = 70 kg",
      "System in static equilibrium (a = 0)",
    ],
    formulaUsed: "Newton's 1st Law (Balanced forces on 1 body) vs Newton's 3rd Law (Action-reaction on 2 bodies)",
    hints: [
      "Action-reaction pairs must act on DIFFERENT objects and be of the EXACT SAME type (gravitational with gravitational, contact with contact).",
    ],
    stepByStepSolution: [
      "Step 1: The two forces on the person are downward gravitational pull (Weight) and upward normal contact force from the floor. They balance because the person is stationary (Newton's 1st Law).",
      "Step 2: The Newton's 3rd Law pair to Earth pulling the person down is: The person pulling the Earth UPWARDS gravitationally with an equal force of 700 N.",
      "Step 3: The Newton's 3rd Law pair to the floor pushing UP on the person's feet is: The person's feet pushing DOWN on the floor with an equal contact force of 700 N.",
    ],
    finalAnswer: "(a) Weight (down) and Normal reaction (up); balanced so net F = 0.\n(b) The person pulls the Earth upwards gravitationally with equal force.\n(c) The person's feet push downwards on the floor with equal contact force.",
    examinerTips:
      "Weight and Normal reaction force are NOT a 3rd law pair because they act on the same object! 3rd law pairs must act on two distinct objects.",
  },
  {
    id: "prob-1.3-3",
    topicId: "1.3",
    title: "1.3 Practice Problem 3: Acceleration with Resisting Friction & Drag",
    difficulty: "Challenging",
    marks: 4,
    question:
      "A car of mass 1500 kg accelerates along a straight road. The engine provides a forward driving force of 4500 N. The road friction is a constant 500 N, and at a speed of 20 m/s, air drag is 1600 N.\n(a) Calculate the resultant force on the car at 20 m/s.\n(b) Calculate the acceleration of the car at this instant.\n(c) Explain what happens to the acceleration as the car continues to speed up.",
    givenData: [
      "Mass m = 1500 kg",
      "Forward driving force = 4500 N",
      "Friction = 500 N",
      "Air drag at 20 m/s = 1600 N",
    ],
    formulaUsed: "F_resultant = Forward Force - (Friction + Drag), a = F_resultant / m",
    hints: [
      "Total resisting force = Friction + Air drag.",
    ],
    stepByStepSolution: [
      "Step 1: Total backward resistance = 500 N + 1600 N = 2100 N.",
      "Step 2: Resultant force F = 4500 N - 2100 N = 2400 N forward.",
      "Step 3: Acceleration a = F / m = 2400 N / 1500 kg = 1.6 m/s².",
      "Step 4: As speed increases, air resistance increases further, causing resultant force and acceleration to decrease until drag + friction = 4500 N (top speed).",
    ],
    finalAnswer: "(a) Resultant force = 2400 N\n(b) Acceleration = 1.6 m/s²\n(c) Acceleration decreases because air resistance increases with higher speed.",
    examinerTips:
      "Always subtract the sum of all opposing forces before applying F = ma.",
  },

  // SECTION 1.4: Forces, Mass & Weight
  {
    id: "prob-1.4-1",
    topicId: "1.4",
    title: "1.4 Practice Problem 1: Mass vs Weight on Earth and Moon",
    difficulty: "Core",
    marks: 3,
    question:
      "A lunar rover has a mass of 240 kg on Earth.\n(a) State the mass of the rover when landed on the Moon.\n(b) Calculate the weight of the rover on Earth (g_earth = 9.8 N/kg).\n(c) Calculate the weight of the rover on the Moon (g_moon = 1.6 N/kg).",
    givenData: [
      "Mass on Earth, m = 240 kg",
      "g_earth = 9.8 N/kg",
      "g_moon = 1.6 N/kg",
    ],
    formulaUsed: "W = m × g",
    hints: ["Mass is invariant (never changes with location). Weight depends on local g."],
    stepByStepSolution: [
      "Step 1: Mass is a measure of the amount of matter in an object and is constant everywhere. Mass on Moon = 240 kg.",
      "Step 2: Weight on Earth = m × g_earth = 240 kg × 9.8 N/kg = 2352 N (or 2400 N with g = 10 N/kg).",
      "Step 3: Weight on Moon = m × g_moon = 240 kg × 1.6 N/kg = 384 N.",
    ],
    finalAnswer: "(a) Mass on Moon = 240 kg\n(b) Weight on Earth = 2352 N (or 2400 N)\n(c) Weight on Moon = 384 N",
    examinerTips:
      "Never state that mass changes on the Moon. Mass remains strictly 240 kg.",
  },
  {
    id: "prob-1.4-2",
    topicId: "1.4",
    title: "1.4 Practice Problem 2: Gravitational Field Strength & Density",
    difficulty: "Extended",
    marks: 4,
    question:
      "A solid metal cube with sides of length 0.050 m weighs 10.8 N on Earth (g = 10 N/kg).\n(a) Calculate the mass of the metal cube.\n(b) Calculate the volume of the cube in m³.\n(c) Calculate the density of the metal in kg/m³.",
    givenData: [
      "Side length, L = 0.050 m",
      "Weight, W = 10.8 N",
      "g = 10 N/kg",
    ],
    formulaUsed: "m = W / g, Volume V = L³, Density ρ = m / V",
    hints: ["Volume of a cube is length × width × height = L³."],
    stepByStepSolution: [
      "Step 1: Calculate mass: m = W / g = 10.8 N / 10 N/kg = 1.08 kg.",
      "Step 2: Calculate volume: V = (0.050 m)³ = 0.000125 m³ = 1.25 × 10⁻⁴ m³.",
      "Step 3: Calculate density: ρ = m / V = 1.08 kg / 0.000125 m³ = 8640 kg/m³.",
    ],
    finalAnswer: "(a) Mass = 1.08 kg\n(b) Volume = 1.25 × 10⁻⁴ m³\n(c) Density = 8640 kg/m³",
    examinerTips:
      "Be careful with volume conversion: 1 cm³ = 10⁻⁶ m³. Working directly in SI units (meters, kg) prevents unit conversion mistakes.",
  },

  // SECTION 1.5: Resultant Forces & Free Body Diagrams
  {
    id: "prob-1.5-1",
    topicId: "1.5",
    title: "1.5 Practice Problem 1: Hooke's Law & Spring Constant",
    difficulty: "Core",
    marks: 3,
    question:
      "An unstretched helical spring has an original length of 12.0 cm. When a weight of 6.0 N is suspended from the bottom, the total length increases to 15.6 cm. Assuming the limit of proportionality is not exceeded:\n(a) Calculate the extension x of the spring.\n(b) Calculate the spring constant k in N/cm and in N/m.\n(c) Predict the total length of the spring when a load of 10.0 N is attached.",
    givenData: [
      "Original length, L₀ = 12.0 cm",
      "Stretched length, L₁ = 15.6 cm for load F₁ = 6.0 N",
      "New load, F₂ = 10.0 N",
    ],
    formulaUsed: "Extension x = L - L₀, F = k × x, k = F / x, New length = L₀ + (F₂ / k)",
    hints: [
      "Extension is the difference in length, NOT the total length.",
    ],
    stepByStepSolution: [
      "Step 1: Calculate extension x₁ = 15.6 cm - 12.0 cm = 3.6 cm.",
      "Step 2: Spring constant k = F₁ / x₁ = 6.0 N / 3.6 cm = 1.67 N/cm.",
      "   In N/m: 3.6 cm = 0.036 m => k = 6.0 N / 0.036 m = 166.7 N/m (or 167 N/m).",
      "Step 3: For F₂ = 10.0 N, new extension x₂ = F₂ / k = 10.0 N / (1.67 N/cm) = 6.0 cm.",
      "Step 4: Total new length = Original length + Extension = 12.0 cm + 6.0 cm = 18.0 cm.",
    ],
    finalAnswer: "(a) Extension = 3.6 cm\n(b) Spring constant k = 1.67 N/cm (or 167 N/m)\n(c) Total length = 18.0 cm",
    examinerTips:
      "Always add the original unstretched length back when asked for 'total length'.",
  },
  {
    id: "prob-1.5-2",
    topicId: "1.5",
    title: "1.5 Practice Problem 2: Perpendicular Vector Addition",
    difficulty: "Extended",
    marks: 4,
    question:
      "A boat is pulled across a river by two ropes. One rope exerts a force of 400 N due North, and the second rope exerts a force of 300 N due East.\n(a) By calculation using Pythagoras' theorem, determine the magnitude of the resultant force on the boat.\n(b) Calculate the angle of the resultant force measured clockwise from due North.",
    givenData: [
      "North component, F_y = 400 N",
      "East component, F_x = 300 N",
      "Angle between vectors = 90°",
    ],
    formulaUsed: "R = √(F_x² + F_y²), tan(θ) = F_opposite / F_adjacent = F_x / F_y",
    hints: ["Use right-angled triangle vector addition."],
    stepByStepSolution: [
      "Step 1: Calculate resultant magnitude: R = √(300² + 400²) = √(90,000 + 160,000) = √250,000 = 500 N.",
      "Step 2: Calculate angle from North: tan(θ) = East / North = 300 / 400 = 0.75.",
      "Step 3: θ = arctan(0.75) = 36.9° (or 37°).",
    ],
    finalAnswer: "(a) Resultant magnitude = 500 N\n(b) Direction = 36.9° East of North (bearing 037°)",
    examinerTips:
      "When finding vector direction, always state what reference line the angle is measured from (e.g. 'East of North').",
  },

  // SECTION 1.6: Moments & Equilibrium
  {
    id: "prob-1.6-1",
    topicId: "1.6",
    title: "1.6 Practice Problem 1: Principle of Moments on a Lever",
    difficulty: "Core",
    marks: 3,
    question:
      "A uniform seesaw of length 4.0 m is pivoted at its exact midpoint (2.0 m mark). A child of weight 360 N sits at a distance of 1.5 m to the left of the pivot.\n(a) Calculate the anticlockwise turning moment produced by the child.\n(b) A second child of weight 450 N sits on the right side. How far from the pivot must this child sit for the seesaw to balance in rotational equilibrium?",
    givenData: [
      "Pivot is at midpoint",
      "Child 1: Weight F₁ = 360 N, distance d₁ = 1.5 m (anticlockwise)",
      "Child 2: Weight F₂ = 450 N, distance d₂ = ? (clockwise)",
    ],
    formulaUsed: "Moment = Force × Perpendicular Distance, Anticlockwise Moments = Clockwise Moments",
    hints: ["Equate total anticlockwise moment to clockwise moment."],
    stepByStepSolution: [
      "Step 1: Anticlockwise moment = F₁ × d₁ = 360 N × 1.5 m = 540 N·m.",
      "Step 2: Apply Principle of Moments: Clockwise Moment = Anticlockwise Moment.",
      "   450 N × d₂ = 540 N·m.",
      "Step 3: d₂ = 540 / 450 = 1.2 m to the right of the pivot.",
    ],
    finalAnswer: "(a) Anticlockwise moment = 540 N·m\n(b) Distance = 1.2 m from the pivot",
    examinerTips:
      "Ensure units are stated clearly: N·m (Newtons × meters) or N·cm.",
  },
  {
    id: "prob-1.6-2",
    topicId: "1.6",
    title: "1.6 Practice Problem 2: Non-Centred Pivot with Beam Weight",
    difficulty: "Challenging",
    marks: 4,
    question:
      "A uniform wooden plank of length 3.0 m and weight 120 N is supported on a pivot placed 1.0 m from end A. A mass of weight W is suspended from end A (0 m mark) to hold the plank horizontal.\n(a) State the location of the centre of gravity of the uniform plank.\n(b) Calculate the distance from the pivot to the centre of gravity.\n(c) Calculate the weight W required at end A to keep the plank in equilibrium.",
    givenData: [
      "Plank length = 3.0 m, Weight of plank = 120 N (acts at centre: 1.5 m from end A)",
      "Pivot location = 1.0 m from end A",
      "Unknown weight W at end A (distance to pivot = 1.0 m)",
    ],
    formulaUsed: "Anticlockwise Moments = Clockwise Moments, Moment of plank weight = W_plank × (centre_pos - pivot_pos)",
    hints: [
      "The centre of gravity of a uniform beam is at its midpoint (1.5 m from end A).",
      "Distance from pivot to centre of gravity = 1.5 m - 1.0 m = 0.5 m.",
    ],
    stepByStepSolution: [
      "Step 1: For a uniform plank, the centre of gravity is at the midpoint: 1.5 m from end A.",
      "Step 2: Distance from pivot (at 1.0 m) to centre of gravity = 1.5 m - 1.0 m = 0.5 m to the right (producing a clockwise moment).",
      "Step 3: Clockwise moment of beam weight = 120 N × 0.5 m = 60 N·m.",
      "Step 4: Anticlockwise moment from weight W = W × 1.0 m.",
      "Step 5: For equilibrium: W × 1.0 m = 60 N·m => W = 60 N.",
    ],
    finalAnswer: "(a) Centre of gravity is at 1.5 m from end A (midpoint)\n(b) Distance from pivot to centre of gravity = 0.5 m\n(c) Weight W = 60 N",
    examinerTips:
      "Always include the weight of the beam acting at its centre of gravity when the pivot is not at the midpoint!",
  },

  // SECTION 1.7: Momentum & Conservation of Momentum
  {
    id: "prob-1.7-1",
    topicId: "1.7",
    title: "1.7 Practice Problem 1: Inelastic Collision & Final Velocity",
    difficulty: "Core",
    marks: 4,
    question:
      "A railway wagon A of mass 2000 kg moves along a frictionless track at a speed of 3.0 m/s. It collides with a stationary wagon B of mass 1000 kg. After the collision, the two wagons couple together and move off as a single combined unit.\n(a) Calculate the total momentum of the system before the collision.\n(b) Calculate the common velocity of the coupled wagons after the collision.",
    givenData: [
      "Mass of wagon A, m₁ = 2000 kg, initial velocity u₁ = 3.0 m/s",
      "Mass of wagon B, m₂ = 1000 kg, initial velocity u₂ = 0 m/s",
      "Combined mass after collision = m₁ + m₂ = 3000 kg",
    ],
    formulaUsed: "Total Initial Momentum = Total Final Momentum => m₁u₁ + m₂u₂ = (m₁ + m₂)v",
    hints: ["Momentum is conserved in all closed collisions."],
    stepByStepSolution: [
      "Step 1: Calculate total initial momentum: p_initial = (m₁ × u₁) + (m₂ × u₂) = (2000 × 3.0) + (1000 × 0) = 6000 kg·m/s.",
      "Step 2: Apply conservation of momentum: p_final = p_initial = 6000 kg·m/s.",
      "Step 3: Since they couple together: (m₁ + m₂) × v = 6000.",
      "   3000 kg × v = 6000 kg·m/s.",
      "Step 4: v = 6000 / 3000 = 2.0 m/s.",
    ],
    finalAnswer: "(a) Total momentum before collision = 6000 kg·m/s\n(b) Common velocity after collision = 2.0 m/s in the original direction",
    examinerTips:
      "Always state 'Conservation of momentum: total momentum before = total momentum after' to secure the method mark.",
  },
  {
    id: "prob-1.7-2",
    topicId: "1.7",
    title: "1.7 Practice Problem 2: Impulse & Impact Force with Direction Reversal",
    difficulty: "Extended",
    marks: 4,
    question:
      "A tennis ball of mass 0.060 kg travels horizontally at +25 m/s. A player strikes the ball with a racket, sending it directly backwards in the opposite direction at -35 m/s. The contact duration is 0.015 s.\n(a) Calculate the initial momentum of the ball.\n(b) Calculate the change in momentum (impulse) delivered to the ball.\n(c) Calculate the average impact force exerted by the racket on the ball.",
    givenData: [
      "Mass m = 0.060 kg",
      "Initial velocity u = +25 m/s",
      "Final velocity v = -35 m/s (opposite direction)",
      "Contact time Δt = 0.015 s",
    ],
    formulaUsed: "p = mv, Impulse = Δp = m(v - u), Force F = Δp / Δt",
    hints: [
      "Velocity is a vector! When a ball bounces backwards, one velocity must be positive and the other negative.",
    ],
    stepByStepSolution: [
      "Step 1: Initial momentum p_initial = m × u = 0.060 kg × (+25 m/s) = +1.50 kg·m/s.",
      "Step 2: Final momentum p_final = m × v = 0.060 kg × (-35 m/s) = -2.10 kg·m/s.",
      "Step 3: Change in momentum Δp = p_final - p_initial = -2.10 - (+1.50) = -3.60 kg·m/s (or 3.60 N·s in magnitude).",
      "Step 4: Average force F = Δp / Δt = -3.60 / 0.015 = -240 N (240 N in the backwards direction).",
    ],
    finalAnswer: "(a) Initial momentum = +1.50 kg·m/s\n(b) Impulse = 3.60 N·s (or -3.60 kg·m/s)\n(c) Average force = 240 N in the reverse direction",
    examinerTips:
      "The most common trap is writing Δp = 0.060 × (35 - 25) = 0.60 kg·m/s. Because direction reverses, you MUST add speeds: Δv = 25 - (-35) = 60 m/s!",
  },

  // SECTION 1.8: Work, Energy & Power
  {
    id: "prob-1.8-1",
    topicId: "1.8",
    title: "1.8 Practice Problem 1: GPE to KE Conversion in Rollercoaster",
    difficulty: "Core",
    marks: 4,
    question:
      "A rollercoaster cart of mass 400 kg starts from rest at the top of a hill of height h = 20.0 m above ground level. Assuming air resistance and track friction are negligible (g = 9.8 N/kg):\n(a) Calculate the Gravitational Potential Energy (GPE) of the cart at the top of the hill relative to the ground.\n(b) State the Kinetic Energy (KE) of the cart at the bottom of the hill.\n(c) Calculate the maximum speed of the cart at the bottom.",
    givenData: [
      "Mass m = 400 kg",
      "Height h = 20.0 m",
      "Initial velocity u = 0 m/s",
      "g = 9.8 N/kg (or 10 N/kg)",
    ],
    formulaUsed: "GPE = mgh, KE = ½mv², Conservation of Energy: GPE_loss = KE_gain => v = √(2gh)",
    hints: ["All GPE is converted to KE at the bottom of the frictionless track."],
    stepByStepSolution: [
      "Step 1: Calculate GPE at top: Ep = m × g × h = 400 kg × 9.8 N/kg × 20.0 m = 78,400 J (or 80,000 J with g=10).",
      "Step 2: By conservation of energy, KE at bottom = GPE at top = 78,400 J (or 80,000 J).",
      "Step 3: Calculate speed: KE = ½ m v² => 78,400 = ½ × 400 × v² = 200 v².",
      "Step 4: v² = 78,400 / 200 = 392 => v = √392 = 19.8 m/s (or 20.0 m/s with g=10).",
    ],
    finalAnswer: "(a) GPE = 78,400 J (or 80 kJ)\n(b) KE at bottom = 78,400 J\n(c) Speed at bottom = 19.8 m/s (or 20.0 m/s)",
    examinerTips:
      "Notice that mass cancels out when finding speed: v = √(2gh). All objects fall at the exact same speed regardless of mass when friction is zero.",
  },
  {
    id: "prob-1.8-2",
    topicId: "1.8",
    title: "1.8 Practice Problem 2: Electric Motor Work, Power & Efficiency",
    difficulty: "Extended",
    marks: 4,
    question:
      "An electric motor with a power input rating of 600 W is used to lift a crate of mass 50 kg vertically through a height of 8.0 m. The lift takes 10.0 s (g = 9.8 N/kg).\n(a) Calculate the useful work done on the crate (gain in GPE).\n(b) Calculate the useful power output of the motor.\n(c) Calculate the electrical energy input supplied in 10.0 s.\n(d) Calculate the percentage efficiency of the motor.",
    givenData: [
      "Power input = 600 W",
      "Mass m = 50 kg",
      "Height h = 8.0 m",
      "Time t = 10.0 s",
      "g = 9.8 N/kg",
    ],
    formulaUsed: "Useful Work = mgh, Useful Power = Work / t, Total Energy In = P_in × t, Efficiency = (Useful Output / Total Input) × 100%",
    hints: ["Efficiency is Useful Output / Total Input."],
    stepByStepSolution: [
      "Step 1: Useful work done = m × g × h = 50 kg × 9.8 N/kg × 8.0 m = 3920 J (or 4000 J with g=10).",
      "Step 2: Useful power output = Work / time = 3920 J / 10.0 s = 392 W (or 400 W).",
      "Step 3: Total electrical energy input = Power Input × time = 600 W × 10.0 s = 6000 J.",
      "Step 4: Efficiency = (Useful Energy Output / Total Energy Input) × 100% = (3920 / 6000) × 100% = 65.3% (or 66.7% with g=10).",
    ],
    finalAnswer: "(a) Useful work = 3920 J\n(b) Useful power output = 392 W\n(c) Total electrical energy in = 6000 J\n(d) Efficiency = 65.3%",
    examinerTips:
      "Efficiency is always less than 100% in real machines due to energy dissipated as thermal energy and sound in bearings.",
  },
];
