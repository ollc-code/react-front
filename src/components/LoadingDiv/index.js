import {
    Box, Typography, CircularProgress,
} from '@material-ui/core';

const LoadingDiv = () => {
    return (
        <Box className="">
            <CircularProgress/>
            <Typography>
            &nbsp;&nbsp; Is the app running?
            </Typography>
        </Box>
    )
}

export default LoadingDiv;

/*


          <Box className={classes.loadingBox}>
              <CircularProgress/>
              <Typography>
                &nbsp;&nbsp; Is the app running?
              </Typography>
          </Box>
 */