import React, { Component } from 'react';
import MathEquation from '../../components/generic/MathEquation';

class MathBlock extends Component {
  render() {
    const { attributes, node } = this.props;
    const  mathContent = node.data.get('content');

    return (
      <div {...attributes}>
        <MathEquation content={mathContent}></MathEquation>
      </div>
    );
  }
}

export default MathBlock;