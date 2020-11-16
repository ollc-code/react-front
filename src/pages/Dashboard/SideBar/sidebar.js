import SideBarData from './sidebar_data';
import { NavLink } from 'react-router-dom';
import useStyles from '../styles';
import {
  ListItemIcon, ListItemText,
  ListItem, Divider,
  Drawer, List, Slide, Grow,
 } from '@material-ui/core';
import React from 'react';
import theme from '../../../theme';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import logo from '../../../assets/logo_dark.svg';

export default function PermanentDrawerLeft({props}) {
  const classes = useStyles();

  function logout(){
    window.sessionStorage.removeItem("token");
    props.history.push('/login');
  }

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider />
        <List>
          <ListItem className={classes.SidebarLogo}>
            <ListItemIcon> <img src={logo} height="100" /> </ListItemIcon>
          </ListItem>
          {SideBarData.map((item, index) => (
              <NavLink
                className={classes.drawerItem}
                activeStyle={{
                    fontWeight: "bolder",
                    color: theme.palette.secondary.main
                  }} 
                  to={item.path}>
              <Slide in={true} direction="right" timeout={100 * (index + 1)} >
                <ListItem button>
                    <ListItemIcon className={classes.icon}>{ item.icon }</ListItemIcon>
                    <ListItemText >
                    {item.title}
                    </ListItemText>
                </ListItem>
              </Slide>
              </NavLink>
          ))}
          <a onClick={logout}>
          <Grow in={true} timeout={2000}>
            <ListItem button>
                <ListItemIcon className={classes.icon}> <ExitToAppIcon /> </ListItemIcon>
                <ListItemText className={classes.drawerText} color="primary">
                  Logout
                </ListItemText>
            </ListItem>
          </Grow>
          </a>
        </List>
      </Drawer>

  );
}
