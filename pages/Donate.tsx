import React from 'react';
import { ExternalLink, ArrowRight, Heart, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Donate: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-[#2B8FBD] p-8 text-center text-white">
            <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold">Official Donation Portal</h1>
            <p className="mt-2 text-blue-100">Ensure your contribution counts.</p>
          </div>

          <div className="p-8">
            <div className="prose prose-slate max-w-none text-slate-600 mb-8">
              <p className="text-lg">
                RunRaise collects pledges to build momentum, but all financial transactions are processed directly through the <strong>Snowdrop Foundation</strong> to ensure security and tax deductibility.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-[#F7B32B] p-4 my-6 rounded-r-lg">
                <h3 className="text-[#F7B32B] font-bold text-lg mb-1 flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Important Instructions
                </h3>
                <p className="text-sm text-slate-700">
                  When donating on the official site, please look for a "Dedication" or "Notes" field and enter: 
                  <span className="font-bold block mt-1 text-slate-900">"Cong Tran - Ultra 55 Campaign"</span>
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span className="ml-3">100% Tax Deductible</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span className="ml-3">Secure Payment Processing</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <span className="ml-3">Direct Impact on Pediatric Cancer Research</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <a 
                href="https://snowdropfoundation.org/donate" 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-[#2B8FBD] hover:bg-[#206f93] transition-all hover:scale-[1.02] shadow-lg shadow-blue-200"
              >
                Proceed to SnowdropFoundation.org
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
              
              <div className="text-center pt-4">
                <p className="text-sm text-slate-500 mb-2">Haven't pledged yet?</p>
                <Link to="/pledge" className="text-[#2B8FBD] font-semibold hover:text-[#206f93] flex items-center justify-center">
                  Make a non-binding pledge first <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
           <p className="text-slate-500 text-sm">
             Already donated? <a href="#" className="underline hover:text-[#2B8FBD]">Let us know</a> so we can update the campaign tracker!
           </p>
        </div>

      </div>
    </div>
  );
};

export default Donate;