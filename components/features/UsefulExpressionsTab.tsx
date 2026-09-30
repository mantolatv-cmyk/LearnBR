'use client';

import React from 'react';
import { Sparkles, Volume2 } from 'lucide-react';
import { UsefulExpression } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';

interface UsefulExpressionsTabProps {
  expressions: UsefulExpression[];
}

export function UsefulExpressionsTab({ expressions }: UsefulExpressionsTabProps) {
  const { speak } = useAudio();

  return (
    <div className="vocabulary-section">
      <h2 className="section-title">
        <span className="section-title-icon">
          <Sparkles size={22} />
        </span>
        Brazilian Expressions & Slang
        <span className="section-subtitle">Authentic idioms, gírias, and cultural nuances</span>
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {expressions.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:border-purple-300 transition-all"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl font-extrabold text-primary flex items-center gap-2">
                &ldquo;{exp.expression}&rdquo;
              </h3>
              <button
                onClick={() => speak(exp.expression)}
                title="Pronounce expression"
                className="p-2 rounded-full bg-purple-50 text-primary hover:bg-purple-100 transition-colors"
              >
                <Volume2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                <span className="text-xs uppercase font-bold text-gray-400 block mb-0.5">
                  Literal Translation
                </span>
                <p className="text-sm font-semibold text-gray-700">{exp.literalTranslation}</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <span className="text-xs uppercase font-bold text-emerald-600 block mb-0.5">
                  Actual Meaning
                </span>
                <p className="text-sm font-bold text-emerald-900">{exp.actualMeaning}</p>
              </div>
            </div>

            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 mb-3">
              <span className="text-xs uppercase font-bold text-primary block mb-1">
                Real-World Example
              </span>
              <p className="text-sm font-bold text-gray-800">&ldquo;{exp.examplePt}&rdquo;</p>
              <p className="text-xs text-gray-500 italic mt-0.5">&ldquo;{exp.exampleEn}&rdquo;</p>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              💡 <span className="font-semibold text-gray-700">Cultural Context:</span>{' '}
              {exp.culturalContext}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
