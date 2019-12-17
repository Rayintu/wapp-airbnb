import React from 'react';

import { connect } from 'react-redux';

import { Login } from './Login'
import { Logo } from './Logo'

import '../../styles/navbar.scss'

const NavbarUI = props => {
  return (
    <div className="navbar-container">
      <Logo />
      <Login/>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

function mapStateToProps(state) {
  return {
  };
}

export const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarUI);