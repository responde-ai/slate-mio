import React, { Component } from 'react';
import MathEquation from '../../components/generic/MathEquation';

import { editMathEquation } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class MathBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: false,
    }

    this.ref = React.createRef();
  }

  openEditor() {
    this.props.editMathEquation({
      shouldShow: true,
      mathContent: this.getMathContent(),
      selectedMathBlock: this.ref.current,
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
    if (this.state.isEditing) return;

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
        ref={this.ref}
      >
        <MathEquation content={mathContent}></MathEquation>
      </div>
    );
  }
}

const getStyle = onFocus => onFocus ? { boxShadow: '0 0 5px rgba(81, 203, 238, 1)' } : {};

const mapStateToProps = store => ({
  appCurrentMathContent: store.mathEditorState.mathContent,
  selectedMathBlock: store.mathEditorState.selectedMathBlock,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editMathEquation,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MathBlock);