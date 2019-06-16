const _onKeyDown = options => (event, editor, next) => {
  if (!_isTargetKey(event, options.key)) return next();

  event.preventDefault();
  editor.toggleMark(options.type);
}

const _isTargetKey = (event, key) => {
  const mod = _getPlatformCommandKey(event);
  return mod && event.key === key;
};

const _isMacOS = () => /Mac/.test(navigator.platform);

const _getPlatformCommandKey = (event) => _isMacOS ? event.metaKey : event.ctrlKey;

function MarkHotKey(options){
  return { onKeyDown: _onKeyDown(options) };
}

export default MarkHotKey;