import React from 'react'

export default function SocialElementLeft({ name,className, number}) {
  return (
        <li className={name}><p className="icon"><span className={className}></span></p><p className="number">{number}</p></li>
 
  )
}
