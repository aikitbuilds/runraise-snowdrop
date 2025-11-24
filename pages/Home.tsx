import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, TrendingUp, Users, DollarSign, Share2 } from 'lucide-react';
import { EVENT_DATE } from '../constants';
import ShareWidget from '../components/ShareWidget';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = EVENT_DATE.getTime() - new Date().getTime();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every minute
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const goalAmount = 5000;
  const currentAmount = 2340;
  const progressPercentage = (currentAmount / goalAmount) * 100;
  
  // Stats
  const milesLogged = 156;
  const sponsorsCount = 12;

  // Dynamic share text based on template
  const shareText = `📊 ${milesLogged} miles down, ${timeLeft.days} days until the Snowdrop ULTRA! Become a sponsor:`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* In a real app, use a photo of Buffalo Run Park or Trail */}
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
            alt="Trail runner silhouette" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-[#2B8FBD]/20 border border-[#2B8FBD]/50 text-[#2B8FBD] text-sm font-bold mb-8 backdrop-blur-sm uppercase tracking-wide">
            Dec 30, 2025 - Jan 1, 2026 • Missouri City, TX
          </span>

          {/* Dynamic Countdown Timer */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
             <div className="flex flex-col items-center p-4 bg-slate-950/50 backdrop-blur-md rounded-2xl border border-slate-700 min-w-[100px]">
                <span className="text-4xl md:text-5xl font-bebas text-[#F7B32B] leading-none">{timeLeft.days}</span>
                <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-bold mt-1">Days</span>
             </div>
             <div className="flex flex-col items-center p-4 bg-slate-950/50 backdrop-blur-md rounded-2xl border border-slate-700 min-w-[100px]">
                <span className="text-4xl md:text-5xl font-bebas text-white leading-none">{timeLeft.hours}</span>
                <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-bold mt-1">Hours</span>
             </div>
             <div className="flex flex-col items-center p-4 bg-slate-950/50 backdrop-blur-md rounded-2xl border border-slate-700 min-w-[100px]">
                <span className="text-4xl md:text-5xl font-bebas text-white leading-none">{timeLeft.minutes}</span>
                <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-bold mt-1">Mins</span>
             </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight font-bebas">
            Run 55 Hours. <span className="text-[#2B8FBD]">Raise Hope.</span><br />
            Fund the Cure.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Follow Cong's journey to complete the Snowdrop ULTRA 55 and help reach a <strong>$5,000</strong> fundraising goal for pediatric cancer research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/pledge" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-[#2B8FBD] hover:bg-[#206f93] md:text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Pledge Your Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/training-log" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-600 text-base font-bold rounded-full text-slate-200 hover:bg-slate-800 hover:border-slate-500 md:text-lg transition-all"
            >
              Follow Training Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Live Stats Dashboard */}
      <div className="relative -mt-16 px-4 z-10 mb-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-6 text-center">
              <div className="text-3xl font-bebas text-[#2B8FBD] mb-1">${currentAmount.toLocaleString()}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Pledged of ${goalAmount.toLocaleString()}</div>
              <div className="mt-3 w-full bg-slate-100 rounded-full h-2">
                <div className="bg-[#2B8FBD] h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl font-bebas text-slate-800 mb-1">{sponsorsCount}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Sponsors</div>
            </div>
             <div className="p-6 text-center">
              <div className="text-3xl font-bebas text-slate-800 mb-1">{milesLogged}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Miles Logged</div>
            </div>
             <div className="p-6 text-center">
              <div className="text-3xl font-bebas text-[#F7B32B] mb-1">{timeLeft.days}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Days to Race</div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About Snowdrop ULTRA 55</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <Clock className="w-6 h-6 text-[#2B8FBD]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">55 Hours Non-Stop</h3>
                    <p className="text-slate-600">A grueling endurance test where athletes run as many miles as possible on a 0.69-mile loop.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-[#2B8FBD]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Buffalo Run Park, TX</h3>
                    <p className="text-slate-600">Missouri City, Texas. A challenging dirt and gravel course.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <Users className="w-6 h-6 text-[#2B8FBD]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">For The Kids</h3>
                    <p className="text-slate-600">Benefiting Snowdrop Foundation, dedicated to ending childhood cancer through research and scholarships.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="https://snowdropfoundation.org" target="_blank" rel="noreferrer" className="text-[#2B8FBD] font-semibold hover:underline">
                  Learn more about Snowdrop Foundation &rarr;
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#F7B32B] rounded-2xl opacity-20 transform rotate-3"></div>
              <div className="relative bg-slate-100 rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552674605-46d531d063a1?q=80&w=2069&auto=format&fit=crop"
                  alt="Runners at start line"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Section */}
      <div className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Help Spread the Word</h2>
          <p className="text-slate-600 mb-8">
            We can't reach the finish line alone. Share Cong's campaign with your network to help multiply the impact for pediatric cancer research.
          </p>
          <div className="flex justify-center">
            <ShareWidget 
              text={shareText}
              compact
              className="bg-white p-4 rounded-full shadow-sm border border-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;