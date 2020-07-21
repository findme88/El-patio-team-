import React from 'react';

import CateringBanner from '../Catering/banner/banner';
import PorQue from '../Catering/por-que/por-que';
import ChooseEvent from '../Catering/choose-event/choose-event';
import FAQ from '../Catering/faq/faq';
import Form from '../Catering/form/form';
import Footer from "../footer/footer";

function Catering() {
  return (
    <div className="catering">
      <CateringBanner />
      <ChooseEvent />
      <PorQue />
      <FAQ />
      <Form />
      <Footer />
    </div>
  )
}

export default Catering;