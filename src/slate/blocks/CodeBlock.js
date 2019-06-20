import React, { Component } from 'react';

class CodeBlock extends Component {
  onChange(event){
    const { editor, node } = this.props;
    editor.setNodeByKey(node.key, { data: { language: event.target.value } });
  }

  render(){
    const language = this.props.node.data.get('language');
    
    return (
      <div style={{position: 'relative'}}>
        <pre className={`language-${language}`}>
          <code className={`language-${language}`} {...this.props.attributes}>{this.props.children}</code>
        </pre>
        <div
          contentEditable={false}
          style={{ position: 'absolute', top: '5px', right: '5px' }}
        >
          <select value={language} onChange={this.onChange.bind(this)}>
            <option value="css">CSS</option>
            <option value="js">javascript</option>
          </select>
        </div>
      </div>
    );
  }
}

export default CodeBlock;
