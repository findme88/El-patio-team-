import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/app/App";
// import ErrorIndicator from './components/error-indicator/error-indicator'  *** возможно удалить, проимпортирован в  ErrorBoundry
import ErrorBoundry from "./components/error-boundry/error-boundry";
import Spiner from "./components/spinner/spiner";

import "./css/reset.css";
import "./css/bootstrap-grid.min.css";
import "./index.scss"

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Router>
        
        <App />
      </Router>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);
