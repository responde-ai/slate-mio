import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import './App.css';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
});

class App extends Component {
  state = { value: initialValue }

  onChange = ({ value }) => {
    this.setState({ value });
  }

  render(){
    return <Editor value={this.state.value} onChange={this.onChange}/>
  }
}

export default App;
