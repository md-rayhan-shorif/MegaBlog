import React from 'react'
import Header from './components/Header/Navber'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen bg-white dark:bg-[#0a0a0c] flex flex-col'>
      {/* Header ফিক্সড থাকবে */}
      <Header />
      
      {/* main-এর ভেতর flex-grow দিলে কন্টেন্ট কম থাকলেও Footer নিচে থাকবে */}
      <main className='flex-grow'>
        {/* Outlet সরাসরি থাকবে, কারণ আপনার AllPost বা অন্যান্য পেজে অলরেডি max-w-7xl এবং padding দেওয়া আছে */}
        <Outlet />
      </main>
      
      {/* Footer ফিক্সড থাকবে */}
      <Footer />
    </div>
  )
}

export default App