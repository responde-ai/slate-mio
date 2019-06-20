import React from 'react';
import CodeComment from './CodeComment';
import CodeKeyword from './CodeKeyword';
import CodeTag from './CodeTag';
import CodePunctuation from './CodePunctuation';

const renderDecoration = (props, editor, next) => {
  const { decoration } = props;

  switch (decoration.type) {
    case 'comment':
      return <CodeComment {...props}/>;
    case 'keyword':
      return <CodeKeyword {...props}/>;
    case 'tag':
      return <CodeTag {...props}/>;
    case 'punctuation':
      return <CodePunctuation {...props}/>;
    default:
      return next();
  }
}

export default renderDecoration;