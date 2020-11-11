import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import React, { useEffect, useState } from 'react';
import {
  Typography, Container,
  CircularProgress, Divider,
  Box, List, ListItem, Card, CardContent,
  Button, TextareaAutosize, TextField,
  Modal, Fade,
} from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const Announcements = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [announcements, setAnnouncements] = useState([]);

  const apiUrl = 'http://localhost:8000/announcements/';
  const [done, setDone] = useState(undefined);
  const [addModal, setAddModal] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState(undefined);

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
    }, 1200, 5000)
  }
  
  return (
    <Box>
      <Typography variant="h4">
        Announcements
      </Typography>
      <Divider />
      <Container
        className={classes.main}
      >
        {
        !done ? (
          <Box className={classes.loadingBox}>
              <CircularProgress/>
              <Typography>
                &nbsp;&nbsp; Is the app running?
              </Typography>
          </Box>
        ) : (
          <Box className={classes.main} display="grid">
            <Button className={classes.addButton} onClick={handleAddModal} variant="contained" color="primary">
              Add
            </Button>
            
            <Modal
              open={addModal}
              onClose={handleAddModal}
              className={classes.modal}
              closeAfterTransition
              disableScrollLock={true} >
                <Fade in={addModal}>
                  <Container display="grid" justifyContent="center" maxWidth="sm" className={[classes.paper, classes.main]}>
                    <form onSubmit={
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
                              enqueueSnackbar("Announcement Added!")
                            }
                            else{
                              enqueueSnackbar("Announcement Not Added", "error")
                            }
                          }).then(() => {
                            setDone(true);                      
                          });
                        }, 1200);
                        setNewAnnouncement(undefined);
                      }
                    }>
                    <TextField
                      label="New Announcement"
                      required
                      multiline
                      fullWidth
                      value={newAnnouncement}
                      onChange={(e) => {
                        setNewAnnouncement(e.target.value)
                      }}
                      rows={6}
                      variant="outlined"
                    />
                  <Button type="submit" variant="contained" fullWidth color="secondary"
                  >Add</Button>
                    </form>

                  </Container>
                </Fade>
            </Modal>
            <Box>
              <List>
                {announcements.map((item, index) => (
                  <ListItem className={classes.listItem}>
                    <Card className={classes.card} >
                    <CardContent className={classes.cardContent}>
                      <Typography  className={classes.cardContent}>
                      {item.fields.text}
                      </Typography>
                    </CardContent>
                    <Button variant="outlined" onClick={() => {
                        setDone(false);
                        //console.log("Delete:" + item.pk);
                        setTimeout(() => {
                          axios.delete(apiUrl + item.pk).then((repos) => {
                            if(repos.status === 200){
                              enqueueSnackbar("Announcement Deleted!");
                            }
                            else{
                              enqueueSnackbar("Announcement Not Deleted!", "error");
                              setDone(true);
                            }
                          }).then(() => setDone(true));
                        }, 1200);
                      }}>
                        <DeleteOutlinedIcon />
                    </Button>
                    </Card>
                  </ListItem>
                ))}
              </List>
              
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Announcements;