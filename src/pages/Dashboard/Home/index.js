import React from 'react';
import {Container, Typography, Divider} from '@material-ui/core';


export default function Home() {

  document.title = "Dashboard | Orlem Connect"

  return (
    <Container>
        <Typography variant="h4">
            Home
        </Typography>
        <Divider />
    </Container>
  );
}
