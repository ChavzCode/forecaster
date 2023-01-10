import React, { useContext } from "react";
import { IoMdArrowDropdown} from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import { AppContext } from "../../context/AppContext"; 
import "./index.css";

function AppMetricsList() {
  const { updateIndicators, savedIndicators, deleteIndicator, setIndicators } =
    useContext(AppContext);
  let i = 0;
  const newIndicators = savedIndicators
  return (
    <div className="data-list-ctn">
      <div className="dropdown-ctn">
        <p>Load Saved Indicators</p>
        <IoMdArrowDropdown className="icon" />
      </div>

      <ul className="metric-list-ctn">
        <h4>Lanes</h4>
        <ul>
          {savedIndicators.map((e) => {
            let laneName = String(e[0].value).length > 0 ? String(e[0].value) : `Lane ${i}`;
            i += 1;
            return (
              <div className="list-item-ctn" key={i}>
                <li
                  data-index={i} className="list-item" onClick={(e) => {
                      setIndicators(e.target.dataset.index);
                  }}
                >
                  {laneName}
                </li>
                <button
                  data-index={i}
                  className="delete-item"
                  onClick={(e) => {
                    deleteIndicator(e.target.dataset.index);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </ul>
      </ul>
    </div>
  );
}

export default AppMetricsList;
