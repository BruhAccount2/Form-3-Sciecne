import React, { useState } from 'react';
import { Chapter, MindmapNode } from '../../types';
import { ChevronRight, ChevronDown, ZoomIn, ZoomOut, RotateCcw, Network, Sparkles } from 'lucide-react';

interface MindmapViewProps {
  chapter: Chapter;
}

export const MindmapView: React.FC<MindmapViewProps> = ({ chapter }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [collapsedNodes, setCollapsedNodes] = useState<Record<string, boolean>>({});

  const toggleNode = (nodeId: string) => {
    setCollapsedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const expandAll = () => setCollapsedNodes({});

  const collapseAll = () => {
    const all: Record<string, boolean> = {};
    const traverse = (node: MindmapNode) => {
      if (node.children && node.children.length > 0) {
        all[node.id] = true;
        node.children.forEach(traverse);
      }
    };
    if (chapter.mindmap) {
      traverse(chapter.mindmap);
    }
    setCollapsedNodes(all);
  };

  if (!chapter.mindmap) {
    return (
      <div className="p-8 text-center text-slate-500 dark:text-slate-400">
        Mindmap is being generated for this chapter.
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Mindmap Controls Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div>
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Visual Chapter Concept Map
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Hierarchical structure of all key themes, laws, experiments, and relationships in Chapter {chapter.chapterNumber}.
          </p>
        </div>

        {/* View Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-800">
            <button
              onClick={() => setZoomLevel(prev => Math.max(70, prev - 15))}
              className="p-1 text-slate-600 hover:text-slate-900 dark:text-slate-300"
              title="Zoom Out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="px-2 font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-200">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(150, prev + 15))}
              className="p-1 text-slate-600 hover:text-slate-900 dark:text-slate-300"
              title="Zoom In"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              className="ml-1 border-l border-slate-200 p-1 text-slate-500 hover:text-slate-800 dark:border-slate-700 dark:text-slate-400"
              title="Reset Zoom"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            onClick={expandAll}
            className="rounded-lg border border-slate-200 px-2.5 py-1.5 font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="rounded-lg border border-slate-200 px-2.5 py-1.5 font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Mindmap Interactive Canvas */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-radial from-blue-50/30 to-white p-6 sm:p-8 dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-950 min-h-[450px]">
        <div 
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top left' }}
          className="transition-transform duration-200 ease-out"
        >
          {/* Root Central Node */}
          <div className="inline-block">
            <div className="rounded-2xl border-2 border-blue-600 bg-blue-600 px-5 py-3 text-white shadow-md shadow-blue-500/20 dark:border-blue-500 dark:bg-blue-500">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80 block">
                Chapter {chapter.chapterNumber} Central Theme
              </span>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                {chapter.mindmap.title}
              </h3>
            </div>

            {/* Level 1 & Child Nodes */}
            {chapter.mindmap.children && chapter.mindmap.children.length > 0 && (
              <div className="mt-6 ml-6 border-l-2 border-blue-300/80 dark:border-blue-800/80 pl-6 space-y-6">
                {chapter.mindmap.children.map((childNode) => (
                  <MindmapBranch
                    key={childNode.id}
                    node={childNode}
                    level={1}
                    collapsedNodes={collapsedNodes}
                    onToggle={toggleNode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

const MindmapBranch: React.FC<{
  node: MindmapNode;
  level: number;
  collapsedNodes: Record<string, boolean>;
  onToggle: (id: string) => void;
}> = ({ node, level, collapsedNodes, onToggle }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isCollapsed = !!collapsedNodes[node.id];

  return (
    <div className="relative">
      
      {/* Node Pill */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => hasChildren && onToggle(node.id)}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-left transition ${
            level === 1
              ? 'border border-blue-200 bg-blue-50 text-blue-900 shadow-2xs dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-200 font-bold text-sm'
              : 'border border-slate-200 bg-white text-slate-800 shadow-2xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 text-xs font-medium'
          } ${hasChildren ? 'hover:border-blue-400 dark:hover:border-blue-600 cursor-pointer' : 'cursor-default'}`}
        >
          {hasChildren && (
            <span className="text-blue-600 dark:text-blue-400">
              {isCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </span>
          )}
          <span>{node.title}</span>
          {hasChildren && isCollapsed && (
            <span className="rounded-full bg-blue-200/70 dark:bg-blue-900/80 px-1.5 py-0.2 text-[10px] font-mono text-blue-800 dark:text-blue-300">
              +{node.children!.length}
            </span>
          )}
        </button>
      </div>

      {/* Children Branches */}
      {hasChildren && !isCollapsed && (
        <div className="mt-3 ml-4 border-l-2 border-slate-200 dark:border-slate-800 pl-4 space-y-3">
          {node.children!.map((child) => (
            <MindmapBranch
              key={child.id}
              node={child}
              level={level + 1}
              collapsedNodes={collapsedNodes}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}

    </div>
  );
};
