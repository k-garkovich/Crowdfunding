
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function EditBonus(props) {

  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState( props.name);
  const [description, setDesc] = useState(props.description);
  const [cost, setCost] = useState(props.cost);
  const [id] = useState(props.id);
 
  function handleClose() {
    setOpen(false);
  }
  function handleClickOpen() {
    setOpen(true);
  }
  function update(val) {
    props.onUpdate(val);
    setOpen(false);
  }
 

  return (
        <div>
          <Button  color="primary" variant="outlined" onClick={handleClickOpen}>
                                Edit
                          </Button>
                         
                          <form noValidate >
                          <Dialog  open={open} onClose={handleClose}  maxWidth="sm">
                            <DialogTitle id="form-dialog-title">Edit bonus</DialogTitle>
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
                                type="text"
                                fullWidth
                                onChange={e=>
                                  {  const newName =  e.target.value
                                  setName(newName)
                                 
                                   }}
                                value={name}
                              />
                              <TextField
                                name="description"
                              autoFocus
                              className="form-control "
                              margin="dense"
                              id="description"
                              type="text"
                              fullWidth
                              onChange={e=>
                              {  const newDesc =  e.target.value
                              setDesc(newDesc)
                             
                               }}

                              value = {description}
                            />
                            <TextField
                                name="cost"
                              autoFocus
                              className="form-control "
                              margin="dense"
                              id="cost"
                              type="number"
                              fullWidth
                              onChange={e=>
                                {  const newCost =  e.target.value
                                setCost(newCost)
                               
                                 }}
                              value = {cost}
                            />
                            </DialogContent>
                            <DialogActions >
                              <Button onClick={handleClose} color="primary">
                                Cancel
                              </Button>

                              <Button 
                              type="submit"  color="primary"  
                              onClick={
                                update.bind(this,{description, name, cost, id})
                              } 
                              >
                                  Update
                              </Button>
                            </DialogActions>
                          </Dialog>
                          </form>
                         
                      
         
          </div> 
    )
}

export default EditBonus