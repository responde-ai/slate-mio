import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';

const _getContent = token => {
  if (typeof token === 'string') return token;
  if (typeof token.content === 'string') return token.content;
  return token.content.map(_getContent).join('');
};

function CodeHighlight(options = {}){
  return {
    decorateNode(node, editor, next){
      const others = next() || [];
      if (node.type !== 'code') return others;

      const language = node.data.get('language');
      const texts = Array.from(node.texts());
      const string = texts.map(([n]) => n.text).join('\n');

      const grammar = Prism.languages[language];
      const tokens = Prism.tokenize(string, grammar);
      const decorations = [];

      let startEntry = texts.shift();
      let endEntry = startEntry;
      let startOffset = 0;
      let endOffset = 0;
      let start = 0;

      for (const token of tokens){
        startEntry = endEntry;
        startOffset = endOffset;

        const [startText, startPath] = startEntry;
        const content = _getContent(token);
        const newlines = content.split('\n').length - 1;
        const length = content.length - newlines;
        const end = start + length;

        let available = startText.text.length - startOffset;
        let remaning = length;

        endOffset = startOffset + remaning;

        while (available < remaning && texts.length > 0){
          endEntry = texts.shift();
          const [endText] = endEntry;
          remaning = length - available;
          available = endText.text.length;
          endOffset = remaning;
        }

        const [endText, endPath] = endEntry;

        if (typeof token !== 'string'){
          const dec = {
            type: token.type,
            anchor: {
              key: startText.key,
              path: startPath,
              offset: startOffset,
            },
            focus: {
              key: endText.key,
              path: endPath,
              offset: endOffset,
            },
          }

          decorations.push(dec);
        }

        start = end;
      }

      return [...others, ...decorations];
    }
  }
}

export default CodeHighlight;