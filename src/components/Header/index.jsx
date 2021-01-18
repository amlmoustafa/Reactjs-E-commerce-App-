import React from 'react';
import './styles.scss';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <Link to="/">
            <img src={logo} alt='my logo' />
          </Link>
        </div>

        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;