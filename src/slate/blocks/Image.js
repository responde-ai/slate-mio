import React, { Component } from 'react';
import uploadImage from '../../services/ImageUploader';

import loadingImageIcon from '../../assets/icons/loading-icon.svg';

export class Image extends Component {
  MIN_WIDTH = 50;
  MIN_HEIGHT = 50;

  state = {
    src: loadingImageIcon,
    width: 0,
    height: 0,
    isLoaded: false,
    isSelected: false,
    isResizing: false,
  }

  resize(mouseX, mouseY){
    const imgRect = this.imgRef.getBoundingClientRect();
    const x0 = imgRect.left;
    const y0 = imgRect.top;
    const xf = mouseX;
    const yf = mouseY;

    const width = Math.round(Math.abs(xf-x0));
    const height = Math.round(Math.abs(yf-y0));

    console.log(imgRect, mouseX, mouseY);

    if (width < this.MIN_WIDTH || height < this.MIN_HEIGHT) return;

    this.setState( { width, height });
  }

  onFileUploadSuccess(image){
    this.setState({
      src: image.src,
      isLoaded: true,
      width: image.width,
      height: image.height
    });
  }

  onFileUploadFailure(){
    console.alert('failure');
  }

  onClick(event) {
    const isSelected = this.state.isSelected;
    this.setState({ isSelected: !isSelected });
  }

  resizerOnMouseDown(event) {
    if (!this.state.isLoaded) return;
    this.setState({ isResizing: true });
  }

  resizerOnMouseMove(event) {
    if (!this.state.isLoaded || !this.state.isResizing || !this.imgRef ) return;

    this.resize(event.clientX, event.clientY);
  }

  resizerOnMouseUp(event) {
    this.setState({ isResizing: false });
  }

  componentDidMount(){
    const file = this.props.node.data.get('file');
    uploadImage(file).then(
      this.onFileUploadSuccess.bind(this),
      this.onFileUploadFailure.bind(this));
  }

  render() {
    const { attributes } = this.props;
    const { src, width, height, isSelected } = this.state;

    return (
      <div style={getImageContainerStyle(isSelected)} {...attributes} onClick={this.onClick.bind(this)}>
        <img
          style={imageComponentStyle(width, height)}
          src={src}
          alt="upload"
          ref = {ref => this.imgRef = ref}
          />
        <div
          style={getResizerStyle(isSelected)}
          onMouseDown={this.resizerOnMouseDown.bind(this)}
          onMouseUp={this.resizerOnMouseUp.bind(this)}
          onMouseMove={this.resizerOnMouseMove.bind(this)}
        >
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

const imageComponentStyle = (width, height) => ({
  display: "block",
  maxWidth: "100%",
  maxHeight: "20em",
  width: `${width}px`,
  height: `${height}px`,
});

export default Image;
