import React from 'react';

import { connect } from 'react-redux';

import '../../styles/infobar.scss'

const InfobarBodyUI = props => {
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

export const InfobarBody = connect(mapStateToProps, mapDispatchToProps)(InfobarBodyUI);