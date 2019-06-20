import React from 'react'

function CodePunctuation(props) {
  return (
    <span
      {...props.attributes}
      style={{ opacity: '0.75' }}
    >
      {props.children}
    </span>
  );
}

export default CodePunctuation;
