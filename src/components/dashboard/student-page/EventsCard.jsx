import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import GridLoader from 'react-spinners/GridLoader'
import RECOMMENDATIONS from '../../../constants/recommendations'

export default function EventsCard() {
  const [isLoading, setIsLoading] = useState(false)
  const [recommendations, setRecommendations] = useState([])

  async function recommendEvents() {
    setRecommendations([])
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setRecommendations(RECOMMENDATIONS)
    setIsLoading(false);
  }

  return (
    <div to className='bg-white rounded-2xl w-[350px] flex flex-col p-4'>
      <div className='flex flex-row justify-evenly items-center'>
        <p className='text-xl'>Recommended Events</p>
        <button onClick={() => recommendEvents()} className='bg-[#491DB6] text-white rounded-lg px-2 py-1'>Load</button>
      </div>
      <GridLoader 
        color={'#491DB6'}
        loading={isLoading}
        className='self-center mt-6'
      />
      <div className='mt-2'>
      {recommendations.map((event) => 
      <Link to={'/dashboard/events'}>
        <div className='flex flex-row bg-gray-100 mt-3 p-3 rounded-xl' key={event.name}>
          <p className=''>{event.name}</p>
        </div>
      </Link>
      )}
      </div>
    </div>
  )
}
