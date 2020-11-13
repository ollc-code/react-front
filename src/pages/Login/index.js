import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState, useEffect } from 'react';
import {
  CssBaseline, Typography,
  TextField, Container,
  Checkbox, Avatar,
  Button, Link,
  Grid
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
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
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
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;
