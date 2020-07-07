import React from 'react';
import Navbar from './Components/Navbar';
import{makeStyle} from 'material-ui/core/style';
import{paper,TextField, Button,CircularProgress } from '@material-ui/core';
import InfoPanel from './Components/InfoPanel';
import barChart from './barChart'
function App() {
  return (
    <div>
     <Navbar/>

     <InfoPanel/>

     <barChart/>
    </div>
  );
}

export default App;
