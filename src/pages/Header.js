import React from 'react'
import HeaderMenuTab from '../components/HeaderMenuTab'

export default function Header() {
  return (
   
    <header className="block">
    <ul className="header-menu horizontal-list">
        <HeaderMenuTab name = 'Setting' icon = 'entypo-cog'/>
        <HeaderMenuTab name = 'Account' icon='fontawesome-user'/>
        <HeaderMenuTab name = 'Messages' icon = 'fontawesome-envelope'/>
        <HeaderMenuTab name = 'Favorites' icon='fontawesome-star-empty'/>
    </ul>
    <div className="profile-menu">
        <p>Me <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
        <div className="profile-picture small-profile-picture">
            <img width="40px" alt="Anne Hathaway pic" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"/>
        </div>
    </div>
</header>
  )
}
