import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import groupWhite from '../assets/groupWhite.svg'
import groupGray from '../assets/groupGray.svg'
import studentWhite from '../assets/studentWhite.svg'
import studentGray from '../assets/studentGray.svg'
import eventWhite from '../assets/eventWhite.svg'
import eventGray from '../assets/eventGray.svg'
import avatar from '../assets/teacher.png'
import logoutIcon from '../assets/logout.svg'


export default function Sidebar({ selectedTab, setSelectedTab }) {

  return (
    <div className='bg-blue-200 h-[100vh] flex flex-col p-8'>
      <img src={logo} className='w-[200px] self-center'/>
      <ul>
        <Link to={'groups'} onClick={() => {setSelectedTab('groups')}} className={`mt-5 p-1 flex items-center rounded-md ${(selectedTab == 'groups') && 'bg-[#491DB6] pl-3'}`}>
            <img src={selectedTab == 'groups' ? groupWhite : groupGray} className='w-7 h-7 mr-4'/>
            <p className={`text-xl ${(selectedTab == 'groups') ? 'text-white' : 'text-[#666666]'}`}>Groups</p>
        </Link>
        <Link to={'students'} onClick={() => {setSelectedTab('students')}} className={`mt-2 p-1 flex items-center rounded-md ${(selectedTab == 'students') && 'bg-[#491DB6] pl-3'}`}>
            <img src={selectedTab == 'students' ? studentWhite : studentGray} className='w-7 h-7 mr-4'/>
            <p className={`text-xl ${(selectedTab == 'students') ? 'text-white' : 'text-[#666666]'}`}>Students</p>
        </Link>
        <Link to={'events'} onClick={() => {setSelectedTab('events')}} className={`mt-2 p-1 flex items-center rounded-md ${(selectedTab == 'events') && 'bg-[#491DB6] pl-3'}`}>
            <img src={selectedTab == 'events' ? eventWhite : eventGray} className='w-7 h-7 mr-4'/>
            <p className={`text-xl ${(selectedTab == 'events') ? 'text-white' : 'text-[#666666]'}`}>Events</p>
        </Link>
      </ul>

      <div className='mt-auto grid grid-cols-[50px_1fr] grid-rows-2'>
        <img src={avatar} className='h-10 w-10 rounded-full col-span-1 row-span-2 self-center'/>
        <p className='text-sm'>Mary Ang</p>
        <p className='text-xs text-gray-500'>Science (Upper Primary)</p>
      </div>
      <Link to={'/'} className='flex items-center gap-1 text-[#666666] mt-3 px-1 text-sm'>
      <img src={logoutIcon} className='h-5 w-5'/>
        Sign Out
      </Link>
    </div>
  )
}
