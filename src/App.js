import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import InfoPanel from './Components/InfoPanel';
import barChart from './barChart';
function App() {
  return (
    <div>
     <Navbar/>
     <InfoPanel/>
     <Navbar/>
    </div>
  );
}

export default App;
