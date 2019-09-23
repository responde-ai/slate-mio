import React, { Component } from 'react';

import { onMathEquationSubmit, hideMathEditor } from '../actions';

import MenuItem from './MenuItem';
import MathEquation from './generic/MathEquation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import closeButtonIcon from '../assets/icons/close-icon.svg';
import submitButtonIcon from '../assets/icons/submit-icon.svg';
import '../assets/stylesheets/MathEditor.scss';

class MathEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      mathContent: props.mathContent,
    };  
  }

  onCloseButtonClick(event) {
    this.props.hideMathEditor();
  }

  onSubmitButtonClick(event) {
    if (this.isEmptyEquation()) return;

    this.props.onMathEquationSubmit(this.state.mathContent);
  }

  onTextChange(event) {
    const newValue = event.target.value;
    this.setState({ mathContent: newValue });
  }

  isEmptyEquation(){
    return this.state.mathContent === "";
  }

  render(){
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
          value={this.state.mathContent}
          onChange={this.onTextChange.bind(this)}
        />
        <MathEquation content={this.state.mathContent}></MathEquation>
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

const mapStateToProps = store => ({
  mathContent: store.mathEditorState.mathContent,
  selectedMathBlock: store.mathEditorState.selectedMathBlock,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onMathEquationSubmit,
    hideMathEditor,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MathEditor);