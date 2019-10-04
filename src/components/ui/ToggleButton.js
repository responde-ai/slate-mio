import React, { Component } from 'react';

class ToggleButton extends Component {
  onClickIfEnable(event) {
    const { status, onClick } = this.props;

    if (status !== ToggleButton.DISABLED_STATUS) return onClick(event);
  }

  render() {
    const { SVG, status } = this.props;
    const size = this.props.size || ToggleButton.DEFAULT_BUTTON_SIZE;

    return (
      <div className="menu-toogle-button" onClick={this.onClickIfEnable.bind(this)}>
        <SVG style={getStyle(size, status)}/>
      </div>
    );
  }
};

ToggleButton.DEFAULT_STATUS = 'DEFAULT_STATUS';
ToggleButton.TOGGLED_STATUS = 'TOGGLED_STATUS';
ToggleButton.DISABLED_STATUS = 'DISABLED_STATUS';
ToggleButton.DEFAULT_BUTTON_SIZE = 20;

const getStyle = (size, status) => ({...getSizeStyle(size), ...getStatusStyle(status)});

const getSizeStyle = size => ({
  width: `${size}px`,
  height: `${size}px`,
});

const getStatusStyle = status => {
  if (status === ToggleButton.DEFAULT_STATUS) return {};
  if (status === ToggleButton.TOGGLED_STATUS) return {
    color: 'rgba(81, 203, 238, 0.8)',
    filter: 'drop-shadow(0 3px 3px rgba(81, 203, 238, 0.4))',
  };

  return { opacity: 0.5 };
}

export default ToggleButton;