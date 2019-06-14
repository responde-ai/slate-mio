import React, { Component } from 'react';
import { Editor } from 'slate-react';
import initialValue from '../../slate/initialValue';

import '../../style/Page.css';

class Page extends Component {
  state = { value: initialValue }

  onChange = ({ value }) => {
    this.setState({ value });
  }

  onKeyDown = (event, editor, next) => {
    if (event.key !== '&') return next();
    event.preventDefault();
    editor.insertText('alálálá');
  }

  render(){
    return (
      <div className="mio-page">
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}  
        />
      </div>
    );
  }
}

export default Page;