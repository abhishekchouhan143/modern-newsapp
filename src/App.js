import './App.css';
import './index.css'
import Navbar from './components/Navbar.js';
import React, { Component } from 'react'
import News from './components/News.js';

export default class App extends Component {
  render() {
    return (
     <>
     <Navbar/>
     <News/>
     </>
    )
  }
}



