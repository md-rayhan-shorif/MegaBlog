import React from 'react'
import { useNavigate } from 'react-router-dom'

const WideCard = () => {
  const navigate = useNavigate()
  return (
    <div className="md:col-span-8 group">
            <article className="h-[300px] relative overflow-hidden rounded-[0.75rem] border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row h-full" onClick={()=> navigate('/post')}  >
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
  )
}

export default WideCard