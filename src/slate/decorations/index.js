import React from 'react';
import CodeGeneric from './CodeGeneric';
import { codeTokensList } from './codeTokensList';

const renderDecoration = (props, editor, next) => {
  const { type } = props.decoration;

  if (codeTokensList.includes(type)) return <CodeGeneric token={type} {...props}/>;
  return next();
}

export default renderDecoration;