import { Button } from '@mui/material'
import React from 'react'

export default function NewsLetter() {
  return (
    <div className="join-newsletter block"> {/* JOIN NEWSLETTER (RIGHT-CONTAINER)  */}
    <h2 className="titular">JOIN THE NEWSLETTER</h2>
    <div className="input-container">
        <input type="text" placeholder="yourname@gmail.com" className="email text-input"/>
        <div className="input-icon envelope-icon-newsletter"><span className="fontawesome-envelope scnd-font-color"></span></div>
    </div>
    <Button variant="contained" color="success" className="subscribe button">SUBSCRIBE</Button>
</div>
  )
}
