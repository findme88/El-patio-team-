import React from 'react';
import './market.scss';

import BigTitle from '../layout/big-title/big-title';

import Wines from './Wines/wines';
import Food from './Food/food';

import { BrowserRouter as Router, Route } from "react-router-dom";
import MarketNav from './MarketNav/market-nav';


function Market() {
  return(
    <Router>
      <section className="market">
        <header className="market-banner">
          <div className="market-banner__wrap">

            <div className="market-banner__main">
              <div className="banner__title">
                <BigTitle slogan="Bienvenido a" title="Market & Wines"/>
              </div>
              <MarketNav></MarketNav>

            </div>
          </div>
        </header>
        <Route path="/market/wines" render={() => <Wines />} />
        <Route path="/market/food" render={() => <Food />} />
      </section>
    </Router>
  )
}

export default Market;