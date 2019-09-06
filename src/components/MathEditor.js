import React, { Component } from 'react';

import { onMathButtonClick } from '../actions';

import MenuItem from './MenuItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import closeButtonIcon from '../assets/icons/close-icon.svg';

class MathEditor extends Component {
  onCloseButtonClick(event) {
    this.props.onMathButtonClick({
      shouldShow: false,
      mathContent: "",
      selectedMathBlock: null,
    });
  }

  render(){
    return (
      <div style={mainContainerStyle} >
        <MenuItem style={closeButtonStyle}
          type="close"
          iconSource={closeButtonIcon}
          onClick={this.onCloseButtonClick.bind(this)}
        />
      </div>
    );
  }
};

const mainContainerStyle = {
  position: 'fixed',
  margin: 'auto',
  background: 'white',
  padding: '20px',
  borderRadius: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  boxShadow: '0px 2px 5px #888888',
  width: '50%',
  height: '300px',
  zIndex: 5,
};

const closeButtonStyle = {
  position: 'absolute',
  top: '15px',
  right: '10px',
  opacity: 0.5,
  padding: 0
};

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