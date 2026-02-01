import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/cards/AuthorCard';
import MainContent from '../components/others/MainContent';
import MainContentHeader from '../components/others/MainContentHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appwriteService from '../Appwrite/config';
import FormatDate from '../lib/FormateDate';
import parse from 'html-react-parser'
import authService from '../Appwrite/auth';


const Post = () => {

  const [post , setPost] = useState(null)
  const [authorData, setAuthorData] = useState(null)
  const navigate = useNavigate()
  const { slug } = useParams()
  const userData = useSelector( state => state.auth.userData)

  // console.log(userData)

  
  const isAuthor = post && userData ? post.userId === userData?.$id : false;

  

  useEffect(()=> {
    if (slug) {
      appwriteService.getPost(slug)
      .then((post)=>{
        if (post) {
          setPost(post);
          

        }else{
          navigate('/')
        }
      })
    }else{
      navigate('/')
    }
  },[slug, navigate])


  useEffect(()=>{
    if (post) {
      authService.getUserProfile(post.authorId)
      .then((data)=> {
        if (data) {
          setAuthorData(data);
          console.log(data)
        }
      })
    }
  },[post])

  const deletePost = () => {
    appwriteService.deletePost(post.$id)
    .then((status) => {
      if (status) {
        
        
        appwriteService.deleteFile(post.featuredImage)
        navigate('/')
      }
    });
  };
 
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f7f8] dark:bg-[#111921]">
        <h1 className="text-2xl font-bold animate-pulse">Loading Post...</h1>
      </div>
    );
  }

  const  imageUrl = post ? appwriteService.getFilePreview(post.featuredImage) : "";
  console.log(imageUrl)
 
  
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111921] font-['Manrope',sans-serif] text-[#111418] dark:text-white transition-colors duration-300 min-h-screen">
    
      

     

      <main>
        {/* Hero Section */}
        <MainContentHeader title={post.title} author={post.authorId } createdAt={FormatDate(post.$createdAt)} 
        featuredImage={imageUrl} />

        {/* Article Container */}
        <div className="max-w-7xl mx-auto px-6 lg:grid-cols-[100px_1fr_100px] gap-8 py-20 relative">
          
          

          {/* Main Content Column */}
          <article className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
                  {parse(post.content)}
            </div>
            {/* <MainContent/> */}

            {/* Author Bio */}
            <AuthorCard author={post.authorId } />

            
          </article>

          
        </div>
      </main>

     
    </div>
  );
};

export default Post;