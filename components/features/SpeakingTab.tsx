'use client';

import React, { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  RotateCw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { SpeakingItem } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';
import {
  useSpeechRecognition,
  calculatePronunciationScore,
} from '@/hooks/useSpeechRecognition';
import { triggerConfetti } from '@/components/ui/Confetti';

interface SpeakingTabProps {
  items: {
    part1: SpeakingItem[];
    part2?: SpeakingItem[];
  };
}

interface ItemResult {
  spoken: string;
  score: number;
}

export function SpeakingTab({ items }: SpeakingTabProps) {
  const { speak, isSpeaking, currentText } = useAudio();
  const {
    startListening,
    stopListening,
    isListening,
    transcript,
    interimTranscript,
    isSupported,
    error: speechError,
    resetTranscript,
  } = useSpeechRecognition();

  const [activeTab, setActiveTab] = useState<'part1' | 'part2'>('part1');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [results, setResults] = useState<Record<string, ItemResult>>({});

  const list = activeTab === 'part1' ? items.part1 : items.part2 || items.part1;

  // Whenever a final transcript arrives for the active item, score it
  useEffect(() => {
    if (activeItemIndex !== null && transcript) {
      const currentItem = list[activeItemIndex];
      if (currentItem) {
        const itemKey = `${activeTab}-${activeItemIndex}`;
        const score = calculatePronunciationScore(currentItem.question, transcript);
        setResults((prev) => ({
          ...prev,
          [itemKey]: {
            spoken: transcript,
            score,
          },
        }));

        if (score >= 80) {
          triggerConfetti();
        }
      }
    }
  }, [transcript, activeItemIndex, activeTab, list]);

  const handleStartSpeaking = (idx: number) => {
    if (isListening && activeItemIndex === idx) {
      stopListening();
      return;
    }

    setActiveItemIndex(idx);
    resetTranscript();
    startListening('pt-BR');
  };

  const handleResetItem = (idx: number) => {
    const itemKey = `${activeTab}-${idx}`;
    setResults((prev) => {
      const next = { ...prev };
      delete next[itemKey];
      return next;
    });
    if (activeItemIndex === idx) {
      stopListening();
      resetTranscript();
      setActiveItemIndex(null);
    }
  };

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <div>
          <h2 className="section-title !mb-0">
            <span className="section-title-icon">
              <Mic size={22} />
            </span>
            Speaking & Conversation Practice
          </h2>
          <p className="section-subtitle mt-1">
            Listen to native audio and practice your Brazilian Portuguese pronunciation with instant AI feedback!
          </p>
        </div>

        {items.part2 && items.part2.length > 0 && (
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => {
                setActiveTab('part1');
                setActiveItemIndex(null);
                resetTranscript();
              }}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                activeTab === 'part1' ? 'bg-white shadow text-primary' : 'text-gray-500'
              }`}
            >
              Part 1
            </button>
            <button
              onClick={() => {
                setActiveTab('part2');
                setActiveItemIndex(null);
                resetTranscript();
              }}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                activeTab === 'part2' ? 'bg-white shadow text-primary' : 'text-gray-500'
              }`}
            >
              Part 2
            </button>
          </div>
        )}
      </div>

      {!isSupported && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
          <HelpCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Speech Recognition Note</p>
            <p className="mt-0.5 text-xs text-amber-800">
              Interactive microphone speech recognition is supported in modern browsers like Google Chrome, Microsoft Edge, and Safari. In other browsers, you can still listen to native audio drills!
            </p>
          </div>
        </div>
      )}

      {speechError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs">{speechError}</p>
        </div>
      )}

      <div className="flex flex-col gap-5">
        {list.map((item, idx) => {
          const itemKey = `${activeTab}-${idx}`;
          const result = results[itemKey];
          const isCurrentActive = activeItemIndex === idx;
          const isRecordingThis = isCurrentActive && isListening;

          return (
            <div
              key={idx}
              className={`bg-white border-2 rounded-2xl p-5 shadow-sm transition-all duration-200 ${
                isRecordingThis
                  ? 'border-purple-500 ring-4 ring-purple-100'
                  : result
                  ? result.score >= 80
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : result.score >= 50
                    ? 'border-amber-300 bg-amber-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : 'border-gray-100 hover:border-purple-200'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      Phrase {idx + 1}
                    </span>
                    {result && (
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                          result.score >= 80
                            ? 'bg-emerald-100 text-emerald-800'
                            : result.score >= 50
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {result.score >= 80 ? (
                          <>
                            <CheckCircle2 size={13} /> {result.score}% Match - Mandou bem!
                          </>
                        ) : result.score >= 50 ? (
                          <>
                            <Sparkles size={13} /> {result.score}% Match - Quase lá!
                          </>
                        ) : (
                          <>
                            <AlertCircle size={13} /> {result.score}% Match - Tente de novo
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  <p className="text-xl font-bold text-gray-900 mt-2 tracking-tight">
                    {item.question}
                  </p>
                  <p className="text-sm text-gray-500 italic mt-0.5">{item.translation}</p>

                  {item.tip && (
                    <div className="mt-2 text-xs text-primary font-medium bg-purple-50/80 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                      <span>💡</span>
                      <span>Pronunciation Tip: {item.tip}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Listen button */}
                  <button
                    onClick={() => speak(item.question)}
                    title="Hear native audio"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-purple-50 text-primary hover:bg-purple-100 active:scale-95 transition-all"
                  >
                    <Volume2
                      size={20}
                      className={
                        isSpeaking && currentText === item.question ? 'animate-pulse' : ''
                      }
                    />
                  </button>

                  {/* Speech Recognition Record Button */}
                  {isSupported && (
                    <button
                      onClick={() => handleStartSpeaking(idx)}
                      title={isRecordingThis ? 'Stop recording' : 'Speak into mic to test'}
                      className={`flex items-center justify-center w-11 h-11 rounded-xl font-semibold transition-all active:scale-95 ${
                        isRecordingThis
                          ? 'bg-red-500 text-white shadow-lg animate-pulse ring-4 ring-red-200'
                          : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-95 shadow-sm'
                      }`}
                    >
                      {isRecordingThis ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                  )}

                  {/* Reset button if result exists */}
                  {result && (
                    <button
                      onClick={() => handleResetItem(idx)}
                      title="Clear result and retry"
                      className="flex items-center justify-center w-9 h-9 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
                    >
                      <RotateCw size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Live recording status or transcript display */}
              {isRecordingThis && (
                <div className="mt-4 pt-3 border-t border-purple-100 flex items-center gap-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <div className="text-sm text-purple-900">
                    <span className="font-semibold">Ouvindo...</span> Fale agora em voz alta!
                    {interimTranscript && (
                      <p className="mt-1 text-xs italic text-gray-600">
                        &quot;{interimTranscript}...&quot;
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Feedback box after speaking */}
              {result && !isRecordingThis && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="bg-gray-50/80 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="text-xs text-gray-700">
                      <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px] mb-0.5">
                        Você disse:
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        &quot;{result.spoken}&quot;
                      </span>
                    </div>

                    <div className="w-full sm:w-48 bg-gray-200 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          result.score >= 80
                            ? 'bg-emerald-500'
                            : result.score >= 50
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${result.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
