import React, { Component } from 'react';
import Header from './components/ui/Header';
import Menu from './components/ui/Menu';
import Page from './components/ui/Page';

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
      <Page editorRef={this.editorRef}/>
    </div>)
  }
}

export default App;
