import React from 'react';
import {Cards, Chart,CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';

//import Navbar from './Components/Navbar';
//import{paper,TextField, Button,CircularProgress } from '@material-ui/core';
//import InfoPanel from './Components/InfoPanel';
//function App() {
class App extends React.Component {  
  state ={
    data:{},
  }

  async componentWillMount() {
    const data = await fetchData();
    this.setState({ data:fetchData});
  
    console.log(data);
  }
  render(){
    const {data} = this.setState;
  return (
   
<div className={styles.container}>
  <Cards data={data}/>
 <CountryPicker/>
 <Chart/>
 </div>
  );
  }
}
  
export default App;
