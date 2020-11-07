import {
  Container,
  CssBaseline,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


function App() {
  return (
    <Container>
      <CssBaseline/>
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </Router>
    </Container>
  );
}

export default App;
