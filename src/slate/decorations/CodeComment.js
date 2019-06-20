import React from 'react'

function CodeComment(props) {
  return (
    <span className="code-comment" {...props.attributes}>
      {props.children}
    </span>
  );
}

export default CodeComment;
