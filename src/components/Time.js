import React from 'react'

export default function Time({duration,href}) {
  return (
    <li><a className="time-lenght-btn" href={href}>{duration}</a></li>
  )
}
