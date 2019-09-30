import React, { Component } from 'react';

import ToggleButton from './ToggleButton';
import MenuButton from './MenuButton';

import { ReactComponent as HeadingSVG } from '../../assets/icons/title-icon.svg';
import { ReactComponent as BoldSVG } from '../../assets/icons/bold-icon.svg';
import { ReactComponent as ItalicSVG } from '../../assets/icons/italic-icon.svg';
import { ReactComponent as UnderlineSVG } from '../../assets/icons/underline-icon.svg';
import { ReactComponent as StrikethroughSVG } from '../../assets/icons/strikethrough-icon.svg';

import { ReactComponent as uListSVG } from '../../assets/icons/list-ul-icon.svg';
import { ReactComponent as oListSVG } from '../../assets/icons/list-ol-icon.svg';

import { ReactComponent as ImageSVG } from '../../assets/icons/image-icon.svg';
import { ReactComponent as MathSVG } from '../../assets/icons/math-icon.svg';

import { ReactComponent as pythonSVG } from '../../assets/icons/python-icon.svg';
import { ReactComponent as cSVG } from '../../assets/icons/c-icon.svg';
import { ReactComponent as jsSVG } from '../../assets/icons/js-icon.svg';
import { ReactComponent as rubySVG } from '../../assets/icons/ruby-icon.svg';

import '../../assets/stylesheets/ui/Menu.scss';
import MenuDropdown from './MenuDropdown';

class Menu extends Component {
  toggleMark(type){
    return event => {
      event.preventDefault();
      this.props.emitter.emit('toggleMark', { type });
    }
  }

  uploadImage(event){
    if (event.target.files.length === 0) return; 
    
    const file = event.target.files[0];
    this.props.emitter.emit('uploadImage', { file });
  }

  onHeadingClick(event) {
    event.preventDefault();
    this.props.emitter.emit('toggleBlock', { type: 'heading' });
  }

  onListButtonClick(type) {
    return event => {
      event.preventDefault();
      this.props.emitter.emit('toggleList', { type });
    }
  }

  onNewMathEquationClick(event) {
    event.preventDefault();
    this.props.emitter.emit('showMathEditor');
  }

  render() {
    const { editorValue } = this.props;

    return (
      <div className="menu-container">
        <div className="menu-category">
          <ToggleButton
            SVG={HeadingSVG}
            status={getHeadingStatus(editorValue)}
            onClick={this.onHeadingClick.bind(this)}
          />
          <ToggleButton
            SVG={BoldSVG}
            status={getToggleButtonStatus("bold", editorValue)}
            onClick={this.toggleMark("bold")}
          />
          <ToggleButton
            SVG={ItalicSVG}
            status={getToggleButtonStatus("italic", editorValue)}
            onClick={this.toggleMark("italic")}
          />
          <ToggleButton
            SVG={UnderlineSVG}
            status={getToggleButtonStatus("underline", editorValue)}
            onClick={this.toggleMark("underline")}
          />
          <ToggleButton
            SVG={StrikethroughSVG}
            status={getToggleButtonStatus("strikethrough", editorValue)}
            onClick={this.toggleMark("strikethrough")}
          />
        </div>
        <div className="menu-category">
          <MenuButton
            SVG={uListSVG}
            isEnabled={isAnMarkableBlock(editorValue)}
            onClick={this.onListButtonClick("unordered-list").bind(this)}
          />
          <MenuButton
            SVG={oListSVG}
            isEnabled={isAnMarkableBlock(editorValue)}
            onClick={this.onListButtonClick("ordered-list").bind(this)}
          />
        </div>
        <div className="menu-category">
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg"
            ref={ref => this.upload = ref}
            onChange={this.uploadImage.bind(this)}
          />
          <MenuButton 
            SVG={ImageSVG}
            isEnabled={isAnMarkableBlock(editorValue)}
            onClick={event => this.upload.click(event)}
          />
          <MenuButton 
            SVG={MathSVG}
            isEnabled={isAnMarkableBlock(editorValue)}
            onClick={this.onNewMathEquationClick.bind(this)}
          />
          <MenuDropdown
            schema={dropdownButtonsSchema}
          />
        </div>
      </div>
    );
  }
};

const dropdownButtonsSchema = [
  {
    SVG: pythonSVG,
    onClick: () => console.log("a Implementar")
  },
  {
    SVG: cSVG,
    onClick: () => console.log("a Implementar")
  },
  {
    SVG: jsSVG,
    onClick: () => console.log("a Implementar")
  },
  {
    SVG: rubySVG,
    onClick: () => console.log("a Implementar")
  }
];

const getHeadingStatus = value => {
  if (isBlockOfType("heading", value)) return ToggleButton.TOGGLED_STATUS;
  if (isBlockOfType("paragraph", value)) return ToggleButton.DEFAULT_STATUS;
  return ToggleButton.DISABLED_STATUS;
}

const getToggleButtonStatus = (type, value) => {
  if (isAnActiveMark(type, value)) return ToggleButton.TOGGLED_STATUS;
  if (isAnMarkableBlock(value)) return ToggleButton.DEFAULT_STATUS;
  return ToggleButton.DISABLED_STATUS;
}

const isAnActiveMark = (type, value) => value.activeMarks.some(mark => mark.type === type);

const isBlockOfType = (type, value) => value.blocks.some(block => block.type === type);

const isAnMarkableBlock = value => isBlockOfType('paragraph', value);


export default Menu;