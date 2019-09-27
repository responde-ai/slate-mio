import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideMenuPlusButton from './SideMenuPlusButton';
import SideMenuItem from './SideMenuItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  updateSideMenuState,
  updateSideMenuHiddenStatus,
  updateSideMenuMouseInStatus,
  updateSideMenuExpandedStatus,
  onEditorKeyUp,
  onEditorClick,
  createNewMathEquation,
} from '../actions';

import { getVisibleSelectionRect } from 'get-selection-range';

import titleIcon from '../assets/icons/title-icon.svg';
import imageIcon from '../assets/icons/image-icon.svg';
import mathIcon from '../assets/icons/math-icon.svg';

import '../assets/stylesheets/SideMenu.scss';

class SideMenu extends Component {
  updateSideMenu(){
    if (!this.sideMenuRef) return;

    if (!this.isEmptyLine() || !isValidSelection()) this.hideSideMenu();
    else this.showSideMenu(); 
  }

  hideSideMenu(){
    this.props.updateSideMenuHiddenStatus(true);
    this.props.updateSideMenuState(this.getNewHidestyle());
  }

  showSideMenu(){
    this.props.updateSideMenuHiddenStatus(false);
    this.props.updateSideMenuState(this.getNewShowStyle());
  }

  isEmptyLine(){
    if(!this.isThereBlocks()) return false;

    return this.getCurrentLineText().length === 0;
  }

  isThereBlocks(){
    return this.props.editorValue.texts.get(0);
  }

  isEditorValueUpdated(prevProps){
    return prevProps.editorValue !== this.props.editorValue;
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
      top: `${this.getFixedSelectionTopPosition()}px`,
      left: `${this.getSideMenuLeftPosition()}px`,
    }
  }

  // Chrome bug do not update selection rectangle when arrow up is pressed
  // this method handle this issue 
  getFixedSelectionTopPosition(){
    if (this.props.editorOnClickY !== -1)
      return this.getOnClickTopPosition();

    const LineSelection = getVisibleSelectionRect();
    const defaultTopPosition = LineSelection.top;
    const chock = 40;
    const arrowUpKeyCode = 38;
    const arrowDownKeyCode = 40;
    
    if (this.props.editorKeyUp === arrowUpKeyCode){
      const editorTopPosition = this.getEditorElement().getBoundingClientRect().top;
      const fixedTopPosition = LineSelection.top - chock;

      this.preventKeyUpPropagation();
      return Math.max(fixedTopPosition, editorTopPosition  - chock);
    } 
    
    else if (this.props.editorKeyUp === arrowDownKeyCode) {
      const editorBottomPosition = this.getEditorElement().getBoundingClientRect().bottom;
      const fixedTopPosition = LineSelection.top - chock;

      this.preventKeyUpPropagation();
      return Math.min(fixedTopPosition, editorBottomPosition - chock);
    }
    return defaultTopPosition;
  }

  getOnClickTopPosition(){
    const currentTopPosition = this.props.sideMenuStyle.top;
    const clickYPosition = this.props.editorOnClickY;

    const minY = currentTopPosition - 5;
    const maxY = currentTopPosition + 5;

    this.preventOnClickPropagation();
  
    if (minY < clickYPosition && maxY > clickYPosition) return currentTopPosition;
    else return clickYPosition - 30;
  }

  preventKeyUpPropagation(){
    this.props.onEditorKeyUp(-1);
  }

  preventOnClickPropagation(){
    this.props.onEditorClick({x: -1, y: -1});
  }

  isEditorClick(prevProps){
    return this.props.editorOnClickY !== prevProps.editorOnClickY &&
      this.props.editorOnClickY !== -1;
  }

  isEditorKeyUp(prevProps){
    const { editorKeyUp } = this.props;
    const sensitiveKeys = [38, 40];

    return prevProps.editorKeyUp !== editorKeyUp &&
      sensitiveKeys.includes(editorKeyUp);
  }

  isEditorValueChange(prevProps){
    const { sideMenuIsExpanded, sideMenuIsMouseIn } = this.props;

    return this.isEditorValueUpdated(prevProps) &&
      !sideMenuIsExpanded &&
      !sideMenuIsMouseIn;
  }

  getSideMenuLeftPosition() {
    const marginLeftInPixels = 100;

    const editorRectangle = this.getEditorElement().getBoundingClientRect();
    return editorRectangle.left - marginLeftInPixels;
  }

  getEditorElement(){
    const editor = this.props.editorRef.current;
    return ReactDOM.findDOMNode(editor);
  }

  getMenuClassName(){
    const defaultClassName = "mio-side-menu";
    const showClass = "expanded";
    const { sideMenuIsHidden, sideMenuIsExpanded } = this.props;

    if (!sideMenuIsHidden && sideMenuIsExpanded) return `${defaultClassName} ${showClass}`;
    else return defaultClassName;
  }

  onTitleButtonClick(event){
    const editor = this.props.editorRef.current;
    if (!editor) return;

    event.preventDefault();
    editor.toggleBlock("header");
    editor.focus();
  }

  uploadImage(event){
    if (event.target.files.length === 0) return; 
    
    const file = event.target.files[0];
    const editor = this.props.editorRef.current;

    editor.insertImageFromFile(file);
  }

  onImageButtonClick(event){
    this.upload.click(event);
  }

  onMathButtonClick(event) {
    this.props.createNewMathEquation();
  }

  onClick(event){
    const { sideMenuIsExpanded, updateSideMenuExpandedStatus } = this.props;
    updateSideMenuExpandedStatus(!sideMenuIsExpanded);
  }

  componentDidUpdate(prevProps){
    if (this.isEditorClick(prevProps) || this.isEditorKeyUp(prevProps) || this.isEditorValueChange(prevProps))
      this.updateSideMenu();
  }

  render() {
    const { sideMenuStyle } = this.props;

    return (
      <div
        ref={ref => this.sideMenuRef = ref}
        className={this.getMenuClassName()}
        style={sideMenuStyle}
        onClick={this.onClick.bind(this)}
        onMouseEnter={event => this.props.updateSideMenuMouseInStatus(true)}
        onMouseLeave={event => this.props.updateSideMenuMouseInStatus(false)}
      >
        <SideMenuPlusButton/>
        <div className="mio-side-menu-content">
          <SideMenuItem
            type="header"
            iconSource={titleIcon}
            onClick={this.onTitleButtonClick.bind(this)}
          />
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg"
            ref={ref => this.upload = ref}
            onChange={this.uploadImage.bind(this)}
          />
          <SideMenuItem
            type="image"
            iconSource={imageIcon}
            onClick={this.onImageButtonClick.bind(this)}
          />
          <SideMenuItem
            type="math"
            iconSource={mathIcon}
            onClick={this.onMathButtonClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const isValidSelection = () => {
  return !!getVisibleSelectionRect();
}

const mapStateToProps = store => ({
  sideMenuStyle: store.sideMenuState.style,
  sideMenuIsHidden: store.sideMenuState.isHidden,
  sideMenuIsMouseIn: store.sideMenuState.isMouseIn,
  sideMenuIsExpanded: store.sideMenuState.isExpanded,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateSideMenuState,
    updateSideMenuHiddenStatus,
    updateSideMenuMouseInStatus,
    updateSideMenuExpandedStatus,
    onEditorKeyUp,
    onEditorClick,
    createNewMathEquation,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
