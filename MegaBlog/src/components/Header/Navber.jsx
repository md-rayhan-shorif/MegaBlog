import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
           (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dark mode টগল করার ফাংশন
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Menu টগল করার ফাংশন
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Menu বন্ধ করার ফাংশন (mobile view-এ link click করলে)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Dark mode পরিবর্তন হলে HTML element-এ class অ্যাড/রিমুভ করা
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

  // Esc key press এ menu বন্ধ করার জন্য
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Menu open থাকলে body এ scroll disable করা
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Mobile menu বাইরে click করলে বন্ধ করার জন্য
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobile-menu');
      const hamburger = document.getElementById('hamburger-button');
      
      if (isMenuOpen && menu && hamburger && 
          !menu.contains(event.target) && 
          !hamburger.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/all-posts"
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`
                }
              >
                All Posts
              </NavLink>

              <NavLink
                to="/add-post"
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`
                }
              >
                Add Post
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`
                }
              >
                Profile
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? "text-[#2563eb]" : "text-slate-500 hover:text-[#2563eb]"}`
                }
              >
                Signup
              </NavLink>

              <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>

              <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-4 lg:px-6 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90">
                Logout
              </button>
              
              {/* Dark Mode Toggle Button */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <span className="material-icons-outlined text-lg md:text-xl text-yellow-400">light_mode</span>
                ) : (
                  <span className="material-icons-outlined text-lg md:text-xl">dark_mode</span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <span className="material-icons-outlined text-lg text-yellow-400">light_mode</span>
                ) : (
                  <span className="material-icons-outlined text-lg">dark_mode</span>
                )}
              </button>
              
              <button
                id="hamburger-button"
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <span className="material-icons-outlined text-xl">close</span>
                ) : (
                  <span className="material-icons-outlined text-xl">menu</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
          <div 
            id="mobile-menu"
            className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-[#0a0a0c] shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-[#2563eb] text-2xl">auto_awesome</span>
                  <span className="font-serif text-xl font-bold tracking-tight dark:text-white">MegaBlog</span>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <span className="material-icons-outlined">close</span>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `block text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                      isActive 
                        ? "text-[#2563eb] bg-blue-50 dark:bg-blue-900/20" 
                        : "text-slate-700 dark:text-slate-300 hover:text-[#2563eb] hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-lg">home</span>
                    <span>Home</span>
                  </div>
                </NavLink>

                <NavLink
                  to="/all-posts"
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `block text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                      isActive 
                        ? "text-[#2563eb] bg-blue-50 dark:bg-blue-900/20" 
                        : "text-slate-700 dark:text-slate-300 hover:text-[#2563eb] hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-lg">article</span>
                    <span>All Posts</span>
                  </div>
                </NavLink>

                <NavLink
                  to="/add-post"
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `block text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                      isActive 
                        ? "text-[#2563eb] bg-blue-50 dark:bg-blue-900/20" 
                        : "text-slate-700 dark:text-slate-300 hover:text-[#2563eb] hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-lg">add_circle</span>
                    <span>Add Post</span>
                  </div>
                </NavLink>

                <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                  <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-3.5 px-4 rounded-full text-base font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2">
                    <span className="material-icons-outlined text-lg">logout</span>
                    <span>Logout</span>
                  </button>
                </div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {darkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                  <button 
                    onClick={toggleDarkMode}
                    className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}>
                      {darkMode ? (
                        <span className="material-icons-outlined text-xs text-yellow-400">light_mode</span>
                      ) : (
                        <span className="material-icons-outlined text-xs">dark_mode</span>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;