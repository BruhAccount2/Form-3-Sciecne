import { 
  BookmarkItem, 
  RevisionHistoryItem, 
  WeakAreaRecord, 
  ExamSubmission, 
  SubjectType,
  ChapterTab,
  MasteryStatus,
  LearningStandardCoverage,
  PersonalNote
} from '../types';

const STORAGE_KEYS = {
  BOOKMARKS: 'f3_bookmarks_v2',
  HISTORY: 'f3_revision_history_v2',
  WEAK_AREAS: 'f3_weak_areas_v2',
  PAST_PAPER_RECORDS: 'f3_past_papers_v2',
  EXAM_SUBMISSIONS: 'f3_exam_submissions_v2',
  CHAPTER_PROGRESS: 'f3_chapter_progress_v2',
  ACCESSIBILITY: 'f3_accessibility_settings_v2',
  STANDARD_MASTERY: 'f3_standard_mastery_v2',
  PERSONAL_NOTES: 'f3_personal_notes_v2',
  INCORRECT_QUESTIONS: 'f3_incorrect_questions_v2',
  LAST_ACTIVITY: 'f3_last_activity_v2',
  STREAK_DATA: 'f3_streak_data_v2',
  POINTS_DATA: 'f3_points_data_v2',
  CHAPTER_QUIZ_SCORES: 'f3_chapter_quiz_scores_v2'
};

// Safe JSON parse helper
function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn(`Error reading localStorage key "${key}":`, err);
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Error saving to localStorage key "${key}":`, err);
  }
}

// ==================== BOOKMARKS ====================

export function getBookmarks(): BookmarkItem[] {
  return safeGet<BookmarkItem[]>(STORAGE_KEYS.BOOKMARKS, []);
}

export function isBookmarked(targetId: string): boolean {
  const bookmarks = getBookmarks();
  return bookmarks.some(b => b.targetId === targetId || b.id === targetId);
}

export function toggleBookmark(item: Omit<BookmarkItem, 'id' | 'dateAdded'>): boolean {
  const bookmarks = getBookmarks();
  const existingIndex = bookmarks.findIndex(b => b.targetId === item.targetId);

  if (existingIndex >= 0) {
    // Remove
    bookmarks.splice(existingIndex, 1);
    safeSet(STORAGE_KEYS.BOOKMARKS, bookmarks);
    return false;
  } else {
    // Add
    const newBookmark: BookmarkItem = {
      ...item,
      id: `bm_${item.targetId}_${Date.now()}`,
      dateAdded: Date.now()
    };
    bookmarks.unshift(newBookmark);
    safeSet(STORAGE_KEYS.BOOKMARKS, bookmarks);
    return true;
  }
}

export function removeBookmark(idOrTargetId: string): void {
  const bookmarks = getBookmarks();
  const updated = bookmarks.filter(b => b.id !== idOrTargetId && b.targetId !== idOrTargetId);
  safeSet(STORAGE_KEYS.BOOKMARKS, updated);
}

// ==================== REVISION HISTORY / CONTINUE REVISING ====================

export function getRevisionHistory(): RevisionHistoryItem[] {
  return safeGet<RevisionHistoryItem[]>(STORAGE_KEYS.HISTORY, []);
}

export function getLastRevisionActivity(): RevisionHistoryItem | null {
  const history = getRevisionHistory();
  return history.length > 0 ? history[0] : null;
}

export function recordRevisionActivity(item: Omit<RevisionHistoryItem, 'timestamp'>): void {
  const history = getRevisionHistory();
  // Filter out duplicates with the same targetId/title to avoid spamming
  const filtered = history.filter(h => h.title !== item.title || h.targetId !== item.targetId);
  const newEntry: RevisionHistoryItem = {
    ...item,
    timestamp: Date.now()
  };
  // Keep up to 20 recent activities
  const updated = [newEntry, ...filtered].slice(0, 20);
  safeSet(STORAGE_KEYS.HISTORY, updated);
}

// ==================== WEAK AREAS / MISTAKE LOG ====================

export function getWeakAreas(): WeakAreaRecord[] {
  const records = safeGet<WeakAreaRecord[]>(STORAGE_KEYS.WEAK_AREAS, []);
  // Sort high priority first, then by wrongCount descending
  return records.sort((a, b) => {
    if (a.priority === 'high' && b.priority !== 'high') return -1;
    if (b.priority === 'high' && a.priority !== 'high') return 1;
    return b.wrongCount - a.wrongCount;
  });
}

export function recordQuestionAttempt(params: {
  chapterId: string;
  subject: SubjectType;
  chapterTitle: string;
  chapterNumber: number;
  topic: string;
  isCorrect: boolean;
}): void {
  const { chapterId, subject, chapterTitle, chapterNumber, topic, isCorrect } = params;
  const records = getWeakAreas();
  const existing = records.find(r => r.chapterId === chapterId);

  if (existing) {
    existing.totalAttempted += 1;
    if (!isCorrect) {
      existing.wrongCount += 1;
      if (!existing.missedTopics.includes(topic)) {
        existing.missedTopics.push(topic);
      }
      existing.lastWrongTimestamp = Date.now();
    } else {
      // If correct and user has improved, reduce wrongCount slightly
      existing.wrongCount = Math.max(0, existing.wrongCount - 1);
      if (existing.wrongCount === 0) {
        existing.missedTopics = existing.missedTopics.filter(t => t !== topic);
      }
    }

    const wrongRatio = existing.wrongCount / Math.max(1, existing.totalAttempted);
    if (existing.wrongCount >= 3 || wrongRatio > 0.4) {
      existing.priority = 'high';
    } else if (existing.wrongCount >= 1) {
      existing.priority = 'medium';
    } else {
      existing.priority = 'low';
    }
  } else if (!isCorrect) {
    records.push({
      chapterId,
      subject,
      chapterTitle,
      chapterNumber,
      wrongCount: 1,
      totalAttempted: 1,
      missedTopics: [topic],
      lastWrongTimestamp: Date.now(),
      priority: 'medium'
    });
  }

  // Remove records that have 0 wrong and priority low
  const cleaned = records.filter(r => r.wrongCount > 0);
  safeSet(STORAGE_KEYS.WEAK_AREAS, cleaned);
}

export function clearWeakArea(chapterId: string): void {
  const records = getWeakAreas();
  const updated = records.filter(r => r.chapterId !== chapterId);
  safeSet(STORAGE_KEYS.WEAK_AREAS, updated);
}

// ==================== PAST PAPER SCORES ====================

export interface PastPaperRecord {
  completed: boolean;
  score?: number;
  maxScore?: number;
  percentage?: number;
  lastAttemptDate: number;
}

export function getPastPaperRecords(): Record<string, PastPaperRecord> {
  return safeGet<Record<string, PastPaperRecord>>(STORAGE_KEYS.PAST_PAPER_RECORDS, {});
}

export function recordPastPaperScore(paperId: string, score: number, maxScore: number): void {
  const records = getPastPaperRecords();
  records[paperId] = {
    completed: true,
    score,
    maxScore,
    percentage: Math.round((score / maxScore) * 100),
    lastAttemptDate: Date.now()
  };
  safeSet(STORAGE_KEYS.PAST_PAPER_RECORDS, records);
}

export function togglePastPaperCompleted(paperId: string): boolean {
  const records = getPastPaperRecords();
  const current = records[paperId]?.completed || false;
  records[paperId] = {
    ...records[paperId],
    completed: !current,
    lastAttemptDate: Date.now()
  };
  safeSet(STORAGE_KEYS.PAST_PAPER_RECORDS, records);
  return !current;
}

// ==================== EXAM SUBMISSIONS ====================

export function getExamSubmissions(): ExamSubmission[] {
  return safeGet<ExamSubmission[]>(STORAGE_KEYS.EXAM_SUBMISSIONS, []);
}

export function saveExamSubmission(submission: ExamSubmission): void {
  const history = getExamSubmissions();
  const updated = [submission, ...history].slice(0, 30);
  safeSet(STORAGE_KEYS.EXAM_SUBMISSIONS, updated);
}

// ==================== CHAPTER PROGRESS ====================

export interface ChapterProgressData {
  notesRead: boolean;
  completedExercises: string[]; // exercise ids
}

export function getChapterProgress(): Record<string, ChapterProgressData> {
  return safeGet<Record<string, ChapterProgressData>>(STORAGE_KEYS.CHAPTER_PROGRESS, {});
}

export function markNoteAsRead(chapterId: string, isRead = true): void {
  const progress = getChapterProgress();
  progress[chapterId] = {
    notesRead: isRead,
    completedExercises: progress[chapterId]?.completedExercises || []
  };
  safeSet(STORAGE_KEYS.CHAPTER_PROGRESS, progress);
}

export function toggleExerciseCompleted(chapterId: string, exerciseId: string): boolean {
  const progress = getChapterProgress();
  const current = progress[chapterId] || { notesRead: false, completedExercises: [] };
  const exists = current.completedExercises.includes(exerciseId);
  const updatedExercises = exists 
    ? current.completedExercises.filter(id => id !== exerciseId)
    : [...current.completedExercises, exerciseId];
  
  progress[chapterId] = {
    ...current,
    completedExercises: updatedExercises
  };
  safeSet(STORAGE_KEYS.CHAPTER_PROGRESS, progress);
  return !exists;
}

export function getProgressSummary(): { totalNotesRead: number; totalExercisesCompleted: number; totalChapters: number } {
  const progress = getChapterProgress();
  let totalNotesRead = 0;
  let totalExercisesCompleted = 0;
  
  Object.values(progress).forEach(item => {
    if (item.notesRead) totalNotesRead += 1;
    if (item.completedExercises && item.completedExercises.length > 0) {
      totalExercisesCompleted += 1;
    }
  });

  return {
    totalNotesRead,
    totalExercisesCompleted,
    totalChapters: 19
  };
}

// ==================== ACCESSIBILITY SETTINGS ====================

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
}

export function getAccessibilitySettings(): AccessibilitySettings {
  return safeGet<AccessibilitySettings>(STORAGE_KEYS.ACCESSIBILITY, {
    fontSize: 'normal',
    highContrast: false
  });
}

export function saveAccessibilitySettings(settings: Partial<AccessibilitySettings>): AccessibilitySettings {
  const current = getAccessibilitySettings();
  const updated = { ...current, ...settings };
  safeSet(STORAGE_KEYS.ACCESSIBILITY, updated);
  return updated;
}

// ==================== LEARNING STANDARD MASTERY ====================

export function getStandardMastery(): Record<string, MasteryStatus> {
  return safeGet<Record<string, MasteryStatus>>(STORAGE_KEYS.STANDARD_MASTERY, {});
}

export function setStandardMastery(standardCode: string, status: MasteryStatus): void {
  const current = getStandardMastery();
  current[standardCode] = status;
  safeSet(STORAGE_KEYS.STANDARD_MASTERY, current);
}

export function calculateChapterMastery(standards: LearningStandardCoverage[]): {
  masteryPercentage: number;
  masteredCount: number;
  practisingCount: number;
  needsRevisionCount: number;
  unattemptedCount: number;
  totalStandards: number;
} {
  const masteryMap = getStandardMastery();
  let masteredCount = 0;
  let practisingCount = 0;
  let needsRevisionCount = 0;
  let unattemptedCount = 0;

  standards.forEach(std => {
    const status = masteryMap[std.code] || 'unattempted';
    if (status === 'mastered') masteredCount += 1;
    else if (status === 'practising') practisingCount += 1;
    else if (status === 'needs_revision') needsRevisionCount += 1;
    else unattemptedCount += 1;
  });

  const total = standards.length || 1;
  // Weighted score: Mastered = 100%, Practising = 50%, Needs Revision = 25%
  const weightedPoints = (masteredCount * 1.0) + (practisingCount * 0.5) + (needsRevisionCount * 0.25);
  const masteryPercentage = Math.round((weightedPoints / total) * 100);

  return {
    masteryPercentage,
    masteredCount,
    practisingCount,
    needsRevisionCount,
    unattemptedCount,
    totalStandards: standards.length
  };
}

// ==================== PERSONAL NOTES ====================

export function getPersonalNotes(): PersonalNote[] {
  return safeGet<PersonalNote[]>(STORAGE_KEYS.PERSONAL_NOTES, []);
}

export function getPersonalNoteByTarget(targetId: string): PersonalNote | undefined {
  const notes = getPersonalNotes();
  return notes.find(n => n.targetId === targetId);
}

export function savePersonalNote(params: {
  targetId: string;
  targetType: 'chapter' | 'standard' | 'note' | 'exercise';
  targetTitle: string;
  content: string;
}): PersonalNote {
  const notes = getPersonalNotes();
  const existingIdx = notes.findIndex(n => n.targetId === params.targetId);
  
  if (existingIdx >= 0) {
    notes[existingIdx] = {
      ...notes[existingIdx],
      content: params.content,
      updatedAt: Date.now()
    };
    safeSet(STORAGE_KEYS.PERSONAL_NOTES, notes);
    return notes[existingIdx];
  } else {
    const newNote: PersonalNote = {
      id: `note_${params.targetId}_${Date.now()}`,
      targetId: params.targetId,
      targetType: params.targetType,
      targetTitle: params.targetTitle,
      content: params.content,
      updatedAt: Date.now()
    };
    notes.unshift(newNote);
    safeSet(STORAGE_KEYS.PERSONAL_NOTES, notes);
    return newNote;
  }
}

export function deletePersonalNote(targetIdOrId: string): void {
  const notes = getPersonalNotes();
  const updated = notes.filter(n => n.id !== targetIdOrId && n.targetId !== targetIdOrId);
  safeSet(STORAGE_KEYS.PERSONAL_NOTES, updated);
}

// ==================== INCORRECT QUESTIONS TRACKER ====================

export interface IncorrectQuestionItem {
  id: string;
  chapterId: string;
  subject: SubjectType;
  chapterNumber: number;
  chapterTitle: string;
  questionNumber: number;
  question: string;
  learningStandardCode?: string;
  difficulty: string;
  marks: number;
  answerFinal: string;
  answerWorking: string[];
  scientificReasoning?: string;
  timestamp: number;
}

export function getIncorrectQuestions(): IncorrectQuestionItem[] {
  return safeGet<IncorrectQuestionItem[]>(STORAGE_KEYS.INCORRECT_QUESTIONS, []);
}

export function recordIncorrectQuestion(item: Omit<IncorrectQuestionItem, 'timestamp'>): void {
  const list = getIncorrectQuestions();
  const filtered = list.filter(q => q.id !== item.id);
  const updated = [
    { ...item, timestamp: Date.now() },
    ...filtered
  ].slice(0, 50);
  safeSet(STORAGE_KEYS.INCORRECT_QUESTIONS, updated);
}

export function removeIncorrectQuestion(questionId: string): void {
  const list = getIncorrectQuestions();
  const updated = list.filter(q => q.id !== questionId);
  safeSet(STORAGE_KEYS.INCORRECT_QUESTIONS, updated);
}

// ==================== LAST ACTIVITY (CONTINUE REVISING) ====================

export interface LastActivityState {
  lastChapterId?: string;
  lastSubject?: SubjectType;
  lastChapterTitle?: string;
  lastChapterNumber?: number;
  lastSection?: 'learn' | 'practise' | 'check';
  lastNoteTitle?: string;
  lastExerciseId?: string;
  lastQuestionNumber?: number;
  lastGlossaryTermId?: string;
  lastGlossaryTerm?: string;
  lastPastPaperId?: string;
  lastPastPaperTitle?: string;
  timestamp: number;
}

export function getLastActivity(): LastActivityState | null {
  return safeGet<LastActivityState | null>(STORAGE_KEYS.LAST_ACTIVITY, null);
}

export function recordLastActivity(state: Partial<LastActivityState>): void {
  const current = getLastActivity() || { timestamp: Date.now() };
  const updated: LastActivityState = {
    ...current,
    ...state,
    timestamp: Date.now()
  };
  safeSet(STORAGE_KEYS.LAST_ACTIVITY, updated);
}

// ==================== GLOBAL DATA MANAGEMENT (EXPORT / IMPORT / RESET) ====================

export interface UserStorageStats {
  completedChaptersCount: number;
  bookmarksCount: number;
  weakAreasCount: number;
  personalNotesCount: number;
  examSubmissionsCount: number;
  incorrectQuestionsCount: number;
  revisionHistoryCount: number;
  storageSizeKb: number;
}

export function getStorageStats(): UserStorageStats {
  let completedCount = 0;
  try {
    const raw = localStorage.getItem('f3_completed_chapters');
    completedCount = raw ? JSON.parse(raw).length : 0;
  } catch {
    completedCount = 0;
  }

  let totalBytes = 0;
  if (typeof window !== 'undefined') {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('f3_')) {
        const val = localStorage.getItem(key) || '';
        totalBytes += key.length + val.length;
      }
    }
  }

  return {
    completedChaptersCount: completedCount,
    bookmarksCount: getBookmarks().length,
    weakAreasCount: getWeakAreas().length,
    personalNotesCount: getPersonalNotes().length,
    examSubmissionsCount: getExamSubmissions().length,
    incorrectQuestionsCount: getIncorrectQuestions().length,
    revisionHistoryCount: getRevisionHistory().length,
    storageSizeKb: Math.round((totalBytes / 1024) * 10) / 10
  };
}

export function exportAllUserData(): string {
  if (typeof window === 'undefined') return '{}';
  const exportPayload: Record<string, any> = {
    version: '2.0',
    exportDate: new Date().toISOString(),
    completedChapters: safeGet<string[]>('f3_completed_chapters', []),
    theme: localStorage.getItem('f3_theme') || 'light',
    fontSize: localStorage.getItem('f3_fontsize') || 'normal'
  };

  Object.entries(STORAGE_KEYS).forEach(([_, key]) => {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        exportPayload[key] = JSON.parse(raw);
      } catch {
        exportPayload[key] = raw;
      }
    }
  });

  return JSON.stringify(exportPayload, null, 2);
}

export function importUserData(jsonString: string): { success: boolean; message: string } {
  if (typeof window === 'undefined') return { success: false, message: 'Window unavailable' };
  try {
    const data = JSON.parse(jsonString);
    if (typeof data !== 'object' || !data) {
      return { success: false, message: 'Invalid file format: JSON root must be an object.' };
    }

    if (data.completedChapters && Array.isArray(data.completedChapters)) {
      localStorage.setItem('f3_completed_chapters', JSON.stringify(data.completedChapters));
    }
    if (data.theme) {
      localStorage.setItem('f3_theme', data.theme);
    }
    if (data.fontSize) {
      localStorage.setItem('f3_fontsize', data.fontSize);
    }

    Object.values(STORAGE_KEYS).forEach(key => {
      if (data[key] !== undefined) {
        localStorage.setItem(key, JSON.stringify(data[key]));
      }
    });

    return { success: true, message: 'Study progress imported successfully!' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Failed to parse JSON file.' };
  }
}

export function clearAllUserData(): void {
  if (typeof window === 'undefined') return;
  const keysToRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('f3_')) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach(k => localStorage.removeItem(k));
}

// ==================== STREAK TRACKING (A4) ====================

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDateStr: string; // YYYY-MM-DD
  totalDaysActive: number;
  activityDates: string[]; // List of YYYY-MM-DD
}

function getTodayDateStr(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getYesterdayDateStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getStreakData(): StreakData {
  // Check legacy localStorage 'f3_daily_streak' for smooth upgrade
  const legacyStreak = safeGet<number | null>('f3_daily_streak', null);
  const fallback: StreakData = {
    currentStreak: legacyStreak || 1,
    longestStreak: legacyStreak || 1,
    lastActiveDateStr: getTodayDateStr(),
    totalDaysActive: legacyStreak || 1,
    activityDates: [getTodayDateStr()]
  };

  const stored = safeGet<StreakData | null>(STORAGE_KEYS.STREAK_DATA, null);
  if (!stored) {
    safeSet(STORAGE_KEYS.STREAK_DATA, fallback);
    return fallback;
  }
  return stored;
}

export function recordStreakActivity(): StreakData {
  const current = getStreakData();
  const todayStr = getTodayDateStr();
  const yesterdayStr = getYesterdayDateStr();

  if (current.lastActiveDateStr === todayStr) {
    // Already recorded activity today
    return current;
  }

  let newStreak = current.currentStreak;
  if (current.lastActiveDateStr === yesterdayStr) {
    // Consecutive day
    newStreak += 1;
  } else {
    // Missed at least one day, reset to 1
    newStreak = 1;
  }

  const updatedActivityDates = current.activityDates.includes(todayStr)
    ? current.activityDates
    : [...current.activityDates, todayStr].slice(-60);

  const updated: StreakData = {
    currentStreak: newStreak,
    longestStreak: Math.max(current.longestStreak, newStreak),
    lastActiveDateStr: todayStr,
    totalDaysActive: current.totalDaysActive + 1,
    activityDates: updatedActivityDates
  };

  safeSet(STORAGE_KEYS.STREAK_DATA, updated);
  // Keep legacy key in sync for backwards compatibility
  safeSet('f3_daily_streak', newStreak);

  // Award daily streak points
  addPoints(25, `Daily streak milestone (${newStreak} days active)`);
  return updated;
}

// ==================== POINTS & LOCAL STATS (Part D) ====================

export interface PointHistoryItem {
  id: string;
  points: number;
  reason: string;
  timestamp: number;
}

export interface UserPointsData {
  totalPoints: number;
  history: PointHistoryItem[];
}

export function getUserPointsData(): UserPointsData {
  return safeGet<UserPointsData>(STORAGE_KEYS.POINTS_DATA, {
    totalPoints: 120, // Starting bonus for new students
    history: [
      {
        id: 'init_bonus',
        points: 120,
        reason: 'Welcome to Form 3 Revision! Starter Study Bonus',
        timestamp: Date.now()
      }
    ]
  });
}

export function getUserPoints(): number {
  return getUserPointsData().totalPoints;
}

export function addPoints(amount: number, reason: string): number {
  const current = getUserPointsData();
  const newTotal = Math.max(0, current.totalPoints + amount);
  const newEntry: PointHistoryItem = {
    id: `pt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    points: amount,
    reason,
    timestamp: Date.now()
  };

  const updated: UserPointsData = {
    totalPoints: newTotal,
    history: [newEntry, ...current.history].slice(0, 50)
  };

  safeSet(STORAGE_KEYS.POINTS_DATA, updated);
  return newTotal;
}

export interface RankTier {
  title: string;
  minPoints: number;
  badge: string;
  description: string;
}

export const RANK_TIERS: RankTier[] = [
  { title: 'Novice Scholar', minPoints: 0, badge: '🌱', description: 'Beginning the Form 3 journey.' },
  { title: 'Apprentice Learner', minPoints: 250, badge: '📘', description: 'Consistently reviewing core concepts.' },
  { title: 'Form 3 Achiever', minPoints: 600, badge: '⚡', description: 'Demonstrating solid syllabus grasp.' },
  { title: 'Honor Student', minPoints: 1200, badge: '🌟', description: 'Mastering challenging multi-step questions.' },
  { title: 'Distinction Master', minPoints: 2000, badge: '🏆', description: 'Exemplary performance across Math & Science.' },
  { title: 'Grandmaster Scholar', minPoints: 3200, badge: '👑', description: 'Top-tier revision mastery in all 19 chapters.' }
];

export function getUserRank(points: number): { current: RankTier; next: RankTier | null; progress: number } {
  let current = RANK_TIERS[0];
  let next: RankTier | null = RANK_TIERS[1] || null;

  for (let i = RANK_TIERS.length - 1; i >= 0; i--) {
    if (points >= RANK_TIERS[i].minPoints) {
      current = RANK_TIERS[i];
      next = RANK_TIERS[i + 1] || null;
      break;
    }
  }

  let progress = 100;
  if (next) {
    const range = next.minPoints - current.minPoints;
    const gained = points - current.minPoints;
    progress = Math.min(100, Math.max(0, Math.round((gained / range) * 100)));
  }

  return { current, next, progress };
}

// ==================== CHAPTER QUIZ & COMPLETION MIGRATION (A3, Part B) ====================

export interface ChapterQuizRecord {
  chapterId: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean; // score >= 10 out of 15 (Chapter Complete threshold)
  completedAt: number;
  attemptsCount: number;
  grade?: 'FAIL' | 'PASS' | 'GOOD' | 'VERY GOOD';
}

export function getChapterQuizGrade(score: number, total = 15): {
  grade: 'FAIL' | 'PASS' | 'GOOD' | 'VERY GOOD';
  message: string;
  isComplete: boolean;
  colorClass: string;
} {
  if (score === 15) {
    return {
      grade: 'VERY GOOD',
      message: 'Excellent! You mastered this chapter.',
      isComplete: true,
      colorClass: 'emerald'
    };
  }
  if (score >= 11 && score <= 14) {
    return {
      grade: 'GOOD',
      message: "Good! Review the important points you forgot and you're ready to move on.",
      isComplete: true,
      colorClass: 'blue'
    };
  }
  if (score >= 6 && score <= 10) {
    const isComplete = score >= 10;
    return {
      grade: 'PASS',
      message: isComplete
        ? "You passed, but you should review the points you still don't know."
        : "You scored within the pass range, but you need at least 10/15 to mark the chapter complete. Review the points you missed and try again.",
      isComplete,
      colorClass: isComplete ? 'indigo' : 'amber'
    };
  }
  return {
    grade: 'FAIL',
    message: 'You need to revise this chapter again.',
    isComplete: false,
    colorClass: 'rose'
  };
}

export function getChapterQuizRecords(): Record<string, ChapterQuizRecord> {
  return safeGet<Record<string, ChapterQuizRecord>>(STORAGE_KEYS.CHAPTER_QUIZ_SCORES, {});
}

export function getChapterQuizRecord(chapterId: string): ChapterQuizRecord | undefined {
  const records = getChapterQuizRecords();
  return records[chapterId];
}

/**
 * Returns strictly verified completed chapter IDs (best score >= 10/15)
 */
export function getVerifiedCompletedChapters(): string[] {
  const records = getChapterQuizRecords();
  const verified: string[] = [];
  Object.entries(records).forEach(([chapterId, record]) => {
    if (record && record.score >= 10) {
      verified.push(chapterId);
    }
  });
  safeSet('f3_completed_chapters', verified);
  return verified;
}

export function saveChapterQuizScore(
  chapterId: string,
  score: number,
  total = 15
): ChapterQuizRecord {
  const records = getChapterQuizRecords();
  const percentage = Math.round((score / total) * 100);
  const gradeInfo = getChapterQuizGrade(score, total);
  const passed = gradeInfo.isComplete; // Exactly score >= 10 out of 15
  const existing = records[chapterId];

  // Best attempt preservation: if current attempt score is higher, update score, percentage & grade
  const isNewBest = !existing || score > existing.score;
  const bestScore = isNewBest ? score : existing.score;
  const bestPercentage = isNewBest ? percentage : existing.percentage;
  const bestGrade = isNewBest ? gradeInfo.grade : (existing.grade || getChapterQuizGrade(bestScore, total).grade);
  const isNowPassed = bestScore >= 10;

  const record: ChapterQuizRecord = {
    chapterId,
    score: bestScore,
    total,
    percentage: bestPercentage,
    passed: isNowPassed,
    grade: bestGrade,
    completedAt: Date.now(),
    attemptsCount: (existing?.attemptsCount || 0) + 1
  };

  records[chapterId] = record;
  safeSet(STORAGE_KEYS.CHAPTER_QUIZ_SCORES, records);

  // Sync with f3_completed_chapters list
  getVerifiedCompletedChapters();

  // Priority 3: Anti-XP Farming
  // Award 100 XP Mastery bonus ONLY on the first time passing with >= 10/15
  const wasAlreadyPassed = existing?.passed || (existing && existing.score >= 10);
  if (passed && !wasAlreadyPassed) {
    addPoints(100, `Achieved Chapter Mastery for Chapter ${chapterId} (${score}/${total} - ${gradeInfo.grade})`);
  } else if (passed && wasAlreadyPassed) {
    // Retake pass awards standard practice XP
    addPoints(10, `Retook Chapter Quiz for ${chapterId} (${score}/${total} - ${gradeInfo.grade})`);
  } else {
    // Attempt with score < 10
    addPoints(5, `Attempted Chapter Quiz for ${chapterId} (${score}/${total})`);
  }

  recordStreakActivity();
  return record;
}

export function isChapterQuizPassed(chapterId: string): boolean {
  const record = getChapterQuizRecord(chapterId);
  return Boolean(record?.passed);
}



