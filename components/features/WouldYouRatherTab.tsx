'use client';

import React, { useState } from 'react';
import {
  Scale,
  Volume2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Users,
  Compass,
} from 'lucide-react';
import { WouldYouRatherItem } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';
import { soundFX } from '@/utils/soundEffects';

interface WouldYouRatherTabProps {
  items: WouldYouRatherItem[];
}

export function WouldYouRatherTab({ items }: WouldYouRatherTabProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votes, setVotes] = useState<Record<number, 'A' | 'B'>>({});
  const { speak, isSpeaking, currentText } = useAudio();

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const userVote = votes[currentIndex];

  // Deterministic realistic simulated percentages based on index
  const basePercentages: Array<{ a: number; b: number }> = [
    { a: 73, b: 27 },
    { a: 42, b: 58 },
    { a: 65, b: 35 },
    { a: 51, b: 49 },
  ];
  const percentA = basePercentages[currentIndex % basePercentages.length].a;
  const percentB = 100 - percentA;

  const handleVote = (choice: 'A' | 'B') => {
    soundFX.playMatchSound();
    setVotes((prev) => ({
      ...prev,
      [currentIndex]: choice,
    }));
  };

  const handleNext = () => {
    soundFX.playClickSound();
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    soundFX.playClickSound();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <div>
          <h2 className="section-title !mb-0 flex items-center gap-2">
            <span className="section-title-icon !bg-purple-100 !text-purple-600">
              <Scale size={22} />
            </span>
            Você Prefere...? (Would You Rather?)
          </h2>
          <p className="section-subtitle mt-1">
            Classic Brazilian cultural dilemmas! Vote your choice, discover how Brazilians vote, and learn authentic social customs.
          </p>
        </div>

        {/* Counter badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            Dilema {currentIndex + 1} de {items.length}
          </span>
        </div>
      </div>

      {/* Main Dilemma Card */}
      <div className="bg-gradient-to-br from-white to-purple-50/40 border-2 border-purple-100 rounded-3xl p-6 sm:p-8 shadow-sm">
        {/* Question Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-purple-600 bg-purple-100/70 px-3 py-1 rounded-full">
            Dilema Cultural Brasileiro
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-3 leading-snug">
            {currentItem.questionPt}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 italic mt-1">
            &quot;{currentItem.questionEn}&quot;
          </p>
        </div>

        {/* Duel Options Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {/* Option A */}
          <div
            onClick={() => handleVote('A')}
            className={`relative rounded-2xl p-6 cursor-pointer border-2 transition-all duration-300 flex flex-col justify-between ${
              userVote === 'A'
                ? 'bg-purple-600 border-purple-700 text-white shadow-xl shadow-purple-600/25 scale-[1.02] ring-4 ring-purple-200'
                : userVote === 'B'
                ? 'bg-gray-50/80 border-gray-200 text-gray-700 opacity-80'
                : 'bg-white border-purple-100 text-gray-900 hover:border-purple-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    userVote === 'A'
                      ? 'bg-white/20 text-white'
                      : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  Opção A
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(currentItem.optionA);
                  }}
                  title="Ouvir opção"
                  className={`p-1.5 rounded-xl transition-all ${
                    userVote === 'A'
                      ? 'hover:bg-white/20 text-white'
                      : 'hover:bg-purple-50 text-purple-600'
                  }`}
                >
                  <Volume2
                    size={18}
                    className={
                      isSpeaking && currentText === currentItem.optionA ? 'animate-pulse' : ''
                    }
                  />
                </button>
              </div>

              <p className="text-lg sm:text-xl font-bold leading-snug">{currentItem.optionA}</p>
            </div>

            {/* Voting Result Bar */}
            {userVote && (
              <div className="mt-6 pt-4 border-t border-current/10">
                <div className="flex items-center justify-between text-xs font-black mb-1.5">
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {percentA}% dos Brasileiros
                  </span>
                  {userVote === 'A' && (
                    <span className="flex items-center gap-1 font-extrabold text-[11px] underline">
                      <CheckCircle2 size={13} /> Sua Escolha
                    </span>
                  )}
                </div>
                <div className="h-3 rounded-full overflow-hidden bg-black/10">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      userVote === 'A' ? 'bg-amber-400' : 'bg-purple-500'
                    }`}
                    style={{ width: `${percentA}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* VS Center Badge on Desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-purple-200 text-purple-700 font-black text-xs items-center justify-center shadow-md z-10 pointer-events-none">
            VS
          </div>

          {/* Option B */}
          <div
            onClick={() => handleVote('B')}
            className={`relative rounded-2xl p-6 cursor-pointer border-2 transition-all duration-300 flex flex-col justify-between ${
              userVote === 'B'
                ? 'bg-purple-600 border-purple-700 text-white shadow-xl shadow-purple-600/25 scale-[1.02] ring-4 ring-purple-200'
                : userVote === 'A'
                ? 'bg-gray-50/80 border-gray-200 text-gray-700 opacity-80'
                : 'bg-white border-purple-100 text-gray-900 hover:border-purple-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    userVote === 'B'
                      ? 'bg-white/20 text-white'
                      : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  Opção B
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(currentItem.optionB);
                  }}
                  title="Ouvir opção"
                  className={`p-1.5 rounded-xl transition-all ${
                    userVote === 'B'
                      ? 'hover:bg-white/20 text-white'
                      : 'hover:bg-purple-50 text-purple-600'
                  }`}
                >
                  <Volume2
                    size={18}
                    className={
                      isSpeaking && currentText === currentItem.optionB ? 'animate-pulse' : ''
                    }
                  />
                </button>
              </div>

              <p className="text-lg sm:text-xl font-bold leading-snug">{currentItem.optionB}</p>
            </div>

            {/* Voting Result Bar */}
            {userVote && (
              <div className="mt-6 pt-4 border-t border-current/10">
                <div className="flex items-center justify-between text-xs font-black mb-1.5">
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {percentB}% dos Brasileiros
                  </span>
                  {userVote === 'B' && (
                    <span className="flex items-center gap-1 font-extrabold text-[11px] underline">
                      <CheckCircle2 size={13} /> Sua Escolha
                    </span>
                  )}
                </div>
                <div className="h-3 rounded-full overflow-hidden bg-black/10">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      userVote === 'B' ? 'bg-amber-400' : 'bg-purple-500'
                    }`}
                    style={{ width: `${percentB}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cultural Note Box (Revealed after voting or always accessible) */}
        {currentItem.culturalNote && (
          <div
            className={`mt-6 p-5 rounded-2xl border transition-all duration-500 ${
              userVote
                ? 'bg-amber-50/90 border-amber-200 text-amber-950 animate-fade-in'
                : 'bg-purple-50/50 border-purple-100 text-gray-600'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-0.5">
                {userVote ? '💡' : '🔒'}
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-600" />
                  Nota Cultural do Cotidiano
                </p>
                <p className="text-xs sm:text-sm mt-1 leading-relaxed">
                  {userVote
                    ? currentItem.culturalNote
                    : 'Clique em uma das opções acima para votar e desbloquear a explicação cultural brasileira!'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-purple-100">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ArrowLeft size={16} />
            Dilema Anterior
          </button>

          <div className="flex items-center gap-1.5">
            {items.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-7 bg-purple-600'
                    : votes[idx]
                    ? 'bg-purple-300'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === items.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-600/20 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            Próximo Dilema
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
