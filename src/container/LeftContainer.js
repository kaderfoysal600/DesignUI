import React from 'react'
import LineChartBlock from './leftContainerPages/LineChartBlock'
import MediaLeft from './leftContainerPages/MediaLeft'
import SocialLeft from './leftContainerPages/SocialLeft'
import DonutChartBlock from './leftContainerPages/DonutChartBlock'
import MenuBox from './leftContainerPages/MenuBox'

export default function LeftContainer() {
  return (
    <div className='left-container container'>
        <MenuBox/>
        <DonutChartBlock/>
        <LineChartBlock/>
        <MediaLeft />
        <SocialLeft />
    </div>
  )
}
