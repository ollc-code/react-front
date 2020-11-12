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

import PriestsInfo from './priests_info';


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

  const [priestsinfopage, setPriestsPage] = useState(false);


  if (priestsinfopage == false){
    return(
      <div>
        <Container>
          <Typography variant="h4">
              Information
          </Typography>
          <Divider />
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">Priests and Deacons</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => { setPriestsPage(true) }}>
                Edit
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
    )
  } else if (priestsinfopage) {
      return <PriestsInfo back={ setPriestsPage } />
  }
}