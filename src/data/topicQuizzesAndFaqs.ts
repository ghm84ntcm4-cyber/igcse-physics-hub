export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const TOPIC_QUIZZES: Record<string, QuizQuestion[]> = {
  "1.1": [
    {
      question: "A car travels 100 m in 20 seconds. What is its speed?",
      options: ["2 m/s", "5 m/s", "20 m/s", "2000 m/s"],
      correctIndex: 1,
      explanation: "Speed = distance ÷ time = 100 ÷ 20 = 5 m/s.",
    },
    {
      question: "Which quantity includes direction?",
      options: ["Speed", "Distance", "Velocity", "Time"],
      correctIndex: 2,
      explanation: "Velocity is speed with a stated direction — that's what makes it a vector quantity, unlike speed which is a scalar.",
    },
    {
      question: "An object moving in a circle at constant speed is:",
      options: [
        "Not accelerating",
        "Accelerating, because direction is changing",
        "Only accelerating if it speeds up",
        "Impossible to determine",
      ],
      correctIndex: 1,
      explanation: "Acceleration is the rate of change of velocity (a vector). Since direction is constantly changing in circular motion, velocity changes and therefore the object is accelerating even at constant speed.",
    },
    {
      question: "On a velocity-time graph, a horizontal (flat) line means:",
      options: [
        "The object has stopped",
        "The object is at constant velocity",
        "The object is accelerating",
        "There is no data",
      ],
      correctIndex: 1,
      explanation: "A flat line on a velocity-time graph means constant velocity (zero acceleration) — this is the opposite of a distance-time graph, where a flat line means stopped (stationary).",
    },
    {
      question: "What does the area under a velocity-time graph represent?",
      options: ["Acceleration", "Speed", "Distance travelled", "Force"],
      correctIndex: 2,
      explanation: "The area under a velocity-time graph gives the total distance travelled (displacement) during that time period.",
    },
  ],
  "1.2": [
    {
      question: "What does the gradient of a distance-time graph represent?",
      options: ["Acceleration", "Speed / Velocity", "Distance", "Total Time"],
      correctIndex: 1,
      explanation: "Gradient = Δy / Δx = distance ÷ time = speed.",
    },
    {
      question: "What does a negative gradient on a velocity-time graph represent?",
      options: ["Deceleration (negative acceleration)", "Negative distance", "Constant speed", "Stationary state"],
      correctIndex: 0,
      explanation: "A downward sloping line (negative gradient) on a v-t graph indicates decreasing velocity, which is deceleration.",
    },
    {
      question: "When a skydiver reaches terminal velocity, what is the resultant force acting on them?",
      options: ["Equal to weight", "Zero (balanced forces)", "Equal to air resistance only", "Infinite"],
      correctIndex: 1,
      explanation: "At terminal velocity, air resistance equals weight (downwards), so resultant force is zero and acceleration is 0 m/s².",
    },
  ],
  "1.3": [
    {
      question: "According to Newton's Second Law, which formula connects force, mass and acceleration?",
      options: ["F = m / a", "F = m × a", "F = a / m", "F = m + a"],
      correctIndex: 1,
      explanation: "Newton's Second Law states that Resultant Force (N) = mass (kg) × acceleration (m/s²).",
    },
    {
      question: "Newton's Third Law states that every action has an equal and opposite reaction. These two forces act on:",
      options: ["The same single body", "Two different bodies", "Only moving objects", "Only charged objects"],
      correctIndex: 1,
      explanation: "Action-reaction pairs always act on two different interacting objects simultaneously and are of the exact same type.",
    },
  ],
};

export const TOPIC_FAQS: Record<string, FAQItem[]> = {
  "1.1": [
    {
      q: "What's the actual difference between speed and velocity in an exam answer?",
      a: "Speed is just a number (a scalar magnitude) — it tells you how fast something moves. Velocity is speed plus a direction (a vector). In an exam, if the question mentions or implies direction (e.g. 'moving north', or a graph with positive/negative values), you should use the word 'velocity' in your answer, not 'speed'.",
    },
    {
      q: "Why is the average velocity zero if I return to my starting point, even though I was moving the whole time?",
      a: "Velocity depends on displacement, not distance. Displacement measures how far you ended up from your starting point in a straight line. If you return to exactly where you started, your displacement is zero — so no matter how far you actually travelled, your average velocity for the whole trip is zero.",
    },
    {
      q: "Can acceleration be negative? What does that mean?",
      a: "Yes. Negative acceleration usually means an object is slowing down (decelerating) in the direction you've defined as positive. It doesn't mean there's an error in your calculation — just check the sign makes sense for the situation described in the question.",
    },
    {
      q: "Do I need to memorise the formula, or will it be given in the exam?",
      a: "Check your specific exam board's formula sheet — some formulas are provided, others aren't. It's safest to memorise the core ones (speed = d/t, velocity = s/t, acceleration = (v-u)/t, F=ma) since exam boards can change what's included on the sheet from year to year.",
    },
    {
      q: "How do I know whether to use distance or displacement in a calculation?",
      a: "If the question is about speed, use total distance travelled. If the question is about velocity, use displacement (the straight-line distance from start to finish, in a stated direction). Reading which word the question uses is usually your biggest clue.",
    },
  ],
  "1.2": [
    {
      q: "How do I find the distance travelled on a curved velocity-time graph?",
      a: "Count the total squares under the curve. Calculate the area represented by one single square (base time × height velocity), then multiply by the total number of squares.",
    },
    {
      q: "What is the difference between a horizontal line on a d-t graph vs a v-t graph?",
      a: "On a distance-time graph, a horizontal line means the object is stationary (distance is not changing). On a velocity-time graph, a horizontal line means the object is moving at constant velocity.",
    },
  ],
  "1.3": [
    {
      q: "What is inertia and how does it relate to mass?",
      a: "Inertia is the resistance of an object to any change in its velocity. The larger the mass of an object, the greater its inertia, meaning a greater resultant force is required to change its motion.",
    },
    {
      q: "Why do astronauts feel weightless in orbit even though gravity is still acting on them?",
      a: "The spacecraft and astronauts are in continuous freefall towards the Earth at the same rate. Since there is no contact/normal force pushing up on them from the floor, they experience apparent weightlessness.",
    },
  ],
};
