import React, { useEffect, useState } from 'react'
import authService from '../../Appwrite/auth'

const MainContentHeader = ({ title, featuredImage, author, createdAt }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

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

  // ইমেজ ইউআরএল হ্যান্ডলিং
  const finalImageUrl = featuredImage?.href ? featuredImage.href : featuredImage;

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111921] via-[#111921]/40 to-transparent z-10"></div>
        {/* এখানে ইমেজ লোড হবে */}
        {finalImageUrl ? (
          <img 
            src={finalImageUrl}
            className="w-full h-full object-cover" 
            alt={title}
            onError={(e) => console.log("Image Load Error Source:", e.target.src)} 
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">No Image Found</div>
        )}
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 pb-20 w-full text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">{title}</h1>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full border-2 border-white/20 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="Avatar" />
          </div>
          <div>
            <p className="text-lg font-bold">{user?.fullName || "Author Name Not Found"}</p>
            <p className="text-sm opacity-70">Design Lead • {createdAt}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainContentHeader