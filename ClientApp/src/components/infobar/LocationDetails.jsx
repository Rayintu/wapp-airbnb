import React from 'react';

import { connect } from 'react-redux';

import '../../styles/infobar.scss'

const getLocationDetails = selectedLocation => {

  return selectedLocation != null ? (
    <div>
      <h2>Listing info</h2>
      <h3>Name:</h3>
      <p>{selectedLocation.name}</p>
      <h3>Room type:</h3>
      <p>{selectedLocation.roomType}</p>
    </div>
  ) : null

}

const LocationDetailsUI = props => {
  return (
    <div className="infobar__body__location-details">
      {getLocationDetails(props.selectedLocation)}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

function mapStateToProps(state) {
  return {
    selectedLocation: state.mapReducer.selectedLocation
  };
}

export const LocationDetails = connect(mapStateToProps, mapDispatchToProps)(LocationDetailsUI);