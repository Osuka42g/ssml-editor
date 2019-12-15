import React, { useState, useRef } from 'react';
import './App.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

function ButtonTagger({ onClick, tag, closeTag = null, label = null}) {

  return (
    <button onClick={() => onClick(tag, closeTag)}>
      {label || tag}
    </button>
  );
};

const buttonsCollection = [
  { tag: 'speak' },
  { tag: 'emphasis' },
  { tag: 'p' },
  {
    label: 'auto-breaths',
    tag: 'amazon:auto-breaths volume="x-soft" frequency="x-low" duration="x-short"',
    closeTag: 'amazon:auto-breaths',
  }
];

function App() {
  const [editorContent, setEditorContent] = useState(lorem);
  const editor = useRef(null);

  const surroundWith = (text, tag, closeTag) => `<${tag}>${text}</${closeTag || tag}>`;

  const surroundSelection = (tag, closeTag = null) => {
    const cursorStart = editor.current.selectionStart;
    const cursorEnd = editor.current.selectionEnd;

    const leftText = editorContent.substring(0, cursorStart);
    const middleText = editorContent.substring(cursorStart, cursorEnd);
    const rightText = editorContent.substring(cursorEnd, editorContent.length);

    setEditorContent(`${leftText}${surroundWith(middleText, tag, closeTag)}${rightText}`);
  };

  return (
    <div className='App'>
      <h3>SSML Editor</h3>
      <textarea
        ref={editor}
        value={editorContent}
        onChange={e => setEditorContent(e.target.value)}
        rows={15}
        style={{
          width: '90%',
          height: '90%',
        }}
      >
      </textarea>
      <hr />
      <ButtonTagger
        onClick={surroundSelection}
        tag="speak"
        />
      <ButtonTagger
        onClick={surroundSelection}
        tag="emphasis"
      />
      <ButtonTagger
        onClick={surroundSelection}
        tag="p"
      />
      <ButtonTagger
        onClick={surroundSelection}
        label='auto-breaths'
        tag='amazon:auto-breaths volume="x-soft" frequency="x-low" duration="x-short"'
        closeTag='amazon:auto-breaths'
      />
    </div>
  );
}

export default App;
