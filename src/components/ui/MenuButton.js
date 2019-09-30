import React, { Component } from 'react';

class MenuButton extends Component {
  onClickIfEnable(event) {
    const { isEnabled, onClick } = this.props;

    if (isEnabled) return onClick(event);
  }

  render() {
    const { SVG, addToClass, isEnabled } = this.props;
    const size = this.props.size || MenuButton.DEFAULT_BUTTON_SIZE;
    const className = `menu-button ${addToClass}`;

    return (
      <div className={className} onClick={this.onClickIfEnable.bind(this)}>
        <SVG style={getStyle(size, isEnabled)}/>
      </div>
    );
  }
}

MenuButton.DEFAULT_BUTTON_SIZE = 20;

const getStyle = (size, isEnabled) => ({...getSizeStyle(size), ...getStatusStyle(isEnabled)});

const getSizeStyle = size => ({
  width: `${size}px`,
  height: `${size}px`,
});

const getStatusStyle = isEnabled => {
  if (isEnabled) return {};

  return { opacity: 0.5 };
}

export default MenuButton;