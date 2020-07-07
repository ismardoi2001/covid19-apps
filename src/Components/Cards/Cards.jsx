import React from 'react'
import{Card,CardContent, Typography,Grid } from '@material-ui/core';

import styles from './Cards.module.css';
export const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
 if(!confirmed) {
     return 'Loading ...';
 }
    return (
        
          <div className={styles.container}>
          <Grid container spacing={3} justify="center">
          <Grid item component={Card}>
          <CardContent>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5">{confirmed.value} </Typography>
          <Typography color="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Number of active case COVID-19</Typography>
          </CardContent>
          </Grid>
          <Grid item component={Card}>
          <CardContent>
          <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
          <Typography variant="h5">REAL DATA </Typography>
          <Typography color="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Number of Recoverd  COVID-19</Typography>
          </CardContent>
          </Grid>
          <Grid item component={Card}>
          <CardContent>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5">REAL DATA </Typography>
          <Typography color="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Number of Deaths  Caused by  COVID-19</Typography>
          </CardContent>
          </Grid>
          </Grid>
          
          </div>
    
    )
}

export default Cards;
