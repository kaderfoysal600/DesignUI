import React from 'react'

export default function Loading() {
  return (
    <div className="loading block">  {/* LOADING (RIGHT-CONTAINER)  */}
    <div className="progress-bar downloading"></div>
    <p><span className="icon fontawesome-cloud-download scnd-font-color"></span>Downloading...</p>
    <p className="percentage">81<sup>%</sup></p>
    <div className="progress-bar uploading"></div>
    <p><span className="icon fontawesome-cloud-upload scnd-font-color"></span>Uploading...</p>
    <p className="percentage">43<sup>%</sup></p>
</div>
  )
}
