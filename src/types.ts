export interface HistoricalEvent {
  year: string;
  title: string;
  desc: string;
  icon: string;
}

export interface HistoricalFigureShort {
  name: string;
  role: string;
  bio: string;
  icon: string;
  characterKey?: string;
}

export interface HistoricalEra {
  id: string;
  title: string;
  century: string;
  years: string;
  badge: string;
  description: string;
  funFact: string;
  color: string;
  textColor: string;
  borderColor: string;
  accentBg: string;
  events: HistoricalEvent[];
  figures: HistoricalFigureShort[];
}

export interface HistoricalCharacter {
  key: string;
  name: string;
  title: string;
  eraId: string;
  avatar: string;
  color: string;
  accentBg: string;
  greeting: string;
  bio: string;
  funTrivia: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  points: number;
  badgeColor: string;
  category: "timeline" | "chat" | "quiz" | "ocean" | "poetry";
}

export interface QuizQuestion {
  id: string;
  eraId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface MapHotspot {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  description: string;
  fact: string;
  color: string;
}
