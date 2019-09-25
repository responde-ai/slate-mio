import React, { Component } from 'react';

import '../../assets/stylesheets/ui/DocumentTitle.scss';

class DocumentTitle extends Component {
  render() {
    const { value, onTextChange } = this.props;

    return (
      <input type="text" value={value} onChange={onTextChange} ></input>
    );
  }
}

export default DocumentTitle;