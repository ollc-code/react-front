import { SidebarData } from './SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './styles.css';
import history from '../../history';


function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
      if (window.sessionStorage.getItem('token')) {
          history.push('/dashboard');
      }
  });


  return (
    <div>
      <nav className="sidebar">
        <ul>
          <li className="nav-icon">
            <img src={logo} alt="logo" height="100" width="100"/>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon} &nbsp;<span> {item.title} </span>
                </Link>
              </li>
            );
          })}
          <li key="-1" className="sidebar-text">
            <a href="/login">
              <AiIcons.AiOutlineLogout /> &nbsp;<span> Logout </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;