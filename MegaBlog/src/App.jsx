import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Post from './pages/Post'
import AllPost from './pages/AllPost'
import AddPost from './pages/AddPost'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import SavedPosts from './pages/SavedPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}

      {/* <Home/> */}
      {/* <Post/> */}

      {/* <AllPost/> */}
      {/* <AddPost/> */}
      {/* <SignUp/> */}
      {/* <Profile/> */}
      {/* <Settings/> */}
      <SavedPosts/>
    </>
  )
}

export default App
