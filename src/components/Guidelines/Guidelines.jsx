import React from 'react';
import { Paper, Grid , Typography, Hidden} from "@material-ui/core";

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
        fontWeight: 300,
        padding: 15
      };
    
      const guidestyle = {
            fontFamily:  'Comfortaa',
            color: "black",
            fontWeight: 300,
            padding: 15,
            paddingTop: 50
      
          };

      const caretwo = {
            display: "flex",
            verticalAlign: 'middle'

      }

    return (
        <div >
        <Grid container className={styles.containmain}  xs={12} justify="center" spacing={1}>

            <Grid xs={12} lg={5} className={styles.containmain} container justify="center">
                  <Grid item xs={6}>
                  <img alt="gif" className={styles.imagemain} src={washhands}></img> 
                  </Grid>
                  <Grid style={caretwo} item component={Paper} xs={6}>
                  <Typography align="left" style={guidestyle}>Handwashing remains the No. 1 tip for preventing the spread of Coronavirus  <Hidden xsDown>(COVID-19).
                  
                         <Typography className={styles.wbreak} gutterBottom>-</Typography>
                         It’s common sense and it works. However, it must be done properly and with soap and water. 
                         <Typography className={styles.wbreak} gutterBottom>-</Typography>
                         When soap and water are not available, the next best option is to use an alcohol-based hand sanitizer.
                         </Hidden>
                         </Typography>
                  </Grid>
            </Grid>

            <Grid xs={12} lg={5} className={styles.containmain} container justify="center">
                  <Grid item  xs={6}>
                  <img alt="gif" className={styles.imagemain} src={seekadvice}></img> 
                  </Grid>
                  <Grid item component={Paper} xs={6}>
                  <Typography align="left" style={guidestyle}>If you have a fever, cough or other symptoms, you might have COVID-19. 
                   <Hidden xsDown>
                         <Typography className={styles.wbreak} gutterBottom>-</Typography>
                         Most people have mild illness and are able to recover at home.
                         <Typography className={styles.wbreak} gutterBottom>-</Typography>
                         If you think you may have been exposed to COVID-19, contact your healthcare provider immediately.
                         </Hidden>
                         </Typography>
                  
                  </Grid>
            </Grid>

            

            <Grid xs={11} lg={6} className={styles.contain} container spacing={3} justify="center">

                  <Grid item xs={12}>
                  <Paper className={styles.head} elevation={3}>
                  <ThemeProvider theme={theme}>
                        <Typography variant="h5">CoCare at Home</Typography>
                  </ThemeProvider>
                  </Paper> 
                  </Grid>
                  <Grid  item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={chill}></img>
                  </Grid>
                  
                  <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={healthy}></img> 
                  </Grid>
                  <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={clean}></img> 
                  </Grid>
                  {/* <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={washhands}></img> 
                  </Grid> */}
                  <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={isolate}></img> 
                  </Grid>
                  
            </Grid>

            
            <Grid xs={11} lg={6} className={styles.contain} container spacing={3} justify="center">
                  
                  <Grid item xs={12}>
                  <Paper className={styles.head} elevation={3}>
                  <ThemeProvider theme={theme}>
                        <Typography variant="h5">CoCare Outdoors</Typography>
                  </ThemeProvider>
                  </Paper> 
                  </Grid>
                  <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={distance}></img> 
                  </Grid>
                  <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={mask}></img> 
                  </Grid>
                  <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={notouching}></img>
                  </Grid>
                  <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={sneezework}></img>
                  </Grid>
                  {/* <Grid item component={Paper} xs={12} md={6}>
                        <img alt="gif" className={styles.image} src={seekadvice}></img>
                  </Grid> */}
            </Grid>
      </Grid>
      </div>
    )
}
