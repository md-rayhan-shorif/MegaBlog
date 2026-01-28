import React from 'react';

const Post = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111921] font-['Manrope',sans-serif] text-[#111418] dark:text-white transition-colors duration-300 min-h-screen">
      
      {/* Progress Bar (Fixed Top) */}
      <div className="fixed top-0 left-0 w-full z-[100] h-1.5 bg-gray-200 dark:bg-gray-800">
        <div className="h-full bg-[#197fe6]" style={{ width: '45%' }}></div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-[#111921]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#197fe6] rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined !text-xl">auto_stories</span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight">Editorial.</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity" href="#">Explore</a>
              <a className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity" href="#">Podcasts</a>
              <a className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity" href="#">Membership</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-full text-sm focus:ring-2 focus:ring-[#197fe6] w-64 outline-none" placeholder="Search insights..." type="text"/>
            </div>
            <button className="bg-[#197fe6] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
              Join Today
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111921] via-[#111921]/40 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
              className="w-full h-full object-cover" 
              alt="Hero"
            />
          </div>
          <div className="relative z-20 max-w-4xl mx-auto px-6 pb-20 w-full text-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-[#197fe6]/90 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Digital Design</span>
              <span className="text-xs font-medium opacity-80">8 min read</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
              The Future of Minimalist Digital Design in 2024
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-white/20 p-0.5 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" className="w-full h-full rounded-full object-cover" alt="Author" />
              </div>
              <div>
                <p className="text-lg font-bold">Julianne Sterling</p>
                <p className="text-sm opacity-70">Design Lead at Editorial • May 12, 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Container */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[100px_1fr_100px] gap-8 py-20 relative">
          
          {/* Left Sidebar: Sticky Actions */}
          <aside className="hidden lg:block relative">
            <div className="sticky top-24 flex flex-col items-center gap-4">
              <button className="group w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-[#197fe6] hover:text-white transition-all">
                <span className="material-symbols-outlined opacity-60 group-hover:opacity-100">favorite</span>
              </button>
              <button className="group w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-[#197fe6] hover:text-white transition-all">
                <span className="material-symbols-outlined opacity-60 group-hover:opacity-100">bookmark</span>
              </button>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-800 my-2"></div>
              <button className="group w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                <span className="material-symbols-outlined !text-xl opacity-60 group-hover:opacity-100">share</span>
              </button>
            </div>
          </aside>

          {/* Main Content Column */}
          <article className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 font-medium">
                <span className="float-left text-7xl font-extrabold text-[#197fe6] leading-[0.8] pr-2 pt-1">A</span>
                s we venture further into the mid-2020s, the landscape of digital design is undergoing a profound transformation. Minimalism, once defined by stark white spaces and simple San Serif typefaces, is evolving into something far more expressive and nuanced. This new era focuses not just on what is removed, but on the intention behind every remaining pixel.
              </p>
              
              <h2 className="text-3xl font-extrabold tracking-tight mt-12 mb-6">The New Aesthetics of Less</h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
                The shift toward "Humanist Minimalism" is perhaps the most significant trend of the year. Designers are moving away from the cold, clinical feel of early SaaS interfaces toward designs that incorporate warmth through organic shapes, grain textures, and soft lighting effects.
              </p>

              <blockquote className="relative border-l-4 border-[#197fe6] pl-8 py-6 my-12 bg-gray-50 dark:bg-gray-900/50 rounded-r-2xl">
                <span className="material-symbols-outlined absolute -top-4 left-4 text-5xl opacity-10 text-[#197fe6]">format_quote</span>
                <p className="text-2xl italic font-medium text-gray-800 dark:text-gray-200 leading-snug">
                  "Minimalism isn't about the absence of things, it's about the perfect concentration of the things that truly matter."
                </p>
                <cite className="block mt-4 text-sm font-bold uppercase tracking-widest text-[#197fe6]">— Dieter Rams</cite>
              </blockquote>

              <figure className="my-14">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000" className="w-full" alt="Tech Workplace" />
                </div>
                <figcaption className="mt-4 text-center text-sm text-gray-500 italic">Modern workstations are reflecting the digital drive toward organized, focused environments.</figcaption>
              </figure>
            </div>

            {/* Author Bio */}
            <div className="mt-20 p-8 rounded-3xl bg-gray-100 dark:bg-gray-800/50 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-cover bg-center shrink-0 shadow-xl" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200")' }}></div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">Written by Julianne Sterling</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Julianne is a multidisciplinary designer and writer specializing in the intersection of technology and human psychology.</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <button className="text-[#197fe6] text-sm font-bold flex items-center gap-1 hover:underline">Follow <span className="material-symbols-outlined !text-sm">add</span></button>
                  <button className="text-gray-500 text-sm font-bold hover:text-[#197fe6]">View Portfolio</button>
                </div>
              </div>
            </div>

            {/* Comments Form */}
            <section className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-16">
              <h3 className="text-2xl font-bold mb-10">Responses (14)</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0"></div>
                <div className="flex-1">
                  <textarea className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 focus:ring-2 focus:ring-[#197fe6] outline-none min-h-[120px] mb-4" placeholder="What are your thoughts?"></textarea>
                  <div className="flex justify-end">
                    <button className="bg-[#197fe6] text-white px-8 py-2.5 rounded-full font-bold text-sm">Post Response</button>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* Right Sidebar: Newsletter */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="p-6 rounded-3xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10">
                <h5 className="font-bold text-[#197fe6] mb-2">Weekly Brief</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Join 20k+ designers receiving our curated newsletter.</p>
                <input className="w-full text-xs bg-white dark:bg-gray-800 border-none rounded-full mb-3 px-4 py-2 outline-none" placeholder="Email address" type="email"/>
                <button className="w-full bg-[#197fe6] text-white py-2 rounded-full text-xs font-bold">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#111921] py-12 border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#197fe6] rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined !text-sm">auto_stories</span>
            </div>
            <h2 className="text-lg font-extrabold tracking-tight text-black dark:text-white">Editorial.</h2>
          </div>
          <p>© 2026 Editorial Media Group. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined cursor-pointer hover:text-[#197fe6]">public</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-[#197fe6]">rss_feed</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Post;