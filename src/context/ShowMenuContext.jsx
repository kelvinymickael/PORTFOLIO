import { createContext, useContext, useState } from "react";

const ShowMenuContext = createContext();

export const ShowMenuProvider = ({ children }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <ShowMenuContext.Provider value={{ menuIsActive, setMenuIsActive }}>
      {children}
    </ShowMenuContext.Provider>
  );
};

export const useShowMenu = () => {
  return useContext(ShowMenuContext);
};
