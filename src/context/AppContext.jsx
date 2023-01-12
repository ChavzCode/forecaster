// Importar React
import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

//Create Context
const AppContext = React.createContext();

function AppProvider(props) {
  //Layout Control

  //Data
  const defaultData = [
    { property: "lane", value: "" },
    { property: "rate", value: 0 },
    { property: "miles", value: 0 },
    { property: "driverPay", value: 0 },
    { property: "milesPerGalon", value: 0 },
    { property: "fuelPrice", value: 0 },
    { property: "insurance", value: 0 },
    { property: "dispatchFee", value: 0 },
    { property: "factoringFee", value: 0 },
  ];

  const expensesDefaultDist = {
    "Insurance Cost": 1,
    "Fuel Cost": 1,
    "Driver Cost": 1,
    "Dispatch Cost": 1,
    "Factoring Cost": 1,
  };

  //Indicators
  const [navSection, setNavSection] = useState('loadProfit');
  const [data, setData] = useState(defaultData);
  const {storageData, saveData } = useLocalStorage("indicatorsSaved", []);
  const [grossRev, setGrossRev] = useState(0);
  const [netRev, setNetRev] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [insuranceCost, setInsuranceCost] = useState(0);
  const [fuelCost, setFuelCost] = useState(0);
  const [dollarPerMile, setDollarPerMile] = useState(0);
  const [driverCost, setDriverCost] = useState(0);
  const [dispatchCost, setDispatchCost] = useState(0);
  const [factoringCost, setFactoringCost] = useState(0);
  const [expensesDistribution, setExpensesDistribution] = useState(expensesDefaultDist);
  const [netRevData, setNetRevData] = useState({
    Expenses: 50,
    Revenue: 50
  })

  //Utilizar un objeto en vez de cambiar los valores directamente
  let updateIndicators = (dataSet) => {
    try {
      const laneTrip = dataSet[0].value;
      const rateTrip = dataSet[1].value;
      const milesTrip = dataSet[2].value;
      const driverPayTrip = dataSet[3].value;
      const milesPerGalonTrip = dataSet[4].value;
      const fuelPriceTrip = dataSet[5].value;
      const insuranceTrip = dataSet[6].value;
      const dispatchFee = dataSet[7].value;
      const factoringFee = dataSet[8].value;

      //Calculations
      let daysInvestedTrip = milesTrip / 600;
      let insuranceCostDaily = insuranceTrip / 31;
      let insuranceCostTrip = (daysInvestedTrip * insuranceCostDaily).toFixed(
        2
      );
      let galonsTrip = milesTrip / milesPerGalonTrip;
      let fuelCostTrip =
        galonsTrip > 0 && fuelPriceTrip > 0
          ? (galonsTrip * fuelPriceTrip).toFixed(2)
          : 0;
      let driverCostTrip = (driverPayTrip * milesTrip).toFixed(2);
      let dispatchCostTrip = (rateTrip * (dispatchFee / 100)).toFixed(2);
      let factoringCostTrip = (rateTrip * (factoringFee / 100)).toFixed(2);
      let expensesTrip =
        Number(insuranceCostTrip) +
        Number(fuelCostTrip) +
        Number(driverCostTrip) +
        Number(dispatchCostTrip) +
        Number(factoringCostTrip);
      let netRevTrip = (rateTrip - expensesTrip).toFixed(2)
    
      //Expenses Distribution
      let expensesDistributionTrip
      if (insuranceCostTrip > 0 || fuelCostTrip > 0 || driverCostTrip > 0 || dispatchCostTrip > 0 || factoringCostTrip > 0){
        expensesDistributionTrip = {
          "Insurance Cost": insuranceCostTrip,
          "Fuel Cost": fuelCostTrip,
          "Driver Cost": driverCostTrip,
          "Dispatch Cost": dispatchCostTrip,
          "Factoring Cost": factoringCostTrip,
        };
      }else{
        expensesDistributionTrip = expensesDefaultDist;
      }

      //Revenue %
      let expensesPerc = ((expensesTrip / rateTrip) * 100)
      let revenuePerc = ((netRevTrip / rateTrip) * 100) 
      let expensesVsRevenue;
      if(rateTrip > 0){
        expensesVsRevenue = {
          "Expenses": expensesPerc,
          "Revenue": revenuePerc 
        }
      }else{
        expensesVsRevenue = {
          "Expenses": 50,
          "Revenue": 50 
        }
      }
      
      //SetIndicators
      setGrossRev(rateTrip);
      setNetRev(netRevTrip);
      setExpenses(expensesTrip.toFixed(2));
      setInsuranceCost(insuranceCostTrip);
      setFuelCost(fuelCostTrip);
      setDollarPerMile(
        rateTrip > 0 && milesTrip > 0 ? (rateTrip / milesTrip).toFixed(2) : 0
      );
      setDriverCost(driverCostTrip);
      setDispatchCost(dispatchCostTrip);
      setFactoringCost(factoringCostTrip);
      setExpensesDistribution(expensesDistributionTrip);
      setNetRevData(expensesVsRevenue);
    } catch (err) {
      console.log(err);
    }
  };

  let updateData = (target) => {
    let index = data.findIndex((variable) => variable.property === target.name);
    let newData = [...data];
    newData[index].value = target.value;
    setData(newData);
    updateIndicators(data);
  };

  let setIndicators = (e) => {
    let newData = storageData[e - 1];
    setData(newData);
    updateIndicators(newData);
  };

  let saveIndicators = (e) => {
    let indicatorsStoraged = storageData;
    let currentMetrics = data;
    let newData = [...indicatorsStoraged];
    newData.push(currentMetrics);
    saveData(newData);
  };

  let deleteStorageIndicator = (e) => {
    let newData = [...storageData];
    let index = e - 1;
    newData.splice(index, 1);
    saveData(newData);
  };

  let cleanIndicators = (e) => {
    setData(defaultData);
    updateIndicators(defaultData);
  };

  //Return Values
  return (
    <AppContext.Provider
      value={{
        lane: data[0],
        rate: data[1],
        miles: data[2],
        driverPay: data[3],
        milesPerGalon: data[4],
        fuelPrice: data[5],
        insurance: data[6],
        dispatchFee: data[7],
        factoringFee: data[8],
        grossRev,
        setGrossRev,
        netRev,
        setNetRev,
        expenses,
        setExpenses,
        insuranceCost,
        setInsuranceCost,
        fuelCost,
        setFuelCost,
        dollarPerMile,
        setDollarPerMile,
        driverCost,
        setDriverCost,
        dispatchCost,
        setDispatchCost,
        factoringCost,
        setFactoringCost,
        updateData,
        saveIndicators,
        cleanIndicators,
        savedIndicators: storageData,
        deleteIndicator: deleteStorageIndicator,
        updateIndicators,
        setIndicators,
        expensesDistribution,
        netRevData,
        navSection,
        setNavSection
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };