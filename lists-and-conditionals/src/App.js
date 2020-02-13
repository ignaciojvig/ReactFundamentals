import React, { useState } from "react";
import "./App.css";
import Validation from "./components/Validation/Validation";
import Char from "./components/Char/Char";

const App = () => {
  const [text, changeText] = useState("");
  const [textLength, changeTextLength] = useState(0);

  const textChangeListener = event => {
    changeText(event.target.value);
    changeTextLength(event.target.value.length);
  };

  const removeCharHandler = index => {
    const textCopy = text.slice().split("");
    textCopy.splice(index, 1);
    const newText = textCopy.join("");
    changeText(newText);
    changeTextLength(newText.length);
  };

  return (
    <div>
      <input value={text} onChange={textChangeListener} type="text" />
      <p> {textLength} </p>
      <Validation length={textLength}></Validation>
      <Char remove={index => removeCharHandler(index)} text={text}></Char>
    </div>
  );
};

export default App;
