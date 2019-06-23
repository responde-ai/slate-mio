const isParagraph = editor => {
  return editor.value.blocks.some(block => block.type === 'paragraph')
};

const CustomCommandsPlugin = () => {
  return {
    commands: {
      isParagraph,
      toggleBlock(editor, blockType) {
        editor.setBlocks(isParagraph(editor) ? blockType : 'paragraph');
      },
    },
  };
};

export default CustomCommandsPlugin;
