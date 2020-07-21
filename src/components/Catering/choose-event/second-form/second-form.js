import React, { Component } from 'react';
import './second-form.scss';

export default class SecondForm extends Component {

    render() {

        return (
            <div className="second-step__content">
                <ul className="second-step__col">
                    <h3 className="second-step__col-title">Kitchen</h3>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-1" />
                        <label for="second-step__radio-1-1">Empanadas</label>
                    </li>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-2" />
                        <label for="second-step__radio-1-2">Tea Sandwiches</label>
                    </li>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-3" />
                        <label for="second-step__radio-1-3">Canapes</label>
                    </li>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-4" />
                        <label for="second-step__radio-1-4">Sweet roulades</label>
                    </li>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-5" />
                        <label for="second-step__radio-1-5">Stuffed beef</label>
                    </li>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-6" />
                        <label for="second-step__radio-1-6">Salads</label>
                    </li>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-7" />
                        <label for="second-step__radio-1-7">Sweets</label>
                    </li>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-8" />
                        <label for="second-step__radio-1-8">Alfajorcitos</label>
                    </li>
                    <li className="second-step__item-1">
                        <input className="second-step__input-1" type="checkbox" id="second-step__radio-1-9" />
                        <label for="second-step__radio-1-9">Cakes</label>
                    </li>
                </ul>

                <ul className="second-step__col">
                    <h3 className="second-step__col-title">Service</h3>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-1" />
                        <label for="second-step__radio-2-1"> Vegetarian menu</label>
                    </li>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-2" />
                        <label for="second-step__radio-2-2">Dinner</label>
                    </li>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-3" />
                        <label for="second-step__radio-2-3">BBQ</label>
                    </li>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-4" />
                        <label for="second-step__radio-2-4">Linens</label>
                    </li>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-5" />
                        <label for="second-step__radio-2-5">Tables</label>
                    </li>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-6" />
                        <label for="second-step__radio-2-6">Chairs</label>
                    </li>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-7" />
                        <label for="second-step__radio-2-7">Dishes</label>
                    </li>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-8" />
                        <label for="second-step__radio-2-8">Glasses</label>
                    </li>
                    <li className="second-step__item-2">
                        <input className="second-step__input-2" type="checkbox" id="second-step__radio-2-9" />
                        <label for="second-step__radio-2-9">Full Service</label>
                    </li>
                </ul>
            </div>
        );
    }
}