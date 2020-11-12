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

import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 100,
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
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={API_BASE_URL + "media/" + item.fields.profile_pic}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.fields.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {item.fields.about}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <Button size="small" color="primary">
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                  ))
                }
                </List>
          </Box>    
      </Container>
    </div>
  );
}