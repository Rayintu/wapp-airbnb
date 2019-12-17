import React from 'react';

import ReactMapGL, { Marker } from 'react-map-gl'
import { connect } from 'react-redux';

import { changeViewportAction } from '../actions/MapAction'

const MapUI = props => {
  return (
    <ReactMapGL
      {...props.viewport}
      onViewportChange={(viewport) =>{ props.changeViewportDispatcher(viewport)}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken={"pk.eyJ1Ijoicmlja3licm9lcnMiLCJhIjoiY2s0Mnp4ZzlmMDJqcDNucGpoaDl2dGY3ZyJ9.FPchKGvDgYmOEbK33XMKKg"}
    >
    </ReactMapGL>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    changeViewportDispatcher: (viewport) => dispatch(changeViewportAction(viewport))
  };
}

function mapStateToProps(state) {
  return {
    viewport: state.mapReducer.viewport
  };
}

export const Map = connect(mapStateToProps, mapDispatchToProps)(MapUI);