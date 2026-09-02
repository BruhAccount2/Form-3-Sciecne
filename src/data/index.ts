import { scienceChapters } from './science';
import { mathChapters } from './math';
import { sejarahChapters } from './sejarah';
import { Chapter, SubjectType } from '../types';

export { scienceChapters, mathChapters, sejarahChapters };

export const allChapters: Chapter[] = [
  ...scienceChapters,
  ...mathChapters,
  ...sejarahChapters
];

export function getChapterById(id: string): Chapter | undefined {
  return allChapters.find(c => c.id === id);
}

export function getChaptersBySubject(subject: SubjectType): Chapter[] {
  if (subject === 'science') return scienceChapters;
  if (subject === 'math') return mathChapters;
  if (subject === 'sejarah') return sejarahChapters;
  return [];
}
