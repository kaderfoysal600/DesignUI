import React from 'react'
import Account from './RightContainerPages/Account'
import NewsLetter from './RightContainerPages/NewsLetter'
import Loading from './RightContainerPages/Loading'
import CalenderDay from './RightContainerPages/CalenderDay'
import CalenderMonth from './RightContainerPages/CalenderMonth'
export default function RightContainer() {
  return (
    <div className="right-container container">
        <NewsLetter />
        <Account />
        <Loading />
        <CalenderDay />
        <CalenderMonth />
    </div>
  )
}
