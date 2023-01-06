import React from "react";
import AppDualSelector from "../AppDualSelector/AppDualSelector";
import "./index.css";

function AppSlider({ property, max, step, variable, setVariable, dual }) {
  return (
    <div className="slider-ctn">
      {!dual ? (
        <React.Fragment>
          <input
            onChange={(e) => {
              setVariable(e.target.value);
            }}
            type="number"
            placeholder="0"
            min={0}
            max={max}
            value={variable}
          />
          <h4>{property}</h4>
          <input
            onChange={(e) => {
              setVariable(e.target.value);
            }}
            type="range"
            value={variable}
            min={0}
            max={max}
            step={step}
          />
        </React.Fragment>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}

export default AppSlider;
