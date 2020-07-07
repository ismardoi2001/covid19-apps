import React from 'react';
import Navbar from './Components/Navbar';
import{paper,TextField, Button,CircularProgress } from '@material-ui/core';
import InfoPanel from './Components/InfoPanel';
function App() {
  return (
    <div>
     <Navbar/>

     <InfoPanel/>

    </div>
  );
}

export default App;
