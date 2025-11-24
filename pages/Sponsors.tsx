import React from 'react';
import { MOCK_PLEDGES, SPONSOR_TIERS } from '../constants';
import { Link } from 'react-router-dom';
import { Check, Heart } from 'lucide-react';
import ShareWidget from '../components/ShareWidget';

const Sponsors: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Sponsorship Opportunities</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Partner with Cong for the Snowdrop ULTRA 55. <br/>
            All proceeds go directly to pediatric cancer research.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SPONSOR_TIERS.map((tier) => (
            <div key={tier.name} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col relative hover:shadow-lg transition-all hover:-translate-y-1">
               <div className={`h-2 w-full ${tier.color}`}></div>
               <div className="p-6 flex-1">
                 <h3 className={`text-lg font-bold ${tier.textColor}`}>{tier.name}</h3>
                 <p className="mt-2 flex items-baseline">
                   <span className="text-3xl font-bebas text-slate-900">${tier.minAmount}</span>
                   <span className="ml-1 text-slate-500 text-sm">/ pledge</span>
                 </p>
                 <ul className="mt-6 space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                           <div className="flex-shrink-0 mt-0.5">
                             <Check className="h-4 w-4 text-green-500" />
                           </div>
                           <p className="ml-3 text-xs text-slate-600 leading-snug">{benefit}</p>
                        </li>
                    ))}
                 </ul>
               </div>
               <div className="p-6 bg-slate-50 border-t border-slate-100">
                 <Link 
                   to={`/pledge?tier=${encodeURIComponent(tier.name)}&amount=${tier.minAmount}`}
                   className={`w-full block text-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white ${tier.color.replace('/10', '').replace('/20', '')} hover:opacity-90`}
                 >
                   Select Tier
                 </Link>
               </div>
            </div>
          ))}
        </div>

        {/* Why Sponsor Section */}
        <div className="bg-[#2B8FBD] rounded-3xl p-8 md:p-12 text-white mb-20 text-center relative overflow-hidden">
           <div className="relative z-10">
              <Heart className="w-12 h-12 mx-auto mb-6 text-[#F7B32B]" />
              <h2 className="text-3xl font-bold mb-4">Why Sponsor?</h2>
              <p className="max-w-2xl mx-auto text-blue-100 mb-8 leading-relaxed">
                Sponsoring this run isn't just about a logo on a website. It's about funding the cure. 
                Snowdrop Foundation provides scholarships for college bound pediatric cancer survivors 
                and funds research to terminate pediatric cancer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/pledge" className="bg-white text-[#2B8FBD] px-8 py-3 rounded-full font-bold hover:bg-[#F7B32B] hover:text-white transition-colors">
                    Make a Pledge Today
                </Link>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                   <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-blue-100">Tell a friend:</span>
                      <ShareWidget 
                        compact 
                        text="💙 Every mile = hope for kids battling cancer. Join me in supporting @SnowdropFdn:" 
                      />
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Pledge Board */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-6 border-b border-slate-100 flex justify-between items-center">
             <div>
               <h2 className="text-xl font-bold text-slate-900">Community Pledge Board</h2>
               <p className="text-slate-500 text-sm mt-1">Total Pledges: {MOCK_PLEDGES.length}</p>
             </div>
             <Link to="/pledge" className="text-sm font-medium text-[#2B8FBD] hover:underline">Add your name &rarr;</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Sponsor</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Tier / Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Message</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {MOCK_PLEDGES.map((pledge) => (
                  <tr key={pledge.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-slate-900">{pledge.name}</div>
                      {pledge.tier && <div className="text-xs text-[#2B8FBD]">{pledge.tier}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900">
                         {pledge.type === 'FLAT' ? `$${pledge.amount}` : `$${pledge.amount} / Lap`}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-500 italic">"{pledge.message}"</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sponsors;