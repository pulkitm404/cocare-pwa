import React from 'react';
import { Paper, Grid , Typography} from "@material-ui/core";

import chill from "./gifs/chill.gif";
import healthy from "./gifs/healthy.gif";
import sneezework from "./gifs/sneezework.gif";
import clean from "./gifs/clean.gif";
import isolate from "./gifs/isolate.gif";
import washhands from "./gifs/washhands.gif";
import distance from "./gifs/distance.gif";
import mask from "./gifs/mask.gif";
import notouching from "./gifs/notouching.gif";
import seekadvice from "./gifs/seekadvice.gif";

import styles from './Guidelines.module.css'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

export const Guidelines = () => {

    const theme = createMuiTheme();

    theme.typography.h5 = {
        fontFamily:  'Comfortaa',
        backgroundColor: '  rgb(92, 199, 218)',
        color: "white",
        fontWeight: 200
      };

    return (
        <div>
        <Grid  className={styles.contain} container spacing={3} justify="center">
        <Grid item xs={11}>
        <Paper className={styles.head} elevation={3}>
        <ThemeProvider theme={theme}>
            <Typography variant="h5">CoCare at Home</Typography>
        </ThemeProvider>
        </Paper> 
        </Grid>
        <Grid  item xs={12} lg={4} md={6}>
              <img alt="gif" className={styles.image} src={chill}></img>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          
              <img alt="gif" className={styles.image} src={sneezework}></img>
          
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          
              <img alt="gif" className={styles.image} src={healthy}></img>
          
        </Grid>
        
        <Grid item xs={12} lg={4} md={6}>
          
              <img alt="gif" className={styles.image} src={clean}></img>
          
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          
              <img alt="gif" className={styles.image} src={washhands}></img>
          
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          
              <img alt="gif" className={styles.image} src={isolate}></img>
          
        </Grid>
        
        <Grid item xs={12}>
        <Paper className={styles.head} elevation={3}>
        <ThemeProvider theme={theme}>
            <Typography variant="h5">CoCare Outdoors</Typography>
        </ThemeProvider>
        </Paper> 
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          
              <img alt="gif" className={styles.image} src={distance}></img>
          
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          
              <img alt="gif" className={styles.image} src={mask}></img>
          
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          
              <img alt="gif" className={styles.image} src={notouching}></img>
          
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          
              <img alt="gif" className={styles.image} src={seekadvice}></img>
          
        </Grid>

        </Grid>
        </div>
    )
}
