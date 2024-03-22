import React from "react";
import { useThemeProvider } from "../src/Provider";

interface IProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
}

const Tes: React.FC<IProps> = ({ primary, secondary, success }) => {
  const { theme, pallete } = useThemeProvider();
  let styleColor = "#eee";
  if (primary) {
    styleColor = theme["hudoro-primary"];
  } else if (secondary) {
    styleColor = theme["hudoro-secondary"];
  } else if (success) {
    styleColor = theme["hudoro-success"];
  }
  //   console.log(theme);
  return <div style={{ backgroundColor: styleColor }}>Tes</div>;
};

export default Tes;
