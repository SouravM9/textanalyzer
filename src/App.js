import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('dark');

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode("light");
    }
  }

  return (
    <div className="App">
      <Navbar heading="Text Analyzer" mode={mode} changeMode={changeMode} />
      <TextForm />
    </div>
  );
}

export default App;
