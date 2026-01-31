import React from 'react'
import { useNavigate } from 'react-router-dom'

const SmallCard = () => {
  const navigate = useNavigate()
  return (
    <div className="md:col-span-4 group">
            <article className="h-[300px] relative overflow-hidden rounded-[0.75rem] shadow-lg transition-all duration-500 hover:-translate-y-1" onClick={()=> navigate('/post')}>
              <img alt="Time" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1000&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h2 className="font-serif text-xl text-white">The Value of Time</h2>
              </div>
            </article>
          </div>
  )
}

export default SmallCard