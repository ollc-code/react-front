import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './styles.css';


function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="nav-text nav-icon">
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
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;