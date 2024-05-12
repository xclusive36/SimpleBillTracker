import { createContext, useState } from "react";
import { Bill } from "../interfaces/interfaces";

interface ContextInterface {
  allBills: Bill[];
  todaysBills: Bill[];
  upcomingBills: Bill[];
  pastDueBills: Bill[];
  paidBills: Bill[];
}

const contextObj: ContextInterface = {
  allBills: [],
  todaysBills: [],
  upcomingBills: [],
  pastDueBills: [],
  paidBills: [],
};

const defaultContextObj: ContextInterface = { ...contextObj };

export const AppContext = createContext({
  ContextObj: defaultContextObj,
  setContextObj: (contextObj: ContextInterface) => {},
});

export const AppProvider = ({ children }: any) => {
  const [ContextObj, setContextObj] = useState(defaultContextObj);

  const value = {
    ContextObj,
    setContextObj,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
