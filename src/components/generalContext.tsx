import { createContext, useContext, useState } from "react";

type GeneralContextType = {
  inputValue: string
  setInputValue: (value: string) => void
};

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

export const GeneralProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<string>("");
  
  return (
    <GeneralContext.Provider value={{
      inputValue: state,
      setInputValue: setState,
    }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (context === undefined) {
    throw new Error("useGeneral must be used within a GeneralProvider");
  }
  return context;
};
