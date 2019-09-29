import React, { Component } from 'react';

class ToggleButton extends Component {
  render() {
    const { SVG, size, status, onClick } = this.props;

    return (
      <div className="mio-menu-toogle-button" onClick={onClick}>
        <SVG style={getStyle(size, status)}/>
      </div>
    );
  }
};

ToggleButton.DEFAULT_STATUS = 'DEFAULT_STATUS';
ToggleButton.TOGGLED_STATUS = 'TOGGLED_STATUS';
ToggleButton.DISABLED_STATUS = 'DISABLED_STATUS';

const getStyle = (size, status) => ({...defaultStyle, ...getSizeStyle(size), ...getStatusStyle(status)});

const defaultStyle = {
  cursor: 'pointer',
  padding: '0 10px',
  fill: 'rgba(44, 62, 80, 0.8)'
}

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