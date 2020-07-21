import React from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";

import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

import Home from "../Home";
import Menu from "../Menu";
import Catering from "../Catering";
import Market from "../Market";
import Bakery from "../Bakery";
import Contact from "../Contact";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navigation />
        <Route exact path="/" render={() => <Redirect to="/Main" />} />
        <Route path="/main" render={() => <Home />} />
        <Route path="/menu" render={() => <Menu />} />
        <Route path="/bakery" render={() => <Bakery />} />
        <Route path="/catering" render={() => <Catering />} />
        <Route path="/market" render={() => <Market />} />
        {/* {props.location.pathname !== "/contact" && <Footer />} */}
        <Route path="/contact" render={() => <Contact />} />
      </div>
    </Router>
  );
};

export default App;
