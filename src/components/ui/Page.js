import React, { Component } from 'react';
import { Editor } from 'slate-react';
import initialValue from '../../slate/initialValue';
import plugins from '../../slate/plugins';
import renderMark from '../../slate/marks';

import '../../assets/stylesheets/Page.scss';

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
          renderMark={renderMark}
        />
      </div>
    );
  }
}

export default Page;