import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

function App() {
  const [text, setState] = useState(1);
  const [list, setList] = useState([text]);
  const onClick = () => {
    setState(text + 1);
    setList([...list, text + 1])
  }
  return (
    <div className="App">
      <h3 data-test='text'>{text}</h3>
      <button type="button" onClick={onClick}>Change text</button>
      <List list={list} >list</List>
    </div>
  );
}

export default App;
