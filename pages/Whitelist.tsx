
import React, { useState } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

const QUIZ_QUESTIONS_EN: QuizQuestion[] = [
  {
    id: 1,
    question: "What does 'NLR' (New Life Rule) mean?",
    options: ["You forget the events leading to your death", "You must delete your character", "You can't use guns for 24 hours"],
    correctIndex: 0
  },
  {
    id: 2,
    question: "What is 'Metagaming'?",
    options: ["Playing the game at a high level", "Using out-of-character info for in-character gain", "Watching others play on Twitch"],
    correctIndex: 1
  },
  {
    id: 3,
    question: "If someone points a gun at you while you are unarmed, you should:",
    options: ["Try to punch them", "Value your life and comply", "Run away as fast as possible"],
    correctIndex: 1
  },
  {
    id: 4,
    question: "What is 'Powergaming'?",
    options: ["Forcing actions on others without giving them a chance", "Playing for 12 hours straight", "Having the fastest horse"],
    correctIndex: 0
  },
  {
    id: 5,
    question: "What does 'IC' stand for?",
    options: ["Instant Combat", "In Character", "International Cowboy"],
    correctIndex: 1
  },
  {
    id: 6,
    question: "What does 'OOC' stand for?",
    options: ["Only Outlaws Count", "Out of Character", "Old Overworked Citizen"],
    correctIndex: 1
  },
  {
    id: 7,
    question: "What is 'VDM' (Vehicle/Horse Deathmatch)?",
    options: ["Winning a horse race", "Using your horse/wagon as a weapon to ram others", "Grooming your horse"],
    correctIndex: 1
  },
  {
    id: 8,
    question: "The main setting of Red Dead Redemption 2 is:",
    options: ["1899", "1911", "1876"],
    correctIndex: 0
  },
  {
    id: 9,
    question: "If you witness a rule break during a scene, you should:",
    options: ["Stop the scene and argue", "Finish the scene and report it to staff later", "Start breaking rules yourself in revenge"],
    correctIndex: 1
  },
  {
    id: 10,
    question: "Is using a high-quality microphone mandatory?",
    options: ["No, text chat is fine", "Only if you are the Sheriff", "Yes, it is strictly required"],
    correctIndex: 2
  }
];

const QUIZ_QUESTIONS_AR: QuizQuestion[] = [
  {
    id: 1,
    question: "ماذا تعني قاعدة 'NLR' (قاعدة الحياة الجديدة)؟",
    options: ["تنسى الأحداث التي أدت إلى وفاتك", "يجب عليك حذف شخصيتك", "لا يمكنك استخدام الأسلحة لمدة 24 ساعة"],
    correctIndex: 0
  },
  {
    id: 2,
    question: "ما هو الـ 'Metagaming'؟",
    options: ["اللعب بمستوى عالٍ جداً", "استخدام معلومات خارج اللعبة لتحقيق مكاسب داخلها", "مشاهدة الآخرين يلعبون على تويتش"],
    correctIndex: 1
  },
  {
    id: 3,
    question: "إذا وجه شخص سلاحاً نحوك وأنت غير مسلح، يجب عليك:",
    options: ["محاولة ضربه", "تقدير حياتك والامتثال لأوامره", "الهروب بأسرع ما يمكن"],
    correctIndex: 1
  },
  {
    id: 4,
    question: "ما هو الـ 'Powergaming'؟",
    options: ["إجبار الآخرين على أفعال دون منحهم فرصة للرد", "اللعب لمدة 12 ساعة متواصلة", "امتلاك أسرع حصان"],
    correctIndex: 0
  },
  {
    id: 5,
    question: "إلى ماذا يرمز مصطلح 'IC'؟",
    options: ["قتال فوري", "داخل الشخصية", "رعاة البقر الدوليين"],
    correctIndex: 1
  },
  {
    id: 6,
    question: "إلى ماذا يرمز مصطلح 'OOC'؟",
    options: ["الخارجون عن القانون فقط", "خارج الشخصية", "المواطن العجوز المتعب"],
    correctIndex: 1
  },
  {
    id: 7,
    question: "ما هو الـ 'VDM' (القتل بالمركبة أو الحصان)؟",
    options: ["الفوز بسباق خيل", "استخدام حصانك أو عربتك كسلاح لصدم الآخرين", "تجهيز حصانك"],
    correctIndex: 1
  },
  {
    id: 8,
    question: "الإطار الزمني الرئيسي للعبة Red Dead Redemption 2 هو:",
    options: ["1899", "1911", "1876"],
    correctIndex: 0
  },
  {
    id: 9,
    question: "إذا شهدت خرقاً للقواعد أثناء مشهد، يجب عليك:",
    options: ["إيقاف المشهد والجدال", "إنهاء المشهد وإبلاغ الإدارة لاحقاً", "البدء بخرق القواعد بنفسك للانتقام"],
    correctIndex: 1
  },
  {
    id: 10,
    question: "هل استخدام ميكروفون عالي الجودة إلزامي؟",
    options: ["لا، الدردشة النصية تكفي", "فقط إذا كنت العمدة (Sheriff)", "نعم، هو شرط إلزامي وصارم"],
    correctIndex: 2
  }
];

const Whitelist: React.FC = () => {
  const [stage, setStage] = useState<'language' | 'quiz' | 'failed' | 'form' | 'submitted'>('language');
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<number>(0);
  const [formData, setFormData] = useState({
    gamertag: '',
    discordId: '',
    age: '',
    experience: '',
    backstory: ''
  });

  const questions = lang === 'ar' ? QUIZ_QUESTIONS_AR : QUIZ_QUESTIONS_EN;
  const isRtl = lang === 'ar';

  const handleQuizSubmit = () => {
    let currentScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) {
        currentScore += 1;
      }
    });

    setScore(currentScore);
    if (currentScore >= 7) {
      setStage('form');
    } else {
      setStage('failed');
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('/api/submit-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        score,
        language: lang
      })
    });

    if (!res.ok) {
      throw new Error('Submission failed');
    }

    setStage('submitted');
  } catch (error) {
    alert('Failed to submit application. Please try again later.');
  }
};

  const selectLanguage = (selectedLang: 'en' | 'ar') => {
    setLang(selectedLang);
    setStage('quiz');
  };

  if (stage === 'language') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-display text-rdr-red mb-4">CHOOSE YOUR PATH</h1>
          <p className="text-rdr-paper/70 font-body text-xl italic">Choose your preferred language for the entrance examination.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl">
          <button 
            onClick={() => selectLanguage('en')}
            className="group relative p-10 bg-black/40 border-4 border-[#3d2b1f] hover:border-rdr-red transition-all duration-300 transform hover:-translate-y-2 rounded-2xl"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">EN</div>
            <span className="block font-display text-2xl text-white mb-2 uppercase tracking-widest">English</span>
            <span className="block font-body text-rdr-paper/60 text-sm">Western Standards & Rules</span>
          </button>

          <button 
            onClick={() => selectLanguage('ar')}
            className="group relative p-10 bg-black/40 border-4 border-[#3d2b1f] hover:border-rdr-red transition-all duration-300 transform hover:-translate-y-2 rounded-2xl"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">AR</div>
            <span className="block font-display text-2xl text-white mb-2 uppercase tracking-widest">العربية</span>
            <span className="block font-body text-rdr-paper/60 text-sm">القواعد والمعايير باللغة العربية</span>
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'submitted') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className={`max-w-md w-full bg-rdr-paper p-8 text-black border-4 border-rdr-red shadow-2xl transform -rotate-1 rounded-xl ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
          <h2 className="text-3xl font-display mb-4 text-center border-b-2 border-black pb-2">
            {isRtl ? 'تم استلام الطلب' : 'APPLICATION RECEIVED'}
          </h2>
          <p className="font-typewriter text-lg leading-relaxed mb-6">
            {isRtl 
              ? '"لقد استلمنا برقية انضمامك يا شريك. سيقوم المارشال بمراجعة أوراقك قريباً. ترقب صندوق رسائل الديسكورد الخاص بك."'
              : '"We\'ve got your telegram, partner. Our marshals will review your papers shortly. Keep an eye on your Discord inbox."'
            }
          </p>
          <button 
            onClick={() => { setStage('language'); setAnswers({}); setScore(0); }}
            className="w-full py-3 bg-rdr-red text-white font-display uppercase tracking-widest hover:bg-black transition-colors rounded-xl"
          >
            {isRtl ? 'العودة للبداية' : 'Back to Start'}
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'failed') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className={`max-w-md w-full bg-black/90 p-10 border-4 border-rdr-red text-center shadow-2xl rounded-xl ${isRtl ? 'text-right' : 'text-center'}`} dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="text-6xl mb-6">🚫</div>
          <h2 className="text-3xl font-display text-rdr-red mb-2">{isRtl ? 'تم رفض الدخول' : 'ACCESS DENIED'}</h2>
          <p className="text-white font-display text-sm mb-4 tracking-widest uppercase">{isRtl ? 'النتيجة' : 'Score'}: {score} / {questions.length}</p>
          <p className="text-rdr-paper font-body text-xl mb-8 leading-relaxed">
            {isRtl 
              ? '"عذراً يا شريك، يبدو أنك لا تعرف طرق الحدود جيداً بعد. اقرأ قواعدنا بعناية وحاول مرة أخرى في وقت لاحق."'
              : '"Sorry partner, you don\'t seem to know the ways of the frontier well enough yet. Read our rules carefully and try again another time."'
            }
          </p>
          <button 
            onClick={() => { setStage('language'); setAnswers({}); setScore(0); }}
            className="px-8 py-3 bg-white text-black font-display uppercase tracking-widest hover:bg-rdr-red hover:text-white transition-all rounded-xl"
          >
            {isRtl ? 'حاول مجدداً' : 'Try again'}
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'quiz') {
    return (
      <div className="min-h-screen py-16 px-4" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display text-rdr-red mb-4">
              {isRtl ? 'DUST PEEK TEST' : 'DUST PEEK TEST'}
            </h1>
            <p className="text-rdr-paper/70 font-body text-lg italic">
              {isRtl ? 'أثبت أنك لائق للحدود قبل أن نقبل أوراقك.' : "Prove you're fit for the frontier before we accept your papers."}
            </p>
          </div>

          <div className="space-y-8 bg-black/60 p-8 rounded-xl border border-rdr-red/20">
            {questions.map((q, idx) => (
              <div key={q.id} className="border-b border-white/5 pb-6 last:border-none">
                <p className={`font-display text-rdr-paper text-lg mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <span className="text-rdr-red mx-2">{idx + 1}.</span> {q.question}
                </p>
                <div className={`space-y-3 ${isRtl ? 'pr-6' : 'pl-6'}`}>
                  {q.options.map((opt, optIdx) => (
                    <label key={optIdx} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name={`q-${q.id}`} 
                        className="w-5 h-5 accent-rdr-red"
                        checked={answers[q.id] === optIdx}
                        onChange={() => setAnswers({...answers, [q.id]: optIdx})}
                      />
                      <span className={`text-rdr-paper/80 group-hover:text-white transition-colors font-body text-lg ${isRtl ? 'mr-3' : 'ml-3'}`}>
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-8">
              <button 
                onClick={handleQuizSubmit}
                disabled={Object.keys(answers).length < questions.length}
                className="w-full py-4 bg-rdr-red text-white font-display text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg rounded-xl"
              >
                {isRtl ? 'إرسال الاختبار' : 'Submit Test'}
              </button>
              {Object.keys(answers).length < questions.length && (
                <p className="text-center mt-4 text-rdr-paper/40 font-body text-sm italic">
                  {isRtl ? 'أكمل جميع الأسئلة للإرسال.' : 'Complete all questions to submit.'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-rdr-black bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="inline-block px-4 py-1 bg-green-900/40 border border-green-500 text-green-400 font-display text-xs tracking-widest rounded-full uppercase">
              {isRtl ? 'ناجح' : 'Test Passed'}
            </div>
            <p className="text-white font-display text-sm tracking-widest uppercase">
              {isRtl ? 'النتيجة' : 'Score'}: {score} / {questions.length}
            </p>
          </div>
          <h1 className="text-5xl font-display text-rdr-red mb-4">
            {isRtl ? 'انضم إلى العصابة' : 'JOIN THE POSSE'}
          </h1>
          <p className="text-rdr-paper/70 font-body text-lg italic">
            {isRtl ? 'نحن نهتم بالجودة أكثر من الكمية. أخبرنا من أنت.' : "We value quality over quantity. Tell us who you are."}
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-8 bg-black/40 p-8 rounded-xl border border-rdr-red/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-display text-rdr-paper mb-2 uppercase text-xs tracking-widest">
                {isRtl ? 'اسم المستخدم (Steam / Epic)' : 'Steam / Epic Gamertag'}
              </label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b-2 border-rdr-red/50 focus:border-rdr-red outline-none px-2 py-2 text-white font-body text-lg transition-colors"
                value={formData.gamertag}
                onChange={e => setFormData({...formData, gamertag: e.target.value})}
              />
            </div>
            <div>
              <label className="block font-display text-rdr-paper mb-2 uppercase text-xs tracking-widest">
                {isRtl ? 'معرف الديسكورد (مثلاً user#1234)' : 'Discord ID (e.g. user#1234)'}
              </label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b-2 border-rdr-red/50 focus:border-rdr-red outline-none px-2 py-2 text-white font-body text-lg transition-colors"
                value={formData.discordId}
                onChange={e => setFormData({...formData, discordId: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-display text-rdr-paper mb-2 uppercase text-xs tracking-widest">
                {isRtl ? 'العمر الحقيقي' : 'Real Life Age'}
              </label>
              <input 
                required
                type="number" 
                className="w-full bg-transparent border-b-2 border-rdr-red/50 focus:border-rdr-red outline-none px-2 py-2 text-white font-body text-lg transition-colors"
                value={formData.age}
                onChange={e => setFormData({...formData, age: e.target.value})}
              />
            </div>
            <div>
              <label className="block font-display text-rdr-paper mb-2 uppercase text-xs tracking-widest">
                {isRtl ? 'خبرة تقمص الأدوار (سنوات)' : 'RP Experience (Years)'}
              </label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b-2 border-rdr-red/50 focus:border-rdr-red outline-none px-2 py-2 text-white font-body text-lg transition-colors"
                value={formData.experience}
                onChange={e => setFormData({...formData, experience: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block font-display text-rdr-paper mb-2 uppercase text-xs tracking-widest">
              {isRtl ? 'قصة الشخصية ودوافعها' : 'Character Backstory & Motivation'}
            </label>
            <textarea 
              required
              rows={6}
              className="w-full bg-transparent border-2 border-rdr-red/50 focus:border-rdr-red outline-none px-4 py-3 text-white font-body text-lg transition-all rounded-lg"
              placeholder={isRtl ? "أخبرنا عن الشخصية التي تنوي لعبها..." : "Tell us about the person you plan to play..."}
              value={formData.backstory}
              onChange={e => setFormData({...formData, backstory: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-rdr-red text-white font-display text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all transform active:scale-95 shadow-lg shadow-rdr-red/20 rounded-xl"
          >
            {isRtl ? 'إرسال الطلب' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Whitelist;
