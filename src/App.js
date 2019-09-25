import React, { Component } from 'react';
import Header from './components/ui/Header';
import PopUpMenu from './components/ui/PopUpMenu';
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
      <Header editorRef={this.editorRef}/>
      <PopUpMenu editorRef={this.editorRef}/>
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
