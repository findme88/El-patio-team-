import React from 'react';
import './bakery.scss';

import BakeryList from './BakeryList/bakery-list';
import baking from './baking';
import Footer from "../footer/footer";
import Title from '../layout/title/title';

function Bakery() {
  return (
    <section className="bakery">
      <div className="bakery__wrap">
        <div className="bakery__title"><Title slogan="el Patio" title="bakery store" /></div>
          <BakeryList baking={baking} />
          <span className="bakery__bg--1"></span>
          <span className="bakery__bg--2"></span>
          <span className="bakery__bg--3"></span>
          <span className="bakery__bg--4"></span>
          <span className="bakery__bg--5"></span>
          <span className="bakery__bg--6"></span>
      </div>
      <Footer />
    </section>
  )
}

export default Bakery;