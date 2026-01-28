import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-[#2563eb] text-3xl">auto_awesome</span>
              <span className="font-serif text-2xl font-bold tracking-tight">MegaBlog</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-sm font-medium hover:text-[#2563eb] transition-colors" href="#">Home</a>
              <a className="text-sm font-medium hover:text-[#2563eb] transition-colors" href="#">All Posts</a>
              <a className="text-sm font-medium hover:text-[#2563eb] transition-colors" href="#">Add Post</a>
              <button className="bg-[#2563eb] hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/25">
                Logout
              </button>
              <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-icons-outlined text-xl">dark_mode</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

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
          <div className="md:col-span-4 md:row-span-2 group">
            <article className="h-full relative overflow-hidden rounded-[0.75rem] border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-1">
              <img alt="Consistency" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">Mindset</span>
                <h2 className="font-serif text-3xl text-white mb-2">The Power of Consistency</h2>
                <p className="text-slate-300 text-sm line-clamp-2">Success isn't always about greatness. It's about consistency. Consistent hard work leads to success.</p>
              </div>
            </article>
          </div>

          {/* Small Card 1 */}
          <div className="md:col-span-4 group">
            <article className="h-[300px] relative overflow-hidden rounded-[0.75rem] shadow-lg transition-all duration-500 hover:-translate-y-1">
              <img alt="Focus" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h2 className="font-serif text-xl text-white">Focus in a Distracted World</h2>
              </div>
            </article>
          </div>

          {/* Small Card 2 */}
          <div className="md:col-span-4 group">
            <article className="h-[300px] relative overflow-hidden rounded-[0.75rem] shadow-lg transition-all duration-500 hover:-translate-y-1">
              <img alt="Time" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1000&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h2 className="font-serif text-xl text-white">The Value of Time</h2>
              </div>
            </article>
          </div>

          {/* Wide Horizontal Card */}
          <div className="md:col-span-8 group">
            <article className="h-[300px] relative overflow-hidden rounded-[0.75rem] border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 overflow-hidden">
                  <img alt="Technology" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white dark:bg-slate-900/50 backdrop-blur-md">
                  <span className="text-[#2563eb] font-bold text-xs uppercase tracking-widest mb-2">Technology</span>
                  <h2 className="font-serif text-2xl mb-4 group-hover:text-[#2563eb] transition-colors">Technology Is Shaping Our Future</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3">The rapid advancement of artificial intelligence and sustainable energy is creating a new paradigm for human civilization...</p>
                </div>
              </div>
            </article>
          </div>

          {/* Quote Card */}
          <div className="md:col-span-4 group">
            <article className="h-[300px] relative overflow-hidden rounded-[0.75rem] bg-white dark:bg-slate-900 transition-all duration-500 hover:-translate-y-1 border border-slate-200 dark:border-slate-800">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="material-icons-outlined text-[#2563eb] text-4xl mb-4">format_quote</span>
                  <h2 className="font-serif text-2xl leading-tight">Mistakes Are the Best Teachers</h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div>
                    <p className="text-sm font-bold">Author Name</p>
                    <p className="text-xs text-slate-500">Editorial Lead</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <span className="material-icons-outlined text-[#2563eb] text-3xl">auto_awesome</span>
                <span className="font-serif text-2xl font-bold tracking-tight">MegaBlog</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto md:mx-0">
                A curated space for thinkers, creators, and innovators. Join our community of over 50,000 readers.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                <li><a className="hover:text-[#2563eb] transition-colors" href="#">Features</a></li>
                <li><a className="hover:text-[#2563eb] transition-colors" href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
              <form className="flex gap-2">
                <input className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Email" type="email"/>
                <button className="bg-[#2563eb] text-white px-6 py-2 rounded-full font-bold text-sm">Join</button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 dark:border-slate-900 text-xs text-slate-400 font-medium flex justify-between">
            <p>© 2026 MegaBlog Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;