import React, { Component } from 'react';
import { Editor } from 'slate-react';
import plugins from '../slate/plugins';
import renderMark from '../slate/marks';
import renderBlock from '../slate/blocks';
import renderDecoration from '../slate/decorations';

import { connect } from 'react-redux';

import '../assets/stylesheets/Page.scss';

class Page extends Component {
  toggleMark({ type }) {
    this.ref.toggleMark(type);
    this.ref.focus();
  }
  
  updateOrCreateMathBlock() {
    const selectedMathBlock = this.props.selectedMathBlock;

    if (selectedMathBlock) return this.updateMathBlock(selectedMathBlock);
    this.createMathBlock()
  }

  updateMathBlock(selectedMathBlock) {
    if (!this.ref) return;
    const mathContent = this.props.mathContent;

    this.props.editorRef.current.setNodeByKey(selectedMathBlock.dataset.key, {
      type: "math",
      data: { content: mathContent }
    });
  }

  createMathBlock() {
    if (!this.ref) return;
    const mathContent = this.props.mathContent;

    this.ref.insertBlock({
      type: "math",
      data: { content: mathContent }
      });
  }


  shouldUpdateOrCreateMathBlock(prevProps){
    return this.props.mathContent !== prevProps.mathContent;
  }

  setEventsListeners() {
    this.props.emitter.on('toggleMark', this.toggleMark.bind(this));
  }

  onClick(event){
    this.props.emitter.emit('onEditorClick', { x: event.clientX, y: event.clientY })
  }
  
  componentDidMount() {
    this.setEventsListeners();
  }

  componentDidUpdate(prevProps) {
    if (this.shouldUpdateOrCreateMathBlock(prevProps)) this.updateOrCreateMathBlock();
  }

  render(){
    const { editorValue, onEditorValueChange } = this.props;

    return (
      <div className="mio-page">
        <Editor
          ref={ref => this.ref = ref}
          onClick={this.onClick.bind(this)}
          plugins={plugins}
          value={editorValue}
          onChange={onEditorValueChange}
          renderMark={renderMark}
          renderBlock={renderBlock}
          renderDecoration={renderDecoration}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  mathContent: store.mathEditorState.mathContent,
  selectedMathBlock: store.mathEditorState.selectedMathBlock,
});

export default connect(mapStateToProps)(Page);
