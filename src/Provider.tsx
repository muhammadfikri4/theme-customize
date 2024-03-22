import React, { useContext } from "react";
import Styles from "./provider.module.css?raw";

export interface ThemeProviderProps {
  // theme: {
  //   "hudoro-blue-500": string;
  //   "hudoro-blue-600": string;
  //   "hudoro-blue-700": string;
  // };
  // pallete: {
  //   "hudoro-primary": string;
  //   "hudoro-secondary": string;
  //   "hudoro-success": string;
  // };
  theme?: any;
  pallete?: any;
  children?: any;
}

const ProviderContext = React.createContext<
  ThemeProviderProps | undefined | any
>(true);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
  pallete,
}) => {
  // console.log(theme);
  return (
    <ProviderContext.Provider value={{ theme, pallete }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useThemeProvider = (): ThemeProviderProps => {
  const context = useContext(ProviderContext);
  if (context === undefined) {
    throw new Error("useThemeProvider must be used with ThemeProvider");
  }
  return context;
};
