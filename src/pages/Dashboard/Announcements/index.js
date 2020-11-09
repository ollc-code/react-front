import React, { useEffect, useState } from 'react';
import {
  Typography, Container,
  CircularProgress, Divider,
  Box, List, ListItem,
  Button, TextareaAutosize, TextField,
  Modal, Fade, ListItemText,
} from '@material-ui/core';
import axios from 'axios';
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import useStyles from './styles';


const Announcements = () => {
  const classes = useStyles();

  const [announcements, setAnnouncements] = useState([]);

  const apiUrl = 'http://localhost:8000/announcements/';
  const [done, setDone] = useState(undefined);
  const [addModal, setAddModal] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const handleAddModal = () => {
    addModal ? (
      setAddModal(false)
    ) : (
      setAddModal(true)
    )
  }
  
  if(!done){
    setTimeout(() => {
      axios.get(apiUrl).then((repos) => {
        if(repos.status === 200){
          setAnnouncements(JSON.parse(repos.data));
          //console.log(announcements);
        }
      }).then(() => setDone(true));
    }, 1200);
  }
  
  return (
    <Box>
      <Typography variant="h4">
        Announcements
      </Typography>
      <Divider />
      <Container>
        {
        !done ? (
          <Box display="grid">
            <CircularProgress />
            <Typography>
            Make sure the app is running...
            </Typography>
          </Box>
        ) : (
          <Box display="grid">
            <Button onClick={handleAddModal} variant="contained" color="primary">
              Add
            </Button>
            <Modal
              open={addModal}
              onClose={handleAddModal}
              className={classes.modal}
              closeAfterTransition
              disableScrollLock={true}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              >
                <Fade in={addModal}>
                  <Container display="grid" justifyContent="center" maxWidth="sm" className={classes.paper}>
                    <TextField
                      label="New Announcement"
                      multiline
                      fullWidth
                      value={newAnnouncement}
                      onChange={(e) => {
                        setNewAnnouncement(e.target.value)
                      }}
                      rows={6}
                      variant="outlined"
                    />
                  <Button variant="contained" fullWidth color="secondary"
                    onClick={
                      () => {
                        setDone(false);
                        //console.log("Insert");
                        setAddModal(false);
                        setTimeout(() => {
                          const a = {
                            "announcements" : [newAnnouncement]
                        }
                          axios.post(apiUrl, a).then((repos) => {
                            if(repos.status === 200){
                              //console.log(repos.data);
                            }
                          }).then(() => setDone(true));
                        }, 1200);
                        setNewAnnouncement("");
                      }
                    }
                  >Add</Button>
                  </Container>
                </Fade>
            </Modal>
            <List>
              {announcements.map((item, index) => (
                <ListItem className={classes.listItem}>
                    <ListItemText multiline className={classes.listText} variant="body"
                      >{item.fields.text}</ListItemText>
                      <Button variant="outlined" onClick={() => {
                      setDone(false);
                      //console.log("Delete:" + item.pk);
                      setTimeout(() => {
                        axios.delete(apiUrl + item.pk).then((repos) => {
                          if(repos.status === 200){
                            //console.log(repos.data);
                          }
                        }).then(() => setDone(true));
                      }, 1200);
                    }}>
                      <DeleteOutlinedIcon />
                    </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Announcements;