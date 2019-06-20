import React, { Component } from 'react';
import { Editor } from 'slate-react';
import plugins from '../../slate/plugins';
import renderMark from '../../slate/marks';
import renderBlock from '../../slate/blocks';
import renderDecoration from '../../slate/decorations';
import decorateNode from '../../slate/services/decorateNode';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEditorState } from '../../actions';

import '../../assets/stylesheets/Page.scss';

class Page extends Component {
  onChange = ({ value }) => {
    this.props.updateEditorState(value);
  }

  render(){
    const { editorValue } = this.props;

    return (
      <div className="mio-page">
        <Editor
          plugins={plugins}
          value={editorValue}
          onChange={this.onChange}
          renderMark={renderMark}
          renderBlock={renderBlock}
          renderDecoration={renderDecoration}
          decorateNode={decorateNode}
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
  bindActionCreators({ updateEditorState }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Page);
