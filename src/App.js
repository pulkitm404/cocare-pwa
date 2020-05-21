import React, {useState, useEffect} from 'react';
import logo from './covidlogo.svg';
import './App.css';

import {Cards} from './components/Cards/Cards';
import {PickRegion} from './components/PickRegion/PickRegion';
import {Guidelines} from "./components/Guidelines/Guidelines";
import {AboutUs} from "./components/AboutUs/AboutUs";


import axios from 'axios';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography component="span" >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function App() {


  const[data, setData] = useState([]);
  const[region, setRegion] = useState("India");
  const[loading, setLoading] = useState(true);

  const url="https://api.jsonbin.io/b/5eac0c3f4c87c3359a64cf2f";
  const skey="$2b$10$oaU6c9isD1DYb0NuW10oTOPJ1A9jwJWmNqRcdemI2bNRbfsfL0sQ.";
  const skey2="$2b$10$lV0bEhSes4CQZNfuQeO07e.HybY0raB73jj8qhdzysHxKCXLKr2cG";
  const url2="https://api.jsonbin.io/b/5eb51d5247a2266b1474d74e";
  const[dailydata, setDailydata] = useState([]);

  //const url="https://api.jsonbin.io/b/5eb100ab8284f36af7b5b392";
  useEffect(() =>{
    axios.get(url,  { 'headers': { "secret-key": skey } }).then((res) => {setData(res.data); setLoading(false)});
    axios.get(url2,  { 'headers': { "secret-key": skey2 } }).then((res) => {setDailydata(res.data); setLoading(false)});
  },[]);

  const handleRegionChange = async (region) => {
    setRegion(region);
  }

  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const tabstyle = {
    color: "white"
  }

  return (
    

    <div className="App">
      <div>
      <AppBar position="static" color="transparent">
        <header className="App-header">
          <h1>C<img src={logo} className="App-logo" alt="logo" />Care</h1>
        </header>
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          
         
        >
          <Tab  style={tabstyle} label="CoCare" {...a11yProps(0)} />
          <Tab  style={tabstyle} label="Data &amp; Analysis" {...a11yProps(1)} />
          <Tab  style={tabstyle} label="About" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        className="tabpanels"
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Guidelines/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {loading ? <center><div className="loader-contain"><img src={logo} className="loader-logo" alt="Loading.." /></div></center> :<PickRegion data={data} handleRegionChange={handleRegionChange}/>}
          {data.map((item, index)=>{
            if (item.state===region)
            {
              return <Cards  dailydata={dailydata}   key= {index} confirmed={item.confirmed} recovered={item.recovered} deceased={item.deceased} region={region} lastupdate={item.lastupdate}/>
            }
            return null;
          })} 
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <AboutUs/>
        </TabPanel>
      </SwipeableViews>
    </div>
     
    </div>
  );
}

export default App;
