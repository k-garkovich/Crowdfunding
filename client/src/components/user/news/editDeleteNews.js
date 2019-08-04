import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import EditNews from './editNews'
const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

function EditDeleteNews(props) {


  var news = props.news.news;
  const classes = useStyles();
 
    return (

       <div > 
      
            { news ?
              news.map((item, i) =>
                      <div className="campaign-component " key={i}> 
                
                         <Paper className={classes.root}> 
                         <Typography className='text-left'>
                          <p><b>{item.name}</b></p>
                          <p>{item.description}</p>
                        
                          </Typography>
                          <div className="row mx-1">
                          <EditNews  className="mx-1" onUpdate ={props.onUpdate} id={item._id} name = {item.name} description={item.description}/>
                          <Button className="mx-1" variant="outlined" color="primary" onClick={props.onDelete.bind(this, item._id)}>
                                Delete
                          </Button></div>
                          </Paper>
                           
                          <br/>
                      </div>
                  )
                  : "Loading..."
            }
          </div> 
  

    )
    
  }

export default withRouter(EditDeleteNews)