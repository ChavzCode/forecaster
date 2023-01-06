import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./index.css";
import AppInput from "../AppInput/AppInput";

function AppLane() {
  const { lane, setLane, rate, setRate, miles, setMiles } =
    useContext(AppContext);

  return (
    <div className="lane-ctn">
      <div className="entry-ctn">
        <h4>Lane</h4>
        <div className="input-ctn">
          <input
            onChange={(e) => {
              setLane(e.target.value);
            }}
            value={lane}
            type="text"
            placeholder="Insert a lane"
          />
        </div>
      </div>
      <AppInput property={'Rate'} value={rate} setValue={setRate}></AppInput>
      <AppInput property={'Miles'} value={miles} setValue={setMiles}></AppInput>
    </div>
  );
}

export default AppLane;
