import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "context/ThemeContext";
import { CssBaseline } from "@material-ui/core";
const root = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  root
);

reportWebVitals();
