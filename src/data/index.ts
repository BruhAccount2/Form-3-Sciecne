import { scienceChapters } from './science';
import { mathChapters } from './math';
import { Chapter, SubjectType } from '../types';

export { scienceChapters, mathChapters };

export const allChapters: Chapter[] = [
  ...scienceChapters,
  ...mathChapters
];

export function getChapterById(id: string): Chapter | undefined {
  return allChapters.find(c => c.id === id);
}

export function getChaptersBySubject(subject: SubjectType): Chapter[] {
  return subject === 'science' ? scienceChapters : mathChapters;
}
