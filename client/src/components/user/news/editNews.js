import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function EditNews(props) {

  
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState( props.name);
  const [description, setDesc] = useState(props.description);
  const [id] = useState(props.id);
  
  function handleClickOpen() {
    setOpen(true);
  }
  
  function handleClose() {
    setOpen(false);
  }
  

  function update(val) {
    props.onUpdate(val);
    setOpen(false);
  }

  return (
    <div>
     
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <form noValidate >
      <Dialog  open={open} onClose={handleClose}  maxWidth="sm">
        <DialogTitle id="form-dialog-title">Add bonus</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Enter the data.
          </DialogContentText>
          <TextField
            name="nameNews"
            autoFocus
            className="form-control "
            margin="dense"
            id="nameNews"
            label="Name"
            type="text"
            fullWidth
            onChange={e=>{const newName =  e.target.value
                setName(newName)}}
            value={name}
          />
          <TextField
            name="descNews"
          autoFocus
          className="form-control "
          margin="dense"
          id="descNews"
          label="Description"
          type="text"
          fullWidth
          onChange={e=>{const newDesc =  e.target.value
          setDesc(newDesc)}}
          value={description}
        />
        
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={update.bind(this,{description, name, id})} 
          type="submit"  color="primary" >
           Edit
          </Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
}

export default EditNews