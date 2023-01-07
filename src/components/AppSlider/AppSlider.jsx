import React, { useContext } from "react";
import AppDualSelector from "../AppDualSelector/AppDualSelector";
import { AppContext } from "../../context/AppContext";
import "./index.css";

function AppSlider({ title, property, max, step, value, dual }) {
  const { updateData } = useContext(AppContext);

  return (
    <div className="slider-ctn">
      {!dual ? (
        <React.Fragment>
          <input
            onChange={(e) => {
              updateData(e.target);
            }}
            type="number"
            placeholder="0"
            min={0}
            max={max}
            name={property}
            value={value}
          />
          <h4>{title}</h4>
          <input
            onChange={(e) => {
              updateData(e.target);
            }}
            type="range"
            name={property}
            value={value}
            min={0}
            max={max}
            step={step}
          />
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
}

export default AppSlider;
