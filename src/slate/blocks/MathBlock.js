import React, { Component } from 'react';
import MathEquation from '../../components/generic/MathEquation';

class MathBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: false,
    }
  }

  openEditor() {
    this.props.editor.emitter.emit('updateMathEquation', {
      mathContent: this.getMathContent(),
      selectedMathBlock: this.ref
    });
  }

  setFocus(bool) {
    this.setState({onFocus: bool});
  }

  getMathContent() {
    return this.props.node.data.get('content');
  }

  onClick(){
    if (this.isFirstClick()) return this.setFocus(true);
    this.openEditor();
  }

  onOutSideClick(event){
    const container = this.ref.current;
    const target = event.target;

    if (container && target !== container && !container.contains(target)){
      this.setFocus(false);
    }
  }

  isFirstClick() {
    return !this.state.onFocus;
  }

  componentDidMount() {
    document.addEventListener('click', this.onOutSideClick.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutSideClick.bind(this), true);
  }

  render() {
    const { attributes } = this.props;
    const  mathContent = this.getMathContent();

    return (
      <div
        {...attributes}
        style={getStyle(this.state.onFocus)}
        onClick={this.onClick.bind(this)}
        ref={ref => this.ref = ref}
      >
        <MathEquation content={mathContent}></MathEquation>
      </div>
    );
  }
}

const getStyle = onFocus => onFocus ? { boxShadow: '0 0 5px rgba(81, 203, 238, 1)' } : {};

export default MathBlock;