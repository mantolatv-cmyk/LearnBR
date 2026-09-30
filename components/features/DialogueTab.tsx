'use client';

import React, { useState } from 'react';
import { MessageSquare, Volume2, Play, Square } from 'lucide-react';
import { DialogueLine } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';

interface DialogueTabProps {
  lines: DialogueLine[];
}

export function DialogueTab({ lines }: DialogueTabProps) {
  const { speak, stop, isSpeaking, currentText } = useAudio();
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const playFullDialogue = async () => {
    if (isPlayingAll) {
      stop();
      setIsPlayingAll(false);
      return;
    }

    setIsPlayingAll(true);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      speak(line.portuguese);
      // Wait for approximate duration of speech
      const duration = Math.max(2000, line.portuguese.length * 80);
      await new Promise((resolve) => setTimeout(resolve, duration));
    }
    setIsPlayingAll(false);
  };

  return (
    <div className="dialogue-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon">
            <MessageSquare size={22} />
          </span>
          Authentic Dialogue
          <span className="section-subtitle">Real-life Brazilian Portuguese conversation</span>
        </h2>
        <button
          onClick={playFullDialogue}
          className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm bg-primary text-white shadow hover:bg-primary-dark transition-all"
        >
          {isPlayingAll ? (
            <>
              <Square size={16} /> Stop Audio
            </>
          ) : (
            <>
              <Play size={16} /> Play Full Dialogue
            </>
          )}
        </button>
      </div>

      <div className="dialogue-container">
        {lines.map((line, index) => {
          const isPrimary = line.isPrimary;
          const isThisSpeaking = isSpeaking && currentText === line.portuguese;

          return (
            <div
              key={index}
              className={`dialogue-bubble-wrapper ${
                isPrimary ? 'dialogue-primary' : 'dialogue-secondary'
              }`}
            >
              <div className="dialogue-avatar">
                {line.speaker.slice(0, 2).toUpperCase()}
              </div>
              <div className="dialogue-bubble">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <p className="dialogue-speaker">{line.speaker}</p>
                  <button
                    onClick={() => speak(line.portuguese)}
                    title="Listen to this line"
                    className={`transition-colors p-1 rounded-full ${
                      isPrimary
                        ? 'text-white/80 hover:text-white'
                        : 'text-gray-400 hover:text-primary'
                    }`}
                  >
                    <Volume2 size={15} className={isThisSpeaking ? 'animate-pulse' : ''} />
                  </button>
                </div>
                <p className="dialogue-text-main">{line.portuguese}</p>
                <p
                  className={`dialogue-text-sub italic ${
                    isPrimary ? 'text-white/85' : 'text-gray-600'
                  }`}
                >
                  {line.english}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
