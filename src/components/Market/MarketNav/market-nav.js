// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import './market-nav.scss';
// import AnchorLink from 'react-anchor-link-smooth-scroll';


// export default class MarketNav extends Component {

//   render() {
//     return (
//       <div className="market__navigation">
//         <div className="market__button button">
//           <AnchorLink href="#wines"><NavLink className="button__item" to="/market/wines#wines" >Wine market</NavLink></AnchorLink>
//           {/* <AnchorLink className="button__item" to="/market/wines#wines" href="#wines" >Wine market</AnchorLink> */}
//         </div>
//         <div className="market__button button">
//         <AnchorLink href="#food"><NavLink className="button__item" to="/market/food#food" >Food market</NavLink></AnchorLink>
//           {/* <AnchorLink className="button__item" to="/market/food#food" href="#food">Food market</AnchorLink> */}
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import Button from '../../layout/button/button'
import './market-nav.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';


export default class MarketNav extends Component {

  render() {
    return (
      <div className="market__navigation">
        <div className="market__button button">
          <NavLink className="button__item" smooth to="/market/wines#wines" ><Button button="Wine Market" /></NavLink>
        </div>
        <div className="market__button button">
        <NavLink className="button__item" smooth to="/market/food#food" ><Button button="Food Market" /></NavLink>
        </div>
      </div>
    );
  }
}
