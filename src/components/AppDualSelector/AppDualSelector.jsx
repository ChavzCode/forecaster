import React from "react";
import "./index.css";

function AppDualSelector({ value1, function1, value2, function2 }) {
  return (
    <div className="selector-ctn">
      <button
        onClick={(e) => {
          function1(e);
        }}
      >
        {value1}
      </button>
      <button
        onClick={(e) => {
          function2(e);
        }}
      >
        {value2}
      </button>
    </div>
  );
}

export default AppDualSelector;
