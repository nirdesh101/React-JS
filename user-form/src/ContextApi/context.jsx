import React, { createContext, useState } from "react";
import jsonData from "../data.json"

export const DetailsContext = createContext();

const DetailsContextProvider = ({ children }) => {
  const [details, setDetails] = useState([]);
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    occupation: "",
    dob: "",
    interestedField: "",
  };

  const [data, setData] = useState([initialState]);

  return (
    <DetailsContext.Provider value={{ data, setData, details, setDetails, initialState, }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContextProvider;