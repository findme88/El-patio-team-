import React, { Component } from 'react';
import './testimonial.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar1 from './images/avatar-1.png';
import avatar2 from './images/avatar-2.png';
import avatar3 from './images/avatar-3.png';
import avatar4 from './images/avatar-4.png';
import avatar5 from './images/avatar-5.png';

import Title from '../../layout/title/title';
import Button from '../../layout/button/button';
import Stars from '../../layout/stars/stars';
import Description from '../../layout/description/description';

export default class App extends Component {

  state = {
    classNameForm: 'display-none',
    classNameShowForm: 'showFormButton',

    testimonials: JSON.parse(localStorage.getItem('testimonialsLS')) || [],
    FieldsNotComplete: false,

    labelName: '',
    labelText: '',
    labelNumber: ''
  }

  onNameChange = (e) => {
    this.setState({ labelName: e.target.value });
  }

  onTextChange = (e) => {
    this.setState({ labelText: e.target.value });
  }

  onStarsChange = (e) => {
    this.setState({ labelNumber: e.target.value });
  }

  showForm = () => {
    this.setState({ classNameForm: 'testimonial__form', classNameShowForm: 'display-none' });
  }

  WARfieldsNotComplete = () => {
    if (this.state.FieldsNotComplete) {
      return (<span className="warning">Please complete all fields or check if they are correct</span>);
    }
    else {
      return null;
    }
  }

  sendForm = () => {
    const { labelName, labelNumber, labelText, testimonials } = this.state;
    if (labelName && labelNumber && labelText) {
      this.setState({ FieldsNotComplete: false });

      if (+labelNumber < 1 || +labelNumber > 5) {
        this.setState({ FieldsNotComplete: true });
      }
      else {
        this.setState({
          classNameForm: 'display-none',
          classNameShowForm: 'showFormButton',
          labelName: '',
          labelText: '',
          labelNumber: ''
        });
      }
    }
    else {
      this.setState({ FieldsNotComplete: true });
    }
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false
          }}]
        }
    

    return (
      <section class="testimonials" id="testimonials">
        <Title slogan="¡Amamos a nuestros huéspedes!" title="Your testimonials" />

        <div className="content">
          <Slider {...settings}>

            <div class="review">
              <div class="review__item">
                <img src={avatar1} alt="avatar" class="review__avatar" />
                <div class="review__info">
                  <h5 class="review__name">Tania Perez-Fuentes </h5>
                  <div class="review__stars">
                    <Stars />
                  </div>
                </div>
              </div>
              <p class="review__text">My family went June 1, 2017 to celebrate my husband's birthday along with our 4
              young children. Our table was ready upon arrival. The server was exceptional. She was quick to respond
              to our requests and was so patient and friendly to our kids. This place served the best churrasco we
              have ever had! Everything we ordered was amazing! Highly recommend this place.</p>
            </div>

            <div class="review">
              <div class="review__item">
                <img src={avatar2} alt="avatar" class="review__avatar" />
                <div class="review__info">
                  <h5 class="review__name">Diego Rodríguez</h5>
                  <div class="review__stars">
                    <Stars />
                  </div>
                </div>
              </div>
              <p class="review__text">The delicious main course, caring staff, but pity about the French fries Visited the place for lunch with my friend.
              The main course was just delicious.
              I’d love to visit the place again. You can go with your friends, family, partner or whosoever you wish to. Do try their famous masala dosa.</p>
            </div>

            <div class="review">
              <div class="review__item">
                <img src={avatar3} alt="avatar" class="review__avatar" />
                <div class="review__info">
                  <h5 class="review__name">Elian Romero</h5>
                  <div class="review__stars">
                    <Stars />
                  </div>
                </div>
              </div>
              <p class="review__text">All the cuisines were fresh and refreshing. The award winning chefs gave a home-made feeling using the best quality ingredients. 
              The restaurant also offers various types of drinks, they serve one of the best wines in the region. The drinks are pricey but surely worth trying.
              Because of the brilliant atmosphere and delicious food service, neglecting the dead expression of waiters, I highly recommend going to the Moto House restaurant.</p>
            </div>

            <div class="review">
              <div class="review__item">
                <img src={avatar4} alt="avatar" class="review__avatar" />
                <div class="review__info">
                  <h5 class="review__name">Andres Blanco</h5>
                  <div class="review__stars">
                    <Stars />
                  </div>
                </div>
              </div>
              <p class="review__text">Everything EL PATIO INTERNATIONAL offers says "quality," from the heavy wooden front door, the understated name inscribed subtly on the door, the finely carved wood tables, the beautifully unique (but sensible) wine glasses, and the fine service.
              The steaks are just amazing. As an appetizer, the Kobe beef tartar topped with a quail egg is perfection. 
              One gets a choice of three specially-prepared steak sauces in separate dishes, all delicious but wholly unnecessary.</p>
            </div>

            <div class="review">
              <div class="review__item">
                <img src={avatar5} alt="avatar" class="review__avatar" />
                <div class="review__info">
                  <h5 class="review__name">Esmeralda Ortiz</h5>
                  <div class="review__stars">
                    <Stars />
                  </div>
                </div>
              </div>
              <p class="review__text">I had lovely lunch today. Ordered the crab cake sandwich and was pleased by the quality of the crab cake, as well as the nicely toasted roll, thick slices of ripe avocado, and crisp hot bacon which accompanied it. The side of fresh fruit was also generous and perfectly ripe. 
              A very good experience! Add this to the best dining view on the island on a gorgeous Fall day, and it adds up to perfection!</p>
            </div>

          </Slider>
        </div>

        <div className={this.state.classNameForm}>
          <input onChange={this.onNameChange} placeholder="Full name" type="text" className="testimonial__item" value={this.state.labelName} />
          <textarea onChange={this.onTextChange} placeholder="Your testimonial" className="testimonial__item testimonial__item--big" value={this.state.labelText} />
          <input onChange={this.onStarsChange} placeholder="Enter number of stars" type="number" className="testimonial__item testimonial__item--stars" value={this.state.labelNumber} min="1" max="5" />
          <div onClick={this.sendForm} className="testimonial__button">
            <Button button="Send" />
          </div>
          {this.WARfieldsNotComplete()}
        </div>

        <div onClick={this.showForm} className={this.state.classNameShowForm}>
          <Button button="Leave a testimonial" />
        </div>
      </section>
    );
  };
}
