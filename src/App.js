import React, { Component } from 'react';
import mitt from 'mitt';

import Header from './components/ui/Header';
import PopUpMenu from './components/ui/PopUpMenu';
import Page from './components/Page';
import MathEditor from './components/MathEditor';
import initialValue from './slate/initialValue';

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.mainContainerRef = React.createRef();
    this.emitter = mitt();

    this.state = {
      editorValue: initialValue,
      shouldShowMathEditor: false,
      mathEditorInitialContent: "",
      selectedMathBlock: null,
    }
  }

  setEventListeners() {
    this.emitter.on('closeMathEditor', () => this.setState({
      shouldShowMathEditor: false,
      mathEditorInitialContent: "",
    }));

    this.emitter.on('showMathEditor', () => this.setState({ shouldShowMathEditor: true }));
  }

  onEditorValueChange({ value }) {
    console.log(value.toJSON());
    this.setState({editorValue : value });
  }

  componentDidMount(){
    this.setEventListeners();
  }

  render(){
    const { editorValue,
      shouldShowMathEditor,
      mathEditorInitialContent,
      selectedMathBlock } = this.state;

    return (
    <div className="mio-app" ref={this.mainContainerRef}>
      <Header editorValue={editorValue} emitter={this.emitter}/>
      <PopUpMenu editorValue={editorValue} emitter={this.emitter}/>
      <Page emitter={this.emitter} editorValue={editorValue} onEditorValueChange={this.onEditorValueChange.bind(this)}/>
      { shouldShowMathEditor && 
        <MathEditor
          emitter={this.emitter}
          initiaMathContent={mathEditorInitialContent}
          selectedMathBlock={selectedMathBlock}
        />
      }
    </div>)
  }
}

export default App;
