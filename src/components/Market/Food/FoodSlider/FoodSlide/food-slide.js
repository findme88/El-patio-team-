import React, { Component } from 'react';

class FoodSlide extends Component {
  render() {
    const { item } = this.props
  return(
    <img src={require(`../gallery/${item.image}`)} />
    );
  }
}

export default FoodSlide;