import React, { Component } from 'react';
import { Editor } from 'slate-react';
import plugins from '../slate/plugins';
import renderMark from '../slate/marks';
import renderBlock from '../slate/blocks';
import renderDecoration from '../slate/decorations';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEditorState, onEditorKeyUp, onEditorClick } from '../actions';

import '../assets/stylesheets/Page.scss';

class Page extends Component {
  onChange = ({ value }) => {
    this.props.updateEditorState(value);
  }

  onKeyUp(event){
    this.props.onEditorKeyUp(event.keyCode);
  }

  onClick(event){
    this.props.onEditorClick({ x: event.clientX, y: event.clientY });
  }

  render(){
    const { editorValue } = this.props;

    return (
      <div className="mio-page">
        <Editor
          onKeyUp={this.onKeyUp.bind(this)}
          onClick={this.onClick.bind(this)}
          plugins={plugins}
          value={editorValue}
          onChange={this.onChange}
          renderMark={renderMark}
          renderBlock={renderBlock}
          renderDecoration={renderDecoration}
          ref={this.props.editorRef}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  editorValue: store.editorState.value
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateEditorState, onEditorKeyUp, onEditorClick }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Page);
