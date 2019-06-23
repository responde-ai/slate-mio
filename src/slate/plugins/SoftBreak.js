function SoftBreak(options = {}) {
  return {
    onKeyDown(event, editor, next) {
      const { startBlock } = editor.value;

      if (event.key === 'Enter' && startBlock.type === 'code') {
        editor.insertText('\n');
      } else if (event.key === 'Enter' && startBlock.type !== 'paragraph') {
        editor.insertBlock('paragraph');
      } else {
        next();
      }
    },
  }
}

export default SoftBreak;