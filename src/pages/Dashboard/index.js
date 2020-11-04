import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Announcements from '../Announcements/index';
import Information from '../Information/index';
import Readings from '../Readings/index';
import Support from '../Support/index';
import Login from '../Login/index';

export default function Dashboard() {
    
    document.title = "Dashboard | Orlem Connect";

    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    {/* <Route exact path="/dashboard" component={ Dashboard }></Route> */}
                    <Route exact path="/readings" component={ Readings }></Route>
                    <Route exact path="/announcements" component={ Announcements }></Route>
                    <Route exact path="/information" component={ Information }></Route>
                    <Route exact path="/support" component={ Support }></Route>
                    <Route exact path="/login" component={ Login }></Route> 
                    {/* some issue with the login routing and dashboard */}
                </Switch>
            </Router>
        </div>
    )
}
