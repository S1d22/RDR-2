
import React from 'react';
import { RULES } from '../constants';

const Rules: React.FC = () => {
  const categories = Array.from(new Set(RULES.map(r => r.category)));

  return (
    <div className="min-h-screen bg-rdr-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display text-rdr-red mb-4">THE CODE OF THE WEST</h1>
          <p className="text-rdr-paper/60 font-body text-xl">Rules are what keep the frontier from falling into chaos. Read them well.</p>
        </div>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-display text-white border-b border-rdr-red/30 pb-2 mb-6 uppercase tracking-widest">{category}</h2>
            <div className="space-y-6">
              {RULES.filter(r => r.category === category).map(rule => (
                <div key={rule.id} className="p-6 bg-white/5 border-l-4 border-rdr-red hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-display text-rdr-red mb-2">{rule.title}</h3>
                  <p className="text-rdr-paper/80 font-body leading-relaxed">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 p-8 bg-rdr-red/10 border-2 border-dashed border-rdr-red/30 rounded-lg text-center">
          <p className="font-body text-rdr-paper text-lg mb-4">Failure to follow these rules will result in disciplinary action up to a permanent ban.</p>
          <p className="font-display text-rdr-red uppercase tracking-widest">Ignorance is not an excuse.</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
