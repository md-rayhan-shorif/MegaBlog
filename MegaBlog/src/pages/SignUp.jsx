import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormHeading from '../components/others/FormHeading';
import Input from '../components/others/Input';
import { useForm } from 'react-hook-form';
import authService from '../Appwrite/auth'; // আপনার ফোল্ডারের নাম 'Appwrite' নাকি 'appwrite' খেয়াল রাখবেন

const SignUp = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    setError('');
    setLoading(true);
    try {
      const userData = await authService.createAccount(formData);
      if (userData) {
        navigate('/');
      }
    } catch (error) { // 🔥 এখানে 'error' রিসিভ করছেন
      // 🔥 আগে এখানে 'err.message' ছিল, যা ভুল। এখন ঠিক করা হলো:
      setError(error.message || "An error occurred during signup"); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300 font-sans">
      <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-[480px] space-y-8">
          <div className="bg-white dark:bg-[#1e293b] p-8 md:p-10 rounded-xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            
            <FormHeading />
            
            {/* এরর মেসেজ দেখানোর জায়গা */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              
              <Input 
                label='Full Name'
                placeholder='Enter your full name'
                {...register('name', { required: true })}
              />
              <Input 
                label='Username'
                placeholder='Set your username'
                {...register('username', { required: true })}
              />
              <Input 
                label='Email Address'
                placeholder='name@example.com'
                {...register('email', { required: true })}
              />
              <div className="relative group">
                <Input 
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pr-11" 
                    {...register('password', { required: true })}
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
              
              <button 
                type='submit'
                disabled={loading}
                className="w-full py-4 px-6 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;