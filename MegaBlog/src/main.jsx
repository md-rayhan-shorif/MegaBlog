import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// পেজ এবং মেইন অ্যাপ ইমপোর্ট
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'

import Post from './pages/Post.jsx'
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'
import SavedPosts from './pages/SavedPosts.jsx'
import { Provider} from 'react-redux'
import store from './store/store.js'
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/all-posts",
        element: <AllPost />,
      },
      {
        path: "/add-post",
        element: <AddPost />,
      },
      // {
      //   path: "/edit-post",
      //   element: <Post />,
      // },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/saved-posts",
        element: <SavedPosts />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)