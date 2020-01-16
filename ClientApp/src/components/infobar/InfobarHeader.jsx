import React, { Component } from 'react';

import { connect } from 'react-redux';

import { totalListingsDispatcher } from '../../actions/InfobarAction'

import '../../styles/infobar.scss';
import '../../styles/layout.scss';

class InfobarHeaderUI extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getTotalListingsDispatcher()
  }

  render() {
    return (
      <div className="infobar__header">
        <div className="infobar__header__content">
          <p className="infobar__header__title">
            Amsterdam
          </p>
          <div className="infobar__header__content--side-by-side">
            <div>              
              <div className="infobar__header__listings--filtered">{this.props.listingLocations != undefined ? this.props.listingLocations.features.length : null}</div>
              <div className="infobar__header__listings--total">{this.props.totalListings != undefined ? `out of ${this.props.totalListings} listings` : null}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTotalListingsDispatcher: () => dispatch(totalListingsDispatcher())
  };
}

function mapStateToProps(state) {
  return {
    totalListings: state.infobarReducer.totalListings,
    listingLocations: state.mapReducer.listingLocations
  };
}

export const InfobarHeader = connect(mapStateToProps, mapDispatchToProps)(InfobarHeaderUI);