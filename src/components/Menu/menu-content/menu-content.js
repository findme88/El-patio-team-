import React, { Component } from 'react';
import DishesNav from './dishes-nav/dishes-nav';
import DishesList from './dishes-list/dishes-list';
import ShowDishes from './show-dishes/show-dishes';
import Dish from '../../Home/popular-dishes/dish/dish';

import './menu-content.scss';
import MenuNav from '../menu-nav/menu-nav';

export default class MenuContent extends Component {
  state = {
    classNameLunch: 'menu-underscore',
    classNameDinner: '',
    classNameWine: '',
    classNameFilter: 'menu-container__filter-1',

    classNameSandwich: 'menu-choose',
    classNameBreakfest: '',
    classNameMain: '',
    classNameAppet: '',
    classNameDessert: '',
    classNameGrill: '',

    classNameSopa: '',
    classNameEns: '',
    classNameCarne: '',
    classNamePesc: '',

    classNameBlanco: '',
    classNameRosado: '',
    classNameTinto: '',
    classNameEspumoso: '',

    menu: 'Lunch',
    filter: 'Sandwiches'
  }

  clickLunch = () => {
    this.clearFilter();
    this.setState({ classNameLunch: 'menu-underscore', classNameDinner: '', classNameWine: '', menu: 'Lunch' });
  }
  clickDinner = () => {
    this.clearFilter();
    this.setState({ classNameLunch: '', classNameDinner: 'menu-underscore', classNameWine: '', menu: 'dinner' });
  }
  clickWine = () => {
    this.clearFilter();
    this.setState({ classNameLunch: '', classNameDinner: '', classNameWine: 'menu-underscore', menu: 'wine' });
  }

  clearFilter = () => {
    this.setState({
      classNameSandwich: '',
      classNameBreakfest: '',
      classNameMain: '',
      classNameAppet: '',
      classNameDessert: '',
      classNameGrill: '',

      classNameSopa: '',
      classNameEns: '',
      classNameCarne: '',
      classNamePesc: '',

      classNameBlanco: '',
      classNameRosado: '',
      classNameTinto: '',
      classNameEspumoso: '',

      filter: ''
    });
  }

  clickSandwich = () => {
    this.clearFilter();
    this.setState({ classNameSandwich: 'menu-choose', filter: 'Sandwiches' });
  }
  clickBreakfest = () => {
    this.clearFilter();
    this.setState({ classNameBreakfest: 'menu-choose', filter: 'Breakfasts' });
  }
  clickMain = () => {
    this.clearFilter();
    this.setState({ classNameMain: 'menu-choose', filter: 'Main Courses' });
  }
  clickAppet = () => {
    this.clearFilter();
    this.setState({ classNameAppet: 'menu-choose', filter: 'Appetizers' });
  }
  clickDessert = () => {
    this.clearFilter();
    this.setState({ classNameDessert: 'menu-choose', filter: 'desserts&drinks' });
  }
  clickGrill = () => {
    this.clearFilter();
    this.setState({ classNameGrill: 'menu-choose', filter: 'Grill' });
  }

  clickSopa = () => {
    this.clearFilter();
    this.setState({ classNameSopa: 'menu-choose', filter: 'Sopa' });
  }
  clickEns = () => {
    this.clearFilter();
    this.setState({ classNameEns: 'menu-choose', filter: 'ensaladas' });
  }
  clickCarne = () => {
    this.clearFilter();
    this.setState({ classNameCarne: 'menu-choose', filter: 'carne' });
  }
  clickPesc = () => {
    this.clearFilter();
    this.setState({ classNamePesc: 'menu-choose', filter: 'pescado' });
  }

  clickBlanco = () => {
    this.clearFilter();
    this.setState({ classNameBlanco: 'menu-choose', filter: 'vino blanco' });
  }
  clickTinto = () => {
    this.clearFilter();
    this.setState({ classNameTinto: 'menu-choose', filter: 'vino tinto' });
  }
  clickRosado = () => {
    this.clearFilter();
    this.setState({ classNameRosado: 'menu-choose', filter: 'vino rosado' });
  }
  clickEspumoso = () => {
    this.clearFilter();
    this.setState({ classNameEspumoso: 'menu-choose', filter: 'un vino espumoso' });
  }

  showFilter = (menu) => {
    if (menu === 'Lunch')
      return (
        <div className="menu-container__filter">
          <ul className="menu-container__list">
            <li onClick={this.clickSandwich} className={'menu-container__item ' + this.state.classNameSandwich}>
              <span className="menu-container__text">Sandwiches</span>
              <div className="menu-container__circle --sandwich"></div>
            </li>
            <li onClick={this.clickBreakfest} className={'menu-container__item ' + this.state.classNameBreakfest}>
              <span className="menu-container__text">Breakfest</span>
              <div className="menu-container__circle --breakfest"></div>
            </li>
            <li onClick={this.clickMain} className={'menu-container__item ' + this.state.classNameMain}>
              <span className="menu-container__text">Main courses</span>
              <div className="menu-container__circle --main"></div>
            </li>
            <li onClick={this.clickAppet} className={'menu-container__item ' + this.state.classNameAppet}>
              <span className="menu-container__text">Appetizers</span>
              <div className="menu-container__circle --appet"></div>
            </li>
            <li onClick={this.clickDessert} className={'menu-container__item ' + this.state.classNameDessert}>
              <span className="menu-container__text">Desserts&drinks</span>
              <div className="menu-container__circle --dessert"></div>
            </li>
            <li onClick={this.clickGrill} className={'menu-container__item ' + this.state.classNameGrill}>
              <span className="menu-container__text">Grill</span>
              <div className="menu-container__circle --grill"></div>
            </li>
            <div className="menu-container__horizontal-line"></div>
          </ul>
        </div>
      );

    if (menu === 'dinner')
      return (
        <div className="menu-container__filter">
          <ul className="menu-container__list">
            <li onClick={this.clickSopa} className={'menu-container__item ' + this.state.classNameSopa}>
              <span className="menu-container__text">Sopa</span>
              <div className="menu-container__circle"></div>
            </li>
            <li onClick={this.clickEns} className={'menu-container__item ' + this.state.classNameEns}>
              <span className="menu-container__text">Ensaladas</span>
              <div className="menu-container__circle"></div>
            </li>
            <li onClick={this.clickCarne} className={'menu-container__item ' + this.state.classNameCarne}>
              <span className="menu-container__text">Carne</span>
              <div className="menu-container__circle"></div>
            </li>
            <li onClick={this.clickPesc} className={'menu-container__item ' + this.state.classNamePesc}>
              <span className="menu-container__text">Pescado</span>
              <div className="menu-container__circle"></div>
            </li>
            <div className="menu-container__horizontal-line-2"></div>
          </ul>
        </div>
      );

    if (menu === 'wine')
      return (
        <div className="menu-container__filter">
          <ul className="menu-container__list">
            <li onClick={this.clickBlanco} className={'menu-container__item ' + this.state.classNameBlanco}>
              <span className="menu-container__text">Vino blanco</span>
              <div className="menu-container__circle --sandwich"></div>
            </li>
            <li onClick={this.clickTinto} className={'menu-container__item ' + this.state.classNameTinto}>
              <span className="menu-container__text">Vino tinto</span>
              <div className="menu-container__circle --breakfest"></div>
            </li>
            <li onClick={this.clickRosado} className={'menu-container__item ' + this.state.classNameRosado}>
              <span className="menu-container__text">Vino rosado</span>
              <div className="menu-container__circle --main"></div>
            </li>
            <li onClick={this.clickEspumoso} className={'menu-container__item ' + this.state.classNameEspumoso}>
              <span className="menu-container__text">Un vino espumoso</span>
              <div className="menu-container__circle --appet"></div>
            </li>
            <div className="menu-container__horizontal-line-3"></div>
          </ul>
        </div>
      );
  }

  render() {

    return (
      <div className="menu-content">

        <div className="menu-nav">
          <ul className="menu-nav__list">
            <li onClick={this.clickLunch} className={'menu-nav__item ' + this.state.classNameLunch}>Lunch</li>
            <span className="menu-nav__slash">/</span>
            <li onClick={this.clickDinner} className={'menu-nav__item ' + this.state.classNameDinner}>Dinner</li>
            <span className="menu-nav__slash">/</span>
            <li onClick={this.clickWine} className={'menu-nav__item ' + this.state.classNameWine}>Wine List</li>
          </ul>
        </div>

        <div className="menu-container" >
          {this.showFilter(this.state.menu)}

          <ShowDishes menu={this.state.menu} filter={this.state.filter} />

          {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 dish --absolute">
            <div className="dish__info">
              <h3 className="dish__title">medialuna rellena</h3>
              <p className="dish__desc">Croissant with Egg, melted Cheese&Ham</p>
              <p className="dish__price"><span>Price: $4.60</span></p>
            </div>
          </div> */}
        </div>



        {/* <DishesNav /> */}
        {/* <DishesList /> */}

      </div>
    );
  }
}