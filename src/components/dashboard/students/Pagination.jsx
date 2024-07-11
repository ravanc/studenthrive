import React from 'react'

export default function Pagination({ postsPerPage, length, currentPage, setCurrentPage }) {
    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      paginationNumbers.push(i);
    }
  
    return (
      <div className='flex gap-2'>
        {paginationNumbers.map((pageNumber) => (
        <button
            key={pageNumber}
            className={`h-7 w-7 flex items-center justify-center rounded-full ${currentPage === pageNumber ? 'bg-[#5932EA] text-white' : 'bg-[#F5F5F5] text-black'}`}
            onClick={() => {setCurrentPage(pageNumber)}}
        >
            {pageNumber}
        </button>
        ))}
      </div>
    )
}
