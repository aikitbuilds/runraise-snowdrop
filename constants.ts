import { Pledge, PledgeType, SponsorTier, TrainingLog } from './types';

export const EVENT_DATE = new Date('2025-12-30T07:00:00');

export const MOCK_LOGS: TrainingLog[] = [
  {
    id: '1',
    date: '2025-11-23',
    activity: 'Long Run - Buffalo Run Park',
    miles: 12.0,
    duration: '2h 15m',
    pace: '11:15/mi',
    notes: 'Long slow distance run around Buffalo Run Park loop. Tested UltraRunRaise bar at mile 8 - perfect salty-sweet balance kept energy stable. Practiced my race-day fueling plan.',
    reflection: 'Feeling strong with 37 days until race day. The recursive loop is mentally tough but I am getting used to it. Grateful for all sponsors!',
    mood: 'good',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    comments: [
      { id: 'c1', author: 'Sarah J.', text: 'Looking strong Cong! That pace is dialed in.', date: '11/23/2025' },
      { id: 'c2', author: 'Coach Mike', text: 'Great work on the fueling practice. Crucial for the 55hr.', date: '11/23/2025' }
    ]
  },
  {
    id: '2',
    date: '2025-11-20',
    activity: 'Night Gear Test',
    miles: 6.2,
    duration: '0h 58m',
    pace: '9:21/mi',
    notes: 'Running in the dark to test the new headlamp setup. The beam width is good but need to adjust the strap tightness.',
    reflection: 'Night running is peaceful but requires 100% focus on footing.',
    mood: 'great',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    comments: []
  },
  {
    id: '3',
    date: '2025-11-18',
    activity: 'Recovery Jog',
    miles: 4.0,
    duration: '0h 45m',
    pace: '11:15/mi',
    notes: 'Easy pace, focused on form and breathing after yesterday\'s strength session.',
    reflection: 'Recovery is just as important as the work.',
    mood: 'recovery',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    date: '2025-11-15',
    activity: 'Back-to-Back Simulation',
    miles: 22.0,
    duration: '4h 10m',
    pace: '11:22/mi',
    notes: 'Simulating the fatigue of the 55-hour race. Legs felt heavy at mile 15 but pushed through.',
    reflection: 'Mental game was strong today. Visualized the finish line.',
    mood: 'hard',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    comments: [
        { id: 'c3', author: 'Ben T.', text: 'Beast mode! 22 miles is huge.', date: '11/15/2025' }
    ]
  }
];

export const MOCK_PLEDGES: Pledge[] = [
  { id: '1', name: 'TechCorp Inc.', amount: 1000, type: PledgeType.FLAT, message: 'Go get em Cong!', date: '2025-10-01', tier: 'Title Sponsor' },
  { id: '2', name: 'Sarah J.', amount: 50, type: PledgeType.FLAT, message: 'Keep running!', date: '2025-10-15', tier: 'Pace Setter' },
  { id: '3', name: 'Local Coffee Shop', amount: 250, type: PledgeType.FLAT, message: 'Fueling your run.', date: '2025-10-20', tier: 'Aid Station' },
  { id: '4', name: 'Mike D.', amount: 100, type: PledgeType.FLAT, message: 'For the kids.', date: '2025-11-01', tier: 'Mile Marker' },
];

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    name: 'Pace Setter',
    minAmount: 50,
    benefits: ['Name on sponsor board', 'Training log mentions'],
    color: 'bg-slate-100',
    textColor: 'text-slate-800'
  },
  {
    name: 'Mile Marker',
    minAmount: 100,
    benefits: ['Social media shout-out', 'Finish line photo sent to you', 'Name on sponsor board'],
    color: 'bg-[#2B8FBD]/10',
    textColor: 'text-[#2B8FBD]'
  },
  {
    name: 'Aid Station',
    minAmount: 250,
    benefits: ['Branded race day support', 'Video thank you', 'Social media shout-out'],
    color: 'bg-[#F7B32B]/20',
    textColor: 'text-yellow-800'
  },
  {
    name: 'Title Sponsor',
    minAmount: 1000,
    benefits: ['Logo on athlete gear', 'Exclusive race coverage', 'Personalized Thank You Video'],
    color: 'bg-[#2B8FBD]',
    textColor: 'text-white'
  }
];

export const ATHLETE_BIO = `
Cong Michael Tran is an endurance athlete dedicated to raising awareness for childhood cancer research. 
Participating in the 13th Annual Snowdrop ULTRA 55 Hour Race & Relay in Missouri City, TX, Cong aims to run for 55 hours 
straight on a 0.69-mile loop to honor the bravery of pediatric cancer patients. His goal is to raise $5,000 for the Snowdrop Foundation.
`;