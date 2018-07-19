import React, { Component } from 'react';
import logo from './logo.svg';
import { Input } from './Input.js';
import './App.css';

function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer!</h1>
        </header>
        <section>
          <Input />
        </section>
      </div>
    );
}

export default App;
