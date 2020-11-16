import { Container } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch, Route, Redirect,
} from 'react-router-dom';

import Announcements from './Announcements';
import Information from './Information';
import SideBar from './SideBar/sidebar';
import Profile from './Profile';
import PriestsInfo from './Information';
import Readings from './Readings';
import Support from './Support';
import Home from './Home';

import useStyles from './styles';
import React, { useEffect, useState } from 'react';


const Dashboard = (props) => {

    document.title = "Dashboard | Orlem Connect"
    const [testToken, setTestToken] = useState(false)

    useEffect(() => {
        if (!window.sessionStorage.getItem('token')) {
            props.history.push('/admin/login');
        }
    }, [testToken]);

    const classes = useStyles()

    return (
        <Router>
            <Container className={classes.root}>
                <SideBar props={props} />
                <main className={classes.content}>
                    <Switch>
                        <Route path="/admin/announcements" exact component={Announcements} />
                        <Route path="/admin/profile" exact component={ Profile } />
                        <Route path="/admin/priestsInfo" exact component={ PriestsInfo } />
                        <Route path="/admin/information" exact component={Information} />
                        <Route path="/admin/readings" exact component={Readings} />
                        <Route path="/admin/support" exact component={Support} />
                        <Route path="/admin/dashboard" exact component={Home} />
                    </Switch>
                </main>
            </Container>
        </Router>
    )
}

export default Dashboard;