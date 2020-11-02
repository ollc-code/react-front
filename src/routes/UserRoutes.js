import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import DashBoard from '../pages/Dashboard/index';
import Login from '../pages/Login/index'
import React from 'react';


function AdminRoutes({pathToRedirectForRoot}) {
    return (
        <div>
            <Router>
                <Switch>
                    <Redirect exact from="/" to={ pathToRedirectForRoot } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/dashboard' component={ DashBoard } />          
                </Switch>
            </Router>
        </div>
    )
}

export default AdminRoutes;