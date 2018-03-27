import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './Input';

class App extends Component {
  render() {
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
}

export default App;
