'use client';

import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-encouragement">
          <Sparkles size={18} className="footer-icon" />
          You&apos;re doing great! Keep practicing!
        </p>
        <p className="footer-encouragement-pt">
          Você está indo muito bem! Continue praticando!
        </p>
        <p className="footer-credits">
          Made with{' '}
          <Heart size={14} className="heart" fill="#e74c3c" />{' '}
          by LearnBR · Brazilian Portuguese Everyday
        </p>
      </div>
    </footer>
  );
}
