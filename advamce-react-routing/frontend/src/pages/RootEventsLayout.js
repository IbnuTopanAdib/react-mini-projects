import React from 'react'
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

const RootEventsLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet/>
    </>
  )
}

export default RootEventsLayout