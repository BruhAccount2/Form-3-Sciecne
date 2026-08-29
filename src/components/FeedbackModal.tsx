import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Star } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState<'content' | 'feature' | 'question' | 'general'>('content');
  const [rating, setRating] = useState<number>(5);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    // Save locally
    const existing = JSON.parse(localStorage.getItem('f3_feedbacks') || '[]');
    existing.push({
      name,
      email,
      feedback,
      category,
      rating,
      date: new Date().toISOString()
    });
    localStorage.setItem('f3_feedbacks', JSON.stringify(existing));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setFeedback('');
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div 
        className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950 dark:text-blue-400">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
                Feedback for zc
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400">
                Help improve Malaysian Form 3 Revision
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="my-8 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
            <h4 className="mt-3 text-lg font-bold text-[#0F172A] dark:text-white">
              Thank you for your feedback!
            </h4>
            <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
              zc has received your message and will review it for syllabus updates.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            
            <div>
              <label className="block text-xs font-semibold text-[#0F172A] dark:text-slate-300 mb-1">
                Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'content', label: 'Notes/Syllabus' },
                  { id: 'question', label: 'Exercises/Answers' },
                  { id: 'feature', label: 'Feature Request' },
                  { id: 'general', label: 'General' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id as any)}
                    className={`py-2 px-2.5 rounded-lg border text-center font-medium transition ${
                      category === item.id
                        ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] dark:border-blue-500 dark:bg-blue-950 dark:text-blue-300'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F172A] dark:text-slate-300 mb-1">
                How helpful is this revision app?
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-amber-400 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`h-5 w-5 ${
                        star <= rating ? 'fill-amber-400' : 'stroke-gray-300 dark:stroke-slate-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F172A] dark:text-slate-300 mb-1">
                Your Feedback / Syllabus Suggestion <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share any chapter notes clarifications, exercise suggestions, or bugs..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-xs text-[#0F172A] focus:border-[#2563EB] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-slate-300 mb-1">
                  Name / Student Handle (Optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Form 3 Student"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-2 text-xs text-[#0F172A] focus:border-[#2563EB] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] dark:text-slate-300 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="For follow-up updates"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-2 text-xs text-[#0F172A] focus:border-[#2563EB] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#2563EB] text-xs font-semibold text-white shadow-xs hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Submit Feedback</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

