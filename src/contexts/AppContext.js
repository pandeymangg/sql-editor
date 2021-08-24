import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [querySideBarCollapsed, setQuerySideBarCollapsed] = useState(true);

  const sharedState = {
    querySideBarCollapsed,
    setQuerySideBarCollapsed,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
