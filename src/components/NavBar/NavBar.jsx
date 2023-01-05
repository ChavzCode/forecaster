import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineLineChart, AiFillPieChart } from 'react-icons/ai';
import NavIcon from '../NavIcon/NavIcon'
import './index.css'

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='ctn-navbar'>
          {/* NavBar Logo */}
          <div className='haulit-isotype'>
            <AiFillPieChart/>
          </div>

          <nav className='nav'>
            <NavIcon Icon={MdOutlineDashboard} />
            <NavIcon Icon={AiOutlineLineChart} />
          </nav>
      </div>
    </div>
  )
}

export default NavBar
