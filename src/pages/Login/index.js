import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState, useEffect} from 'react';
import Form from "@material-ui/core/FormGroup"
import { API_BASE_URL } from '../../constants';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import axios from 'axios';

function Login(props) {

  document.title = "Login | Orlem Connect";

  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
      if (window.sessionStorage.getItem('token')) {
          props.history.push('/dashboard');
      }
  }, [props]);

  function login() {

        const postData = {
          "username" : username,
          "password": password
        };
        var responseStatus, token;
        axios.post(`${API_BASE_URL}/auth/jwt/`, 
          postData,
          ).then((response) => {
            token = response.data['token'];
            responseStatus = response.status;
            return response.json;
        }).then((responseData) => {
            if (responseStatus === 200) {
                window.sessionStorage.setItem('token', token);
                props.history.push('/dashboard');
            } else console.log(responseData.message);
        }).catch((err) => {
            console.log(err.message);
        });
    }
  

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
        <Form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            //required
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
            //required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {() => {
              login();
              }}
            >Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
