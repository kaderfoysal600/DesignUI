import React from 'react'
import SocialMiddleElement from '../components/SocialMiddleElement'

export default function SocialMiddle() {
  return (
<ul className="social block">
  <SocialMiddleElement href='#50' name='facebook' text='SHARE TO FACEBOOK'/>
  <SocialMiddleElement href='#51' name='twitter' text='SHARE TO TWITTER'/>
  <SocialMiddleElement href='#52' name='googleplus' text='SHARE TO GOOGLE+'/>
</ul>

  )
}
