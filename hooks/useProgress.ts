'use client';

import { useState, useEffect } from 'react';

const COMPLETED_KEY = 'learnbr_completed_scenarios';
const NOTES_KEY_PREFIX = 'learnbr_notes_';

export function useProgress() {
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COMPLETED_KEY);
      if (saved) {
        setCompletedScenarios(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load completed scenarios from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  const toggleComplete = (scenarioId: string) => {
    setCompletedScenarios((prev) => {
      const next = prev.includes(scenarioId)
        ? prev.filter((id) => id !== scenarioId)
        : [...prev, scenarioId];
      try {
        localStorage.setItem(COMPLETED_KEY, JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save completed scenarios', e);
      }
      return next;
    });
  };

  const isCompleted = (scenarioId: string) => {
    return completedScenarios.includes(scenarioId);
  };

  const getNote = (itemKey: string): string => {
    if (typeof window === 'undefined') return '';
    try {
      return localStorage.getItem(`${NOTES_KEY_PREFIX}${itemKey}`) || '';
    } catch {
      return '';
    }
  };

  const saveNote = (itemKey: string, note: string) => {
    try {
      localStorage.setItem(`${NOTES_KEY_PREFIX}${itemKey}`, note);
    } catch (e) {
      console.error('Failed to save note', e);
    }
  };

  return {
    completedScenarios,
    isCompleted,
    toggleComplete,
    getNote,
    saveNote,
    isLoaded,
  };
}
