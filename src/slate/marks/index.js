import React from 'react';
import BoldMark from './bold';
import ItalicMark from './italic';
import UnderlineMark from './underline';
import StrikethroughMark from './strikethrough';

const renderMark = (props, editor, next) => {
  switch (props.mark.type){
    case 'bold':
      return <BoldMark {...props}/>;
    case 'italic':
      return <ItalicMark {...props}/>;
    case 'underline':
      return <UnderlineMark {...props}/>;
    case 'strikethrough':
      return <StrikethroughMark {...props}/>;
    default:
      return next();
  }
}

export default renderMark;
