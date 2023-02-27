import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddTodo(props) {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({Tittle: '', Author: '', Year: '', Isbn:'',Price:''});

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    props.addTodo(todo);
    handleClose();
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  return(
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add todo
      </Button>
     <Dialog open={open}>
       <DialogTitle>New todo</DialogTitle>
       <DialogContent> 
         <TextField
            name="Tittle"
            value={todo.Tittle}
            onChange={inputChanged}
            margin="dense"
            label="Tittle"
            fullWidth
          /> 
         <TextField
           name="Author"
           value={todo.Author}
           onChange={inputChanged}
           margin="dense"
           label="Author"
           fullWidth
         /> 
         <TextField
           name="Year"
           value={todo.Year}
           onChange={inputChanged}
           margin="dense"
           label="Year"
           fullWidth
         />
          <TextField
           name="Isbn"
           value={todo.Isbn}
           onChange={inputChanged}
           margin="dense"
           label="Isbn"
           fullWidth
         />  
          <TextField
           name="Price"
           value={todo.Price}
           onChange={inputChanged}
           margin="dense"
           label="Price"
           fullWidth
         /> 
      </DialogContent>
      <DialogActions>
         <Button color="primary" onClick={handleClose}>Cancel</Button>
         <Button color="primary" onClick={handleSave}>Save</Button>
      </DialogActions>
     </Dialog> 
    </div>
  );
}

export default AddTodo;