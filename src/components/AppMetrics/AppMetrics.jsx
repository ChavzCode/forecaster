import React from 'react'
import AppLane from '../AppLane/AppLane'
import AppResults from '../AppResults/AppResults'
import './index.css'


function AppMetrics() {
  return (
    <div className='metrics-ctn'>
        <AppLane/>
        <AppResults/>
    </div>
  )
}

export default AppMetrics