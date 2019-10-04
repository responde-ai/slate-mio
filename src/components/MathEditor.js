import React, { Component } from 'react';

import MenuItem from './MenuItem';
import MathEquation from './generic/MathEquation';

import closeButtonIcon from '../assets/icons/close-icon.svg';
import submitButtonIcon from '../assets/icons/submit-icon.svg';
import '../assets/stylesheets/MathEditor.scss';

class MathEditor extends Component {
  constructor(props){
    super(props);

    this.state = {
      mathContent: props.initialMathContent,
    };  
  }

  onCloseButtonClick(event) {
    this.props.emitter.emit('closeMathEditor');
  }

  onSubmitButtonClick(event) {
    event.preventDefault();

    const { mathContent } = this.state;
    const { selectedMathBlock, emitter } = this.props;

    if (selectedMathBlock)
      emitter.emit('updateMathEquation', { mathContent, selectedMathBlock });
    else emitter.emit('createMathEquation', { mathContent });
  }

  onTextChange(event) {
    const newValue = event.target.value;
    this.setState({ mathContent: newValue });
  }

  isEmptyEquation(){
    return this.state.mathContent === "";
  }

  render(){
    const { mathContent } = this.state;

    return (
      <div className="math-editor-container">
        <MenuItem
          addToClassName="math-editor-close-button"
          type="close"
          iconSource={closeButtonIcon}
          onClick={this.onCloseButtonClick.bind(this)}
        />
        <p>Type an AsciiMath Equation</p>
        <input
          type="text"
          className="math-editor-equation-input"
          maxLength="45"
          value={mathContent}
          onChange={this.onTextChange.bind(this)}
        />
        <MathEquation content={mathContent}></MathEquation>
        <MenuItem
          addToClassName="math-editor-submit"
          type="submit"
          iconSource={submitButtonIcon}
          onClick={this.onSubmitButtonClick.bind(this)}
        ></MenuItem>
      </div>
    );
  }
};

export default MathEditor;