import React from 'react';
import BoldMark from './bold';

const renderMark = (props, editor, next) => {
  switch (props.mark.type){
    case 'bold':
      return <BoldMark {...props}/>;
    default:
      return next();
  }
}

export default renderMark;
