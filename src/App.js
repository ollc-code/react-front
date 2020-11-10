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
  return (
    <Container>
      <CssBaseline/>
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Redirect exact from="/" to="/login" />
            <Route path="*" component={() => {return(<div>Check URL</div>)}} /> 
          </Switch>
        </Router>
    </Container>
  );
}

export default App;
