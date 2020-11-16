import {
  Container,
  CssBaseline,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route, Switch, Redirect,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import UserReadings from './pages/UserPages/Readings';


function App() {

  const pathToRedirectForAdmin = window.sessionStorage.getItem('token') ? '/admin/dashboard' : '/admin/login';
  const pathToRedirectForUser = '/dashboard';

  return (
    <Container>
      <CssBaseline/>
        <Router>
          <Switch>
            <Redirect exact from="/" to={pathToRedirectForUser} />
            <Redirect exact from="/admin" to={pathToRedirectForAdmin} />
            <Route exact path="/admin/login" component={Login} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/readings" component={UserReadings} />
            <Redirect from="*" to="/admin/dashboard" />
          </Switch>
        </Router>
    </Container>
  );
}

export default App;
