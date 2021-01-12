import React, { Component } from 'react';
import logoImage from '../../assets/logo.png';
import './styles.css';
import {menuItems} from './menuItems';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  };

  render() {
    return(
      <nav className="nav-items">
        <img alt='' src={logoImage} className="nav-logo"/>

        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item, index) => (
              <li key={item.id}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    )
  };
};

export default Navbar;
