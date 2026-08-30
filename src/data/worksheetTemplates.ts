export interface WorksheetMCQ {
  id: string;
  number: number;
  question: string;
  options: { label: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  diagramSvg?: string;
}

export interface WorksheetStructuredQuestion {
  id: string;
  number: number;
  part: string;
  questionText: string;
  marks: number;
  lines: number;
  modelAnswer: string;
  markBreakdown: string[];
  formula?: string;
  diagramSvg?: string;
}

export interface WorksheetChallengeQuestion {
  id: string;
  title: string;
  questionText: string;
  marks: number;
  lines: number;
  modelAnswer: string;
  markBreakdown: string[];
  examinerInsight: string;
}

export interface WorkedExample {
  title: string;
  problem: string;
  givenData: { symbol: string; value: string; meaning: string }[];
  steps: { stepNumber: number; description: string; equation: string; calculation: string; mark: string }[];
  finalAnswer: string;
  commonPitfall: string;
}

export interface WorksheetTemplate {
  id: string;
  topicId: string;
  topicTitle: string;
  subTopic: string;
  syllabusRef: string;
  difficulty: "Core" | "Extended" | "Challenging";
  estimatedTime: string;
  totalMarks: number;
  theorySummary: {
    overview: string;
    keyDefinitions: { term: string; definition: string; unit?: string }[];
    essentialFormulas: { name: string; formula: string; units: string; triangle?: string }[];
    keyRules: string[];
  };
  workedExample: WorkedExample;
  mcqs: WorksheetMCQ[];
  structuredQuestions: WorksheetStructuredQuestion[];
  challengeQuestion: WorksheetChallengeQuestion;
}

export const IGCSE_WORKSHEET_TEMPLATES: WorksheetTemplate[] = [
  // =========================================================================
  // WORKSHEET 1: DENSITY, PRESSURE & FLUID MECHANICS
  // =========================================================================
  {
    id: "ws-density-pressure",
    topicId: "unit-1",
    topicTitle: "Density, Pressure & Fluid Mechanics",
    subTopic: "1.1 & 1.8 Density, Solid Pressure & Hydrostatic Depth Pressure",
    syllabusRef: "Cambridge IGCSE Physics 0625 • Section 1.4 & 1.8",
    difficulty: "Extended",
    estimatedTime: "45 Minutes",
    totalMarks: 25,
    theorySummary: {
      overview: "Density measures mass per unit volume. Pressure is the perpendicular force acting per unit area. In liquids, pressure acts in all directions and increases linearly with depth (Δp = ρgΔh).",
      keyDefinitions: [
        {
          term: "Density (ρ)",
          definition: "The mass per unit volume of a substance.",
          unit: "kg/m³ or g/cm³ (1 g/cm³ = 1000 kg/m³)",
        },
        {
          term: "Pressure (P)",
          definition: "The force exerted perpendicular to a surface per unit area.",
          unit: "Pascal (Pa) or N/m²",
        },
        {
          term: "Hydrostatic Pressure",
          definition: "The pressure exerted by a fluid at equilibrium due to the force of gravity.",
          unit: "Δp = ρ · g · h",
        },
      ],
      essentialFormulas: [
        {
          name: "Density Formula",
          formula: "ρ = m / V  =>  m = ρ · V",
          units: "m in kg, V in m³, ρ in kg/m³",
        },
        {
          name: "Solid Surface Pressure",
          formula: "P = F / A",
          units: "F in N, A in m², P in Pa (N/m²)",
        },
        {
          name: "Fluid Pressure at Depth",
          formula: "Δp = ρ · g · Δh",
          units: "ρ in kg/m³, g = 9.8 N/kg, h in m",
        },
      ],
      keyRules: [
        "1 g/cm³ = 1000 kg/m³. To convert cm³ to m³, divide by 1,000,000 (10⁶).",
        "Objects float if their average density is LESS than the liquid density (ρ_object < ρ_fluid).",
        "Total pressure under water = Atmospheric Pressure (p_atm ≈ 1.0 × 10⁵ Pa) + Hydrostatic Pressure (ρgh).",
        "In U-tube manometers, pressure difference Δp = ρ · g · Δh.",
      ],
    },
    workedExample: {
      title: "Calculating Total Pressure and Downward Force on a Submarine Hatch",
      problem: "A submarine is submerged at a depth of 35 m in seawater of density 1025 kg/m³. Atmospheric pressure is 1.01 × 10⁵ Pa and g = 9.8 N/kg. Calculate: (a) the hydrostatic pressure due to the water, (b) the total pressure on the top surface, and (c) the downward force on a circular hatch of area 0.40 m².",
      givenData: [
        { symbol: "h", value: "35 m", meaning: "Depth below sea surface" },
        { symbol: "ρ", value: "1025 kg/m³", meaning: "Density of seawater" },
        { symbol: "p_atm", value: "1.01 × 10⁵ Pa", meaning: "Atmospheric pressure" },
        { symbol: "A", value: "0.40 m²", meaning: "Surface area of hatch" },
        { symbol: "g", value: "9.8 N/kg", meaning: "Gravitational field strength" },
      ],
      steps: [
        {
          stepNumber: 1,
          description: "Calculate hydrostatic pressure due to water depth",
          equation: "p_water = ρ · g · h",
          calculation: "p_water = 1025 × 9.8 × 35 = 351,575 Pa (3.52 × 10⁵ Pa)",
          mark: "[2 Marks]",
        },
        {
          stepNumber: 2,
          description: "Calculate total pressure acting on top surface",
          equation: "P_total = p_atm + p_water",
          calculation: "P_total = 101,000 + 351,575 = 452,575 Pa (4.53 × 10⁵ Pa)",
          mark: "[1 Mark]",
        },
        {
          stepNumber: 3,
          description: "Calculate total downward force on the hatch",
          equation: "F = P_total · A",
          calculation: "F = 452,575 × 0.40 = 181,030 N (1.81 × 10⁵ N / 181 kN)",
          mark: "[2 Marks]",
        },
      ],
      finalAnswer: "Hydrostatic = 3.52 × 10⁵ Pa • Total = 4.53 × 10⁵ Pa • Downward Force = 181 kN",
      commonPitfall: "Students often forget to add atmospheric pressure when asked for 'total pressure', or forget that force = pressure × area.",
    },
    mcqs: [
      {
        id: "mcq-dp-1",
        number: 1,
        question: "A solid rectangular block of mass 4.8 kg has dimensions 0.12 m × 0.16 m × 0.32 m. Which orientation produces the SMALLEST pressure on a bench?",
        options: [
          { label: "A", text: "Resting on the 0.12 m × 0.16 m face" },
          { label: "B", text: "Resting on the 0.16 m × 0.32 m face" },
          { label: "C", text: "Resting on the 0.12 m × 0.32 m face" },
          { label: "D", text: "All faces produce the exact same pressure" },
        ],
        correctAnswer: "B",
        explanation: "Pressure = Force / Area. To get the smallest pressure, the contact area must be largest. Area B = 0.16 × 0.32 = 0.0512 m² (largest face).",
      },
      {
        id: "mcq-dp-2",
        number: 2,
        question: "A diver swims from a freshwater lake (density 1000 kg/m³) into the Mediterranean Sea (density 1030 kg/m³) at the exact same depth of 10 m. How does the water pressure compare?",
        options: [
          { label: "A", text: "Pressure in the sea is greater because the liquid has higher density" },
          { label: "B", text: "Pressure in the lake is greater because freshwater is lighter" },
          { label: "C", text: "Pressure is identical because depth is unchanged" },
          { label: "D", text: "Pressure depends only on the volume of the sea" },
        ],
        correctAnswer: "A",
        explanation: "From Δp = ρgh, pressure is directly proportional to density. Higher density (1030 > 1000) causes greater hydrostatic pressure.",
      },
      {
        id: "mcq-dp-3",
        number: 3,
        question: "A piece of rock has a mass of 180 g and volume 60 cm³. When placed in a liquid of density 2.5 g/cm³, what happens?",
        options: [
          { label: "A", text: "The rock floats because its density (3.0 g/cm³) is greater than the liquid" },
          { label: "B", text: "The rock sinks because its density (3.0 g/cm³) is greater than the liquid" },
          { label: "C", text: "The rock floats because its density (0.33 g/cm³) is less than the liquid" },
          { label: "D", text: "The rock dissolves completely" },
        ],
        correctAnswer: "B",
        explanation: "Density of rock = mass / volume = 180 g / 60 cm³ = 3.0 g/cm³. Since 3.0 g/cm³ > 2.5 g/cm³, the rock is denser than the liquid and sinks.",
      },
      {
        id: "mcq-dp-4",
        number: 4,
        question: "In a U-tube manometer connected to a gas supply, the water level on the open side is 20 cm higher than the side connected to the gas. What does this indicate?",
        options: [
          { label: "A", text: "Gas pressure is 20 cm of water below atmospheric pressure" },
          { label: "B", text: "Gas pressure is equal to atmospheric pressure" },
          { label: "C", text: "Gas pressure is 20 cm of water above atmospheric pressure" },
          { label: "D", text: "Atmospheric pressure is zero" },
        ],
        correctAnswer: "C",
        explanation: "Because the open side water column is pushed higher, the gas supply exerts greater pressure than the atmosphere by excess height Δh = 20 cm.",
      },
    ],
    structuredQuestions: [
      {
        id: "sq-dp-1",
        number: 5,
        part: "(a)",
        questionText: "A rectangular container has base dimensions 0.20 m × 0.15 m and is filled with oil of density 850 kg/m³ to a depth of 0.40 m. (g = 9.8 N/kg)\n(i) Calculate the volume of the oil in the container.\n(ii) Calculate the mass of the oil.\n(iii) Calculate the pressure exerted by the oil on the base of the container.",
        marks: 6,
        lines: 6,
        modelAnswer: "(i) V = 0.20 × 0.15 × 0.40 = 0.012 m³.\n(ii) m = ρ · V = 850 × 0.012 = 10.2 kg.\n(iii) p = ρ · g · h = 850 × 9.8 × 0.40 = 3332 Pa (or 3.33 kPa).",
        markBreakdown: [
          "V = 0.20 × 0.15 × 0.40 = 0.012 m³ [1 Mark]",
          "m = ρ · V = 850 × 0.012 [1 Mark] = 10.2 kg [1 Mark]",
          "p = ρgh = 850 × 9.8 × 0.40 [2 Marks] = 3332 Pa (or 3300 Pa) [1 Mark]",
        ],
        formula: "V = l · w · h, m = ρ · V, p = ρ · g · h",
      },
      {
        id: "sq-dp-2",
        number: 6,
        part: "(b)",
        questionText: "A hydraulic jack has an effort piston of cross-sectional area 0.0020 m² and a load piston of cross-sectional area 0.080 m².\n(i) A downward force of 150 N is applied to the effort piston. Calculate the pressure created in the hydraulic fluid.\n(ii) Calculate the upward force exerted by the load piston on a car.",
        marks: 5,
        lines: 5,
        modelAnswer: "(i) P = F₁ / A₁ = 150 / 0.0020 = 75,000 Pa (75 kPa).\n(ii) F₂ = P · A₂ = 75,000 × 0.080 = 6000 N (6.0 kN).",
        markBreakdown: [
          "P = 150 / 0.0020 [1 Mark] = 75,000 Pa [1 Mark]",
          "Pressure transmitted equally throughout fluid [1 Mark]",
          "F₂ = 75,000 × 0.080 [1 Mark] = 6000 N [1 Mark]",
        ],
        formula: "P = F₁ / A₁ = F₂ / A₂",
      },
    ],
    challengeQuestion: {
      id: "cq-dp-1",
      title: "HOTs / Paper 4 Extension: Floating Wooden Cube Equilibrium",
      questionText: "A solid wooden cube of side length 10.0 cm (0.10 m) and density 700 kg/m³ is placed into a tank of water of density 1000 kg/m³.\n\n(a) Show by calculation that the mass of the cube is 0.70 kg.\n(b) By equating the weight of the cube to the upward buoyant force (Archimedes' Principle), calculate the depth h to which the lower face of the cube is submerged.\n(c) The water level is raised by pouring a 2.0 cm layer of oil (density 800 kg/m³) on top of the water without mixing. State and explain what happens to the submerged depth in the water.",
      marks: 6,
      lines: 7,
      modelAnswer: "(a) Volume = 0.10³ = 0.0010 m³. Mass m = ρ · V = 700 × 0.0010 = 0.70 kg.\n(b) Weight W = mg = 0.70 × 9.8 = 6.86 N. Buoyancy = Weight of displaced water = ρ_w · A · h · g => 6.86 = 1000 × (0.10 × 0.10) × h × 9.8 => 6.86 = 98h => h = 0.070 m = 7.0 cm.\n(c) The depth in water decreases. The oil layer exerts an additional upward buoyant force on the upper part of the cube, meaning less water needs to be displaced to support the cube's total weight.",
      markBreakdown: [
        "V = 0.0010 m³ and m = 700 × 0.0010 = 0.70 kg [1 Mark]",
        "Weight = 0.70 × 9.8 = 6.86 N [1 Mark]",
        "Buoyant force = 1000 × 0.010 × h × 9.8 [1 Mark] => h = 0.070 m (7.0 cm) [1 Mark]",
        "Depth in water decreases [1 Mark]",
        "Oil provides upthrust, so less water displacement is required for total equilibrium [1 Mark]",
      ],
      examinerInsight: "In equilibrium floating problems, the fraction of volume submerged equals the ratio of densities: h/H = ρ_solid / ρ_liquid = 700 / 1000 = 0.70 => h = 7.0 cm.",
    },
  },

  // =========================================================================
  // WORKSHEET 2: KINEMATICS & MOTION GRAPHS
  // =========================================================================
  {
    id: "ws-kinematics-motion",
    topicId: "unit-1",
    topicTitle: "Kinematics & Motion Graphs",
    subTopic: "1.2 Speed, Velocity, Acceleration & Speed-Time Graphs",
    syllabusRef: "Cambridge IGCSE Physics 0625 • Section 1.2",
    difficulty: "Extended",
    estimatedTime: "45 Minutes",
    totalMarks: 25,
    theorySummary: {
      overview: "Motion describes change in position over time. Speed is distance over time (scalar), while velocity is speed in a given direction (vector). Acceleration is the rate of change of velocity.",
      keyDefinitions: [
        { term: "Speed", definition: "Distance travelled per unit time (scalar).", unit: "m/s or km/h" },
        { term: "Velocity", definition: "Rate of change of displacement (speed in a specified direction, vector).", unit: "m/s" },
        { term: "Acceleration", definition: "Rate of change of velocity per unit time (a = (v - u) / t).", unit: "m/s²" },
        { term: "Terminal Velocity", definition: "The constant maximum velocity reached when upward air resistance equals downward weight (resultant force = 0).", unit: "m/s" },
      ],
      essentialFormulas: [
        { name: "Average Speed", formula: "v = Total Distance / Total Time", units: "d in m, t in s, v in m/s" },
        { name: "Acceleration", formula: "a = (v - u) / t", units: "u, v in m/s, t in s, a in m/s²" },
        { name: "Distance from v-t Graph", formula: "Distance = Area under Speed-Time Graph", units: "Area of rectangles + triangles" },
      ],
      keyRules: [
        "Gradient of Distance-Time Graph = Speed.",
        "Gradient of Speed-Time Graph = Acceleration.",
        "Horizontal line on Speed-Time Graph = Constant speed (zero acceleration).",
        "Curved line on Speed-Time Graph = Changing acceleration.",
        "Area under Speed-Time Graph = Distance travelled.",
      ],
    },
    workedExample: {
      title: "Analyzing a 3-Stage Speed-Time Graph",
      problem: "A car accelerates uniformly from rest to 24 m/s in 6.0 s, cruises at 24 m/s for 10.0 s, and decelerates uniformly to rest in 4.0 s. Calculate: (a) acceleration in first 6 s, (b) total distance travelled, (c) average speed for the whole 20 s journey.",
      givenData: [
        { symbol: "u", value: "0 m/s", meaning: "Initial velocity" },
        { symbol: "v", value: "24 m/s", meaning: "Cruising velocity" },
        { symbol: "t_total", value: "20.0 s", meaning: "Total duration" },
      ],
      steps: [
        {
          stepNumber: 1,
          description: "Calculate acceleration from gradient in stage 1",
          equation: "a = (v - u) / t",
          calculation: "a = (24 - 0) / 6.0 = 4.0 m/s²",
          mark: "[2 Marks]",
        },
        {
          stepNumber: 2,
          description: "Calculate distance using area of trapezium under v-t graph",
          equation: "Area = ½(a + b) · h",
          calculation: "Area = ½ × (10 + 20) × 24 = ½ × 30 × 24 = 360 m",
          mark: "[3 Marks]",
        },
        {
          stepNumber: 3,
          description: "Calculate average speed",
          equation: "v_avg = Total Distance / Total Time",
          calculation: "v_avg = 360 / 20 = 18 m/s",
          mark: "[1 Mark]",
        },
      ],
      finalAnswer: "a = 4.0 m/s² • Distance = 360 m • Average Speed = 18 m/s",
      commonPitfall: "Never calculate average speed as (0 + 24) / 2 = 12 m/s. Average speed is strictly Total Distance / Total Time.",
    },
    mcqs: [
      {
        id: "mcq-km-1",
        number: 1,
        question: "An athlete runs at 8.0 m/s for 10 s, and then at 6.0 m/s for 12 s. Which expression correctly calculates the average speed?",
        options: [
          { label: "A", text: "(8.0 + 6.0) / 2" },
          { label: "B", text: "[(8.0 × 10) + (6.0 × 12)] / 22" },
          { label: "C", text: "[(8.0 / 10) + (6.0 / 12)] / 22" },
          { label: "D", text: "(8.0 × 6.0) / 22" },
        ],
        correctAnswer: "B",
        explanation: "Total distance = (8 × 10) + (6 × 12) = 80 + 72 = 152 m. Total time = 10 + 12 = 22 s. Average speed = 152 / 22.",
      },
      {
        id: "mcq-km-2",
        number: 2,
        question: "Which feature of a distance-time graph represents speed?",
        options: [
          { label: "A", text: "The area under the graph" },
          { label: "B", text: "The y-intercept" },
          { label: "C", text: "The gradient of the graph" },
          { label: "D", text: "The total length of the line" },
        ],
        correctAnswer: "C",
        explanation: "Gradient = Δy / Δx = Δdistance / Δtime = Speed.",
      },
      {
        id: "mcq-km-3",
        number: 3,
        question: "A skydiver falls through the air and reaches terminal velocity. What is the acceleration of the skydiver at terminal velocity?",
        options: [
          { label: "A", text: "9.8 m/s² downwards" },
          { label: "B", text: "9.8 m/s² upwards" },
          { label: "C", text: "0 m/s²" },
          { label: "D", text: "Decreasing continuously" },
        ],
        correctAnswer: "C",
        explanation: "At terminal velocity, air resistance equals weight, so resultant force = 0 N and acceleration = 0 m/s².",
      },
      {
        id: "mcq-km-4",
        number: 4,
        question: "A car moving at 15 m/s decelerates uniformly to rest in 5.0 s. What is the distance travelled during braking?",
        options: [
          { label: "A", text: "75 m" },
          { label: "B", text: "37.5 m" },
          { label: "C", text: "3.0 m" },
          { label: "D", text: "15 m" },
        ],
        correctAnswer: "B",
        explanation: "Distance = area of triangle under v-t graph = ½ × base × height = ½ × 5.0 × 15 = 37.5 m.",
      },
    ],
    structuredQuestions: [
      {
        id: "sq-km-1",
        number: 5,
        part: "(a)",
        questionText: "A train of mass 5.6 × 10⁵ kg accelerates uniformly from rest along a straight horizontal track to a speed of 30 m/s in 40 s.\n(i) Calculate the acceleration of the train.\n(ii) Calculate the resultant force acting on the train.\n(iii) Calculate the distance travelled in the first 40 s.",
        marks: 6,
        lines: 6,
        modelAnswer: "(i) a = (v - u) / t = (30 - 0) / 40 = 0.75 m/s².\n(ii) F = m · a = 5.6 × 10⁵ × 0.75 = 4.2 × 10⁵ N (420 kN).\n(iii) Distance = ½ × 40 × 30 = 600 m.",
        markBreakdown: [
          "a = (30 - 0) / 40 [1 Mark] = 0.75 m/s² [1 Mark]",
          "F = ma = 5.6 × 10⁵ × 0.75 [1 Mark] = 4.2 × 10⁵ N [1 Mark]",
          "Distance = ½ × b × h = ½ × 40 × 30 [1 Mark] = 600 m [1 Mark]",
        ],
        formula: "a = Δv/t, F = ma, s = ½vt",
      },
    ],
    challengeQuestion: {
      id: "cq-km-1",
      title: "HOTs / Paper 4 Extension: Parachute Deployment Kinematics",
      questionText: "A skydiver of mass 76 kg jumps from a plane. At t = 0 s, she opens her parachute while falling vertically at 60 m/s. Over the next 4.0 s, her speed decreases rapidly to 12 m/s.\n\n(a) Explain in terms of forces why her speed decreases rapidly when the parachute opens.\n(b) Calculate the average deceleration of the skydiver between t = 0 s and t = 4.0 s.\n(c) Calculate the average upward force exerted by the air on the parachute during this 4.0 s period (g = 9.8 N/kg).",
      marks: 6,
      lines: 7,
      modelAnswer: "(a) Opening the parachute drastically increases surface area, producing an upward air resistance (drag) that is much greater than her downward weight. This produces a large net upward resultant force, causing rapid deceleration.\n(b) a = (v - u) / t = (12 - 60) / 4.0 = -48 / 4.0 = -12 m/s² (Deceleration = 12 m/s²).\n(c) Net upward force F_net = m · a = 76 × 12 = 912 N. Downward weight W = mg = 76 × 9.8 = 744.8 N. Upward drag R = F_net + W = 912 + 744.8 = 1656.8 N ≈ 1700 N (1.7 kN).",
      markBreakdown: [
        "Parachute increases surface area causing drag > weight [1 Mark]",
        "Net upward resultant force causes deceleration [1 Mark]",
        "a = (60 - 12) / 4.0 = 12 m/s² [2 Marks]",
        "F_net = 76 × 12 = 912 N [1 Mark]",
        "Total upward force = F_net + mg = 912 + 745 = 1657 N (1.7 kN) [1 Mark]",
      ],
      examinerInsight: "Common mistake: forgetting to add weight when finding the total upward drag force ($F_{\\text{air}} - W = ma \\Rightarrow F_{\\text{air}} = ma + mg$).",
    },
  },

  // =========================================================================
  // WORKSHEET 3: THERMAL PHYSICS & SPECIFIC HEAT CAPACITY
  // =========================================================================
  {
    id: "ws-thermal-physics",
    topicId: "unit-2",
    topicTitle: "Thermal Physics & Heat Transfers",
    subTopic: "2.2 Specific Heat Capacity, Latent Heat & Radiation",
    syllabusRef: "Cambridge IGCSE Physics 0625 • Section 2.2 & 2.3",
    difficulty: "Extended",
    estimatedTime: "45 Minutes",
    totalMarks: 25,
    theorySummary: {
      overview: "Thermal energy is transferred from regions of higher temperature to lower temperature via conduction, convection, and radiation. Specific heat capacity (c) is the energy needed to raise 1 kg by 1 °C.",
      keyDefinitions: [
        { term: "Specific Heat Capacity (c)", definition: "The energy required per unit mass to raise temperature by 1 °C.", unit: "J/(kg·°C)" },
        { term: "Specific Latent Heat of Fusion (L_f)", definition: "The energy required to change 1 kg of solid to liquid at constant melting temperature.", unit: "J/kg" },
        { term: "Specific Latent Heat of Vaporization (L_v)", definition: "The energy required to change 1 kg of liquid to gas at constant boiling temperature.", unit: "J/kg" },
        { term: "Conduction", definition: "Thermal energy transfer in solids via atomic lattice vibrations and free delocalised electrons.", unit: "—" },
      ],
      essentialFormulas: [
        { name: "Specific Heat Capacity", formula: "ΔE = m · c · ΔT", units: "m in kg, c in J/(kg·°C), ΔT in °C, E in J" },
        { name: "Specific Latent Heat", formula: "ΔE = m · L", units: "m in kg, L in J/kg, E in J" },
        { name: "Electrical Thermal Power", formula: "E = P · t = V · I · t", units: "P in W, t in s, V in V, I in A" },
      ],
      keyRules: [
        "During phase change (melting/boiling), temperature remains strictly constant while latent heat breaks intermolecular bonds.",
        "Dull black surfaces: Best Emitters & Absorbers of radiation; worst reflectors.",
        "Shiny silver/white surfaces: Best Reflectors; worst emitters & absorbers.",
        "Convection only occurs in fluids (liquids & gases) because heated fluid expands, becomes less dense, and rises.",
      ],
    },
    workedExample: {
      title: "Determining SHC of an Aluminium Block Using an Electrical Immersion Heater",
      problem: "A 12 V, 3.5 A immersion heater is used to heat a 1.2 kg aluminium block for 5.0 minutes (300 s). The temperature rises from 20 °C to 38 °C. Assuming no heat is lost to surroundings, calculate the specific heat capacity of aluminium.",
      givenData: [
        { symbol: "V", value: "12 V", meaning: "Voltage across heater" },
        { symbol: "I", value: "3.5 A", meaning: "Current through heater" },
        { symbol: "t", value: "300 s", meaning: "Heating time (5 × 60 s)" },
        { symbol: "m", value: "1.2 kg", meaning: "Mass of aluminium" },
        { symbol: "ΔT", value: "18 °C", meaning: "Temperature rise (38 - 20)" },
      ],
      steps: [
        {
          stepNumber: 1,
          description: "Calculate electrical energy supplied by heater",
          equation: "E = V · I · t",
          calculation: "E = 12 × 3.5 × 300 = 12,600 J",
          mark: "[2 Marks]",
        },
        {
          stepNumber: 2,
          description: "Rearrange thermal energy equation for specific heat capacity c",
          equation: "c = E / (m · ΔT)",
          calculation: "c = 12,600 / (1.2 × 18) = 12,600 / 21.6 = 583.3 J/(kg·°C)",
          mark: "[2 Marks]",
        },
      ],
      finalAnswer: "c = 583 J/(kg·°C) (or 580 J/(kg·°C))",
      commonPitfall: "Always convert heating minutes to seconds before multiplying in $E = VIt$.",
    },
    mcqs: [
      {
        id: "mcq-th-1",
        number: 1,
        question: "A glass beaker contains 0.20 kg of water at 20 °C (c = 4200 J/kg°C). A brass block of mass 0.15 kg at 170 °C is lowered into the water. The final equilibrium temperature is 30 °C. What is the specific heat capacity of the brass? (Assume zero heat loss)",
        options: [
          { label: "A", text: "400 J/(kg·°C)" },
          { label: "B", text: "660 J/(kg·°C)" },
          { label: "C", text: "1200 J/(kg·°C)" },
          { label: "D", text: "5600 J/(kg·°C)" },
        ],
        correctAnswer: "A",
        explanation: "Heat gained by water = m_w c_w ΔT_w = 0.20 × 4200 × (30 - 20) = 8400 J. Heat lost by brass = m_b c_b ΔT_b = 0.15 × c_b × (170 - 30) = 21 c_b. 21 c_b = 8400 => c_b = 400 J/(kg·°C).",
      },
      {
        id: "mcq-th-2",
        number: 2,
        question: "Why does evaporation of sweat cool down a human body?",
        options: [
          { label: "A", text: "The least energetic particles escape, leaving high energy particles" },
          { label: "B", text: "The most energetic particles escape, decreasing the average kinetic energy of the remaining liquid" },
          { label: "C", text: "Water conducts cold temperature directly from the air into the skin" },
          { label: "D", text: "Sweat prevents radiation from entering the body" },
        ],
        correctAnswer: "B",
        explanation: "Evaporation is the escape of highest-energy particles from the liquid surface. As high KE particles leave, the mean KE of remaining liquid drops, cooling the skin.",
      },
      {
        id: "mcq-th-3",
        number: 3,
        question: "Which surface is the best emitter and absorber of thermal radiation?",
        options: [
          { label: "A", text: "Polished shiny silver" },
          { label: "B", text: "Dull matt black" },
          { label: "C", text: "Smooth white plastic" },
          { label: "D", text: "Clear transparent glass" },
        ],
        correctAnswer: "B",
        explanation: "Dull matt black surfaces are the best emitters and absorbers of infrared radiation.",
      },
      {
        id: "mcq-th-4",
        number: 4,
        question: "What happens to the temperature of pure water while it is boiling at 100 °C in an open saucepan?",
        options: [
          { label: "A", text: "Temperature increases continuously above 100 °C" },
          { label: "B", text: "Temperature remains constant at 100 °C" },
          { label: "C", text: "Temperature fluctuates between 90 °C and 110 °C" },
          { label: "D", text: "Temperature drops because steam carries energy away" },
        ],
        correctAnswer: "B",
        explanation: "During boiling, thermal energy is used solely as latent heat of vaporization to break intermolecular bonds; average kinetic energy and temperature remain constant.",
      },
    ],
    structuredQuestions: [
      {
        id: "sq-th-1",
        number: 5,
        part: "(a)",
        questionText: "An electric kettle of power rating 3.0 kW contains 1.5 kg of water at 20 °C. The specific heat capacity of water is 4200 J/(kg·°C).\n(i) Calculate the thermal energy needed to heat the water to its boiling point of 100 °C.\n(ii) Calculate the time taken by the kettle to supply this energy, assuming 100% efficiency.",
        marks: 5,
        lines: 5,
        modelAnswer: "(i) ΔT = 100 - 20 = 80 °C. ΔE = mcΔT = 1.5 × 4200 × 80 = 504,000 J (504 kJ).\n(ii) t = E / P = 504,000 / 3000 W = 168 s (2.8 minutes).",
        markBreakdown: [
          "ΔT = 80 °C [1 Mark]",
          "ΔE = 1.5 × 4200 × 80 [1 Mark] = 504,000 J [1 Mark]",
          "t = E / P = 504,000 / 3000 [1 Mark] = 168 s (or 2.8 min) [1 Mark]",
        ],
        formula: "E = mcΔT, t = E / P",
      },
    ],
    challengeQuestion: {
      id: "cq-th-1",
      title: "HOTs / Paper 4 Extension: Thermal Capacity & Latent Heat Mixture",
      questionText: "A 0.40 kg copper calorimeter container contains 0.30 kg of water at 40 °C. Ice cubes at 0 °C are added until the final temperature of the mixture reaches 10 °C.\n(c_water = 4200 J/kg°C, c_copper = 390 J/kg°C, L_fusion = 3.3 × 10⁵ J/kg).\n\n(a) Calculate the total thermal energy lost by the warm water and the copper container as they cool to 10 °C.\n(b) By equating heat lost to heat gained (melting ice + warming melted water to 10 °C), calculate the mass of ice melted.",
      marks: 6,
      lines: 7,
      modelAnswer: "(a) ΔT = 40 - 10 = 30 °C.\nHeat lost by water = 0.30 × 4200 × 30 = 37,800 J.\nHeat lost by copper = 0.40 × 390 × 30 = 4,680 J.\nTotal Heat Lost = 37,800 + 4,680 = 42,480 J.\n\n(b) Heat gained by ice of mass m = Melting (mL_f) + Warming to 10°C (m · c_w · 10)\nHeat gained = m(330,000 + 42,000) = m(372,000 J/kg).\n42,480 = 372,000 m => m = 42,480 / 372,000 = 0.114 kg = 114 g.",
      markBreakdown: [
        "Water heat loss = 0.30 × 4200 × 30 = 37,800 J [1 Mark]",
        "Calorimeter heat loss = 0.40 × 390 × 30 = 4680 J [1 Mark]",
        "Total heat lost = 42,480 J [1 Mark]",
        "Heat gained equation: m · L_f + m · c_w · 10 = m(372,000) [2 Marks]",
        "m = 42,480 / 372,000 = 0.114 kg (114 g) [1 Mark]",
      ],
      examinerInsight: "In calorimetry mixture problems, always account for both the latent heat required to melt the ice AND the specific heat required to raise the melted ice water up to the final equilibrium temperature.",
    },
  },

  // =========================================================================
  // WORKSHEET 4: WAVES, LIGHT & TOTAL INTERNAL REFLECTION
  // =========================================================================
  {
    id: "ws-waves-optics",
    topicId: "unit-3",
    topicTitle: "Waves, Optics & Total Internal Reflection",
    subTopic: "3.2 Refraction, Snell's Law & Critical Angle in Optical Fibres",
    syllabusRef: "Cambridge IGCSE Physics 0625 • Section 3.2",
    difficulty: "Extended",
    estimatedTime: "45 Minutes",
    totalMarks: 25,
    theorySummary: {
      overview: "Light refracts when passing across boundaries between optical media of different densities due to speed changes. When light attempts to leave a denser medium at an angle greater than the critical angle, total internal reflection occurs.",
      keyDefinitions: [
        { term: "Refractive Index (n)", definition: "The ratio of speed of light in vacuum to speed of light in the medium (n = c / v = sin i / sin r).", unit: "Dimensionless (no unit)" },
        { term: "Critical Angle (c)", definition: "The angle of incidence in the denser medium that produces an angle of refraction of 90°.", unit: "Degrees (°)" },
        { term: "Total Internal Reflection (TIR)", definition: "100% reflection of a ray back into the optically denser medium when angle of incidence exceeds critical angle (i > c).", unit: "—" },
      ],
      essentialFormulas: [
        { name: "Snell's Law", formula: "n = sin(i) / sin(r)", units: "Angles in degrees" },
        { name: "Speed of Light in Medium", formula: "n = c / v => v = c / n", units: "c = 3.0 × 10⁸ m/s" },
        { name: "Critical Angle Formula", formula: "sin(c) = 1 / n => c = sin⁻¹(1 / n)", units: "c in degrees" },
      ],
      keyRules: [
        "Light travels slower in optically denser media (e.g. glass n ≈ 1.5, water n ≈ 1.33).",
        "Entering denser medium: Bends TOWARDS normal (i > r).",
        "Entering rarer medium: Bends AWAY from normal (i < r).",
        "Two mandatory conditions for TIR: 1. Light must travel from denser to rarer medium. 2. Angle of incidence > Critical angle (i > c).",
      ],
    },
    workedExample: {
      title: "Snell's Law & Critical Angle for a Glass Prism",
      problem: "A ray of light enters a glass prism of refractive index n = 1.52 from air with an angle of incidence of 50.0°. (Speed of light in air = 3.0 × 10⁸ m/s).\nCalculate: (a) the speed of light inside the glass, (b) the angle of refraction r, and (c) the critical angle c for the glass-air boundary.",
      givenData: [
        { symbol: "n", value: "1.52", meaning: "Refractive index of glass" },
        { symbol: "i", value: "50.0°", meaning: "Angle of incidence in air" },
        { symbol: "c_air", value: "3.0 × 10⁸ m/s", meaning: "Speed of light in air" },
      ],
      steps: [
        {
          stepNumber: 1,
          description: "Calculate speed of light in glass",
          equation: "v = c / n",
          calculation: "v = (3.0 × 10⁸) / 1.52 = 1.97 × 10⁸ m/s",
          mark: "[2 Marks]",
        },
        {
          stepNumber: 2,
          description: "Use Snell's Law to calculate angle of refraction",
          equation: "sin(r) = sin(i) / n",
          calculation: "sin(r) = sin(50°) / 1.52 = 0.7660 / 1.52 = 0.5040 => r = sin⁻¹(0.5040) = 30.3°",
          mark: "[2 Marks]",
        },
        {
          stepNumber: 3,
          description: "Calculate critical angle",
          equation: "sin(c) = 1 / n",
          calculation: "sin(c) = 1 / 1.52 = 0.6579 => c = sin⁻¹(0.6579) = 41.1°",
          mark: "[2 Marks]",
        },
      ],
      finalAnswer: "v = 1.97 × 10⁸ m/s • r = 30.3° • Critical Angle c = 41.1°",
      commonPitfall: "Ensure calculator is in DEGREE mode, not RADIAN mode, when taking inverse sines.",
    },
    mcqs: [
      {
        id: "mcq-wo-1",
        number: 1,
        question: "Light in air enters a transparent block with an angle of incidence of 40°. The angle of refraction in the block is 25°. What is the refractive index of the block?",
        options: [
          { label: "A", text: "1.52" },
          { label: "B", text: "1.60" },
          { label: "C", text: "0.66" },
          { label: "D", text: "2.10" },
        ],
        correctAnswer: "A",
        explanation: "n = sin(i) / sin(r) = sin(40°) / sin(25°) = 0.6428 / 0.4226 = 1.52.",
      },
      {
        id: "mcq-wo-2",
        number: 2,
        question: "Under which conditions will total internal reflection occur at an optical boundary?",
        options: [
          { label: "A", text: "Light travels from air into glass at an angle greater than critical angle" },
          { label: "B", text: "Light travels from glass into air at an angle greater than critical angle" },
          { label: "C", text: "Light travels from water into diamond at any angle" },
          { label: "D", text: "Light travels along the normal in any medium" },
        ],
        correctAnswer: "B",
        explanation: "TIR requires light to travel from a denser medium (glass) to a rarer medium (air) and the angle of incidence must exceed the critical angle.",
      },
      {
        id: "mcq-wo-3",
        number: 3,
        question: "Which of the following is a virtual, upright, and magnified image?",
        options: [
          { label: "A", text: "An image formed by a projector on a white screen" },
          { label: "B", text: "An image viewed through a magnifying glass with object inside focal length" },
          { label: "C", text: "An image formed on the retina of a human eye" },
          { label: "D", text: "An image captured on a digital camera sensor" },
        ],
        correctAnswer: "B",
        explanation: "When an object is placed between the optical centre and principal focus (u < f) of a converging lens, it acts as a magnifying glass, producing a virtual, upright, enlarged image.",
      },
      {
        id: "mcq-wo-4",
        number: 4,
        question: "A sound wave travels from air into water. What happens to its frequency and speed?",
        options: [
          { label: "A", text: "Frequency stays constant, speed increases" },
          { label: "B", text: "Frequency increases, speed decreases" },
          { label: "C", text: "Both frequency and speed decrease" },
          { label: "D", text: "Frequency decreases, speed increases" },
        ],
        correctAnswer: "A",
        explanation: "Frequency is determined solely by the vibrating source and never changes across boundaries. Sound travels faster in liquids (≈ 1500 m/s) than in air (≈ 340 m/s).",
      },
    ],
    structuredQuestions: [
      {
        id: "sq-wo-1",
        number: 5,
        part: "(a)",
        questionText: "An optical fibre made of glass core of refractive index 1.46 is surrounded by air.\n(i) State the function of the core in an optical fibre.\n(ii) Calculate the critical angle of the glass.\n(iii) State two advantages of optical fibres over copper wires in telecommunications.",
        marks: 5,
        lines: 5,
        modelAnswer: "(i) Transmits light pulses over long distances by total internal reflection.\n(ii) sin(c) = 1 / 1.46 = 0.6849 => c = sin⁻¹(0.6849) = 43.2° (or 43°).\n(iii) Faster data transmission rate (higher bandwidth) and lower signal attenuation / energy loss.",
        markBreakdown: [
          "Transmits light signals via TIR [1 Mark]",
          "sin(c) = 1 / n = 1 / 1.46 [1 Mark] => c = 43.2° [1 Mark]",
          "Higher bandwidth / faster data transfer [1 Mark]",
          "Less signal loss / no electromagnetic interference [1 Mark]",
        ],
        formula: "sin(c) = 1 / n",
      },
    ],
    challengeQuestion: {
      id: "cq-wo-1",
      title: "HOTs / Paper 4 Extension: Right-Angled Total Reflecting Prism",
      questionText: "Fig. 1 shows a 45°-45°-90° glass prism ABC. A ray of red light enters face AB normally and strikes face AC at an angle of incidence of 45°.\n(Refractive index of glass n = 1.50).\n\n(a) Calculate the critical angle c for the glass-air boundary.\n(b) Explain why the light ray does NOT emerge from face AC and instead undergoes total internal reflection.\n(c) Draw or describe the complete path of the ray until it exits face BC.",
      marks: 6,
      lines: 7,
      modelAnswer: "(a) sin(c) = 1 / 1.50 = 0.6667 => c = sin⁻¹(0.6667) = 41.8°.\n(b) The ray approaches face AC from inside the denser glass towards air. The angle of incidence at AC is 45°, which is greater than the critical angle of 41.8° (i > c). Therefore, 100% total internal reflection occurs.\n(c) The ray reflects through 90° at face AC, travels downwards perpendicularly to face BC, and emerges straight out of face BC with zero refraction (angle of incidence at BC = 0°).",
      markBreakdown: [
        "sin(c) = 1 / 1.50 [1 Mark] => c = 41.8° [1 Mark]",
        "i = 45° is greater than critical angle 41.8° [1 Mark]",
        "Ray travels from optically denser to rarer medium [1 Mark]",
        "Ray reflects internally through 90° [1 Mark]",
        "Ray strikes face BC at 90° (normal) and exits without deviation [1 Mark]",
      ],
      examinerInsight: "Prisms are widely used in periscopes and binoculars instead of silvered mirrors because total internal reflection reflects 100% of light energy with zero silver-tarnish degradation.",
    },
  },

  // =========================================================================
  // WORKSHEET 5: ELECTRICITY & DC CIRCUITS
  // =========================================================================
  {
    id: "ws-electricity-circuits",
    topicId: "unit-4",
    topicTitle: "Electricity, Resistance & Potential Dividers",
    subTopic: "4.3 Ohm's Law, Series/Parallel Resistors & Sensor Circuits",
    syllabusRef: "Cambridge IGCSE Physics 0625 • Section 4.3 & 4.4",
    difficulty: "Extended",
    estimatedTime: "45 Minutes",
    totalMarks: 25,
    theorySummary: {
      overview: "Electric current is the rate of flow of charge (I = Q/t). Electromotive force (e.m.f.) is energy supplied per unit charge around a complete circuit. Resistors in series add directly (R = R₁ + R₂), while resistors in parallel decrease total resistance.",
      keyDefinitions: [
        { term: "Current (I)", definition: "The rate of flow of electric charge (I = Q / t).", unit: "Ampere (A)" },
        { term: "Electromotive Force (e.m.f.)", definition: "Electrical energy supplied by a source in moving a unit charge around a complete circuit.", unit: "Volt (V = J/C)" },
        { term: "Potential Difference (p.d.)", definition: "The work done per unit charge in passing through an electrical component.", unit: "Volt (V)" },
        { term: "Electrical Power", definition: "Rate at which electrical energy is transferred (P = VI = I²R = V²/R).", unit: "Watt (W)" },
      ],
      essentialFormulas: [
        { name: "Ohm's Law", formula: "V = I · R  =>  R = V / I", units: "V in Volts, I in Amps, R in Ohms (Ω)" },
        { name: "Series Resistors", formula: "R_total = R₁ + R₂ + R₃", units: "Resistance increases" },
        { name: "Parallel Resistors", formula: "1/R_total = 1/R₁ + 1/R₂  =>  R_p = (R₁·R₂)/(R₁+R₂)", units: "Resistance decreases" },
        { name: "Potential Divider Ratio", formula: "V_out = V_in · (R₂ / (R₁ + R₂))", units: "Proportional voltage sharing" },
      ],
      keyRules: [
        "Current is IDENTICAL at all points in a series circuit.",
        "Voltage is IDENTICAL across all branches in a parallel circuit.",
        "LDR rule: Light up -> Resistance DOWN (LURD).",
        "Thermistor rule: Temperature up -> Resistance DOWN (TURD).",
        "A fuse and switch must always be connected on the LIVE wire.",
      ],
    },
    workedExample: {
      title: "Analyzing a Combination Circuit with Series and Parallel Resistors",
      problem: "A 12 V battery of zero internal resistance is connected to a 4.0 Ω resistor in series with a parallel pair of 6.0 Ω and 3.0 Ω resistors. Calculate: (a) equivalent resistance of parallel pair, (b) total circuit resistance, (c) total circuit current, (d) p.d. across the 4.0 Ω resistor.",
      givenData: [
        { symbol: "V_supply", value: "12 V", meaning: "Battery electromotive force" },
        { symbol: "R₁", value: "4.0 Ω", meaning: "Series resistor" },
        { symbol: "R₂", value: "6.0 Ω", meaning: "First parallel branch" },
        { symbol: "R₃", value: "3.0 Ω", meaning: "Second parallel branch" },
      ],
      steps: [
        {
          stepNumber: 1,
          description: "Calculate equivalent parallel resistance R_p",
          equation: "1/R_p = 1/R₂ + 1/R₃ = 1/6.0 + 1/3.0 = 3/6 = 1/2",
          calculation: "R_p = 2.0 Ω",
          mark: "[2 Marks]",
        },
        {
          stepNumber: 2,
          description: "Calculate total resistance R_total",
          equation: "R_total = R₁ + R_p",
          calculation: "R_total = 4.0 + 2.0 = 6.0 Ω",
          mark: "[1 Mark]",
        },
        {
          stepNumber: 3,
          description: "Calculate total current from battery",
          equation: "I = V_supply / R_total",
          calculation: "I = 12 / 6.0 = 2.0 A",
          mark: "[1 Mark]",
        },
        {
          stepNumber: 4,
          description: "Calculate potential difference across the 4.0 Ω resistor",
          equation: "V₄ = I · R₁",
          calculation: "V₄ = 2.0 A × 4.0 Ω = 8.0 V",
          mark: "[2 Marks]",
        },
      ],
      finalAnswer: "R_parallel = 2.0 Ω • R_total = 6.0 Ω • I_total = 2.0 A • V₄ = 8.0 V",
      commonPitfall: "When calculating parallel resistance, students often calculate 1/R = 0.5 and forget to take the reciprocal to get R = 2.0 Ω.",
    },
    mcqs: [
      {
        id: "mcq-el-1",
        number: 1,
        question: "What is the combined resistance of a 3.0 Ω resistor and a 6.0 Ω resistor connected in parallel?",
        options: [
          { label: "A", text: "2.0 Ω" },
          { label: "B", text: "4.5 Ω" },
          { label: "C", text: "9.0 Ω" },
          { label: "D", text: "18 Ω" },
        ],
        correctAnswer: "A",
        explanation: "1/R_p = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 => R_p = 2.0 Ω.",
      },
      {
        id: "mcq-el-2",
        number: 2,
        question: "An electric kettle operates at 240 V with a power rating of 2.4 kW. What is the current in the heating element?",
        options: [
          { label: "A", text: "0.10 A" },
          { label: "B", text: "10 A" },
          { label: "C", text: "100 A" },
          { label: "D", text: "576 A" },
        ],
        correctAnswer: "B",
        explanation: "P = 2.4 kW = 2400 W. From P = VI => I = P / V = 2400 / 240 = 10 A.",
      },
      {
        id: "mcq-el-3",
        number: 3,
        question: "In an automatic lighting control circuit, a potential divider contains an LDR and a fixed resistor. When darkness falls, what happens to the resistance of the LDR and the p.d. across it?",
        options: [
          { label: "A", text: "LDR resistance decreases, p.d. decreases" },
          { label: "B", text: "LDR resistance increases, p.d. increases" },
          { label: "C", text: "LDR resistance increases, p.d. decreases" },
          { label: "D", text: "LDR resistance decreases, p.d. increases" },
        ],
        correctAnswer: "B",
        explanation: "In darkness, LDR resistance increases. In a series potential divider, a component with higher resistance takes a larger share of the total input voltage, so p.d. increases.",
      },
      {
        id: "mcq-el-4",
        number: 4,
        question: "Why is the metal casing of an electric toaster connected to an earth wire?",
        options: [
          { label: "A", text: "To complete the circuit for normal current flow" },
          { label: "B", text: "To ensure the toaster operates at full power" },
          { label: "C", text: "To safely channel surge current to the ground and blow the fuse if a live wire touches the metal casing" },
          { label: "D", text: "To prevent the heating elements from rusting" },
        ],
        correctAnswer: "C",
        explanation: "The earth wire provides a low-resistance path to earth. If the live wire touches the metal case, a huge current flows through the earth wire, instantly melting the fuse and cutting off mains power.",
      },
    ],
    structuredQuestions: [
      {
        id: "sq-el-1",
        number: 5,
        part: "(a)",
        questionText: "A 9.0 V battery is connected to a 450 Ω resistor in series with a parallel branch containing an 800 Ω resistor and an LDR.\n(i) In bright light, the resistance of the LDR is 200 Ω. Calculate the equivalent resistance of the parallel combination.\n(ii) Calculate the total current drawn from the battery.\n(iii) Calculate the p.d. across the 450 Ω series resistor.",
        marks: 6,
        lines: 6,
        modelAnswer: "(i) 1/R_p = 1/800 + 1/200 = 1/800 + 4/800 = 5/800 => R_p = 160 Ω.\n(ii) R_total = 450 + 160 = 610 Ω. Total current I = V / R = 9.0 / 610 = 0.0148 A (14.8 mA).\n(iii) V_450 = I · R = 0.0148 × 450 = 6.64 V (or 6.6 V).",
        markBreakdown: [
          "1/R_p = 1/800 + 1/200 [1 Mark] => R_p = 160 Ω [1 Mark]",
          "R_total = 450 + 160 = 610 Ω [1 Mark]",
          "I = 9.0 / 610 = 0.0148 A (14.8 mA) [1 Mark]",
          "V = 0.0148 × 450 [1 Mark] = 6.64 V [1 Mark]",
        ],
        formula: "1/R_p = 1/R₁ + 1/R₂, I = V / R, V = IR",
      },
    ],
    challengeQuestion: {
      id: "cq-el-1",
      title: "HOTs / Paper 4 Extension: High-Voltage Power Transmission Loss Analysis",
      questionText: "A power station generates 80 MW (8.0 × 10⁷ W) of electrical power. The electricity is transmitted to a city 50 km away through transmission cables with a total resistance of 4.0 Ω.\n\n(a) Calculate the transmission current if power is transmitted at 20 kV (20,000 V).\n(b) Calculate the rate of thermal power loss (I²R) in the transmission cables at 20 kV.\n(c) The voltage is stepped up to 400 kV (400,000 V) using a step-up transformer. Calculate the new transmission current and the new power loss in the cables.\n(d) Calculate the percentage of generated power saved by transmitting at 400 kV rather than 20 kV.",
      marks: 6,
      lines: 8,
      modelAnswer: "(a) I = P / V = (8.0 × 10⁷) / 20,000 = 4000 A.\n(b) Power loss P_loss = I²R = 4000² × 4.0 = 16,000,000 × 4.0 = 64,000,000 W = 64 MW (80% of all generated power is wasted as heat!).\n(c) At 400 kV: I = (8.0 × 10⁷) / 400,000 = 200 A. New power loss = 200² × 4.0 = 40,000 × 4.0 = 160,000 W = 0.16 MW.\n(d) Power saved = 64 MW - 0.16 MW = 63.84 MW. Percentage saved = (63.84 / 80) × 100% = 79.8% ≈ 80%.",
      markBreakdown: [
        "I_20kV = 80,000,000 / 20,000 = 4000 A [1 Mark]",
        "P_loss = 4000² × 4.0 = 64 MW [1 Mark]",
        "I_400kV = 80,000,000 / 400,000 = 200 A [1 Mark]",
        "P_loss = 200² × 4.0 = 0.16 MW (160 kW) [1 Mark]",
        "Comparison: power loss is reduced by a factor of (20)² = 400 [1 Mark]",
        "Percentage saved ≈ 80% [1 Mark]",
      ],
      examinerInsight: "Power loss in cables depends on the SQUARE of the current ($P = I^2R$). When voltage is increased by a factor of 20 (20 kV to 400 kV), current drops by 20×, and heat loss drops by $20^2 = 400\\times$!",
    },
  },

  // =========================================================================
  // WORKSHEET 6: NUCLEAR PHYSICS & RADIOACTIVITY
  // =========================================================================
  {
    id: "ws-nuclear-physics",
    topicId: "unit-5",
    topicTitle: "Nuclear Physics, Half-Life & Decay",
    subTopic: "5.1 & 5.2 Alpha Scattering, Decay Equations & Half-Life",
    syllabusRef: "Cambridge IGCSE Physics 0625 • Section 5.1 & 5.2",
    difficulty: "Extended",
    estimatedTime: "45 Minutes",
    totalMarks: 25,
    theorySummary: {
      overview: "Radioactivity is the random and spontaneous decay of unstable atomic nuclei with the emission of alpha (α), beta (β), or gamma (γ) radiation. Half-life is the time taken for half the radioactive nuclei to decay.",
      keyDefinitions: [
        { term: "Alpha Particle (α)", definition: "Helium nucleus consisting of 2 protons and 2 neutrons (⁴₂He²⁺). Highly ionising, stopped by paper or 5 cm air.", unit: "+2e charge" },
        { term: "Beta Particle (β)", definition: "Fast-moving electron (⁰₋₁e) emitted when a nuclear neutron converts into a proton. Moderately ionising, stopped by 3–5 mm aluminium.", unit: "-1e charge" },
        { term: "Gamma Ray (γ)", definition: "High-frequency electromagnetic wave. Weakly ionising, highly penetrating (reduced by thick lead / concrete).", unit: "0 charge" },
        { term: "Half-Life (t½)", definition: "The time taken for half the radioactive nuclei in a sample to decay (or count rate to halve).", unit: "s, hours, days, years" },
      ],
      essentialFormulas: [
        { name: "Alpha Decay Equation", formula: "ᴬ_Z X  ➔  ᴬ⁻⁴_(Z-2) Y  +  ⁴₂He", units: "Mass -4, Atomic -2" },
        { name: "Beta Decay Equation", formula: "ᴬ_Z X  ➔  ᴬ_(Z+1) Y  +  ⁰₋₁e", units: "Mass constant, Atomic +1" },
        { name: "Corrected Count Rate", formula: "Corrected Rate = Measured Rate - Background Rate", units: "counts/s or counts/min" },
      ],
      keyRules: [
        "In Rutherford's alpha scattering experiment: Most alpha particles pass straight through (proving atom is mostly empty space); small fraction deflected through large angles (proving a dense, positively charged central nucleus).",
        "Always subtract background radiation before plotting or calculating half-life.",
        "Radioactive decay is spontaneous (unaffected by temperature/pressure) and random (impossible to predict when an individual nucleus decays).",
      ],
    },
    workedExample: {
      title: "Half-Life Decay & Background Radiation Subtraction",
      problem: "A detector measures a background radiation count rate of 25 counts/minute in a laboratory. A sample of iodine-131 is placed near the detector, giving an initial raw reading of 425 counts/minute. After 24 days, the raw reading drops to 75 counts/minute. Calculate the half-life of iodine-131.",
      givenData: [
        { symbol: "R_bg", value: "25 counts/min", meaning: "Background radiation" },
        { symbol: "R_initial_raw", value: "425 counts/min", meaning: "Initial uncorrected rate" },
        { symbol: "R_final_raw", value: "75 counts/min", meaning: "Uncorrected rate after 24 days" },
        { symbol: "t_total", value: "24 days", meaning: "Elapsed time" },
      ],
      steps: [
        {
          stepNumber: 1,
          description: "Calculate initial corrected count rate",
          equation: "R₀ = R_raw - R_bg",
          calculation: "R₀ = 425 - 25 = 400 counts/min",
          mark: "[1 Mark]",
        },
        {
          stepNumber: 2,
          description: "Calculate final corrected count rate",
          equation: "R_f = R_raw - R_bg",
          calculation: "R_f = 75 - 25 = 50 counts/min",
          mark: "[1 Mark]",
        },
        {
          stepNumber: 3,
          description: "Determine number of half-lives elapsed",
          equation: "400 -> 200 (1) -> 100 (2) -> 50 (3 half-lives)",
          calculation: "400 / 2³ = 50 => n = 3 half-lives",
          mark: "[2 Marks]",
        },
        {
          stepNumber: 4,
          description: "Calculate half-life period",
          equation: "t½ = Total time / n",
          calculation: "t½ = 24 days / 3 = 8.0 days",
          mark: "[1 Mark]",
        },
      ],
      finalAnswer: "Half-life of Iodine-131 = 8.0 days",
      commonPitfall: "Forgetting to subtract background count rate from BOTH initial and final readings before calculating halving intervals.",
    },
    mcqs: [
      {
        id: "mcq-nuc-1",
        number: 1,
        question: "Plutonium-239 (²³⁹₉₄Pu) absorbs a neutron and fissions into Gold-207 (²⁰⁷₇₉Au), Phosphorus-31 (³¹₁₅P), and free neutrons. How many neutrons are released?",
        options: [
          { label: "A", text: "1" },
          { label: "B", text: "2" },
          { label: "C", text: "4" },
          { label: "D", text: "5" },
        ],
        correctAnswer: "B",
        explanation: "Total mass before = 239 + 1 = 240. Total mass after = 207 + 31 + (n × 1) = 238 + n. 240 = 238 + n => n = 2 neutrons.",
      },
      {
        id: "mcq-nuc-2",
        number: 2,
        question: "A beam containing alpha, beta, and gamma radiation enters an electric field between a positive upper plate and a negative lower plate. Which radiation deflects towards the positive plate?",
        options: [
          { label: "A", text: "Alpha particles only" },
          { label: "B", text: "Beta particles only" },
          { label: "C", text: "Gamma rays only" },
          { label: "D", text: "Both alpha and gamma" },
        ],
        correctAnswer: "B",
        explanation: "Beta particles carry negative charge (-e) and are attracted towards the positive plate with large deflection due to their very small mass.",
      },
      {
        id: "mcq-nuc-3",
        number: 3,
        question: "Why are gamma emitters with a half-life of several hours preferred as medical radioactive tracers in the human body?",
        options: [
          { label: "A", text: "Gamma penetrates through body tissue to reach external detectors with minimal ionisation damage, and short half-life ensures decay quickly after diagnosis" },
          { label: "B", text: "Gamma is heavily absorbed in the stomach to destroy healthy tissue" },
          { label: "C", text: "Gamma particles have the highest mass and charge" },
          { label: "D", text: "Gamma radiation has a half-life of 1000 years" },
        ],
        correctAnswer: "A",
        explanation: "Gamma radiation easily penetrates body tissue to be detected externally, has low ionising power (low tissue damage), and a short half-life prevents long-term radiation exposure.",
      },
      {
        id: "mcq-nuc-4",
        number: 4,
        question: "Which equation represents the nuclear beta decay of Carbon-14?",
        options: [
          { label: "A", text: "¹⁴₆C ➔ ¹⁰₄Be + ⁴₂He" },
          { label: "B", text: "¹⁴₆C ➔ ¹⁴₇N + ⁰₋₁e" },
          { label: "C", text: "¹⁴₆C ➔ ¹³₆C + ¹₀n" },
          { label: "D", text: "¹⁴₆C ➔ ¹⁴₅B + ⁰₊₁e" },
        ],
        correctAnswer: "B",
        explanation: "During beta decay, a neutron converts to a proton: atomic number Z increases by 1 (6 -> 7 to become Nitrogen), mass number A stays 14, and an electron (⁰₋₁e) is emitted.",
      },
    ],
    structuredQuestions: [
      {
        id: "sq-nuc-1",
        number: 5,
        part: "(a)",
        questionText: "Curium-242 (²⁴²₉₆Cm) decays by alpha emission with a half-life of 160 days.\n(i) Write the complete nuclear decay equation for the emission of an alpha particle from Curium-242.\n(ii) A pure sample initially contains 19.2 mg of Curium-242. Calculate the mass of Curium-242 remaining after 480 days.",
        marks: 5,
        lines: 5,
        modelAnswer: "(i) ²⁴²₉₆Cm ➔ ²³⁸₉₄Pu + ⁴₂He.\n(ii) Number of half-lives = 480 / 160 = 3 half-lives.\nMass remaining = 19.2 / (2³) = 19.2 / 8 = 2.4 mg.",
        markBreakdown: [
          "Alpha particle symbol ⁴₂He or ⁴₂α [1 Mark]",
          "Daughter nucleus with mass 238 and atomic number 94 [1 Mark]",
          "Number of half-lives = 480 / 160 = 3 [1 Mark]",
          "19.2 / 8 [1 Mark] = 2.4 mg [1 Mark]",
        ],
        formula: "N = N₀ / 2ⁿ, n = t / t½",
      },
    ],
    challengeQuestion: {
      id: "cq-nuc-1",
      title: "HOTs / Paper 4 Extension: Alpha Scattering vs Nuclear Dimensions",
      questionText: "In the Geiger-Marsden alpha particle scattering experiment, a narrow beam of alpha particles was directed at a thin gold foil in a vacuum chamber.\n\n(a) State the two key experimental observations made and explain the deduction about atomic structure from each observation.\n(b) Explain why alpha particles with higher kinetic energy approach closer to the gold nucleus before deflecting.",
      marks: 6,
      lines: 8,
      modelAnswer: "(a) Observation 1: Most alpha particles passed straight through the foil with zero or negligible deflection.\nDeduction 1: The atom consists mostly of empty space.\n\nObservation 2: A small fraction (approx 1 in 8000) was deflected through angles greater than 90° (bounced back).\nDeduction 2: The atom's positive charge and almost all of its mass are concentrated in an extremely small, dense region called the nucleus.\n\n(b) Alpha particles are positively charged (+2e) and experience an electrostatic repulsive force from the positive gold nucleus (+79e). An alpha particle with higher initial kinetic energy can do more work against this repulsive force, penetrating closer to the nucleus before its kinetic energy is completely converted into electrostatic potential energy at the point of closest approach.",
      markBreakdown: [
        "Observation 1: Most pass straight through [1 Mark] => Atom is mostly empty space [1 Mark]",
        "Observation 2: Large angle deflection / rebound [1 Mark] => Small, dense positive nucleus containing almost all mass [1 Mark]",
        "Repulsive electrostatic force between positive alpha and positive nucleus [1 Mark]",
        "Higher KE does more work against repulsion, reaching smaller distance of closest approach [1 Mark]",
      ],
      examinerInsight: "Ensure students distinguish between the OBSERVATION (what is seen on the detector screen) and the DEDUCTION (what it reveals about atomic structure).",
    },
  },

  // =========================================================================
  // WORKSHEET 7: SPACE PHYSICS & COSMIC EXPANSION
  // =========================================================================
  {
    id: "ws-space-physics",
    topicId: "unit-6",
    topicTitle: "Space Physics, Solar System & Hubble's Law",
    subTopic: "6.1 & 6.2 Orbital Motion, Stellar Evolution & Redshift",
    syllabusRef: "Cambridge IGCSE Physics 0625 • Section 6.1 & 6.2",
    difficulty: "Extended",
    estimatedTime: "45 Minutes",
    totalMarks: 25,
    theorySummary: {
      overview: "Gravity provides the centripetal force keeping planets and comets in orbit. Distant galaxies show redshift in their emission spectra, demonstrating that the universe is expanding uniformly according to Hubble's Law (v = H₀ · d).",
      keyDefinitions: [
        { term: "Light-Year (ly)", definition: "The distance travelled by light in a vacuum in one Earth year (≈ 9.5 × 10¹² km = 9.5 × 10¹⁵ m).", unit: "m or km" },
        { term: "Redshift (z)", definition: "The increase in observed wavelength of electromagnetic radiation from receding distant celestial objects.", unit: "Dimensionless" },
        { term: "Hubble Constant (H₀)", definition: "The ratio of the recessional speed of a distant galaxy to its distance from Earth (H₀ ≈ 2.2 × 10⁻¹⁸ s⁻¹).", unit: "s⁻¹ or km/(s·Mpc)" },
        { term: "Accretion Disc", definition: "A rotating flat disc of gas and dust from which planets and stars form under gravitational collapse.", unit: "—" },
      ],
      essentialFormulas: [
        { name: "Orbital Speed", formula: "v = 2πr / T", units: "r in m, T in s, v in m/s" },
        { name: "Hubble's Law", formula: "v = H₀ · d", units: "v in m/s, d in m, H₀ in s⁻¹" },
        { name: "Age of Universe", formula: "t = 1 / H₀ ≈ 1.4 × 10¹⁰ years", units: "Approx 14 billion years" },
      ],
      keyRules: [
        "Inner rocky planets (Mercury, Venus, Earth, Mars) have higher density and smaller radius; outer gas giants (Jupiter, Saturn, Uranus, Neptune) are larger and less dense.",
        "Comets travel in highly elliptical orbits with the Sun located at one focus. Speed is fastest when closest to Sun (perihelion) where gravitational potential energy is lowest and kinetic energy is highest.",
        "Life cycle of Sun-like star: Nebula ➔ Protostar ➔ Stable Main Sequence ➔ Red Giant ➔ Planetary Nebula ➔ White Dwarf ➔ Black Dwarf.",
        "CMBR (Cosmic Microwave Background Radiation) is uniform radiation from all directions in space, providing conclusive evidence for the Big Bang.",
      ],
    },
    workedExample: {
      title: "Hubble's Law: Calculating Recessional Velocity and Travel Time",
      problem: "A distant galaxy is observed at a distance d = 4.5 × 10⁷ light-years from Earth. The Hubble constant is H₀ = 2.2 × 10⁻¹⁸ s⁻¹. (1 light-year = 9.5 × 10¹⁵ m).\nCalculate: (a) the distance in metres, (b) the recessional speed of the galaxy in km/s, and (c) the time taken for light emitted by the galaxy to reach Earth in years.",
      givenData: [
        { symbol: "d_ly", value: "4.5 × 10⁷ ly", meaning: "Distance in light-years" },
        { symbol: "1 ly", value: "9.5 × 10¹⁵ m", meaning: "Light-year conversion factor" },
        { symbol: "H₀", value: "2.2 × 10⁻¹⁸ s⁻¹", meaning: "Hubble constant" },
      ],
      steps: [
        {
          stepNumber: 1,
          description: "Convert distance to metres",
          equation: "d = d_ly × 9.5 × 10¹⁵",
          calculation: "d = 4.5 × 10⁷ × 9.5 × 10¹⁵ = 4.275 × 10²³ m",
          mark: "[1 Mark]",
        },
        {
          stepNumber: 2,
          description: "Calculate speed using Hubble's Law",
          equation: "v = H₀ · d",
          calculation: "v = 2.2 × 10⁻¹⁸ × 4.275 × 10²³ = 9.405 × 10⁵ m/s = 941 km/s",
          mark: "[2 Marks]",
        },
        {
          stepNumber: 3,
          description: "State light travel time from distance in light-years",
          equation: "t = Distance in light-years",
          calculation: "t = 4.5 × 10⁷ years (45 million years)",
          mark: "[1 Mark]",
        },
      ],
      finalAnswer: "Distance = 4.28 × 10²³ m • Speed = 941 km/s • Travel Time = 45 million years",
      commonPitfall: "By definition, light from a galaxy 45 million light-years away takes exactly 45 million years to reach Earth.",
    },
    mcqs: [
      {
        id: "mcq-sp-1",
        number: 1,
        question: "Which statement correctly describes the orbit of a comet around the Sun?",
        options: [
          { label: "A", text: "The orbit is circular with the Sun at the exact centre" },
          { label: "B", text: "The orbit is elliptical with the Sun at one focus (not at the centre)" },
          { label: "C", text: "The orbit is a straight line back and forth" },
          { label: "D", text: "The orbit is parabolic and never repeats" },
        ],
        correctAnswer: "B",
        explanation: "Comets have elongated elliptical orbits with the Sun situated at one focus, causing orbital speed to vary continuously.",
      },
      {
        id: "mcq-sp-2",
        number: 2,
        question: "Light from distant galaxies is redshifted. What does this observation prove?",
        options: [
          { label: "A", text: "Distant galaxies are moving towards Earth" },
          { label: "B", text: "The speed of light is decreasing over time" },
          { label: "C", text: "Distant galaxies are moving away from each other and the universe is expanding" },
          { label: "D", text: "All stars are becoming cooler" },
        ],
        correctAnswer: "C",
        explanation: "Redshift (increase in observed wavelength) occurs due to the Doppler effect and cosmic expansion as distant galaxies recede from us.",
      },
      {
        id: "mcq-sp-3",
        number: 3,
        question: "An artificial satellite orbits Earth in a circular path of radius r = 8.0 × 10⁶ m with an orbital speed of 7200 m/s. What is its orbital period T?",
        options: [
          { label: "A", text: "1.1 hours" },
          { label: "B", text: "1.9 hours" },
          { label: "C", text: "4.5 hours" },
          { label: "D", text: "24 hours" },
        ],
        correctAnswer: "B",
        explanation: "v = 2πr / T => T = 2πr / v = (2 × π × 8.0 × 10⁶) / 7200 = 50,265,482 / 7200 = 6981 s = 1.94 hours (approx 1.9 hours).",
      },
      {
        id: "mcq-sp-4",
        number: 4,
        question: "What remains after a massive star (mass > 8 solar masses) explodes as a supernova?",
        options: [
          { label: "A", text: "A white dwarf or black dwarf" },
          { label: "B", text: "A neutron star or black hole (and a nebula)" },
          { label: "C", text: "A protostar" },
          { label: "D", text: "A red supergiant" },
        ],
        correctAnswer: "B",
        explanation: "Massive stars end their lives in a supernova explosion, ejecting heavy elements into a nebula while the core collapses into a neutron star or black hole.",
      },
    ],
    structuredQuestions: [
      {
        id: "sq-sp-1",
        number: 5,
        part: "(a)",
        questionText: "The planet Mars has an orbital radius of 2.28 × 10⁸ km around the Sun and takes 687 Earth days (5.94 × 10⁷ s) to complete one orbit.\n(i) Assuming a circular orbit, calculate the distance travelled by Mars in one complete orbit.\n(ii) Calculate the orbital speed of Mars in km/s.\n(iii) Explain why Mars moves slower in its orbit than Earth (Earth orbital radius = 1.50 × 10⁸ km).",
        marks: 6,
        lines: 6,
        modelAnswer: "(i) Circumference = 2πr = 2 × π × (2.28 × 10⁸) = 1.43 × 10⁹ km.\n(ii) v = Distance / Time = (1.43 × 10⁹ km) / (5.94 × 10⁷ s) = 24.1 km/s.\n(iii) Mars is further from the Sun, so the gravitational attraction from the Sun is weaker. A smaller centripetal force is required to maintain the orbit, resulting in a lower orbital speed.",
        markBreakdown: [
          "Circumference = 2πr = 1.43 × 10⁹ km [2 Marks]",
          "v = d / t = (1.43 × 10⁹) / (5.94 × 10⁷) [1 Mark] = 24.1 km/s [1 Mark]",
          "Greater distance means weaker gravitational pull from Sun [1 Mark]",
          "Weaker force requires lower orbital speed for stable equilibrium [1 Mark]",
        ],
        formula: "v = 2πr / T",
      },
    ],
    challengeQuestion: {
      id: "cq-sp-1",
      title: "HOTs / Paper 4 Extension: Cosmic Microwave Background Radiation & Age of the Universe",
      questionText: "(a) Explain what Cosmic Microwave Background Radiation (CMBR) is and state two reasons why it provides compelling evidence for the Big Bang Theory.\n(b) Using the value of Hubble's constant H₀ = 2.2 × 10⁻¹⁸ s⁻¹, derive an estimate for the age of the Universe in seconds and convert your answer to years (1 year ≈ 3.16 × 10⁷ s).",
      marks: 6,
      lines: 8,
      modelAnswer: "(a) CMBR is thermal electromagnetic radiation permeating all of space with a uniform temperature of approximately 2.7 K.\nEvidence 1: It was produced shortly after the Big Bang as high-energy gamma radiation, which has been stretched (redshifted) by cosmic expansion into the microwave region.\nEvidence 2: Its intensity and temperature are remarkably uniform in all directions of the sky, confirming the universe originated from a single hot, dense initial state.\n\n(b) Age of Universe t = 1 / H₀ = 1 / (2.2 × 10⁻¹⁸ s⁻¹) = 4.545 × 10¹⁷ s.\nIn years: t = (4.545 × 10¹⁷ s) / (3.16 × 10⁷ s/year) = 1.438 × 10¹⁰ years ≈ 14.4 billion years (accept 14 billion years).",
      markBreakdown: [
        "CMBR definition: uniform microwave radiation from all directions in space [1 Mark]",
        "Evidence 1: Wavelength has expanded/stretched from high-energy radiation to microwave by expanding space [1 Mark]",
        "Evidence 2: Isotropy / uniform temperature across the cosmos supports single expansion point [1 Mark]",
        "Formula t = 1 / H₀ [1 Mark]",
        "Calculation: 1 / (2.2 × 10⁻¹⁸) = 4.55 × 10¹⁷ s [1 Mark]",
        "Age in years = 1.4 × 10¹⁰ years (14 billion years) [1 Mark]",
      ],
      examinerInsight: "The estimate $t = \\frac{1}{H_0}$ assumes that the universe has been expanding at a constant rate since the Big Bang.",
    },
  },
];

