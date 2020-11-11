import React, { useState, useEffect } from 'react'


import Button from '@material-ui/core/Button';

// import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function PriestsInfo(props) {

    const apiUrl = "http://localhost:8000/know_your_priest/priest/";
    let imageUrl = "http://localhost:8000/media/"
    const [done, setDone] = useState('');
    const [onLoad, setOnLoad] = useState(false)

    const classes = useStyles()
    

    const [priests, setPriests] = useState([]);

    function fetchData() {
        axios.get(apiUrl).then((resp)=>{
            if (resp.status == 200){
                console.log(resp.data);
                setPriests(JSON.parse(resp.data));
            } 
        }).then(() => {
            setOnLoad(true);
            }    
        )
    }

    if(!onLoad){
        setTimeout(fetchData(), 1200)
    }

    return (
        <div>
            <Button onClick={ () => { props.back(true) } }> \back </Button>
            {
                onLoad ?
                (
                    priests.map((item , index) => (
                    )
                ))
                :
                (<p>not done</p>)
            }
        </div>
    );
}

export default PriestsInfo;
