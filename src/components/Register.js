import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
  FormControl: {
    width: 500
  }
})
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
       Register
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Notes
          </DialogContentText>
          

          <form>
            <form-group>
            <TextField
              autoFocus
              margin="dense"
              id="headline"
              label="Headline"
              type="Text"
              fullWidth
            />
            </form-group>
            <form-group>
              <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
          />
            </form-group>
           <form-group>
            <TextField
              multiline
              rows="3"
              autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="Text"
            fullWidth
            />
            </form-group>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}