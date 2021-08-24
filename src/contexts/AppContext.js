import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [courseSideBarCollapsed, setCourseSideBarCollapsed] = useState(true);

  const sharedState = {
    courseSideBarCollapsed,
    setCourseSideBarCollapsed,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
