import React from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';

import styles from './PickRegion.module.css'

export const PickRegion = ({data, handleRegionChange }) => {
    
    return (
        <FormControl className={styles.formControl}>
            <InputLabel id="region-label">Choose a Region</InputLabel>
            <Select labelId="region-label" className={styles.selectStyle} defaultValue="India" onChange={(e) => {handleRegionChange(e.target.value)}} >
                <MenuItem  value="India">All over the Nation</MenuItem>
                {data.slice(0, (data.length-1)).map((region, index) => <MenuItem   key={index} value={region.state}>{region.state}</MenuItem>)}
            </Select>
        </FormControl>
    )
}
