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


function App() {

  const pathToRedirectForRoot = window.sessionStorage.getItem('token') ? '/dashboard' : '/login';

  return (
    <Container>
      <CssBaseline/>
        <Router>
          <Switch>
            <Redirect exact from="/" to={pathToRedirectForRoot} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </Router>
    </Container>
  );
}

export default App;
