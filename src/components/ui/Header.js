import React, { Component } from 'react';

import MenuItem from '../MenuItem';
import Menu from './Menu';
import DocumentTitle from './DocumentTitle';

import '../../assets/stylesheets/ui/Header.scss';

import appIcon from '../../assets/icons/file-icon.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documentTitle: "Title Here"
    }
  }

  onDocumentTitleChange(event) {
    this.setState({
      documentTitle: event.target.value
    })
  }

  render() {
    return (
    <div className="header-container">
      <MenuItem
        type="app icon"
        iconSource={appIcon}
        customStyle={{margin: 'auto'}}
        customSize={50}
        onClick={() => {}}
      />
      <div className="input-menu-wrapper">
        <DocumentTitle value={this.state.documentTitle} onTextChange={this.onDocumentTitleChange.bind(this)}/>
        <Menu />
      </div>
    </div>
    );
  }
}

export default Header;