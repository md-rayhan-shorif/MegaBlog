import React from 'react';
import AuthorCard from '../components/cards/AuthorCard';
import MainContent from '../components/others/MainContent';
import MainContentHeader from '../components/others/MainContentHeader';

const Post = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111921] font-['Manrope',sans-serif] text-[#111418] dark:text-white transition-colors duration-300 min-h-screen">
      
      

     

      <main>
        {/* Hero Section */}
        <MainContentHeader/>

        {/* Article Container */}
        <div className="max-w-7xl mx-auto px-6 lg:grid-cols-[100px_1fr_100px] gap-8 py-20 relative">
          
          

          {/* Main Content Column */}
          <article className="max-w-3xl mx-auto">
            <MainContent/>

            {/* Author Bio */}
            <AuthorCard/>

            
          </article>

          
        </div>
      </main>

     
    </div>
  );
};

export default Post;