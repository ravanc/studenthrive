import React from 'react'

export default function EventCard({ name, category, date, description, imageUrl }) {
  return (
    <div className='h-[450px] w-[250px] border-2 border-[#666666] rounded-xl flex flex-col items-center p-5 mb-5'>
      <div className='border-[2px] border-black w-full h-[200px] rounded-xl overflow-hidden object-stretch'>
        <img src={imageUrl} className='w-full h-full object-cover'/>
      </div>
      <div className='flex flex-col h-full'>
        <p className='font-bold leading-6 mt-2'>{name}</p>
        <p className='text-sm'>{description}</p>
        <p className='self-end mt-auto'>{date}</p>
      </div>
    </div>
  )
}
