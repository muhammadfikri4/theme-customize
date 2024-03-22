import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "../src";
import theme from "../src/theme.json";
import pallete from "../src/pallete.json";
import Tes from "./Tes";
import { Button } from "../../hudoro-button/src/index";

const App = () => {
  return (
    <div>
      <h1>Testing Button Component</h1>
      {/* <Button onClick={() => {}}>Click Me!!!</Button> */}
      <ThemeProvider theme={theme} pallete={pallete}>
        <Button>Submit</Button>
        {/* <Tes primary /> */}
      </ThemeProvider>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
// ReactDOM.render(<App />, document.getElementById("app"));
