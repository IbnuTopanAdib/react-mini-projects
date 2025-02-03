import React from 'react'
import { Link } from 'react-router-dom'

const EventsPage = () => {

  const events = [
    {
      id: 1,
      title: "membuang sampah"
    },
    {
      id: 2,
      title: "membersihkan kamar mandi"
    }, {
      id: 3,
      title: "mandi"
    }
  ]
  return (
    <ul>
      {
        events.map(event =>
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        )
      }
    </ul>
  )
}

export default EventsPage