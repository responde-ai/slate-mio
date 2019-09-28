import React, { Component } from 'react';
import { Editor } from 'slate-react';
import plugins from '../slate/plugins';
import renderMark from '../slate/marks';
import renderBlock from '../slate/blocks';
import renderDecoration from '../slate/decorations';

import '../assets/stylesheets/Page.scss';

class Page extends Component {
  toggleMark({ type }) {
    this.ref.toggleMark(type);
    this.ref.focus();
  }
  
  updateOrCreateMathBlock(action, payload) {
    if (!this.ref) return;

    console.log(action, payload, this.ref);

    const blockProps = {
      type: 'math',
      data: { content: payload.mathContent }
    };

    this.ref.focus();

    if (action === 'update') {
      const nodeKey = payload.selectedMathBlock.dataset.key;
      this.ref.setNodeByKey(nodeKey, blockProps);
    } else this.ref.insertBlock(blockProps);
  }

  updateMathBlock(payload) {
    this.updateOrCreateMathBlock("update", payload);
  }

  createMathBlock(payload) {
    this.updateOrCreateMathBlock("create", payload);
  }

  setEventListeners() {
    this.props.emitter.on('toggleMark', this.toggleMark.bind(this));
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

export default Page;
