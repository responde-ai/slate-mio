import React from 'react';
import CodeNode from './code';

const renderBlock = (props, editor, next) => {
  switch (props.node.type) {
    case 'code':
      return <CodeNode {...props}/>;
    default:
      return next();
  }
}

export default renderBlock;
