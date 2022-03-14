import React from 'react'

export default function OsPercentage({className,os,percentage}) {
  return (
    <li>
    <p className={className}>{os}</p>
    <p className="os-percentage">{percentage}<sup>%</sup></p>
</li>
  )
}
