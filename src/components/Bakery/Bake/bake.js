import React, { Component } from 'react';
import './bake.scss';

class Bake extends Component {
  render() {
    const {bakery} = this.props
  return(
      <div className="bake">
        <div className="row">
          <div className={`bake__img col-lg-6 col-md-12 order-lg-${bakery.order} order-md-last`}>
            <img src={require(`../images/bakery${bakery.id}.png`)} />
          </div>
          <div className="bake__info col-lg-6 col-md-12">
            <h2 className="bake__title">{ bakery.title }</h2> 
            <div className="bake__descr">{ bakery.descr }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bake;