import React, { Component } from 'react';

import { onMathButtonClick } from '../actions';

import MenuItem from './MenuItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import closeButtonIcon from '../assets/icons/close-icon.svg';
import '../assets/stylesheets/MathEditor.scss';

class MathEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      mathContent: "",
    };  
  }

  onCloseButtonClick(event) {
    this.props.onMathButtonClick({
      shouldShow: false,
      mathContent: "",
      selectedMathBlock: null,
    });
  }

  onTextChange(event) {
    const newValue = event.target.value;
    this.setState({ mathContent: newValue });
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
        <textarea
          className="math-editor-equation-input"
          value={this.state.mathContent}
          onChange={this.onTextChange.bind(this)}
        >
        <MathPreview></MathPreview>
        </textarea>
      </div>
    );
  }
};

function MathPreview(props) {
  return (
    
  );
}

const mapStateToProps = store => ({
  mathContent: store.mathEditorState.mathContent,
  selectedMathBlock: store.mathEditorState.selectedMathBlock,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onMathButtonClick,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MathEditor);