import React, { Component } from 'react';

class MenuButton extends Component {
  onClickIfEnable(event) {
    const { isEnabled, onClick } = this.props;

    if (isEnabled) return onClick(event);
  }

  render() {
    const { SVG, size, isEnabled } = this.props;

    return (
      <div className="mio-menu-button" onClick={this.onClickIfEnable.bind(this)}>
        <SVG style={getStyle(size, isEnabled)}/>
      </div>
    );
  }
}

const getStyle = (size, isEnabled) => ({...defaultStyle, ...getSizeStyle(size), ...getStatusStyle(isEnabled)});

const defaultStyle = {
  cursor: 'pointer',
  padding: '0 10px',
  fill: 'rgba(44, 62, 80, 1)'
}

const getSizeStyle = size => ({
  width: `${size}px`,
  height: `${size}px`,
});

const getStatusStyle = isEnabled => {
  if (isEnabled) return {};

  return { opacity: 0.5 };
}

export default MenuButton;