'use client';

import React, { useState } from 'react';
import { SquareCheckBig, Check, X } from 'lucide-react';
import { TrueFalseItem } from '@/data/types';

interface TrueFalseTabProps {
  items: {
    part1: TrueFalseItem[];
    part2?: TrueFalseItem[];
  };
}

export function TrueFalseTab({ items }: TrueFalseTabProps) {
  const [userAnswers, setUserAnswers] = useState<Record<number, boolean>>({});

  const list = items.part1 || [];

  const handleAnswer = (index: number, answer: boolean) => {
    if (userAnswers[index] !== undefined) return;
    setUserAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));
  };

  return (
    <div className="vocabulary-section">
      <h2 className="section-title">
        <span className="section-title-icon">
          <SquareCheckBig size={22} />
        </span>
        True or False Challenge
        <span className="section-subtitle">Determine if each statement is culturally & linguistically true</span>
      </h2>

      <div className="flex flex-col gap-4">
        {list.map((item, idx) => {
          const answered = userAnswers[idx];
          const hasAnswered = answered !== undefined;
          const isCorrect = hasAnswered && answered === item.isTrue;

          return (
            <div
              key={idx}
              className="bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm hover:border-purple-200 transition-all"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-base font-bold text-gray-800">{item.statement}</p>
                  {item.statementPt && (
                    <p className="text-sm text-gray-500 italic mt-0.5">{item.statementPt}</p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAnswer(idx, true)}
                    disabled={hasAnswered}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                      hasAnswered && item.isTrue
                        ? 'bg-green-600 text-white'
                        : hasAnswered && answered === true && !item.isTrue
                        ? 'bg-red-500 text-white'
                        : 'border border-gray-200 hover:border-green-500 hover:text-green-600'
                    }`}
                  >
                    TRUE
                  </button>
                  <button
                    onClick={() => handleAnswer(idx, false)}
                    disabled={hasAnswered}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                      hasAnswered && !item.isTrue
                        ? 'bg-green-600 text-white'
                        : hasAnswered && answered === false && item.isTrue
                        ? 'bg-red-500 text-white'
                        : 'border border-gray-200 hover:border-red-500 hover:text-red-600'
                    }`}
                  >
                    FALSE
                  </button>
                </div>
              </div>

              {hasAnswered && (
                <div
                  className={`mt-3 p-3 rounded-lg text-sm flex items-start gap-2 ${
                    isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {isCorrect ? (
                    <Check size={16} className="mt-0.5 text-green-600 flex-shrink-0" />
                  ) : (
                    <X size={16} className="mt-0.5 text-red-500 flex-shrink-0" />
                  )}
                  <span>{item.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
