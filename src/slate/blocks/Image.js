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
    console.log('failure');
  }

  getClassName(){
    const clicked = this.state.clicked;
    const defaultClassName = "image-container";

    return clicked ? `${defaultClassName} clicked` : defaultClassName;
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

    return (
      <div className={this.getClassName()} {...attributes} onClick={this.onClick.bind(this)}>
        <img src={src} alt="upload"/>
      </div>
    );
  }
}

const uploadFile = file => {
  let reader = new FileReader();
  return new Promise((accept, fail) => {
    reader.onload = () => accept(reader.result);
    reader.onerror = () => fail(reader.error);
    reader.readAsDataURL(file);
  });
};

export default Image;
