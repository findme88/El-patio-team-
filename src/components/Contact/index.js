import React from "react";
import Title from "../layout/title/title";
import Form from "./Form/Form";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <Title slogan="Contact us" title="We are happy to know your opinion" />
        <Form />
        <div className="footer__content contacts__footer">
        <ul className="footer__contact contact">
          <div className="contact__wrap">
            <h5 className="contact__title">Contact us</h5>
            <li className="contact__item">5240 Randolph Rd.</li>
            <li className="contact__item">Rockville,</li>
            <li className="contact__item">MD 20852</li>
          </div>
          <div className="contact__icon">
          <li className="contact__item contact__item--icon">
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          </div>
          <div className="contact__bottom">
            <li className="contact__item"><a href="tel:1 301-231-9225">1 301-231-9225</a></li>
            <li className="contact__item"><a href="mailto:elpatiointernational@gmail.com">elpatiointernational@gmail.com</a></li>
          </div>
        </ul>

        <div className="footer__open-time open-time">
          <h5 className="open-time__title">We are open</h5>
          <ul>
          <li className="open-time__item">
            <p className="open-time__days">Monday - Thursday</p>
            <p className="open-time__hours">9am - 9pm</p>
          </li>
          <li className="open-time__item">
            <p className="open-time__days">Friday - Saturday</p>
            <p className="open-time__hours">9am - 10pm</p>
          </li>
          <li className="open-time__item">
            <p className="open-time__days">Sunday</p>
            <p className="open-time__hours">9am - 8pm</p>
          </li>
          </ul>
        </div>
      </div>
        <div className="contacts__formBlock" ></div>
        <div className="contacts__background" ></div>
      </div>
    </section>
  );
}

export default Contact;
