import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SCENARIOS } from '@/data/scenarios';
import { ScenarioDetailView } from '@/components/features/ScenarioDetailView';

interface ScenarioPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({
    id: s.id,
  }));
}

export function generateMetadata({ params }: ScenarioPageProps): Metadata {
  const scenario = SCENARIOS.find((s) => s.id === params.id);
  if (!scenario) {
    return {
      title: 'Scenario Not Found – LearnBR',
    };
  }

  return {
    title: `${scenario.title} (${scenario.titlePt}) – LearnBR`,
    description: scenario.description,
  };
}

export default function ScenarioPage({ params }: ScenarioPageProps) {
  const scenario = SCENARIOS.find((s) => s.id === params.id);

  if (!scenario) {
    notFound();
  }

  return <ScenarioDetailView scenario={scenario} />;
}
