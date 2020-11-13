import {
    Container, Box, Typography, TextField,
    Divider, Button, Dialog, DialogTitle,
    DialogContent, DialogActions, DialogContentText,
    Card, CardHeader, CardContent, CardActions,
} from '@material-ui/core';
import useStyles from './styles';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {API_BASE_URL} from "../../../constants";


const Profile = (props) => {
    const classes = useStyles();
    const [currentUser, setCurrentUser] = useState(undefined);
    const [editDialogControl, setEditDialogControl] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const token = window.sessionStorage.getItem("token");
    const config = {
        headers: { Authorization: 'Bearer ' + token }
    }
    const [name, setName] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [currentPassword, setCurrentPassword] = useState(undefined);
    const [newPassword, setNewPassword] = useState(undefined);    
    const [confirmPassword, setConfirmPassword] = useState(undefined);
    const [errorShow, setErrorShow] = useState(false)

    function handleEditDialog(){
        setName(currentUser.fields.name);
        setUsername(currentUser.fields.username);
        setEmail(currentUser.fields.email);
        setNewPassword(undefined);
        setCurrentPassword(undefined);
        setConfirmPassword(undefined);
        setErrorShow(false);
        setEditDialogControl(true);
    }

    function getCurrentUserDetails(){
        axios.get(
            API_BASE_URL + "user/", config
            ).then((response) => {
            if(response.status === 200){
                setCurrentUser(JSON.parse(response.data)[0]);
                console.log(response.data);
                setLoaded(true);
            }
        });
    }

    function updateBasicDetails(){
        const data = {
            "action" : "edit_basic",
            "username" : username,
            "name" : name,
            "email" : email
        }
        axios.post(
            API_BASE_URL + "user/", data, config
            ).then((response) => {
            if(response.status === 200){
                setLoaded(false);
            }
        });
        setEditDialogControl(false);
    }

    function updatePassword(){
        if(newPassword === confirmPassword){
            const data = {
                "action" : "change_pwd",
                "current_password" : currentPassword,
                "new_password" : newPassword,
            }
            axios.post(
                API_BASE_URL + "user/", data, config
                ).then((response) => {
                if(response.status === 200){
                    setEditDialogControl(false);
                    //console.log(response.data);
                    window.sessionStorage.removeItem("token");
                    window.location.href = "/dashboard";
                    setLoaded(false);
                }
            });
        }
        else{
            setErrorShow(true);
        }
    }

    useEffect(() => 
        getCurrentUserDetails(), [loaded]
    );

    return (
        <Container>
            <Typography variant="h4">
                Profile
            </Typography>
            <Divider />
            <Container className={classes.main}>
                {
                    loaded ? (
                        <Card>
                            <CardHeader title={currentUser.fields.name} />
                            <Divider />
                            <CardContent>
                                <Box className={classes.cardContent}>
                                    <Typography variant="h6">
                                        Username
                                    </Typography>
                                    <Typography  variant="body2">
                                        {currentUser.fields.username}
                                    </Typography>
                                </Box>
                                <Box className={classes.cardContent}>
                                    <Typography variant="h6">
                                        Email
                                    </Typography>
                                    <Typography  variant="body">
                                        {currentUser.fields.email}
                                    </Typography>
                                </Box>
                            </CardContent>                    
                            <CardActions>
                                <Button onClick={() => {handleEditDialog()}} variant="contained" color="secondary">
                                    Edit Details
                                </Button>
                            </CardActions>
                        </Card>
                    ) : (
                        <Typography>
                            Loading...
                        </Typography>
                    )
                }
            </Container>
            {
                editDialogControl ? (
                    <Dialog open={editDialogControl} onClose={() => {setEditDialogControl(false)}} aria-labelledby="form-dialog-title">
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
                                    disabled
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
                                    <Button onClick={() => {updateBasicDetails()}} variant="contained" color="secondary">
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
                                    value={currentPassword}
                                    onChange={(e) => {setCurrentPassword(e.target.value)}}
                                    label="Current Password"
                                    type="text"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    id="password"
                                    required
                                    value={newPassword}
                                    onChange={(e) => {setNewPassword(e.target.value)}}
                                    label="New Password"
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
                                {
                                    errorShow ? (
                                        <Typography variant="body2">
                                            Passwords don't match
                                        </Typography>
                                    ) : (
                                        <Typography />
                                    )
                                }
                                <DialogActions>
                                    <Button onClick={() => {updatePassword()}} variant="contained" color="secondary">
                                    Change Password
                                    </Button>
                                </DialogActions>
                                <DialogActions>
                                    <Button onClick={() => {setEditDialogControl(false)}} variant="outlined" color="primary">
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </DialogContent>  
                        </form>
                    </Dialog>                    
                ) : (
                    <Box />
                )
            }
        </Container>
    )
}

export default Profile;