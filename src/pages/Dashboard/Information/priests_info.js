import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import AlertDialog from './AlertDialog';

import {Container, 
    Divider, 
    Box, List, 
  ListItem, ListItemText
  } from '@material-ui/core';
import {API_BASE_URL} from '../../../constants';

import CardActionArea from '@material-ui/core/CardActionArea';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


function PriestsInfo(props) {

    document.title = "Priests & Deacons | Orlem Connect";

    const [onLoad, setOnLoad] = useState(false);
    const [alert, setAlert] = useState(false);

    const classes = useStyles();
    
    const [priests, setPriests] = useState([]);
    const [currentItem, setCurrentItem] = useState({});

    function fetchData() {
        axios.get(API_BASE_URL + "information/priests/").then((resp)=>{
            if (resp.status == 200){
                console.log(resp.data);
                setPriests(JSON.parse(resp.data));
                setCurrentItem(resp.data[0])
            } 
        }).then(() => {
            setOnLoad(true);
            }    
        )
    }

    function handleAlert(item){
        setCurrentItem(item);
        console.log("what");
        setAlert(true);
        
    }

    useEffect(() => {
        setTimeout(fetchData(), 1200)
    }, [onLoad])

    return (
        <div>
            <Button onClick={ () => { props.back(false) } }> \back </Button>
            {
                alert ? (
                    <AlertDialog open={alert} handleClose={setAlert} id={currentItem.pk} name={ currentItem.name } />
                ) : (
                    <Box />
                )
            }
            {
                onLoad ?
                (
                    <Box className={classes.main}>
                    <Typography variant="h5">
                        Priests and Deacons
                    </Typography>
                    <Divider /><br />
                    <List>
                    {
                        priests.map((item, index) => (
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={item.fields.name}
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
                                    <Button size="small" variant="outlined" color="primary">
                                        Edit
                                    </Button>
                                    <Button size="small" variant="outlined" color="primary" 
                                        onClick={() => {
                                            handleAlert(item)
                                        }}
                                        >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        ))
                    }
                    </List>
                </Box>
                )
                :
                (
                    <p>Not Done</p>
                )
            }
        </div>
    );
}

export default PriestsInfo;
