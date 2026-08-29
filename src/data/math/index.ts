import { Chapter } from '../../types';
import { mathChapters1to5 } from './chapters1_5';
import { mathChapters6to9 } from './chapters6_9';
import { mathLearningStandards } from '../learningStandards';

const rawMathChapters: Chapter[] = [
  ...mathChapters1to5,
  ...mathChapters6to9
];

export const mathChapters: Chapter[] = rawMathChapters.map(ch => ({
  ...ch,
  learningStandards: mathLearningStandards[ch.id] || []
}));
