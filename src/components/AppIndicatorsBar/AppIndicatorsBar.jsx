import React, { useContext } from "react";
import AppSlider from "../AppSlider/AppSlider";
import { AppContext } from "../../context/AppContext";
import "./index.css";

function AppIndicatorsBar() {
  const {
    driverPay,
    setDriverPay,
    milesPerGalon,
    setMilesPerGalon,
    fuelPrice,
    setFuelPrice,
    insurance,
    setInsurance,
    dispatchFee,
    setDispatchFee,
    factoringFee,
    setFactoringFee,
  } = useContext(AppContext);

  return (
    <div className="indicators-bar-ctn">
      <h3>Indicators</h3>
      <div className="sliders-ctn">
        <AppSlider
          property="Driver $xM"
          max={3}
          step={0.1}
          variable={driverPay}
          setVariable={setDriverPay} 
        />
        <AppSlider
          property="Miles per Galon"
          max={10}
          step={0.1}
          variable={milesPerGalon}
          setVariable={setMilesPerGalon}
        />
        <AppSlider
          property="Fuel Price $"
          max={10}
          step={0.1}
          variable={fuelPrice}
          setVariable={setFuelPrice}
        />
        <AppSlider
          property="Insurance Monthly $"
          max={10000}
          step={1}
          variable={insurance}
          setVariable={setInsurance}
        />
        <AppSlider
          property="Dispatch Fee %"
          max={10}
          step={0.1}
          variable={dispatchFee}
          setVariable={setDispatchFee}
        />
        <AppSlider
          property="Factoring Fee %"
          max={10}
          step={0.1}
          variable={factoringFee}
          setVariable={setFactoringFee}
        />
      </div>
    </div>
  );
}

export default AppIndicatorsBar;
