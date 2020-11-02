import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Logout',
    path: '/login',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  },
  {
    title: 'Readings',
    path: '/dashboard/readings',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Announcements',
    path: '/dashboard/announcements',
    icon: <FaIcons.FaPaperPlane />,
    cName: 'nav-text'
  },
  {
    title: 'Priests',
    path: '/dashboard/priests',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/dashboard/contacts',
    icon: <FaIcons.FaGlobe/>,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];