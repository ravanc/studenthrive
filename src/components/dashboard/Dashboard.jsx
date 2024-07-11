import React from 'react'
import { useState } from 'react'

import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('groups')

  return (
    <div className='grid grid-cols-[275px_1fr]'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <Outlet />
    </div>
  )
}
