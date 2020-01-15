import React, { Component } from 'react';

import ReactMapGL, { Marker, Layer, Source } from 'react-map-gl'
import { connect } from 'react-redux';

import { ReactSVG } from 'react-svg'

import {
  changeViewportAction,
  totalListingsDispatcher,
  getLocationDetailsDispatcher
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

  // convertCoordinates(coordinate, position) {
  //   var stringNumber = coordinate.toString();
  //   var begin = stringNumber.slice(0, position);
  //   var end = stringNumber.slice(position);
  //   var whole = begin + '.' + end;
  //   var converted = parseFloat(whole);
  //   return converted;
  // }

  locationOnClick = event => {
    console.log('click')
      const feature = event.features.find((f) => f.layer.id === 'unclustered-point');
      if (feature !== undefined) this.props.getLocationDetailsDispatcher(feature.properties.id);
  }

  render() {
    return (
      <ReactMapGL
        {...this.props.viewport}
        onViewportChange={(viewport) => { this.props.changeViewportDispatcher(viewport) }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={"pk.eyJ1Ijoicmlja3licm9lcnMiLCJhIjoiY2s0Mnp4ZzlmMDJqcDNucGpoaDl2dGY3ZyJ9.FPchKGvDgYmOEbK33XMKKg"}
        onClick={this.locationOnClick}
      >

        <Source
          id="source_id"
					data={this.props.listingLocations}
					type="geojson"
					cluster={true}
					clusterMaxZoom={15}
					clusterRadius={50}
        >
          <Layer
						type="circle"
						id="layer_id"
						source="source_id"
						paint={{
							'circle-color': {
								property: 'point_count',
								type: 'interval',
								stops: [ [ 0, '#ffa366' ], [ 100, '#ff6600' ], [ 750, '#993d00' ] ]
							},
							'circle-radius': {
								property: 'point_count',
								type: 'interval',
								stops: [ [ 0, 10 ], [ 90, 20 ], [ 650, 30 ] ]
							}
						}}
						filter={[ 'has', 'point_count' ]}
					/>
					<Layer
						id="unclustered-point"
						type="circle"
						source="source_id"
						filter={[ '!has', 'point_count' ]}
						paint={{
							'circle-color': '#1396d9',
							'circle-radius': 8,
							'circle-stroke-width': 2,
							'circle-stroke-color': '#fff'
						}}
					/>
					<Layer
						id="cluster-count"
						type="symbol"
						source="source_id"
						filter={[ 'has', 'point_count' ]}
						layout={{
							'text-field': '{point_count_abbreviated}',
							'text-font': [ 'DIN Offc Pro Medium', 'Arial Unicode MS Bold' ],
							'text-size': 12
						}}
					/>
        </Source>

        {/* {console.log(this.convertCoordinates(location.latitude, 2),this.convertCoordinates(location.longitude, 1))} */}
        {/* {this.props.listingLocations ? this.props.listingLocations.map(location => {
          return (
            <Marker key={location.id} latitude={this.convertCoordinates(location.latitude, 2)} longitude={this.convertCoordinates(location.longitude, 1)}>
              <ReactSVG
                src={circleRegularSVG}
                className="Map__marker--circle-hollow"
              />
            </Marker>
          )
        }) : null} */}
      </ReactMapGL>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeViewportDispatcher: (viewport) => dispatch(changeViewportAction(viewport)),
    getTotalListingsDispatcher: () => dispatch(totalListingsDispatcher()),
    getLocationDetailsDispatcher: id => dispatch(getLocationDetailsDispatcher(id))
  };
}

function mapStateToProps(state) {
  return {
    viewport: state.mapReducer.viewport,
    listingLocations: state.mapReducer.listingLocations
  };
}

export const Map = connect(mapStateToProps, mapDispatchToProps)(MapUI);