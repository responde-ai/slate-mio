import React, { Component } from 'react';
import MenuButton from './MenuButton';

import { ReactComponent as ArrowSVG } from '../../assets/icons/arrow-down-icon.svg';

import '../../assets/stylesheets/ui/MenuDropdown.scss';

class MenuDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
  }

  renderDropdownMenuOptionButtons() {
    const { schema } = this.props;
    return schema.map((optionsProps, index) => (
      <MenuButton 
        key={index}
        addToClass="dropdown-option"
        isEnabled={true}
        SVG={optionsProps.SVG}
        onClick={event => {
          this.setState({selectedIndex: index });
          optionsProps.onClick(event);
        }}
      />
    ));
  }

  render() {
    const { schema } = this.props;
    const { selectedIndex }= this.state;

    return (
      <div className="menu-dropdown-button">
        <div className="menu-dropdown-selector">
          <MenuButton
            addToClass="selected-dropdown-button"
            isEnabled={true}
            {...schema[selectedIndex]}
          />
          <MenuButton
            addToClass="dropdown-button-selector"
            SVG={ArrowSVG}
            size={10}
            isEnabled={true}
            onClick={() => console.log("deveria expandir...")}
          />
        </div>
        <div className="menu-dropdown-options">
          {this.renderDropdownMenuOptionButtons()}
        </div>
      </div>
    );
  }
}



export default MenuDropdown;