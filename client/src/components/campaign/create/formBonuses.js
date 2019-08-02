import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function FormBonuses(props) {
  const classes = useStyles();

  return (
    <div>
        <form noValidate onSubmit={props.onSubmit.bind(this)}>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                     Name of the bonus
                </Typography>
               <br/>
                <Typography component="p">
                    <input
                        type="text"
                        className="form-control "
                        name="name"
                        placeholder="Enter the name of the campaign"
                        onChange={props.onChange.bind(this)}
                           
                    />
                </Typography>
            </Paper>
        <br/>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                    Cost
                </Typography>
               <br/>
                <Typography component="p">
                    <input
                        type="number"
                        className="form-control "
                        name="cost"
                        placeholder="Enter the name of the campaign"
                        onChange={props.onChange.bind(this)}
                           
                    />
                </Typography>
            </Paper>
        <br/>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                    Description
                </Typography>
               <br/>
                <Typography component="p">
                    <textarea
                    rows='3'
                        type="text"
                        className="form-control "
                        name="description"
                        placeholder="Enter the name of the campaign"
                        onChange={props.onChange.bind(this)}
                           
                    />
                </Typography>
            </Paper>
      
            <button type="submit" className="btn btn-primary "> Create </button>
            <button type="submit"  className="btn  btn-primary " > Back  </button>
        </form>
    </div>
  );
}
 export default FormBonuses;