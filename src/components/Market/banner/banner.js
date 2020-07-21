import React from 'react';
import './banner.scss';
// import { Link } from "react-router-dom";

import BigTitle from '../../layout/big-title/big-title';
import MarketNav from '../MarketNav/market-nav';

const MarketBanner = () => {
  return (
      <header className="market-banner baner">
        {/* <Router> */}
            <div className="market-banner__wrap">

              <div className="market-banner__main">
                <div className="banner__title">
                  <BigTitle slogan="Bienvenido a" title="Market & Wines"/>
                </div>
                <MarketNav></MarketNav>
              </div>
            
              {/* <Route path="/market/wines" render={() => <Wines />} />
              <Route path="/market/food" render={() => <Food />} /> */}
            </div>
      {/* </Router> */}
    </header>

  );
}

export default MarketBanner;
