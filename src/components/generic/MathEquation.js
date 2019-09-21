import React, { Component } from 'react';
import MathJax from 'react-mathjax2';

class MathEquation extends Component {
  render() {
    const content = this.props.content;

    if (!content) return null;

    return (
      <div style={style}>
        <MathJax.Context options={MATH_JAX_OPTIONS}>
          <div>
            <MathJax.Node>{content}</MathJax.Node>
          </div>
        </MathJax.Context>
    </div>
    );
  }
};

const style = {
  display: 'flex',
  justifyContent: 'center',
}

const MATH_JAX_OPTIONS = {
  jax: ['input/ascii', 'output/SVG'],
  showMathMenu: false,
};

export default MathEquation;