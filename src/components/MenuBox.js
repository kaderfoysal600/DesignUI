import React from 'react'
import MenuBoxTab from './MenuBoxTab'

export default function MenuBox() {
  return (
    <div className="menu-box block">   {/* MENU BOX (LEFT-CONTAINER) */}
    <h2 className="titular">MENU BOX</h2>
    <ul className="menu-box-menu">
        <MenuBoxTab name='Messages' number='24'/>
        <MenuBoxTab name='Invites' number='3'/>
        <MenuBoxTab name='Events' number='5'/>
        <MenuBoxTab name='Account Settings'/>
        <MenuBoxTab name='Statistics'/>
    </ul>
</div>
  )
}
