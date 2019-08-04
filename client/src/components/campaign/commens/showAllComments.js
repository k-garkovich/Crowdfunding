import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

function AllComments(props) {
  const comments = props.comments;
  const classes = useStyles();
 
    return (

        <div> 
         <Paper className={classes.root}>
            { comments ?
              comments.map((item, i) =>
                      <div className="campaign-component" key={i}> 
                         <Typography className='text-left'>
                         <p><b>{item.nameUser} {item.surnameUser}</b></p>
                          <p>{item.text}</p>
                          </Typography>
                          <hr/>
                          <br/>
                      </div>
                  ): "Loading..."
            }
            </Paper>
            <br/>
          </div>
    )
    
  }

export default AllComments
