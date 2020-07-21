// import React, { Component } from 'react';
// import './dish.scss';

// class Dish extends Component {
// 	render() {
// 		const {dishes} = this.props
// 		return (

// 			<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 dish ">
// 				<img className="dish__img" src={require(`./images/${dishes.id}.png`)}/>
// 				<div className="dish__info">
// 					<h3 className="dish__title">{dishes.dishName}</h3>
// 					<p className="dish__desc">{dishes.dishDesc}</p>
// 					<p className="dish__price"><span>Price: </span>${dishes.price.regular}</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Dish;

import React, { Component } from 'react';
import './dish.scss';

class Dish extends Component {
  render() {
    const {dishes} = this.props
    let backImage = require(`./images/${dishes.id}.png`)
    return (

      <div className="col col-md-3 col-sm-6 dish__wrap" style={{ backgroundImage: `url(${backImage})`}}>
        <div className="dish__info">
          <h3 className="dish__title">{dishes.dishName}</h3>
          <p className="dish__desc">{dishes.dishDesc}</p>
          <p className="dish__price"><span>Price: </span>${dishes.price.regular}</p>
        </div>
      </div>
    );
  }
}

export default Dish;