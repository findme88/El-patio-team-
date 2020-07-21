import React, { Component } from "react";

import complete from "../images/complete.png";
import Button from "../../layout/button/button";

export default class Form extends Component {
  state = {
    FieldsNotComplete: false,
    FormShow: true,

    classNameForm: "reservation-form",
    classNameSendForm: "reservation-form__button",
    classNameComplete: "display-none",

    labelName: "",
    labelPhone: "",
    labelEmail: "",
    labelGuestsNumber: "",
    labelDate: "",
    labelTime: "",
    labelSpecial: "",
  };

  makeReservation = () => {
    const {
      labelName,
      labelPhone,
      labelEmail,
      labelGuestsNumber,
      labelSpecial,
    } = this.state;
    const FieldsComplete =
      labelName &&
      labelPhone &&
      
      labelEmail &&
      labelGuestsNumber &&
      labelSpecial;
      
    if (FieldsComplete) {
      // console.log('OK');
      this.setState({
        FieldsNotComplete: false,
        classNameForm: "display-none",
        classNameSendForm: "display-none",
        classNameComplete: "complete__form",
      });
    } else {
      // console.log('ERROR');
      this.setState({ FieldsNotComplete: true });
    }
  };

  showForm = () => {
    this.setState({
      FieldsNotComplete: false,
      classNameForm: "reservation-form",
      classNameComplete: "display-none",
      classNameSendForm: "reservation-form__button",

      labelFirstName: "",
      labelLastName: "",
      labelEmail: "",
      labelGuestsNumber: "",
    });
  };

  WARfieldsNotComplete = () => {
    if (this.state.FieldsNotComplete) {
      return <span className="warning">Please complete all fields</span>;
    } else {
      return null;
    }
  };

  onNameChange = (e) => {
    this.setState({ labelName: e.target.value });
  };
  onPhoneChange = (e) => {
    this.setState({ labelPhone: e.target.value });
  };
  onEmailChange = (e) => {
    this.setState({ labelEmail: e.target.value });
  };
  onGuestsNumberChange = (e) => {
    this.setState({ labelGuestsNumber: e.target.value });
  };
  onSpecialChange = (e) => {
    this.setState({ labelSpecial: e.target.value });
  };

  // const { labelName, labelPhone, labelDate, labelEmail, labelGuestsNumber, labelSpecial, labelTime } = this.state;

  render() {
    return (
      <section id="contact" className="contacts__form">
        <div className={this.state.classNameComplete}>
          <img src={complete} alt="complete" className="contacts__complete_img" />
          <h1 className="contacts__complete_title">
          Thank you for taking the time to share your suggestions and questions.
          </h1>
          <div className="contacts__button" onClick={this.showForm}>
            <Button button="back" />
          </div>
        </div>

        <form action="#" className={this.state.classNameForm}>
          <input
            onChange={this.onNameChange}
            placeholder="First name"
            type="text"
            className="reservation-form__item"
            value={this.state.labelName}
          />
          <input
            onChange={this.onGuestsNumberChange}
            placeholder="Last Name"
            type="text"
            className="reservation-form__item"
            value={this.state.labelGuestsNumber}
          />
          <input
            onChange={this.onEmailChange}
            placeholder="Email"
            type="email"
            className="reservation-form__item"
            value={this.state.labelEmail}
          />
          <input
            onChange={this.onPhoneChange}
            placeholder="Phone Number"
            type="text"
            className="reservation-form__item"
            value={this.state.labelPhone}
          />
          <input
            onChange={this.onSpecialChange}
            placeholder="Your message to El Patio International"
            className="reservation-form__item reservation-form__item--special"
            value={this.state.labelSpecial}
          />
        </form>
        <div
          className={this.state.classNameSendForm}
          onClick={this.makeReservation}
        >
          <Button button="send" />
        </div>
        {this.WARfieldsNotComplete()}
      </section>
    );
  }
}
