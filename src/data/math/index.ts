import { Chapter } from '../../types';
import { mathChapters1to5 } from './chapters1_5';
import { mathChapters6to9 } from './chapters6_9';

export const mathChapters: Chapter[] = [
  ...mathChapters1to5,
  ...mathChapters6to9
];
