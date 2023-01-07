import React, {useContext} from 'react'
import { AppContext } from '../../context/AppContext';
import './index.css'

function AppInput({property, value}) {
  const {
    updateData
  } = useContext(AppContext);

  return (
    <div className='entry-ctn center'>
        <h4>{property}</h4>
        <div className='input-ctn'>
            <input name={property} id={property} value={value} type="number" placeholder='+' onInput={(e) => {
              updateData(e.target);
            }}/>
        </div>
        
    </div>
  ) 
}

export default AppInput