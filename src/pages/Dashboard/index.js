import { Container } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch, Route, Redirect,
} from 'react-router-dom';
import SideBar from './SideBar/sidebar';
import Announcements from './Announcements';
import Information from './Information'
import Readings from './Readings';
import Support from './Support';
import Home from './Home';
import useStyles from './styles';
import PriestsInfo from './Information';
import React, { useEffect } from 'react';


const Dashboard = (props) => {

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