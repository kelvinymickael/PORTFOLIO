/* import { createContext, useContext, useState, useEffect } from "react";

// Create context:
const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [flag, setFlag] = useState(
    localStorage.getItem("flag") !== "flagUSA" ? "flagUSA" : "flagBR"
  );

  useEffect(() => {
    console.log(flag);
    localStorage.setItem("flag", flag);
  }, [flag]);

  return (
    <LanguageContext.Provider value={{ flag, setFlag }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
 */