import React from 'react'

function CodeTag(props) {
  return (
    <span className="code-tag" {...props.attributes} >
      {props.children}
    </span>
  );
}

export default CodeTag;