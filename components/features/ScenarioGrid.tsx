'use client';

import React from 'react';
import { Target } from 'lucide-react';
import { SCENARIOS } from '@/data/scenarios';
import { ScenarioCard } from '@/components/features/ScenarioCard';
import { useProgress } from '@/hooks/useProgress';

export function ScenarioGrid() {
  const { isCompleted, completedScenarios } = useProgress();

  return (
    <div className="main-content">
      <div className="section-header">
        <h2 className="section-header-title">
          <Target className="section-header-icon" size={24} />
          Choose a Scenario
        </h2>
        <p className="section-header-subtitle">
          Select a real-world Brazilian scenario to practice ({completedScenarios.length}/{SCENARIOS.length} completed)
        </p>
      </div>

      <div className="scenarios-grid">
        {SCENARIOS.map((scenario, index) => (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
            index={index}
            isCompleted={isCompleted(scenario.id)}
          />
        ))}
      </div>
    </div>
  );
}
