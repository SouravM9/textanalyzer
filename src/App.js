import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3D3C3C';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div className="App">

      <Router>
        <Navbar heading="Text Analyzer" mode={mode} changeMode={changeMode} />
        <Routes>

          <Route exact path="/about" element={
            <About mode={mode}/>
          }>
          </Route>

          <Route exact path="/" element={
            <TextForm mode={mode} />
          }>
          </Route>

        </Routes>

        <Footer/>

      </Router>



    </div>


  );
}

export default App;
