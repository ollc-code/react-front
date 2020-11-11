import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

const SideBarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <IoIcons.IoIosPaper />,
    cName: 'sidebar-text'
  },
  {
    title: 'Readings',
    path: '/readings',
    icon: <IoIcons.IoIosPaper />,
    cName: 'sidebar-text'
  },
  {
    title: 'Announcements',
    path: '/announcements',
    icon: <FaIcons.FaPaperPlane />,
    cName: 'sidebar-text'
  },
  {
    title: 'Information',
    path: '/information',
    icon: <FaIcons.FaGlobe/>,
    cName: 'sidebar-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'sidebar-text'
  },
];

export default SideBarData;