'use client';

import React, { useState } from 'react';
import { Mic, Volume2 } from 'lucide-react';
import { SpeakingItem } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';

interface SpeakingTabProps {
  items: {
    part1: SpeakingItem[];
    part2?: SpeakingItem[];
  };
}

export function SpeakingTab({ items }: SpeakingTabProps) {
  const { speak, isSpeaking, currentText } = useAudio();
  const [activeTab, setActiveTab] = useState<'part1' | 'part2'>('part1');

  const list = activeTab === 'part1' ? items.part1 : items.part2 || items.part1;

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon">
            <Mic size={22} />
          </span>
          Speaking & Conversation Practice
          <span className="section-subtitle">Practice native Brazilian rhythm and pronunciation</span>
        </h2>
        {items.part2 && items.part2.length > 0 && (
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('part1')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                activeTab === 'part1' ? 'bg-white shadow text-primary' : 'text-gray-500'
              }`}
            >
              Part 1
            </button>
            <button
              onClick={() => setActiveTab('part2')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                activeTab === 'part2' ? 'bg-white shadow text-primary' : 'text-gray-500'
              }`}
            >
              Part 2
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {list.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm hover:border-purple-200 transition-all"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-gray-800">{item.question}</p>
                <p className="text-sm text-gray-500 italic mt-0.5">{item.translation}</p>
                {item.tip && (
                  <p className="text-xs text-primary font-semibold mt-2">
                    💡 Pronunciation Tip: {item.tip}
                  </p>
                )}
              </div>
              <button
                onClick={() => speak(item.question)}
                title="Hear native pronunciation"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-primary hover:bg-purple-100 transition-all flex-shrink-0"
              >
                <Volume2
                  size={18}
                  className={isSpeaking && currentText === item.question ? 'animate-pulse' : ''}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
