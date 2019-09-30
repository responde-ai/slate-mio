import React, { Component } from 'react';
import { Editor } from 'slate-react';
import plugins from '../slate/plugins';
import renderMark from '../slate/marks';
import renderBlock from '../slate/blocks';
import renderDecoration from '../slate/decorations';

import '../assets/stylesheets/Page.scss';

class Page extends Component {
  toggleBlock({ type }) {
    this.ref.toggleBlock(type);
    this.ref.focus();
  }

  toggleMark({ type }) {
    this.ref.toggleMark(type);
    this.ref.focus();
  }

  toggleList(payload) {
    this.ref.toggleList(payload);
    this.ref.focus();
  }
  
  updateOrCreateMathBlock(action, payload) {
    if (!this.ref) return;

    const blockProps = {
      type: 'math',
      data: { content: payload.mathContent }
    };

    this.ref.focus();

    if (action === 'update') {
      const nodeKey = payload.selectedMathBlock.dataset.key;
      this.ref.setNodeByKey(nodeKey, blockProps);
    } else this.ref.insertBlock(blockProps);

    setTimeout(() => this.props.emitter.emit('closeMathEditor'), 0);  
  }

  updateMathBlock(payload) {
    this.updateOrCreateMathBlock("update", payload);
  }

  createMathBlock(payload) {
    this.updateOrCreateMathBlock("create", payload);
  }

  setEventListeners() {
    this.props.emitter.on('toggleBlock', this.toggleBlock.bind(this));
    this.props.emitter.on('toggleMark', this.toggleMark.bind(this));
    this.props.emitter.on('toggleList', this.toggleList.bind(this));
    this.props.emitter.on('updateMathEquation', this.updateMathBlock.bind(this));
    this.props.emitter.on('createMathEquation', this.createMathBlock.bind(this));
  }

  onClick(event){
    this.props.emitter.emit('onEditorClick', { x: event.clientX, y: event.clientY })
  }
  
  componentDidMount() {
    this.setEventListeners();
  }

  render(){
    const { editorValue, onEditorValueChange, emitter } = this.props;

    return (
      <div className="mio-page">
        <Editor
          onClick={this.onClick.bind(this)}
          plugins={plugins}
          value={editorValue}
          onChange={onEditorValueChange}
          renderMark={renderMark}
          renderBlock={renderBlock}
          renderDecoration={renderDecoration}
          emitter={emitter}
          ref={ref => this.ref = ref}
        />
      </div>
    );
  }
}

export default Page;
