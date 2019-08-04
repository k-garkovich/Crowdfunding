import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function FormComment(props) {
  
  const classes = useStyles();

  
  return (
    <div>
       
 <form>
   <Paper className={classes.root} onSubmit={props.onCreate.bind(this)}>
                <Typography variant="h6" component="h4" className='text-left'>
                Enter your comment

                </Typography>
                <br/>
                <Typography component="p">
                    <textarea
                        rows="4"
                        type="text"
                        className="form-control"
                        name="text"
                        placeholder="Enter your comment"
                        onChange={props.onChange.bind(this)}
                        
                    />
                </Typography>
            </Paper>
    

            <Button type="submit"  color="primary" variant="contained" className="btn btn-primary " onClick={props.onCreate.bind(this)} 
           onChange={props.onChange.bind(this)} > Create </Button>
           
   </form>           
      
    </div>
  );
}
 export default FormComment;