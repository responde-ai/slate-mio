import React from 'react';
import BoldMark from './bold';
import ItalicMark from './italic';

const renderMark = (props, editor, next) => {
  switch (props.mark.type){
    case 'bold':
      return <BoldMark {...props}/>;
    case 'italic':
      return <ItalicMark {...props}/>;
    default:
      return next();
  }
}

export default renderMark;
