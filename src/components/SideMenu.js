import React, { Component } from 'react';

import plusIcon from '../assets/icons/plus-icon.svg';

import '../assets/stylesheets/SideMenu.scss';

function SideMenuPlusButton() {
  return (
    <div className="mio-side-menu-plus-button">
      <img
          src={plusIcon}
          alt={`Side menu plus button`}
      />
    </div>
  )
}

export class SideMenu extends Component {
  render() {
    return (
      <div className="mio-side-menu">
        <SideMenuPlusButton/>
      </div>
    )
  }
}

export default SideMenu;
