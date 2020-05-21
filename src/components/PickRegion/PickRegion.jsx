import React from 'react';
import { Select, FormControl, MenuItem, Grid } from '@material-ui/core';

import styles from './PickRegion.module.css'

export const PickRegion = ({data, handleRegionChange }) => {

    const textstyle =
    {
        fontFamily:  'Comfortaa',
        fontWeight: 200
    }
    
    return (
        <Grid container justify="center">
            <Grid item xs={12} md={3}>
            <FormControl  variant="outlined" className={styles.formControl}>
                <Select style={textstyle} defaultValue="India" onChange={(e) => {handleRegionChange(e.target.value)}} >
                    <MenuItem value="India">All over the Nation</MenuItem>
                    {data.slice(0, (data.length-1)).map((region, index) => <MenuItem   key={index} value={region.state}>{region.state}</MenuItem>)}
                </Select>
            </FormControl>
            </Grid>
        </Grid>
    )
}
