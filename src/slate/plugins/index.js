import MarkHotKey from './MarkHotKey';

const boldPlugin =  MarkHotKey({ key: 'b', type: 'bold' });
const italicPlugin = MarkHotKey({ key: 'i', type: 'italic' });
const underlinePlugin = MarkHotKey({ key: 'u', type: 'underline'});
const strikethroughPlugin = MarkHotKey({ key: 's', type: 'strikethrough'});

const plugins = [boldPlugin, italicPlugin, underlinePlugin, strikethroughPlugin];

export default plugins;