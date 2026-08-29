export type SubjectType = 'science' | 'math';

export type MainChapterSection = 'learn' | 'practise' | 'check';
export type ChapterTab = 'notes' | 'exercises' | 'answers' | 'mindmap' | 'experiment' | 'simulation' | 'simulations' | 'techniques' | 'audit' | 'learn' | 'practise' | 'check';
export type TabType = ChapterTab;

export type AppView = 
  | 'home'
  | 'subject'
  | 'chapter'
  | 'glossary'
  | 'past_papers'
  | 'formula_sheet'
  | 'bookmarks'
  | 'progress'
  | 'quick_revision'
  | 'daily_revision'
  | 'random_practice'
  | 'exam_mode'
  | 'weak_areas'
  | 'audit'
  | 'print_notes';

export type Difficulty = 'Basic' | 'Intermediate' | 'Application' | 'HOTS' | 'Challenging' | 'Recall' | 'Understanding' | 'Easy' | 'Medium' | 'Hard' | 'Mixed';

export type MasteryStatus = 'mastered' | 'practising' | 'needs_revision' | 'unattempted';

// --- PERSONAL NOTES ---
export interface PersonalNote {
  id: string;
  targetId: string;
  targetType: 'chapter' | 'standard' | 'note' | 'exercise';
  targetTitle: string;
  content: string;
  updatedAt: number;
}

// --- GLOSSARY TYPES ---
export interface GlossaryTerm {
  id: string;
  term: string;
  simpleDefinition: string;
  detailedExplanation: string;
  formula?: string;
  subject: SubjectType;
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  example: string;
  category?: string;
  relatedTerms?: string[];
}

// --- PAST PAPERS TYPES ---
export type PastPaperExamType = 'MRSM' | 'School' | 'District' | 'State' | 'Other';
export type PastPaperDifficulty = 'Easy' | 'Medium' | 'Hard' | 'Mixed';

export interface PastPaperQuestion {
  number: number;
  section: 'Section A' | 'Section B' | 'Section C';
  question: string;
  options?: string[];
  marks: number;
  topic: string;
  chapterId: string;
  diagramSvg?: string;
  answer: {
    finalAnswer: string;
    markingScheme: string[];
    explanation?: string;
  };
}

export interface PastPaper {
  id: string;
  title: string;
  year: number;
  subject: SubjectType;
  examType: PastPaperExamType;
  paperSet: string;
  source: string;
  sourceTypeDescription: string; // e.g. "MRSM Standardized Assessment", "Trial SPM/PT3 Preparatory Paper"
  difficulty: PastPaperDifficulty;
  chaptersTested: string[];
  durationMinutes: number;
  totalMarks: number;
  questionsCount: number;
  officialOrPublicNote?: string;
  externalLink?: string;
  sections: {
    name: string;
    description: string;
    totalMarks: number;
    questions: PastPaperQuestion[];
  }[];
}

// --- FORMULA SHEET TYPES ---
export interface FormulaVariable {
  symbol: string;
  meaning: string;
  unit?: string;
}

export interface FormulaItem {
  id: string;
  title: string;
  subject: SubjectType;
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  formula: string;
  formulaInWords?: string;
  meaningOfSymbols: FormulaVariable[];
  units: string[];
  example: {
    question: string;
    given: string;
    stepByStepCalculation: string[];
    finalAnswerWithUnit: string;
  };
  notes?: string;
}

// --- QUICK REVISION & DAILY REVISION TYPES ---
export interface RapidFireQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface QuickRevisionData {
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  subject: SubjectType;
  targetDurationMinutes: number; // e.g. 5-10 mins
  keyDefinitions: { term: string; definition: string }[];
  keyFacts: string[];
  formulae: string[];
  importantPoints: string[];
  commonMistakes: {
    mistake: string;
    correction: string;
    why: string;
  }[];
  rapidFireQuestions: RapidFireQuestion[];
}

// --- BOOKMARKS & HISTORY & WEAK AREAS ---
export type BookmarkType = 'chapter' | 'note' | 'exercise' | 'glossary' | 'past_paper' | 'formula';

export interface BookmarkItem {
  id: string;
  type: BookmarkType;
  title: string;
  subtitle: string;
  subject: SubjectType;
  targetId: string;
  chapterId?: string;
  tab?: ChapterTab;
  dateAdded: number;
}

export interface RevisionHistoryItem {
  timestamp: number;
  type: 'chapter' | 'note' | 'exercise' | 'glossary' | 'past_paper' | 'formula' | 'quick_revision' | 'exam' | 'daily_revision' | 'random_practice';
  subject: SubjectType;
  title: string;
  subtitle: string;
  chapterId?: string;
  targetId?: string;
  tab?: ChapterTab;
}

export interface WeakAreaRecord {
  chapterId: string;
  subject: SubjectType;
  chapterTitle: string;
  chapterNumber: number;
  wrongCount: number;
  totalAttempted: number;
  missedTopics: string[];
  lastWrongTimestamp: number;
  priority: 'high' | 'medium' | 'low';
}

// --- EXAM MODE & PRACTICE TYPES ---
export interface ExamConfig {
  subject: SubjectType | 'both';
  questionCount: number;
  timeLimitMinutes: number;
  difficulty: PastPaperDifficulty;
}

export interface ExamQuestionItem {
  id: string;
  subject: SubjectType;
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  marks: number;
  difficulty: Difficulty;
  diagramSvg?: string;
}

export interface ExamSubmission {
  id: string;
  timestamp: number;
  subject: SubjectType | 'both';
  totalQuestions: number;
  score: number;
  percentage: number;
  timeSpentSeconds: number;
  timeLimitSeconds: number;
  answers: {
    questionId: string;
    selectedOptionIndex: number | null;
    isCorrect: boolean;
    timeSpentSeconds?: number;
  }[];
  weakChapterIds: string[];
  weakTopics: string[];
}

export interface LearningStandardCoverage {
  code: string; // e.g. "1.1.1", "1.2.3", "6.3.1"
  standard: string; // Learning standard title / outcome
  parentChapterId?: string;
  notesCoverage: boolean;
  exerciseCoverage: boolean;
  answerCoverage: boolean;
  notesRef?: string;
  exerciseIds?: string[];
  answerIds?: string[];
  interactiveRef?: string;
  masteryStatus?: MasteryStatus;
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
  chapterId?: string;
  question: string;
  hints?: string[];
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

