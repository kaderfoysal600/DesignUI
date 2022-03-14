import React from 'react'
import Account from '../components/Account'
import NewsLetter from '../components/NewsLetter'
import CalenderDay from './CalenderDay'
import CalenderMonth from './CalenderMonth'
import Loading from './Loading'

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
