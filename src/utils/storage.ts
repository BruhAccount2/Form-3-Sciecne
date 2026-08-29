import { 
  BookmarkItem, 
  RevisionHistoryItem, 
  WeakAreaRecord, 
  ExamSubmission, 
  SubjectType,
  ChapterTab
} from '../types';

const STORAGE_KEYS = {
  BOOKMARKS: 'f3_bookmarks_v2',
  HISTORY: 'f3_revision_history_v2',
  WEAK_AREAS: 'f3_weak_areas_v2',
  PAST_PAPER_RECORDS: 'f3_past_papers_v2',
  EXAM_SUBMISSIONS: 'f3_exam_submissions_v2',
  CHAPTER_PROGRESS: 'f3_chapter_progress_v2',
  ACCESSIBILITY: 'f3_accessibility_settings_v2'
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
