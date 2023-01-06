import React from "react";
import "./index.css";
import AppInput from "../AppInput/AppInput";

function AppLane() {
  return (
    <div className="lane-ctn">
      <div className="entry-ctn">
        <h4>Lane</h4>
        <div className="input-ctn">
          <input type="text" placeholder="Linden, NJ to Dallas, TX" />
        </div>
      </div>
      <AppInput value={"rate"}></AppInput>
      <AppInput value={"miles"}></AppInput>
    </div>
  );
}

export default AppLane;
