import React, { Component } from 'react';

import headingIcon from '../../assets/icons/title-icon.svg';
import boldIcon from '../../assets/icons/bold-icon-black.svg';
import italicIcon from '../../assets/icons/italic-icon-black.svg';
import underlineIcon from '../../assets/icons/underline-icon-black.svg';
import strikethroughIcon from '../../assets/icons/strikethrough-icon-black.svg';

import uList from '../../assets/icons/list-ul-icon.svg';
import oList from '../../assets/icons/list-ol-icon.svg';

import imageIcon from '../../assets/icons/image-icon.svg';
import mathIcon from '../../assets/icons/math-icon.svg';
import codeIcon from '../../assets/icons/code-icon.svg';

import '../../assets/stylesheets/ui/Menu.scss';
import MenuItem from '../MenuItem';

class Menu extends Component {
  onBoldClick() {
    console.log("opa!");
  }

  onUnorderedListButtonClick(event) {
    event.preventDefault();
    this.props.editorRef.current.toggleList();
  }

  onOrderedListButtonClick(event) {
    event.preventDefault();
    this.props.editorRef.current.toggleList({ type: "ordered-list" });
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-category">
          <MenuItem type="heading" iconSource={headingIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="bold" iconSource={boldIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="italic" iconSource={italicIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="underline" iconSource={underlineIcon} onClick={this.onBoldClick.bind(this)}/>
          <MenuItem type="strikethrough" iconSource={strikethroughIcon} onClick={this.onBoldClick.bind(this)}/>
        </div>
        <div className="menu-category">
          <MenuItem type="unordered-list" iconSource={uList} onClick={this.onUnorderedListButtonClick.bind(this)}/>
          <MenuItem type="ordered-list" iconSource={oList} onClick={this.onOrderedListButtonClick.bind(this)}/>
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