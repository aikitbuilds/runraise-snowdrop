import React from 'react';
import { ATHLETE_BIO, MOCK_LOGS } from '../constants';
import { TrendingUp, Zap, Mail, Twitter, Instagram, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShareWidget from '../components/ShareWidget';

const AthleteProfile: React.FC = () => {
  const totalMiles = MOCK_LOGS.reduce((acc, log) => acc + log.miles, 0);
  const totalHours = 12.5; 
  
  // Fundraising Stats
  const goalAmount = 5000;
  const currentAmount = 2340;
  const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Bio */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center">
            <div className="relative inline-block">
               <img 
                src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop" 
                alt="Cong Profile" 
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4 object-cover mx-auto"
              />
              <span className="absolute bottom-4 right-2 bg-[#F7B32B] text-yellow-900 text-xs font-bold px-2 py-1 rounded-md">
                Athlete
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900">Cong Michael Tran</h2>
            <p className="text-[#2B8FBD] font-medium flex items-center justify-center gap-1 mt-1">
               <span className="w-2 h-2 bg-[#2B8FBD] rounded-full"></span> Houston, TX
            </p>
            
            <div className="flex justify-center gap-4 mt-6 mb-6">
               <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600 transition-colors">
                  <Mail className="w-5 h-5" />
               </button>
               <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600 transition-colors">
                  <Twitter className="w-5 h-5" />
               </button>
               <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-600 transition-colors">
                  <Instagram className="w-5 h-5" />
               </button>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Share Profile</h4>
              <div className="flex justify-center">
                <ShareWidget 
                  text="🏃 I'm running 55 hours straight for pediatric cancer research! Follow my training and pledge your support:"
                  compact 
                />
              </div>
            </div>

            <div className="mt-6">
               <Link to="/pledge" className="w-full btn flex items-center justify-center px-4 py-3 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-[#2B8FBD] hover:bg-[#206f93] transition-transform hover:-translate-y-0.5">
                  Become a Sponsor
               </Link>
            </div>
          </div>

          {/* Goal Breakdown Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Fundraising Goal</h3>
                <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Live</div>
             </div>
             
             <div className="flex items-end gap-2 mb-2">
                <span className="text-3xl font-bebas text-slate-900">${currentAmount.toLocaleString()}</span>
                <span className="text-sm text-slate-500 mb-1">raised of ${goalAmount.toLocaleString()}</span>
             </div>
             
             {/* Progress Bar */}
             <div className="w-full bg-slate-100 rounded-full h-4 mb-2 overflow-hidden">
                <div 
                  className="bg-[#2B8FBD] h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2" 
                  style={{ width: `${progressPercentage}%` }}
                >
                  {progressPercentage > 15 && (
                    <span className="text-[10px] font-bold text-white/90">{progressPercentage.toFixed(1)}%</span>
                  )}
                </div>
             </div>
             
             <div className="flex justify-between text-xs text-slate-400 mb-6">
               <span>0%</span>
               <span>50%</span>
               <span>100%</span>
             </div>

             <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-slate-600 p-2 rounded hover:bg-slate-50 transition-colors">
                   <span className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-500"/> Direct Donations</span>
                   <span className="font-semibold">24%</span>
                </div>
                 <div className="flex justify-between items-center text-slate-600 p-2 rounded hover:bg-slate-50 transition-colors">
                   <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#F7B32B]"/> Sponsor Pledges</span>
                   <span className="font-semibold">23%</span>
                </div>
                <div className="flex justify-between items-center text-slate-400 p-2 border-t border-slate-50 mt-1">
                   <span>Remaining Needed</span>
                   <span className="font-semibold">${(goalAmount - currentAmount).toLocaleString()}</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Narrative & Stats */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
             <h2 className="text-2xl font-bold text-slate-900 mb-4">Why I'm Running</h2>
             <div className="prose prose-slate text-slate-600 leading-relaxed">
                <p>
                  Running 55 hours is nothing compared to the battle children with cancer face every single day. 
                  My journey to the Snowdrop ULTRA isn't just about endurance; it's about standing in solidarity 
                  with these brave warriors.
                </p>
                <p>
                  I chose the Snowdrop Foundation because they are committed to not only funding vital research 
                  to find a cure but also providing scholarships to pediatric cancer survivors. Every lap I run 
                  around that 0.69-mile loop represents hope.
                </p>
                <p>
                  My goal is to run <strong>150+ miles</strong> during the event. To do that, I need your support. 
                  Whether you pledge per lap to keep me moving or make a flat donation, you are part of the team.
                </p>
             </div>
          </div>

          <div className="bg-slate-900 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#2B8FBD] rounded-full opacity-20 blur-2xl"></div>
             
             <div className="flex items-center justify-between mb-6 relative z-10">
               <h2 className="text-xl font-bold flex items-center gap-2">
                 <TrendingUp className="w-5 h-5 text-[#F7B32B]" />
                 Training Stats
               </h2>
               <Link to="/training-log" className="text-sm text-[#F7B32B] hover:text-white transition-colors">
                 View Log &rarr;
               </Link>
             </div>

             <div className="grid grid-cols-3 gap-4 relative z-10">
               <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-xs text-slate-400 uppercase">Miles</div>
                  <div className="text-2xl font-bold font-bebas tracking-wide">{totalMiles.toFixed(1)}</div>
               </div>
               <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-xs text-slate-400 uppercase">Hours</div>
                  <div className="text-2xl font-bold font-bebas tracking-wide">{totalHours}h</div>
               </div>
               <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-xs text-slate-400 uppercase">Workouts</div>
                  <div className="text-2xl font-bold font-bebas tracking-wide">{MOCK_LOGS.length}</div>
               </div>
             </div>
          </div>
          
           <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 px-1">Recent Updates</h3>
              {MOCK_LOGS.slice(0, 2).map((log) => (
                <div key={log.id} className="bg-white p-5 rounded-xl border border-slate-100 flex gap-4 hover:shadow-md transition-shadow">
                   <img 
                      src={log.imageUrl} 
                      alt="Run map" 
                      className="w-24 h-24 rounded-lg object-cover bg-slate-200 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                         <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{log.date}</span>
                         <span className="text-xs text-slate-400">• {log.miles} mi</span>
                      </div>
                      <h4 className="font-bold text-slate-900">{log.activity}</h4>
                      <p className="text-sm text-slate-600 line-clamp-2 mt-1">{log.notes}</p>
                    </div>
                </div>
              ))}
            </div>

        </div>
      </div>
    </div>
  );
};

export default AthleteProfile;