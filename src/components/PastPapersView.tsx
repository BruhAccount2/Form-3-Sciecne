import React, { useState, useMemo } from 'react';
import { PastPaper, PastPaperExamType, SubjectType, PastPaperQuestion } from '../types';
import { pastPapersList } from '../data/pastPapers';
import { 
  getPastPaperRecords, 
  recordPastPaperScore, 
  togglePastPaperCompleted, 
  isBookmarked, 
  toggleBookmark,
  recordRevisionActivity 
} from '../utils/storage';
import { sanitizeContent } from '../utils/symbolSanitizer';
import { 
  FileText, 
  Search, 
  Bookmark, 
  CheckCircle2, 
  Clock, 
  Award, 
  Layers, 
  Filter, 
  ChevronRight, 
  Eye, 
  Check, 
  X, 
  ArrowLeft, 
  Dna, 
  Calculator,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface PastPapersViewProps {
  onNavigateChapter: (chapterId: string) => void;
  onNavigateHome: () => void;
}

export const PastPapersView: React.FC<PastPapersViewProps> = ({ onNavigateChapter, onNavigateHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<'all' | SubjectType>('all');
  const [selectedType, setSelectedType] = useState<'all' | PastPaperExamType>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedPaper, setSelectedPaper] = useState<PastPaper | null>(null);
  const [activeTab, setActiveTab] = useState<'practice' | 'marking_scheme'>('practice');
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});
  const [customScoreInput, setCustomScoreInput] = useState<string>('');
  const [recordsUpdateTrigger, setRecordsUpdateTrigger] = useState(0);

  const pastPaperRecords = useMemo(() => {
    return getPastPaperRecords();
  }, [recordsUpdateTrigger]);

  const filteredPapers = useMemo(() => {
    return pastPapersList.filter(paper => {
      if (selectedSubject !== 'all' && paper.subject !== selectedSubject) return false;
      if (selectedType !== 'all' && paper.examType !== selectedType) return false;
      if (selectedYear !== 'all' && paper.year.toString() !== selectedYear) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          paper.title.toLowerCase().includes(q) ||
          paper.source.toLowerCase().includes(q) ||
          paper.paperSet.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, selectedSubject, selectedType, selectedYear]);

  const handleOpenPaper = (paper: PastPaper) => {
    setSelectedPaper(paper);
    setActiveTab('practice');
    setUserAnswers({});
    setRevealedSolutions({});
    setCustomScoreInput('');
    recordRevisionActivity({
      type: 'past_paper',
      subject: paper.subject,
      title: paper.title,
      subtitle: `${paper.source} • ${paper.paperSet}`,
      targetId: paper.id
    });
  };

  const handleToggleComplete = (paperId: string) => {
    togglePastPaperCompleted(paperId);
    setRecordsUpdateTrigger(prev => prev + 1);
  };

  const handleSaveScore = (paper: PastPaper) => {
    const num = parseFloat(customScoreInput);
    if (!isNaN(num) && num >= 0 && num <= paper.totalMarks) {
      recordPastPaperScore(paper.id, num, paper.totalMarks);
      setRecordsUpdateTrigger(prev => prev + 1);
    }
  };

  const handleToggleBookmark = (paper: PastPaper) => {
    toggleBookmark({
      type: 'past_paper',
      title: paper.title,
      subtitle: `${paper.source} (${paper.year})`,
      subject: paper.subject,
      targetId: `pp_${paper.id}`
    });
    setRecordsUpdateTrigger(prev => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {selectedPaper ? (
        /* ==================== ACTIVE PAPER VIEWER ==================== */
        <div className="space-y-6">
          {/* Top Return Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <button
              onClick={() => setSelectedPaper(null)}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Past Papers List
            </button>

            <div className="flex items-center gap-3">
              <div className="flex rounded-lg border border-slate-200 dark:border-slate-800 p-1 bg-slate-100 dark:bg-slate-950">
                <button
                  onClick={() => setActiveTab('practice')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'practice'
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Paper View & Questions
                </button>
                <button
                  onClick={() => setActiveTab('marking_scheme')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeTab === 'marking_scheme'
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Marking Scheme & Rubrics
                </button>
              </div>

              <button
                onClick={() => handleToggleComplete(selectedPaper.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  pastPaperRecords[selectedPaper.id]?.completed
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/60 dark:border-emerald-700 dark:text-emerald-300'
                    : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {pastPaperRecords[selectedPaper.id]?.completed ? 'Completed' : 'Mark Completed'}
              </button>
            </div>
          </div>

          {/* Paper Info Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    {selectedPaper.examType}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Year {selectedPaper.year}</span>
                  <span className="text-xs text-slate-500">• {selectedPaper.source}</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedPaper.title}
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {selectedPaper.sourceTypeDescription}
                </p>
              </div>

              {/* Score Recording Widget */}
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center shrink-0">
                <div className="text-2xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Self-Score Tracker
                </div>
                {pastPaperRecords[selectedPaper.id]?.score !== undefined ? (
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {pastPaperRecords[selectedPaper.id].score} / {selectedPaper.totalMarks} ({pastPaperRecords[selectedPaper.id].percentage}%)
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Score"
                      max={selectedPaper.totalMarks}
                      min={0}
                      value={customScoreInput}
                      onChange={e => setCustomScoreInput(e.target.value)}
                      className="w-18 px-2 py-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-xs text-center font-bold"
                    />
                    <span className="text-xs text-slate-500">/ {selectedPaper.totalMarks}</span>
                    <button
                      onClick={() => handleSaveScore(selectedPaper)}
                      className="px-2.5 py-1 bg-blue-600 text-white rounded-md text-xs font-semibold hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Paper Sections and Questions */}
          <div className="space-y-6">
            {selectedPaper.sections.map((section, sIdx) => (
              <div key={sIdx} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {section.name}
                    </h2>
                    <p className="text-xs text-slate-500">{section.description}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-slate-700 dark:text-slate-300">
                    {section.totalMarks} Marks
                  </span>
                </div>

                <div className="space-y-6">
                  {section.questions.map((q) => {
                    const isSolutionRevealed = revealedSolutions[q.number] || activeTab === 'marking_scheme';

                    return (
                      <div 
                        key={q.number}
                        className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                              {q.number}
                            </span>
                            <span className="text-xs font-medium text-slate-500">
                              {q.topic} • [{q.marks} Mark{q.marks > 1 ? 's' : ''}]
                            </span>
                          </div>

                          <button
                            onClick={() => onNavigateChapter(q.chapterId)}
                            className="text-2xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                          >
                            <BookOpen className="w-3 h-3" />
                            Revise Chapter
                          </button>
                        </div>

                        {/* Question Text */}
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed pl-8">
                          {sanitizeContent(q.question)}
                        </div>

                        {/* MCQ Options if Section A */}
                        {q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8 pt-1">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = userAnswers[q.number] === optIdx;

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => setUserAnswers(prev => ({ ...prev, [q.number]: optIdx }))}
                                  className={`text-left text-xs p-3 rounded-lg border transition-all flex items-center justify-between ${
                                    isSelected
                                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/50 font-medium text-blue-900 dark:text-blue-200'
                                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                                  }`}
                                >
                                  <span>{String.fromCharCode(65 + optIdx)}. {sanitizeContent(opt)}</span>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Solution & Marking Scheme Reveal Bar */}
                        <div className="pl-8 pt-2">
                          <button
                            onClick={() => setRevealedSolutions(prev => ({ ...prev, [q.number]: !prev[q.number] }))}
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            {isSolutionRevealed ? 'Hide Marking Scheme' : 'Reveal Solution & Marking Scheme'}
                          </button>

                          {isSolutionRevealed && (
                            <div className="mt-3 p-4 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800/60 text-xs space-y-2">
                              <div className="font-bold text-emerald-900 dark:text-emerald-200">
                                Final Answer: {sanitizeContent(q.answer.finalAnswer)}
                              </div>
                              <div className="text-slate-700 dark:text-slate-300 space-y-1">
                                <span className="font-semibold text-2xs uppercase tracking-wider text-slate-500 block">
                                  Mark Scheme Rubric:
                                </span>
                                {q.answer.markingScheme.map((scheme, sIdx) => (
                                  <div key={sIdx} className="flex items-start gap-1.5">
                                    <span className="text-emerald-600 font-bold">•</span>
                                    <span>{sanitizeContent(scheme)}</span>
                                  </div>
                                ))}
                              </div>
                              {q.answer.explanation && (
                                <p className="text-2xs text-slate-600 dark:text-slate-400 italic pt-1">
                                  Scientific Note: {sanitizeContent(q.answer.explanation)}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ==================== PAST PAPERS CATALOG ==================== */
        <div className="space-y-6">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
              <button onClick={onNavigateHome} className="hover:underline">Home</button>
              <span>/</span>
              <span>Past Papers</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Malaysian Form 3 Past & Trial Papers
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1 max-w-2xl text-sm">
              Authentic standard examination papers from MRSM, State Education Departments, and Premier Secondary Schools with official marking schemes.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-3">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search papers by school, state, or year..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject Tabs */}
              <div className="flex rounded-lg border border-slate-200 dark:border-slate-800 p-1 bg-slate-100 dark:bg-slate-950 shrink-0">
                <button
                  onClick={() => setSelectedSubject('all')}
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    selectedSubject === 'all'
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  All Subjects
                </button>
                <button
                  onClick={() => setSelectedSubject('math')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium ${
                    selectedSubject === 'math'
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Math
                </button>
                <button
                  onClick={() => setSelectedSubject('science')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium ${
                    selectedSubject === 'science'
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Dna className="w-3.5 h-3.5" />
                  Science
                </button>
              </div>
            </div>

            {/* Sub-filters row */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
              <span className="text-slate-500 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Exam Type:
              </span>
              {(['all', 'MRSM', 'State', 'School'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-2.5 py-1 rounded-md text-2xs font-semibold ${
                    selectedType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {type === 'all' ? 'All Types' : type}
                </button>
              ))}
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPapers.map(paper => {
              const record = pastPaperRecords[paper.id];
              const isFav = isBookmarked(`pp_${paper.id}`);

              return (
                <div
                  key={paper.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-2xs font-semibold ${
                            paper.subject === 'math'
                              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                              : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                          }`}>
                            {paper.subject === 'math' ? 'Mathematics' : 'Science'}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-2xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                            {paper.examType}
                          </span>
                          <span className="text-2xs text-slate-500 font-medium">Year {paper.year}</span>
                        </div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                          {paper.title}
                        </h2>
                      </div>

                      <button
                        onClick={() => handleToggleBookmark(paper)}
                        className="p-1.5 rounded-md text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <Bookmark className={`w-4 h-4 ${isFav ? 'fill-amber-500 text-amber-500' : ''}`} />
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                      {paper.sourceTypeDescription}
                    </p>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-3 text-2xs text-slate-500 mb-4 bg-slate-50 dark:bg-slate-950/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800/80">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {paper.durationMinutes} mins
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> {paper.totalMarks} Marks
                      </span>
                      <span>•</span>
                      <span>{paper.questionsCount} Questions</span>
                      <span>•</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {paper.difficulty}
                      </span>
                    </div>

                    {/* Completion Status Tag */}
                    {record?.completed && (
                      <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-2xs font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Completed {record.score !== undefined ? `• Score: ${record.score}/${paper.totalMarks} (${record.percentage}%)` : ''}
                      </div>
                    )}
                  </div>

                  {/* Open Paper Button */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-2xs text-slate-400">{paper.source}</span>
                    <button
                      onClick={() => handleOpenPaper(paper)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs"
                    >
                      Open Paper & Answers
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
