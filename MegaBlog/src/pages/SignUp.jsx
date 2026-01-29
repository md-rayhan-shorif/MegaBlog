import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormHeading from '../components/others/FormHeading';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300 font-sans">
      
      

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-[480px] space-y-8">
          <div className="bg-white dark:bg-[#1e293b] p-8 md:p-10 rounded-xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            
           <FormHeading/>

            <form className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="full-name">
                  Full Name
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 group-focus-within:text-[#2563eb] transition-colors">
                    <span className="material-symbols-outlined text-lg">person</span>
                  </span>
                  <input 
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563eb] transition-all outline-none" 
                    id="full-name" 
                    placeholder="John Doe" 
                    type="text" 
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 group-focus-within:text-[#2563eb] transition-colors">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </span>
                  <input 
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563eb] transition-all outline-none" 
                    id="email" 
                    placeholder="name@example.com" 
                    type="email" 
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">
                  Password
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 group-focus-within:text-[#2563eb] transition-colors">
                    <span className="material-symbols-outlined text-lg">lock</span>
                  </span>
                  <input 
                    className="block w-full pl-11 pr-11 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-[#2563eb] transition-all outline-none" 
                    id="password" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"} 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <button className="w-full py-4 px-6 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center space-x-2">
                <span>Create Account</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                <span className="bg-white dark:bg-[#1e293b] px-4 text-slate-400">Or continue with</span>
              </div>
            </div>

            {/* Social Auth */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center py-3 px-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium text-sm">
                <img alt="Google" className="w-5 h-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" />
                Google
              </button>
              <button className="flex items-center justify-center py-3 px-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium text-sm">
                <img alt="Facebook" className="w-5 h-5 mr-2" src="https://www.svgrepo.com/show/475647/facebook-color.svg" />
                Facebook
              </button>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400">
            By signing up, you agree to our {' '}
            <a className="underline hover:text-[#2563eb]" href="#">Terms</a> and {' '}
            <a className="underline hover:text-[#2563eb]" href="#">Privacy</a>.
          </p>
        </div>
      </main>

      
    </div>
  );
};

export default SignUp;