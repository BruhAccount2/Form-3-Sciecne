import React from 'react';
import { X, Eye, Type, Moon, Sun, Keyboard } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  onChangeFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  onToggleTheme,
  fontSize,
  onChangeFontSize
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Accessibility & Display Settings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Font Size Adjuster */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 mb-2">
            <Type className="w-4 h-4" /> Text Size / Skala Teks:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'normal', label: 'Default (100%)' },
              { id: 'large', label: 'Large (115%)' },
              { id: 'xlarge', label: 'X-Large (130%)' }
            ].map(size => (
              <button
                key={size.id}
                onClick={() => onChangeFontSize(size.id as any)}
                className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                  fontSize === size.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Mode */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 mb-2">
            {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />} Theme Mode:
          </label>
          <button
            onClick={onToggleTheme}
            className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-medium text-slate-800 dark:text-slate-200"
          >
            <span>Current Theme: {isDarkMode ? 'Dark Mode (Eye Comfort)' : 'Light Mode (Standard)'}</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Toggle</span>
          </button>
        </div>

        {/* Keyboard Shortcuts Reference */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 mb-2">
            <Keyboard className="w-4 h-4" /> Keyboard Shortcuts:
          </label>
          <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-2 text-slate-600 dark:text-slate-400">
            <div className="flex justify-between">
              <span>Quick Search</span>
              <kbd className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-2xs">Ctrl + K / /</kbd>
            </div>
            <div className="flex justify-between">
              <span>Close Modals</span>
              <kbd className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-2xs">Esc</kbd>
            </div>
            <div className="flex justify-between">
              <span>Toggle Dark/Light</span>
              <kbd className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-2xs">Alt + T</kbd>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors"
        >
          Save & Close Settings
        </button>
      </div>
    </div>
  );
};
