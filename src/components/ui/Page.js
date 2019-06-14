import React, { Component } from 'react';
import { Editor } from 'slate-react';
import initialValue from '../../slate/initialValue';
import plugins from '../../slate/plugins';

import '../../style/Page.scss';

class Page extends Component {
  state = { value: initialValue }

  onChange = ({ value }) => {
    this.setState({ value });
  }

  render(){
    return (
      <div className="mio-page">
        <Editor
          plugins={plugins}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Page;