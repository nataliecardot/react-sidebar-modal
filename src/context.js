import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
// createContext returns 2 components, provider and consumer (only using provider - consumer doesn't need to be used when using the useContext hook)

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
// if you want to use React Hooks, it needs to be in a component or a custom hook - so use at beginning is required; otherwise it's just a regular fn
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
