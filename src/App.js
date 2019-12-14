import React, { useState, useRef } from 'react';
import './App.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a quam elit. Vestibulum et eros porta, vehicula nisl eu, blandit sapien. Donec suscipit lacus non vehicula tincidunt. Sed sit amet gravida nisl. In hac habitasse platea dictumst. Sed fringilla mauris et orci bibendum consequat. Pellentesque sed eros vitae justo condimentum pharetra a quis libero. Proin justo nibh, dignissim a felis sed, pellentesque pretium velit. Ut pharetra augue eu dui rhoncus tempor. Pellentesque non enim vel ligula fermentum rutrum. Pellentesque lectus eros, tincidunt eu bibendum sed, efficitur id risus. Morbi sagittis, dolor eu varius lacinia, mi nisi iaculis nisl, eget fermentum justo leo vel orci.';

function ButtonTagger({ onClick, tag, label = null}) {

  return (
    <button onClick={() => onClick(tag)}>
      {label || tag}
    </button>
  );
};

function App() {
  const [editorContent, setEditorContent] = useState(lorem);
  const editor = useRef(null);

  const surroundWith = (text, tag) => `<${tag}>${text}</${tag}>`;

  const surroundSelection = tag => {
    const cursorStart = editor.current.selectionStart;
    const cursorEnd = editor.current.selectionEnd;

    const leftText = editorContent.substring(0, cursorStart);
    const middleText = editorContent.substring(cursorStart, cursorEnd);
    const rightText = editorContent.substring(cursorEnd, editorContent.length);

    setEditorContent(`${leftText}${surroundWith(middleText, tag)}${rightText}`);
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
    </div>
  );
}

export default App;
