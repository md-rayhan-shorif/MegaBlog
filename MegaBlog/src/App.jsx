import React, { useEffect, useState } from 'react'
import Header from './components/Header/Navber'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import authService from './Appwrite/auth'
import { login, logout } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  return !loading ? (
    <div className='min-h-screen bg-white dark:bg-[#0a0a0c] flex flex-col'>
      
      <Header />
      
    
      <main className='flex-grow'>
      
        <Outlet />
      </main>
      
      
      <Footer />
    </div>
  ) : null
}

export default App