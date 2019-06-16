import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMenuState } from '../../actions';

import boldIcon from '../../assets/icons/bold-icon.svg';
import italicIcon from '../../assets/icons/italic-icon.svg';
import underlineIcon from '../../assets/icons/underline-icon.svg';
import strikethroughIcon from '../../assets/icons/strikethrough-icon.svg';

import '../../assets/stylesheets/Menu.scss';
import MenuItem from './MenuItem';

class Menu extends Component {
  updateMenu(){
    const { editorValue } = this.props;

    if (editorValue.selection.isCollapsed || !this.menuRef) return;

    this.updateMenuStyle();
  }

  updateMenuStyle(){
    this.props.updateMenuState(this.getNewStyle());
  }

  getNewStyle(){
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

  componentWillReceiveProps(nextProps){
    if (nextProps.editorValue != this.props.editorValue) this.updateMenu();
  }

  render(){
    return (
      <div className="mio-menu" style={this.props.menuStyle} ref={ref => this.menuRef = ref}>
        <MenuItem type="bold" iconSource={boldIcon}/>
        <MenuItem type="italic" iconSource={italicIcon}/>
        <MenuItem type="underline" iconSource={underlineIcon}/>
        <MenuItem type="strikethrough" iconSource={strikethroughIcon}/>
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

const mapStateToProps = store => ({
  editorValue: store.editorState.value,
  menuStyle: store.menuState.style,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateMenuState }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);