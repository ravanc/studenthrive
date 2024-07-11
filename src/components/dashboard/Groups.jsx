import React from 'react'
import GroupCard from './groups/GroupCard'

export default function Groups() {
  return (
    <div className='bg-gray-100'>
      <div className='m-6 py-6 px-8 bg-white rounded-xl'>
        <p className='text-2xl font-bold'>Welcome back, Ms Ang!</p>
      </div>
      <div className='m-6 py-6 px-8 bg-white rounded-xl'>
        <p className='text-2xl font-bold'>All Groups</p>
        <p className='text-sm text-[#004FF0] italic'>Academic Year 2024</p>
        <div className='flex flex-wrap gap-4 mt-5'>
          <GroupCard groupName={'3A'} relation={'Form Teacher'} studentCount={30} type={'Class'}/>
          <GroupCard groupName={'3C'} relation={'Science Teacher'} studentCount={30} type={'Class'}/>
          <GroupCard groupName={'6A'} relation={'Science Teacher'} studentCount={30} type={'Class'}/>
          <GroupCard groupName={'6C'} relation={'Science Teacher'} studentCount={30} type={'Class'}/>
          <GroupCard groupName={'Science Olympiad'} relation={'Teacher-in-Charge'} studentCount={16} type={'CCA'}/>
          <GroupCard groupName={'Astronomy Club'} relation={'Assistant Teacher-in-Charge'} studentCount={16} type={'CCA'}/>
        </div>
      </div>
    </div>
  )
}
