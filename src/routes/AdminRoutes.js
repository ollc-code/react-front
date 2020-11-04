import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Announcements from '../pages/Announcements/index';
import Information from '../pages/Information/index';
import DashBoard from '../pages/Dashboard/index';
import Readings from '../pages/Readings/index';
import Support from '../pages/Support/index';
import Login from '../pages/Login/index';
import React from 'react';


function AdminRoutes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/support' component={ Support } />
                    <Route exact path='/readings' component={ Readings } />
                    <Route exact path='/dashboard' component={ DashBoard } />          
                    <Route exact path='/information' component={ Information } />                
                    <Route exact path='/announcements' component={ Announcements } />                
                </Switch>
            </Router>
        </div>
    )
}

export default AdminRoutes;