
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Whitelist from './pages/Whitelist';
import Rules from './pages/Rules';
import FAQs from './pages/FAQs';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 vintage-overlay opacity-10 z-50"></div>
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whitelist" element={<Whitelist />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
