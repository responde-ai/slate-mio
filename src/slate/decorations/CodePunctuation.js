import React from 'react'

function CodePunctuation(props) {
  return (
    <span className="code-punctuation" {...props.attributes}>
      {props.children}
    </span>
  );
}

export default CodePunctuation;
