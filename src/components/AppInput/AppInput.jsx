import React from 'react'
import './index.css'

function AppInput({property, value, setValue}) {
  return (
    <div className='entry-ctn center'>
        <h4>{property}</h4>
        <div className='input-ctn'>
            <input name={value} id={value} type="number" placeholder='+' onChange={(e) => {
              setValue(e.target.value);
            }}/>
        </div>
    </div>
  )
}

export default AppInput