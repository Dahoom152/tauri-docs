import { visit } from 'unist-util-visit';

function remarkCodeTitles() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      // Extract the language and existing title, if any
      const language = node.lang?.split(' ')[0] || 'no-highlight';
      const hasTitle = /title="[^"]*"/.test(node.lang);

      // Only add title if it doesn't already exist
      if (!hasTitle) {
        node.lang = `${language}`;
        node.title = `${language}`;
      }
    });
  };
}

export { remarkCodeTitles };
