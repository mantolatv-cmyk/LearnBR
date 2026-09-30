'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Scenario } from '@/data/types';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

interface ScenarioCardProps {
  scenario: Scenario;
  index: number;
  isCompleted?: boolean;
}

export function ScenarioCard({ scenario, index, isCompleted = false }: ScenarioCardProps) {
  const delay = `${index * 0.07}s`;

  return (
    <Link href={`/scenario/${scenario.id}`} className="scenario-card-wrapper">
      <div
        className={`scenario-card card-${scenario.color}`}
        style={{ animationDelay: delay }}
      >
        <div className="card-image-wrapper">
          <Image
            src={scenario.image}
            alt={scenario.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="card-image"
          />
        </div>
        <div className="card-body">
          <div className="card-icon-wrapper">
            <div className="card-icon-circle">
              <DynamicIcon name={scenario.icon} size={28} className="card-main-icon" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">{scenario.title}</h3>
            <p className="card-title-pt">{scenario.titlePt}</p>
            <p className="card-description">{scenario.description}</p>
          </div>
          <div className="card-footer">
            {isCompleted ? (
              <span className="card-badge card-badge-completed">
                Completed
                <Check size={14} />
              </span>
            ) : (
              <span className="card-badge card-badge-new">
                Start
                <ArrowRight size={14} />
              </span>
            )}
          </div>
        </div>
        <div className="card-accent-bar" />
      </div>
    </Link>
  );
}
