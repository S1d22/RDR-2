
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { getAIAssistance } from '../services/geminiService';

const FAQs: React.FC = () => {
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    
    setLoading(true);
    const response = await getAIAssistance(aiQuery);
    setAiResponse(response || null);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-rdr-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display text-rdr-red mb-4">KNOWLEDGE BASE</h1>
          <p className="text-rdr-paper/60 font-body text-xl italic">Common questions and our Old Trail Guide assistance.</p>
        </div>

        {/* AI Guide Feature */}
        <div className="mb-16 bg-gradient-to-br from-rdr-red/20 to-black p-8 rounded-2xl border border-rdr-red/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-display text-rdr-paper mb-4 flex items-center">
              <span className="mr-3">🔥</span> ASK THE OLD TRAIL GUIDE (AI)
            </h2>
            <p className="text-rdr-paper/70 font-body mb-6">Need advice on survival or server lore? Ask our resident guide.</p>
            
            <form onSubmit={handleAiAsk} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text"
                placeholder="How do I hunt legendary animals?..."
                className="flex-grow bg-white/10 border border-white/20 px-4 py-3 rounded-lg text-white font-body outline-none focus:border-rdr-red transition-all"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
              />
              <button 
                disabled={loading}
                className="bg-rdr-red text-white px-8 py-3 rounded-xl font-display uppercase tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-50"
              >
                {loading ? 'Consulting...' : 'Ask'}
              </button>
            </form>

            {aiResponse && (
              <div className="mt-8 p-6 bg-rdr-paper text-black rounded-lg font-typewriter shadow-inner animate-in fade-in slide-in-from-top-4 duration-500">
                <p className="leading-relaxed">"{aiResponse}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Static FAQs */}
        <div className="space-y-8">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="group border-b border-rdr-paper/10 pb-8">
              <h3 className="text-2xl font-display text-rdr-red mb-4 group-hover:translate-x-2 transition-transform cursor-default">
                {faq.question}
              </h3>
              <p className="font-body text-rdr-paper/80 text-lg leading-relaxed pl-4 border-l-2 border-rdr-red/30">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
