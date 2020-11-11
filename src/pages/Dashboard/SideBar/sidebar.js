import SideBarData from './sidebar_data';
import { NavLink } from 'react-router-dom';
import useStyles from '../styles';
import {
  ListItemIcon, ListItemText,
  ListItem, Divider,
  Drawer, List,
 } from '@material-ui/core';
import React from 'react';
import theme from '../../../theme';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import logo from '../../../assets/static.png';

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
              <ListItem button>
                  <ListItemIcon className={classes.icon}>{ item.icon }</ListItemIcon>
                  <ListItemText >
                  {item.title}
                  </ListItemText>
              </ListItem>
            </NavLink>
          ))}
          <a onClick={logout}>
            <ListItem button>
                <ListItemIcon className={classes.icon}> <ExitToAppIcon /> </ListItemIcon>
                <ListItemText className={classes.drawerText} color="primary">
                  Logout
                </ListItemText>
            </ListItem>
          </a>
        </List>
      </Drawer>
  );
}
