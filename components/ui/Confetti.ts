'use client';

export async function triggerConfetti() {
  if (typeof window === 'undefined') return;
  try {
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6d28d9', '#00b894', '#55efc4', '#ffeaa7', '#8b5cf6'],
    });
  } catch (err) {
    console.warn('Canvas confetti could not be loaded', err);
  }
}
