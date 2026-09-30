'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Volume2, Shuffle } from 'lucide-react';
import { FlashcardItem } from '@/data/types';
import { useAudio } from '@/hooks/useAudio';

interface FlashcardsTabProps {
  items: FlashcardItem[];
  itemsA2?: FlashcardItem[];
  itemsB1?: FlashcardItem[];
}

export function FlashcardsTab({ items, itemsA2, itemsB1 }: FlashcardsTabProps) {
  const [activeDeck, setActiveDeck] = useState<'A1' | 'A2' | 'B1'>('A1');
  const [deck, setDeck] = useState<FlashcardItem[]>(items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { speak } = useAudio();

  useEffect(() => {
    if (activeDeck === 'A1') setDeck(items);
    else if (activeDeck === 'A2') setDeck(itemsA2 && itemsA2.length > 0 ? itemsA2 : items);
    else if (activeDeck === 'B1') setDeck(itemsB1 && itemsB1.length > 0 ? itemsB1 : items);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [activeDeck, items, itemsA2, itemsB1]);

  const currentCard = deck[currentIndex] || deck[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleReset = () => {
    setIsFlipped(false);
    setCurrentIndex(0);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  return (
    <div className="flashcard-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon">
            <RotateCw size={22} />
          </span>
          Interactive Flashcards
          <span className="section-subtitle">Click to flip • Test your recall</span>
        </h2>
        {(itemsA2 || itemsB1) && (
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveDeck('A1')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                activeDeck === 'A1' ? 'bg-white shadow text-primary' : 'text-gray-500'
              }`}
            >
              Deck A1
            </button>
            {itemsA2 && (
              <button
                onClick={() => setActiveDeck('A2')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  activeDeck === 'A2' ? 'bg-white shadow text-primary' : 'text-gray-500'
                }`}
              >
                Deck A2
              </button>
            )}
            {itemsB1 && (
              <button
                onClick={() => setActiveDeck('B1')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  activeDeck === 'B1' ? 'bg-white shadow text-primary' : 'text-gray-500'
                }`}
              >
                Deck B1
              </button>
            )}
          </div>
        )}
      </div>

      <div className="flashcard-container">
        <button
          onClick={handlePrev}
          className="flashcard-nav-btn"
          aria-label="Previous card"
        >
          <ArrowLeft size={20} />
        </button>

        <div
          className="flashcard-perspective"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`flashcard-inner ${isFlipped ? 'flashcard-flipped' : ''}`}>
            {/* Front: Portuguese */}
            <div className="flashcard-face flashcard-front">
              <span className="flashcard-lang-badge">PT-BR</span>
              <div className="flex items-center gap-2 mb-2">
                <p className="flashcard-text">{currentCard?.portuguese}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (currentCard?.portuguese) speak(currentCard.portuguese);
                  }}
                  className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
                  title="Pronounce Portuguese"
                >
                  <Volume2 size={20} />
                </button>
              </div>
              <p className="flashcard-hint">Click card to reveal English translation ↻</p>
            </div>

            {/* Back: English */}
            <div className="flashcard-face flashcard-back">
              <span className="flashcard-lang-badge">US English</span>
              <p className="flashcard-text">{currentCard?.english}</p>
              {currentCard?.example && (
                <p className="flashcard-example">
                  💡 {currentCard.example}
                </p>
              )}
              <p className="flashcard-hint">Click card to flip back</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="flashcard-nav-btn"
          aria-label="Next card"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="flashcard-controls">
        <button onClick={handleReset} className="flashcard-reset-btn">
          <RotateCw size={14} /> Reset
        </button>
        <span className="flashcard-counter">
          Card {currentIndex + 1} of {deck.length}
        </span>
        <button onClick={handleShuffle} className="flashcard-reset-btn">
          <Shuffle size={14} /> Shuffle
        </button>
      </div>

      <div className="flashcard-dots">
        {deck.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsFlipped(false);
              setCurrentIndex(idx);
            }}
            className={`flashcard-dot ${idx === currentIndex ? 'flashcard-dot-active' : ''}`}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
