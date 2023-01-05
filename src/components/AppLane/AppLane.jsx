import React from 'react'
import './index.css'

function AppLane() {
  return (
    <div className='lane-ctn'>
        <div className='input-ctn'>
            <h4>Lane</h4>
            <input type="text" placeholder='Linden, NJ to Dallas, TX'/>
        </div>
        <div className='input-ctn'>
            <input type="number" />
        </div>
        <div className='input-ctn'>
            <input type="number" />
        </div>
    </div>
  )
}

export default AppLane