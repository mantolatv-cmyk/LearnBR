export type CardColor =
  | 'rose'
  | 'lavender'
  | 'peach'
  | 'mint'
  | 'amber'
  | 'orange'
  | 'emerald'
  | 'sky'
  | 'indigo'
  | 'cyan'
  | 'stone'
  | 'red'
  | 'slate'
  | 'violet';

export interface VocabularyLevel {
  pt: string;
  en: string;
}

export interface VocabularyItem {
  portuguese: string;
  english: string;
  pronunciation?: string;
  levels?: {
    A1?: VocabularyLevel;
    A2?: VocabularyLevel;
    B1?: VocabularyLevel;
  };
}

export interface DialogueLine {
  speaker: string;
  portuguese: string;
  english: string;
  isPrimary: boolean;
}

export interface FlashcardItem {
  portuguese: string;
  english: string;
  example?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TrueFalseItem {
  statement: string;
  statementPt?: string;
  isTrue: boolean;
  explanation: string;
}

export interface ReadingQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ReadingLevel {
  textPt: string;
  textEn: string;
  questions: ReadingQuestion[];
}

export interface SpeakingItem {
  question: string;
  translation: string;
  tip?: string;
}

export interface BuildSentenceItem {
  portuguese: string;
  english: string;
  words: string[];
}

export interface ImageDescription {
  imageUrl: string;
  imageAlt: string;
  prompt: string;
  guidingQuestions: string[];
  vocabularyHints: string[];
  sampleResponse: string;
}

export interface WouldYouRatherItem {
  optionA: string;
  optionB: string;
  questionEn: string;
  questionPt: string;
  culturalNote?: string;
}

export interface UsefulExpression {
  expression: string;
  literalTranslation: string;
  actualMeaning: string;
  examplePt: string;
  exampleEn: string;
  culturalContext: string;
}

export interface Scenario {
  id: string;
  title: string;
  titlePt: string;
  description: string;
  descriptionPt: string;
  icon: string;
  image: string;
  color: CardColor;
  available: boolean;
  vocabulary: VocabularyItem[];
  dialogue?: DialogueLine[];
  flashcards?: FlashcardItem[];
  flashcardsA2?: FlashcardItem[];
  flashcardsB1?: FlashcardItem[];
  quiz: QuizQuestion[];
  quizA2?: QuizQuestion[];
  quizB1?: QuizQuestion[];
  trueOrFalse?: {
    part1: TrueFalseItem[];
    part2?: TrueFalseItem[];
  };
  reading?: {
    level1?: ReadingLevel;
    level2?: ReadingLevel;
  };
  speakingPractice?: {
    part1: SpeakingItem[];
    part2?: SpeakingItem[];
  };
  buildSentence?: {
    level1: BuildSentenceItem[];
    level2: BuildSentenceItem[];
  };
  imageDescription?: ImageDescription;
  wouldYouRather?: WouldYouRatherItem[];
  usefulExpressions?: UsefulExpression[];
}
