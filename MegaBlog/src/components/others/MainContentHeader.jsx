import React from 'react'

const MainContentHeader = () => {
  return (
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
  )
}

export default MainContentHeader