import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, 
  Moon, 
  Sun, 
  Type, 
  Database, 
  Download, 
  Upload, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ShieldCheck, 
  ArrowLeft, 
  Bookmark, 
  GraduationCap, 
  Eye, 
  Layers, 
  Info,
  RefreshCw
} from 'lucide-react';
import { 
  getStorageStats, 
  exportAllUserData, 
  importUserData, 
  clearAllUserData, 
  UserStorageStats 
} from '../utils/storage';

interface SettingsViewProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (val: 'normal' | 'large' | 'xlarge') => void;
  onNavigateHome: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  darkMode,
  setDarkMode,
  fontSize,
  setFontSize,
  onNavigateHome
}) => {
  const [stats, setStats] = useState<UserStorageStats>(() => getStorageStats());
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [importStatus, setImportStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refreshStats = () => {
    setStats(getStorageStats());
  };

  const handleExport = () => {
    const data = exportAllUserData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kssm-form3-revision-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const result = importUserData(content);
        if (result.success) {
          setImportStatus({ type: 'success', message: result.message });
          refreshStats();
          setTimeout(() => {
            window.location.reload();
          }, 1200);
        } else {
          setImportStatus({ type: 'error', message: result.message });
        }
      }
    };
    reader.readAsText(file);
    // Reset file input so user can re-upload if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleConfirmReset = () => {
    clearAllUserData();
    setShowResetConfirm(false);
    refreshStats();
    window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Return to Home"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                App & Revision Settings
              </h1>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Customize appearance, text readability, and manage your offline study data.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Appearance & Theme */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-5">
        <div className="flex items-center gap-2.5">
          <Sun className="w-5 h-5 text-amber-500" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Appearance & Visual Theme
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => setDarkMode(false)}
            className={`flex items-center justify-between p-4 rounded-xl border transition ${
              !darkMode
                ? 'border-blue-600 bg-blue-50/50 text-blue-900 dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-200 font-semibold'
                : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <Sun className="w-5 h-5 text-amber-500" />
              <div className="text-left">
                <div className="text-sm font-medium">Light Mode</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">High-contrast bright daylight theme</div>
              </div>
            </div>
            {!darkMode && <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
          </button>

          <button
            onClick={() => setDarkMode(true)}
            className={`flex items-center justify-between p-4 rounded-xl border transition ${
              darkMode
                ? 'border-blue-600 bg-blue-50/50 text-blue-900 dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-200 font-semibold'
                : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-blue-500" />
              <div className="text-left">
                <div className="text-sm font-medium">Dark Mode</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Eye-friendly for night revision sessions</div>
              </div>
            </div>
            {darkMode && <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
          </button>
        </div>
      </div>

      {/* Section 2: Text Size & Legibility */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-5">
        <div className="flex items-center gap-2.5">
          <Type className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Reading Text Size
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'normal', label: 'Standard (16px)', desc: 'Default KSSM textbook scale' },
            { id: 'large', label: 'Comfortable (17px)', desc: 'Clearer for long reading' },
            { id: 'xlarge', label: 'Large (18.5px)', desc: 'Maximum legibility & focus' }
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setFontSize(opt.id as any)}
              className={`p-4 rounded-xl border text-left transition ${
                fontSize === opt.id
                  ? 'border-blue-600 bg-blue-50/60 text-blue-900 dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-200 font-semibold'
                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold">{opt.label}</span>
                {fontSize === opt.id && <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{opt.desc}</p>
            </button>
          ))}
        </div>

        {/* Live Preview Box */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Live Readability Sample:
          </span>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
            Hukum Ohm menyatakan bahawa arus elektrik (I) yang mengalir melalui konduktor adalah berkadar terus dengan beza keupayaan (V) merentasinya pada suhu malar. <span className="font-semibold text-blue-600 dark:text-blue-400">V = I × R</span>
          </p>
        </div>
      </div>

      {/* Section 3: Data Management & Backup */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Study Data & Storage Management
            </h2>
          </div>
          <button
            onClick={refreshStats}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition"
            title="Refresh statistics"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 text-center">
            <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
              {stats.completedChaptersCount}
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              Completed Chapters
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 text-center">
            <div className="text-xl font-extrabold text-amber-600 dark:text-amber-400">
              {stats.bookmarksCount}
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              Bookmarks Saved
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 text-center">
            <div className="text-xl font-extrabold text-rose-600 dark:text-rose-400">
              {stats.weakAreasCount}
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              Weak Area Topics
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 text-center">
            <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {stats.examSubmissionsCount}
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              Exam Papers Done
            </div>
          </div>
        </div>

        {importStatus && (
          <div className={`p-4 rounded-xl text-xs font-medium border flex items-center gap-2.5 ${
            importStatus.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
              : 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800'
          }`}>
            {importStatus.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            ) : (
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
            )}
            <span>{importStatus.message}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleExport}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Backup (.JSON)</span>
          </button>

          <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold cursor-pointer transition">
            <Upload className="w-4 h-4" />
            <span>Import / Restore Progress</span>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <button
            onClick={() => setShowResetConfirm(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-semibold ml-auto transition"
          >
            <Trash2 className="w-4 h-4" />
            <span>Reset All Progress</span>
          </button>
        </div>

        {/* Reset Confirmation Modal */}
        {showResetConfirm && (
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/60 dark:bg-rose-950/40 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-bold text-xs">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Are you sure you want to reset all revision history?</span>
            </div>
            <p className="text-xs text-rose-700 dark:text-rose-400 leading-relaxed">
              This will clear completed chapters, bookmarks, weak area mistake logs, and past exam attempts. This action cannot be undone.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleConfirmReset}
                className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition"
              >
                Yes, Reset All Data
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-medium transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Section 4: Syllabus & Offline Information */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Curriculum Standards & System Info
          </h2>
        </div>

        <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
            <span>
              <strong>KSSM Syllabus Alignment:</strong> Fully calibrated to Kementerian Pendidikan Malaysia (KPM) Form 3 DSKP Science and Mathematics curriculum specifications.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
            <span>
              <strong>Offline Capable:</strong> All 10 Science chapters and 9 Mathematics chapters, formula sheets, glossaries, simulations, and exercises are bundled directly in the application.
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};
