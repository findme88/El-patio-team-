import React, { Component } from 'react';
import './choose-event.scss';
import './choose-order.scss';

import palteImg from './images/choose-order/plate.png';
import saladImg from './images/choose-order/salad.png';
import crossImg from './images/choose-order/close-cross.png'

import Title from '../../layout/title/title';

import Event from './event'

import SecondForm from './second-form/second-form';
import ThirdForm from './third-form/third-form';

export default class ChooseEvent extends Component {

  state = {
    classNameWindow: 'choose-event__list',
    typeOfOrder: '',
    classNameModalWindow: 'display-none',
    classNameProgress: 'progress-1',

    FieldsComplete: false,
    classNameFirstForm: 'first-step__container',
    labelName: '',
    labelPhone: '',
    labelEmail: '',
    labelGuestsNumber: '1',
    labelDate: '',
    labelTime: '',
    labelCity: '',
    labelAddress: '',

    classNameSecondForm: 'display-none',

    classNameThirdForm: 'display-none',

    classNameFourthForm: 'display-none'
  }

  clearFirstForm = () => {
    this.setState({
      labelName: '',
      labelPhone: '',
      labelEmail: '',
      labelGuestsNumber: '',
      labelDate: '',
      labelTime: '',
      labelCity: '',
      labelAddress: '',

      FieldsNotComplete: false,
      classNameFirstForm: 'first-step__container',

      classNameSecondForm: 'display-none',
      classNameThirdForm: 'display-none',
      classNameFourthForm: 'display-none',

      classNameProgress: 'progress-2'
    });

  }
  sendFirstForm = () => {
    const { labelName, labelPhone, labelDate, labelEmail, labelGuestsNumber, labelAddress, labelTime, labelCity } = this.state;
    const FieldsComplete = labelName && labelPhone && labelDate && labelEmail && labelGuestsNumber && labelAddress && labelCity && labelTime;
    if (FieldsComplete) {
      this.clearFirstForm();
      // console.log('OK');
      this.setState({
        FieldsNotComplete: false,
        classNameFirstForm: 'display-none',
        classNameProgress: 'progress-3',
        classNameSecondForm: 'second-step__container'
      });
    }
    else {
      // console.log('ERROR');
      this.setState({ FieldsNotComplete: true });
    }
  }
  WARfieldsNotComplete = () => {
    if (this.state.FieldsNotComplete) {
      return (<span className="warning">Please complete all fields</span>);
    }
    else {
      return null;
    }
  }

  backSecondForm = () => {
    this.setState({ classNameFirstForm: 'first-step__container', classNameSecondForm: 'display-none', classNameProgress: 'progress-2' });
  }
  sendSecondForm = () => {
    this.setState({ classNameSecondForm: 'display-none', classNameThirdForm: 'third-step__container', classNameProgress: 'progress-4' });
  }

  backThirdForm = () => {
    this.setState({ classNameSecondForm: 'second-step__container', classNameThirdForm: 'display-none', classNameProgress: 'progress-3' });
  }
  sendThirdForm = () => {
    this.setState({ classNameThirdForm: 'display-none', classNameFourthForm: 'fourth-step__container', classNameProgress: 'progress-5' });
  }

  backFourthForm = () => {
    this.setState({ classNameThirdForm: 'third-step__container', classNameFourthForm: 'display-none', classNameProgress: 'progress-4' });
  }

  closeModalWindow = () => {
    this.clearFirstForm();
    this.setState({
      classNameWindow: 'choose-event__list',
      typeOfOrder: '',
      classNameModalWindow: 'display-none',
      classNameProgress: 'progress-1'
    });

  }

  showCorp = () => {
    this.setState({ classNameWindow: 'display-none', typeOfOrder: 'Corporate event', classNameModalWindow: 'choose-order' });
    this.clearFirstForm();

  }
  showBbq = () => {
    this.setState({ classNameWindow: 'display-none', typeOfOrder: 'Bbq in your house', classNameModalWindow: 'choose-order' });
    this.clearFirstForm();

  }
  showWedd = () => {
    this.setState({ classNameWindow: 'display-none', typeOfOrder: 'Wedding', classNameModalWindow: 'choose-order' });
    this.clearFirstForm();

  }
  showBirth = () => {
    this.setState({ classNameWindow: 'display-none', typeOfOrder: 'Birthday', classNameModalWindow: 'choose-order' });
    this.clearFirstForm();

  }
  showParty = () => {
    this.setState({ classNameWindow: 'display-none', typeOfOrder: 'Party', classNameModalWindow: 'choose-order' });
    this.clearFirstForm();

  }
  showOther = () => {
    this.setState({ classNameWindow: 'display-none', typeOfOrder: 'Other', classNameModalWindow: 'choose-order' });
    this.clearFirstForm();
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
  onCityChange = (e) => {
    this.setState({ labelCity: e.target.value });
  }
  onAddressChange = (e) => {
    this.setState({ labelAddress: e.target.value });
  }

  render() {

    return (
      <div className="choose-event" id="event">
        <div className="choose-event__title">
          <Title slogan="Choose your event" title="complete your order in 5 steps" />
        </div>

        <ul className={this.state.classNameWindow}>
          <div onClick={this.showCorp}><li className="choose-event__item choose-event__item--corp"><Event title="corporate event" /></li></div>
          <div onClick={this.showBbq}><li className="choose-event__item choose-event__item--bbq"><Event title="bbq in your house" /></li></div>
          <div onClick={this.showWedd}><li className="choose-event__item choose-event__item--wed"><Event title="wedding" /></li></div>
          <div onClick={this.showBirth}><li className="choose-event__item choose-event__item--birthday"><Event title="birthday" /></li></div>
          <div onClick={this.showParty}><li className="choose-event__item choose-event__item--party"><Event title="party" /></li></div>
          <div onClick={this.showOther}><li className="choose-event__item choose-event__item--other"><Event title="other" /></li></div>
        </ul>

        <section className={this.state.classNameModalWindow}>
          <img className="choose-order__plate" src={palteImg} alt="plate" />
          <img className="choose-order__salad" src={saladImg} alt="salad" />
          <div className="choose-order__close" onClick={this.closeModalWindow}><img src={crossImg} alt="close-cross" /></div>
          <div className="choose-order__title">
            <Title slogan={this.state.typeOfOrder} title="" />
          </div>

          <div className={this.state.classNameFirstForm}>
            <form action="#" className="reservation-form">
              <input onChange={this.onNameChange} placeholder="Full name" type="text" className="reservation-form__item" value={this.state.labelName} />
              <input onChange={this.onPhoneChange} placeholder="Phone Number" type="text" className="reservation-form__item" value={this.state.labelPhone} />
              <input onChange={this.onEmailChange} placeholder="Email" type="email" className="reservation-form__item" value={this.state.labelEmail} />
              <input onChange={this.onGuestsNumberChange} placeholder="Number of guests" type="text" className="reservation-form__item" value={this.state.labelGuestsNumber} />
              <input onChange={this.onCityChange} placeholder="City" type="text" className="reservation-form__item" value={this.state.labelCity} />
              <input onChange={this.onAddressChange} placeholder="Adress" type="text" className="reservation-form__item" value={this.state.labelAddress} />
              <input onChange={this.onDateChange} placeholder="Date" type="text" className="reservation-form__item" value={this.state.labelDate} />
              <input onChange={this.onTimeChange} placeholder="Time" className="reservation-form__item" value={this.state.labelTime} />
            </form>

            <div className="first-step__warn">
              {this.WARfieldsNotComplete()}
            </div>

            <div className="choose-order__buttons-group">
              <button onClick={this.closeModalWindow} className="choose-order__back-button">Back</button>
              <button onClick={this.sendFirstForm} className="choose-order__ok-button">Ok</button>
            </div>
          </div>

          <div className={this.state.classNameSecondForm}>
            <SecondForm />
            <div className="choose-order__buttons-group-2">
              <button onClick={this.backSecondForm} className="choose-order__back-button">Back</button>
              <button onClick={this.sendSecondForm} className="choose-order__ok-button">Ok</button>
            </div>
          </div>

          <div className={this.state.classNameThirdForm}>
            <ThirdForm />
            <div className="choose-order__buttons-group-2">
              <button onClick={this.backThirdForm} className="choose-order__back-button">Back</button>
              <button onClick={this.sendThirdForm} className="choose-order__ok-button">Ok</button>
            </div>
          </div>

          <div className={this.state.classNameFourthForm}>
            <div className="fourth-step__content">
              <h3 className="third-step__title">Please mark the ingridients that you would like to remove</h3>
            </div>
            <textarea onChange={this.onTextChange} placeholder="Feel free to tell us whatever you want" className="testimonial__item testimonial__item--big --height" value={this.state.labelText} />
            <div className="choose-order__buttons-group">
              <button onClick={this.backFourthForm} className="choose-order__back-button">Back</button>
              <button onClick={this.closeModalWindow} className="choose-order__ok-button">Ok</button>
            </div>
          </div>
        </section>

        <div className={this.state.classNameProgress}></div>
      </div>
    );
  }
}