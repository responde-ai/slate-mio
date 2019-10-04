import React, { Component } from 'react';

import boldIcon from '../../assets/icons/bold-icon.svg';
import italicIcon from '../../assets/icons/italic-icon.svg';
import underlineIcon from '../../assets/icons/underline-icon.svg';
import strikethroughIcon from '../../assets/icons/strikethrough-icon.svg';

import '../../assets/stylesheets/PopUpMenu.scss';
import MenuItem from '../MenuItem';

class PopUpMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseOnMenu: false,
      style: {
        display: 'none',
        top: 0,
        left: 0,
      }
    };
  }
  
  updateMenu(){
    if(!this.menuRef) return;
    if (this.updatingFromMenu){
      this.updatingFromMenu = false;
      return;
    }

    if(this.isInvalidSelection()) this.hideMenu();
    else this.showMenu();
  }

  hideMenu(){
    this.setState({ style: this.getNewHidestyle() });
  }

  showMenu(){
    this.setState({ style: this.getNewShowStyle() });
  }

  isInvalidSelection(){
    const { editorValue } = this.props; 
    const { selection, fragment } = editorValue;

    return this.isSelectionBlurredOutOfMenu() ||
      selection.isCollapsed ||
      fragment.text === '';
  }

  isSelectionBlurredOutOfMenu(){
    const selection = this.props.editorValue.selection;

    return !this.state.mouseOnMenu && selection.isBlurred;
  }

  getNewHidestyle(){
    return { visibility: 'hidden' };
  }

  getNewShowStyle(){
    const selectionRect = getSelectionRectangle();
    const top = `${this.getMenuTopPosition(selectionRect)}px`;
    const left = `${this.getMenuLeftPosition(selectionRect)}px`;
    return {
      top,
      left,
    }
  }

  getMenuTopPosition(rect){
    const menuMargin = 15;
    return rect.top + getScrollAlongYAxis() - this.getMenuHeight() - menuMargin;
  }

  getMenuLeftPosition(rect){
    return rect.left + getScrollAlongXAxis() - this.getMenuWidht()/2 + rect.width/2;
  }

  getMenuHeight(){
    return this.menuRef.offsetHeight;
  }

  getMenuWidht(){
    return this.menuRef.offsetWidth;
  }

  toggleMark(type){
    return event => {
      event.preventDefault();
      this.props.emitter.emit('toggleMark', { type });
    }
  }

  onMouseEnter() {
    this.setState({mouseOnMenu: true});
  }

  onMouseLeave() {
    this.setState({mouseOnMenu: false});
  }

  componentDidUpdate(prevProps){
    if (prevProps.editorValue !== this.props.editorValue) this.updateMenu();
  }

  render(){
    return (
      <div
        className="mio-menu"
        style={this.state.style}
        ref={ref => this.menuRef = ref}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        <MenuItem type="bold"
          iconSource={boldIcon}
          onClick={this.toggleMark("bold")}
        />
        <MenuItem
          type="italic"
          iconSource={italicIcon}
          onClick={this.toggleMark("italic")}
        />
        <MenuItem
          type="underline"
          iconSource={underlineIcon}
          onClick={this.toggleMark("underline")}
        />
        <MenuItem
          type="strikethrough"
          iconSource={strikethroughIcon}
          onClick={this.toggleMark("strikethrough")}
        />
        <div className="mio-menu-arrow"></div>
      </div>
    );
  }
}

const getSelectionRectangle = () => {
  const native = window.getSelection();
  const range = native.getRangeAt(0);
  return range.getBoundingClientRect();
}

const getScrollAlongYAxis = () => {
 return window.pageYOffset;
}

const getScrollAlongXAxis = () => {
  return window.pageXOffset;
}

export default PopUpMenu;