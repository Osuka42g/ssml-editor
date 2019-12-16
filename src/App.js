import React, { useState, useRef } from 'react';
import Hotkeys from 'react-hot-keys';
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
  { tag: 'speak', hotkeys: ['command+s', 'alt+s'] },
  { tag: 'emphasis', hotkeys: ['command+e', 'alt+e'] },
  { tag: 'p', hotkeys: ['command+p', 'alt+p'] },
  {
    label: 'auto-breaths',
    tag: 'amazon:auto-breaths volume="x-soft" frequency="x-low" duration="x-short"',
    closeTag: 'amazon:auto-breaths',
    hotkeys: ['command+b', 'alt+b']
  }
];

const allHotkeys = buttonsCollection.map(e => e.hotkeys).flat().join(',');

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

  const onKeyDown = (keyName, e) => {
    e.preventDefault();
    e.stopPropagation();
    const { tag, closeTag } = buttonsCollection.filter(e => e.hotkeys.includes(keyName))[0];
    surroundSelection(tag, closeTag);
  }

  const onKeyUp = (_, e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className='App'>
      <h3>SSML Editor</h3>
      <Hotkeys
        keyName={allHotkeys}
        onKeyDown={onKeyDown.bind(this)}
        onKeyUp={onKeyUp.bind(this)}
        allowRepeat={true}
        filter={(e) => e.target.type === 'textarea'}
      >
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
      </Hotkeys>
      <hr />
      {buttonsCollection.map((e, i) => <ButtonTagger
        key={i}
        onClick={surroundSelection}
        label={e.label || e.tag}
        tag='amazon:auto-breaths volume="x-soft" frequency="x-low" duration="x-short"'
        closeTag='amazon:auto-breaths'
      />)}
    </div>
  );
}

export default App;
