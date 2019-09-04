import React, { Component } from 'react';

import loadingImageIcon from '../../assets/icons/loading-icon.svg';

export class Image extends Component {
  state = {
    src: loadingImageIcon,
    clicked: false,
  }

  onFileUploadSuccess(url){
    this.setState({ src: url });
  }

  onFileUploadFailure(){
    console.alert('failure');
  }

  onClick(event) {
    const clicked = this.state.clicked;
    this.setState({clicked: !clicked});
  }

  componentDidMount(){
    const file = this.props.node.data.get('file');
    uploadFile(file).then(
      this.onFileUploadSuccess.bind(this),
      this.onFileUploadFailure.bind(this));
  }

  render() {
    const { attributes } = this.props;
    const src = this.state.src;
    const isSelected = this.state.clicked

    return (
      <div style={getImageContainerStyle(isSelected)} {...attributes} onClick={this.onClick.bind(this)}>
        <img style={imageComponentStyle} src={src} alt="upload"/>
        <div style={getResizerStyle(isSelected)} onMouseDown={() => console.log("opa")}>
        </div>
      </div>
    );
  }
}

const getImageContainerStyle = (isSelected) => ({
  position: 'relative',
  display: "inline-block",
  boxShadow: isSelected ? "0 0 0 2px blue" : ""
});

const getResizerStyle = (isSelected) => ({
    position: 'absolute',
    right: '0px',
    bottom: '0px',
    width: '12px',
    height: '12px',
    background: 'blue',
    transform: 'translate(6px, 6px)',
    cursor: 'nwse-resize',
    display: isSelected ? "block" : 'none',
});

const imageComponentStyle = {
  display: "block",
  maxWidth: "100%",
  maxHeight: "20em"
};

const uploadFile = file => {
  let reader = new FileReader();
  return new Promise((accept, fail) => {
    reader.onload = () => accept(reader.result);
    reader.onerror = () => fail(reader.error);
    reader.readAsDataURL(file);
  });
};

export default Image;
