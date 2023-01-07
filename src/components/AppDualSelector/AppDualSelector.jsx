import React from 'react'
import './index.css'

function AppDualSelector({value1, function1, value2, function2}) {
  return (
    
    <div className='selector-ctn'>
      <button> {value1} </button>
      <button> {value2} </button>
    </div>
  )
}

export default AppDualSelector;