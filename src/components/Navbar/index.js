import React, { Component } from 'react';
import logoImage from '../../assets/logo.png';
import './index.css';
import {menuItems} from './menuItems';

class Navbar extends Component {
  render() {
    return(
      <nav className="nav-items">
        <img src={logoImage} className="nav-logo"/>
        <div className="menu-icon">

        </div>
        <ul>
          {menuItems.map((item, index) => {
            return (
              <li>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  };
};

export default Navbar;
