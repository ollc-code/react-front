import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Readings',
    path: '/readings',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Announcements',
    path: '/announcements',
    icon: <FaIcons.FaPaperPlane />,
    cName: 'nav-text'
  },
  {
    title: 'Information',
    path: '/information',
    icon: <FaIcons.FaGlobe/>,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/dashboard',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];