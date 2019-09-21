import React, { Component } from 'react';
import { Editor } from 'slate-react';
import plugins from '../slate/plugins';
import renderMark from '../slate/marks';
import renderBlock from '../slate/blocks';
import renderDecoration from '../slate/decorations';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateEditorState,
  onEditorKeyUp,
  onEditorClick,
  onMathBlockCreatedOrUpdated
} from '../actions';

import '../assets/stylesheets/Page.scss';

class Page extends Component {
  onChange = ({ value }) => {
    console.log(value.toJSON());
    this.props.updateEditorState(value);
  }

  updateOrCreateMathBlock() {
    const { mathContent } = this.props;

    this.props.editorRef.current.insertBlock({
      type: "math",
      data: { content: mathContent }
      });

    //this.props.onMathBlockCreatedOrUpdated();
  }

  shouldUpdateOrCreateMathBlock(prevProps){
    return this.props.shouldUpdateOrCreateMathBlock &&
      this.props.shouldUpdateOrCreateMathBlock !== prevProps.shouldUpdateOrCreateMathBlock;
  }

  onKeyUp(event){
    this.props.onEditorKeyUp(event.keyCode);
  }

  onClick(event){
    this.props.onEditorClick({ x: event.clientX, y: event.clientY });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.shouldUpdateOrCreateMathBlock(prevProps))
      this.updateOrCreateMathBlock();
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
  editorValue: store.editorState.value,
  mathContent: store.mathEditorState.mathContent,
  selectedMathBlock: store.mathEditorState.selectedMathBlock,
  shouldUpdateOrCreateMathBlock: store.mathEditorState.shouldUpdateOrCreateMathBlock,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateEditorState,
    onEditorKeyUp,
    onEditorClick,
    onMathBlockCreatedOrUpdated
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Page);
