import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Pets from './Components/Pets';

function App() {
  return (
    <div className="App">
      <Header />
      <Pets />
      <Footer />
    </div>
  );
}

export default App;
