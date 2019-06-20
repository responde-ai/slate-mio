import React from 'react'

function CodeTag(props) {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: 'bold' }}
    >
      {props.children}
    </span>
  );
}

export default CodeTag;