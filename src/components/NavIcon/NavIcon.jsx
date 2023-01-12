import React, {useContext} from "react";
import { AppContext } from "../../context/AppContext"; 
import "./index.css";

function NavIcon({ Icon, sectionName }) {
    const {navSection, setNavSection} = useContext(AppContext)
  return (
    <div
      className={sectionName === navSection ? 'section-icon-ctn section-selected' : 'section-icon-ctn'}
      onClick={(e) => {
        setNavSection(sectionName)
      }}
    >
      <Icon className="nav-icon"></Icon>
    </div>
  );
}

export default NavIcon;
