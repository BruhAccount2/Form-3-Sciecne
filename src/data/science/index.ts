import { Chapter } from '../../types';
import { scienceChapters1to5 } from './chapters1_5';
import { scienceChapters6to10 } from './chapters6_10';
import { scienceLearningStandards } from '../learningStandards';

const rawScienceChapters: Chapter[] = [
  ...scienceChapters1to5,
  ...scienceChapters6to10
];

export const scienceChapters: Chapter[] = rawScienceChapters.map(ch => ({
  ...ch,
  learningStandards: scienceLearningStandards[ch.id] || []
}));
