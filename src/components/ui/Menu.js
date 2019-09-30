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

import imageIcon from '../../assets/icons/image-icon.svg';
import mathIcon from '../../assets/icons/math-icon.svg';
import codeIcon from '../../assets/icons/code-icon.svg';

import '../../assets/stylesheets/ui/Menu.scss';
import MenuItem from '../MenuItem';

class Menu extends Component {
  toggleMark(type){
    return event => {
      event.preventDefault();
      this.props.emitter.emit('toggleMark', { type });
    }
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
            size={20}
            status={getHeadingStatus(editorValue)}
            onClick={this.onHeadingClick.bind(this)}
          />
          <ToggleButton
            SVG={BoldSVG}
            size={20}
            status={getToggleButtonStatus("bold", editorValue)}
            onClick={this.toggleMark("bold")}
          />
          <ToggleButton
            SVG={ItalicSVG}
            size={20}
            status={getToggleButtonStatus("italic", editorValue)}
            onClick={this.toggleMark("italic")}
          />
          <ToggleButton
            SVG={UnderlineSVG}
            size={20}
            status={getToggleButtonStatus("underline", editorValue)}
            onClick={this.toggleMark("underline")}
          />
          <ToggleButton
            SVG={StrikethroughSVG}
            size={20}
            status={getToggleButtonStatus("strikethrough", editorValue)}
            onClick={this.toggleMark("strikethrough")}
          />
        </div>
        <div className="menu-category">
          <MenuButton
            SVG={uListSVG}
            size={20}
            isEnabled={isAnMarkableBlock(editorValue)}
            onClick={this.onListButtonClick("unordered-list").bind(this)}
          />
          <MenuButton
            SVG={oListSVG}
            size={20}
            isEnabled={isAnMarkableBlock(editorValue)}
            onClick={this.onListButtonClick("ordered-list").bind(this)}
          />
        </div>
        <div className="menu-category">
          <MenuItem type="image" iconSource={imageIcon} onClick={() => console.log("A implementar")}/>
          <MenuItem type="math" iconSource={mathIcon} onClick={this.onNewMathEquationClick.bind(this)}/>
          <MenuItem type="code" iconSource={codeIcon} onClick={() => console.log("A implementar")}/>
        </div>
      </div>
    );
  }
};

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