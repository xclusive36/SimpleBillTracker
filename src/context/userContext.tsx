import { createContext, useState } from "react";

const userObj: any = {};

const defaultUserObj: any = { ...userObj };

export const UserContext = createContext({
  UserObj: defaultUserObj,
  setUserObj: (userObj: any) => {},
});

export const UserProvider = ({ children }: any) => {
  const [UserObj, setUserObj] = useState(defaultUserObj);

  const value = {
    UserObj,
    setUserObj,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
