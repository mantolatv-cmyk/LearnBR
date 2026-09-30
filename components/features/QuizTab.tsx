'use client';

import React, { useState } from 'react';
import { Brain, Check, X, ArrowRight, RotateCw, Trophy } from 'lucide-react';
import { QuizQuestion } from '@/data/types';
import { triggerConfetti } from '@/components/ui/Confetti';

interface QuizTabProps {
  questions: QuizQuestion[];
  questionsA2?: QuizQuestion[];
  questionsB1?: QuizQuestion[];
}

export function QuizTab({ questions, questionsA2, questionsB1 }: QuizTabProps) {
  const [activeLevel, setActiveLevel] = useState<'A1' | 'A2' | 'B1'>('A1');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<Array<boolean | null>>([]);

  const activeQuestions =
    activeLevel === 'A1'
      ? questions
      : activeLevel === 'A2' && questionsA2 && questionsA2.length > 0
      ? questionsA2
      : activeLevel === 'B1' && questionsB1 && questionsB1.length > 0
      ? questionsB1
      : questions;

  const currentQ = activeQuestions[currentIndex];

  const handleSelect = (idx: number) => {
    if (selectedOption !== null) return; // Already selected
    setSelectedOption(idx);
    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswersHistory((prev) => [...prev, isCorrect]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
      const finalPercentage = Math.round(((score + (selectedOption === currentQ.correctIndex ? 0 : 0)) / activeQuestions.length) * 100);
      if (finalPercentage >= 70) {
        triggerConfetti();
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setAnswersHistory([]);
  };

  const letters = ['A', 'B', 'C', 'D'];

  if (isFinished) {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    const isGreat = percentage >= 70;

    return (
      <div className="quiz-section">
        <div className={`quiz-results ${isGreat ? 'quiz-results-great' : 'quiz-results-ok'}`}>
          <div className="flex justify-center mb-3">
            <Trophy size={48} className="text-primary" />
          </div>
          <h3 className="quiz-results-title">
            {isGreat ? 'Parabéns! Excellent Job!' : 'Good Effort! Keep Practicing!'}
          </h3>
          <p className="quiz-results-score">
            You got {score} out of {activeQuestions.length} questions correct.
          </p>
          <div className="quiz-results-bar-track">
            <div
              className="quiz-results-bar-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="quiz-results-percentage">{percentage}%</p>
          <button onClick={handleRestart} className="quiz-restart-btn">
            <RotateCw size={16} /> Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon">
            <Brain size={22} />
          </span>
          Knowledge Quiz
          <span className="section-subtitle">Test your Brazilian Portuguese comprehension</span>
        </h2>
        {(questionsA2 || questionsB1) && (
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => {
                setActiveLevel('A1');
                handleRestart();
              }}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                activeLevel === 'A1' ? 'bg-white shadow text-primary' : 'text-gray-500'
              }`}
            >
              Quiz A1
            </button>
            {questionsA2 && (
              <button
                onClick={() => {
                  setActiveLevel('A2');
                  handleRestart();
                }}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  activeLevel === 'A2' ? 'bg-white shadow text-primary' : 'text-gray-500'
                }`}
              >
                Quiz A2
              </button>
            )}
            {questionsB1 && (
              <button
                onClick={() => {
                  setActiveLevel('B1');
                  handleRestart();
                }}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  activeLevel === 'B1' ? 'bg-white shadow text-primary' : 'text-gray-500'
                }`}
              >
                Quiz B1
              </button>
            )}
          </div>
        )}
      </div>

      {/* Progress Dots */}
      <div className="quiz-progress-dots">
        {activeQuestions.map((_, idx) => {
          let dotClass = 'quiz-dot-pending';
          if (idx === currentIndex) dotClass = 'quiz-dot-current';
          else if (idx < currentIndex) {
            dotClass = answersHistory[idx] ? 'quiz-dot-done' : 'bg-red-400';
          }
          return <div key={idx} className={`quiz-dot ${dotClass}`} />;
        })}
      </div>

      <div className="quiz-card">
        <p className="quiz-question-number">
          Question {currentIndex + 1} of {activeQuestions.length}
        </p>
        <h3 className="quiz-question">{currentQ.question}</h3>

        <div className="quiz-options">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctIndex;
            let optionStateClass = '';

            if (selectedOption !== null) {
              if (isCorrect) optionStateClass = 'quiz-option-correct';
              else if (isSelected) optionStateClass = 'quiz-option-wrong';
              else optionStateClass = 'quiz-option-disabled';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={selectedOption !== null}
                className={`quiz-option ${optionStateClass}`}
              >
                <span className="quiz-option-letter">{letters[idx]}</span>
                <span className="quiz-option-text">{option}</span>
                {selectedOption !== null && isCorrect && (
                  <Check size={18} className="text-green-600 ml-auto" />
                )}
                {selectedOption !== null && isSelected && !isCorrect && (
                  <X size={18} className="text-red-500 ml-auto" />
                )}
              </button>
            );
          })}
        </div>

        {selectedOption !== null && (
          <div
            className={`quiz-explanation ${
              selectedOption === currentQ.correctIndex
                ? 'quiz-explanation-correct'
                : 'quiz-explanation-wrong'
            }`}
          >
            <div className="quiz-explanation-label">
              {selectedOption === currentQ.correctIndex ? (
                <>
                  <Check size={16} className="text-green-600 inline" /> Correct!
                </>
              ) : (
                <>
                  <X size={16} className="text-red-500 inline" /> Explanation:
                </>
              )}
            </div>
            <p className="quiz-explanation-text">{currentQ.explanation}</p>
          </div>
        )}

        {selectedOption !== null && (
          <button onClick={handleNext} className="quiz-next-btn">
            {currentIndex + 1 < activeQuestions.length ? 'Next Question' : 'See Results'}
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
