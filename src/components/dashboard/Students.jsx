import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import STUDENTS from '../../constants/students'
import StudentList from './students/StudentList'
import searchIcon from '../../assets/search.svg'

export default function Students() {
  const [searchQuery, setSearchQuery] = useState('')
  const [studentList, setStudentList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setStudentList(STUDENTS)
  }, [])

  function searchName(query) {
    const results = STUDENTS.filter((student) => student.name.toLowerCase().includes(query.toLowerCase()))
    setStudentList(results)
  }

  return (
    <div className='bg-gray-100'>
      <div className='m-6 py-6 px-8 bg-white rounded-xl'>
        <div className='flex items-center'>
          <div>
            <p className='text-2xl font-bold'>All Students</p>
            <p className='text-sm text-[#004FF0] italic'>Academic Year 2024</p>
          </div>
          <div className='bg-gray-200 h-8 flex items-center rounded-xl px-3 ml-auto'>
            <input 
              type='text'
              placeholder='Search'
              className='bg-gray-200 text-black focus:outline-none'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={searchIcon} className='h-5 w-5 hover:cursor-pointer' onClick={() => searchName(searchQuery)}/>
          </div>
        </div>
        <StudentList students={studentList}/>
      </div>
    </div>
  )
}
