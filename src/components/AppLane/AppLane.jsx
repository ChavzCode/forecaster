import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./index.css";
import AppInput from "../AppInput/AppInput";

function AppLane() {
  const { lane, rate, miles, updateData} =
    useContext(AppContext);

  return (
    <div className="lane-ctn">
      <div className="entry-ctn">
        <h4>Lane</h4>
        <div className="input-ctn">
          <input
            name={lane.property}
            onChange={(e) => {
              updateData(e.target);
            }}
            value={lane.value}
            type="text"
            placeholder="Insert a lane"
          />
        </div>
      </div>
      <AppInput property={rate.property} value={rate.value}></AppInput>
      <AppInput property={miles.property} value={miles.value}></AppInput>
    </div>
  );
}

export default AppLane;
