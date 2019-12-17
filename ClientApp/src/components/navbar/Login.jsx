import React from 'react';

import { connect } from 'react-redux';

const LoginUI = () => {
  return ( 
    <button className="navbar__login__button">Login</button>
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

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);