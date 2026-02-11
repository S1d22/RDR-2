
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Whitelist', path: '/whitelist' },
    
  ];

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDonationModal(true);
    setIsOpen(false);
  };

  const handlePurchaseClick = () => {
    setShowDonationModal(false);
    navigate('/payments');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b-2 border-rdr-red/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="flex items-center">
                   <img
                  src="https://pngimg.com/uploads/red_dead_redemption/red_dead_redemption_PNG21.png"
                  alt="Red Dead Redemption 2"
                  className="h-14 w-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-display text-sm tracking-widest uppercase transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'text-rdr-red border-b-2 border-rdr-red' 
                      : 'text-rdr-paper hover:text-rdr-red'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={handleDonateClick}
                className="px-6 py-2 border border-rdr-gold text-rdr-gold font-display text-sm tracking-[0.2em] uppercase hover:bg-rdr-gold hover:text-black transition-all duration-300 rounded-full"
              >
                Get VIP
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-rdr-paper hover:text-rdr-red focus:outline-none"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-b-2 border-rdr-red py-6 px-6 space-y-6 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block font-display text-lg tracking-widest text-rdr-paper hover:text-rdr-red uppercase"
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={handleDonateClick}
              className="w-full text-center py-3 border-2 border-rdr-gold text-rdr-gold font-display text-lg tracking-[0.2em] uppercase hover:bg-rdr-gold hover:text-black transition-all rounded-full">
              Get VIP
            </button>
          </div>
        )}
      </nav>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
          <div className="max-w-xl w-full relative">
            <div className="bg-[#f4e4bc] p-10 text-[#2c1a12] border-[14px] border-double border-[#3d2b1f] shadow-[15px_15px_0px_rgba(0,0,0,0.6)] relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')] mix-blend-multiply"></div>
              <button 
                onClick={() => setShowDonationModal(false)}
                className="absolute top-4 right-6 text-3xl font-display text-[#3d2b1f] hover:text-rdr-red transition-colors z-20"
              >
                ×
              </button>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <p className="text-[11px] font-display uppercase tracking-[0.5em] mb-2 opacity-70">Saint Denis Registry • 1899</p>
                  <h2 className="text-5xl font-display font-black tracking-tighter uppercase leading-none border-b-2 border-[#3d2b1f]/30 pb-6 inline-block w-full">
                    VIP Subscription
                  </h2>
                </div>

                <div className="grid md:grid-cols-1 gap-8 px-2">
                  <div className="text-center">
                    <p className="font-typewriter text-base leading-relaxed italic mb-10 max-w-lg mx-auto">
                      "This certificate grants the holder priority trails and official supporter distinction."
                    </p>

                    <div className="relative p-8 bg-black/5 border-2 border-[#3d2b1f] mb-8 rounded-lg">
                      <div className="flex flex-col items-center">
                        <span className="font-display text-sm uppercase tracking-widest opacity-60 mb-2">Permit Value</span>
                        <div className="text-6xl font-display font-black text-[#3d2b1f] mb-2">$2.99</div>
                        <div className="w-full h-[1px] bg-[#3d2b1f]/20 my-6"></div>
                        <button 
                          onClick={handlePurchaseClick}
                          className="w-full py-5 bg-[#3d2b1f] text-[#f4e4bc] font-display text-2xl uppercase tracking-[0.2em] hover:bg-rdr-red hover:text-white transition-all shadow-xl rounded-xl"
                        >
                          Subscribe
                        </button>
                      </div>
                      <div className="absolute bottom-4 right-4 w-16 h-16 bg-rdr-red/90 rounded-full flex items-center justify-center border-4 border-rdr-red/50 shadow-md transform -rotate-12 pointer-events-none">
                         <span className="text-white font-display text-xl font-bold opacity-80">FR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-2 bg-black/10 border border-[#3d2b1f]/10 -z-20 transform translate-x-2 translate-y-2 rounded-xl"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
