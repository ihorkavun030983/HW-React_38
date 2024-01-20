import React from 'react';
import './App.css'
import Header from './components/header.jsx';
import Navbar from './components/navbar.jsx';
import Content from './components/content.jsx';

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <Content />
 
    </div>
  );
}

export default App;
