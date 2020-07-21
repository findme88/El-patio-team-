import React, { Component } from 'react';
import './reservation.scss';

import coffee from './images/coffee.png';
import cake from './images/cake.png';
import fruit from './images/fruit.png';
import complete from './images/complete.png'

import Title from '../../layout/title/title';
import Button from '../../layout/button/button';
import Stars from '../../layout/stars/stars';
import Description from '../../layout/description/description';

export default class App extends Component {

  state = {
    FieldsNotComplete: false,
    FormShow: true,

    classNameForm: 'reservation-form',
    classNameSendForm: 'reservation-form__button',
    classNameComplete: 'display-none',

    labelName: '',
    labelPhone: '',
    labelEmail: '',
    labelGuestsNumber: '',
    labelDate: '',
    labelTime: '',
    labelSpecial: ''
  }

  makeReservation = () => {
    const { labelName, labelPhone, labelDate, labelEmail, labelGuestsNumber, labelSpecial, labelTime } = this.state;
    const FieldsComplete = labelName && labelPhone && labelDate && labelEmail && labelGuestsNumber && labelSpecial && labelTime;
    if (FieldsComplete) {
      // console.log('OK');
      this.setState({
        FieldsNotComplete: false,
        classNameForm: 'display-none',
        classNameSendForm: 'display-none',
        classNameComplete: 'complete__form'
      });

    }
    else {
      // console.log('ERROR');
      this.setState({ FieldsNotComplete: true });
    }
  }

  showForm = () => {
    this.setState({
      FieldsNotComplete: false,
      classNameForm: 'reservation-form',
      classNameComplete: 'display-none',
      classNameSendForm: 'reservation-form__button',

      labelName: '',
      labelPhone: '',
      labelEmail: '',
      labelGuestsNumber: '',
      labelDate: '',
      labelTime: '',
      labelSpecial: ''
    });
  }

  WARfieldsNotComplete = () => {
    if (this.state.FieldsNotComplete) {
      return (<span className="warning">Please complete all fields</span>);
    }
    else {
      return null;
    }
  }



  onNameChange = (e) => {
    this.setState({ labelName: e.target.value });
  }
  onPhoneChange = (e) => {
    this.setState({ labelPhone: e.target.value });
  }
  onEmailChange = (e) => {
    this.setState({ labelEmail: e.target.value });
  }
  onGuestsNumberChange = (e) => {
    this.setState({ labelGuestsNumber: e.target.value });
  }
  onDateChange = (e) => {
    this.setState({ labelDate: e.target.value });
  }
  onTimeChange = (e) => {
    this.setState({ labelTime: e.target.value });
  }
  onSpecialChange = (e) => {
    this.setState({ labelSpecial: e.target.value });
  }

  // const { labelName, labelPhone, labelDate, labelEmail, labelGuestsNumber, labelSpecial, labelTime } = this.state;

  render() {

    return (
      <section id="reservation" className="reservation">
        <div className="coffee__wrap">
          <img className="coffee__img" src={coffee} alt="coffee" />
        </div>
        <div className="cake__wrap">
          <img src={cake} alt="cake" className="cake__img" />
        </div>
        <div className="fruit__wrap">
          <img src={fruit} alt="fruit" className="fruit__img" />
        </div>

        <div className="reservation__content">
          <div className="reservation__title">
            <Title slogan="Reserva" title="Book a table" />
          </div>
          <Stars />
          <div className="reservation__info">
            <Description desc="We provide ample parking and conveniently located on Loehmann's Plaza. the closest metro station is Twinbrook. We also provide catering services, corporate lunches and barbecues" />
          </div>

          <div className={this.state.classNameComplete}>
            <img src={complete} alt='complete' className="complete__img" />
            <h4 className="complete__title">Your reservation has been successfully complited. Our operator will call you to confirm the order in the near future.</h4>
            <div className="complete__button" onClick={this.showForm}>
              <Button button="make a new reservation" />
            </div>
          </div>

          <form action="#" className={this.state.classNameForm}>
            <input onChange={this.onNameChange} placeholder="Full name" type="text" className="reservation-form__item" value={this.state.labelName} />
            <input onChange={this.onPhoneChange} placeholder="Phone Number" type="text" className="reservation-form__item" value={this.state.labelPhone} />
            <input onChange={this.onEmailChange} placeholder="Email" type="email" className="reservation-form__item" value={this.state.labelEmail} />
            <input onChange={this.onGuestsNumberChange} placeholder="Number of guests" type="text" className="reservation-form__item" value={this.state.labelGuestsNumber} />
            <input onChange={this.onDateChange} placeholder="Date" type="text" className="reservation-form__item" value={this.state.labelDate} />
            <input onChange={this.onTimeChange} placeholder="Time" className="reservation-form__item" value={this.state.labelTime} />
            <input onChange={this.onSpecialChange} placeholder="Special request" className="reservation-form__item reservation-form__item--special" value={this.state.labelSpecial} />
          </form>
          <div className={this.state.classNameSendForm} onClick={this.makeReservation}>
            <Button button="make a reservation" />
          </div>
          {this.WARfieldsNotComplete()}
        </div>
      </section >
    );
  };
}
