import React, { Component } from 'react';
import MenuButton from './MenuButton';

import { ReactComponent as ArrowSVG } from '../../assets/icons/arrow-down-icon.svg';

import '../../assets/stylesheets/ui/MenuDropdown.scss';

class MenuDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0, isExpanded: false };
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
          this.setState({selectedIndex: index, isExpanded: false });
          optionsProps.onClick(event);
        }}
      />
    ));
  }

  render() {
    const { schema } = this.props;
    const { selectedIndex, isExpanded }= this.state;

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
            customStyle={getSelectorStyle(isExpanded)}
            SVG={ArrowSVG}
            size={10}
            isEnabled={true}
            onClick={() => this.setState({ isExpanded: !isExpanded })}
          />
        </div>
        <div className="menu-dropdown-options">
          {isExpanded && this.renderDropdownMenuOptionButtons()}
        </div>
      </div>
    );
  }
}

const getSelectorStyle = isExpanded => (isExpanded ? {transform: 'rotate(180deg)'} : {});



export default MenuDropdown;