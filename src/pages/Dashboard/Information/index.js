import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

import PriestsInfo from './priests_info';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  color: 'white',
});

export default function Information() {
  const [card, setShowCard] = useState(true);
  const classes = useStyles();
    if(card) {
      return (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h3" component="h2">
              Priests
            </Typography>
            <Typography variant="body2" component="p">
              Update Priest Info
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => { setShowCard(false) } }>Edit | Update</Button>
          </CardActions>
      </Card>
      );
    } else{
      return(
        <PriestsInfo back={ setShowCard } />
      );
    }

}
