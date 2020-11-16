import React, { useState, useEffect } from 'react';
import {
    Container, Box, Typography,
    Divider,
} from '@material-ui/core';
import axios from 'axios'
import { API_BASE_URL } from '../../../constants';


const UserReadings = (props) => {

    document.title = "Readings | Orlem Connect";

    const [announcements, setAnnouncements] = useState([])
    const [loaded, setLoaded] = useState(false);

    function getAnnouncements(){
        if(!loaded){
            axios.get(API_BASE_URL + "bible/readings/today/").then((response) => {
                if(response.status === 200){
                    setAnnouncements(response.data);
                }
            }).then(() => {
                setLoaded(true);
            })
        }
    }

    useEffect(() => {
        getAnnouncements();
    }, [loaded])


    return (
        <Container>
            <Typography variant="h4">
                Readings
            </Typography>
            <Divider />
            <Box>
                {
                    announcements.map((item, index) => (
                        <Typography variant="h6">
                            {item.reading}
                        </Typography>
                    ))
                }
            </Box>
        </Container>
    )

}

export default UserReadings;