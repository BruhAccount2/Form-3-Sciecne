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
  LAST_ACTIVITY: 'f3_last_activity_v2'
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


