import React from 'react'
import './index.css'

function AppInput({value}) {
  return (
    <div className='entry-ctn center'>
        <h4>{value}</h4>
        <div className='input-ctn'>
            <input name={value} id={value} type="number" placeholder='+'/>
        </div>
    </div>
  )
}

export default AppInput