import React, { Component } from 'react';

import '../../assets/stylesheets/MenuItem.scss';

class MenuItem extends Component {
  render(){
    const { type, iconSource, onClick } = this.props;

    return (
      <div className='mio-menu-item' onClick={onClick}>
        <img
          src={iconSource}
          alt={`Menu ${type} button`}
        />
      </div>
    );
  }
}

export default MenuItem;