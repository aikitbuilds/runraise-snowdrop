import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AthleteProfile from './pages/AthleteProfile';
import TrainingLogPage from './pages/TrainingLogPage';
import Pledge from './pages/Pledge';
import Sponsors from './pages/Sponsors';
import Donate from './pages/Donate';
import TrainingPlan from './pages/TrainingPlan';
import ChatAssistant from './components/ChatAssistant';
import { MOCK_LOGS, MOCK_PLEDGES } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/athlete/cong" element={<AthleteProfile />} />
            <Route path="/training-log" element={<TrainingLogPage />} />
            <Route path="/training-plan" element={<TrainingPlan />} />
            <Route path="/pledge" element={<Pledge />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                 <h3 className="text-white text-xl font-bebas tracking-wide mb-4">RunRaise | Snowdrop 55</h3>
                 <p className="text-sm leading-relaxed max-w-sm">
                   Empowering endurance athletes to make a difference. 
                   Cong Tran's campaign for the Snowdrop Foundation 
                   aims to turn 55 hours of running into hope for pediatric cancer patients.
                 </p>
              </div>
              <div>
                 <h3 className="text-white text-lg font-bold mb-4">Campaign</h3>
                 <ul className="space-y-2 text-sm">
                     <li><a href="#/athlete/cong" className="hover:text-white transition-colors">Athlete Profile</a></li>
                     <li><a href="#/training-log" className="hover:text-white transition-colors">Training Log</a></li>
                     <li><a href="#/sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
                 </ul>
              </div>
              <div>
                  <h3 className="text-white text-lg font-bold mb-4">Snowdrop Foundation</h3>
                  <ul className="space-y-2 text-sm">
                      <li><a href="https://snowdropfoundation.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Official Website</a></li>
                      <li><a href="https://snowdropfoundation.org/donate" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Direct Donation</a></li>
                  </ul>
              </div>
           </div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
              &copy; 2025 RunRaise for Cong Tran. All rights reserved. Not officially affiliated with Snowdrop Foundation, but built to support their mission.
           </div>
        </footer>

        {/* Global Chat Assistant - accessible on all pages */}
        <ChatAssistant logs={MOCK_LOGS} pledges={MOCK_PLEDGES} />
      </div>
    </Router>
  );
};

export default App;
