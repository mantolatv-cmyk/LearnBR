'use client';

import React from 'react';
import Image from 'next/image';
import { GraduationCap } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <GraduationCap size={18} />
        <span>Free Brazilian Portuguese Platform</span>
      </div>
      <h1 className="hero-title">
        Learn Brazilian Portuguese for your{' '}
        <span className="hero-title-accent">Everyday Life</span>
      </h1>
      <p className="hero-subtitle">
        Practice authentic vocabulary, essential slang (gírias), and real-life dialogues across everyday Brazilian contexts. Interactive flashcards, gamified quizzes, and audio drills!
      </p>
      <div className="hero-image-wrapper">
        <Image
          src="/images/rio_hero_banner.jpg"
          alt="Breathtaking panorama of Rio de Janeiro featuring Sugarloaf Mountain and Guanabara Bay at golden hour"
          fill
          priority
          sizes="100vw"
          className="hero-image"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    </section>
  );
}
