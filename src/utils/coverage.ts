import { Chapter, LearningStandardCoverage } from '../types';

export interface CoverageResult {
  totalStandards: number;
  coveredStandards: number;
  coveragePercentage: number;
  standardsWithStatus: (LearningStandardCoverage & { isFullyCovered: boolean })[];
}

export function computeChapterKSSMCoverage(chapter: Chapter): CoverageResult {
  const standards = chapter.learningStandards || [];
  const totalStandards = standards.length;

  if (totalStandards === 0) {
    return {
      totalStandards: 0,
      coveredStandards: 0,
      coveragePercentage: 100,
      standardsWithStatus: []
    };
  }

  const standardsWithStatus = standards.map(std => {
    const hasNotes = std.notesCoverage === true;
    
    // Check aligned exercise
    const alignedExercises = chapter.exercises.filter(ex => 
      ex.learningStandardCode === std.code || 
      (std.exerciseIds && std.exerciseIds.includes(ex.id))
    );
    
    // A standard has exercise coverage if there is at least one verified aligned exercise
    const hasExercise = (alignedExercises.length > 0 || (chapter.exercises.length > 0 && std.exerciseCoverage === true));
    
    // A standard has answer coverage if the exercise has step-by-step working and final answer
    const hasAnswer = (alignedExercises.length > 0 
      ? alignedExercises.some(ex => !!ex.answer && !!ex.answer.finalAnswer)
      : std.answerCoverage === true);

    const isFullyCovered = Boolean(hasNotes && hasExercise && hasAnswer);

    return {
      ...std,
      isFullyCovered
    };
  });

  const coveredStandards = standardsWithStatus.filter(s => s.isFullyCovered).length;
  const coveragePercentage = Math.round((coveredStandards / totalStandards) * 100);

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
    : 100;

  return {
    totalStandards,
    coveredStandards,
    coveragePercentage
  };
}
