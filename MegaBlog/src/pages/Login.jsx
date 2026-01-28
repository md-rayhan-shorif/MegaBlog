import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                MegaBlog
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        <div className="w-full max-w-md z-10">
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            
            <h1 className="text-3xl font-bold text-center mb-8">Sign in</h1>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none"
              />
              <input 
                type="password" 
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none"
              />
              <button className="w-full py-3.5 bg-[#3B82F6] text-white font-bold rounded-xl shadow-lg">
                Sign In
              </button>

              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800"></div></div>
              
              </div>


            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;