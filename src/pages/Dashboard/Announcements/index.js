import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import LoadingDiv from '../../../components/LoadingDiv';
import React, { useEffect, useState } from 'react';
import {API_BASE_URL} from '../../../constants';
import { useSnackbar } from 'notistack';
import useStyles from './styles';
import axios from 'axios';
import {
  Typography, Container, Divider,
  Box, List, ListItem, Card, CardContent,
  Button, TextField, Modal, Fade,
} from '@material-ui/core';


const Announcements = () => {

  document.title = "Announcements | Orlem Connect"

  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [done, setDone] = useState(undefined);
  const apiUrl = API_BASE_URL + 'announcements/';
  const [addModal, setAddModal] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState(undefined);


  function getAnnouncements(){
    setTimeout(() => {
      axios.get(apiUrl).then((repos) => {
        if(repos.status === 200){
          setAnnouncements(JSON.parse(repos.data));
          //console.log(announcements);
        }
      }).then(() => setDone(true));
    }, 1200)
  }

  function postAnnouncement(){
      setAddModal(false); setDone(false);
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
          setNewAnnouncement(undefined);                    
        });
      }, 1200);
  }
  
  function deleteAnnouncement(item){
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
  }

  useEffect(() => {
      getAnnouncements()   
    }, [done])
  
  return (
    <Box>
      <Typography variant="h4">
        Announcements
      </Typography>
      <Divider />
      <Container className={classes.main}>
        {
        !done ? (
          <LoadingDiv />
        ) : (
          <Box className={classes.main} display="grid">
              <List>
                {announcements.map((item, index) => (
                  <ListItem className={classes.listItem}>
                    <Card className={classes.card} >
                      <CardContent className={classes.cardContent}>
                        <Typography  className={classes.cardContent}>
                        {item.fields.text}
                        </Typography>
                      </CardContent>
                      <Button variant="outlined" onClick={() => {deleteAnnouncement(item)}}>
                          <DeleteOutlinedIcon />
                      </Button>
                    </Card>
                  </ListItem>
                ))}
              </List>
              
            <Button className={classes.addButton} onClick={() => {setAddModal(true)}} variant="contained" color="primary">
              Add
            </Button>
            
            <Modal open={addModal} 
              onClose={() => {setAddModal(false)}} className={classes.modal} 
              closeAfterTransition disableScrollLock={true}>
                <Fade in={addModal}>
                  <Container display="grid" 
                    justifyContent="center" maxWidth="sm" 
                    className={[classes.paper, classes.main]}>
                    <form onSubmit={postAnnouncement}>
                      <TextField
                        label="New Announcement"
                        required multiline fullWidth
                        value={newAnnouncement}
                        onChange={(e) => {setNewAnnouncement(e.target.value)}}
                        rows={6}
                        variant="outlined"/>
                      <Button type="submit" variant="contained" fullWidth color="secondary">
                        Add
                      </Button>
                    </form>
                  </Container>
                </Fade>
            </Modal>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Announcements;