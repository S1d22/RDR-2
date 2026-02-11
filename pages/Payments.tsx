
import React from 'react';
import { Link } from 'react-router-dom';

const BankLedger: React.FC<{ bankName: string; owner: string; account: string; iban?: string }> = ({ bankName, owner, account, iban }) => (
  <div className="p-6 bg-white/5 border border-rdr-gold/20 rounded-xl relative overflow-hidden group hover:border-rdr-gold transition-all">
    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
      <span className="text-4xl">🏛️</span>
    </div>
    <h3 className="text-rdr-gold font-display text-xl uppercase mb-4 tracking-wider border-b border-rdr-gold/30 pb-2">
      {bankName}
    </h3>
    <div className="space-y-4 font-typewriter">
      <div>
        <p className="text-[10px] uppercase text-rdr-paper/40 tracking-[0.2em]">Account Holder</p>
        <p className="text-rdr-paper text-lg">{owner}</p>
      </div>
      <div>
        <p className="text-[10px] uppercase text-rdr-paper/40 tracking-[0.2em]">Account Number</p>
        <p className="text-rdr-paper text-lg tracking-widest">{account}</p>
      </div>
      {iban && (
        <div>
          <p className="text-[10px] uppercase text-rdr-paper/40 tracking-[0.2em]">IBAN / Swift Code</p>
          <p className="text-rdr-paper text-sm break-all">{iban}</p>
        </div>
      )}
    </div>
  </div>
);

const Payments: React.FC = () => {
  return (
    <div className="min-h-screen bg-rdr-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-rdr-red text-sm uppercase tracking-[0.5em] mb-4">Frontier Registry • Finance Bureau</p>
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6 tracking-tighter uppercase">
            Payment <span className="text-rdr-gold">Information</span>
          </h1>
          <div className="h-1 w-32 bg-rdr-gold mx-auto opacity-50"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Section: Official Banks */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display text-rdr-paper uppercase border-l-4 border-rdr-red pl-4">
              Official Bank Ledgers
            </h2>
            <div className="grid gap-6">
              <BankLedger 
                bankName="ALG POST BARIDI MOB"
                owner="Johnny Heck"
                account="00799999002564843069"
              />
              <BankLedger 
                bankName="ALG POST BARIDI MOB"
                owner="ᴰᵖ TiiGeR"
                account="00799999004033976260"
              />
              <BankLedger 
                bankName="REDOTPAY UID"
                owner="ᴰᵖ TiiGeR"
                account="1490512059"
              />
            </div>
          </div>

          {/* Section: Digital Telegrams & Instructions */}
          <div className="space-y-8">
            <h2 className="text-2xl font-display text-rdr-paper uppercase border-l-4 border-rdr-gold pl-4">
              Express Digital Transfers
            </h2>
            
            <div className="bg-[#f4e4bc] p-8 text-[#2c1a12] border-4 border-double border-[#3d2b1f] rounded-xl shadow-[10px_10px_0px_rgba(157,10,14,0.3)]">
              <h3 className="font-display text-2xl uppercase mb-6 border-b border-black/20 pb-4">Verification Steps</h3>
              <ul className="space-y-6 font-body text-lg">
                <li className="flex items-start">
                  <span className="bg-[#3d2b1f] text-[#f4e4bc] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <p>Send your contribution ($2.99) via any of the listed bank ledgers or via <span className="font-bold underline">STC Pay (05XXXXXXX)</span>.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#3d2b1f] text-[#f4e4bc] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <p>Capture a clear photograph (screenshot) of the successful transaction telegram.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#3d2b1f] text-[#f4e4bc] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <p>Open a <span className="font-bold text-rdr-red uppercase">Support Ticket</span> in our Discord and attach the proof of payment.</p>
                </li>
              </ul>
              
              <div className="mt-10 p-4 border-2 border-dashed border-[#3d2b1f]/30 text-center italic font-typewriter opacity-70">
                "Payments are processed within 24 frontier hours."
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="text-center space-y-8">
          <div className="inline-block p-8 border-2 border-rdr-paper/10 rounded-xl bg-black/40">
            <p className="text-rdr-paper/60 font-body text-lg mb-6 max-w-2xl">
              Thank you for supporting the Dust Peek community. Your contributions go directly towards server upkeep, asset development, and rewarding our active marshals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="px-10 py-3 bg-rdr-red text-white font-display uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full"
              >
                Return to Trails
              </Link>
              <a 
                href="https://discord.gg/Sw6PrSqqrk"
                target="_blank"
                rel="noreferrer"
                className="px-10 py-3 border border-rdr-gold text-rdr-gold font-display uppercase tracking-widest hover:bg-rdr-gold hover:text-black transition-all rounded-full"
              >
                Go to Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
