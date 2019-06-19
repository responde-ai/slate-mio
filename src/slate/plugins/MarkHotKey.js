import _onKeyDown from './_onKeyDown';

function MarkHotKey(options){
  return { onKeyDown: _onKeyDown(options, "toggleMark") };
}

export default MarkHotKey;