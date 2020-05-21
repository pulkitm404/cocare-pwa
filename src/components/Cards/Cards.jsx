import React from 'react';
import { Card, CardContent, Typography, Grid, Hidden} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Doughnut, Line } from 'react-chartjs-2';

//import dailydata from './daily_data.json';
import styles from './Cards.module.css'


export const Cards = ({ dailydata, confirmed, recovered, deceased, region, lastupdate}) => {

    if(!confirmed){
        return 'Loading..'
    }


    return (
        <div className={styles.container}>
            <Grid container spacing={2} justify="center">
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} > 
                    <CardContent>
                        <i className="fa fa-virus fa-3x"></i>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h4">
                            <CountUp start={0} end={confirmed} duration={2.5} separator="," />
                        </Typography>
                        <Typography variant="body2">Confirmed cases of COVID-19 in {region}</Typography>
                        <Typography className={styles.data} color="textSecondary" gutterBottom>as on: {lastupdate}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <i className="fas fa-virus-slash fa-3x"></i>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h4">
                            <CountUp start={0} end={recovered} duration={2.5} separator="," />
                        </Typography>
                        <Typography variant="body2">Recoveries from COVID-19 in {region}</Typography>
                        <Typography className={styles.data} color="textSecondary" gutterBottom>as on: {lastupdate}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deceased)} >
                    <CardContent>
                        <i className="fa fa-virus fa-3x"></i>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h4">
                            <CountUp start={0} end={deceased} duration={2.5} separator="," />
                        </Typography>
                        <Typography variant="body2">Deaths caused by COVID-19 in {region}</Typography>
                        <Typography className={styles.data} color="textSecondary" gutterBottom>as on: {lastupdate}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Typography className={styles.break} gutterBottom>-</Typography>
            <Hidden xsDown>
            <Grid container spacing={0} justify="center">
                
                <Grid item component={Card} className={styles.card} xs={10} md={4}>
                    <CardContent>
                        <Doughnut
                            data={{
                            labels: ['Infected', 'Recovered', 'Deaths'],
                            datasets: [
                                {
                                label: 'People',
                                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                data: [confirmed, recovered, deceased],
                                },
                            ],
                            }}
                            options={{
                            legend: { display: true },
                            title: { display: true, text: `Current Proportion in ${region}` },
                            animation: {animateRotate : true},
                            responsive: true,
                            maintainAspectRatio: true
                            
                            }}
                        />
                    </CardContent>
                </Grid>
                <Grid item component={Card}  className={styles.card} xs={10} md={5}>
                    <CardContent>
                    <Line
                        data={{
                        labels: dailydata.map(({ date }) => date),
                        datasets: [{
                            data: dailydata.map((data) => data[region][0]),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: false,
                        },{
                            data: dailydata.map((data) => data[region][1]),
                            label: 'Recovered',
                            borderColor: 'green',
                            fill: false,
                        },{
                            data: dailydata.map((data) => data[region][2]),
                            label: 'Deaths',
                            borderColor: 'red',
                            fill: false,
                        },
                        ],
                        }}
                        options={{
                            legend: {display: true},
                            title: { display: true, text: `Growth Analysis in ${region}` },
                            responsive: true,
                            maintainAspectRatio: true
                            
                        }}
                    />
                    </CardContent>
                </Grid>
            </Grid>
            </Hidden>
        </div>
    )
}
