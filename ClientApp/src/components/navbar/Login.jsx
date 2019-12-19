import React from 'react';

import { connect } from 'react-redux';

import { getAccountTokenDispatcher } from '../../actions/AccountAction'

const LoginUI = props => {
  return ( 
    <button onClick={props.getAccountTokenDispatcher} className="navbar__login__button">Login</button>
   );
}
 
function mapDispatchToProps(dispatch) {
  return {
    getAccountTokenDispatcher: () => dispatch(getAccountTokenDispatcher())
  };
}

function mapStateToProps(state) {
  return {
    
  };
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);