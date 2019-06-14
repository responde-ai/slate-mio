import React, { Component } from 'react';
import Header from './components/ui/Header';
import Menu from './components/ui/Menu';
import Page from './components/ui/Page';

import './App.css';

class App extends Component {
  render(){
    return (
    <div className="mio-app">
      <Header/>
      <Menu/>
      <Page/>
    </div>)
  }
}

export default App;
