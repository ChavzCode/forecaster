import React from 'react'
import './index.css'

function AppIndicator({keys, value}) {
  return (
    <div className='indicator-ctn'>
        <h3>{keys}</h3>
        <div className='result-ctn'>
            <p>{`${value}$`}</p>
        </div>
    </div>
  )
}

export default AppIndicator