import { SubjectType, Difficulty, ExamQuestionItem } from '../types';
import { mathChapterQuizBank } from './mathQuizBank';
import { scienceChapterQuizBank } from './scienceQuizBank';
import { sejarahChapterQuizBank } from './sejarahQuizBank';

export interface ChapterMCQ {
  id: string;
  chapterId: string;
  chapterNumber: number;
  subject: SubjectType;
  learningStandardCode: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  diagramSvg?: string;
}

/**
 * All authored MCQs across all 27 chapters (135 Math + 150 Science + 120 Sejarah = 405 total)
 */
export const allChapterQuizQuestions: ChapterMCQ[] = [
  ...mathChapterQuizBank,
  ...scienceChapterQuizBank,
  ...sejarahChapterQuizBank
];

/**
 * Utility to shuffle question options and accurately update correctIndex
 * Ensures unbiased option distribution (Option A is not disproportionately correct)
 */
export function shuffleQuestionOptions<T extends { options: string[]; correctIndex: number }>(q: T): T {
  const originalCorrect = q.options[q.correctIndex];
  const shuffled = [...q.options];
  
  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  const newIndex = shuffled.indexOf(originalCorrect);
  return {
    ...q,
    options: shuffled,
    correctIndex: newIndex >= 0 ? newIndex : 0
  };
}

export function normalizeChapterId(id: string): string {
  if (!id) return '';
  const trimmed = id.trim().toLowerCase();
  if (trimmed.startsWith('sci-ch')) return trimmed.replace('sci-ch', 'science-ch');
  if (trimmed.startsWith('science-') && !trimmed.startsWith('science-ch')) {
    return trimmed.replace('science-', 'science-ch');
  }
  if (trimmed.startsWith('math-') && !trimmed.startsWith('math-ch')) {
    return trimmed.replace('math-', 'math-ch');
  }
  if (trimmed.startsWith('sej-ch')) return trimmed.replace('sej-ch', 'sejarah-ch');
  if (trimmed.startsWith('sejarah-') && !trimmed.startsWith('sejarah-ch')) {
    return trimmed.replace('sejarah-', 'sejarah-ch');
  }
  return trimmed;
}

/**
 * Get the 15-question chapter quiz for a given chapter:
 * Exactly 5 Easy, 5 Medium, and 5 Hard questions, with order and options shuffled.
 */
export function getChapterQuizQuestions(chapterId: string): ChapterMCQ[] {
  const normId = normalizeChapterId(chapterId);
  const chapterQuestions = allChapterQuizQuestions.filter(
    q => q.chapterId === chapterId || normalizeChapterId(q.chapterId) === normId
  );
  
  const easy = chapterQuestions.filter(q => q.difficulty === 'Easy');
  const medium = chapterQuestions.filter(q => q.difficulty === 'Medium');
  const hard = chapterQuestions.filter(q => q.difficulty === 'Hard');

  const selected: ChapterMCQ[] = [
    ...easy.slice(0, 5),
    ...medium.slice(0, 5),
    ...hard.slice(0, 5)
  ];

  // If there are any missing tier questions, fallback to remaining
  if (selected.length < 15) {
    const remaining = chapterQuestions.filter(q => !selected.includes(q));
    selected.push(...remaining.slice(0, 15 - selected.length));
  }

  // Shuffle question order so difficulty is varied across the 15 items
  const shuffledQuestions = [...selected].sort(() => Math.random() - 0.5);

  // Return with shuffled options
  return shuffledQuestions.map(q => shuffleQuestionOptions(q));
}

/**
 * Convert ChapterMCQ to ExamQuestionItem format
 */
export function mcqToExamItem(mcq: ChapterMCQ): ExamQuestionItem {
  return {
    id: mcq.id,
    subject: mcq.subject,
    chapterId: mcq.chapterId,
    chapterNumber: mcq.chapterNumber,
    chapterTitle: `Chapter ${mcq.chapterNumber}: ${mcq.topic}`,
    topic: mcq.topic,
    question: mcq.question,
    options: mcq.options,
    correctIndex: mcq.correctIndex,
    explanation: mcq.explanation,
    marks: mcq.difficulty === 'Hard' ? 3 : mcq.difficulty === 'Medium' ? 2 : 1,
    difficulty: mcq.difficulty
  };
}

/**
 * Get deterministic daily revision set of 30 authored questions (10 Math + 10 Science + 10 Sejarah)
 */
export function getDailyRevisionQuestions(dateSeed = new Date()): ExamQuestionItem[] {
  const dayOfYear = Math.floor((dateSeed.getTime() - new Date(dateSeed.getFullYear(), 0, 0).getTime()) / 86400000);
  
  const mathPool = mathChapterQuizBank;
  const sciencePool = scienceChapterQuizBank;
  const sejarahPool = sejarahChapterQuizBank;

  const selectedMath: ChapterMCQ[] = [];
  const selectedScience: ChapterMCQ[] = [];
  const selectedSejarah: ChapterMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const mIdx = (dayOfYear * 7 + i * 13) % mathPool.length;
    selectedMath.push(mathPool[mIdx]);
  }

  for (let i = 0; i < 10; i++) {
    const sIdx = (dayOfYear * 11 + i * 17) % sciencePool.length;
    selectedScience.push(sciencePool[sIdx]);
  }

  for (let i = 0; i < 10; i++) {
    const jIdx = (dayOfYear * 13 + i * 19) % sejarahPool.length;
    selectedSejarah.push(sejarahPool[jIdx]);
  }

  return [...selectedMath, ...selectedScience, ...selectedSejarah].map(q => mcqToExamItem(shuffleQuestionOptions(q)));
}

/**
 * Get customizable random practice set
 */
export function getRandomPracticeQuestions(
  subject: 'both' | SubjectType,
  count = 10,
  difficultyFilter?: 'All' | 'Easy' | 'Medium' | 'Hard'
): ExamQuestionItem[] {
  let pool = allChapterQuizQuestions;
  
  if (subject !== 'both') {
    pool = pool.filter(q => q.subject === subject);
  }

  if (difficultyFilter && difficultyFilter !== 'All') {
    pool = pool.filter(q => q.difficulty === difficultyFilter);
  }

  // Shuffle pool and slice
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  return selected.map(q => mcqToExamItem(shuffleQuestionOptions(q)));
}

/**
 * Generate a full-syllabus or paper practice set
 */
export function getPracticePaperQuestions(
  subject: SubjectType,
  count = 40
): ExamQuestionItem[] {
  const pool = subject === 'math' 
    ? mathChapterQuizBank 
    : subject === 'science' 
    ? scienceChapterQuizBank 
    : sejarahChapterQuizBank;
  const chapters = Array.from(new Set(pool.map(q => q.chapterId)));

  // Pick balanced questions across all chapters
  const questionsPerChapter = Math.max(2, Math.floor(count / chapters.length));
  const selected: ChapterMCQ[] = [];

  chapters.forEach(chId => {
    const chQuestions = pool.filter(q => q.chapterId === chId);
    const shuffled = [...chQuestions].sort(() => Math.random() - 0.5);
    selected.push(...shuffled.slice(0, questionsPerChapter));
  });

  // Fill up if remaining
  if (selected.length < count) {
    const remaining = pool.filter(q => !selected.includes(q)).sort(() => Math.random() - 0.5);
    selected.push(...remaining.slice(0, count - selected.length));
  }

  return selected.slice(0, count).map(q => mcqToExamItem(shuffleQuestionOptions(q)));
}
