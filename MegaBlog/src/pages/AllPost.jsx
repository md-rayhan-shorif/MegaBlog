import React from 'react';

const AllPost = () => {
  return (
    <div className="bg-[#fdfdfd] dark:bg-[#0a0a0c] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
      
      {/* Navbar */}
     

      {/* Header & Categories */}
      <header className="pt-20 pb-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">The Archive</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              Explore our collection of long-form essays and insights across technology, design, and culture.
            </p>
          </div>
          <div className="w-full md:w-80">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563eb] transition-colors">search</span>
              <input className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563eb] transition-all outline-none" placeholder="Search articles..." type="text"/>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-12 flex flex-wrap gap-3 overflow-x-auto pb-4 no-scrollbar">
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-200 dark:shadow-none">All Stories</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Mindset</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Technology</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Philosophy</button>
          <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-500 border border-slate-100 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-white/10 dark:hover:border-white/20 transition-all">Design</button>
        </div>
      </header>

      {/* Posts Grid */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Post Card Component (Repeatable) */}
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <article key={post} className="group">
              <div className="bg-white border border-slate-100 dark:bg-slate-900/40 dark:border-white/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.03)] rounded-3xl overflow-hidden flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <img alt="Post cover" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={`https://images.unsplash.com/photo-${1500000000000 + post}?q=80&w=800`} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white">Mindset</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h2 className="font-serif text-2xl mb-3 leading-tight group-hover:text-[#2563eb] transition-colors">The Power of Consistency in a Fast World</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3">Success isn't always about greatness. It's about consistency. Consistent hard work leads to success.</p>
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Marcus Thorne</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium uppercase tracking-tighter">Oct 24, 2023</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center items-center gap-2">
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-400">
            <span className="material-symbols-outlined text-xl"> {"<-"} </span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-sm">1</button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors font-medium text-sm">2</button>
          <span className="px-2 text-slate-400">...</span>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-400">
            <span className="material-symbols-outlined text-xl">{"->"} </span>
          </button>
        </div>
      </main>

      
    </div>
  );
};

export default AllPost;