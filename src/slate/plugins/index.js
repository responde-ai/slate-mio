import SoftBreak from './SoftBreak';
import MarkHotKey from './MarkHotKey';
import BlockHotKey from './BlockHotKey';

const SoftBreakPlugin = SoftBreak();
const boldPlugin =  MarkHotKey({ key: 'b', type: 'bold' });
const italicPlugin = MarkHotKey({ key: 'i', type: 'italic' });
const underlinePlugin = MarkHotKey({ key: 'u', type: 'underline'});
const strikethroughPlugin = MarkHotKey({ key: 's', type: 'strikethrough'});

const codePlugin = BlockHotKey({ key: '1', type: 'code'});

const plugins = [
  SoftBreakPlugin,
  boldPlugin,
  italicPlugin,
  underlinePlugin,
  strikethroughPlugin,
  codePlugin,
];

export default plugins;