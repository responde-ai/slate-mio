import React, { Component } from 'react';

import { connect } from 'react-redux';
import '../assets/stylesheets/MenuItem.scss';

class MenuItem extends Component {
  isTypeAnActiveMark(){
    const { type } = this.props;
    const activeMarks = this.props.editorValue.activeMarks;
    return activeMarks.some(mark => mark.type === type);
  }
  
  getClassName(){
    const addToClassName = this.props.addToClassName;
    const defaultClassName = "mio-menu-item";
    const className = `${defaultClassName} ${addToClassName}`;

    return this.isTypeAnActiveMark() ? className : `${className} deactive`;
  }

  render(){
    const { style, type, iconSource, onClick } = this.props;

    return (
      <div style={style} className={this.getClassName()} onClick={onClick}>
        <img
          src={iconSource}
          alt={`Menu ${type} button`}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  editorValue: store.editorState.value,
});

export default connect(mapStateToProps)(MenuItem);