// Importar React
import React from "react";
//Create Context
const AppContext = React.createContext();

function AppProvider(props) {
  //Context Values
  const x = 1;
  const y = 2;

  //Return Values
  return (
    <AppContext.Provider
      value={{
        x,
        y,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
