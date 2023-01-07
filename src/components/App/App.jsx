import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import NavBar from "../NavBar/NavBar";
import AppDualSelector from "../AppDualSelector/AppDualSelector";
import AppMetrics from "../AppMetrics/AppMetrics";
import AppIndicatorsBar from "../AppIndicatorsBar/AppIndicatorsBar";
import "./App.css";

function App() {
  const { saveIndicators, cleanIndicators } = useContext(AppContext);
  return (
    <React.Fragment>
      <NavBar />
      <div className="app-ctn">
        <h1>Load Profitability</h1>
        <AppDualSelector
          value1={"Save Indicators"}
          function1={saveIndicators}
          value2={"Clean Indicators"}
          function2={cleanIndicators}
        />
        <AppMetrics />
        <AppIndicatorsBar />
      </div>
    </React.Fragment>
  );
}

export default App;
