import React from 'react';

function SideMenuItem(props){
  const { type, iconSource, onClick } = props;

  return (
    <div className={`mio-side-menu-item ${type}`} onClick={onClick}>
      <img
          src={iconSource}
          alt={`Side menu ${type} button`}
      />
    </div>
  );
}

export default SideMenuItem;