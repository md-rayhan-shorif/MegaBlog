import React from 'react'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../../Appwrite/config'

const SmallCard = ({$id, title, featuredImage}) => {
  const navigate = useNavigate()
  return (
    <div className="md:col-span-4 group glass-card post-card-hover rounded-3xl overflow-hidden flex flex-col h-full">
            <article className="h-[300px] relative overflow-hidden rounded-[0.75rem] shadow-lg transition-all duration-500 hover:-translate-y-1"
             onClick={()=> navigate(`/post/${$id}`)}>
              <img alt="Time" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={appwriteService.getFilePreview(featuredImage)} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h2 className="font-serif text-xl text-white">{title} </h2>
              </div>
            </article>
          </div>
  )
}

export default SmallCard