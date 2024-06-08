import React, { useEffect, useRef, useState } from 'react';
import { Highlight, themes } from "prism-react-renderer";
import './CodeEditor.css';

const CodeEditor = ({ initialValue, language }) => {
  const [code, setCode] = useState(initialValue);
  const textAreaRef = useRef(null);
  const highlightRef = useRef(null);

  const handleScroll = () => {
    if (textAreaRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  useEffect(() => {
    if (textAreaRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  }, [code]);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor-container">
      <Highlight code={code} language={language} theme={themes.github}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="code-highlight" ref={highlightRef}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
      ref={textAreaRef}
        value={code}
        onChange={handleChange}
        onScroll={handleScroll}
        className="code-editor"
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
