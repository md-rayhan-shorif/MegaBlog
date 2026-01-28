import React from 'react';

const Profile = () => {
  return (
    <div className="bg-[#f5f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 font-serif">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-[#f5f7f8]/80 dark:bg-[#101922]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="text-[#0d7ff2]">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                </svg>
              </div>
              <h1 className="text-xl font-bold tracking-tight font-sans">Journal<span className="text-[#0d7ff2]">.</span></h1>
            </div>
            <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
              <a className="hover:text-[#0d7ff2] transition-colors" href="#">Feed</a>
              <a className="hover:text-[#0d7ff2] transition-colors" href="#">Topics</a>
              <a className="hover:text-[#0d7ff2] transition-colors" href="#">Library</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input className="font-sans text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 w-64 focus:ring-1 focus:ring-[#0d7ff2] placeholder:text-slate-500" placeholder="Search stories..." type="text"/>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-300 border border-slate-200 dark:border-slate-700 overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=16" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto pb-20">
        {/* Header Image Section */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#101922] via-transparent to-transparent opacity-90"></div>
        </div>

        {/* Profile Header Content */}
        <div className="px-6 -mt-20 relative z-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="flex flex-col md:flex-row items-end gap-6 w-full md:w-auto">
            <div className="w-40 h-40 rounded-full border-4 border-[#101922] shadow-2xl bg-cover bg-center overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=18" className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className="mb-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Julian Thorne</h2>
              <p className="text-lg text-slate-300 max-w-lg mb-4 italic">Essays on minimalist living, philosophy of technology, and the future of creative labor.</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 text-white text-xs font-sans hover:bg-slate-700 transition-colors border border-slate-700">
                  <span className="material-symbols-outlined text-sm">link</span>
                  <span>julianthorne.com</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4 flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-2.5 bg-[#0d7ff2] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-all font-sans shadow-lg shadow-blue-500/20">
              Follow
            </button>
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-transparent border border-slate-700 text-slate-300 text-sm font-bold rounded-lg hover:bg-slate-800 hover:text-white transition-all font-sans">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 mt-12 border-b border-slate-200 dark:border-slate-800">
          <div className="flex gap-10 overflow-x-auto font-sans no-scrollbar">
            <a className="pb-4 border-b-2 border-[#0d7ff2] text-slate-900 dark:text-white font-semibold text-sm whitespace-nowrap" href="#">Published Posts</a>
            <a className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 font-medium text-sm transition-all whitespace-nowrap" href="#">Drafts</a>
            <a className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-300 font-medium text-sm transition-all whitespace-nowrap" href="#">Liked Posts</a>
          </div>
        </div>

        <div className="px-6 py-10 flex flex-col lg:flex-row gap-12">
          {/* Main Content Area: Posts */}
          <div className="flex-1 space-y-10">
            {[1, 2].map((post) => (
              <React.Fragment key={post}>
                <article className="group grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3 font-sans text-xs uppercase tracking-widest text-[#0d7ff2] font-bold">
                      <span>Design Philosophy</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                      <span className="text-slate-500">Dec 14, 2023</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-[#0d7ff2] transition-colors cursor-pointer mb-3">
                      The invisible architecture of digital stillness.
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4 line-clamp-2">
                      Why modern interfaces are failing our focus, and how we can design for contemplative spaces rather than transactional speed.
                    </p>
                    <div className="flex items-center justify-between mt-auto text-slate-500 text-xs font-sans">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 8 min read</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 4.2k views</span>
                      </div>
                      <button className="hover:text-[#0d7ff2] transition-colors">
                        <span className="material-symbols-outlined">bookmark_add</span>
                      </button>
                    </div>
                  </div>
                  <div className="h-48 rounded-xl overflow-hidden bg-slate-800">
                    <img src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Post thumbnail" />
                  </div>
                </article>
                <hr className="border-slate-200 dark:border-slate-800"/>
              </React.Fragment>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex flex-col gap-8">
            {/* Statistics Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-6 font-sans">Performance Metrics</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <p className="text-3xl font-bold">142k</p>
                    <p className="text-xs text-slate-500 font-sans">Total Reads</p>
                  </div>
                  <span className="material-symbols-outlined text-[#0d7ff2] text-xl">auto_graph</span>
                </div>
                <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <p className="text-3xl font-bold">12.8k</p>
                    <p className="text-xs text-slate-500 font-sans">Followers</p>
                  </div>
                  <span className="material-symbols-outlined text-[#0d7ff2] text-xl">group</span>
                </div>
              </div>
            </div>

            {/* Featured Collection */}
            <div className="bg-[#0d7ff2]/5 rounded-xl p-6 border border-[#0d7ff2]/20">
              <h4 className="text-xs font-bold text-[#0d7ff2] mb-3 uppercase tracking-widest font-sans">Top Series</h4>
              <p className="font-bold text-lg leading-snug mb-3">Minimalism & Intent: A 12-Part Exploration</p>
              <a className="text-[#0d7ff2] text-xs font-bold font-sans flex items-center gap-1 group" href="#">
                Explore Series 
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-sans">
          <p>© 2026 Journal. Built for thinkers.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a className="hover:text-[#0d7ff2]" href="#">Privacy</a>
            <a className="hover:text-[#0d7ff2]" href="#">Terms</a>
            <a className="hover:text-[#0d7ff2]" href="#">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;