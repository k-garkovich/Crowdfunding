import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'
import AdminPanel from './usersList'
import CampaignsList from './campaignsList'



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

 function ListDividers() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      
      <div className={classes.root}>
         
          
          <AppBar position="static" color="inherit">
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>
              <LinkTab label="List of users" to="general-information" />
              <LinkTab label="List of campaigns" href="/trash" />
              
          </Tabs>
          </AppBar>
          {value === 0 && <TabContainer ><AdminPanel/></TabContainer>}
          {value === 1 && <TabContainer><CampaignsList/></TabContainer>}
         
       
        </div>
 
  );
}

export default withRouter(ListDividers) 