import React from 'react';
import Header from './Header';
import Image from './Image';
import CodeBlock from './CodeBlock';
import CodeLineBlock from './CodeBlockLine';
import MathBlock from './MathBlock'

const renderBlock = (props, editor, next) => {
  switch (props.node.type) {
    case 'header':
      return <Header {...props}/>;
    case 'image':
      return <Image {...props}/>;
    case 'code':
      return <CodeBlock {...props}/>;
    case 'code_line':
      return <CodeLineBlock {...props}/>;
    case 'math':
      return <MathBlock {...props}/>;
    default:
      return next();
  }
}

export default renderBlock;
