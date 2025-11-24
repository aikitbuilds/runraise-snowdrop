import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Activity, Home, Award, DollarSign, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Profile', path: '/athlete/cong', icon: <Activity className="w-5 h-5" /> },
    { name: 'Log', path: '/training-log', icon: <Activity className="w-5 h-5" /> },
    { name: 'Plan', path: '/training-plan', icon: <Zap className="w-5 h-5" /> },
    { name: 'Sponsors', path: '/sponsors', icon: <Award className="w-5 h-5" /> },
    { name: 'Donate', path: '/donate', icon: <DollarSign className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-[#2B8FBD] font-bold text-xl tracking-tight">RunRaise</span>
              <span className="text-slate-400 text-sm hidden sm:block">| Snowdrop 55</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#2B8FBD] bg-blue-50'
                    : 'text-slate-600 hover:text-[#2B8FBD] hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/pledge"
              className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[#2B8FBD] hover:bg-[#206f93] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2B8FBD] transition-all hover:scale-105"
            >
              <Heart className="w-4 h-4 mr-2" />
              Pledge
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-[#2B8FBD] bg-blue-50'
                    : 'text-slate-600 hover:text-[#2B8FBD] hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/pledge"
              onClick={() => setIsOpen(false)}
              className="w-full text-center mt-4 block px-4 py-3 rounded-md text-base font-medium text-white bg-[#2B8FBD] hover:bg-[#206f93]"
            >
              Pledge Support
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
