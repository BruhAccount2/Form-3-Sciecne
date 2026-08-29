import { mathChapters } from '../data/math';
import { scienceChapters } from '../data/science';
import { glossaryTerms } from '../data/glossary';
import { formulaeList } from '../data/formulae';
import { pastPapersList } from '../data/pastPapers';
import { quickRevisionDataList } from '../data/quickRevision';
import { validateContentPurity } from './symbolSanitizer';

export interface AuditIssue {
  location: string;
  field: string;
  issue: string;
  snippet: string;
}

export interface AuditReport {
  timestamp: number;
  totalItemsScanned: number;
  cleanItemsCount: number;
  issuesFoundCount: number;
  isPristine: boolean;
  issues: AuditIssue[];
  summary: {
    mathChaptersScanned: number;
    scienceChaptersScanned: number;
    glossaryTermsScanned: number;
    formulaeScanned: number;
    pastPapersScanned: number;
    quickRevisionScanned: number;
  };
}

export function runFullContentAudit(): AuditReport {
  const issues: AuditIssue[] = [];
  let totalItemsScanned = 0;

  function checkText(text: string | undefined | null, location: string, field: string) {
    if (!text) return;
    totalItemsScanned++;
    const res = validateContentPurity(text);
    if (!res.isValid) {
      res.issues.forEach(iss => {
        issues.push({
          location,
          field,
          issue: iss,
          snippet: text.length > 100 ? text.substring(0, 97) + '...' : text
        });
      });
    }
  }

  // 1. Scan Math Chapters
  mathChapters.forEach(ch => {
    checkText(ch.title, `Math Ch ${ch.chapterNumber}`, 'title');
    checkText(ch.summary, `Math Ch ${ch.chapterNumber}`, 'summary');
    ch.notes.forEach((n, idx) => {
      checkText(n.title, `Math Ch ${ch.chapterNumber} Note ${idx + 1}`, 'note.title');
      checkText(n.content, `Math Ch ${ch.chapterNumber} Note ${idx + 1}`, 'note.content');
    });
    ch.exercises.forEach(ex => {
      checkText(ex.question, `Math Ch ${ch.chapterNumber} Ex ${ex.number}`, 'exercise.question');
      checkText(ex.answer.finalAnswer, `Math Ch ${ch.chapterNumber} Ex ${ex.number}`, 'exercise.finalAnswer');
      ex.answer.fullWorking?.forEach((w, wIdx) => {
        checkText(w, `Math Ch ${ch.chapterNumber} Ex ${ex.number} Step ${wIdx + 1}`, 'exercise.working');
      });
    });
  });

  // 2. Scan Science Chapters
  scienceChapters.forEach(ch => {
    checkText(ch.title, `Science Ch ${ch.chapterNumber}`, 'title');
    checkText(ch.summary, `Science Ch ${ch.chapterNumber}`, 'summary');
    ch.notes.forEach((n, idx) => {
      checkText(n.title, `Science Ch ${ch.chapterNumber} Note ${idx + 1}`, 'note.title');
      checkText(n.content, `Science Ch ${ch.chapterNumber} Note ${idx + 1}`, 'note.content');
    });
    ch.exercises.forEach(ex => {
      checkText(ex.question, `Science Ch ${ch.chapterNumber} Ex ${ex.number}`, 'exercise.question');
      checkText(ex.answer.finalAnswer, `Science Ch ${ch.chapterNumber} Ex ${ex.number}`, 'exercise.finalAnswer');
    });
  });

  // 3. Scan Glossary Terms
  glossaryTerms.forEach(term => {
    checkText(term.term, `Glossary: ${term.term}`, 'term');
    checkText(term.simpleDefinition, `Glossary: ${term.term}`, 'simpleDefinition');
    checkText(term.detailedExplanation, `Glossary: ${term.term}`, 'detailedExplanation');
    checkText(term.example, `Glossary: ${term.term}`, 'example');
  });

  // 4. Scan Formulae
  formulaeList.forEach(f => {
    checkText(f.title, `Formula: ${f.title}`, 'title');
    checkText(f.formula, `Formula: ${f.title}`, 'formula');
    checkText(f.example.question, `Formula: ${f.title}`, 'example.question');
    checkText(f.example.finalAnswerWithUnit, `Formula: ${f.title}`, 'example.finalAnswer');
  });

  // 5. Scan Past Papers
  pastPapersList.forEach(p => {
    checkText(p.title, `Past Paper: ${p.title}`, 'title');
    p.sections.forEach(sec => {
      sec.questions.forEach(q => {
        checkText(q.question, `Past Paper ${p.title} Q${q.number}`, 'question');
        checkText(q.answer.finalAnswer, `Past Paper ${p.title} Q${q.number}`, 'finalAnswer');
      });
    });
  });

  // 6. Scan Quick Revision
  quickRevisionDataList.forEach(qr => {
    checkText(qr.chapterTitle, `Quick Revision: ${qr.chapterTitle}`, 'chapterTitle');
    qr.keyFacts.forEach((fact, idx) => checkText(fact, `Quick Revision ${qr.chapterTitle} Fact ${idx + 1}`, 'keyFact'));
    qr.rapidFireQuestions.forEach((q, idx) => checkText(q.question, `Quick Revision ${qr.chapterTitle} Rapid Q${idx + 1}`, 'question'));
  });

  return {
    timestamp: Date.now(),
    totalItemsScanned,
    cleanItemsCount: totalItemsScanned - issues.length,
    issuesFoundCount: issues.length,
    isPristine: issues.length === 0,
    issues,
    summary: {
      mathChaptersScanned: mathChapters.length,
      scienceChaptersScanned: scienceChapters.length,
      glossaryTermsScanned: glossaryTerms.length,
      formulaeScanned: formulaeList.length,
      pastPapersScanned: pastPapersList.length,
      quickRevisionScanned: quickRevisionDataList.length
    }
  };
}
