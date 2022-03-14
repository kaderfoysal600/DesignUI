import React from 'react'

export default function NewsLetter() {
  return (
    <div className="join-newsletter block"> {/* JOIN NEWSLETTER (RIGHT-CONTAINER)  */}
    <h2 className="titular">JOIN THE NEWSLETTER</h2>
    <div className="input-container">
        <input type="text" placeholder="yourname@gmail.com" className="email text-input"/>
        <div className="input-icon envelope-icon-newsletter"><span className="fontawesome-envelope scnd-font-color"></span></div>
    </div>
    <a className="subscribe button" href="#21">SUBSCRIBE</a>
</div>
  )
}
