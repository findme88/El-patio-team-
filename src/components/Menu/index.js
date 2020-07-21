import React from 'react';
import MenuBanner from '../Menu/banner/banner';
import MenuTitle from './menu-title/menu-title';
import MenuNav from './menu-nav/menu-nav'
import MenuContent from './menu-content/menu-content';
import Footer from "../footer/footer";

function Menu() {
  return (
    <div className="menu">
      <MenuBanner />
      <MenuTitle />
      {/* <MenuNav /> */}
      <MenuContent />
      <Footer />
    </div>
  )
}

export default Menu;
