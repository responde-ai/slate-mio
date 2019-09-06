import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import SideMenu from './components/SideMenu';
import Page from './components/Page';
import MathEditor from './components/MathEditor';

import { connect } from 'react-redux';

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.editorRef = React.createRef();
    this.mainContainerRef = React.createRef();
  }

  render(){
    const mathEditorShouldShow = this.props.mathEditorShouldShow;

    return (
    <div className="mio-app" ref={this.mainContainerRef}>
      <Header/>
      <Menu editorRef={this.editorRef}/>
      <SideMenu editorRef={this.editorRef} mainContainerRef={this.mainContainerRef}/>
      <Page editorRef={this.editorRef}/>
      { mathEditorShouldShow && 
        <MathEditor/>
      }
    </div>)
  }
}

const mapStateToProps = store => ({
  mathEditorShouldShow: store.mathEditorState.shouldShow,
});

export default connect(mapStateToProps)(App);
