import React from 'react';

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}

export default CodeNode;
