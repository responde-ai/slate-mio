import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <h3 {...this.props.attributes}>
        {this.props.children}
      </h3>
    )
  }
}

export default Header;
