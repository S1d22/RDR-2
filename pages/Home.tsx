
import React from 'react';
import Hero from '../components/Hero';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="p-8 bg-rdr-black/40 border border-rdr-paper/10 rounded-lg hover:border-rdr-red/50 transition-all group">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-2xl font-display text-rdr-red mb-3">{title}</h3>
    <p className="font-body text-rdr-paper/80 leading-relaxed">{desc}</p>
  </div>
);

const Home: React.FC = () => {
  return (
   <div className="bg-black">
      <div
  className="relative bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://4kwallpapers.com/images/walls/thumbs_3t/10618.jpg')",
    minHeight: '100vh',
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Hero content */}
  <div className="relative z-10">
    <Hero />
  </div>
</div>
      
      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-white mb-4 tracking-wider uppercase">Life on the <span className="text-rdr-red">Frontier</span></h2>
          <div className="h-1 w-24 bg-rdr-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🕙"
            title="250+ Active Members"
            desc="Experience 1899 like never before with custom jobs, survival mechanics, and player-driven economies that react to your choices."
          />
          <FeatureCard 
            icon="📅"
            title="24/7 Always Online"
            desc="Our active staff ensures a toxin-free environment where story takes priority over winning. Every player matters."
          />
          <FeatureCard 
            icon="⚒️"
            title="50+ Available Jobs"
            desc="From outlaws hiding in the Grizzlies to lawmen protecting Saint Denis, the world is yours to shape. What's your story?"
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-rdr-red/5 text-center px-4 italic">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl font-body text-rdr-paper opacity-80 mb-6">
            "They're chasing us hard now, because we represent everything that they fear."
          </p>
          <span className="text-rdr-red font-display uppercase tracking-widest"> Arthur Morgan</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
