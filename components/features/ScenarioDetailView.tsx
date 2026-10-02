'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  MessageSquare,
  Layers,
  Brain,
  SquareCheckBig,
  Mic,
  BookText,
  Sparkles,
  Check,
  Zap,
  Scale,
} from 'lucide-react';
import { Scenario } from '@/data/types';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { VocabularyTab } from '@/components/features/VocabularyTab';
import { DialogueTab } from '@/components/features/DialogueTab';
import { FlashcardsTab } from '@/components/features/FlashcardsTab';
import { QuizTab } from '@/components/features/QuizTab';
import { TrueFalseTab } from '@/components/features/TrueFalseTab';
import { SpeakingTab } from '@/components/features/SpeakingTab';
import { ReadingTab } from '@/components/features/ReadingTab';
import { BuildSentenceTab } from '@/components/features/BuildSentenceTab';
import { UsefulExpressionsTab } from '@/components/features/UsefulExpressionsTab';
import { SpeedMatchTab } from '@/components/features/SpeedMatchTab';
import { WouldYouRatherTab } from '@/components/features/WouldYouRatherTab';
import { useProgress } from '@/hooks/useProgress';
import { triggerConfetti } from '@/components/ui/Confetti';

interface ScenarioDetailViewProps {
  scenario: Scenario;
}

type TabType =
  | 'vocabulary'
  | 'dialogue'
  | 'flashcards'
  | 'quiz'
  | 'truefalse'
  | 'speaking'
  | 'reading'
  | 'buildsentence'
  | 'expressions'
  | 'speedmatch'
  | 'wouldyourather';

export function ScenarioDetailView({ scenario }: ScenarioDetailViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('vocabulary');
  const { isCompleted, toggleComplete } = useProgress();

  const completed = isCompleted(scenario.id);

  const handleMarkComplete = () => {
    if (!completed) {
      triggerConfetti();
    }
    toggleComplete(scenario.id);
  };

  return (
    <div className="scenario-page">
      <Link href="/" className="scenario-back-link">
        <ArrowLeft size={18} />
        Back to Scenarios
      </Link>

      {/* Scenario Hero */}
      <div className="scenario-hero">
        <span className="scenario-hero-icon">
          <DynamicIcon name={scenario.icon} size={44} />
        </span>
        <h1>{scenario.title}</h1>
        <p className="scenario-hero-pt">{scenario.titlePt}</p>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs-nav">
        <button
          className={`tab-btn ${activeTab === 'vocabulary' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          <BookOpen size={16} />
          Vocabulary
        </button>

        {scenario.dialogue && scenario.dialogue.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'dialogue' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('dialogue')}
          >
            <MessageSquare size={16} />
            Dialogue
          </button>
        )}

        <button
          className={`tab-btn ${activeTab === 'flashcards' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('flashcards')}
        >
          <Layers size={16} />
          Flashcards
        </button>

        {/* Speed Match Arcade Tab */}
        {scenario.vocabulary && scenario.vocabulary.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'speedmatch' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('speedmatch')}
          >
            <Zap size={16} className="text-amber-500" />
            Speed Match ⚡
          </button>
        )}

        <button
          className={`tab-btn ${activeTab === 'quiz' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <Brain size={16} />
          Quiz
        </button>

        {scenario.trueOrFalse && (
          <button
            className={`tab-btn ${activeTab === 'truefalse' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('truefalse')}
          >
            <SquareCheckBig size={16} />
            True / False
          </button>
        )}

        {scenario.speakingPractice && (
          <button
            className={`tab-btn ${activeTab === 'speaking' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
            onClick={() => setActiveTab('speaking')}
          >
            <Mic size={18} />
            Speaking
          </button>
        )}

        {scenario.reading && (
          <button
            className={`tab-btn ${activeTab === 'reading' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
            onClick={() => setActiveTab('reading')}
          >
            <BookText size={18} />
            Reading
          </button>
        )}

        {scenario.buildSentence && (
          <button
            className={`tab-btn ${activeTab === 'buildsentence' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
            onClick={() => setActiveTab('buildsentence')}
          >
            <Layers size={18} />
            Build Sentence
          </button>
        )}

        {/* Would You Rather Dilemma Tab */}
        {scenario.wouldYouRather && scenario.wouldYouRather.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'wouldyourather' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('wouldyourather')}
          >
            <Scale size={16} className="text-purple-600" />
            Você Prefere? ⚖️
          </button>
        )}

        {scenario.usefulExpressions && scenario.usefulExpressions.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'expressions' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('expressions')}
          >
            <Sparkles size={16} />
            Expressions
          </button>
        )}
      </div>

      {/* Tab Panels */}
      {activeTab === 'vocabulary' && (
        <VocabularyTab items={scenario.vocabulary} scenarioId={scenario.id} />
      )}

      {activeTab === 'dialogue' && scenario.dialogue && (
        <DialogueTab lines={scenario.dialogue} />
      )}

      {activeTab === 'flashcards' && (
        <FlashcardsTab
          items={scenario.flashcards || []}
          itemsA2={scenario.flashcardsA2}
          itemsB1={scenario.flashcardsB1}
        />
      )}

      {activeTab === 'speedmatch' && (
        <SpeedMatchTab vocabulary={scenario.vocabulary} scenarioId={scenario.id} />
      )}

      {activeTab === 'quiz' && (
        <QuizTab
          questions={scenario.quiz}
          questionsA2={scenario.quizA2}
          questionsB1={scenario.quizB1}
        />
      )}

      {activeTab === 'truefalse' && scenario.trueOrFalse && (
        <TrueFalseTab items={scenario.trueOrFalse} />
      )}

      {activeTab === 'speaking' && scenario.speakingPractice && (
        <SpeakingTab items={scenario.speakingPractice} />
      )}

      {activeTab === 'reading' && scenario.reading && (
        <ReadingTab reading={scenario.reading} />
      )}

      {activeTab === 'buildsentence' && scenario.buildSentence && (
        <BuildSentenceTab items={scenario.buildSentence} />
      )}

      {activeTab === 'wouldyourather' && scenario.wouldYouRather && (
        <WouldYouRatherTab items={scenario.wouldYouRather} />
      )}

      {activeTab === 'expressions' && scenario.usefulExpressions && (
        <UsefulExpressionsTab expressions={scenario.usefulExpressions} />
      )}

      {/* Completion Section */}
      <div className="complete-section">
        <button
          onClick={handleMarkComplete}
          className={`complete-btn ${completed ? 'complete-btn-done' : ''}`}
        >
          <Check size={20} />
          {completed ? 'Scenario Completed! Click to unmark' : 'Mark Scenario as Completed'}
        </button>
      </div>
    </div>
  );
}
