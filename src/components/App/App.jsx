import React, { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import NavBar from '../NavBar/NavBar'
import AppDualSelector from '../AppDualSelector/AppDualSelector'
import AppMetrics from '../AppMetrics/AppMetrics'
import './App.css'

function App() {
  const {
    x,
    y
  } = useContext(AppContext);


  return (
    <React.Fragment>
      <NavBar/>
      <div className='app-ctn'>
        <h1>Load Profitability</h1>
        <AppDualSelector/>
        <AppMetrics/>
      </div>
    </React.Fragment>
  )
}

export default App
