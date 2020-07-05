import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary, 
  },
}));

export default function InfoPanel() {
  const [globalData, setGlobaData] = useState({});

  useEffect(()=>{
    async function getData(){
      const response = await fetch("https://api.thevirustracker.com/free-api?global=stats")
    let data = await response.json();
    delete data.results[0].source;
    setGlobaData(data.results[0]);
    console.log(data.results[0]);

    }
    getData();
    
  }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {Object.keys(globalData).map(val=>{
        return (
          <Grid item xs={12} sm={4}>
          <Paper 
          className={classes.paper}
           elevation={3}>
           {val.replace(/_/g,'').toUpperCase()}
           </Paper>
          </Grid>
        )
      })}
      
       </Grid>
    </div>
  );
}

