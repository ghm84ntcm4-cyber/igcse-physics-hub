import { Topic } from "../types";

export const IGCSE_TOPICS: Topic[] = [
  {
    id: "unit-1",
    unitNumber: 1,
    title: "Motion, Forces & Energy",
    shortTitle: "General Physics",
    iconName: "Activity",
    color: "from-blue-600 to-cyan-600",
    description: "Measurement techniques, kinematics graphs, Newton's laws, Hooke's law, moments, momentum, energy conservation, power, and fluid pressure.",
    subTopics: [
      {
        id: "1.1",
        title: "Speed, Velocity & Acceleration",
        syllabusRef: "1.1 Kinematics Basics",
        summary: "Mastering the distinctions between speed (scalar) and velocity (vector), displacement, and solving for acceleration using a = (v - u) / t.",
        keyDefinitions: [
          {
            term: "Speed",
            definition: "Speed just tells you how fast something is moving (Distance ÷ Time) with no direction attached.",
            keywords: ["distance per unit time", "scalar", "v = d / t"],
            unit: "m/s",
          },
          {
            term: "Velocity",
            definition: "The speed of an object in a given direction (Displacement ÷ Time).",
            keywords: ["displacement per unit time", "vector", "speed with direction"],
            unit: "m/s",
          },
          {
            term: "Acceleration",
            definition: "The rate of change of velocity: a = (v − u) ÷ t (where v = final velocity, u = initial velocity, t = time taken).",
            keywords: ["rate of change of velocity", "a = (v - u) / t", "vector"],
            unit: "m/s²",
          },
        ],
        coreConcepts: [
          {
            heading: "Speed vs Velocity: The Crucial Difference",
            body: "Speed only tells you how fast something travels without regard to direction. Velocity is speed with a direction attached. Because velocity uses displacement (straight-line distance from start) rather than total distance, a round-trip cyclist covering 10 km back to the starting point has zero average velocity because displacement is zero.",
          },
          {
            heading: "Understanding Acceleration & Deceleration",
            body: "Acceleration is how quickly velocity changes. This includes speeding up, slowing down (deceleration, giving a negative acceleration value), and changing direction even at constant speed (such as going round a roundabout at 30 km/h).",
          },
        ],
        examTips: [
          {
            title: "Direction in Velocity",
            content: "If a question mentions direction — north, south, up, down, or gives you positive/negative values on a graph — it wants velocity. Writing 'speed' instead is one of the easiest marks to lose in exams.",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Writing the unit of acceleration as m/s instead of m/s².",
          "Assuming acceleration only means speeding up (slowing down or changing direction are also acceleration).",
        ],
      },
      {
        id: "1.2",
        title: "Distance-Time & Velocity-Time Graphs",
        syllabusRef: "1.2 Motion Graphs",
        summary: "Interpreting distance-time graphs (gradient = speed, flat = stopped) and velocity-time graphs (gradient = acceleration, area under graph = distance travelled).",
        keyDefinitions: [
          {
            term: "Distance-Time Gradient",
            definition: "On a distance-time graph, the gradient (slope) at any point equals the speed. A flat horizontal line means the object is stopped (speed = 0).",
            keywords: ["gradient = speed", "flat = stopped", "steeper = faster"],
            unit: "m/s",
          },
          {
            term: "Velocity-Time Gradient & Area",
            definition: "On a velocity-time graph, the gradient equals acceleration, and the area under the graph equals total distance travelled.",
            keywords: ["gradient = acceleration", "area under graph = distance", "flat = constant velocity"],
            unit: "m/s² and m",
          },
        ],
        coreConcepts: [
          {
            heading: "Distance-Time Graph Rules",
            body: "On a distance-time graph, the slope (gradient) tells you the speed. The steeper the line, the faster the object is moving. A horizontal flat line has zero gradient, meaning the object has completely stopped.",
            diagramType: "graph",
          },
          {
            heading: "Velocity-Time Graph Rules",
            body: "On a velocity-time graph, the gradient tells you the acceleration. A rising line is speeding up, a falling line is slowing down, and a flat horizontal line represents constant velocity (moving steadily, NOT stopped). The area under the graph gives the total distance travelled.",
            diagramType: "graph",
          },
        ],
        examTips: [
          {
            title: "Flat Line Meaning on V-T Graphs",
            content: "On a velocity-time graph, a flat horizontal line does NOT mean stopped — it means moving at a steady, unchanging speed. This is the exact opposite of what a flat line means on a distance-time graph!",
            type: "examiner_trap",
          },
        ],
        commonMisconceptions: [
          "Thinking a flat line on a distance-time graph means 'moving slowly' (it means completely stopped with zero speed).",
          "Thinking a flat line on a velocity-time graph means stopped (it means constant steady velocity).",
        ],
      },
      {
        id: "1.3",
        title: "Newton's Laws of Motion",
        syllabusRef: "1.3 Dynamics & Force Laws",
        summary: "Newton's First Law (inertia & equilibrium), Second Law (F = ma), and Third Law (equal and opposite action-reaction pairs on different bodies).",
        keyDefinitions: [
          {
            term: "Newton's First Law",
            definition: "An object stays still, or keeps moving at a constant velocity, unless a resultant force acts on it.",
            keywords: ["no resultant force", "constant velocity", "inertia", "balanced forces"],
          },
          {
            term: "Newton's Second Law",
            definition: "The bigger the resultant force, the bigger the acceleration. The bigger the mass, the smaller the acceleration: F = m × a.",
            keywords: ["F = m * a", "resultant force", "mass × acceleration"],
            unit: "N",
          },
          {
            term: "Newton's Third Law",
            definition: "For every action force, there is an equal and opposite reaction force acting on different objects.",
            keywords: ["equal and opposite", "action and reaction", "different objects"],
          },
        ],
        coreConcepts: [
          {
            heading: "Newton's First Law & Balance",
            body: "If all forces on an object cancel out (resultant force is zero), nothing about its motion changes. A stationary book on a table has gravity balanced by the normal contact force. A car cruising at steady 100 km/h has forward driving force balanced by friction and drag.",
          },
          {
            heading: "Newton's Second Law & Inertia",
            body: "F = ma links resultant force, mass, and acceleration. Heavier objects have greater inertia (resistance to change in motion), requiring a larger force for the same acceleration. Always subtract opposing forces (friction, drag) to find the resultant force before calculating.",
          },
          {
            heading: "Newton's Third Law Pairs",
            body: "Action and reaction forces always act on two different interacting objects and never cancel each other out on a single object (e.g. foot pushes ball forward; ball pushes foot backward with equal force).",
          },
        ],
        examTips: [
          {
            title: "Constant Velocity Includes Zero",
            content: "'Constant velocity' in Newton's First Law includes zero — stationary objects and objects moving at steady speed in a straight line are both covered by the same law.",
            type: "tip",
          },
          {
            title: "Action-Reaction Objects",
            content: "Action-reaction pairs never act on the same object. When describing a third law pair, always explicitly name two different objects.",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Using total applied force instead of resultant force in F = ma (always subtract friction or air resistance first).",
          "Thinking action and reaction forces cancel each other out on the same object.",
        ],
      },
      {
        id: "1.4",
        title: "Forces, Mass & Weight",
        syllabusRef: "1.4 Mass, Weight & Gravity",
        summary: "Understanding the distinction between mass (scalar, kg, constant) and weight (vector force, N, varies with gravitational field strength g: W = mg).",
        keyDefinitions: [
          {
            term: "Mass",
            definition: "The quantity of matter in an object at rest relative to the observer, which also resists changes in motion (inertia).",
            keywords: ["quantity of matter", "scalar", "inertia", "measured in kg"],
            unit: "kg",
          },
          {
            term: "Weight",
            definition: "The gravitational force acting on an object that has mass (W = m · g).",
            keywords: ["gravitational force", "W = m * g", "vector", "measured in N"],
            unit: "N",
          },
          {
            term: "Gravitational Field Strength (g)",
            definition: "The gravitational force exerted per unit mass placed at that point (Earth g ≈ 10 N/kg or 9.8 N/kg).",
            keywords: ["force per unit mass", "g = W / m", "N/kg or m/s²"],
            unit: "N/kg",
          },
        ],
        coreConcepts: [
          {
            heading: "Mass vs Weight: Fundamental Differences",
            body: "Mass is a scalar property that measures how much matter is inside an object and never changes when you move to the Moon or Mars. Weight is a vector force of gravity pulling that mass towards the center of a planet, calculated using W = mg.",
          },
          {
            heading: "Measuring Mass and Weight",
            body: "Mass is measured by comparing with standard masses using a balance (e.g. beam balance). Weight is measured using a calibrated spring balance or newton-meter.",
          },
        ],
        examTips: [
          {
            title: "Astronaut on the Moon",
            content: "Never say an astronaut has less mass on the Moon! Their mass (kg) remains identical; only their weight (N) is reduced because g_moon is approximately 1.6 N/kg compared to 10 N/kg on Earth.",
            type: "examiner_trap",
          },
        ],
        commonMisconceptions: [
          "Confusing mass in kilograms with weight in Newtons in calculation questions.",
          "Believing that mass decreases when traveling to outer space.",
        ],
      },
      {
        id: "1.5",
        title: "Resultant Forces & Free Body Diagrams",
        syllabusRef: "1.5 Force Addition & Hooke's Law",
        summary: "Determining resultant forces, drawing free-body force diagrams with balanced and unbalanced vectors, and Hooke's Law (F = kx).",
        keyDefinitions: [
          {
            term: "Resultant Force",
            definition: "The single overall force that has the same effect as all the individual forces acting simultaneously on a body.",
            keywords: ["single overall force", "net force", "vector addition"],
            unit: "N",
          },
          {
            term: "Hooke's Law",
            definition: "The extension of an elastic spring is directly proportional to the applied stretching force, provided the limit of proportionality is not exceeded (F = k · x).",
            keywords: ["F = k * x", "extension directly proportional to load", "limit of proportionality"],
          },
          {
            term: "Limit of Proportionality",
            definition: "The point on a load-extension graph beyond which extension is no longer directly proportional to load.",
            keywords: ["non-linear region", "limit of elastic behavior"],
          },
        ],
        coreConcepts: [
          {
            heading: "Free Body Force Diagrams",
            body: "A diagram representing all individual forces acting on an object drawn as arrows showing their direction and relative magnitude from the center of mass.",
          },
          {
            heading: "Hooke's Law & Spring Constant",
            body: "The spring constant k measures the stiffness of a spring (k = F / x in N/m or N/cm). Extension x is calculated as: Current Length − Original Unstretched Length.",
          },
        ],
        examTips: [
          {
            title: "Extension vs Length Trap",
            content: "In Hooke's Law, x is the EXTENSION (change in length), NOT total length. Always subtract the original unstretched length before calculating k = F / x.",
            type: "examiner_trap",
          },
        ],
        commonMisconceptions: [
          "Using the total stretched length instead of extension in F = kx.",
          "Assuming balanced forces mean an object cannot be moving (balanced forces mean constant velocity).",
        ],
      },
      {
        id: "1.6",
        title: "Moments & Equilibrium",
        syllabusRef: "1.6 Turning Effects & Centre of Mass",
        summary: "Calculating turning moments (M = F · d_perp), applying the Principle of Moments for balanced beams, conditions for complete equilibrium, and stability.",
        keyDefinitions: [
          {
            term: "Moment of a Force",
            definition: "The turning effect of a force about a pivot, equal to the Force multiplied by the perpendicular distance from the pivot to the line of action of the force.",
            keywords: ["turning effect", "force × perpendicular distance", "Moment = F · d"],
            unit: "N·m or N·cm",
          },
          {
            term: "Principle of Moments",
            definition: "For an object in rotational equilibrium, the total clockwise moments about any pivot equal the total anticlockwise moments about the same pivot.",
            keywords: ["sum of clockwise moments = sum of anticlockwise moments", "rotational balance"],
          },
          {
            term: "Centre of Gravity",
            definition: "The single point through which the entire weight of an object may be considered to act.",
            keywords: ["point where whole weight acts", "centre of mass"],
          },
        ],
        coreConcepts: [
          {
            heading: "Conditions for Complete Equilibrium",
            body: "An object is in complete static equilibrium when TWO conditions are satisfied simultaneously:\n1. Resultant Force is ZERO (Upward forces = Downward forces, Left forces = Right forces).\n2. Resultant Moment is ZERO (Total Clockwise Moments = Total Anticlockwise Moments).",
          },
          {
            heading: "Stability & Toppling",
            body: "An object is more stable if it has a low centre of gravity and a wide base. It will topple over when the line of action of its weight falls outside its base area.",
          },
        ],
        examTips: [
          {
            title: "The Word 'Perpendicular'",
            content: "Always write 'perpendicular distance from the pivot to the line of action of the force' in definitions. Omitting 'perpendicular' loses the mark!",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Forgetting to include the weight of the beam itself acting at its centre of gravity when taking moments.",
        ],
      },
      {
        id: "1.7",
        title: "Momentum & Conservation of Momentum",
        syllabusRef: "1.7 Linear Momentum & Collisions",
        summary: "Linear momentum (p = mv), conservation of momentum in collisions and explosions, impulse (F · Δt = Δp), and safety features.",
        keyDefinitions: [
          {
            term: "Linear Momentum",
            definition: "The product of an object's mass and its velocity: p = m · v (a vector quantity).",
            keywords: ["p = m * v", "mass × velocity", "vector"],
            unit: "kg·m/s",
          },
          {
            term: "Conservation of Momentum",
            definition: "In any closed system with no resultant external forces, the total momentum before an interaction equals the total momentum after the interaction.",
            keywords: ["total momentum conserved", "m1u1 + m2u2 = m1v1 + m2v2"],
          },
          {
            term: "Impulse & Force",
            definition: "Impulse is the product of resultant force and time interval (F · Δt = Δp), equal to the change in momentum. Force is the rate of change of momentum (F = Δp / Δt).",
            keywords: ["Impulse = F * t", "rate of change of momentum", "F = (mv - mu) / t"],
            unit: "N·s or kg·m/s",
          },
        ],
        coreConcepts: [
          {
            heading: "Collisions and Explosions",
            body: "Total momentum before = Total momentum after. Because momentum is a vector, moving in the opposite direction has a negative velocity and negative momentum.",
          },
          {
            heading: "Vehicle Safety Features (Crumple Zones, Airbags)",
            body: "Safety features increase collision time (Δt). Because F = Δp / Δt, extending impact time reduces the rate of change of momentum, significantly reducing the impact force on passengers.",
          },
        ],
        examTips: [
          {
            title: "Sign Convention for Opposite Direction",
            content: "In collisions where objects move in opposite directions or bounce backward, you MUST assign one direction as positive (+) and the other as negative (-).",
            type: "examiner_trap",
          },
        ],
        commonMisconceptions: [
          "Treating momentum as a scalar and adding magnitudes without considering opposing directions.",
        ],
      },
      {
        id: "1.8",
        title: "Work, Energy & Power",
        syllabusRef: "1.8 Energy Conservation & Work",
        summary: "Kinetic energy (Ek = ½mv²), gravitational potential energy (Ep = mgh), conservation of energy, work done (W = Fd), power (P = W/t), and efficiency.",
        keyDefinitions: [
          {
            term: "Work Done",
            definition: "Energy transferred when a force moves an object through a distance in the direction of the force: W = F · d.",
            keywords: ["force × distance in direction of force", "1 J = 1 N·m"],
            unit: "J (Joules)",
          },
          {
            term: "Kinetic Energy (KE)",
            definition: "The energy stored in an object due to its motion: Ek = ½ · m · v².",
            keywords: ["Ek = 0.5 * m * v^2", "energy of motion"],
            unit: "J",
          },
          {
            term: "Gravitational Potential Energy (GPE)",
            definition: "The energy stored in an object due to its vertical position in a gravitational field: Ep = m · g · h.",
            keywords: ["Ep = m * g * h", "gravitational potential energy"],
            unit: "J",
          },
          {
            term: "Power",
            definition: "The rate of doing work or rate of energy transfer: P = W / t = ΔE / t.",
            keywords: ["rate of work done", "rate of energy transfer", "1 W = 1 J/s"],
            unit: "W (Watts)",
          },
          {
            term: "Efficiency",
            definition: "The ratio of useful energy output to total energy input, expressed as a percentage: Efficiency = (Useful Energy Output / Total Energy Input) × 100%.",
            keywords: ["useful output / total input", "percentage efficiency"],
            unit: "%",
          },
        ],
        coreConcepts: [
          {
            heading: "Law of Conservation of Energy",
            body: "Energy cannot be created or destroyed, only transferred from one store to another. In ideal frictionless falling: Loss in GPE = Gain in KE (mgh = ½mv² => v = √(2gh)).",
          },
          {
            heading: "Work and Power Calculations",
            body: "Work done requires force and distance in the same direction. Power measures how fast that work is completed (1 Watt = 1 Joule per second).",
          },
        ],
        examTips: [
          {
            title: "Speed Squared in Kinetic Energy",
            content: "Doubling speed quadruples the kinetic energy (2² = 4). Therefore, doubling car speed quadruples the work required by brakes to stop it (braking distance increases 4×).",
            type: "examiner_trap",
          },
        ],
        commonMisconceptions: [
          "Saying energy is 'used up' or 'lost' instead of 'dissipated to surroundings as thermal energy'.",
          "Assuming efficiency can exceed 100%.",
        ],
      },
    ],
  },

  {
    id: "unit-2",
    unitNumber: 2,
    title: "Thermal Physics",
    shortTitle: "Thermal Physics",
    iconName: "Flame",
    color: "from-amber-500 to-orange-600",
    description: "Kinetic particle model, Brownian motion, temperature scales, thermal expansion, specific heat capacity, latent heat, conduction, convection, and radiation.",
    subTopics: [
      {
        id: "2.1",
        title: "Kinetic Particle Model & Gas Laws",
        syllabusRef: "2.1 Molecular Model",
        summary: "Particle arrangements in solids, liquids, and gases; Brownian motion evidence; evaporation vs boiling; Boyle's law.",
        keyDefinitions: [
          {
            term: "Brownian Motion",
            definition: "The random, jerky, zigzag motion of microscopic particles (e.g. smoke particles or pollen grains) suspended in a fluid.",
            keywords: ["random zigzag motion", "caused by bombardment by fast-moving invisible fluid molecules"],
          },
          {
            term: "Evaporation",
            definition: "The escape of the most energetic molecules from the surface of a liquid at any temperature below boiling point, causing cooling.",
            keywords: ["surface only", "any temperature", "most energetic particles escape", "average KE decreases => temperature drops"],
          },
          {
            term: "Boiling",
            definition: "Rapid vaporization occurring throughout the entire bulk of the liquid at a fixed boiling point, forming bubbles of vapor.",
            keywords: ["throughout liquid", "fixed temperature", "bubbles form"],
          },
        ],
        coreConcepts: [
          {
            heading: "Kinetic Particle Arrangements",
            body: "Comparison of the three classic states of matter:",
            bullets: [
              "Solid: Regular lattice arrangement, tightly packed, strong intermolecular bonds, vibrate about fixed positions. Fixed shape & fixed volume.",
              "Liquid: Random arrangement, closely touching, weaker bonds, slide past each other. Takes shape of container, fixed volume.",
              "Gas: Random arrangement, far apart, negligible forces between particles, move rapidly at random speeds in all directions. No fixed shape or volume.",
            ],
            diagramType: "thermal",
          },
          {
            heading: "Gas Pressure from Molecular Collisions",
            body: "Gas molecules are in constant random motion. When they collide with container walls, they exert a force on the wall (change in momentum: F = Δp/Δt). The total force per unit area produces gas pressure (p = F/A).",
            bullets: [
              "Increasing Temperature: Molecules have higher average KE, move faster, collide more frequently and with greater force -> Pressure increases.",
              "Decreasing Volume: Gas molecules are confined to a smaller space, so they collide with walls more frequently -> Pressure increases (p ∝ 1/V).",
            ],
          },
        ],
        examTips: [
          {
            title: "Explaining Brownian Motion in Mark Schemes",
            content: "Examiners want two clear points: 1) Smoke particles are hit by smaller, invisible air molecules. 2) The collisions are uneven and random, causing visible erratic movement.",
            type: "mark_scheme_keyword",
          },
          {
            title: "Why Evaporation Causes Cooling",
            content: "Higher kinetic energy molecules escape the liquid surface -> Average kinetic energy of remaining molecules decreases -> Temperature is proportional to average KE, so temperature decreases.",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Believing smoke particles move by themselves (they move due to collisions with invisible air molecules).",
          "Thinking molecules expand when heated (molecules vibrate more and move further apart; the molecules themselves do not expand).",
        ],
      },
      {
        id: "2.2",
        title: "Thermal Properties, SHC & Latent Heat",
        syllabusRef: "2.2 Specific Heat & Latent Heat",
        summary: "Thermal expansion, bimetallic strips, specific heat capacity (Q = mcΔT), and latent heat of fusion / vaporization (Q = mL).",
        keyDefinitions: [
          {
            term: "Specific Heat Capacity (c)",
            definition: "The amount of thermal energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K).",
            keywords: ["energy to raise 1 kg by 1 °C", "Q = m · c · ΔT"],
            unit: "J / (kg·°C)",
          },
          {
            term: "Specific Latent Heat of Fusion (L_f)",
            definition: "The thermal energy required to change 1 kg of substance from solid to liquid without any change in temperature.",
            keywords: ["solid to liquid at melting point", "no temperature change", "Q = m · L_f"],
            unit: "J/kg",
          },
          {
            term: "Specific Latent Heat of Vaporization (L_v)",
            definition: "The thermal energy required to change 1 kg of substance from liquid to gas without any change in temperature.",
            keywords: ["liquid to gas at boiling point", "no temperature change", "Q = m · L_v"],
            unit: "J/kg",
          },
        ],
        coreConcepts: [
          {
            heading: "Heating & Cooling Curves",
            body: "During melting and boiling, the temperature graph goes FLAT (horizontal plateau):",
            bullets: [
              "Why temperature stays constant: Thermal energy supplied is used to overcome and break intermolecular bonds (increasing potential energy of particles) rather than increasing kinetic energy.",
              "Temperature is a measure of the AVERAGE KINETIC ENERGY of particles. Since KE is constant during state change, temperature does not rise.",
            ],
          },
          {
            heading: "Thermal Expansion Applications",
            body: "Gases expand the most for a given temperature rise, followed by liquids, then solids (gases >> liquids > solids). Applications include bimetallic strips in thermostats (brass expands faster than iron, bending the strip to break a circuit).",
          },
        ],
        examTips: [
          {
            title: "Latent Heat vs Specific Heat Choice",
            content: "Use Q = mcΔT when there IS a temperature change. Use Q = mL when substance is changing state AT CONSTANT temperature.",
            type: "tip",
          },
        ],
        commonMisconceptions: [
          "Assuming temperature rises continuously during boiling (it remains strictly at boiling point until all liquid is vaporized).",
        ],
      },
      {
        id: "2.3",
        title: "Thermal Energy Transfer",
        syllabusRef: "2.3 Conduction, Convection & Radiation",
        summary: "Conduction mechanism in metals, convection currents in fluids, infrared radiation, surface emission/absorption properties, and vacuum flasks.",
        keyDefinitions: [
          {
            term: "Conduction",
            definition: "The transfer of thermal energy through a medium without any net movement of the material itself, primarily via particle vibrations and free electron diffusion in metals.",
            keywords: ["particle vibrations", "free electrons in metals", "solids"],
          },
          {
            term: "Convection",
            definition: "The transfer of thermal energy in fluids (liquids and gases) through the bulk movement of the fluid caused by differences in density.",
            keywords: ["fluids only", "fluid heats, expands, becomes less dense and rises", "cooler denser fluid sinks to replace it"],
          },
          {
            term: "Thermal Radiation",
            definition: "The transfer of thermal energy by electromagnetic waves (mainly Infrared), which can travel through a vacuum at the speed of light.",
            keywords: ["infrared waves", "travels through vacuum", "no medium required"],
          },
        ],
        coreConcepts: [
          {
            heading: "Surface Properties for Thermal Radiation",
            body: "How surface color and texture affect thermal radiation:",
            bullets: [
              "Dull Matte Black: BEST emitter of radiation, BEST absorber of radiation, WORST reflector.",
              "Shiny Silver / White: WORST emitter of radiation, WORST absorber of radiation, BEST reflector.",
              "Applications: Solar water heater panels are painted black to absorb heat; emergency space blankets are shiny silver to reflect body heat back.",
            ],
          },
          {
            heading: "Vacuum Flask (Thermos) Design Features",
            body: "How a thermos stops all 3 heat transfer methods:",
            bullets: [
              "Vacuum between double walls: Stops CONDUCTION and CONVECTION (requires a particle medium).",
              "Silvered inner walls: Minimizes heat transfer by RADIATION by reflecting IR waves back.",
              "Plastic/cork stopper: Prevents CONVECTION currents escaping and stops evaporation.",
              "Plastic outer casing: Poor conductor (insulator) stopping conduction to hands.",
            ],
          },
        ],
        examTips: [
          {
            title: "Convection Current Explanation Formula",
            content: "To get full 3 marks on convection questions, follow this exact sequence: 1) Fluid near heat source heats up and expands. 2) Its density decreases. 3) Warmer, less dense fluid rises. 4) Cooler, denser fluid sinks to replace it, setting up a circulating convection current.",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Saying 'heat rises'. Correct physics: 'WARM, LESS DENSE FLUID RISES'.",
        ],
      },
    ],
  },

  {
    id: "unit-3",
    unitNumber: 3,
    title: "Waves & Optics",
    shortTitle: "Waves & Optics",
    iconName: "Waves",
    color: "from-emerald-600 to-teal-600",
    description: "Wave properties, reflection, refraction, total internal reflection, converging lenses, electromagnetic spectrum, sound waves and echoes.",
    subTopics: [
      {
        id: "3.1",
        title: "General Wave Properties",
        syllabusRef: "3.1 Wave Characteristics",
        summary: "Transverse vs longitudinal waves, wave equation (v = fλ), wavefronts, reflection, refraction, and diffraction through gaps.",
        keyDefinitions: [
          {
            term: "Transverse Wave",
            definition: "A wave where the direction of particle oscillation is perpendicular (at 90°) to the direction of wave energy propagation (e.g. light, water waves, S-waves).",
            keywords: ["oscillations perpendicular to energy transfer", "crests and troughs"],
          },
          {
            term: "Longitudinal Wave",
            definition: "A wave where the direction of particle oscillation is parallel to the direction of wave energy propagation (e.g. sound waves, ultrasound, P-waves).",
            keywords: ["oscillations parallel to energy transfer", "compressions and rarefactions"],
          },
          {
            term: "Wavelength (λ)",
            definition: "The distance between two consecutive identical points on a wave (e.g. from crest to crest or compression to compression).",
            keywords: ["distance between two successive crests", "λ = v / f"],
            unit: "m",
          },
          {
            term: "Frequency (f)",
            definition: "The number of complete waves or oscillations passing a point per second.",
            keywords: ["waves per second", "f = 1 / T"],
            unit: "Hz (Hertz)",
          },
          {
            term: "Diffraction",
            definition: "The spreading out of waves as they pass through an aperture (gap) or around the edge of an obstacle.",
            keywords: ["spreading of waves through a gap", "maximum when gap width ≈ wavelength"],
          },
        ],
        coreConcepts: [
          {
            heading: "Diffraction Conditions",
            body: "Diffraction is most pronounced (circular wavefronts) when the size of the gap is equal to or smaller than the wavelength of the wave (gap width ≤ λ). If the gap is much wider than λ, waves pass through with minimal spreading at the edges.",
            diagramType: "wave",
          },
          {
            heading: "Water Waves Refraction in Shallow vs Deep Water",
            body: "When water waves travel from deep water into shallow water:",
            bullets: [
              "Wave speed v DECREASES in shallow water.",
              "Frequency f stays CONSTANT (determined by source).",
              "Wavelength λ DECREASES (since λ = v/f).",
              "Wavefronts bend towards the normal (if entering at an angle).",
            ],
          },
        ],
        examTips: [
          {
            title: "Frequency Stays Constant During Refraction",
            content: "When any wave (light, sound, water) undergoes refraction and changes medium, its speed and wavelength change, but its FREQUENCY ALWAYS REMAINS CONSTANT!",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Drawing waves with changing frequency during reflection or refraction.",
          "Thinking sound waves are transverse (Sound is strictly longitudinal).",
        ],
      },
      {
        id: "3.2",
        title: "Light: Reflection, Refraction & Lenses",
        syllabusRef: "3.2 Geometric Optics",
        summary: "Laws of reflection, Snell's law (n = sin i / sin r), critical angle and total internal reflection, thin converging lenses, and real vs virtual images.",
        keyDefinitions: [
          {
            term: "Law of Reflection",
            definition: "The angle of incidence equals the angle of reflection (i = r). Both rays and the normal lie in the same plane.",
            keywords: ["angle of incidence = angle of reflection", "measured to normal"],
          },
          {
            term: "Refractive Index (n)",
            definition: "The ratio of the speed of light in vacuum to the speed of light in the medium (n = c / v = sin i / sin r).",
            keywords: ["n = sin i / sin r", "n = c / v", "dimensionless > 1.0"],
          },
          {
            term: "Critical Angle (c)",
            definition: "The angle of incidence in the optically denser medium for which the angle of refraction is 90° along the boundary.",
            keywords: ["angle of incidence giving 90° refraction", "sin c = 1 / n"],
            unit: "degrees (°)",
          },
          {
            term: "Total Internal Reflection (TIR)",
            definition: "Complete reflection of a light ray back into the denser medium when angle of incidence exceeds the critical angle.",
            keywords: ["from denser to less dense", "angle of incidence > critical angle", "optical fibers, prisms"],
          },
          {
            term: "Real vs Virtual Image",
            definition: "A Real image can be projected onto a screen (rays physically meet). A Virtual image cannot be formed on a screen (rays appear to diverge from a point behind lens/mirror).",
            keywords: ["Real: rays meet, projectable", "Virtual: rays do not meet, cannot project"],
          },
        ],
        coreConcepts: [
          {
            heading: "Ray Diagrams for Thin Converging (Convex) Lenses",
            body: "3 Standard Rules for Drawing Rays through a Converging Lens:",
            bullets: [
              "Ray 1: Parallel to principal axis passes through the principal focus (F) on the opposite side.",
              "Ray 2: Passing straight through the optical center (C) continues without deviation.",
              "Ray 3: Passing through focal point F before the lens emerges parallel to the principal axis.",
            ],
            diagramType: "ray",
          },
          {
            heading: "Image Characteristics based on Object Distance (u)",
            body: "Mastering image nature for various object distances from focal length f:",
            bullets: [
              "u > 2f (Camera / Eye): Real, Inverted, Diminished, formed between f and 2f.",
              "u = 2f (Photocopier 1:1): Real, Inverted, Same Size, formed at 2f.",
              "f < u < 2f (Projector): Real, Inverted, Magnified, formed beyond 2f.",
              "u < f (Magnifying Glass): Virtual, Upright, Magnified, formed on same side as object.",
            ],
          },
          {
            heading: "Optical Fibers & Periscopes",
            body: "Optical fibers utilize Total Internal Reflection to transmit light pulses at high speed over long distances with minimal loss. Glass prisms (45°-45°-90°) use TIR instead of mirrors in periscopes and binoculars because prisms reflect 100% of light without multiple ghost reflections.",
          },
        ],
        examTips: [
          {
            title: "Normal Line Measurement",
            content: "ALWAYS measure angles of incidence i and refraction r from the ray to the NORMAL (the dashed perpendicular line), NEVER from the ray to the glass surface.",
            type: "examiner_trap",
          },
          {
            title: "Virtual Rays Must Be Dashed",
            content: "In ray diagrams for virtual images or virtual focus, virtual rays MUST be drawn with DASHED / DOTTED lines to earn the mark.",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Measuring angles from the mirror or glass surface instead of the normal line.",
          "Thinking Total Internal Reflection can happen when light goes from air into glass (it ONLY happens when going from denser to less dense!).",
        ],
      },
      {
        id: "3.3",
        title: "Electromagnetic Spectrum",
        syllabusRef: "3.3 EM Waves",
        summary: "Order of the EM spectrum, constant speed c = 3×10⁸ m/s, uses, and biological hazards of each waveband.",
        keyDefinitions: [
          {
            term: "Electromagnetic Wave",
            definition: "Transverse waves consisting of oscillating electric and magnetic fields that travel at the speed of light in a vacuum (3.0 × 10⁸ m/s).",
            keywords: ["transverse", "travel in vacuum", "c = 3.0 × 10⁸ m/s"],
          },
        ],
        coreConcepts: [
          {
            heading: "The EM Spectrum Order (Increasing Frequency / Decreasing Wavelength)",
            body: "Mnemonic: 'Roman Men Invented Very Unusual X-ray Guns'",
            bullets: [
              "1. Radio Waves (Longest λ, lowest f): Radio & TV communications, RFID, Bluetooth.",
              "2. Microwaves: Satellite communications, mobile phones, microwave ovens (heats water molecules).",
              "3. Infrared (IR): Remote controls, thermal imaging, radiant heaters, optical fiber communication.",
              "4. Visible Light (Red to Violet): Human vision, photography, fiber optic illumination.",
              "5. Ultraviolet (UV): Sunbeds, security markings, sterilizing water (Hazard: skin cancer, blindness).",
              "6. X-Rays: Medical imaging of bones, airport baggage security (Hazard: ionizing, cell mutations).",
              "7. Gamma Rays (Shortest λ, highest f, most energetic): Radiotherapy (cancer treatment), sterilizing medical instruments, food preservation.",
            ],
          },
        ],
        examTips: [
          {
            title: "Common Speed in Vacuum",
            content: "All EM waves travel at the SAME speed in a vacuum: 3.0 × 10⁸ m/s. Gamma rays do NOT travel faster than radio waves in space!",
            type: "warning",
          },
        ],
        commonMisconceptions: [
          "Thinking sound is part of the electromagnetic spectrum (Sound is a mechanical longitudinal wave, EM waves are transverse).",
        ],
      },
      {
        id: "3.4",
        title: "Sound Waves & Ultrasound",
        syllabusRef: "3.4 Acoustics",
        summary: "Sound production by vibrations, longitudinal nature, pitch vs frequency, loudness vs amplitude, speed in media, echoes and ultrasound.",
        keyDefinitions: [
          {
            term: "Audible Frequency Range for Humans",
            definition: "The normal human hearing range is approximately 20 Hz to 20,000 Hz (20 kHz).",
            keywords: ["20 Hz to 20 kHz"],
          },
          {
            term: "Ultrasound",
            definition: "Sound waves with frequencies higher than the upper limit of human hearing (greater than 20,000 Hz / 20 kHz).",
            keywords: ["frequency > 20 kHz", "prenatal scanning, sonar, cleaning jewelry"],
          },
          {
            term: "Pitch vs Loudness",
            definition: "Pitch depends directly on wave Frequency (higher f = higher pitch). Loudness depends directly on wave Amplitude (higher A = louder sound).",
            keywords: ["pitch = frequency", "loudness = amplitude"],
          },
        ],
        coreConcepts: [
          {
            heading: "Speed of Sound in Different Media",
            body: "Sound requires a material medium to propagate (cannot travel through a vacuum):",
            bullets: [
              "Speed in Solids (≈ 5000 m/s) > Speed in Liquids (≈ 1500 m/s) > Speed in Gases (≈ 330–340 m/s).",
              "Reason: Particles are packed closest together in solids with strong bonds, transmitting vibrations much faster.",
            ],
          },
          {
            heading: "Echo Calculations (Round Trip)",
            body: "When a sound wave reflects off a wall or sea bed, it travels to the obstacle and back (total distance = 2d). Therefore: d = (v × t) / 2.",
          },
        ],
        examTips: [
          {
            title: "Echo Division by 2",
            content: "In echo or sonar questions, always check if the time given is for the round trip (to barrier and back) or one-way. If round trip, divide by 2!",
            type: "examiner_trap",
          },
        ],
        commonMisconceptions: [
          "Thinking sound travels faster in air than in steel (Sound travels fastest in dense solids!).",
        ],
      },
    ],
  },

  {
    id: "unit-4",
    unitNumber: 4,
    title: "Electricity & Magnetism",
    shortTitle: "Electricity & Magnetism",
    iconName: "Zap",
    color: "from-yellow-500 to-amber-600",
    description: "Static electricity, electric current, potential difference, resistance, series/parallel circuits, potential dividers, electrical safety, electromagnetic induction, motors, and transformers.",
    subTopics: [
      {
        id: "4.1",
        title: "Magnetism & Magnetic Fields",
        syllabusRef: "4.1 Magnetic Properties",
        summary: "Magnetic poles, field lines from North to South, magnetic induction, soft iron vs steel, and electromagnets.",
        keyDefinitions: [
          {
            term: "Magnetic Field",
            definition: "A region in space where a magnetic pole experiences a force. Magnetic field lines always point from North to South.",
            keywords: ["region where magnetic pole experiences force", "North to South lines"],
          },
          {
            term: "Temporary (Soft) vs Permanent (Hard) Magnets",
            definition: "Soft magnetic materials (e.g. soft iron) are easy to magnetize and easily lose their magnetism (used in electromagnet cores). Hard magnetic materials (e.g. steel) are difficult to magnetize but retain their magnetism permanently (used in bar magnets, compass needles).",
            keywords: ["iron: easily loses magnetism", "steel: retains magnetism permanently"],
          },
        ],
        coreConcepts: [
          {
            heading: "Plotting Magnetic Field Lines with a Compass",
            body: "Standard Paper 6 Practical Technique:",
            bullets: [
              "1. Place bar magnet in center of paper and trace its outline.",
              "2. Place plotting compass near the North pole. Mark dots at the tail and tip of the compass needle.",
              "3. Move the compass so the tail aligns with the previous tip dot. Mark the new tip dot.",
              "4. Repeat until the compass reaches the South pole. Join dots with a smooth line and add arrow pointing North to South.",
              "5. Repeat starting from various points around the magnet.",
            ],
          },
          {
            heading: "Electromagnet Construction & Strength Factors",
            body: "An electromagnet consists of a current-carrying coil of insulated wire (solenoid) wrapped around a soft iron core. Strength can be increased by: 1) Increasing current (I); 2) Increasing number of turns of wire (N); 3) Inserting a soft iron core.",
          },
        ],
        examTips: [
          {
            title: "Field Line Direction Arrow",
            content: "Examiners always look for arrows on magnetic field lines. Lines MUST point from NORTH to SOUTH outside the magnet. Lines must never cross!",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Using steel as the core of an electromagnet (steel would stay permanently magnetized, preventing the electromagnet from switching off!).",
        ],
      },
      {
        id: "4.2",
        title: "Current, Voltage & Resistance",
        syllabusRef: "4.2 Electrical Quantities",
        summary: "Current (Q = It), EMF vs Potential Difference (V = W/Q), Ohm's law (V = IR), and I-V characteristic graphs for resistors, lamps, and diodes.",
        keyDefinitions: [
          {
            term: "Electric Current (I)",
            definition: "The rate of flow of electric charge around a circuit (I = Q / t). In metals, it is the flow of free electrons.",
            keywords: ["rate of flow of charge", "1 A = 1 C/s"],
            unit: "A (Amperes)",
          },
          {
            term: "Electromotive Force (EMF)",
            definition: "The electrical energy transferred per unit charge by a source in driving charge around a complete circuit.",
            keywords: ["energy transferred per unit charge by power source", "V = W / Q"],
            unit: "V (Volts)",
          },
          {
            term: "Potential Difference (p.d.)",
            definition: "The electrical energy transferred per unit charge converted into other forms (heat/light) between two points in a circuit.",
            keywords: ["energy transferred per unit charge across component"],
            unit: "V (Volts)",
          },
          {
            term: "Ohm's Law",
            definition: "The current through a metallic conductor is directly proportional to the potential difference across it, provided temperature remains constant (V = IR).",
            keywords: ["current directly proportional to p.d.", "constant temperature", "straight line through origin"],
          },
        ],
        coreConcepts: [
          {
            heading: "I-V Characteristic Graphs (Crucial for Exams)",
            body: "Three essential circuit component graphs to memorize:",
            bullets: [
              "1. Ohmic Resistor (at constant temp): Straight line passing through (0,0). Constant resistance (gradient = 1/R).",
              "2. Filament Lamp: S-shaped curve bending towards the voltage axis. As current increases, temperature increases -> metal ions vibrate more vigorously -> resistance INCREASES.",
              "3. Semiconductor Diode: Zero current in reverse bias. Very high resistance until threshold forward voltage (≈ 0.6–0.7 V), then current rises steeply (very low resistance).",
            ],
            diagramType: "circuit",
          },
          {
            heading: "Factors Affecting Resistance of a Wire",
            body: "Resistance R depends on: 1) Length L (R ∝ L, longer = higher R); 2) Cross-sectional area A (R ∝ 1/A, thicker = lower R); 3) Material; 4) Temperature (hotter metal = higher R).",
          },
        ],
        examTips: [
          {
            title: "Ammeters vs Voltmeters Connection",
            content: "Ammeters have near-zero resistance and MUST be connected in SERIES. Voltmeters have very high resistance and MUST be connected in PARALLEL across the component.",
            type: "warning",
          },
        ],
        commonMisconceptions: [
          "Thinking current gets 'used up' as it flows around a circuit (Current is conserved; energy is transferred).",
        ],
      },
      {
        id: "4.3",
        title: "Circuit Rules, LDRs, Thermistors & Potential Dividers",
        syllabusRef: "4.3 Circuit Analysis",
        summary: "Series vs parallel circuit rules, equivalent resistance formulas, potential divider equation, and sensing circuits with LDRs and NTC thermistors.",
        keyDefinitions: [
          {
            term: "Series Circuit Rules",
            definition: "Current is the SAME at all points (I_total = I₁ = I₂). Total voltage splits (V_total = V₁ + V₂). Total resistance adds up (R_total = R₁ + R₂).",
            keywords: ["current same", "voltage splits", "R_total = R₁ + R₂"],
          },
          {
            term: "Parallel Circuit Rules",
            definition: "Voltage is the SAME across each branch (V_total = V₁ = V₂). Current splits between branches (I_total = I₁ + I₂). 1/R_total = 1/R₁ + 1/R₂.",
            keywords: ["voltage same across branches", "current splits", "1/R_total = 1/R₁ + 1/R₂"],
          },
          {
            term: "LDR (Light Dependent Resistor)",
            definition: "A sensor component whose resistance DECREASES as light intensity INCREASES (Light up -> Resistance down).",
            keywords: ["more light = lower resistance", "LURD: Light Up Resistance Down"],
          },
          {
            term: "NTC Thermistor",
            definition: "A temperature-sensitive resistor whose resistance DECREASES as temperature INCREASES (Temp up -> Resistance down).",
            keywords: ["higher temp = lower resistance", "TURD: Temperature Up Resistance Down"],
          },
        ],
        coreConcepts: [
          {
            heading: "Potential Divider Formula",
            body: "A circuit with two resistors in series that splits supply voltage V_in in proportion to their resistances: V₁ = (R₁ / (R₁ + R₂)) × V_in. If R₁ increases, the voltage V₁ across it increases.",
          },
          {
            heading: "Automatic Street Light Sensor Circuit (LDR Example)",
            body: "LDR connected in series with fixed resistor R: In the dark, LDR resistance becomes very HIGH. Thus, voltage across the LDR becomes HIGH, providing enough voltage to turn ON a transistor or relay that lights the lamp.",
          },
        ],
        examTips: [
          {
            title: "LURD & TURD Mnemonics",
            content: "Remember: LURD = Light Up, Resistance Down (for LDR). TURD = Temperature Up, Resistance Down (for Thermistor). This will save you marks on every sensor question!",
            type: "tip",
          },
        ],
        commonMisconceptions: [
          "Calculating parallel resistance by simply adding the values (Parallel total is ALWAYS less than the smallest individual resistor).",
        ],
      },
      {
        id: "4.4",
        title: "Electrical Safety & Domestic Power",
        syllabusRef: "4.4 Electrical Safety",
        summary: "Live, neutral, and earth wires; fuse ratings; circuit breakers; earthing metal appliances; double insulation; and P = IV calculations.",
        keyDefinitions: [
          {
            term: "Fuse",
            definition: "A safety device containing a thin wire designed to melt and break the circuit when current exceeds a specific rated value, protecting against overheating and fires.",
            keywords: ["melts and breaks circuit", "protects against excessive current", "connected in LIVE wire"],
          },
          {
            term: "Earthing",
            definition: "Connecting the metal outer casing of an appliance to the Earth wire. If a live wire touches the metal casing, a huge current surges safely to ground, blowing the fuse and preventing electric shock.",
            keywords: ["connects metal casing to ground", "causes fuse to blow", "prevents user shock"],
          },
          {
            term: "Double Insulation",
            definition: "Appliances with an entire plastic outer casing (no exposed metal parts) that do not require an earth wire.",
            keywords: ["plastic casing", "no metal exposed", "no earth wire needed"],
          },
        ],
        coreConcepts: [
          {
            heading: "Domestic 3-Pin Plug Wire Colors",
            body: "Standard international wiring:",
            bullets: [
              "Live Wire (Brown): Carries high alternating voltage (230 V) to the appliance. Fuse and switch MUST be connected in the Live wire.",
              "Neutral Wire (Blue): Completes the circuit, held at near 0 V.",
              "Earth Wire (Green and Yellow stripes): Safety wire connected to the earth pin and metal casing.",
            ],
          },
          {
            heading: "Choosing the Correct Fuse Rating",
            body: "Calculate normal operating current using I = P / V. Choose the next standard fuse rating ABOVE this operating current (e.g. if operating current is 3.5 A, choose a 5 A fuse, NOT a 3 A fuse which would blow immediately).",
          },
        ],
        examTips: [
          {
            title: "Why Switch Must Be in Live Wire",
            content: "If the switch is in the neutral wire, turning the switch off breaks the circuit, but the appliance remains connected to 230 V Live! Anyone touching internal parts would still receive a lethal electric shock.",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Thinking fuses protect humans from electric shocks (fuses protect cables and appliances from fire; Earth wires + fuses protect humans).",
        ],
      },
      {
        id: "4.5",
        title: "Electromagnetic Effects: Motors, Induction & Transformers",
        syllabusRef: "4.5 Electromagnetic Induction",
        summary: "Motor effect, Fleming's Left-Hand Rule, DC motor split-ring commutator, electromagnetic induction, Fleming's Right-Hand Rule, AC generator slip rings, and transformer calculations.",
        keyDefinitions: [
          {
            term: "Motor Effect",
            definition: "When a current-carrying conductor is placed in a magnetic field, the interaction between the two fields produces a mechanical force on the wire.",
            keywords: ["force on current-carrying wire in magnetic field", "Fleming's Left-Hand Rule"],
          },
          {
            term: "Electromagnetic Induction",
            definition: "The generation of an electromotive force (EMF) across a conductor whenever there is relative motion that cuts magnetic field lines (or when magnetic flux changes).",
            keywords: ["EMF induced when conductor cuts magnetic field lines", "Lenz's law"],
          },
          {
            term: "Transformer",
            definition: "A static electrical device that uses mutual electromagnetic induction between two coils on a soft iron core to increase (step-up) or decrease (step-down) alternating voltages.",
            keywords: ["steps AC voltage up or down", "V_p / V_s = N_p / N_s", "requires AC, does NOT work on DC"],
          },
        ],
        coreConcepts: [
          {
            heading: "Fleming's Rules Mnemonic (FBI)",
            body: "Never confuse Left and Right hand rules:",
            bullets: [
              "Fleming's LEFT-Hand Rule: For MOTORS (Electrical in -> Mechanical Motion out). Thumb = Motion/Force (F), First finger = Field (B, North to South), seCond finger = Current (I, + to -).",
              "Fleming's RIGHT-Hand Rule: For GENERATORS / INDUCTION (Motion in -> Induced Current out). Thumb = Motion, First finger = Field, seCond finger = Induced Current.",
            ],
          },
          {
            heading: "Split-Ring Commutator vs Slip Rings",
            body: "Essential distinction frequently tested in Paper 4:",
            bullets: [
              "DC Motor uses a SPLIT-RING COMMUTATOR: It reverses the direction of current in the coil every half-turn (180°), ensuring that forces remain in the same rotational direction for continuous 360° rotation.",
              "AC Generator uses SLIP RINGS and carbon brushes: Keeps continuous contact with the same side of the coil, outputting alternating current (AC) with a sinusoidal waveform.",
            ],
          },
          {
            heading: "High-Voltage Power Grid Transmission",
            body: "Why electricity is stepped up to 400,000 V for long-distance grid cables: Transformers step up voltage (V_s > V_p), which steps DOWN current (I_s < I_p). Since power loss in cables is P_loss = I²R, reducing current by 10× reduces heat power loss by 100× (10² = 100)! Electricity is stepped down near homes for safety.",
          },
        ],
        examTips: [
          {
            title: "Why Transformers Fail on DC",
            content: "Transformers require an ALTERNATING CURRENT (AC) because AC creates a continuously changing magnetic field in the soft iron core, which is necessary to induce an EMF in the secondary coil. Direct Current (DC) creates a constant magnetic field, so after an initial pulse, NO EMF is induced.",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Thinking a transformer increases electrical power (For 100% ideal transformer, Power In = Power Out; V increases so I decreases).",
        ],
      },
    ],
  },

  {
    id: "unit-5",
    unitNumber: 5,
    title: "Nuclear Physics",
    shortTitle: "Nuclear Physics",
    iconName: "Atom",
    color: "from-purple-600 to-indigo-600",
    description: "Atomic model, Rutherford alpha scattering, isotopes, alpha/beta/gamma radiation properties, half-life decay calculations, nuclear fission and fusion.",
    subTopics: [
      {
        id: "5.1",
        title: "The Nuclear Model & Isotopes",
        syllabusRef: "5.1 Atomic Structure",
        summary: "Rutherford's alpha scattering experiment, protons, neutrons, electrons, nuclide notation (A/Z X), and isotopes.",
        keyDefinitions: [
          {
            term: "Proton Number (Atomic Number Z)",
            definition: "The number of protons in the nucleus of an atom (determines the element).",
            keywords: ["number of protons in nucleus"],
          },
          {
            term: "Nucleon Number (Mass Number A)",
            definition: "The total number of protons and neutrons combined in the nucleus (A = Z + N).",
            keywords: ["total protons + neutrons"],
          },
          {
            term: "Isotopes",
            definition: "Atoms of the same element that have the SAME number of protons (same Z) but DIFFERENT numbers of neutrons (different A).",
            keywords: ["same protons, different neutrons", "same chemical properties"],
          },
        ],
        coreConcepts: [
          {
            heading: "Rutherford's Alpha Scattering Experiment (Gold Foil)",
            body: "Alpha particles (positive helium nuclei) fired at a thin gold foil provided 3 revolutionary observations:",
            bullets: [
              "Observation 1: Most alpha particles passed straight through without deflection -> Conclusion: The atom is mostly EMPTY SPACE.",
              "Observation 2: A small fraction deflected through large angles -> Conclusion: The nucleus contains a concentrated POSITIVE charge that repels positive alpha particles.",
              "Observation 3: A very tiny fraction (1 in 8000) rebounded backward (> 90°) -> Conclusion: The nucleus is extremely SMALL, very DENSE, and contains almost all the mass of the atom.",
            ],
            diagramType: "atom",
          },
        ],
        examTips: [
          {
            title: "Isotopes Chemical vs Physical Properties",
            content: "Isotopes have the SAME chemical properties because they have the same number and arrangement of outer electrons. They have slightly DIFFERENT physical properties (e.g. density, boiling point, radioactivity) due to different masses.",
            type: "tip",
          },
        ],
        commonMisconceptions: [
          "Thinking the Rutherford experiment proved electrons exist (It proved the existence of the tiny, dense, positive nucleus).",
        ],
      },
      {
        id: "5.2",
        title: "Radioactive Decay: Alpha, Beta & Gamma",
        syllabusRef: "5.2 Ionizing Radiation",
        summary: "Characteristics of alpha, beta, and gamma radiation; ionizing vs penetrating abilities; deflection in electric/magnetic fields; background radiation.",
        keyDefinitions: [
          {
            term: "Alpha (α) Particle",
            definition: "A helium nucleus consisting of 2 protons and 2 neutrons (⁴₂He), charge +2e, mass 4 u.",
            keywords: ["helium nucleus", "charge +2", "highest ionizing power", "stopped by paper/skin"],
          },
          {
            term: "Beta (β⁻) Particle",
            definition: "A fast-moving, high-energy electron (⁰₋₁e) emitted from the nucleus when a neutron decays into a proton and an electron.",
            keywords: ["fast-moving electron", "charge -1", "moderate ionizing", "stopped by few mm aluminum"],
          },
          {
            term: "Gamma (γ) Ray",
            definition: "High-frequency electromagnetic radiation emitted from an unstable nucleus carrying excess energy.",
            keywords: ["electromagnetic wave", "zero charge, zero mass", "lowest ionizing power", "reduced by thick lead/concrete"],
          },
        ],
        coreConcepts: [
          {
            heading: "Radiation Properties Summary Matrix",
            body: "Essential comparison table for exam revision:",
            bullets: [
              "Ionizing Ability: Alpha (Extremely High) >> Beta (Moderate) > Gamma (Very Weak).",
              "Penetrating Ability: Gamma (Highest - penetrates lead) >> Beta (Passes paper, stopped by 3mm Al) >> Alpha (Lowest - stopped by paper or 5cm air).",
              "Deflection in Electric/Magnetic Fields: Alpha deflects slightly towards negative (heavy, +2); Beta deflects sharply towards positive (light, -1); Gamma is undeflected (neutral).",
            ],
          },
          {
            heading: "Balancing Nuclear Decay Equations",
            body: "In any nuclear equation, Total Mass Number (A) and Total Atomic Number (Z) MUST balance on both sides:",
            bullets: [
              "Alpha Decay: ᴬ_Z X -> ᴬ⁻⁴_{Z-2} Y + ⁴₂He (Mass drops by 4, atomic number drops by 2).",
              "Beta Decay: ᴬ_Z X -> ᴬ_{Z+1} Y + ⁰₋₁e (Mass stays same, atomic number increases by 1).",
              "Gamma Decay: ᴬ_Z X* -> ᴬ_Z X + γ (No change in mass or atomic number).",
            ],
          },
        ],
        examTips: [
          {
            title: "Subtract Background Radiation First!",
            content: "In half-life and count rate calculations, always SUBTRACT the background radiation count rate from the measured count rate before calculating decay or finding half-life!",
            type: "examiner_trap",
          },
        ],
        commonMisconceptions: [
          "Thinking beta particles come from electron shells (Beta particles are ejected directly from the nucleus when a neutron decays into a proton + electron).",
        ],
      },
      {
        id: "5.3",
        title: "Half-Life & Practical Applications",
        syllabusRef: "5.3 Radioactive Half-Life",
        summary: "Half-life definition, decay curves, calculating remaining activity, smoke alarms, thickness monitoring, medical tracers, and carbon dating.",
        keyDefinitions: [
          {
            term: "Radioactive Half-Life (T_1/2)",
            definition: "The time taken for half the radioactive nuclei in a sample to decay (or the time taken for the activity/count rate to halve).",
            keywords: ["time for half the nuclei to decay", "time for count rate to halve"],
            unit: "s, mins, hours, years",
          },
          {
            term: "Background Radiation",
            definition: "Low-level ionizing radiation present all around us in the environment from natural sources (radon gas in rocks, cosmic rays, food/soil) and artificial sources (medical X-rays, nuclear testing).",
            keywords: ["radon gas, cosmic rays, rocks, medical sources"],
          },
        ],
        coreConcepts: [
          {
            heading: "Industrial & Medical Uses of Radioisotopes",
            body: "Matching radioisotope properties to their applications:",
            bullets: [
              "1. Smoke Detectors (Americium-241): Alpha emitter. Alpha particles ionize air in detector chamber, creating a small current. Smoke absorbs alpha particles, dropping current and triggering alarm. Long half-life needed so alarm lasts years.",
              "2. Paper / Metal Sheet Thickness Gauge: Beta emitter (Strontium-90). If paper is too thick, fewer beta particles penetrate to detector -> Rollers apply more pressure. Alpha would not penetrate at all; Gamma would pass through regardless.",
              "3. Medical Tracers (Technetium-99m): Gamma emitter with short half-life (6 hours). Emits penetrating gamma rays detected outside the body by gamma cameras; short half-life minimizes radiation dose to patient.",
              "4. Radiocarbon Dating (Carbon-14): Used to date organic archaeological remains up to 50,000 years old (half-life = 5730 years).",
            ],
          },
        ],
        examTips: [
          {
            title: "Step-by-Step Halving Method",
            content: "To find activity after n half-lives: 1 half-life = 1/2 (50%); 2 half-lives = 1/4 (25%); 3 half-lives = 1/8 (12.5%); 4 half-lives = 1/16 (6.25%). Number of half-lives = Total Elapsed Time / T_1/2.",
            type: "tip",
          },
        ],
        commonMisconceptions: [
          "Thinking a substance is completely safe after 2 half-lives (after 2 half-lives, 25% of the original radioactive nuclei still remain).",
        ],
      },
      {
        id: "5.4",
        title: "Nuclear Fission vs Nuclear Fusion",
        syllabusRef: "5.4 Nuclear Energy",
        summary: "Uranium-235 induced fission, chain reactions, control rods, and nuclear fusion in stars.",
        keyDefinitions: [
          {
            term: "Nuclear Fission",
            definition: "The splitting of a large, heavy unstable nucleus (such as Uranium-235) into two smaller daughter nuclei, releasing 2-3 neutrons and a large amount of energy.",
            keywords: ["splitting of heavy nucleus", "Uranium-235 + slow neutron", "releases neutrons and energy"],
          },
          {
            term: "Nuclear Fusion",
            definition: "The joining together of two light atomic nuclei (such as hydrogen isotopes) to form a heavier nucleus (helium), releasing massive energy.",
            keywords: ["joining of two light nuclei to form heavier nucleus", "requires extremely high temp and pressure", "powers the Sun"],
          },
        ],
        coreConcepts: [
          {
            heading: "Nuclear Fission Reactor Components",
            body: "How a controlled nuclear power plant operates safely:",
            bullets: [
              "Fuel Rods: Contain Uranium-235 or Plutonium-239 pellets.",
              "Moderator (Graphite or Heavy Water): Slows down fast fission neutrons to 'thermal' speeds so they can be captured by U-235 nuclei.",
              "Control Rods (Boron or Cadmium): Absorb excess neutrons to control or shut down the chain reaction (lowering rods slows down reaction).",
              "Shielding (Thick reinforced concrete & lead): Absorbs dangerous escaping gamma rays and neutrons to protect workers.",
            ],
          },
          {
            heading: "Why Nuclear Fusion is Challenging on Earth",
            body: "Positive nuclei strongly repel each other due to electrostatic repulsion. To overcome this Coulomb repulsion and force nuclei close enough for the strong nuclear force to bind them, fusion requires EXTREMELY HIGH TEMPERATURES (millions of degrees) and HIGH PRESSURES (to maintain particle collision frequency).",
          },
        ],
        examTips: [
          {
            title: "Fission vs Fusion Identification",
            content: "Remember: FISSION = FISSURE (Splitting apart heavy nucleus). FUSION = FUSING (Joining together light nuclei).",
            type: "tip",
          },
        ],
        commonMisconceptions: [
          "Confusing nuclear fission with radioactive decay (fission is induced by neutron absorption; spontaneous decay is natural and random).",
        ],
      },
    ],
  },

  {
    id: "unit-6",
    unitNumber: 6,
    title: "Space Physics",
    shortTitle: "Space Physics",
    iconName: "Compass",
    color: "from-rose-600 to-pink-600",
    description: "Earth and solar system dynamics, orbital speed calculations, stellar lifecycles, light-years, redshift, Hubble's law, and the Big Bang theory.",
    subTopics: [
      {
        id: "6.1",
        title: "The Earth & The Solar System",
        syllabusRef: "6.1 Solar System Mechanics",
        summary: "Day/night, seasons, orbital speed (v = 2πr / T), planets in order, rocky vs gas giant planets, asteroids and comets.",
        keyDefinitions: [
          {
            term: "Astronomical Day & Year",
            definition: "A Day is the time taken for Earth to rotate once on its axis (24 hours). A Year is the time taken for Earth to complete one full orbit around the Sun (365.25 days).",
            keywords: ["rotation on axis = 24h", "orbit around Sun = 1 year"],
          },
          {
            term: "Orbital Speed",
            definition: "The speed of a body orbiting in a circular path: v = (2 · π · r) / T, where r is orbital radius and T is orbital period.",
            keywords: ["v = 2πr / T", "circumference / time"],
            unit: "m/s or km/s",
          },
        ],
        coreConcepts: [
          {
            heading: "Planets in Order from the Sun",
            body: "Mnemonic: 'My Very Easy Method Just Speeds Up Naming'",
            bullets: [
              "Inner Rocky Planets (High density, solid surfaces): Mercury, Venus, Earth, Mars.",
              "Asteroid Belt: Band of rocky debris between Mars and Jupiter.",
              "Outer Gas Giants (Low density, mainly hydrogen & helium, ring systems): Jupiter, Saturn, Uranus, Neptune.",
              "Gravitational Pull Rule: Planets closer to the Sun experience stronger gravitational pull, move faster, and have shorter orbital periods.",
            ],
          },
          {
            heading: "Comets & Elliptical Orbits",
            body: "Comets have highly elongated elliptical orbits with the Sun at one focus. A comet travels fastest when closest to the Sun (perihelion) because gravitational potential energy is converted into kinetic energy. Its tail always points AWAY from the Sun due to solar wind.",
          },
        ],
        examTips: [
          {
            title: "Why Seasons Occur",
            content: "Seasons are caused by the TILT of the Earth's rotational axis (23.5°) relative to its orbital plane around the Sun, NOT by changing distance to the Sun!",
            type: "mark_scheme_keyword",
          },
        ],
        commonMisconceptions: [
          "Believing summer happens because Earth is closer to the Sun in summer (It is due to the hemisphere tilting towards the Sun, receiving more concentrated rays for longer hours).",
        ],
      },
      {
        id: "6.2",
        title: "Stars, Galaxies & The Universe",
        syllabusRef: "6.2 Stellar Evolution & Cosmology",
        summary: "Lifecycle of stars, nuclear fusion in the Sun, light-years, redshift, Hubble's law, Cosmic Microwave Background, and Big Bang evidence.",
        keyDefinitions: [
          {
            term: "Light-Year",
            definition: "The distance traveled by light through a vacuum in one Earth year (d = c × t = 3.0 × 10⁸ m/s × 3.15 × 10⁷ s ≈ 9.5 × 10¹⁵ m).",
            keywords: ["distance light travels in 1 year", "unit of distance, NOT time"],
            unit: "m",
          },
          {
            term: "Redshift (Doppler Effect in Light)",
            definition: "The increase in observed wavelength (shift towards red end of spectrum) of light from distant receding galaxies due to the expansion of space.",
            keywords: ["increase in wavelength", "receding galaxies", "evidence universe is expanding"],
          },
          {
            term: "Hubble's Law",
            definition: "The speed at which a distant galaxy is moving away from us (recession velocity v) is directly proportional to its distance d from Earth (v = H₀ · d).",
            keywords: ["v = H₀ · d", "recession speed proportional to distance"],
          },
        ],
        coreConcepts: [
          {
            heading: "Lifecycle of Stars",
            body: "Stellar evolution pathway depending on initial mass:",
            bullets: [
              "1. Nebula: Giant cloud of hydrogen gas and dust collapses under gravity.",
              "2. Protostar: Core becomes hot and dense enough for nuclear fusion to ignite.",
              "3. Main Sequence Star (e.g. our Sun): Stable state where inward gravitational collapse is balanced by outward radiation pressure from hydrogen fusion (lasts billions of years).",
              "Path A (Average Mass Star like Sun): Expands into Red Giant -> Sheds outer layers as Planetary Nebula -> Dense hot core remains as White Dwarf -> Cools to Black Dwarf.",
              "Path B (High Mass Star): Expands into Red Supergiant -> Explodes in violent Supernova (creating heavy elements) -> Collapses into Neutron Star or Black Hole (if extremely massive).",
            ],
          },
          {
            heading: "Two Key Evidences for the Big Bang Theory",
            body: "Why astronomers know the universe began in a massive expansion approx. 13.8 billion years ago:",
            bullets: [
              "1. Galactic Redshift: Light from almost all distant galaxies is redshifted, and further galaxies are moving away faster (v = H₀d), proving space is expanding uniformly in all directions.",
              "2. Cosmic Microwave Background Radiation (CMBR): Low-energy microwave radiation received uniformly from all directions in space, representing the cooled remnant radiation left over from the hot early Big Bang.",
            ],
          },
        ],
        examTips: [
          {
            title: "Age of Universe Calculation",
            content: "The approximate age of the universe can be estimated from the Hubble Constant: T ≈ d / v = 1 / H₀ ≈ 13.8 billion years.",
            type: "tip",
          },
        ],
        commonMisconceptions: [
          "Thinking a light-year is a unit of time (A light-year is a unit of DISTANCE, approx. 9.5 trillion kilometers).",
          "Thinking galaxies are moving through space (Space itself is expanding, carrying galaxies apart).",
        ],
      },
    ],
  },
];
