import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../Appwrite/auth';
import { logout } from '../../store/authSlice';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
           (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dbUserData, setDbUserData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authStatus = useSelector(state => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (authStatus && userData?.$id) {
      authService.getUserProfile(userData.$id).then((res) => {
        if (res) setDbUserData(res);
      });
    }
  }, [authStatus, userData]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      setShowDropdown(false);
      setIsMenuOpen(false);
      navigate('/login');
    } catch (error) {
      console.log("Navbar :: handleLogout :: error", error);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showDropdown && !e.target.closest('.profile-dropdown')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [showDropdown]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#0a0a0c]/70 backdrop-blur-xl border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <Link to='/' className='flex items-center gap-2'>
              <span className="material-icons-outlined text-[#2563eb] text-2xl md:text-3xl">auto_awesome</span>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight dark:text-white">MegaBlog</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`}>Home</NavLink>
              
              {authStatus && (
                <>
                  <NavLink to="/all-posts" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`}>All Posts</NavLink>
                  <NavLink to="/add-post" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`}>Add Post</NavLink>
                  <NavLink to="/profile" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`}>Profile</NavLink>
                </>
              )}

              {!authStatus && (
                <>
                  <NavLink to="/login" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`}>Login</NavLink>
                  <NavLink to="/signup" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`}>Signup</NavLink>
                </>
              )}

              {authStatus && (
                <>
                  <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>
                  <button 
                    onClick={handleLogout}
                    className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-4 lg:px-6 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90 shadow-sm"
                  >
                    Logout
                  </button>
                </>
              )}
              
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {darkMode ? <span className="material-icons-outlined text-lg md:text-xl text-yellow-400">light_mode</span> : <span className="material-icons-outlined text-lg md:text-xl">dark_mode</span>}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {darkMode ? <span className="material-icons-outlined text-lg text-yellow-400">light_mode</span> : <span className="material-icons-outlined text-lg">dark_mode</span>}
              </button>
              <button id="hamburger-button" onClick={toggleMenu} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {isMenuOpen ? <span className="material-icons-outlined text-xl dark:text-white">close</span> : <span className="material-icons-outlined text-xl dark:text-white">menu</span>}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
          <div id="mobile-menu" className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-[#0a0a0c] shadow-2xl transform transition-transform duration-300 ease-in-out border-l dark:border-white/5">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-[#2563eb] text-2xl">auto_awesome</span>
                  <span className="font-serif text-xl font-bold tracking-tight dark:text-white">MegaBlog</span>
                </div>
                <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"><span className="material-icons-outlined">close</span></button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `flex items-center gap-3 text-base font-medium py-3 px-4 rounded-xl transition-colors ${isActive ? "text-[#2563eb] bg-blue-50 dark:bg-blue-900/20" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"}`}>
                  <span className="material-icons-outlined text-lg">home</span>
                  <span>Home</span>
                </NavLink>

                {authStatus && (
                  <>
                    <NavLink to="/all-posts" onClick={closeMenu} className={({ isActive }) => `flex items-center gap-3 text-base font-medium py-3 px-4 rounded-xl transition-colors ${isActive ? "text-[#2563eb] bg-blue-50 dark:bg-blue-900/20" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"}`}>
                      <span className="material-icons-outlined text-lg">article</span>
                      <span>All Posts</span>
                    </NavLink>
                    <NavLink to="/add-post" onClick={closeMenu} className={({ isActive }) => `flex items-center gap-3 text-base font-medium py-3 px-4 rounded-xl transition-colors ${isActive ? "text-[#2563eb] bg-blue-50 dark:bg-blue-900/20" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"}`}>
                      <span className="material-icons-outlined text-lg">add_circle</span>
                      <span>Add Post</span>
                    </NavLink>
                    {/* Updated Profile Link to look consistent */}
                    <NavLink to="/profile" onClick={closeMenu} className={({ isActive }) => `flex items-center gap-3 text-base font-medium py-3 px-4 rounded-xl transition-colors ${isActive ? "text-[#2563eb] bg-blue-50 dark:bg-blue-900/20" : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"}`}>
                      <span className="material-icons-outlined text-lg">account_circle</span>
                      <span>Profile</span>
                    </NavLink>
                  </>
                )}

                {!authStatus && (
                  <div className="pt-4 space-y-2">
                    <NavLink to="/login" onClick={closeMenu} className="block text-center text-base font-medium py-3 px-4 rounded-xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">Login</NavLink>
                    <NavLink to="/signup" onClick={closeMenu} className="block text-center text-base font-medium py-3 px-4 rounded-xl bg-[#2563eb] text-white">Signup</NavLink>
                  </div>
                )}
              </div>

              {/* Logout Section */}
              {authStatus && (
                <div className="p-6 border-t border-slate-100 dark:border-white/5">
                  <button 
                    onClick={handleLogout} 
                    className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-3.5 px-4 rounded-xl text-base font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  >
                    <span className="material-icons-outlined text-lg">logout</span>
                    <span>Logout</span>
                  </button>
                </div>
              )}
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;