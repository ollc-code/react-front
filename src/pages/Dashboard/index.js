import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Announcements from '../Announcements/index';
import Information from '../Information/index';
import Readings from '../Readings/index';
import Support from '../Support/index';
import Login from '../Login/index';
import '../../globals.css';
import React from 'react';

export default function Dashboard() {
    
    document.title = "Dashboard | Orlem Connect";


    return (
        <div>
            <Router>
                <Navbar />
                <div className="spacing">
                    <Switch>
                        {/* <Route exact path="/dashboard" component={ Dashboard }></Route> */}
                        <Route exact path="/readings" component={ Readings }></Route>
                        <Route exact path="/announcements" component={ Announcements }></Route>
                        <Route exact path="/information" component={ Information }></Route>
                        <Route exact path="/support" component={ Support }></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
