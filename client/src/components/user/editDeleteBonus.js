import React from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

function EditDeleteBonus(props) {
   


  var bonuses = props.bonuses.bonuses;
  const classes = useStyles();
 
    return (

        <div>
            { bonuses ?
              bonuses.map((item, i) =>
                      <div className="campaign-component" key={i}> 
                         <Paper className={classes.root}>
                         <Typography className='text-left'>
                          <p>{item.name}</p>
                          <p>{item.description}</p>
                          <p>Cost:  {item.cost} €</p>
                          </Typography>
                          <Typography>
                          <Button variant="outlined" color="primary" >
                                Edit
                          </Button>
                          
                          <Button variant="outlined" color="primary" onClick={props.onDelete.bind(this, item._id)}>
                                Delete
                          </Button>
                          </Typography>
                          </Paper>

                        
                          <br/>
                      </div>
                      
                  )
                  : "Loading..."
            }
            
          </div>
    )
    
  }

export default EditDeleteBonus