import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
// createContext returns 2 components, provider and consumer (only using provider - consumer doesn't need to be used when using the useContext hook)

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
