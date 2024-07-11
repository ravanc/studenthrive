import React from 'react'

export default function GradesCard({ grades }) {
  return (
    <div className='bg-white rounded-2xl w-[350px] flex flex-col p-4'>
      <p className='text-xl text-center'>Grades at a Glance</p>
      {grades.map((subject) => 
        <div key={subject.subject} className='flex flex-row bg-gray-100 mt-3 p-3 rounded-xl'>
          <p>{subject.subject}</p>
          <p className='ml-auto'>{subject.grades}</p>
        </div>
      )}
      
    </div>
  )
}
