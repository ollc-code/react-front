import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState, useEffect } from 'react';
import {
  CssBaseline, Typography,
  TextField, Container,
  Checkbox, Avatar,
  Button, Link,
  Grid, Slide, Grow,
 } from '@material-ui/core';
import useStyles from './styles';
import {API_BASE_URL} from '../../constants';
import axios from 'axios';


const Login = (props) => {

  document.title = "Login | Orlem Connect";

  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login(){
    const data = {
      "username": username,
      "password": password
    }
    axios.post(API_BASE_URL + "auth/jwt/", data).then((response) => {
      if(response.status === 200){
        //console.log(response.data["token"]);
        window.sessionStorage.setItem("token", response.data["token"]);
        props.history.push("/dashboard");
      }
    })
  }

  useEffect(() => {
    if(window.sessionStorage.getItem("token")){
      props.history.push("/dashboard");
    }
  }, [props]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <div className={classes.paper}>
          <Slide direction="down" in={true} timeout={600}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </Slide>
          <Grow in={true} timeout={1000}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Grow>
          <form className={classes.form}>
          <Slide direction="left" in={true} timeout={800}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                autofocus0="true"
              />
          </Slide>
          <Slide direction="right" in={true} timeout={1000}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
          </Slide>
          <Slide direction="up" in={true} timeout={1000}>          
            <Button
              onClick={
                () => {login()}
              }
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >Sign In
            </Button>
          </Slide>
          <Slide direction="right" in={true} timeout={1700}>
            <Grid container>
              <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
              </Grid>
            </Grid>
            </Slide>
          </form>
        </div>
    </Container>
  );
}

export default Login;
