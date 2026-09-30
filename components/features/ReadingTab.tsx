'use client';

import React, { useState } from 'react';
import { BookText, Volume2, Eye, EyeOff, Check, X } from 'lucide-react';
import { ReadingLevel } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';

interface ReadingTabProps {
  reading: {
    level1?: ReadingLevel;
    level2?: ReadingLevel;
  };
}

export function ReadingTab({ reading }: ReadingTabProps) {
  const [level, setLevel] = useState<'level1' | 'level2'>('level1');
  const [showTranslation, setShowTranslation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const { speak } = useAudio();

  const currentReading = level === 'level1' ? reading.level1 : reading.level2 || reading.level1;

  if (!currentReading) return null;

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon">
            <BookText size={22} />
          </span>
          Reading Comprehension
          <span className="section-subtitle">Real Brazilian Portuguese narrative & cultural context</span>
        </h2>
        <div className="flex items-center gap-2">
          {reading.level2 && (
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setLevel('level1')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  level === 'level1' ? 'bg-white shadow text-primary' : 'text-gray-500'
                }`}
              >
                Level 1
              </button>
              <button
                onClick={() => setLevel('level2')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  level === 'level2' ? 'bg-white shadow text-primary' : 'text-gray-500'
                }`}
              >
                Level 2
              </button>
            </div>
          )}
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-primary transition-all"
          >
            {showTranslation ? <EyeOff size={14} /> : <Eye size={14} />}
            {showTranslation ? 'Hide English' : 'Show English'}
          </button>
        </div>
      </div>

      {/* Narrative Card */}
      <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-purple-50 px-2.5 py-1 rounded-full">
            Passage ({level === 'level1' ? 'Standard' : 'Advanced'})
          </span>
          <button
            onClick={() => speak(currentReading.textPt)}
            className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
          >
            <Volume2 size={16} /> Read Aloud
          </button>
        </div>
        <p className="text-lg leading-relaxed text-gray-800 font-medium mb-4">
          {currentReading.textPt}
        </p>
        {showTranslation && (
          <div className="pt-4 border-t border-gray-100 text-gray-600 text-sm leading-relaxed italic bg-gray-50 p-4 rounded-xl">
            {currentReading.textEn}
          </div>
        )}
      </div>

      {/* Comprehension Questions */}
      {currentReading.questions && currentReading.questions.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-gray-800">Comprehension Check:</h3>
          {currentReading.questions.map((q, qIdx) => {
            const selected = userAnswers[qIdx];
            const isAnswered = selected !== undefined;
            const isCorrect = selected === q.correctIndex;

            return (
              <div key={qIdx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="font-bold text-gray-800 mb-3">{q.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    const isThisOpt = selected === optIdx;
                    const isRightOpt = optIdx === q.correctIndex;
                    let optClass = 'border-gray-200 hover:border-purple-300';
                    if (isAnswered) {
                      if (isRightOpt) optClass = 'bg-green-50 border-green-500 text-green-800 font-bold';
                      else if (isThisOpt) optClass = 'bg-red-50 border-red-500 text-red-800';
                      else optClass = 'opacity-60 border-gray-200';
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isAnswered}
                        onClick={() =>
                          setUserAnswers((prev) => ({
                            ...prev,
                            [qIdx]: optIdx,
                          }))
                        }
                        className={`text-left p-3 rounded-lg border text-sm transition-all flex items-center justify-between ${optClass}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && isRightOpt && <Check size={16} className="text-green-600" />}
                        {isAnswered && isThisOpt && !isRightOpt && <X size={16} className="text-red-500" />}
                      </button>
                    );
                  })}
                </div>
                {isAnswered && (
                  <p className="mt-3 text-xs text-gray-600 bg-gray-50 p-2.5 rounded-lg">
                    💡 {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
