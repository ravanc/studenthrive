import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Pagination from './Pagination'

export default function StudentList({ students }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [displaySet, setDisplaySet] = useState([])
  const postsPerPage = 10;

  const firstIndex = (currentPage - 1) * postsPerPage
  const lastIndex = (currentPage * postsPerPage)
  
  useEffect(() => {
    setDisplaySet(students.slice(firstIndex, lastIndex))
  }, [students, currentPage])


  return (
  <>
    <table className="w-full table-auto mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left">Student Name</th>
          <th className="px-4 py-2 text-left">Class</th>
          <th className="px-4 py-2 text-left">Student ID</th>
          <th className="px-4 py-2 text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {displaySet.map((student) => 
          <tr key={student.student_id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2"><Link to={`/dashboard/student/${student.student_id}`}>{student.name}</Link></td>
            <td className="px-4 py-2">{student.class_name}</td>
            <td className="px-4 py-2">{student.student_id}</td>
            <td className="px-4 py-2">{student.email}</td>
          </tr>
        )}
      </tbody>
    </table>
    <div className='flex justify-center mt-6'>
      <Pagination postsPerPage={postsPerPage} length={students.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  </>
  )
}
