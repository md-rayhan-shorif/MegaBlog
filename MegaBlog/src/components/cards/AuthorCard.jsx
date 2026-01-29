import React from 'react'

const AuthorCard = () => {
  return (
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
  )
}

export default AuthorCard