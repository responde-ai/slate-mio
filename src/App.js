import React, { Component } from 'react';
import mitt from 'mitt';

import Header from './components/ui/Header';
import PopUpMenu from './components/ui/PopUpMenu';
import Page from './components/Page';
import MathEditor from './components/MathEditor';
import initialValue from './slate/initialValue';

import { connect } from 'react-redux';

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.mainContainerRef = React.createRef();
    this.emitter = mitt();

    this.state = {
      editorValue: initialValue,
    }
  }

  onEditorValueChange({ value }) {
    console.log(value.toJSON());
    this.setState({editorValue : value });
  }

  render(){
    const mathEditorShouldShow = this.props.mathEditorShouldShow;
    const editorValue = this.state.editorValue;

    return (
    <div className="mio-app" ref={this.mainContainerRef}>
      <Header editorValue={editorValue}/>
      <PopUpMenu editorValue={editorValue} emitter={this.emitter}/>
      <Page emitter={this.emitter} editorValue={editorValue} onEditorValueChange={this.onEditorValueChange.bind(this)}/>
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
