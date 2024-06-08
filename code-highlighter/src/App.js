import './App.css';
import CodeEditor from './Component/CodeEditor/CodeEditor';

function App() {

  const initialHtmlCode = `<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
    <p>This is a simple HTML page.</p>
  </body>
</html>`;

  const initialCssCode = `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
}`;

  const initialJsCode = `console.log('Hello, World!');

function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Alice');`;

  const initialReactCode = `import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a React component.</p>
    </div>
  );
};

export default App;`;

  return (
    <div className="App">
      <h1>Code Editor</h1>
      <h2>HTML</h2>
      <CodeEditor initialValue={initialHtmlCode} language="html" />
      <h2>CSS</h2>
      <CodeEditor initialValue={initialCssCode} language="css" />
      <h2>JavaScript</h2>
      <CodeEditor initialValue={initialJsCode} language="javascript" />
      <h2>React</h2>
      <CodeEditor initialValue={initialReactCode} language="jsx" />
    </div>
  );
}

export default App;
