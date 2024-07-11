import React from 'react'
import { useParams } from 'react-router-dom'

import profilePicture from '../../../assets/boy.png'
import STUDENTS from '../../../constants/students'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

export default function StudentProfile() {
  const { studentId } = useParams()

  const studentProfile = STUDENTS.find((student) => student.student_id == studentId)

  return (
    <div className='w-[350px] bg-white rounded-2xl'>
      <div className='flex flex-row gap-3 p-4'>
        <img src={profilePicture} className='h-[150px] w-[125px] object-cover rounded-lg'/>
        <div className='flex flex-col justify-center'>
          <p className='text-lg font-bold'>{studentProfile.name}</p>
          <p>Class: {studentProfile.class_name}</p>
          <p>DOB: {studentProfile.dob}</p>
        </div>
      </div>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Education History
            </Box>
            <AccordionIcon />
          </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>2024: Woodridge Primary School</p>
            <p>2023: Lakefront Primary School</p>
            <p>2022: Lakefront Primary School</p>
          </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem>
          <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Academic Records
            </Box>
            <AccordionIcon />
          </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>2023: AL3</p>
            <p>2022: NIL</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
            Activities & Interest Groups
            </Box>
            <AccordionIcon />
          </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>[Clubs & Societies] Young Scientists' Club</p>
            <p>[Sports] Skipping</p>
            <p>[Competitions] Singapore Young Chemists 2024</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
            VIA & CIP
            </Box>
            <AccordionIcon />
          </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>2024: Willing Hearts - 3hrs</p>
            <p>2023: St. Lukes' Hospital - 2hrs</p>
          </AccordionPanel>
        </AccordionItem>
        </Accordion>
    </div>
  )
}
