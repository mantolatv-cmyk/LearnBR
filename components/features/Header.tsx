'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Globe } from 'lucide-react';

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="logo-icon">
            <BookOpen size={24} />
          </span>
          <span className="logo-text">LearnBR</span>
          <span className="logo-tagline">Brazilian Portuguese Everyday</span>
        </Link>
        <div className="lang-badge">
          <Globe size={14} />
          <span>EN / PT-BR</span>
        </div>
      </div>
    </header>
  );
}
