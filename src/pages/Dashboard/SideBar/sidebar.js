import SideBarData from './sidebar_data';
import { Link } from 'react-router-dom';
import useStyles from '../styles';
import {
  ListItemIcon, ListItemText,
  ListItem, Divider,
  Drawer, List,
 } from '@material-ui/core';
import React from 'react';


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
          {SideBarData.map((item, index) => (
            <Link to={item.path}>
              <ListItem button>
                  <ListItemIcon>{ item.icon }</ListItemIcon>
                  <ListItemText color="primary">
                  {item.title}
                  </ListItemText>
              </ListItem>
            </Link>
          ))}
          <a onClick={logout}>
            <ListItem button>
                <ListItemIcon> (Icon) </ListItemIcon>
                <ListItemText color="primary">
                  Logout
                </ListItemText>
            </ListItem>
          </a>
        </List>
      </Drawer>
  );
}
