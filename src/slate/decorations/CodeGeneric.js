import React from 'react'

function CodeGeneric(props) {
  const token = props.token;

  return (
    <span className={`prism-token token ${token}`} {...props.attributes} >
      {props.children}
    </span>
  )
}

export default CodeGeneric;
