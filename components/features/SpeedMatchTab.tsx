'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Zap,
  Flame,
  RotateCw,
  Trophy,
  Timer,
  Play,
  CheckCircle2,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { VocabularyItem } from '@/data/types';
import { soundFX } from '@/utils/soundEffects';
import { triggerConfetti } from '@/components/ui/Confetti';
import { useAudio } from '@/hooks/useAudio';

interface SpeedMatchTabProps {
  vocabulary: VocabularyItem[];
  scenarioId: string;
}

interface Tile {
  id: string;
  pairId: string;
  text: string;
  lang: 'pt' | 'en';
  isMatched: boolean;
}

export function SpeedMatchTab({ vocabulary, scenarioId }: SpeedMatchTabProps) {
  const HIGH_SCORE_KEY = `learnbr_speedmatch_best_${scenarioId}`;
  const GAME_DURATION = 60; // 60 seconds
  const PAIRS_PER_ROUND = 6;

  const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [maxCombo, setMaxCombo] = useState(1);
  const [matchedPairsCount, setMatchedPairsCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);

  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selectedTileId, setSelectedTileId] = useState<string | null>(null);
  const [wrongTileIds, setWrongTileIds] = useState<string[]>([]);
  const [justMatchedIds, setJustMatchedIds] = useState<string[]>([]);

  const { speak } = useAudio();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load high score
  useEffect(() => {
    try {
      const saved = localStorage.getItem(HIGH_SCORE_KEY);
      if (saved) {
        setBestScore(parseInt(saved, 10));
      }
    } catch {
      // ignore
    }
  }, [HIGH_SCORE_KEY]);

  // Generate round tiles
  const generateTiles = useCallback((): Tile[] => {
    // Pick random items from vocabulary
    const shuffledVocab = [...vocabulary].sort(() => Math.random() - 0.5);
    const selected = shuffledVocab.slice(0, Math.min(PAIRS_PER_ROUND, shuffledVocab.length));

    const roundTiles: Tile[] = [];
    selected.forEach((item, index) => {
      const pairId = `pair-${index}-${Date.now()}`;
      // Portuguese tile
      roundTiles.push({
        id: `pt-${index}-${Date.now()}`,
        pairId,
        text: item.portuguese.split('/')[0].trim(),
        lang: 'pt',
        isMatched: false,
      });
      // English tile
      roundTiles.push({
        id: `en-${index}-${Date.now()}`,
        pairId,
        text: item.english.split('/')[0].trim(),
        lang: 'en',
        isMatched: false,
      });
    });

    // Shuffle the tiles on screen
    return roundTiles.sort(() => Math.random() - 0.5);
  }, [vocabulary]);

  // Start game
  const startGame = () => {
    soundFX.playClickSound();
    setTimeLeft(GAME_DURATION);
    setScore(0);
    setCombo(1);
    setMaxCombo(1);
    setMatchedPairsCount(0);
    setSelectedTileId(null);
    setWrongTileIds([]);
    setJustMatchedIds([]);
    setIsNewRecord(false);
    setTiles(generateTiles());
    setGameState('playing');
  };

  // Timer loop
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // End game when time reaches 0
  useEffect(() => {
    if (timeLeft === 0 && gameState === 'playing') {
      setGameState('ended');
      soundFX.playVictorySound();
      triggerConfetti();

      // Check record
      if (score > bestScore) {
        setBestScore(score);
        setIsNewRecord(true);
        try {
          localStorage.setItem(HIGH_SCORE_KEY, score.toString());
        } catch {
          // ignore
        }
      }
    }
  }, [timeLeft, gameState, score, bestScore, HIGH_SCORE_KEY]);

  // Handle tile click
  const handleTileClick = (tile: Tile) => {
    if (tile.isMatched || wrongTileIds.includes(tile.id) || gameState !== 'playing') {
      return;
    }

    // Pronounce if clicked Portuguese tile
    if (tile.lang === 'pt') {
      speak(tile.text);
    } else {
      soundFX.playClickSound();
    }

    // First tile selected in the pair
    if (!selectedTileId) {
      setSelectedTileId(tile.id);
      return;
    }

    // Clicked the exact same tile again -> deselect
    if (selectedTileId === tile.id) {
      setSelectedTileId(null);
      return;
    }

    const firstTile = tiles.find((t) => t.id === selectedTileId);
    if (!firstTile) {
      setSelectedTileId(tile.id);
      return;
    }

    // Check if matching pair
    if (firstTile.pairId === tile.pairId && firstTile.lang !== tile.lang) {
      // MATCH!
      soundFX.playMatchSound();
      const points = 100 * combo;
      setScore((prev) => prev + points);
      setCombo((prev) => {
        const next = prev + 1;
        if (next > maxCombo) setMaxCombo(next);
        return next;
      });
      setMatchedPairsCount((prev) => prev + 1);

      setJustMatchedIds([firstTile.id, tile.id]);
      setTimeout(() => {
        setTiles((prev) =>
          prev.map((t) =>
            t.id === firstTile.id || t.id === tile.id ? { ...t, isMatched: true } : t
          )
        );
        setJustMatchedIds([]);
      }, 300);

      setSelectedTileId(null);

      // Check if all tiles in this round are matched
      const remainingUnmatched = tiles.filter(
        (t) => !t.isMatched && t.id !== firstTile.id && t.id !== tile.id
      );

      if (remainingUnmatched.length === 0) {
        // Round Clear Bonus!
        setScore((prev) => prev + 300);
        triggerConfetti();
        setTimeout(() => {
          setTiles(generateTiles());
        }, 500);
      }
    } else {
      // MISMATCH!
      soundFX.playMismatchSound();
      setWrongTileIds([firstTile.id, tile.id]);
      setCombo(1); // Reset combo

      setTimeout(() => {
        setWrongTileIds([]);
        setSelectedTileId(null);
      }, 600);
    }
  };

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <div>
          <h2 className="section-title !mb-0 flex items-center gap-2">
            <span className="section-title-icon !bg-amber-100 !text-amber-600">
              <Zap size={22} />
            </span>
            Combate Relâmpago (Speed Match)
          </h2>
          <p className="section-subtitle mt-1">
            Fast-paced 60s word rush! Match Portuguese terms with English translations to build combos and beat your high score.
          </p>
        </div>

        {bestScore > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs font-bold">
            <Trophy size={14} className="text-amber-500" />
            <span>Recorde: {bestScore} pts</span>
          </div>
        )}
      </div>

      {/* State 1: Idle Start Screen */}
      {gameState === 'idle' && (
        <div className="bg-gradient-to-br from-amber-50 via-white to-purple-50 border-2 border-amber-200 rounded-3xl p-8 sm:p-12 text-center shadow-lg">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500 text-white flex items-center justify-center shadow-xl shadow-amber-500/25 mb-6 animate-bounce-subtle">
            <Zap size={44} />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Preparado para o Desafio?
          </h3>
          <p className="text-gray-600 max-w-md mx-auto mt-2 text-sm sm:text-base leading-relaxed">
            Você tem <strong>60 segundos</strong> para associar o maior número de palavras em português aos seus significados em inglês. Quanto maior o combo consecutivo, mais pontos você ganha!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 my-8 text-xs font-semibold text-gray-600">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
              <Timer size={16} className="text-purple-600" />
              <span>60 Segundos</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
              <Flame size={16} className="text-orange-500" />
              <span>Multiplicador de Combo</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
              <Volume2 size={16} className="text-emerald-600" />
              <span>Pronúncia Nativa com Áudio</span>
            </div>
          </div>

          <button
            onClick={startGame}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 text-white font-extrabold text-lg shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Play size={22} fill="white" />
            Iniciar Desafio Relâmpago
          </button>
        </div>
      )}

      {/* State 2: Active Playing Screen */}
      {gameState === 'playing' && (
        <div>
          {/* Status HUD Header */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
            {/* Timer */}
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl transition-all ${
                  timeLeft <= 10
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {timeLeft}s
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Tempo Restante
                </p>
                <div className="w-28 sm:w-40 bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      timeLeft <= 10 ? 'bg-rose-500' : 'bg-purple-600'
                    }`}
                    style={{ width: `${(timeLeft / GAME_DURATION) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Combo */}
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-black text-sm transition-all ${
                  combo > 1
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <Flame size={18} className={combo > 1 ? 'animate-bounce' : ''} />
                <span>{combo}x Combo</span>
              </div>
            </div>

            {/* Score */}
            <div className="text-right">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Pontuação
              </p>
              <p className="text-2xl font-black text-purple-700 tracking-tight">
                {score.toLocaleString()} <span className="text-xs font-bold text-gray-500">pts</span>
              </p>
            </div>
          </div>

          {/* Tiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {tiles.map((tile) => {
              const isSelected = selectedTileId === tile.id;
              const isWrong = wrongTileIds.includes(tile.id);
              const isJustMatched = justMatchedIds.includes(tile.id);

              if (tile.isMatched) {
                return (
                  <div
                    key={tile.id}
                    className="h-24 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 opacity-40 flex items-center justify-center transition-all"
                  >
                    <CheckCircle2 size={24} className="text-emerald-500" />
                  </div>
                );
              }

              return (
                <button
                  key={tile.id}
                  onClick={() => handleTileClick(tile)}
                  className={`h-24 p-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-150 flex flex-col items-center justify-center text-center shadow-sm select-none active:scale-95 ${
                    isWrong
                      ? 'bg-rose-100 border-2 border-rose-500 text-rose-900 animate-shake ring-4 ring-rose-200'
                      : isJustMatched
                      ? 'bg-emerald-100 border-2 border-emerald-500 text-emerald-900 scale-105 ring-4 ring-emerald-200'
                      : isSelected
                      ? 'bg-purple-600 border-2 border-purple-700 text-white shadow-lg shadow-purple-500/25 scale-105 ring-4 ring-purple-200'
                      : tile.lang === 'pt'
                      ? 'bg-gradient-to-br from-white to-purple-50/60 border-2 border-purple-100 text-gray-900 hover:border-purple-300 hover:shadow-md'
                      : 'bg-gradient-to-br from-white to-sky-50/60 border-2 border-sky-100 text-gray-900 hover:border-sky-300 hover:shadow-md'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider font-extrabold mb-1 opacity-70">
                    {tile.lang === 'pt' ? '🇧🇷 PT-BR' : '🇺🇸 EN'}
                  </span>
                  <span className="line-clamp-2 leading-tight">{tile.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* State 3: Game Ended Screen */}
      {gameState === 'ended' && (
        <div className="bg-gradient-to-br from-purple-50 via-white to-amber-50 border-2 border-purple-200 rounded-3xl p-8 sm:p-12 text-center shadow-xl animate-fade-in">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-purple-600 text-white flex items-center justify-center shadow-xl shadow-purple-600/30 mb-6">
            <Trophy size={42} className="text-amber-300" />
          </div>

          {isNewRecord && (
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider mb-4 animate-bounce">
              <Sparkles size={14} className="text-amber-600" />
              Novo Recorde Pessoal!
            </div>
          )}

          <h3 className="text-3xl font-black text-gray-900">Tempo Esgotado!</h3>
          <p className="text-gray-500 text-sm mt-1">
            {score >= 2000
              ? '🌟🌟🌟 Lendário! Reflexos e vocabulário impecáveis!'
              : score >= 1000
              ? '🌟🌟 Muito bom! Você já domina boa parte deste cenário!'
              : '🌟 Bom treino! Repita para acelerar sua velocidade de resposta.'}
          </p>

          {/* Results Grid */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto my-8">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 uppercase">Pontos</p>
              <p className="text-2xl font-black text-purple-700 mt-1">{score.toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 uppercase">Pares</p>
              <p className="text-2xl font-black text-emerald-600 mt-1">{matchedPairsCount}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 uppercase">Max Combo</p>
              <p className="text-2xl font-black text-orange-500 mt-1">{maxCombo}x</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={startGame}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base shadow-lg shadow-purple-600/25 active:scale-95 transition-all"
            >
              <RotateCw size={18} />
              Jogar Novamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
