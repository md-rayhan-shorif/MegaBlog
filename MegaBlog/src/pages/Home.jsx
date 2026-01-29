import React from 'react';
import BigCard from '../components/cards/BigCard';
import QouteCard from '../components/cards/QouteCard';
import WideCard from '../components/cards/WideCard';
import SmallCard from '../components/cards/SmallCard';

const Home = () => {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
      
   
     

      {/* Header */}
      <header className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
          Refined Perspectives
        </h1>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
          Exploring the intersection of technology, philosophy, and personal growth through high-quality editorial content.
        </p>
      </header>

      {/* Main Content - Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Post (Big Card) */}
          <BigCard/>

          {/* Small Card 1 */}
          <SmallCard/>

          {/* Small Card 2 */}
          <SmallCard/>

          {/* Wide Horizontal Card */}
          <WideCard/>

          {/* Quote Card */}
          <QouteCard/>

        </div>
      </main>

       
    </div>
  );
};

export default Home;