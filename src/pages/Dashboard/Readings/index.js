import React from 'react';
import {Container, Typography, Divider} from '@material-ui/core';


export default function Readings() {

  document.title = "Readings | Orlem Connect"

  return (
    <Container>
      <Typography variant="h4">
          Readings
      </Typography>
      <Divider />
    </Container>
  );
}
