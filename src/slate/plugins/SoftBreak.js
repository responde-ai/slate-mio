function SoftBreak(options = {}) {
  return {
    onKeyDown(event, editor, next) {
      const { startBlock } = editor.value;

      if (event.key === 'Enter' && startBlock.type === 'code') {
        editor.insertText('\n');
      } else {
        next();
      }
    },
  }
}

export default SoftBreak;