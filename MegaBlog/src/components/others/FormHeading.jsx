import React from 'react'

const FormHeading = () => {
  return (
     <div className="text-center space-y-4 mb-10">
             
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-serif">
                Create your account
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Already have an account? {' '}
                <a className="font-semibold text-[#2563eb] hover:underline underline-offset-4" href="#">Sign In</a>
              </p>
     </div>
  )
}

export default FormHeading