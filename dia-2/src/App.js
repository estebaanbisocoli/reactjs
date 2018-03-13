import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import MainNav from './components/MainNav'
import Contenido from './components/Contenido'
class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Contenido />
      </div>
    );
  }
}

export default App;