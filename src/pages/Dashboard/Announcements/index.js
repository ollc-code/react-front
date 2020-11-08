import React, { useEffect, useState } from 'react';
import {
  Typography, Container,
  CircularProgress, Divider,
  Box, List, ListItem,
} from '@material-ui/core';
import axios from 'axios';


const Announcements = () => {

  const [done, setDone] = useState(undefined);
  const [announcements, setAnnouncements] = useState([]);
  const apiUrl = 'http://localhost:8000/announcements/';

  if(!done){
    setTimeout(() => {
      axios.get(apiUrl).then((repos) => {
        if(repos.status === 200){
          setAnnouncements(repos.data);
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
      Make sure the app is running...
      <Divider/>
      <Container>
        {
        !done ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <List>
            {announcements.map((a) => (
              <ListItem>
                    <Typography>
                      {a}
                    </Typography>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </Box>
  );
}

export default Announcements;