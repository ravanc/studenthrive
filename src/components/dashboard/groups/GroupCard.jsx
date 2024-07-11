import React from 'react'
import { Link } from 'react-router-dom'

import groupLogo from '../../../assets/groupWhite.svg'

export default function GroupCard({ groupName, relation, studentCount, type}) {
  return (
    <Link to={`/dashboard/group/${groupName}`} className='bg-[#E4E7EC] w-[300px] h-[200px] flex flex-col rounded-3xl p-6'>
      <div className='flex items-center'>
        <div className='flex w-9 h-9 rounded-full bg-[#70A0FF] items-center justify-center'>
          <img src={groupLogo} />
        </div>
        <p className='text-xl ml-3'>{groupName}</p>
      </div>
      <div className='mt-auto self-end text-end'>
        <p>{type}</p>
        <p>{relation}</p>
        <p>{studentCount} students</p>
      </div>
    </Link>
  )
}
