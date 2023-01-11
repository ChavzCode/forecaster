import React, { useContext } from "react";
import AppLane from "../AppLane/AppLane";
import { AppContext } from "../../context/AppContext";
import AppMetricBar from "../AppMetricBar/AppMetricBar";
import "./index.css";

//Chart JS
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors, plugins } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

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
    expensesDistribution,
    netRevData
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

  const expensesDistData = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: Object.keys(expensesDistribution),
    datasets: [
      {
        label: "Amount",
        data: Object.values(expensesDistribution),
        // data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(223, 230, 236, 0.9)",
          "rgba(0, 212, 255, 0.9)",  
          "rgba(10, 37, 64, 0.9)",
          "rgba(11, 12, 16, 0.9)",
          "rgba(112, 112, 112, 0.9)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(223, 230, 236, 1)",
          "rgba(0, 212, 255, 1)",  
          "rgba(10, 37, 64, 1)",
          "rgba(11, 12, 16, 1)",
          "rgba(112, 112, 112, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const revenueVsExpensesData = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: Object.keys(netRevData),
    datasets: [
      {
        label: "Amount",
        data: Object.values(netRevData),
        // data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(10, 37, 64, 0.9)",
          "rgba(0, 212, 255, 0.9)",  
          "rgba(223, 230, 236, 0.9  )",
          "rgba(11, 12, 16, 0.9)",
          "rgba(112, 112, 112, 0.9)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(223, 230, 236, 1)",
          "rgba(0, 212, 255, 1)",  
          "rgba(10, 37, 64, 1)",
          "rgba(11, 12, 16, 1)",
          "rgba(112, 112, 112, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="metrics-ctn">
      <AppLane />
      <div className="app-results">
        <AppMetricBar theme="black-theme" metrics={metrics1} />
        <AppMetricBar theme="white-theme" metrics={metrics2} />
        <AppMetricBar theme="white-theme" metrics={metrics3} />
      </div>
      <div className="charts-ctn">
        <div className="chart">
          <h4>Expenses vs Revenue</h4>
          <Pie data={revenueVsExpensesData} options={{
            plugins: {
              legend: {
                display: false
              }
            }
          }}/>
        </div>
        <div className="chart">
          <h4>Expenses Distribution</h4>
          <Doughnut
            data={expensesDistData}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
                title:{
                  display: true,
                  text: "Texto"
                }
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AppMetrics;
