import React from "react";
//allow to code with React and ReactDOM allow for browser code
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

//Connect to App.js with root id element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
