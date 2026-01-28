import React from 'react';

const AllPost = () => {
  return (
    <div className="bg-[#fdfdfd] dark:bg-[#0a0a0c] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#0a0a0c]/70 backdrop-blur-xl border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2563eb] text-3xl">auto_awesome</span>
              <span className="font-serif text-2xl font-bold tracking-tight">MegaBlog</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors" href="#">Home</a>
              <a className="text-sm font-medium text-slate-900 dark:text-white" href="#">All Posts</a>
              <a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors" href="#">Add Post</a>
              <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>
              <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-xl">dark_mode</span>
              </button>
              <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

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
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-sm">1</button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors font-medium text-sm">2</button>
          <span className="px-2 text-slate-400">...</span>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-400">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#0a0a0c] border-t border-slate-100 dark:border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <span className="material-symbols-outlined text-[#2563eb] text-3xl">auto_awesome</span>
                <span className="font-serif text-2xl font-bold tracking-tight">MegaBlog</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                A premium digital space for thinkers and creators. Curating the best insights to help you navigate the modern world.
              </p>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-semibold text-sm mb-6 uppercase tracking-widest text-slate-400">Join our journal</h4>
              <form className="flex gap-2 max-w-sm mx-auto md:mx-0">
                <input className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-blue-500" placeholder="Email address" type="email"/>
                <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all">Join</button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-slate-400">
            <p>© 2026 MegaBlog Editorial. All rights reserved.</p>
            <div className="flex gap-8">
              <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Legal Notices</span>
              <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AllPost;