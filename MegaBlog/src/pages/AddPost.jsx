import React from 'react';

const AddPost = () => {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen font-['Inter',sans-serif]">
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#1e293b]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-[#2563eb] p-1.5 rounded-lg">
                <span className="material-icons-round text-white text-xl">auto_awesome</span>
              </div>
              <span className="text-xl font-bold tracking-tight">MegaBlog</span>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors" href="#">Home</a>
              <a className="text-sm font-medium text-slate-500 hover:text-[#2563eb] transition-colors" href="#">All Posts</a>
              <a className="text-sm font-semibold text-[#2563eb]" href="#">Add Post</a>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
                <span className="material-icons-round text-lg">logout</span> Logout
              </button>
              <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                <span className="material-icons-round text-lg dark:hidden">dark_mode</span>
                <span className="material-icons-round text-lg hidden dark:block text-white">light_mode</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Editor Section */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex gap-0.5 mr-2">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons-round text-xl">format_bold</span></button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons-round text-xl">format_italic</span></button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons-round text-xl">format_underlined</span></button>
                </div>
                <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1"></div>
                <div className="flex gap-0.5 mx-2">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons-round text-xl">format_align_left</span></button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons-round text-xl">format_list_bulleted</span></button>
                </div>
                <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1"></div>
                <div className="flex gap-0.5 ml-2">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons-round text-xl">insert_link</span></button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons-round text-xl">image</span></button>
                </div>
                <div className="ml-auto flex items-center gap-2 px-3">
                  <span className="text-xs font-medium text-slate-400">0 words</span>
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-[10px] uppercase font-bold tracking-wider">Draft Auto-saved</span>
                </div>
              </div>

              {/* Editable Area */}
              <div 
                className="p-8 min-h-[600px] prose dark:prose-invert max-w-none focus:outline-none" 
                contentEditable="true"
                suppressContentEditableWarning={true}
              >
                <p className="text-slate-400 dark:text-slate-500 italic">Start writing your amazing story here...</p>
              </div>
            </div>
          </div>

          {/* Sidebar Settings */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
              
              {/* Post Title */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Post Title</label>
                <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#2563eb] transition-all outline-none" placeholder="Enter a catchy title..." type="text"/>
              </div>

              {/* URL Slug */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">URL Slug</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">/</span>
                  <input className="w-full pl-8 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#2563eb] outline-none text-sm" placeholder="post-url-handle" type="text"/>
                </div>
              </div>

              {/* Featured Image Upload */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Featured Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 dark:border-slate-700 border-dashed rounded-xl hover:border-[#2563eb]/50 transition-colors group cursor-pointer bg-slate-50 dark:bg-slate-900">
                  <div className="space-y-1 text-center">
                    <span className="material-icons-round text-slate-400 text-4xl group-hover:text-[#2563eb] transition-colors">cloud_upload</span>
                    <div className="flex text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium text-[#2563eb]">Upload a file</span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>

              {/* Publish Button */}
              <button className="w-full group relative flex items-center justify-center gap-2 py-4 px-6 bg-[#2563eb] hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all overflow-hidden">
                <span className="relative z-10">Publish Story</span>
                <span className="material-icons-round text-lg relative z-10 group-hover:translate-x-1 transition-transform">send</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>

            {/* Pro-tip Card */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 p-4 rounded-xl">
              <div className="flex gap-3">
                <span className="material-icons-round text-[#2563eb]">lightbulb</span>
                <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                  <span className="font-bold">Pro-tip:</span> Use high-quality cover images to increase reader engagement by up to 40%.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0f172a]/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#2563eb] p-1 rounded-md">
                <span className="material-icons-round text-white text-base">auto_awesome</span>
              </div>
              <span className="text-lg font-bold tracking-tight">MegaBlog</span>
            </div>
            <p className="text-sm text-slate-500">© 2026 MegaBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AddPost;