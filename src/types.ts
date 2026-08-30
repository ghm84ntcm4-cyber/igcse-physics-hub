export interface Formula {
  id: string;
  name: string;
  equation: string;
  topicId: string;
  variables: {
    symbol: string;
    name: string;
    unit: string;
    description?: string;
  }[];
  triangle?: [string, string, string]; // [top, bottomLeft, bottomRight]
  notes?: string;
  calculate?: (inputs: Record<string, number>) => { resultName: string; value: number; unit: string };
}

export interface ExamTip {
  title: string;
  content: string;
  type: "warning" | "tip" | "mark_scheme_keyword" | "examiner_trap";
}

export interface Definition {
  term: string;
  definition: string;
  keywords: string[];
  unit?: string;
}

export interface WorkedExample {
  id?: string;
  title: string;
  difficulty?: "Core" | "Extended" | "Challenging";
  question: string;
  givenData: string[];
  formulaUsed: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  examinerNote?: string;
}

export interface PracticeProblem {
  id: string;
  topicId: string;
  title: string;
  difficulty: "Core" | "Extended" | "Challenging";
  question: string;
  marks?: number;
  givenData: string[];
  formulaUsed: string;
  hints?: string[];
  stepByStepSolution: string[];
  finalAnswer: string;
  examinerTips?: string;
}

export interface RealWorldApplication {
  title: string;
  description: string;
  impact: string;
  technology: string;
}

export interface ConceptCheck {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LabInvestigation {
  title: string;
  objective: string;
  apparatus: string[];
  variables: {
    independent: string;
    dependent: string;
    controlled: string[];
  };
  procedure: string[];
  keyObservation: string;
  safetyPrecautions: string[];
}

export interface SubTopic {
  id: string;
  title: string;
  syllabusRef: string;
  summary: string;
  learningObjectives?: string[];
  keyDefinitions: Definition[];
  coreConcepts: {
    heading: string;
    body: string;
    bullets?: string[];
    formulaIds?: string[];
    diagramType?: "graph" | "ray" | "circuit" | "wave" | "atom" | "forces" | "thermal";
    diagramData?: any;
  }[];
  workedExamples?: WorkedExample[];
  realWorldApplications?: RealWorldApplication[];
  conceptChecks?: ConceptCheck[];
  labInvestigation?: LabInvestigation;
  examTips: ExamTip[];
  commonMisconceptions: string[];
  paper6Notes?: string[];
  summaryChecklist?: string[];
}

export interface Topic {
  id: string;
  unitNumber: number;
  title: string;
  shortTitle: string;
  iconName: string;
  color: string;
  description: string;
  subTopics: SubTopic[];
}

export interface Question {
  id: string;
  topicId: string;
  subTopicId?: string;
  paperType: "Paper 2 (MCQ)" | "Paper 4 (Extended)" | "Paper 6 (Practical)";
  difficulty: "Core" | "Extended" | "Challenging";
  questionText: string;
  diagramSvg?: string;
  options?: string[]; // For MCQ
  correctAnswer: string; // Option letter or expected numeric/text value
  marks: number;
  markScheme: string[];
  examinerExplanation: string;
  formulaUsed?: string;
  yearSession?: string;
  paperCode?: string;
}

export interface PastPaperExam {
  id: string;
  paperCode: string;
  title: string;
  session: string;
  year: number;
  paperType: "Paper 2 (MCQ)" | "Paper 4 (Extended)" | "Paper 6 (Practical)";
  durationMinutes: number;
  totalMarks: number;
  gradeThresholds: {
    grade9: number; // 9 / A**
    grade8: number; // 8 / A*
    grade7: number; // 7 / A
    grade6: number; // 6 / B
    grade5: number; // 5 / C
    grade4: number; // 4 / D
  };
  questionIds: string[];
  instructions: string[];
}

export interface Flashcard {
  id: string;
  topicId: string;
  front: string;
  back: string;
  category: "Definition" | "Formula" | "Unit" | "Experiment / Paper 6" | "Law";
  hint?: string;
}

export interface PracticalExperiment {
  id: string;
  title: string;
  topic: string;
  apparatus: string[];
  method: string[];
  diagramDescription?: string;
  keyVariables: {
    independent: string;
    dependent: string;
    controlled: string[];
  };
  sourcesOfError: string[];
  improvements: string[];
  safetyPrecautions: string[];
  graphGuidance: string;
}
