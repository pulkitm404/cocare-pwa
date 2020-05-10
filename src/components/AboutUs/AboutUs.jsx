import React from 'react';
import { Paper, Grid , Typography, Link} from "@material-ui/core";
import text from './text.json';


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
                        <Typography variant="h6" align="justify" gutterBottom>{text}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Paper elevation={3}>
                        <ThemeProvider theme={theme}>
                        <Typography variant="h5" gutterBottom>About CoCare</Typography>
                        </ThemeProvider>
                        </Paper>
                        <Paper elevation={2}>
                        <Typography variant="h6" align="justify" gutterBottom>
                            We, <Link href="https://pulkitm404.github.io">Pulkit Mehta</Link> &amp; <Link href="">Kunwar Taneja</Link> are students of VIT, Vellore.
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
