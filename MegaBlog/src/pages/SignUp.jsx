import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormHeading from '../components/others/FormHeading';
import Input from '../components/others/Input';

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
              
              <Input 
              label = 'Full Name'
              placeholder = 'Enter you full name'
              icon=''
              />
              <Input 
              label = 'Username'
              placeholder = 'Set your username'
              icon=''
              />
              <Input 
              label = 'Email Address'
              placeholder = 'name@example.com'
              icon=''
              />
              <div className="relative group">
              <Input 
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  icon=""
                  className="pr-11" 
              />
              <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-3 right-3.5 text-slate-400 hover:text-slate-600 transition-colors"
              >
                  <span className="material-symbols-outlined text-lg">
                      {showPassword ? 'Hide' : 'Show'}
                  </span>
              </button>
          </div>
          <button className="w-full py-4 px-6 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center space-x-2">
            Create Account
            
        </button>
             



            </form>

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