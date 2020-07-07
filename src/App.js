import React from 'react';
import {Cards, Chart,CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';

//import Navbar from './Components/Navbar';
//import{paper,TextField, Button,CircularProgress } from '@material-ui/core';
//import InfoPanel from './Components/InfoPanel';
//function App() {
class App extends React.Component {  

  async componentWillMount() {
    const data = await fetchData();

    console.log(data);
  }
  render(){
  return (
   
<div className={styles.container}>
  <Cards/>
 <CountryPicker/>
 <Chart/>
    </div>
  );
  )
}

export default App;
