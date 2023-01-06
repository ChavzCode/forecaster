import React from 'react'
import AppIndicator from '../AppIndicator/AppIndicator'
import './index.css'

function AppMetricBar({theme, metrics}) {
  const keys = Object.keys(metrics)
  const values = Object.values(metrics)
  
  return (
    <div className= {`metricbar-ctn ${theme}`}>
        <AppIndicator keys={keys[0]} value={values[0]} />
        <AppIndicator keys={keys[1]} value={values[1]} />
        <AppIndicator keys={keys[2]} value={values[2]} />
    </div>
  )
}

export default AppMetricBar