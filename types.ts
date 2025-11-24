export enum PledgeType {
  FLAT = 'FLAT',
  PER_LAP = 'PER_LAP',
}

export interface Pledge {
  id: string;
  name: string;
  amount: number;
  type: PledgeType;
  message?: string;
  date: string;
  tier?: string;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface TrainingLog {
  id: string;
  date: string;
  activity: string;
  miles: number;
  duration: string; // "1h 30m"
  pace?: string;
  notes: string;
  reflection?: string;
  mood: 'great' | 'good' | 'hard' | 'recovery';
  imageUrl?: string;
  comments?: Comment[];
}

export interface SponsorTier {
  name: string;
  minAmount: number;
  benefits: string[];
  color: string;
  textColor: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}