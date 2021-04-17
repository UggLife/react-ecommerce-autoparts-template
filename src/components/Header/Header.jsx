/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Logo from '../../yardhop-logo.png';
import './Header.css';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();

  return (
    <div className="header">

      <div className="logo">
        <Link to="/">
          <img style={{ height: '100px' }} src={Logo} alt="" />
        </Link>
      </div>

      <div className="header__search">
        <Nav />
      </div>

    </div>
  );
};

export default Header;
