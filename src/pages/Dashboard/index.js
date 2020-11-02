import { Announcement } from '@material-ui/icons';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Readings from './pages/Readings';

export default function Dashboard() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/dashboard/readings' exact component={Readings} />
                </Switch>
            </Router>
        </div>
    )
}
