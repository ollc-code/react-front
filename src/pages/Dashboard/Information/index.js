import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Container, 
  Typography, 
  Divider, 
  Box, List, 
ListItem, ListItemText
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import {API_BASE_URL} from '../../../constants';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 10,
  },
  title: {
    fontSize: 14,
  },
  main: {
    padding: 20,
  },
  color: 'white',
});


export default function Information() {
  const classes = useStyles();

  document.title = "Information | Orlem Connect"

  const [getPriests, setGetPriests] = useState(false);
  const [priests, setPriests] = useState([]);

  if(!getPriests){
    setTimeout(() => {
      axios.get(API_BASE_URL + "information/priests/").then((repos) => {
        if(repos.status === 200){
          setPriests(JSON.parse(repos.data));
          console.log(priests);
        }
      }).then(() => setGetPriests(true));
    }, 1200, 5000)
  }

  return (
    <div>
        <Container>
          <Typography variant="h4">
              Information
          </Typography>
          <Divider />
          <Box className={classes.main}>
                <Typography variant="h5">
                  Priests
                </Typography>
                <List>
                  {
                  priests.map((item, index) => (
                      <Card className={classes.root}>
                        <CardContent>
                          {item.fields.name}
                        </CardContent>
                        <img src="http://localhost:8000/media/profiles/butterfly.jpg/"
                          height="200" />
                      </Card>
                  ))
                }
                </List>
          </Box>    
      </Container>
    </div>
  );
}
