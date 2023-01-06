// Importar React
import React, { useState } from "react";
//Create Context
const AppContext = React.createContext();

function AppProvider(props) {
  //Layout Control

  //Context Values
  const [lane, setLane] = useState('');
  const [rate, setRate] = useState(0);
  const [miles, setMiles] = useState(0);
  const [driverPay, setDriverPay] = useState(0);
  const [milesPerGalon, setMilesPerGalon] = useState(0);
  const [fuelPrice, setFuelPrice] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [dispatchFee, setDispatchFee] = useState(0);
  const [factoringFee, setFactoringFee] = useState(0);

  //Indicators
  const [grossRev, setGrossRev] = useState(0);
  const [netRev, setNetRev] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [insuranceCost, setInsuranceCost] = useState(0);
  const [fuelCost, setFuelCost] = useState(0);
  const [dollarPerMile, setDollarPerMile] = useState(0);
  const [driverCost, setDriverCost] = useState(0);
  const [dispatchCost, setDispatchCost] = useState(0);
  const [factoringCost, setFactoringCost] = useState(0);

  //Calculations
  let calculateInsuranceCost = () => {
    try {
      const daysTrip = miles/600;
      const insuranceCostDaily = insurance / 31;
      const insuranceCostTrip = insuranceCostDaily * daysTrip;
      setInsuranceCost(insuranceCostTrip);
    } catch (error) {
      console.log(error) 
    }
  } 
  


  // let calculateIndicators = () => {
  //   try {
  //     let grossRevTrip = rate;
  //     // let netRev = grossRev - expenses

  //     if (milesPerGalon > 0){
        
  //     }
      
  //     let timeInvesment =  miles/600;
  //     //Insurance
  //     let insuranceDaily = insurance/31;
  //     let totalInsurance = insuranceDaily * timeInvesment; 
  //     //Fuel
  //     let fuelGalonsTrip = miles/milesPerGalon;
  //     let fuelCostTrip  = fuelGalonsTrip * fuelPrice;
  //     //Dollar per Mile
  //     let dollarXMile = rate/miles;
  //     //Driver Cost
  //     let driverCostTrip = driverPay * miles;
  //     //Dispatch Cost
  //     let dispatchCostTrip = grossRevTrip * (dispatchFee / 100);
  //     //Factoring Cost
  //     let factoringCostTrip = grossRevTrip * (factoringFee / 100);
  //     let expensesTrip = totalInsurance + fuelCostTrip + driverCostTrip + dispatchCostTrip + factoringCostTrip;
  //     let netRevenueTrip = grossRevTrip - expensesTrip;   
  //   } catch (error) {
      
  //   }
  // }
  // calculateIndicators();

  //Return Values
  return (
    <AppContext.Provider
      value={{
        lane, setLane,
        rate, setRate,
        miles, setMiles,
        driverPay, setDriverPay,
        milesPerGalon, setMilesPerGalon,
        fuelPrice, setFuelPrice,
        insurance, setInsurance,
        dispatchFee, setDispatchFee,
        factoringFee, setFactoringFee,
        grossRev, setGrossRev,
        netRev, setNetRev,
        expenses, setExpenses,
        insuranceCost, setInsuranceCost,
        fuelCost, setFuelCost,
        dollarPerMile, setDollarPerMile,
        driverCost, setDriverCost,
        dispatchCost, setDispatchCost,
        factoringCost, setFactoringCost,
        calculateInsuranceCost
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
