import React, { useContext } from "react";

import DetailsContextProvider from "./context";

const Context = ({ children }) => {
  return (
    <DetailsContextProvider>
      {children}
    </DetailsContextProvider>
  );
};

export default Context;