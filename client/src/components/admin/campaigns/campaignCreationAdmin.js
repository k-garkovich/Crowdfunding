import React from 'react'
import General from './createCampaignInfo'
import Bonus from '../../campaign/create/bonusesInformation'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop: 50
    }
  }));
  
   function CreateCampaignAdmin() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }
  
    return (
        
        <div className={classes.root}>
           
            
            <AppBar position="static" color="inherit">
            <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                <LinkTab label="General information" to="general-information" />
                <LinkTab label="List of bonuses" href="/trash" />
                
            </Tabs>
            </AppBar>
            {value === 0 && <TabContainer ><General/></TabContainer>}
            {value === 1 && <TabContainer><Bonus/></TabContainer>}
           
         
          </div>
   
    );
  }

  export default CreateCampaignAdmin