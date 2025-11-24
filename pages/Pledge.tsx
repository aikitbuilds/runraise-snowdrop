import React, { useState, useEffect } from 'react';
import { PledgeType, SponsorTier } from '../types';
import { SPONSOR_TIERS } from '../constants';
import { CheckCircle, Heart, Lock, AlertCircle } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import ShareWidget from '../components/ShareWidget';

const Pledge: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    pledgeType: PledgeType.FLAT,
    amount: '',
    message: '',
    paymentPreference: 'snowdrop_direct',
    agreedToTerms: false,
    anonymous: false
  });

  // Pre-fill from URL params
  useEffect(() => {
    const tierName = searchParams.get('tier');
    const amountParam = searchParams.get('amount');
    if (amountParam) {
        setFormData(prev => ({...prev, amount: amountParam}));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setStep('success'), 500);
  };

  const currentTier = SPONSOR_TIERS.slice().reverse().find(t => Number(formData.amount) >= t.minAmount && formData.pledgeType === PledgeType.FLAT);

  if (step === 'success') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Pledge Recorded!</h2>
        <p className="text-lg text-slate-600 mb-8">
          Thank you for supporting Cong's run and the Snowdrop Foundation.
        </p>
        
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 w-full text-left">
           <h3 className="font-bold text-[#2B8FBD] mb-2">Next Steps:</h3>
           <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex gap-2"><span className="font-bold">1.</span> You will receive a confirmation email shortly.</li>
              <li className="flex gap-2"><span className="font-bold">2.</span> Add Dec 30-Jan 1 to your calendar to follow the race.</li>
              <li className="flex gap-2"><span className="font-bold">3.</span> If you chose to donate directly now, click below.</li>
           </ul>
        </div>

        <div className="mb-8 w-full">
           <h4 className="text-sm font-bold text-slate-500 uppercase mb-3">Challenge a Friend</h4>
           <div className="flex justify-center">
             <ShareWidget 
               text={`🏃 I just pledged to support Cong's Snowdrop 55 run! Join me in funding pediatric cancer research:`}
               compact 
             />
           </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
           <Link to="/donate" className="flex-1 py-3 px-6 bg-[#2B8FBD] text-white rounded-lg font-bold hover:bg-[#206f93] transition-colors">
              Make Payment Now
           </Link>
           <button onClick={() => setStep('form')} className="flex-1 py-3 px-6 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50">
              Submit Another Pledge
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-4">
          <Heart className="w-6 h-6 text-[#2B8FBD]" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Make a Pledge</h1>
        <p className="text-slate-600 mt-2">Commit to support Cong's Snowdrop 55 run. <br/> <span className="text-slate-400 text-sm">No payment processing on this form.</span></p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Contact */}
          <div className="space-y-4">
             <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Your Details</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full rounded-lg border-slate-300 border px-3 py-2 text-slate-900 focus:ring-[#2B8FBD] focus:border-[#2B8FBD]"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full rounded-lg border-slate-300 border px-3 py-2 text-slate-900 focus:ring-[#2B8FBD] focus:border-[#2B8FBD]"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">Organization / Company (Optional)</label>
              <input 
                type="text" 
                id="organization"
                className="w-full rounded-lg border-slate-300 border px-3 py-2 text-slate-900 focus:ring-[#2B8FBD] focus:border-[#2B8FBD]"
                value={formData.organization}
                onChange={(e) => setFormData({...formData, organization: e.target.value})}
              />
            </div>
             <div className="flex items-center">
                <input
                    id="anonymous"
                    type="checkbox"
                    className="h-4 w-4 text-[#2B8FBD] focus:ring-[#2B8FBD] border-slate-300 rounded"
                    checked={formData.anonymous}
                    onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-slate-600">
                    Make my pledge anonymous on the public board
                </label>
             </div>
          </div>

          {/* Section 2: Pledge */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Pledge Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({...formData, pledgeType: PledgeType.FLAT})}
                className={`p-4 rounded-xl border-2 text-left transition-all relative ${
                  formData.pledgeType === PledgeType.FLAT 
                    ? 'border-[#2B8FBD] bg-blue-50 ring-1 ring-[#2B8FBD]' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {formData.pledgeType === PledgeType.FLAT && <div className="absolute top-2 right-2 text-[#2B8FBD]"><CheckCircle className="w-5 h-5"/></div>}
                <div className="font-bold text-slate-900">Flat Donation</div>
                <div className="text-xs text-slate-500 mt-1">One-time amount.</div>
              </button>
              <button
                type="button"
                onClick={() => setFormData({...formData, pledgeType: PledgeType.PER_LAP})}
                className={`p-4 rounded-xl border-2 text-left transition-all relative ${
                  formData.pledgeType === PledgeType.PER_LAP 
                    ? 'border-[#2B8FBD] bg-blue-50 ring-1 ring-[#2B8FBD]' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {formData.pledgeType === PledgeType.PER_LAP && <div className="absolute top-2 right-2 text-[#2B8FBD]"><CheckCircle className="w-5 h-5"/></div>}
                <div className="font-bold text-slate-900">Per Lap Challenge</div>
                <div className="text-xs text-slate-500 mt-1">Amount per 0.69 mi lap.</div>
              </button>
            </div>

            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-slate-700 mb-1">
                {formData.pledgeType === PledgeType.FLAT ? 'Total Pledge Amount ($)' : 'Amount Per Lap ($)'}
                </label>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-slate-500 font-bold">$</span>
                </div>
                <input
                    type="number"
                    id="amount"
                    min="1"
                    required
                    className="w-full rounded-lg border-slate-300 border pl-7 pr-3 py-3 text-lg font-bold text-slate-900 focus:ring-[#2B8FBD] focus:border-[#2B8FBD]"
                    placeholder={formData.pledgeType === PledgeType.FLAT ? "100" : "5"}
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                />
                </div>
            </div>

            {/* Dynamic Tier Highlight */}
            {currentTier && (
                <div className={`p-3 rounded-lg flex items-center gap-3 ${currentTier.color} bg-opacity-20`}>
                    <div className="bg-white p-1 rounded-full"><Heart className="w-4 h-4 text-[#2B8FBD]" /></div>
                    <div className="text-sm">
                        <span className="font-bold text-slate-900">{currentTier.name} Status Unlocked!</span>
                        <span className="block text-xs text-slate-600">Includes: {currentTier.benefits[0]}</span>
                    </div>
                </div>
            )}
            
            <div>
             <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message for Cong (Optional)</label>
             <textarea 
               id="message"
               rows={2}
               className="w-full rounded-lg border-slate-300 border px-3 py-2 text-slate-900 focus:ring-[#2B8FBD] focus:border-[#2B8FBD]"
               placeholder="Run strong! We are rooting for you."
               value={formData.message}
               onChange={(e) => setFormData({...formData, message: e.target.value})}
             />
            </div>
          </div>

          {/* Section 3: Payment Pref & Terms */}
          <div className="space-y-4">
             <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Payment & Terms</h3>
             
             <div className="bg-slate-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-slate-700 mb-2">How will you fulfill this pledge?</label>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input type="radio" name="paymentPref" value="snowdrop_direct" 
                            checked={formData.paymentPreference === 'snowdrop_direct'}
                            onChange={(e) => setFormData({...formData, paymentPreference: e.target.value})}
                            className="text-[#2B8FBD] focus:ring-[#2B8FBD]" />
                        <span className="ml-2 text-sm text-slate-700">I will donate directly to Snowdrop Foundation website</span>
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="paymentPref" value="athlete_later"
                            checked={formData.paymentPreference === 'athlete_later'}
                            onChange={(e) => setFormData({...formData, paymentPreference: e.target.value})}
                            className="text-[#2B8FBD] focus:ring-[#2B8FBD]" />
                        <span className="ml-2 text-sm text-slate-700">Send me payment instructions after the race</span>
                    </label>
                </div>
             </div>

             <div className="flex items-start gap-3">
                <input
                    id="terms"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 text-[#2B8FBD] focus:ring-[#2B8FBD] border-slate-300 rounded"
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
                />
                <label htmlFor="terms" className="block text-sm text-slate-500 leading-snug">
                    I understand this is a commitment to support the Snowdrop 55 campaign. I agree to fulfill this pledge within 7 days of race completion (Jan 7, 2026).
                </label>
             </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-[#2B8FBD] hover:bg-[#206f93] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2B8FBD] transition-all hover:scale-[1.01]"
          >
            Submit Pledge
          </button>
          
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
             <Lock className="w-3 h-3" />
             <span>Information is secure. No payment taken today.</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pledge;