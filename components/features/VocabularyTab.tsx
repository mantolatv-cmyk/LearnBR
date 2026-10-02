'use client';

import React, { useState } from 'react';
import { BookOpen, Eye, EyeOff, Volume2, Sparkles } from 'lucide-react';
import { VocabularyItem } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';
import { useProgress } from '@/hooks/useProgress';

interface VocabularyTabProps {
  items: VocabularyItem[];
  scenarioId: string;
}

type LevelType = 'ALL' | 'A1' | 'A2' | 'B1';

export function VocabularyTab({ items, scenarioId }: VocabularyTabProps) {
  const [selectedLevel, setSelectedLevel] = useState<LevelType>('ALL');
  const [cardLevelOverrides, setCardLevelOverrides] = useState<Record<string, 'A1' | 'A2' | 'B1'>>({});
  const [revealedWords, setRevealedWords] = useState<Record<string, boolean>>({});
  const { speak, isSpeaking, currentText } = useAudio();
  const { getNote, saveNote } = useProgress();

  const handleSelectLevel = (lvl: LevelType) => {
    setSelectedLevel(lvl);
    // Reset manual card overrides so all cards adapt to the chosen global filter
    setCardLevelOverrides({});
  };

  const toggleReveal = (wordKey: string) => {
    setRevealedWords((prev) => ({
      ...prev,
      [wordKey]: prev[wordKey] !== undefined ? !prev[wordKey] : false,
    }));
  };

  // Counts for each level badge
  const countA1 = items.filter((item) => Boolean(item.levels?.A1)).length;
  const countA2 = items.filter((item) => Boolean(item.levels?.A2)).length;
  const countB1 = items.filter((item) => Boolean(item.levels?.B1)).length;

  const filteredItems = items.filter((item) => {
    if (selectedLevel === 'ALL') return true;
    if (selectedLevel === 'A1') return Boolean(item.levels?.A1);
    if (selectedLevel === 'A2') return Boolean(item.levels?.A2);
    if (selectedLevel === 'B1') return Boolean(item.levels?.B1);
    return true;
  });

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="section-title !mb-0 flex items-center gap-2">
            <span className="section-title-icon">
              <BookOpen size={22} />
            </span>
            Essential Vocabulary
          </h2>
          <p className="section-subtitle mt-1">
            Filter phrases by CEFR difficulty (A1, A2, B1) and compare how sentences evolve in complexity.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex bg-gray-100 p-1.5 rounded-xl self-stretch sm:self-auto overflow-x-auto shadow-inner">
          <button
            onClick={() => handleSelectLevel('ALL')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              selectedLevel === 'ALL'
                ? 'bg-white shadow text-purple-700'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            All ({items.length})
          </button>
          <button
            onClick={() => handleSelectLevel('A1')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              selectedLevel === 'A1'
                ? 'bg-purple-600 shadow text-white'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Level A1 ({countA1})
          </button>
          <button
            onClick={() => handleSelectLevel('A2')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              selectedLevel === 'A2'
                ? 'bg-purple-600 shadow text-white'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Level A2 ({countA2})
          </button>
          <button
            onClick={() => handleSelectLevel('B1')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
              selectedLevel === 'B1'
                ? 'bg-purple-600 shadow text-white'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Level B1 ({countB1})
          </button>
        </div>
      </div>

      <div className="vocabulary-list flex flex-col gap-4">
        {filteredItems.map((item, index) => {
          const wordKey = item.portuguese;
          const isRevealed = revealedWords[wordKey] ?? true;
          const noteKey = `${scenarioId}_vocab_${wordKey}`;

          // Determine which level example to display on this card
          const currentLevel: 'A1' | 'A2' | 'B1' =
            cardLevelOverrides[wordKey] ||
            (selectedLevel !== 'ALL' && item.levels?.[selectedLevel]
              ? selectedLevel
              : item.levels?.A1
              ? 'A1'
              : item.levels?.A2
              ? 'A2'
              : item.levels?.B1
              ? 'B1'
              : 'A1');

          const currentExample = item.levels?.[currentLevel];

          return (
            <div
              key={wordKey}
              className="vocabulary-list-item bg-white border-2 border-gray-100 rounded-2xl p-5 shadow-sm hover:border-purple-200 transition-all duration-200"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <div className="vocab-index">{index + 1}</div>
              <div className="vocab-content w-full">
                {/* Header: Portuguese Term + Controls */}
                <div className="vocab-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                    <p className="vocab-target" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                      {item.portuguese}
                    </p>
                    {item.pronunciation && (
                      <span className="text-xs text-purple-700 font-semibold bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
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
                        className={
                          isSpeaking && currentText === item.portuguese
                            ? 'animate-pulse text-purple-700'
                            : ''
                        }
                      />
                    </button>
                    <button
                      onClick={() => toggleReveal(wordKey)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 shadow-sm bg-primary text-white hover:bg-primary-dark"
                    >
                      {isRevealed ? <EyeOff size={14} /> : <Eye size={14} />}
                      {isRevealed ? 'Hide Translation' : 'Show Translation'}
                    </button>
                  </div>
                </div>

                {/* English Meaning */}
                {isRevealed && (
                  <p className="vocab-translation text-purple-900 font-bold text-base mb-3 mt-1">
                    {item.english}
                  </p>
                )}

                {/* Level Switcher on Card */}
                {item.levels && (
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100 flex-wrap">
                    <span className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                      Exemplo por Nível:
                    </span>
                    {(['A1', 'A2', 'B1'] as const).map((lvl) => {
                      const hasLvl = Boolean(item.levels?.[lvl]);
                      if (!hasLvl) return null;
                      const isActive = currentLevel === lvl;

                      return (
                        <button
                          key={lvl}
                          onClick={() =>
                            setCardLevelOverrides((prev) => ({
                              ...prev,
                              [wordKey]: lvl,
                            }))
                          }
                          className={`px-2.5 py-1 text-xs font-extrabold rounded-lg transition-all ${
                            isActive
                              ? 'bg-purple-600 text-white shadow-sm scale-105'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {lvl} {lvl === 'A1' ? '• Iniciante' : lvl === 'A2' ? '• Básico' : '• Fluência'}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Example sentence for active level */}
                {currentExample && (
                  <div className="vocab-examples mt-2.5 p-3.5 bg-gradient-to-r from-purple-50/70 to-indigo-50/40 rounded-xl border border-purple-100/80">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-200 text-purple-900">
                            Frase {currentLevel}
                          </span>
                        </div>
                        <p className="vocab-example-target font-bold text-gray-900 text-base leading-snug">
                          &quot;{currentExample.pt}&quot;
                        </p>
                        {isRevealed && (
                          <p className="vocab-example-trans text-xs text-gray-500 italic mt-1">
                            &quot;{currentExample.en}&quot;
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => speak(currentExample.pt)}
                        title={`Listen to Level ${currentLevel} sentence`}
                        className="text-purple-600 hover:text-purple-900 bg-white p-2 rounded-xl shadow-sm hover:shadow transition-all flex-shrink-0"
                      >
                        <Volume2
                          size={16}
                          className={
                            isSpeaking && currentText === currentExample.pt ? 'animate-pulse' : ''
                          }
                        />
                      </button>
                    </div>
                  </div>
                )}

                {/* Study Notes */}
                <div className="mt-3">
                  <textarea
                    defaultValue={getNote(noteKey)}
                    onChange={(e) => saveNote(noteKey, e.target.value)}
                    placeholder="Personal study notes on this phrase (saved automatically)..."
                    className="w-full p-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 transition-all resize-y min-h-[46px]"
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
