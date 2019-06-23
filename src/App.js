import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import SideMenu from './components/SideMenu';
import Page from './components/Page';

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.editorRef = React.createRef();
  }

  render(){
    return (
    <div className="mio-app">
      <Header/>
      <Menu editorRef={this.editorRef}/>
      <SideMenu editorRef={this.editorRef}/>
      <Page editorRef={this.editorRef}/>
    </div>)
  }
}

export default App;
