import React from 'react';

const Settings = () => {
  return (
    <div className="bg-[#f5f7f8] dark:bg-[#0f1115] font-['Manrope',sans-serif] text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      
      

      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 flex flex-col gap-8">
            <div className="flex items-center gap-4 px-2">
              <div className="h-12 w-12 rounded-full shadow-lg overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=23" alt="Profile" />
              </div>
              <div>
                <h3 className="font-bold text-base">Alex Morgan</h3>
                <p className="text-xs text-[#0d7ff2] font-bold uppercase tracking-wider">Pro Member</p>
              </div>
            </div>
            
            <nav className="flex flex-col gap-1">
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0d7ff2]/10 border-l-4 border-[#0d7ff2] transition-all" href="#">
                <span className="material-symbols-outlined text-[#0d7ff2]">person</span>
                <span className="text-sm font-semibold">Account Info</span>
              </a>
              {['shield', 'notifications', 'payments', 'link'].map((icon, idx) => (
                <a key={idx} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-[#283039] group transition-all" href="#">
                  <span className="material-symbols-outlined opacity-60 group-hover:opacity-100">{icon}</span>
                  <span className="text-sm font-semibold opacity-70 group-hover:opacity-100 capitalize">{icon === 'shield' ? 'Security' : icon === 'payments' ? 'Billing' : icon}</span>
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <button className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-[#283039] rounded-xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-sm">logout</span> Sign Out
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="flex-1 max-w-4xl">
            <div className="mb-10">
              <h1 className="text-4xl font-black tracking-tight mb-2">Account Settings</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Refine your profile and managing your digital presence.</p>
            </div>

            {/* Profile Header Card */}
            <div className="bg-[#1a1d23]/60 backdrop-blur-md border border-[#283039]/50 rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group cursor-pointer">
                  <div className="h-32 w-32 rounded-full border-4 border-[#0d7ff2]/10 p-1 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=24" className="w-full h-full rounded-full object-cover" alt="Avatar" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white">photo_camera</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-1">Alex Morgan</h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-4">alex.morgan@blogpremium.com</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <button className="px-5 py-2.5 bg-[#0d7ff2] text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform">Update Photo</button>
                    <button className="px-5 py-2.5 bg-slate-200 dark:bg-[#283039] text-sm font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">Remove</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Sections */}
            <div className="space-y-12 mb-24">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-100 dark:border-[#283039]">
                <div>
                  <h3 className="text-xl font-bold mb-2">Personal Details</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">This information will be displayed on your public profile page.</p>
                </div>
                <div className="md:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider opacity-60">Full Name</label>
                      <input className="w-full bg-white dark:bg-[#1a1d23] border border-slate-200 dark:border-[#283039] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0d7ff2]/50 outline-none" type="text" defaultValue="Alex Morgan"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider opacity-60">Username</label>
                      <input className="w-full bg-white dark:bg-[#1a1d23] border border-slate-200 dark:border-[#283039] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0d7ff2]/50 outline-none" type="text" defaultValue="alexm_pro"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Bio</label>
                    <textarea className="w-full bg-white dark:bg-[#1a1d23] border border-slate-200 dark:border-[#283039] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0d7ff2]/50 outline-none" rows="4" defaultValue="Digital storyteller and tech enthusiast. Based in San Francisco."></textarea>
                  </div>
                </div>
              </div>

              {/* Preferences Toggles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                <h3 className="text-xl font-bold">Preferences</h3>
                <div className="md:col-span-2 space-y-4">
                  {[
                    { title: "Public Profile", desc: "Allow others to find you", checked: true },
                    { title: "Email Notifications", desc: "Weekly digests and updates", checked: false },
                    { title: "Dark Mode", desc: "Optimize for low-light", checked: true }
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#1a1d23]/50 rounded-xl border border-slate-100 dark:border-[#283039]">
                      <div>
                        <p className="font-bold">{pref.title}</p>
                        <p className="text-xs text-slate-500">{pref.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={pref.checked} />
                        <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0d7ff2]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Footer (Sticky) */}
            <div className="sticky bottom-8 z-40 bg-[#1a1d23]/60 backdrop-blur-lg border border-[#283039]/50 rounded-2xl p-4 flex items-center justify-between shadow-2xl">
              <p className="text-sm font-medium opacity-60 hidden sm:block">You have unsaved changes</p>
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-8 py-3 rounded-xl border border-slate-200 dark:border-[#283039] text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                <button className="flex-1 sm:flex-none px-10 py-3 rounded-xl bg-gradient-to-r from-[#0d7ff2] to-[#0066cc] text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all">Save Changes</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      
    </div>
  );
};

export default Settings;