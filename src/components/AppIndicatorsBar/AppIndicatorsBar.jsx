import React, { useContext } from "react";
import AppSlider from "../AppSlider/AppSlider";
import { AppContext } from "../../context/AppContext";
import "./index.css";

function AppIndicatorsBar() {
  const {
    driverPay,
    milesPerGalon,
    fuelPrice,
    insurance,
    dispatchFee,
    factoringFee
  } = useContext(AppContext);

  return (
    <div className="indicators-bar-ctn">
      <h3>Indicators</h3>
      <div className="sliders-ctn">
        <AppSlider
          title="Driver $xM"
          max={3}
          step={0.1}
          property={driverPay.property}
          value={driverPay.value}
        />
        <AppSlider
          title="Miles per Galon"
          max={10}
          step={0.1}
          property={milesPerGalon.property}
          value={milesPerGalon.value}
        />
        <AppSlider
          title="Fuel Price $"
          max={10}
          step={0.1}
          property={fuelPrice.property}
          value={fuelPrice.value}
        />
        <AppSlider
          title="Insurance Monthly $"
          max={10000}
          step={1}
          property={insurance.property}
          value={insurance.value}
        />
        <AppSlider
          title="Dispatch Fee %"
          max={10}
          step={0.1}
          property={dispatchFee.property}
          value={dispatchFee.value}
        />
        <AppSlider
          title="Factoring Fee %"
          max={10}
          step={0.1}
          property={factoringFee.property}
          value={factoringFee.value}
        />
      </div>
    </div>
  );
}

export default AppIndicatorsBar;
