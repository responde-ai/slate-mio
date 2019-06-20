const onKeyDown = (options, command) => (event, editor, next) => {
  if (!_isTargetKey(event, options.key)) return next();

  event.preventDefault();
  editor[command]({ type: options.type, data: options.data });
}

const _isTargetKey = (event, key) => {
  const mod = _getPlatformCommandKey(event);
  return mod && event.key === key;
};

const _isMacOS = () => /Mac/.test(navigator.platform);

const _getPlatformCommandKey = (event) => _isMacOS ? event.metaKey : event.ctrlKey;

export default onKeyDown;
