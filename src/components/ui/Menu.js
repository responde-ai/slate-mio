import React, { Component } from 'react';

import boldIcon from '../../assets/icons/bold-icon.svg';
import italicIcon from '../../assets/icons/italic-icon.svg';
import underlineIcon from '../../assets/icons/underline-icon.svg';
import strikethroughIcon from '../../assets/icons/strikethrough-icon.svg';

import '../../assets/stylesheets/Menu.scss';
import MenuItem from './MenuItem';

class Menu extends Component {
  render(){
    return (
      <div className="mio-menu">
        <MenuItem type="bold" iconSource={boldIcon}/>
        <MenuItem type="italic" iconSource={italicIcon}/>
        <MenuItem type="underline" iconSource={underlineIcon}/>
        <MenuItem type="strikethrough" iconSource={strikethroughIcon}/>
        <div className="mio-menu-arrow"></div>
      </div>
    );
  }
}

export default Menu;