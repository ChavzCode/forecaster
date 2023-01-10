import React, { useContext } from "react";
import AppLane from "../AppLane/AppLane";
import { AppContext } from "../../context/AppContext";
import AppMetricBar from "../AppMetricBar/AppMetricBar";
import "./index.css";

function AppMetrics() {
  const {
    grossRev,
    netRev,
    expenses,
    insuranceCost,
    fuelCost,
    dollarPerMile,
    driverCost,
    dispatchCost,
    factoringCost,
  } = useContext(AppContext);

  const metrics1 = {
    "Gross Revenue": grossRev,
    "Net Revenue": netRev,
    "Total Expense": expenses,
  };

  const metrics2 = {
    Insurance: insuranceCost,
    Fuel: fuelCost,
    "Dollar per Mile": dollarPerMile,
  };

  const metrics3 = {
    "Driver Payment": driverCost,
    "Dispatch Fee": dispatchCost,
    "Factoring Fee": factoringCost,
  };

  return (
    <div className="metrics-ctn">
      <AppLane />
      <div className="app-results">
        <AppMetricBar theme="black-theme" metrics={metrics1} />
        <AppMetricBar theme="white-theme" metrics={metrics2} />
        <AppMetricBar theme="white-theme" metrics={metrics3} />
      </div>
      {/* <div className="charts-ctn">
      </div> */}
    </div>
  );
}

export default AppMetrics;
