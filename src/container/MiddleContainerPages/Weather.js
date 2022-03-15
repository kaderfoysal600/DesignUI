import React from 'react'
import NextDate from '../../components/NextDate'

export default function Weather() {
  return (
    <div className="weather block clear"> {/* WEATHER (MIDDLE-CONTAINER)  */}
    <h2 className="titular"><span className="icon entypo-location"></span><strong>CLUJ-NAPOCA</strong>/RO</h2>
    <div className="current-day">
        <p className="current-day-date">FRI 29/06</p>
        <p className="current-day-temperature">24º<span className="icon-cloudy"></span></p>
    </div>
    <ul className="next-days">
       <NextDate href='#43' day='SAT' date='29/06' temp='25º' icon='icon-cloudy'/>
       <NextDate href='#44' day='SUN' date='30/06' temp='22º' icon='icon-cloudy2'/>
       <NextDate href='#45' day='MUN' date='01/07' temp='24º' icon='icon-cloudy2'/>
       <NextDate href='#46' day='TUE' date='02/07' temp='26º' icon='icon-cloudy'/>
       <NextDate href='#47' day='WED' date='03/07' temp='27º' icon='icon-sun'/>
       <NextDate href='#48' day='THU' date='04/07' temp='29º' icon='icon-sun'/>
    </ul>
</div>
  )
}
