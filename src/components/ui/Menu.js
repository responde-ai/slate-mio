import React, { Component } from 'react';

import boldIcon from '../../assets/icons/bold-icon-black.svg';
import italicIcon from '../../assets/icons/italic-icon-black.svg';
import underlineIcon from '../../assets/icons/underline-icon-black.svg';
import strikethroughIcon from '../../assets/icons/strikethrough-icon-black.svg';

import imageIcon from '../../assets/icons/image-icon.svg';
import mathIcon from '../../assets/icons/math-icon.svg';
import codeIcon from '../../assets/icons/code-icon.svg';

import '../../assets/stylesheets/ui/Menu.scss';
import MenuItem from '../MenuItem';

class Menu extends Component {
  onBoldClick() {
    console.log("opa!");
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-category">
          <MenuItem type="bold" iconSource={boldIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="italic" iconSource={italicIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="underline" iconSource={underlineIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="strikethrough" iconSource={strikethroughIcon} onClick={this.onBoldClick.bind(this)}/>
        </div>
        <div className="menu-category">
          <MenuItem type="image" iconSource={imageIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="math" iconSource={mathIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="code" iconSource={codeIcon} onClick={this.onBoldClick.bind(this)}/>
        </div>
      </div>
    );
  }
};

export default Menu;