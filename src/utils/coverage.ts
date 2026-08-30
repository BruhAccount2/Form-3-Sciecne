import { Chapter, LearningStandardCoverage } from '../types';

export interface DerivedStandardStatus extends LearningStandardCoverage {
  hasNotes: boolean;
  hasExercise: boolean;
  hasAnswer: boolean;
  isFullyCovered: boolean;
}

export interface CoverageResult {
  totalStandards: number;
  coveredStandards: number;
  coveragePercentage: number;
  standardsWithStatus: DerivedStandardStatus[];
}

export function computeChapterKSSMCoverage(chapter: Chapter): CoverageResult {
  const standards = chapter.learningStandards || [];
  const totalStandards = standards.length;

  if (totalStandards === 0) {
    return {
      totalStandards: 0,
      coveredStandards: 0,
      coveragePercentage: 0,
      standardsWithStatus: []
    };
  }

  const standardsWithStatus: DerivedStandardStatus[] = standards.map(std => {
    // 1. Genuine linked note check
    // A standard is considered to have note coverage if:
    // - std.notesRef matches a note title/content, OR
    // - Any note in chapter.notes matches the standard code or its major subsection (e.g. "1.1" for "1.1.2") or mentions the code
    const sectionPrefix = std.code.split('.').slice(0, 2).join('.');
    const hasNotes = Boolean(
      chapter.notes &&
      chapter.notes.some(note => {
        if (std.notesRef && (note.title.includes(std.notesRef) || note.content.includes(std.notesRef))) {
          return true;
        }
        return (
          note.title.startsWith(sectionPrefix) ||
          note.title.includes(sectionPrefix) ||
          note.title.includes(std.code) ||
          note.content.includes(std.code)
        );
      })
    );

    // 2. Matching exercise check:
    // At least one exercise in the chapter has exercise.learningStandardCode === std.code
    // or std.exerciseIds contains the exercise ID
    const alignedExercises = (chapter.exercises || []).filter(ex =>
      ex.learningStandardCode === std.code ||
      (std.exerciseIds && std.exerciseIds.includes(ex.id))
    );
    const hasExercise = alignedExercises.length > 0;

    // 3. Answer check: matched exercise has non-empty finalAnswer
    const hasAnswer = hasExercise && alignedExercises.some(
      ex => Boolean(ex.answer && typeof ex.answer.finalAnswer === 'string' && ex.answer.finalAnswer.trim().length > 0)
    );

    // Canonical rule: Covered = valid linked note AND matching exercise AND non-empty final answer
    // Never fall back to manually authored boolean flags
    const isFullyCovered = Boolean(hasNotes && hasExercise && hasAnswer);

    return {
      ...std,
      notesCoverage: hasNotes,
      exerciseCoverage: hasExercise,
      answerCoverage: hasAnswer,
      hasNotes,
      hasExercise,
      hasAnswer,
      isFullyCovered
    };
  });

  const coveredStandards = standardsWithStatus.filter(s => s.isFullyCovered).length;
  const coveragePercentage = totalStandards > 0 
    ? Math.round((coveredStandards / totalStandards) * 100) 
    : 0;

  return {
    totalStandards,
    coveredStandards,
    coveragePercentage,
    standardsWithStatus
  };
}

export function computeSubjectKSSMCoverage(chapters: Chapter[]): {
  totalStandards: number;
  coveredStandards: number;
  coveragePercentage: number;
} {
  let totalStandards = 0;
  let coveredStandards = 0;

  chapters.forEach(ch => {
    const res = computeChapterKSSMCoverage(ch);
    totalStandards += res.totalStandards;
    coveredStandards += res.coveredStandards;
  });

  const coveragePercentage = totalStandards > 0 
    ? Math.round((coveredStandards / totalStandards) * 100) 
    : 0;

  return {
    totalStandards,
    coveredStandards,
    coveragePercentage
  };
}

