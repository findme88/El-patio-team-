import React from 'react';
import './index.scss'

import Banner from '../Home/banner/banner';
import TrueCuisine from '../Home/true-cuisine/true-cuisine';
import PopularDishes from '../Home/popular-dishes/popular-dishes';
import UniqueCombination from '../Home/unique-combination/unique-combination';
import Reservation from '../Home/reservation/reservation';
import Testimonial from '../Home/testimonial/testimonial';
import Footer from "../footer/footer";

function Home() {
  return (
    <div className="home">
      <Banner />
      <TrueCuisine />
      <PopularDishes />
      <UniqueCombination />
      <Reservation />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home;