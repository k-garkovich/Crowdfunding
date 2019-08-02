import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

function ListBonusesUser(props) {
   


  var bonuses = props.bonuses;
  const classes = useStyles();
 
    return (
        <div> <h5>List of bonuses</h5>
        <div style={{maxHeight: 200, overflow: 'auto'}}>
            { bonuses ?
              bonuses.map((item, i) =>
                      <div className="campaign-component" key={i} > 
                         <Paper className={classes.root} >
                         <Typography className='text-left'>
                         
                          <p><b>{item.name}</b></p>
                          <p>{item.description}</p>
                          <p>Cost:  {item.cost} €</p>
                          
                          </Typography>
                         
                          </Paper>
                        
                          <br/>
                      </div>
                      
                  )
                  : "Loading..."
            }
          </div>
          </div>
    )
    
  }

export default ListBonusesUser
