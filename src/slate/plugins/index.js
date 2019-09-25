import CustomCommands from './CustomCommands';
import Image from './Image';
import EditCode from '@tildepage/slate-code-block';
import CodeHighlight from './CodeHighlight';
import SoftBreak from './SoftBreak';
import MarkHotKey from './MarkHotKey';
import BlockHotKey from './BlockHotKey';

import Lists from '@convertkit/slate-lists';

const CustomCommandsPlugin = CustomCommands();
const ImagePlugin = Image();
const EditCodePlugin = EditCode({ containerType: 'code', allowMarks: 'true' });
const CodeHighlightPlugin = CodeHighlight();
const SoftBreakPlugin = SoftBreak();
const boldPlugin =  MarkHotKey({ key: 'b', type: 'bold' });
const italicPlugin = MarkHotKey({ key: 'i', type: 'italic' });
const underlinePlugin = MarkHotKey({ key: 'u', type: 'underline'});
const strikethroughPlugin = MarkHotKey({ key: 's', type: 'strikethrough'});

const ListPlugin = Lists({
  blocks: {
    ordered_list: "ordered-list",
    unordered_list: "unordered-list",
    list_item: "list-item",
  },
  classNames: {
    ordered_list: "orderded-list",
    unordered_list: "unordered-list",
    list_item: "list-item"
  }
});

const codePlugin = BlockHotKey({
  key: '1',
  type: 'code',
  data: {
    language: "js",
  }
});

const plugins = [
  ListPlugin,
  CustomCommandsPlugin,
  ImagePlugin,
  EditCodePlugin,
  CodeHighlightPlugin,
  SoftBreakPlugin,
  boldPlugin,
  italicPlugin,
  underlinePlugin,
  strikethroughPlugin,
  codePlugin,
];

export default plugins;