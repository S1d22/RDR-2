
import React from 'react';
import { ASSETS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t-4 border-rdr-red/40 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-auto">
            {ASSETS.logo}
          </div>
          <div>
            <h4 className="font-display text-rdr-red font-bold uppercase">DUST PEEK</h4>
            <p className="text-rdr-paper/40 text-sm font-body">Est. 2026 • A Fan-Led RDR2 Community</p>
          </div>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-rdr-paper/60 hover:text-rdr-red transition-colors font-display text-sm tracking-widest">DISCORD</a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-rdr-paper/30 text-xs font-body max-w-xs">
            Frontier Redemption is a community project and is not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-white/5 pt-8">
        <p className="text-rdr-paper/20 text-[10px] font-display uppercase tracking-[0.2em]">OUTLAWS FOR LIFE</p>
      </div>
    </footer>
  );
};

export default Footer;
