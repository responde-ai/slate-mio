import React from 'react'

function CodeKeyword(props) {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: 'bold' }}
    >
      {props.children}
    </span>
  );
}

export default CodeKeyword;