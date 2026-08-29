export type SubjectType = 'science' | 'math';

export type ChapterTab = 'notes' | 'exercises' | 'answers' | 'mindmap' | 'experiment' | 'simulation' | 'simulations' | 'techniques' | 'audit';
export type TabType = ChapterTab;

export type Difficulty = 'Basic' | 'Intermediate' | 'Application' | 'HOTS' | 'Challenging' | 'Recall' | 'Understanding';

export interface LearningStandardCoverage {
  code: string; // e.g. "1.1.1", "1.2.3", "6.3.1"
  standard: string; // Learning standard title / outcome
  notesCoverage: boolean;
  exerciseCoverage: boolean;
  answerCoverage: boolean;
  notesRef?: string;
  exerciseIds?: string[];
}

export interface DiagramLabel {
  id: string;
  name: string;
  description: string;
  x?: number; // Percentage or coordinate
  y?: number;
  color?: string;
}

export interface InteractiveElement {
  id: string;
  type: 'reveal' | 'quiz' | 'calculator' | 'diagram' | 'stepper' | 'flashcard' | 'simulation' | 'image';
  title: string;
  description?: string;
  prompt?: string;
  revealedContent?: string;
  options?: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  steps?: {
    title: string;
    detail: string;
    formula?: string;
  }[];
  calculatorConfig?: {
    inputs: { name: string; label: string; unit: string; defaultValue: number; step?: number }[];
    calculate: (inputs: Record<string, number>) => { result: string | number; steps: string[] };
  };
  diagramData?: {
    svgContent?: string;
    caption?: string;
    labels?: DiagramLabel[];
    interactiveType?: 'hotspots' | 'layers' | 'comparison';
  };
  simulationData?: {
    simulationType?: string;
    controls?: { label: string; min: number; max: number; step: number; defaultValue: number }[];
    summary?: string;
    keyPoints?: string[];
  };
  imageData?: {
    url?: string;
    svgContent?: string;
    alt?: string;
    caption?: string;
    details?: string;
  };
}

export interface KeyFormulaVariable {
  term?: string;
  symbolOrTerm?: string;
  explanation?: string;
  meaning?: string;
  unit?: string;
}

export interface KeyFormula {
  name: string;
  formulaInWords: string; // Descriptive formula in plain words without cryptic symbols
  howToUse?: string[];    // Step-by-step instructions in numbered format 1. 2.
  variablesExplained?: KeyFormulaVariable[];
  wordExample?: string;   // Worked example in plain words and numbers
  formula?: string;       // Fallback or symbolic representation
  note?: string;
}

export interface NoteSection {
  title: string;
  content: string; // Markdown or HTML supported with bold red highlights
  tables?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  }[];
  keyFormulas?: KeyFormula[];
  definitions?: { term: string; definition: string }[];
  interactiveElements?: InteractiveElement[];
}

export interface Exercise {
  id: string;
  number: number;
  difficulty: Difficulty;
  question: string;
  subQuestions?: {
    label: string;
    question: string;
    marks: number;
  }[];
  marks: number;
  diagramSvg?: string;
  diagramDescription?: string;
  learningStandardCode?: string;
  answer: {
    finalAnswer: string;
    fullWorking: string[];
    scientificReasoning?: string;
    commonMistakeWarning?: string;
  };
}

export interface MindmapNode {
  id: string;
  title: string;
  subtitle?: string;
  highlight?: boolean;
  children?: MindmapNode[];
}

export interface Experiment {
  id?: string;
  title: string;
  aim: string;
  hypothesis: string;
  variables: {
    manipulated: string;
    responding: string;
    constant: string;
  };
  apparatus?: string[];
  apparatusMaterials?: string[];
  procedure: string[];
  observations?: {
    headers: string[];
    rows: string[][];
  };
  observationTable?: {
    headers: string[];
    rows: string[][];
  };
  resultsAndAnalysis?: string;
  conclusion: string;
  precautions?: string[];
  safetyPrecautions?: string[];
  commonMistakes?: string[];
}

export interface AnsweringTechnique {
  category: string;
  title: string;
  keyQuestionTypes: string[];
  essentialKeywords: string[];
  stepByStepStrategy: string[];
  commonErrorsToAvoid: string[];
  markSchemeInsights?: string[];
  educationalReferences?: {
    title: string;
    type: 'Interactive Guide' | 'Study Guide' | 'Exam Paper Technique';
    urlPlaceholder?: string;
  }[];
}

export interface Chapter {
  id: string;
  subject: SubjectType;
  chapterNumber: number;
  title: string;
  theme: string;
  summary: string;
  learningStandards?: LearningStandardCoverage[];
  notes: NoteSection[];
  exercises: Exercise[];
  mindmap: MindmapNode;
  experiment?: Experiment;
  experiments?: Experiment[];
  answeringTechniques: AnsweringTechnique[];
}

