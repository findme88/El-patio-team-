import React, { Component } from 'react';

class WinesSlide extends Component {
  render() {
    const { item } = this.props
  return(
    <img src={require(`../gallery/${item.image}`)} />
    );
  }
}

export default WinesSlide;