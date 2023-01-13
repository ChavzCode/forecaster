import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineLineChart, AiFillPieChart } from 'react-icons/ai';
import NavIcon from '../NavIcon/NavIcon'
import haulitIsotypeUrl from '../../assets/haulit-isotype.svg'
import './index.css'

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='ctn-navbar'>
          {/* NavBar Logo */}
          <div className='haulit-isotype'>
            <img src={haulitIsotypeUrl} alt="X"/>
          </div>

          <nav className='nav'>
            <NavIcon sectionName='loadProfit' Icon={MdOutlineDashboard} />
            <NavIcon sectionName="forecaster" Icon={AiOutlineLineChart} />
          </nav>
      </div>
    </div>
  )
}

export default NavBar
