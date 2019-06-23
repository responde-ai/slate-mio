import React, { Component } from 'react';

import '../assets/stylesheets/Header.scss';

class Header extends Component {
  state = { value: "Title Here" };

  onChange(event){
    this.setState({ value: event.target.value });
  }

  render(){
    return (
      <div className="mio-header">
        <input type="text" value={this.state.value} onChange={this.onChange.bind(this)}/>
      </div>
    );
  }
}

export default Header;