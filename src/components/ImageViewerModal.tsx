import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Download, 
  Sun, 
  Moon, 
  Layers
} from 'lucide-react';

interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  svgContent?: string;
  caption?: string;
  learningStandard?: string;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  imageSrc,
  svgContent,
  caption,
  learningStandard
}) => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [highContrastBackdrop, setHighContrastBackdrop] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset transform when opened
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Keyboard accessibility
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setScale(prev => Math.min(prev + 0.25, 4));
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        setScale(prev => Math.max(prev - 0.25, 0.5));
      } else if (e.key === '0') {
        e.preventDefault();
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 4));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-viewer-title"
      onClick={onClose}
    >
      <div 
        ref={containerRef}
        className={`relative w-full max-w-5xl rounded-2xl overflow-hidden border shadow-2xl flex flex-col max-h-[92vh] ${
          highContrastBackdrop 
            ? 'bg-black text-white border-white/20' 
            : 'bg-slate-900 text-slate-100 border-slate-700'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar / Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 id="image-viewer-title" className="text-sm font-bold text-white tracking-wide">
                {title}
              </h2>
              {subtitle && (
                <p className="text-xs text-slate-400">
                  {subtitle} {learningStandard ? `• DSKP ${learningStandard}` : ''}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center bg-slate-800/80 rounded-xl p-1 border border-slate-700">
              <button
                onClick={handleZoomOut}
                disabled={scale <= 0.5}
                title="Zoom out (-)"
                className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300 disabled:opacity-30 transition"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                title="Reset zoom (0)"
                className="px-2.5 py-1 text-xs font-mono font-semibold text-slate-200 hover:bg-slate-700 rounded-lg transition"
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={scale >= 4}
                title="Zoom in (+)"
                className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300 disabled:opacity-30 transition"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Contrast Mode */}
            <button
              onClick={() => setHighContrastBackdrop(prev => !prev)}
              title="Toggle pure black backdrop"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 transition"
            >
              {highContrastBackdrop ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              title="Toggle fullscreen"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 transition hidden sm:block"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              title="Close viewer (Esc)"
              className="p-2 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image/Diagram Display Canvas */}
        <div 
          className={`relative flex-1 overflow-hidden p-6 flex items-center justify-center select-none ${
            isDragging ? 'cursor-grabbing' : scale > 1 ? 'cursor-grab' : 'cursor-default'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ minHeight: '380px' }}
        >
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.15s ease-out'
            }}
            className="flex items-center justify-center max-w-full max-h-full"
          >
            {svgContent ? (
              <div 
                className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-lg"
                dangerouslySetInnerHTML={{ __html: svgContent }} 
              />
            ) : imageSrc ? (
              <img 
                src={imageSrc} 
                alt={title}
                className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg pointer-events-none"
              />
            ) : (
              <div className="p-8 text-center text-slate-500 text-sm">
                No diagram preview available
              </div>
            )}
          </div>
        </div>

        {/* Caption & Instructions Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div>
            {caption && <span className="text-slate-200 font-medium">{caption}</span>}
            {!caption && <span>Interactive Form 3 curriculum visual diagram</span>}
          </div>
          <div className="flex items-center gap-3 text-slate-500 text-2xs font-mono">
            <span>Drag to pan when zoomed</span>
            <span>•</span>
            <span>+/- to zoom</span>
            <span>•</span>
            <span>Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
