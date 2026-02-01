import React, { useEffect, useState } from 'react';
import PostCard from '../components/cards/PostCard';
import Pagination from '../components/others/Pagination';
import Category from '../components/others/Category';
import HeadingMsg from '../components/others/HeadingMsg';
import appwriteService from '../Appwrite/config';
import SmallCard from '../components/cards/SmallCard';

const AllPost = () => {
   const [posts, setposts] = useState([])

  useEffect(()=>{
    appwriteService.getPosts()
    .then((post)=>{
      setposts(post.documents)
    })
  },[])
  console.log(posts)

  return (
    <div className="bg-[#fdfdfd] dark:bg-[#0a0a0c] text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen font-sans">
      
      {/* Navbar */}
     

      {/* Header & Categories */}
      <header className="pt-20 pb-12 max-w-7xl mx-auto px-6 lg:px-8">
        <HeadingMsg/>  

        {/* Category Pills */}
        {/* <Category/> */}
      </header>

      {/* Posts Grid */}
       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          
         
          
          {
            posts.map((post)=>(
              
              <div key={post.$id} className=' min-w-50 gap ' >
                <SmallCard {...post}  /> 

              </div>
            ))
          }

          

        </div>
      </main>

        {/* Pagination */}
       <Pagination/>
      
    </div>
  );
};

export default AllPost;