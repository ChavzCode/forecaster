import React from 'react'
import AppIndicator from '../AppIndicator/AppIndicator'
import './index.css'

function AppMetricBar({theme}) {
  return (
    <div className= {`metricbar-ctn ${theme}`}>
        <AppIndicator/>
        <AppIndicator/>
        <AppIndicator/>
    </div>
  )
}

export default AppMetricBar