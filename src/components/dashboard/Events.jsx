import React from 'react'
import { useState, useEffect } from 'react'

import searchIcon from '../../assets/search.svg'
import EventCard from './events/EventCard'
import EVENTS from '../../constants/events'

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventsList, setEventsList] = useState([])

  useEffect(() => {
    setEventsList(EVENTS)
  }, [])

  function searchEvents() {
    const eventsResults = EVENTS.filter((event) => event.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setEventsList(eventsResults)
  }

  return (
    <div className='bg-gray-100 h-[100vh]'>
      <div className='m-6 py-6 px-8 bg-white rounded-xl'>
        <div className='flex items-center'>
          <div>
            <p className='text-2xl font-bold'>Events</p>
          </div>
          <div className='bg-gray-200 h-8 flex items-center rounded-xl px-3 ml-auto'>
            <input 
              type='text'
              placeholder='Search'
              className='bg-gray-200 text-black focus:outline-none'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={searchIcon} className='h-5 w-5 hover:cursor-pointer' onClick={() => {searchEvents()}}/>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-xl m-6 p-6 h-[80vh] overflow-y-scroll grid grid-cols-4'>
          {
            eventsList.map((event, index) => 
              <EventCard 
                key={index}
                name={event.name}
                imageUrl={event.link}
                date={event.date}
                description={event.description}
              />
            )
          }
      </div>
    </div>
  )
}
