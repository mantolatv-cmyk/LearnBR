import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LearnBR – Brazilian Portuguese for Everyday Life',
    short_name: 'LearnBR',
    description:
      'Learn authentic Brazilian Portuguese through real-world cultural scenarios with gamified quizzes, 3D flashcards, and interactive audio drills.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f9fe',
    theme_color: '#6d28d9',
    orientation: 'portrait-primary',
    categories: ['education', 'languages', 'lifestyle'],
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
