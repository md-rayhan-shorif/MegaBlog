import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../Appwrite/auth'

const AuthorCard = ({author} ) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // যদি লেখক আইডি না থাকে তবে লোডিং বন্ধ করো
    if (!author) {
      setLoading(false)
      return;
    }

    authService.getUserProfile(author)
      .then((data) => {
        if (data) setUser(data)
      })
      .catch(err => console.log("User fetch error:", err))
      .finally(() => setLoading(false)) // এটা নিশ্চিত করবেই যে লোডিং শেষ হবে
  }, [author])

  // গুরুত্বপূর্ণ: শুধু loading চেক করো, !user চেক করার দরকার নেই এখানে
  if (loading) {
    return (
      <div className="h-[85vh] flex items-center justify-center bg-[#f6f7f8] dark:bg-[#111921]">
        <h1 className="text-2xl font-bold text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mt-20 p-8 rounded-3xl bg-gray-100 dark:bg-gray-800/50 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-cover bg-center shrink-0 shadow-xl" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200")' }}></div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">Written by {user.fullName} </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4"> {user.bio} </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <button className="text-[#197fe6] text-sm font-bold flex items-center gap-1 hover:underline">Follow</button>
                  <button className="text-gray-500 text-sm font-bold hover:text-[#197fe6]" onClick={()=> navigate('/profile')}>View Portfolio</button>
                </div>
              </div>
    </div>
  )
}

export default AuthorCard