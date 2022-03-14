import React from 'react'

export default function NextDate({href,day,date,temp,icon}) {
  return (
         <li>
            <a href={href}>
                <p className="next-days-date"><span className="day">{day}</span> <span className="scnd-font-color">{date}</span></p>
                <p className="next-days-temperature">{temp}<span className={`icon ${icon} scnd-font-color`}></span></p>
            </a>
        </li>
       
    
  )
}
