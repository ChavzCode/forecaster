import React from 'react'
import AppMetricBar from '../AppMetricBar/AppMetricBar'
import './index.css'

function AppResults() {
  return (
    <div className='app-results'>
      <AppMetricBar theme="black-theme" />
      <AppMetricBar theme='white-theme'/>
      <AppMetricBar theme='white-theme'/>
    </div>
  )
}

export default AppResults