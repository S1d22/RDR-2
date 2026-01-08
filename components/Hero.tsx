import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(10,10,10,1)), url('https://media.discordapp.net/attachments/1345532575095197776/1456821447119867997/C5C3AF73-AAAF-4E1F-8F86-A449914E03FF.webp?ex=6959c233&is=695870b3&hm=07cc76fa486655621f672aefb7d78e957edf509be660a1c1eaa1e1cf5c97d88a&=&format=webp')` 
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">

        {/* LOGO */}
        <img
          src="https://i.imgur.com/zj4nHK0.png"
          alt="Dust Peek Logo"
          className="mx-auto mb-6 w-28 md:w-36 lg:w-72 drop-shadow-xl animate-in fade-in slide-in-from-bottom-6 duration-700"
        />

        <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-6 tracking-tighter text-shadow-red animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="block">Welcome To</span>
          <span className="block text-rdr-red">Dust Peek</span>
        </h1>

        {/* Spacer */}
        <div className="h-12 md:h-20"></div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://discord.gg/Sw6PrSqqrk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-rdr-red text-white font-display font-bold text-lg uppercase tracking-widest hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto rounded-full overflow-hidden"
          >
            Join Our Discord
            <div className="absolute -inset-0.5 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </a>

          <Link 
            to="/whitelist"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-display font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto rounded-full"
          >
            Apply for Whitelist
          </Link>

          <Link 
            to="/rules"
            className="px-8 py-4 bg-transparent border-2 border-rdr-gold text-rdr-gold font-display font-bold text-lg uppercase tracking-widest hover:bg-rdr-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto rounded-full"
          >
            Read Rules
          </Link>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
