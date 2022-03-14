import React from 'react'

export default function Porcion({id,className,dataRel}) {
  return (
    <div id={id} className="recorte">
          <div className={className} data-rel={dataRel}></div>
        </div>
  )
}
