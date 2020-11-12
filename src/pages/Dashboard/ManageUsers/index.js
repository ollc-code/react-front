import React, { useState, useEffect } from 'react';
import {
    Container, Typography, Divider, Button,
    Box, Card, CardContent, CardMedia, CardHeader,
    List, ListItem, Modal, Fade, Dialog,
    DialogActions, DialogContent, TextField, 
    DialogContentText, DialogTitle,
} from '@material-ui/core';
import {API_BASE_URL} from '../../../constants';
import axios from 'axios';
import useStyles from './styles';
import EditIcon from '@material-ui/icons/Edit';
import UserEditDialog from '../../../components/UserEditDialog';


const ManangeUsers = () => {
    const classes = useStyles()

    const apiUrl = API_BASE_URL + "manageusers/";
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [userEdit, setUserEdit] = useState(false);
    const [currentUserEdit, setCurrentUserEdit] = useState(undefined);

    function getUsers(){
        setTimeout(() => {
            axios.get(apiUrl).then((repos) => {
              if(repos.status === 200){
                setUsers(JSON.parse(repos.data));
                setCurrentUserEdit(repos.data[0]);
              }
            }).then(() => {
                setLoaded(true);
            });
          }, 1200)
    }

    function createUser(){

    }

    function handleEditUser(item){
        setCurrentUserEdit(item);
        setUserEdit(true);
        console.log(item);
    }

    useEffect(() => {
        getUsers()
    }, [loaded])


    return (
        <Container>
            <Typography variant="h4">
                Manage Users
            </Typography>
            <Divider />
            <Box className={classes.main}>
                <List>
                    {
                        users.map((item, index) => (
                            <ListItem key={index}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title={item.fields.name}
                                    />
                                    <Divider />
                                    <CardContent className={classes.classContent}>
                                        <Typography>
                                            {item.fields.username}
                                        </Typography>
                                    </CardContent>
                                    <Button variant="outlined" onClick={() => {
                                        console.log(item);
                                        handleEditUser(item)
                                        }} >
                                        <EditIcon />
                                    </Button>
                                </Card>   
                            </ListItem>                      
                        ))
                    }
                </List>
                {
                    userEdit ? (
                            <UserEditDialog open={userEdit} handleClose={setUserEdit} item={currentUserEdit} />
                    ) : (<Box />)
                }
            </Box>
            
            <Button variant="contained" color="primary">
                Add User
            </Button>
        </Container>
    )

}

export default ManangeUsers;