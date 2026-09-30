'use client';

import React, { useState } from 'react';
import { BookOpen, Eye, EyeOff, Volume2 } from 'lucide-react';
import { VocabularyItem } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';
import { useProgress } from '@/hooks/useProgress';

interface VocabularyTabProps {
  items: VocabularyItem[];
  scenarioId: string;
}

export function VocabularyTab({ items, scenarioId }: VocabularyTabProps) {
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'A1' | 'A2' | 'B1'>('ALL');
  const [revealedIndices, setRevealedIndices] = useState<Record<number, boolean>>({});
  const { speak, isSpeaking, currentText } = useAudio();
  const { getNote, saveNote } = useProgress();

  const toggleReveal = (index: number) => {
    setRevealedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredItems = items.filter((item) => {
    if (selectedLevel === 'ALL') return true;
    if (selectedLevel === 'A1') return item.levels?.A1 !== undefined;
    if (selectedLevel === 'A2') return item.levels?.A2 !== undefined;
    if (selectedLevel === 'B1') return item.levels?.B1 !== undefined;
    return true;
  });

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon">
            <BookOpen size={22} />
          </span>
          Essential Vocabulary
          <span className="section-subtitle">Vocabulário Essencial (Brazilian Portuguese)</span>
        </h2>
        <div className="flex bg-gray-100 p-1 rounded-lg mt-4 sm:mt-0 overflow-x-auto">
          <button
            onClick={() => setSelectedLevel('ALL')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
              selectedLevel === 'ALL'
                ? 'bg-white shadow text-primary font-bold'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All Words
          </button>
          <button
            onClick={() => setSelectedLevel('A1')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
              selectedLevel === 'A1'
                ? 'bg-white shadow text-primary font-bold'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Level A1
          </button>
          <button
            onClick={() => setSelectedLevel('A2')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
              selectedLevel === 'A2'
                ? 'bg-white shadow text-primary font-bold'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Level A2
          </button>
          <button
            onClick={() => setSelectedLevel('B1')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
              selectedLevel === 'B1'
                ? 'bg-white shadow text-primary font-bold'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Level B1
          </button>
        </div>
      </div>

      <div className="vocabulary-list">
        {filteredItems.map((item, index) => {
          const isRevealed = revealedIndices[index] ?? true;
          const noteKey = `${scenarioId}_vocab_${index}`;
          const currentLevelExample =
            item.levels?.A1 || item.levels?.A2 || item.levels?.B1;

          return (
            <div
              key={index}
              className="vocabulary-list-item"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="vocab-index">{index + 1}</div>
              <div className="vocab-content w-full">
                <div className="vocab-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                    <p className="vocab-target" style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                      {item.portuguese}
                    </p>
                    {item.pronunciation && (
                      <span className="text-xs text-primary-light font-semibold bg-purple-50 px-2 py-0.5 rounded-full">
                        /{item.pronunciation}/
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto mt-1 sm:mt-0">
                    <button
                      onClick={() => speak(item.portuguese)}
                      title="Listen to Brazilian Portuguese pronunciation"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 hover:bg-purple-200 text-primary transition-all shadow-sm"
                    >
                      <Volume2
                        size={16}
                        className={isSpeaking && currentText === item.portuguese ? 'animate-pulse text-purple-700' : ''}
                      />
                    </button>
                    <button
                      onClick={() => toggleReveal(index)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 shadow-sm bg-primary text-white hover:bg-primary-dark"
                    >
                      {isRevealed ? <EyeOff size={14} /> : <Eye size={14} />}
                      {isRevealed ? 'Hide Translation' : 'Show Translation'}
                    </button>
                  </div>
                </div>

                {isRevealed && (
                  <p className="vocab-translation text-purple-900 font-semibold mb-2">
                    {item.english}
                  </p>
                )}

                {currentLevelExample && (
                  <div className="vocab-examples mt-2">
                    <div className="flex items-center justify-between">
                      <p className="vocab-example-target font-semibold text-gray-800">
                        &quot;{currentLevelExample.pt}&quot;
                      </p>
                      <button
                        onClick={() => speak(currentLevelExample.pt)}
                        title="Listen to full example"
                        className="text-gray-400 hover:text-primary transition-colors p-1"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                    {isRevealed && (
                      <p className="vocab-example-trans text-sm text-gray-500 italic mt-0.5">
                        &quot;{currentLevelExample.en}&quot;
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-3">
                  <textarea
                    defaultValue={getNote(noteKey)}
                    onChange={(e) => saveNote(noteKey, e.target.value)}
                    placeholder="Your study notes on this phrase (saved automatically)..."
                    className="w-full p-2 bg-gray-50/50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all resize-y min-h-[48px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
