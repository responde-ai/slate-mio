import _onKeyDown from './_onKeyDown';

function BlockHotKey(options){
  return { onKeyDown: _onKeyDown(options, "setBlocks") };
}

export default BlockHotKey;