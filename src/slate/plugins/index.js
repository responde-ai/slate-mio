import MarkHotKey from './MarkHotKey';

const boldPlugin =  MarkHotKey({ key: 'b', type: 'bold' });
const italicPlugin = MarkHotKey({ key: 'i', type: 'italic' });

const plugins = [boldPlugin, italicPlugin];

export default plugins;