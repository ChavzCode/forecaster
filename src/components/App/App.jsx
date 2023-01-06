import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import NavBar from '../NavBar/NavBar'
import AppDualSelector from '../AppDualSelector/AppDualSelector'
import AppMetrics from '../AppMetrics/AppMetrics'
import AppIndicatorsBar from '../AppIndicatorsBar/AppIndicatorsBar'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <div className='app-ctn'>
        <h1>Load Profitability</h1>
        <AppDualSelector/>
        <AppMetrics/>
        <AppIndicatorsBar/>
      </div>
    </React.Fragment>
  )
}

export default App
