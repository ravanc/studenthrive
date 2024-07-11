import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import RadarChart from './student-page/RadarChart';
import studentProfile from '../../constants/student'
import GradesCard from './student-page/GradesCard'
import EventsCard from './student-page/EventsCard'
import CommentsCard from './student-page/CommentsCard';
import StudentProfile from './student-page/StudentProfile';

export default function StudentPage() {
  const { studentId } = useParams();
  // const [studentProfile, setStudentProfile] = useState({}) 

  // useEffect(() => {
  //   const _studentProfile = studentProfile.find((student) => student.student_id == studentId)
  //   if (!_studentProfile) {
  //     return <div>Unable to find student!</div>
  //   } else {
  //     setStudentProfile(_studentProfile)
  //   }
  // }, [])

  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col h-[100vh] flex-wrap gap-4 p-8'>
        <StudentProfile />
        <CommentsCard comments={studentProfile.notes}/>
        <EventsCard />
        <RadarChart scores={studentProfile.careerScores[0]} />
        <GradesCard grades={studentProfile.grades}/>
      </div>
    </div>
  )
}
