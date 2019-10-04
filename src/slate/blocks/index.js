import React from 'react';
import Heading from './Heading';
import Image from './Image';
import CodeBlock from './CodeBlock';
import CodeLineBlock from './CodeBlockLine';
import MathBlock from './MathBlock'

const renderBlock = (props, editor, next) => {
  switch (props.node.type) {
    case 'heading':
      return <Heading {...props}/>;
    case 'image':
      return <Image {...props}/>;
    case 'code':
      return <CodeBlock {...props}/>;
    case 'code_line':
      return <CodeLineBlock {...props}/>;
    case 'math':
      return <MathBlock {...props} emitter={editor.props.emitter}/>;
    default:
      return next();
  }
}

export default renderBlock;
