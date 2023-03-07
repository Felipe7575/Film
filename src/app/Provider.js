import React from "react";
import { createContext, useState } from "react";

const Provider = ({ children }) => {
   const [user, setUser] = useState([]);
    return(
        <AppContext.Provider value={{user, setUser}}>{children}</AppContext.Provider>
    );
}

export default Provider;
export const AppContext = createContext();