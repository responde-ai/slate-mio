import React, { Component } from 'react';
import SideMenuPlusButton from './SideMenuPlusButton';
import SideMenuItem from './SideMenuItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSideMenuState } from '../actions';

import '../assets/stylesheets/SideMenu.scss';

class SideMenu extends Component {

  updateSideMenu(){
    if (!this.sideMenuRef) return;

    if (!this.isEmptyLine()) this.hideSideMenu();
    else this.showSideMenu(); 
  }

  hideSideMenu(){
    this.props.updateSideMenuState(this.getNewHidestyle());
  }

  showSideMenu(){
    this.props.updateSideMenuState(this.getNewShowStyle());
  }

  isEmptyLine(){
    if(!this.isThereBlocks()) return false;

    return this.getCurrentLineText().length === 0;
  }

  isThereBlocks(){
    return this.props.editorValue.texts.get(0);
  }

  getCurrentLineText(){
    const textNodes = this.props.editorValue.texts;
    const currentTextNode = textNodes.get(0);
    return currentTextNode.text;
  }

  getNewHidestyle(){
    return {
      display: 'none',
      top: 0,
      left: 0,
    }
  }

  getNewShowStyle(){
    return {
      display: 'flex',
      top: `${getSideMenuTopPosition()}px`,
      left: `70px`,
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.editorValue !== this.props.editorValue) this.updateSideMenu();
  }

  render() {
    const { sideMenuStyle } = this.props;

    return (
      <div
        className="mio-side-menu"
        ref={ref => this.sideMenuRef = ref}
        style={sideMenuStyle}
      >
        <SideMenuPlusButton/>
        <SideMenuItem/>
      </div>
    );
  }
}

const getCurrentLineRectangle = () => {
  const native = window.getSelection();
  const lineRange = native.getRangeAt(0);
  return lineRange.getBoundingClientRect();
}

const getSideMenuTopPosition = () => {
  const lineTopPosition = getCurrentLineRectangle().top;
  return lineTopPosition;
}

const mapStateToProps = store => ({
  editorValue: store.editorState.value,
  sideMenuStyle: store.sideMenuState.style,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateSideMenuState }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
