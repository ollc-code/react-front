import './App.css';
import AdminRoutes from './routes/AdminRoutes';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import DashBoard from './pages/Dashboard/index';
import Login from './pages/Login/index';


function App() {
  console.log('token value: ', window.sessionStorage.getItem('token'));
  // correction here \/
  //const pathToRedirectForRoot = window.sessionStorage.getItem('token') == null ? '/login' : '/dashboard';

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={ Login }></Route>
          <Route exact path='/dashboard' component={ DashBoard } />
          <Redirect from="/" to="/dashboard" />
      </Switch>
      </Router>
    </div>
  );
}

export default App;