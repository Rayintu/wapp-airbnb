import React from 'react';
import { connect } from 'react-redux';

import '../../styles/infobar.scss'

const InfobarContainerUI = props => {
  return ( 
    <div className="infobar">
      {props.children}
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

export const InfobarContainer = connect(mapStateToProps, mapDispatchToProps)(InfobarContainerUI);