"use client";

import { useState } from "react";
import LanguageOptions from "./LanguageOptions";
import ButtonGroup from "./ButtonGroup";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Editor = () => {
  const [content, setContent] = useState("");
  const [isLock, setIsLock] = useState<boolean>(false);
  const codeString = "(num) => num + 1";
  return (
    <div className="editor__container">
      <h1 className="heading">Code Editor</h1>
      {/* <LanguageOptions /> */}
      <div className="editor__container--content">
        <textarea
          className="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          readOnly={isLock}
          style={{
            cursor: isLock ? "not-allowed" : "auto",
          }}
          spellCheck="false"
          placeholder="Paste your here ....."
        />
      </div>

      <ButtonGroup content={content} setIsLock={setIsLock} isLock={isLock} />
    </div>
  );
};

export default Editor;
