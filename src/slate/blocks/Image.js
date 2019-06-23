import React, { Component } from 'react';

export class Image extends Component {
  render() {
    const { attributes, node } = this.props;
    const src = node.data.get('src');

    return (
      <div className="image-container" {...attributes}>
        <img src={src}/>
      </div>
    );
  }
}

export default Image;
