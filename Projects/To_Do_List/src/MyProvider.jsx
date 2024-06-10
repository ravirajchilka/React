// MyProvider.js
import React, { createContext, useState } from 'react';

// Create a Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [data, setData] = useState("Initial Data");

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };