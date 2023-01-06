// Importar React
import React, { useState } from "react";
//Create Context
const AppContext = React.createContext();

function AppProvider(props) {
  //Context Values
  const [driverPay, setDriverPay] = useState(0);
  const [milesPerGalon, setMilesPerGalon] = useState(0);
  const [fuelPrice, setFuelPrice] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [dispatchFee, setDispatchFee] = useState(0);
  const [factoringFee, setFactoringFee] = useState(0);

  //Return Values
  return (
    <AppContext.Provider
      value={{
        driverPay, setDriverPay,
        milesPerGalon, setMilesPerGalon,
        fuelPrice, setFuelPrice,
        insurance, setInsurance,
        dispatchFee, setDispatchFee,
        factoringFee, setFactoringFee
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
