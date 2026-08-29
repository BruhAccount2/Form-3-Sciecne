import React, { useState } from 'react';
import { Chapter, Exercise, Difficulty } from '../../types';
import { 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  Bookmark, 
  BookmarkCheck,
  Check, 
  X, 
  RotateCcw,
  Sparkles,
  Edit3,
  BookOpen
} from 'lucide-react';
import { sanitizeContent } from '../../utils/symbolSanitizer';
import { 
  recordIncorrectQuestion, 
  removeIncorrectQuestion, 
  getIncorrectQuestions,
  toggleBookmark, 
  isBookmarked,
  savePersonalNote,
  getPersonalNoteByTarget
} from '../../utils/storage';

interface ExercisesViewProps {
  chapter: Chapter;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({ chapter }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [activeHints, setActiveHints] = useState<Record<string, number>>({}); // 0: none, 1: hint1, 2: hint2
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [markedIncorrect, setMarkedIncorrect] = useState<Record<string, boolean>>(() => {
    const list = getIncorrectQuestions();
    const map: Record<string, boolean> = {};
    list.forEach(q => { map[q.id] = true; });
    return map;
  });
  const [bookmarkState, setBookmarkState] = useState<Record<string, boolean>>({});
  const [activeNoteTarget, setActiveNoteTarget] = useState<string | null>(null);
  const [noteContent, setNoteContent] = useState<string>('');

  const filteredExercises = chapter.exercises.filter((ex) => {
    if (selectedDifficulty === 'all') return true;
    if (selectedDifficulty === 'Basic') return ex.difficulty === 'Basic';
    if (selectedDifficulty === 'Intermediate') return ex.difficulty === 'Intermediate';
    if (selectedDifficulty === 'Application') return ex.difficulty === 'Application';
    if (selectedDifficulty === 'HOTS') return ex.difficulty === 'HOTS' || ex.difficulty === 'Challenging';
    return true;
  });

  const toggleHint = (exId: string) => {
    const current = activeHints[exId] || 0;
    setActiveHints(prev => ({ ...prev, [exId]: current < 2 ? current + 1 : current }));
  };

  const toggleSolution = (exId: string) => {
    setOpenSolutions(prev => ({ ...prev, [exId]: !prev[exId] }));
  };

  const handleToggleIncorrect = (ex: Exercise) => {
    const isCurrentlyMarked = !!markedIncorrect[ex.id];
    if (isCurrentlyMarked) {
      removeIncorrectQuestion(ex.id);
      setMarkedIncorrect(prev => ({ ...prev, [ex.id]: false }));
    } else {
      recordIncorrectQuestion({
        id: ex.id,
        chapterId: chapter.id,
        subject: chapter.subject,
        chapterNumber: chapter.chapterNumber,
        chapterTitle: chapter.title,
        questionNumber: ex.number,
        question: ex.question,
        learningStandardCode: ex.learningStandardCode,
        difficulty: ex.difficulty,
        marks: ex.marks,
        answerFinal: ex.answer.finalAnswer,
        answerWorking: ex.answer.fullWorking,
        scientificReasoning: ex.answer.scientificReasoning
      });
      setMarkedIncorrect(prev => ({ ...prev, [ex.id]: true }));
    }
  };

  const handleToggleBookmark = (ex: Exercise) => {
    const res = toggleBookmark({
      targetId: ex.id,
      title: `Ch ${chapter.chapterNumber} Q${ex.number}`,
      subtitle: ex.question.slice(0, 50),
      type: 'exercise',
      subject: chapter.subject,
      chapterId: chapter.id,
      tab: 'exercises'
    });
    setBookmarkState(prev => ({ ...prev, [ex.id]: res }));
  };

  const openPersonalNote = (ex: Exercise) => {
    setActiveNoteTarget(ex.id);
    const existing = getPersonalNoteByTarget(ex.id);
    setNoteContent(existing ? existing.content : '');
  };

  const handleSaveNote = (ex: Exercise) => {
    savePersonalNote({
      targetId: ex.id,
      targetType: 'exercise',
      targetTitle: `Ch ${chapter.chapterNumber} Q${ex.number}`,
      content: noteContent
    });
    setActiveNoteTarget(null);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Top Difficulty Filter & Control Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Chapter {chapter.chapterNumber} Tiered Exercises
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Practice questions organized by KSSM cognitive tiers with progressive hints and complete step-by-step working.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const all: Record<string, boolean> = {};
                chapter.exercises.forEach(ex => { all[ex.id] = true; });
                setOpenSolutions(all);
              }}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Expand All Solutions
            </button>
            <button
              onClick={() => setOpenSolutions({})}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Tier Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-1">
          {[
            { id: 'all', label: `All Questions (${chapter.exercises.length})` },
            { id: 'Basic', label: '🟢 Basic Tier' },
            { id: 'Intermediate', label: '🟡 Intermediate' },
            { id: 'Application', label: '🟠 Application' },
            { id: 'HOTS', label: '🔴 HOTS / Reasoning' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDifficulty(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedDifficulty === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Exercises List */}
      <div className="space-y-5">
        {filteredExercises.map((ex) => {
          const hintsRevealed = activeHints[ex.id] || 0;
          const isSolutionOpen = !!openSolutions[ex.id];
          const isMarked = !!markedIncorrect[ex.id];
          const bookmarked = bookmarkState[ex.id] ?? isBookmarked(ex.id);
          const hasExistingNote = !!getPersonalNoteByTarget(ex.id);

          // Tier badge helper
          const getDifficultyBadge = (d: Difficulty) => {
            if (d === 'Basic') {
              return <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold">🟢 Basic</span>;
            }
            if (d === 'Intermediate') {
              return <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-[11px] font-bold">🟡 Intermediate</span>;
            }
            if (d === 'Application') {
              return <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300 border border-orange-200 dark:border-orange-800 text-[11px] font-bold">🟠 Application</span>;
            }
            return <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-[11px] font-bold">🔴 HOTS</span>;
          };

          return (
            <div
              key={ex.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 shadow-xs space-y-4 transition"
            >
              {/* Question Header & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                    Q{ex.number}
                  </span>
                  {getDifficultyBadge(ex.difficulty)}
                  {ex.learningStandardCode && (
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
                      KSSM {ex.learningStandardCode}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 font-semibold">
                    [{ex.marks} {ex.marks === 1 ? 'mark' : 'marks'}]
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {/* Personal Note Button */}
                  <button
                    onClick={() => openPersonalNote(ex)}
                    className={`p-1.5 rounded-lg text-xs font-semibold transition ${
                      hasExistingNote 
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400' 
                        : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                    }`}
                    title="Add or view personal study note on this question"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => handleToggleBookmark(ex)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    title={bookmarked ? 'Remove Bookmark' : 'Bookmark this question'}
                  >
                    {bookmarked ? (
                      <BookmarkCheck className="h-4 w-4 text-blue-600 dark:text-blue-400 fill-blue-600/20" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                  </button>

                  {/* Mark as Incorrect (Retry List) */}
                  <button
                    onClick={() => handleToggleIncorrect(ex)}
                    className={`px-2 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                      isMarked
                        ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title="Add to Incorrect Questions list for targeted revision"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{isMarked ? 'In Retry List' : 'Retry Later'}</span>
                  </button>
                </div>
              </div>

              {/* Personal Note Modal/Box inline if active */}
              {activeNoteTarget === ex.id && (
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 dark:bg-amber-950/40 dark:border-amber-900 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-200">
                    <span>Personal Note for Q{ex.number}:</span>
                    <button onClick={() => setActiveNoteTarget(null)} className="text-slate-400 hover:text-slate-600">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Write a personal reminder (e.g. 'Remember to check units before calculating')..."
                    className="w-full text-xs p-2 rounded-lg border border-amber-300 bg-white dark:bg-slate-900 dark:border-amber-800 dark:text-slate-200 focus:outline-hidden"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleSaveNote(ex)}
                      className="px-3 py-1 bg-amber-600 text-white rounded-lg text-xs font-bold hover:bg-amber-700"
                    >
                      Save Note
                    </button>
                  </div>
                </div>
              )}

              {/* Question Text */}
              <div 
                className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: sanitizeContent(ex.question) }}
              />

              {/* Diagram if available */}
              {ex.diagramSvg && (
                <div 
                  className="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex justify-center max-w-sm mx-auto"
                  dangerouslySetInnerHTML={{ __html: ex.diagramSvg }}
                />
              )}

              {/* Sub-questions if available */}
              {ex.subQuestions && ex.subQuestions.length > 0 && (
                <div className="space-y-2 pl-3 border-l-2 border-slate-200 dark:border-slate-800">
                  {ex.subQuestions.map((sub, sIdx) => (
                    <div key={sIdx} className="text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-bold text-slate-900 dark:text-white mr-1.5">({sub.label})</span>
                      <span dangerouslySetInnerHTML={{ __html: sanitizeContent(sub.question) }} />
                      <span className="text-slate-400 ml-1.5">[{sub.marks}m]</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Progressive Hints Section */}
              <div className="space-y-2 pt-1">
                {/* Hints Buttons */}
                <div className="flex items-center gap-2 flex-wrap">
                  {hintsRevealed < 1 && (
                    <button
                      onClick={() => toggleHint(ex.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900 transition"
                    >
                      <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                      <span>Need a Hint? (Hint 1)</span>
                    </button>
                  )}

                  {hintsRevealed === 1 && (
                    <button
                      onClick={() => toggleHint(ex.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900 transition"
                    >
                      <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                      <span>Method Guidance (Hint 2)</span>
                    </button>
                  )}

                  <button
                    onClick={() => toggleSolution(ex.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-900 transition ml-auto"
                  >
                    <span>{isSolutionOpen ? 'Hide Solution' : '🔑 Show Full Solution'}</span>
                  </button>
                </div>

                {/* Hint 1 Display */}
                {hintsRevealed >= 1 && (
                  <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                    <span className="font-bold flex items-center gap-1">
                      <Lightbulb className="h-3.5 w-3.5 text-amber-600" />
                      Hint 1 (Concept/Formula Clue):
                    </span>
                    <p>
                      {ex.hints && ex.hints[0] 
                        ? ex.hints[0] 
                        : 'Identify the key formula or definition associated with this learning standard. Write down the given values with their proper units first.'}
                    </p>
                  </div>
                )}

                {/* Hint 2 Display */}
                {hintsRevealed >= 2 && (
                  <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                    <span className="font-bold flex items-center gap-1">
                      <Lightbulb className="h-3.5 w-3.5 text-amber-600" />
                      Hint 2 (Step-by-Step Strategy):
                    </span>
                    <p>
                      {ex.hints && ex.hints[1]
                        ? ex.hints[1]
                        : 'Rearrange the subject of the formula if necessary. Perform the arithmetic carefully step-by-step.'}
                    </p>
                  </div>
                )}

                {/* Full Solution & Scientific Reasoning Display */}
                {isSolutionOpen && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs space-y-3 mt-2">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4" />
                        Final Answer: {ex.answer.finalAnswer}
                      </span>
                    </div>

                    {/* Step-by-Step Working */}
                    {ex.answer.fullWorking && ex.answer.fullWorking.length > 0 && (
                      <div className="space-y-1">
                        <span className="font-bold text-slate-700 dark:text-slate-300 block">Step-by-Step Working:</span>
                        <div className="space-y-1 pl-2 font-mono text-slate-800 dark:text-slate-200">
                          {ex.answer.fullWorking.map((step, stepIdx) => (
                            <div key={stepIdx} dangerouslySetInnerHTML={{ __html: sanitizeContent(step) }} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Scientific / Conceptual Reasoning */}
                    {ex.answer.scientificReasoning && (
                      <div className="p-2.5 rounded-lg bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-blue-900 dark:text-blue-200">
                        <span className="font-bold block mb-0.5">Scientific / Method Reasoning:</span>
                        <p dangerouslySetInnerHTML={{ __html: sanitizeContent(ex.answer.scientificReasoning) }} />
                      </div>
                    )}

                    {/* Common Mistake Warning */}
                    {ex.answer.commonMistakeWarning && (
                      <div className="p-2.5 rounded-lg bg-rose-50/80 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900 text-rose-900 dark:text-rose-200">
                        <span className="font-bold block mb-0.5">⚠️ Common Exam Pitfall:</span>
                        <p dangerouslySetInnerHTML={{ __html: sanitizeContent(ex.answer.commonMistakeWarning) }} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
