import React from 'react';

import plusIcon from '../assets/icons/plus-icon.svg';

function SideMenuPlusButton() {
  return (
    <div className="mio-side-menu-plus-button">
      <img
          src={plusIcon}
          alt={`Side menu plus button`}
      />
    </div>
  );
}

export default SideMenuPlusButton;