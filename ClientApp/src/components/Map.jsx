import React, { Component } from 'react';

import ReactMapGL, { Marker } from 'react-map-gl'
import { connect } from 'react-redux';

import { ReactSVG } from 'react-svg'

import {
  changeViewportAction,
  totalListingsDispatcher
} from '../actions/MapAction'

import circleRegularSVG from '../images/circle-regular.svg'

import '../styles/map.scss';

class MapUI extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTotalListingsDispatcher();
  }

  convertCoordinates(coordinate, position) {
    var stringNumber = coordinate.toString();
    var begin = stringNumber.slice(0, position);
    var end = stringNumber.slice(position);
    var whole = begin + '.' + end;
    var converted = parseFloat(whole);
    return converted;
  }

  render() {
    return (
      <ReactMapGL
        {...this.props.viewport}
        onViewportChange={(viewport) => { this.props.changeViewportDispatcher(viewport) }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={"pk.eyJ1Ijoicmlja3licm9lcnMiLCJhIjoiY2s0Mnp4ZzlmMDJqcDNucGpoaDl2dGY3ZyJ9.FPchKGvDgYmOEbK33XMKKg"}
      >
        {/* {console.log(this.convertCoordinates(location.latitude, 2),this.convertCoordinates(location.longitude, 1))} */}
        {this.props.listingLocations ? this.props.listingLocations.map(location => {
          return (
            <Marker key={location.id} latitude={this.convertCoordinates(location.latitude, 2)} longitude={this.convertCoordinates(location.longitude, 1)}>
              <ReactSVG
                src={circleRegularSVG}
                className="Map__marker--circle-hollow"
              />
            </Marker>
          )
        }) : null}
      </ReactMapGL>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeViewportDispatcher: (viewport) => dispatch(changeViewportAction(viewport)),
    getTotalListingsDispatcher: () => dispatch(totalListingsDispatcher())
  };
}

function mapStateToProps(state) {
  return {
    viewport: state.mapReducer.viewport,
    listingLocations: state.mapReducer.listingLocations
  };
}

export const Map = connect(mapStateToProps, mapDispatchToProps)(MapUI);