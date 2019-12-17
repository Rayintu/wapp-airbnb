import React from 'react';

import { connect } from 'react-redux';

const LogoUI = () => {
  return (
    <p className="navbar__logo">Inside airbnb ica edition</p>
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

export const Logo = connect(mapStateToProps, mapDispatchToProps)(LogoUI);