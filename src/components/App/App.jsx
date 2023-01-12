import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import NavBar from "../NavBar/NavBar";
import AppDualSelector from "../AppDualSelector/AppDualSelector";
import AppMetrics from "../AppMetrics/AppMetrics";
import AppIndicatorsBar from "../AppIndicatorsBar/AppIndicatorsBar";
import AppMetricsList from "../AppMetricsList/AppMetricsList";
import AppFooter from "../AppFooter/AppFooter";
import "./App.css";
import { Colors } from "chart.js";

function App() {
  const { saveIndicators, cleanIndicators, savedIndicators, navSection } =
    useContext(AppContext);
  return (
    <React.Fragment>
      {window.screen.width > 1099 ? (
        <React.Fragment>
          <NavBar />
          {navSection === "loadProfit" ? (
            <div className="app-ctn">
              <div className="load-profit-ctn">
                <h1>Load Profitability</h1>
                {savedIndicators.length > 0 ? (
                  <AppMetricsList />
                ) : (
                  <React.Fragment />
                )}
              </div>
              <AppDualSelector
                value1={"Save Indicators"}
                function1={saveIndicators}
                value2={"Clean Indicators"}
                function2={cleanIndicators}
              />
              <AppMetrics />
              <AppIndicatorsBar />
              <AppFooter />
            </div>
          ) : (
            <p
              style={{
                fontSize: "5rem",
                textAlign: "center",
                marginTop: "40vh",
                color: "#081F4B",
                fontWeight: "500",
              }}
            >
              Forecaster Coming{" "}
              <span
                style={{
                  color: "#00D4FF",
                }}
              >
                Soon
              </span>
              ...
            </p>
          )}
        </React.Fragment>
      ) : (
        <p
          style={{
            position: "absolute",
            fontSize: "3rem",
            marginTop: "40vh",
            color: "#081F4B",
            fontWeight: "500",
          }}
        >
          Opps... you must switch to a desktop device to use this app;
        </p>
      )}
    </React.Fragment>
  );
}

export default App;
