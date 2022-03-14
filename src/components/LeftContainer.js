import React from 'react'
import LineChartBlock from '../pages/LineChartBlock'
import MediaLeft from '../pages/MediaLeft'
import SocialLeft from '../pages/SocialLeft'
import DonutChartBlock from './DonutChartBlock'
import MenuBox from './MenuBox'

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
