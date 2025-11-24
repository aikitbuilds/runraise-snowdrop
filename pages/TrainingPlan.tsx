import React, { useState } from 'react';
import { Moon, Coffee, Zap, AlertTriangle, ChevronDown, ChevronUp, Clock, Activity, Play } from 'lucide-react';

const TrainingPlan: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<number | null>(1);

  const toggleWeek = (week: number) => {
    setActiveWeek(activeWeek === week ? null : week);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-[#F7B32B] selection:text-slate-900 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-950 py-16 px-4 border-b border-slate-800">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <Zap className="w-96 h-96 text-[#F7B32B]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/20">
            <AlertTriangle className="w-4 h-4" />
            Advanced Athlete Protocol
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-bebas tracking-wide">
            The <span className="text-[#F7B32B]">"Goggins"</span> 30-Day Protocol
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            You've mastered the 100-miler. The Snowdrop 55 is different. It's not a race of fitness; it's a war against <strong>Sleep Inertia</strong> and <strong>Gut Rot</strong>. This plan focuses on the "Run, Eat, Sleep, Repeat" cycle using David Goggins' 4x4x48 principles adapted for race specificity.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-10">
        
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-slate-900/90 p-6 rounded-xl border border-slate-700 shadow-xl hover:border-blue-500/50 transition-colors">
            <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Moon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Sleep Inertia Drills</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We don't sleep; we nap. The goal is to shorten the time between "Wake Up" and "Running".
              <br/><br/>
              <span className="text-blue-400 font-bold">The Drill:</span> Set alarm for 18 mins. When it rings, stand up immediately. Do 10 jumping jacks.
            </p>
          </div>
          <div className="bg-slate-900/90 p-6 rounded-xl border border-slate-700 shadow-xl hover:border-green-500/50 transition-colors">
            <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Coffee className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Simple Nutrition</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Complexity kills the gut. No fancy gels. Real food (potatoes, broth, PB&J). 
              <br/><br/>
              <span className="text-green-400 font-bold">The Rule:</span> 250 calories every hour. Chew slowly while moving.
            </p>
          </div>
          <div className="bg-slate-900/90 p-6 rounded-xl border border-slate-700 shadow-xl hover:border-[#F7B32B]/50 transition-colors">
            <div className="bg-[#F7B32B]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-[#F7B32B]" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Run/Walk/Sleep Cycle</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Relentless forward progress. The 0.69 mile loop is a trap.
              <br/><br/>
              <span className="text-[#F7B32B] font-bold">Strategy:</span> Run 4 loops. Walk 1 loop (eat/drink). Repeat until sleep gate (Night 2).
            </p>
          </div>
        </div>

        {/* Weekly Breakdown */}
        <div className="space-y-4">
          {/* Week 1 */}
          <div className={`border rounded-xl transition-all ${activeWeek === 1 ? 'bg-slate-800 border-[#F7B32B]' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}>
            <button 
              onClick={() => toggleWeek(1)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <div>
                <span className="text-[#F7B32B] font-bold text-sm uppercase tracking-wider block mb-1">Week 1: T-Minus 28 Days</span>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  The Shock Block (Simulation)
                  {activeWeek !== 1 && <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded ml-2">Show Details</span>}
                </h2>
              </div>
              {activeWeek === 1 ? <ChevronUp className="text-white" /> : <ChevronDown className="text-slate-500" />}
            </button>
            
            {activeWeek === 1 && (
              <div className="px-6 pb-6 border-t border-slate-700/50 pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-slate-300 mb-6 bg-slate-900/50 p-4 rounded-lg border-l-2 border-[#F7B32B]">
                  <b>Objective:</b> Simulate the mental fatigue of the 55-hour race using Goggins' 4x4x48 concept, condensed to 24 hours to preserve recovery for race day.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900 p-5 rounded-lg border border-red-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Play className="w-24 h-24 text-red-500"/></div>
                    <h4 className="font-bold text-red-400 text-lg flex items-center gap-2 mb-3">
                       <Zap className="w-5 h-5" /> The "4x4x24" Protocol (Friday 6PM - Saturday 6PM)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-red-500 font-bold">1.</span> Start Friday 6:00 PM. Run 4 miles.</li>
                        <li className="flex items-start gap-2"><span className="text-red-500 font-bold">2.</span> Repeat every 4 hours (10PM, 2AM, 6AM, 10AM, 2PM).</li>
                        <li className="flex items-start gap-2"><span className="text-red-500 font-bold">3.</span> <b>Total:</b> 24 Miles in 24 Hours.</li>
                      </ul>
                      <div className="bg-slate-800 p-4 rounded border border-slate-700">
                        <span className="text-xs font-bold text-slate-500 uppercase block mb-2">The Psychological Twist</span>
                        <p className="text-sm text-slate-300">
                          Between runs, you MUST shower, change into pajamas, and get into bed. 
                          You must train the act of <b>getting out of a warm bed</b> when you are tired. 
                          This breaks the "sleep inertia" wall.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900 p-3 rounded text-sm text-slate-400">
                      <span className="block text-white font-bold mb-1">Mon-Thu:</span> 
                      Recovery runs (3-5 mi) very slow. Focus on mobility and eating.
                    </div>
                    <div className="bg-slate-900 p-3 rounded text-sm text-slate-400">
                      <span className="block text-white font-bold mb-1">Sunday:</span> 
                      Total Rest. Zero impact. Sleep banking.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Week 2 */}
          <div className={`border rounded-xl transition-all ${activeWeek === 2 ? 'bg-slate-800 border-[#F7B32B]' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}>
            <button 
              onClick={() => toggleWeek(2)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <div>
                <span className="text-[#F7B32B] font-bold text-sm uppercase tracking-wider block mb-1">Week 2: T-Minus 21 Days</span>
                <h2 className="text-2xl font-bold text-white">Gut Check & Loop Boredom</h2>
              </div>
              {activeWeek === 2 ? <ChevronUp className="text-white" /> : <ChevronDown className="text-slate-500" />}
            </button>
            
            {activeWeek === 2 && (
              <div className="px-6 pb-6 border-t border-slate-700/50 pt-6">
                <p className="text-slate-300 mb-6 bg-slate-900/50 p-4 rounded-lg border-l-2 border-blue-500">
                  <b>Objective:</b> Train the stomach to accept food while moving. High volume, low intensity.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-white text-lg mb-2">Saturday: The "Boredom" 50k</h4>
                    <p className="mt-2 text-sm text-slate-400 mb-4">
                      Find a short loop (track or neighborhood block). Run 31 miles (50k). 
                      The loop mimics the 0.69 mi race course.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                       <div className="bg-slate-800 p-3 rounded text-center">
                          <span className="block text-red-400 font-bold">NO MUSIC</span>
                          <span className="text-slate-500 text-xs">First 4 hours</span>
                       </div>
                       <div className="bg-slate-800 p-3 rounded text-center">
                          <span className="block text-green-400 font-bold">250 CALS</span>
                          <span className="text-slate-500 text-xs">Every hour</span>
                       </div>
                       <div className="bg-slate-800 p-3 rounded text-center">
                          <span className="block text-blue-400 font-bold">RUN / WALK</span>
                          <span className="text-slate-500 text-xs">4 laps / 1 lap</span>
                       </div>
                    </div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-white text-lg mb-2">Sunday: The "Tired Legs" 20 Miler</h4>
                    <p className="mt-2 text-sm text-slate-400">
                      Run 20 miles on tired legs from Saturday. Practice the "Shuffle" - low knee lift, energy conservation. 
                      If you can run 20 miles when you are exhausted, you are ready.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Week 3 */}
          <div className={`border rounded-xl transition-all ${activeWeek === 3 ? 'bg-slate-800 border-[#F7B32B]' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}>
            <button 
              onClick={() => toggleWeek(3)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <div>
                <span className="text-[#F7B32B] font-bold text-sm uppercase tracking-wider block mb-1">Week 3: T-Minus 14 Days</span>
                <h2 className="text-2xl font-bold text-white">Sharp Taper & Circadian Shift</h2>
              </div>
              {activeWeek === 3 ? <ChevronUp className="text-white" /> : <ChevronDown className="text-slate-500" />}
            </button>
            
            {activeWeek === 3 && (
              <div className="px-6 pb-6 border-t border-slate-700/50 pt-6">
                <p className="text-slate-300 mb-6 bg-slate-900/50 p-4 rounded-lg border-l-2 border-purple-500">
                  <b>Objective:</b> Volume drops by 50%. Focus shifts to hydration status and sleep banking.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900 p-4 rounded-lg">
                    <h4 className="font-bold text-white mb-2">Workouts</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• <b>Mon-Fri:</b> 4-6 miles daily. Include 4x30sec strides to keep pop in legs.</li>
                      <li>• <b>Sat/Sun:</b> 10 miles / 6 miles back to back. Easy effort.</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="font-bold text-purple-300 flex items-center gap-2">
                       <Moon className="w-4 h-4"/> Circadian Protocol
                    </h4>
                    <p className="mt-2 text-sm text-slate-400">
                      <span className="text-white font-bold">Stop all caffeine intake now.</span> This resets your adenosine receptors so the race-day caffeine hits like a truck.
                      Go to bed 1 hour earlier than usual every night.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Week 4 */}
          <div className={`border rounded-xl transition-all ${activeWeek === 4 ? 'bg-slate-800 border-[#F7B32B]' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}>
            <button 
              onClick={() => toggleWeek(4)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <div>
                <span className="text-[#F7B32B] font-bold text-sm uppercase tracking-wider block mb-1">Week 4: Race Week</span>
                <h2 className="text-2xl font-bold text-white">The Cage</h2>
              </div>
              {activeWeek === 4 ? <ChevronUp className="text-white" /> : <ChevronDown className="text-slate-500" />}
            </button>
            
            {activeWeek === 4 && (
              <div className="px-6 pb-6 border-t border-slate-700/50 pt-6">
                <p className="text-slate-300 mb-6">
                  <b>Objective:</b> Do nothing stupid. Mobility, Eating, Sleeping. You are a caged animal waiting to be released.
                </p>
                <ul className="space-y-4 text-slate-400 text-sm">
                   <li className="flex gap-4 items-center bg-slate-900 p-3 rounded">
                      <span className="text-[#F7B32B] font-bold w-20">Mon-Wed</span> 
                      <span>20 min shakeout runs. Nothing fast. Stay off feet otherwise.</span>
                   </li>
                   <li className="flex gap-4 items-center bg-slate-900 p-3 rounded">
                      <span className="text-[#F7B32B] font-bold w-20">Thursday</span> 
                      <span>10 min run. Pack gear. Layout race kit. Double check headlamp batteries.</span>
                   </li>
                   <li className="flex gap-4 items-center bg-slate-900 p-3 rounded border border-[#F7B32B]/30">
                      <span className="text-[#F7B32B] font-bold w-20">Friday</span> 
                      <span className="text-white font-bold">Race Day. Start slow. Start slower than you think.</span>
                   </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Nutrition/Gear Quick Sheet */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">Race Nutrition Plan</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Base Hourly Intake</span> <span className="text-white font-mono">250-300 cal</span></li>
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Fluids</span> <span className="text-white font-mono">20-24oz water/hr</span></li>
              <li className="flex justify-between border-b border-slate-800 pb-2"><span>Sodium</span> <span className="text-white font-mono">500-700mg/hr</span></li>
              <li className="mt-4 p-4 bg-slate-800 rounded border-l-4 border-green-500">
                <b className="text-white block mb-2">The "Real Food" Rotation:</b>
                Hour 1: Solid Bar (Clif/Bobo's)<br/>
                Hour 2: PB&J Quarter + Pretzels<br/>
                Hour 3: Boiled Potato / Broth<br/>
                Hour 4: Liquid Calories (Tailwind)<br/>
                <span className="text-xs text-slate-500 mt-2 block">Repeat until the sun comes up.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">Gear Checklist (Loop Specific)</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                 <div className="bg-slate-800 p-1 rounded text-[#F7B32B]"><Clock className="w-3 h-3" /></div> 
                 <span><b>Cooler Strategy:</b> Label cooler clearly. One side "Day", one side "Night".</span>
              </li>
              <li className="flex items-start gap-2">
                 <div className="bg-slate-800 p-1 rounded text-[#F7B32B]"><Activity className="w-3 h-3" /></div> 
                 <span><b>The "Reset" Kit:</b> Fresh socks + shirt + toothbrush for Night 1 & Night 2. Brushing teeth wakes you up.</span>
              </li>
              <li className="flex items-start gap-2">
                 <div className="bg-slate-800 p-1 rounded text-[#F7B32B]"><AlertTriangle className="w-3 h-3" /></div> 
                 <span><b>Anti-Chafe:</b> Reapply every 4 hours. No exceptions.</span>
              </li>
              <li className="flex items-start gap-2">
                 <div className="bg-slate-800 p-1 rounded text-[#F7B32B]"><Zap className="w-3 h-3" /></div> 
                 <span><b>Backup Light:</b> Headlamp + Waist light for depth perception on the trail roots.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrainingPlan;