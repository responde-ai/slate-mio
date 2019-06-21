import React from 'react';

import titleIcon from '../assets/icons/title-icon.svg';

function SideMenuItem(){
  return (
    <div className="mio-side-menu-item">
      <img
          src={titleIcon}
          alt={`Side menu plus button`}
      />
    </div>
  );
}

export default SideMenuItem;