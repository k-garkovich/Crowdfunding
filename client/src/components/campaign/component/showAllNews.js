import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'
const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

function AllNews(props) {


  var news = props.news.news;
  const classes = useStyles();
 
    return (

       <div > 
      
        <div>
            { news ?
              news.map((item, i) =>
                      <div className="campaign-component carousel-item carousel-item active" key={i}> 
                
                         <Paper className={classes.root}> 
                         <Typography className='text-left'>
                          <p><b>{item.name}</b></p>
                          <p>{item.description}</p>
                        
                          </Typography>
                         
                          </Paper>
                           
                          <br/>
                     
                      </div>
                  )
                  : "Loading..."
            }
            
          
          </div> </div>
  

    )
    
  }

export default withRouter(AllNews)