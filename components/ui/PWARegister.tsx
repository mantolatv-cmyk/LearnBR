'use client';

import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

export function PWARegister() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => {
            console.log('[LearnBR PWA] Service Worker registered successfully:', reg.scope);
          })
          .catch((err) => {
            console.warn('[LearnBR PWA] Service Worker registration failed:', err);
          });
      });
    }

    // Handle BeforeInstallPrompt for PWA installation
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('[LearnBR PWA] User accepted the install prompt');
    }
    setDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  if (!showInstallBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-white border-2 border-purple-200 shadow-2xl rounded-2xl p-4 flex items-center justify-between gap-3 animate-bounce-subtle">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md flex-shrink-0">
          BR
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight">Install LearnBR App</p>
          <p className="text-xs text-gray-500">Practice Brazilian Portuguese offline!</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm"
        >
          <Download size={14} />
          Install
        </button>
        <button
          onClick={() => setShowInstallBanner(false)}
          className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
