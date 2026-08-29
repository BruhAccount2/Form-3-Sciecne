import { Chapter } from '../../types';
import { scienceChapters1to5 } from './chapters1_5';
import { scienceChapters6to10 } from './chapters6_10';

export const scienceChapters: Chapter[] = [
  ...scienceChapters1to5,
  ...scienceChapters6to10
];
