import React from 'react'

const BigCard = () => {
  return (
    <>
    <div className="md:col-span-4 md:row-span-2 group"  >
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
    </>
  )
}

export default BigCard