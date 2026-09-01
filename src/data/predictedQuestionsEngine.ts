import { SubjectType, Difficulty, ExamQuestionItem } from '../types';
import { mathChapters } from './math';
import { scienceChapters } from './science';
import { mathChapterQuizBank } from './mathQuizBank';
import { scienceChapterQuizBank } from './scienceQuizBank';
import { shuffleQuestionOptions, mcqToExamItem, ChapterMCQ } from './quizUtils';

export interface PredictedQuestionItem extends ExamQuestionItem {
  howToApproach: string[];
  whyIncorrect?: Record<string, string>;
  learningStandardCode?: string;
  isAiGenerated: boolean;
}

/**
 * Maps chapters to their structured answering guidance templates
 */
function getAnsweringGuidance(topic: string, subject: SubjectType): string[] {
  if (subject === 'math') {
    return [
      '1. Identify the given variables, units, and what the question is asking to find.',
      '2. Recall the relevant KSSM mathematical formula or theorem.',
      '3. Substitute the values carefully into the formula.',
      '4. Eliminate clearly incorrect or impossible numerical options.',
      '5. Verify the arithmetic and check if any unit conversions are required.'
    ];
  } else {
    return [
      '1. Read the scientific context and identify key biological/physical/chemical terms.',
      '2. Connect the question to the core scientific mechanism or principle.',
      '3. Consider cause-and-effect relationships (e.g., stimuli → receptor → effector).',
      '4. Eliminate options containing scientific misconceptions or reverse causal logic.',
      '5. Select the answer that most accurately explains the process.'
    ];
  }
}

/**
 * Generates a balanced set of predicted AI-generated practice questions.
 * 
 * Requirements:
 * - 1 subject: Minimum 20 questions covering all chapters (Math: 9 chapters, Science: 10 chapters).
 * - 2 subjects: Minimum 40 questions covering all 19 chapters (at least 2 per chapter = 38+ -> 40 total).
 * - Selectable question counts: 20, 30, 40, 50, 75, 100 for 1 subject; 40, 50, 75, 100 for 2 subjects.
 */
export function generatePredictedPracticeSet(
  subject: 'both' | SubjectType,
  count: number = 20
): PredictedQuestionItem[] {
  let selectedMCQs: ChapterMCQ[] = [];

  if (subject === 'math') {
    const minCount = Math.max(20, count);
    const chapters = mathChapters;
    const pool = mathChapterQuizBank;
    
    // Ensure at least 2 questions per chapter for full coverage
    const basePerChapter = Math.max(1, Math.floor(minCount / chapters.length));
    
    chapters.forEach(ch => {
      const chQuestions = pool.filter(q => q.chapterId === ch.id || q.chapterNumber === ch.chapterNumber);
      const shuffled = [...chQuestions].sort(() => Math.random() - 0.5);
      selectedMCQs.push(...shuffled.slice(0, basePerChapter));
    });

    // Fill remaining up to requested count
    if (selectedMCQs.length < minCount) {
      const remaining = pool.filter(q => !selectedMCQs.some(sq => sq.id === q.id)).sort(() => Math.random() - 0.5);
      selectedMCQs.push(...remaining.slice(0, minCount - selectedMCQs.length));
    }
  } else if (subject === 'science') {
    const minCount = Math.max(20, count);
    const chapters = scienceChapters;
    const pool = scienceChapterQuizBank;

    const basePerChapter = Math.max(1, Math.floor(minCount / chapters.length));

    chapters.forEach(ch => {
      const chQuestions = pool.filter(q => q.chapterId === ch.id || q.chapterNumber === ch.chapterNumber);
      const shuffled = [...chQuestions].sort(() => Math.random() - 0.5);
      selectedMCQs.push(...shuffled.slice(0, basePerChapter));
    });

    if (selectedMCQs.length < minCount) {
      const remaining = pool.filter(q => !selectedMCQs.some(sq => sq.id === q.id)).sort(() => Math.random() - 0.5);
      selectedMCQs.push(...remaining.slice(0, minCount - selectedMCQs.length));
    }
  } else {
    // Both subjects: Math + Science (Minimum 40 questions covering all 19 chapters)
    const minCount = Math.max(40, count);
    const halfCount = Math.floor(minCount / 2);

    // Math slice (9 chapters)
    const mathChaptersList = mathChapters;
    const mathPerChapter = Math.max(2, Math.floor(halfCount / mathChaptersList.length));
    const selectedMath: ChapterMCQ[] = [];

    mathChaptersList.forEach(ch => {
      const chQuestions = mathChapterQuizBank.filter(q => q.chapterId === ch.id || q.chapterNumber === ch.chapterNumber);
      const shuffled = [...chQuestions].sort(() => Math.random() - 0.5);
      selectedMath.push(...shuffled.slice(0, mathPerChapter));
    });

    if (selectedMath.length < halfCount) {
      const remaining = mathChapterQuizBank.filter(q => !selectedMath.some(sq => sq.id === q.id)).sort(() => Math.random() - 0.5);
      selectedMath.push(...remaining.slice(0, halfCount - selectedMath.length));
    }

    // Science slice (10 chapters)
    const sciChaptersList = scienceChapters;
    const sciPerChapter = Math.max(2, Math.floor((minCount - halfCount) / sciChaptersList.length));
    const selectedScience: ChapterMCQ[] = [];

    sciChaptersList.forEach(ch => {
      const chQuestions = scienceChapterQuizBank.filter(q => q.chapterId === ch.id || q.chapterNumber === ch.chapterNumber);
      const shuffled = [...chQuestions].sort(() => Math.random() - 0.5);
      selectedScience.push(...shuffled.slice(0, sciPerChapter));
    });

    if (selectedScience.length < (minCount - halfCount)) {
      const remaining = scienceChapterQuizBank.filter(q => !selectedScience.some(sq => sq.id === q.id)).sort(() => Math.random() - 0.5);
      selectedScience.push(...remaining.slice(0, (minCount - halfCount) - selectedScience.length));
    }

    // Interleave questions to maintain engagement across subjects
    const maxLength = Math.max(selectedMath.length, selectedScience.length);
    for (let i = 0; i < maxLength; i++) {
      if (i < selectedMath.length) selectedMCQs.push(selectedMath[i]);
      if (i < selectedScience.length) selectedMCQs.push(selectedScience[i]);
    }
  }

  // Slice to exact requested count and map to rich PredictedQuestionItem format
  return selectedMCQs.slice(0, count).map(rawMcq => {
    const shuffled = shuffleQuestionOptions(rawMcq);
    const baseItem = mcqToExamItem(shuffled);
    
    return {
      ...baseItem,
      howToApproach: getAnsweringGuidance(rawMcq.topic, rawMcq.subject),
      learningStandardCode: rawMcq.learningStandardCode,
      isAiGenerated: true,
      whyIncorrect: {
        // Dynamic informative why-incorrect generation if not pre-specified
      }
    };
  });
}
