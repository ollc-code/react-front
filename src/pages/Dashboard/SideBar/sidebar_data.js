import React from 'react';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import HelpIcon from "@material-ui/icons/Help";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const SideBarData = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <DashboardOutlinedIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Readings',
    path: '/admin/readings',
    icon: <MenuBookOutlinedIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Announcements',
    path: '/admin/announcements',
    icon: <DescriptionIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Information',
    path: '/admin/information',
    icon: <AnnouncementIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Support',
    path: '/admin/support',
    icon: <HelpIcon />,
    cName: 'sidebar-text'
  },
  {
    title: 'Profile',
    path: '/admin/profile',
    icon: <AccountCircleIcon />,
    cName: 'sidebar-text'
  },
];

export default SideBarData;