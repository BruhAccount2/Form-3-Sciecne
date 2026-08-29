import React from 'react';
import { MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenFeedback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFeedback }) => {
  return (
    <footer className="h-12 border-t border-gray-200 bg-white dark:bg-slate-900 dark:border-slate-800 flex items-center justify-between px-4 sm:px-8 text-[11px] text-gray-400 dark:text-slate-500 shrink-0 uppercase tracking-widest transition-colors">
      <div className="flex items-center gap-3">
        <span>Made by <span className="font-bold text-[#2563EB] dark:text-blue-400">zc</span> for user feedback</span>
        <button
          id="footer-feedback-btn"
          onClick={onOpenFeedback}
          className="hidden sm:inline-flex items-center gap-1 text-[#2563EB] hover:underline dark:text-blue-400 font-semibold normal-case text-xs"
        >
          <MessageSquare className="h-3 w-3" />
          Give Feedback
        </button>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={onOpenFeedback}
          className="sm:hidden text-[#2563EB] dark:text-blue-400 font-bold"
        >
          Feedback
        </button>
        <span className="hidden md:inline hover:text-[#2563EB] transition-colors dark:hover:text-blue-400">
          KSSM DLP
        </span>
        <span className="text-gray-300 dark:text-slate-700">|</span>
        <span className="text-gray-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Form 3 Revision
        </span>
      </div>
    </footer>
  );
};

