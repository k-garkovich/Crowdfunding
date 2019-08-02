import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormBonus(props) {

  
  const [open, setOpen] = React.useState(false);
  
  function handleClickOpen() {
    setOpen(true);
  }
  
  function handleClose() {
    setOpen(false);
  }
  
  return (
    <div>
     
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add bonus
      </Button>
      <form noValidate onSubmit={props.onSubmit.bind(this)}>
      <Dialog  open={open} onClose={handleClose}  maxWidth="sm">
        <DialogTitle id="form-dialog-title">Add bonus</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Enter the data.
          </DialogContentText>
          <TextField
            name="name"
            autoFocus
            className="form-control "
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={props.onChange.bind(this)}
          />
          <TextField
            name="description"
          autoFocus
          className="form-control "
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          onChange={props.onChange.bind(this)}
        />
        <TextField
            name="cost"
          autoFocus
          className="form-control "
          margin="dense"
          id="cost"
          label="Cost"
          type="number"
          fullWidth
          onChange={props.onChange.bind(this)}
        />
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.onSubmit.bind(this)} 
           onChange={props.onChange.bind(this)}
          type="submit" className="btn btn-primary " color="primary" >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
}

export default FormBonus