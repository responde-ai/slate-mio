import React, { Component } from 'react';

import '../assets/stylesheets/MenuItem.scss';

class MenuItem extends Component {
  render(){
    const { customStyle, customSize, type, iconSource, onClick } = this.props;

    const size = customSize ? { width: customSize, height: customSize } : {}

    return (
      <div style={customStyle} className="mio-menu-item" onClick={onClick}>
        <img
          style={size}
          src={iconSource}
          alt={`Menu ${type} button`}
        />
      </div>
    );
  }
}

export default MenuItem;