import { Router, Switch, Route } from "react-router-dom";
import React from 'react';
import history from './history';

import Dashboard from './pages/dashboard';

const Routes =  () => {
    return(
        <Router history={ history }>
            <Switch>
                <Route path="/dashboard" exact component={ Dashboard } />
            </Switch>
        </Router>
    );
}