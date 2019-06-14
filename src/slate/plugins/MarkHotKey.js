const _onKeyDown = options => (event, editor, next) => {
  if (!_isTargetKey(event, options.key)) return next();

  event.preventDefault();
  editor.toggleMark(options.type);
}

const _isTargetKey = (event, key) => (event.ctrlKey && event.key === key);

function MarkHotKey(options){
  return { onKeyDown: _onKeyDown(options) };
}

export default MarkHotKey;