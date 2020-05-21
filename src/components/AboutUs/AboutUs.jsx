import React from 'react';
import { Paper, Grid , Typography, Link} from "@material-ui/core";


import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';


export const AboutUs = () => {

    const theme = createMuiTheme();

    theme.typography.h6 = {
        fontFamily:  'Comfortaa',
        fontWeight: 200,
        padding: 20
      };

    theme.typography.h5 = {
        fontFamily:  'Comfortaa',
        backgroundColor: '  rgb(92, 199, 218)',
        color: "white",
        fontWeight: 200
      };
    return (
        <div>
            <Grid container wrap="wrap" spacing={4} justify="center">
                    <Grid item xs={12} md={10} >
                        <Paper elevation={3}>
                        <ThemeProvider theme={theme}>
                        <Typography variant="h5" gutterBottom>About COVID-19</Typography>
                        </ThemeProvider>
                        </Paper>
                        <Paper elevation={2}>
                        <Typography variant="h6" align="justify" gutterBottom>
                        <ul>
                         <li>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</li>

                         <li>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</li>
             
                         <li>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. </li>
                       
                         <li>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette.</li>
                         
                         <li>At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.</li>
                         </ul>
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Paper elevation={3}>
                        <ThemeProvider theme={theme}>
                        <Typography variant="h5" gutterBottom>About CoCare &amp; The Team</Typography>
                        </ThemeProvider>
                        </Paper>
                        <Paper elevation={2}>
                        <Typography variant="h6" align="justify" gutterBottom>
                            We, <Link href="https://pulkitm404.github.io">Pulkit Mehta</Link> &amp; <Link href="https://www.linkedin.com/in/kunwar-taneja-84b15218b/">Kunwar Taneja</Link> are students of VIT, Vellore.
                            We wanted to work on a project that could be a guiding light during this time of crisis. Our project <Link href="#">CoCare</Link> displays the latest scenario of COVID-19 in India along with a growth analysis.
                            The data is scraped from <Link href="https://www.mohfw.gov.in/">MoHFW</Link> and updated periodically. The projects also aims at sharing guidance    provided by <Link href="https://www.who.int/">WHO</Link> to be careful against COVID-19.
                            Hence, the name CoCare.
                            
                        </Typography>
                        </Paper>
                    </Grid>
            </Grid>
        </div>
    )
}
