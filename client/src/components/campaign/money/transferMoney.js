import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {withRouter} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));



function TransferMoney(props) {
const classes = useStyles();
  
  
  return (
    <div>
      <Paper className={classes.root}>
        <DialogContent >
          <DialogContentText>
              <b>TRANSFER MONEY</b>
          </DialogContentText>

          <TextField
            name="money"
            className="form-control "
            id="money"
            type="number"
            autoFocus
            margin="dense"
            label="Money"
            fullWidth
            onChange={props.onChange.bind(this)}
          />
         
        </DialogContent>

        <DialogActions >
          <Button  variant="contained"
          onClick={props.onTransfer.bind(this)} 
          onChange={props.onChange.bind(this)}
          type="submit" className="btn btn-primary " color="primary" >
            Сonfirm
          </Button>
        </DialogActions>
        </Paper>
        </div>
  );
}

export default withRouter(TransferMoney)