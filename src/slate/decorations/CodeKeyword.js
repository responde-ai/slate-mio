import React from 'react'

function CodeKeyword(props) {
  return (
    <span className="code-keyword" {...props.attributes}>
      {props.children}
    </span>
  );
}

export default CodeKeyword;