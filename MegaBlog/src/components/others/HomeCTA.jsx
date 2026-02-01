import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Want to read more?
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Discover our full collection of tech, science, and lifestyle articles.
        </p>
      </div>

      <button
        onClick={() => navigate('/all-posts')}
        className="group relative px-8 py-4 bg-amber-400 text-slate-900 font-bold rounded-2xl 
                   hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20 
                   active:scale-95 flex items-center gap-2"
      >
        Get All Posts
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth={2.5} stroke="currentColor" 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
};

export default HomeCTA;