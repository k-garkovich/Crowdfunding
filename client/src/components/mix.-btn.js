import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));
    
    

    const loginRegLink = (
     

        <div className={classes.root}>
      
        <Toolbar>
        
          <Typography variant="h6" color="inherit" className={classes.title}>
          <Link to="login" className="nav-link" >
            Login
          </Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to="register" className="nav-link">
            Register
          </Link>
          </Typography>
        </Toolbar>
     
      </div>
    )

    const userLink = (
     
      <div>
      
        <Toolbar>
          <Typography variant="h6" color="inherit">
          <Link to="profile" className="nav-link" >
            Profile
          </Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to="logout" href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </Link>
          </Typography>
        </Toolbar>
     
      </div>
    )

    return (
     
      <AppBar position="static" color="inherit">
        
      <Toolbar>
      
        <Typography variant="h6" color="inherit">
          
        <Link to="/home" className="nav-link" color="inherit"> 
              Home
            </Link>
        </Typography>
        
        {localStorage.usertoken ? userLink : loginRegLink}
      </Toolbar>
     
    </AppBar>
    
    )
  }
}

export default withRouter(Landing)