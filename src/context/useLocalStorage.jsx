import React, { useState, useEffect } from "react";

function useLocalStorage(dataset, initialValue) {
  const [storageData, setStorageData] = useState(initialValue);

  useEffect(() => {
    let localData = localStorage.getItem(dataset);
    let parsedData;

    if (localData) {
      parsedData = JSON.parse(localData);
    } else {
      localStorage.setItem(dataset, JSON.stringify(initialValue));
      parsedData = [];
    }
    setStorageData(parsedData);
  },[]);

  const saveData = (data) => {
    setStorageData(data);
    localStorage.setItem(dataset, JSON.stringify(data));
  };

  return { storageData, saveData };
}

export default useLocalStorage;
