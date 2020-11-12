import { Container } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch, Route, Redirect,
} from 'react-router-dom';

import Announcements from './Announcements';
import Information from './Information';
import SideBar from './SideBar/sidebar';
import ManageUsers from './ManageUsers';
import PriestsInfo from './Information';
import Readings from './Readings';
import Support from './Support';
import Home from './Home';

import useStyles from './styles';
import React, { useEffect } from 'react';


const Dashboard = (props) => {

    document.title = "Dashboard | Orlem Connect"

    useEffect(() => {
        if (!window.sessionStorage.getItem('token')) {
            props.history.push('/login');
        }
    }, [props]);

    const classes = useStyles()

    return (
        <Router>
            <Container className={classes.root}>
                <SideBar props={props} />
                <main className={classes.content}>
                    <Switch>
                        <Route path="/announcements" exact component={Announcements} />
                        <Route path="/manageusers" exact component={ ManageUsers } />
                        <Route path="/priestsInfo" exact component={ PriestsInfo } />
                        <Route path="/information" exact component={Information} />
                        <Route path="/readings" exact component={Readings} />
                        <Route path="/support" exact component={Support} />
                        <Route path="/dashboard" exact component={Home} />
                    </Switch>
                </main>
            </Container>
        </Router>
    )
}

export default Dashboard;