import React from 'react'

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

 
  if (totalPages <= 1) return null;

  return (
    <div className="mt-20 mb-10 flex justify-center items-center gap-3">
      <span className="text-slate-500 dark:text-slate-400 font-medium mr-2">Pages:</span>
      
      <div className="flex gap-2 bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-2xl backdrop-blur-sm">
        {
          pages.map((page, index) => {
            const isActive = page === currentPage;
            
            return (
              <button
                key={index}
               
                onClick={() => handlePageChange(page)}
                className={`
                  w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 font-bold text-sm
                  ${isActive 
                    ? "bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/20 scale-110" 
                    : "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                  }
                `}
              >
                {page}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pagination