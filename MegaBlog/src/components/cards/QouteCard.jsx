import React from 'react'

const QouteCard = () => {
  return (
    <div className="md:col-span-4 group">
            <article className="h-[300px] relative overflow-hidden rounded-[0.75rem] bg-white dark:bg-slate-900 transition-all duration-500 hover:-translate-y-1 border border-slate-200 dark:border-slate-800">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="material-icons-outlined text-[#2563eb] text-4xl mb-4">format_quote</span>
                  <h2 className="font-serif text-2xl leading-tight">Mistakes Are the Best Teachers</h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div>
                    <p className="text-sm font-bold">Author Name</p>
                    <p className="text-xs text-slate-500">Editorial Lead</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
  )
}

export default QouteCard