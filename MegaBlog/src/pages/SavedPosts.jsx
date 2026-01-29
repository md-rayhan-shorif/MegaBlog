import React from 'react';

const SavedPosts = () => {
  const savedItems = [
    {
      id: 1,
      category: "Design",
      readTime: "5 min read",
      title: "The Future of Minimalist Design in 2024",
      desc: "Exploring the subtle intersection of high-functionality and aesthetic form in the new digital age.",
      date: "Oct 12, 2023",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2000"
    },
    {
      id: 2,
      category: "UX Research",
      readTime: "8 min read",
      title: "Understanding Dark UI Patterns",
      desc: "How charcoal palettes improve user focus, reduce eye strain, and create a premium brand perception.",
      date: "Oct 08, 2023",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000"
    },
    {
      id: 3,
      category: "Editorial",
      readTime: "12 min read",
      title: "The Art of Digital Editorial Design",
      desc: "Crafting high-end digital experiences that rival the prestige of luxury printed magazines.",
      date: "Sep 29, 2023",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2000"
    }
  ];

  return (
    <div className="bg-[#102219] text-white min-h-screen font-serif transition-colors duration-300">
      
     

      <main className="mx-auto max-w-[1200px] py-12 px-6 md:px-20 lg:px-40">
        <div className="flex flex-col gap-8">
          
          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#283930]/30">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter">Saved Posts</h1>
              <p className="text-[#9db9ab] text-lg font-sans max-w-md">Your curated selection of editorial pieces and deep dives.</p>
            </div>
            
            <div className="flex items-center gap-3 font-sans">
              <div className="flex bg-[#283930]/30 p-1 rounded-lg">
                <button className="p-2 text-[#2bee8c] bg-[#102219] rounded-md shadow-sm">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="p-2 text-[#9db9ab] hover:text-white transition-colors">
                  <span className="material-symbols-outlined">list</span>
                </button>
              </div>
              <button className="flex items-center rounded-lg h-10 bg-[#283930]/50 border border-[#283930] px-4 gap-2 text-sm font-bold hover:bg-[#283930] transition-all">
                <span>Date Added</span>
                <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
              </button>
            </div>
          </div>
          

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedItems.map((post) => (
              <div key={post.id} className="group relative flex flex-col gap-4">
                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#1a2e24]">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    alt={post.title} 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Remove Button Overlay */}
                  <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 bg-black/40 hover:bg-red-500/80 backdrop-blur-md text-white p-2 rounded-lg transition-all duration-300">
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-widest text-[#2bee8c]">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#283930]"></span>
                    <span className="text-[#9db9ab]">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-[#2bee8c] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-[#9db9ab] font-sans text-sm leading-relaxed line-clamp-2">
                    {post.desc}
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-[#9db9ab] font-sans text-xs">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    <span>Saved {post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center pt-16">
            <button className="group flex items-center gap-3 px-8 py-3 rounded-full border border-[#283930] text-[#9db9ab] hover:text-white hover:border-[#2bee8c] transition-all font-sans text-sm font-bold">
              <span>Load more stories</span>
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
            </button>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default SavedPosts;