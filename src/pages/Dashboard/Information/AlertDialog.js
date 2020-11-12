import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {API_BASE_URL} from '../../../constants';
import axios from 'axios';


const AlertDialog = ({open, handleClose, id, name}) => {

    return (
        <Dialog
            open={open}
            onClose={() => {handleClose(false)}}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete" + name}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Deleting is permanent
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {handleClose(false)}} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => {handleClose(false)}} color="primary" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
        );
    }

export default AlertDialog;