import React, { useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent,
    DialogActions, DialogContentText,
    TextField, Button,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';


const UserEditDialog = ({open, handleClose, item}) => {
    console.log(item);

    const [name, setName] = useState(item.fields.name);
    const [username, setUsername] = useState(item.fields.username);
    const [email, setEmail] = useState(item.fields.email);
    const [password, setPassword] = useState(undefined);
    const [confirmPassword, setConfirmPassword] = useState(undefined);


    function updateBasicDetails(){
        
    }

    function updatePassword(){

    }

    return (
            <Dialog open={open} onClose={() => {handleClose(false)}} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">User Details</DialogTitle>
                <form>
                    <DialogContent>
                        <DialogContentText>
                            Basic Details
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            variant="outlined"
                            id="name"
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            label="Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            variant="outlined"
                            id="username"
                            value={username}
                            onChange={(e) => {setUsername(e.target.value)}}
                            label="Username"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            variant="outlined"
                            id="email"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            label="Email"
                            type="email"
                            fullWidth
                        />
                        <DialogActions>
                            <Button type="submit" variant="contained" color="secondary">
                                Update Details
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </form>
                <form>
                    <DialogContent>
                        <DialogContentText>
                            Change Password
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            variant="outlined"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            label="Password"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            variant="outlined"
                            required
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                            label="Confirm Password"
                            type="text"
                            fullWidth
                        />
                        <DialogActions>
                            <Button type="submit" variant="contained" color="secondary">
                            Change Password
                            </Button>
                        </DialogActions>
                        <DialogActions>
                            <Button onClick={() => {handleClose(false)}} variant="outlined" color="primary">
                                Cancel
                            </Button>
                        </DialogActions>
                    </DialogContent>  
                </form>
            </Dialog>
    )
}

export default UserEditDialog;