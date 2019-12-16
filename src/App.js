import React, { useState, useRef } from 'react';
import Hotkeys from 'react-hot-keys';
import './App.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';

function ButtonTagger({ onClick, tag, closeTag = null, label = null }) {

  return (
    <button onClick={() => onClick(tag, closeTag)}>
      {label || tag}
    </button>
  );
};

const buttonsCollection = [
  { label: '(s)peak', tag: 'speak', hotkeys: ['command+s', 'alt+s'] },
  { label: '(e)mphasis', tag: 'emphasis', hotkeys: ['command+e', 'alt+e'] },
  { label: '(p)', tag: 'p', hotkeys: ['command+p', 'alt+p'] },
  { label: 'brea(k)', tag: 'break', hotkeys: ['command+k', 'alt+k'] },
  {
    label: 'auto-(b)reaths',
    tag: 'amazon:auto-breaths volume="x-soft" frequency="x-low" duration="x-short"',
    closeTag: 'amazon:auto-breaths',
    hotkeys: ['command+b', 'alt+b']
  },
  {
    label: '(l)ang en-US',
    tag: 'lang xml:lang="en-US"',
    closeTag: 'lang',
    hotkeys: ['command+l', 'alt+l']
  },
  {
    label: 'lang fr-FR',
    tag: 'lang xml:lang="fr-FR"',
    closeTag: 'lang',
    hotkeys: []
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
      <p>hotkeys: cmd / alt + (Mod)</p>
    </div>
  );
}

export default App;
