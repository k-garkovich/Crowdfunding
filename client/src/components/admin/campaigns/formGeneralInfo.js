import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function FormGeneral(props) {
 
  const classes = useStyles();

  return (
    <div>
        <form noValidate onSubmit={props.onSubmit.bind(this)}>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                    Name campaign
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
                    Brief description of the campaign
                </Typography>
                <br/>
                <Typography component="p">
                    <textarea
                        rows="4"
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter the description of the campaign"
                        onChange={props.onChange.bind(this)}
                    />
                </Typography>
            </Paper>
      <br/>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                    Category
                </Typography>
                <br/>
                <Typography component="p">
                    <select class="form-control form-control-lg"  onChange={props.onChange.bind(this)} className="form-control"
                        name="subject">
                        <option >Design</option>
                        <option >Food</option>
                        <option >Games</option>
                        <option >Art</option>
                        <option >Science and Education</option>
                        <option >Sport</option>
                        <option >Technologies</option>
                        <option >Movies and Videos</option>
                        <option >Other</option>
                    </select>
                </Typography>
            </Paper>
      <br/>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                    Budget
                </Typography>
                <br/>
                <Typography component="p">
                <input
                        type="number"
                        className="form-control "
                        name="amount_money"
                        placeholder="Enter the name of the campaign"
                        onChange={props.onChange.bind(this)}
                    />
                </Typography>
            </Paper>
      <br/>
            <Paper className={classes.root}>
                <Typography variant="h6" component="h4" className='text-left'>
                    Expiry date
                </Typography>
                <br/>
                <Typography component="p">
                <input
                        type="date"
                        className="form-control "
                        name="date"
                        placeholder="Date"
                        onChange={props.onChange.bind(this)}
                    />
                </Typography>
            </Paper>

            <button type="submit" className="btn btn-primary "> Create </button>
            <button type="submit"  className="btn  btn-primary " onClick={ props.onSub.bind(this)}>   Back  </button>
        </form>
    </div>
  );
}
 export default FormGeneral;