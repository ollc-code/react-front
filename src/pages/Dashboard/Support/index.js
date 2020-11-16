import React from 'react';
import {Container, Box, Typography, Link, Divider} from '@material-ui/core';


export default function Support() {

  document.title = "Support | Orlem Connect"

  return (
    <Container>
      <Typography variant="h4">
          Support
      </Typography>
      <Divider />
      <Box>
        <Typography variant="body2">
          If you run into any issues, please call <Link>8828XXXXX4</Link>.
        </Typography>
      </Box>
    </Container>
  );
}
