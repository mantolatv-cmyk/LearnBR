'use client';

import React, { useState } from 'react';
import { Layers, RotateCw, Check, Volume2 } from 'lucide-react';
import { BuildSentenceItem } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';

interface BuildSentenceTabProps {
  items: {
    level1: BuildSentenceItem[];
    level2?: BuildSentenceItem[];
  };
}

export function BuildSentenceTab({ items }: BuildSentenceTabProps) {
  const [level, setLevel] = useState<'level1' | 'level2'>('level1');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { speak } = useAudio();

  const currentList = level === 'level1' ? items.level1 : items.level2 || items.level1;
  const currentItem = currentList[currentIdx];

  React.useEffect(() => {
    if (currentItem) {
      // Scramble words
      const shuffled = [...currentItem.words].sort(() => Math.random() - 0.5);
      setAvailableWords(shuffled);
      setSelectedWords([]);
      setIsCorrect(null);
    }
  }, [currentItem]);

  const handlePickWord = (word: string, index: number) => {
    setSelectedWords((prev) => [...prev, word]);
    setAvailableWords((prev) => prev.filter((_, idx) => idx !== index));
    setIsCorrect(null);
  };

  const handleRemoveWord = (word: string, index: number) => {
    setAvailableWords((prev) => [...prev, word]);
    setSelectedWords((prev) => prev.filter((_, idx) => idx !== index));
    setIsCorrect(null);
  };

  const handleCheck = () => {
    const assembled = selectedWords.join(' ').trim();
    const target = currentItem.portuguese.trim();
    const correct = assembled.toLowerCase() === target.toLowerCase();
    setIsCorrect(correct);
    if (correct) {
      speak(currentItem.portuguese);
    }
  };

  const handleReset = () => {
    const shuffled = [...currentItem.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setIsCorrect(null);
  };

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon">
            <Layers size={22} />
          </span>
          Build the Sentence
          <span className="section-subtitle">Click the tiles in order to assemble the Portuguese sentence</span>
        </h2>
        {items.level2 && items.level2.length > 0 && (
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => {
                setLevel('level1');
                setCurrentIdx(0);
              }}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                level === 'level1' ? 'bg-white shadow text-primary' : 'text-gray-500'
              }`}
            >
              Level 1
            </button>
            <button
              onClick={() => {
                setLevel('level2');
                setCurrentIdx(0);
              }}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                level === 'level2' ? 'bg-white shadow text-primary' : 'text-gray-500'
              }`}
            >
              Level 2
            </button>
          </div>
        )}
      </div>

      <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm">
        {/* Target English sentence */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
            Translate into Brazilian Portuguese:
          </p>
          <p className="text-xl font-bold text-gray-800">&quot;{currentItem.english}&quot;</p>
        </div>

        {/* Selected words dropzone */}
        <div className="min-h-[64px] p-3 border-2 border-dashed border-purple-200 rounded-xl bg-purple-50/50 flex flex-wrap gap-2 items-center mb-6">
          {selectedWords.length === 0 ? (
            <span className="text-sm text-gray-400 italic">Click words below to place them here...</span>
          ) : (
            selectedWords.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handleRemoveWord(word, idx)}
                className="px-3 py-1.5 rounded-lg bg-primary text-white font-bold text-sm shadow-sm hover:bg-primary-dark transition-all"
              >
                {word}
              </button>
            ))
          )}
        </div>

        {/* Available words pool */}
        <div className="flex flex-wrap gap-2 mb-6">
          {availableWords.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handlePickWord(word, idx)}
              className="px-3.5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm border border-gray-200 shadow-sm transition-all"
            >
              {word}
            </button>
          ))}
        </div>

        {/* Verification feedback */}
        {isCorrect !== null && (
          <div
            className={`p-4 rounded-xl text-sm font-bold flex items-center justify-between mb-6 ${
              isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? <Check size={18} /> : <span>✕</span>}
              <span>
                {isCorrect
                  ? 'Perfeito! Exactly right in Brazilian Portuguese!'
                  : 'Not quite. Check the word order and try again!'}
              </span>
            </div>
            {isCorrect && (
              <button
                onClick={() => speak(currentItem.portuguese)}
                className="flex items-center gap-1 text-xs text-green-900 underline"
              >
                <Volume2 size={16} /> Listen
              </button>
            )}
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button onClick={handleReset} className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-gray-700">
            <RotateCw size={14} /> Clear
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCheck}
              disabled={selectedWords.length === 0}
              className="px-5 py-2 rounded-full font-bold text-sm bg-primary text-white hover:bg-primary-dark disabled:opacity-50 transition-all shadow-sm"
            >
              Check Sentence
            </button>
            {currentIdx + 1 < currentList.length && (
              <button
                onClick={() => {
                  setCurrentIdx((prev) => prev + 1);
                }}
                className="px-4 py-2 rounded-full font-bold text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
              >
                Next &rarr;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
