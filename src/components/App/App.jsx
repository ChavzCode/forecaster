import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import NavBar from "../NavBar/NavBar";
import AppDualSelector from "../AppDualSelector/AppDualSelector";
import AppMetrics from "../AppMetrics/AppMetrics";
import AppIndicatorsBar from "../AppIndicatorsBar/AppIndicatorsBar";
import AppMetricsList from "../AppMetricsList/AppMetricsList";
import AppFooter from "../AppFooter/AppFooter";
import "./App.css";

function App() {
  const { saveIndicators, cleanIndicators, savedIndicators} = useContext(AppContext);
  return (
    <React.Fragment>
      <NavBar />
      <div className="app-ctn">
        <div className="load-profit-ctn">
          <h1>Load Profitability</h1>
          {savedIndicators.length > 0 ? <AppMetricsList/> : <React.Fragment/>}
          
        </div>
        <AppDualSelector
          value1={"Save Indicators"}
          function1={saveIndicators}
          value2={"Clean Indicators"}
          function2={cleanIndicators}
        />
        <AppMetrics />
        <AppIndicatorsBar />
        <AppFooter/>
      </div>
    </React.Fragment>
  );
}

export default App;
