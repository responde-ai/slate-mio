import CustomCommands from './CustomCommands';
import ImageUpload from './ImageUpload';
import EditCode from '@tildepage/slate-code-block';
import CodeHighlight from './CodeHighlight';
import SoftBreak from './SoftBreak';
import MarkHotKey from './MarkHotKey';
import BlockHotKey from './BlockHotKey';

const CustomCommandsPlugin = CustomCommands();
const ImageUploadPlugin = ImageUpload();
const EditCodePlugin = EditCode({ containerType: 'code', allowMarks: 'true' });
const CodeHighlightPlugin = CodeHighlight();
const SoftBreakPlugin = SoftBreak();
const boldPlugin =  MarkHotKey({ key: 'b', type: 'bold' });
const italicPlugin = MarkHotKey({ key: 'i', type: 'italic' });
const underlinePlugin = MarkHotKey({ key: 'u', type: 'underline'});
const strikethroughPlugin = MarkHotKey({ key: 's', type: 'strikethrough'});

const codePlugin = BlockHotKey({
  key: '1',
  type: 'code',
  data: {
    language: "js",
  }
});

const plugins = [
  CustomCommandsPlugin,
  ImageUploadPlugin,
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