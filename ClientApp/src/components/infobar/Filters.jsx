import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setMaxPriceFilterAction,
  setNeighbourhoodFilterAction,
  setMinimumRatingFilterAction,
  getNeighbourhoodsDispatcher
} from '../../actions/InfobarAction'

import {
  getFilteredLocations
} from '../../actions/MapAction'

import '../../styles/infobar.scss'

class FiltersUI extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNeighbourhoodsDispatcher();
  }

  handleFilterSubmit = event => {
    event.preventDefault();
    this.props.getFilteredLocations(this.props.priceFilter, this.props.neighbourhoodFilter, this.props.ratingFilter);
  }

  handlePriceFilterChange = event => {
    this.props.setMaxPriceFilterAction(event.target.value);
  }

  handleNeighbourhoodFilterChange = event => {
    this.props.setNeighbourhoodFilterAction(event.target.value);
  }

  handleReviewFilterChange = event => {
    this.props.setMinimumRatingFilterAction(event.target.value);
  }

  neighbourhoodSelectOptions = () => {
    return this.props.neighbourhoods !== undefined ? this.props.neighbourhoods.map(neighbourhood => (
      <option>{ neighbourhood }</option>
    )) : null;
  }

  render() {
    return (
      <div className="infobar__body__filters">
        <form onSubmit={this.handleFilterSubmit}>
          <label>Max price</label><br />
          <input type="number" onChange={this.handlePriceFilterChange}></input>
          <br />
          <label>Neighbourhood</label><br />
          <select onChange={this.handleNeighbourhoodFilterChange}>
            <option>nofilter</option>
            {this.neighbourhoodSelectOptions()}
          </select>
          <br />
          <label>Minimum review score</label><br />
          <input type="number" onChange={this.handleReviewFilterChange}></input><br />

          <button type="submit">Filter</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setMaxPriceFilterAction: price => dispatch(setMaxPriceFilterAction(price)),
    setNeighbourhoodFilterAction: neighbourhood => dispatch(setNeighbourhoodFilterAction(neighbourhood)),
    setMinimumRatingFilterAction: rating => dispatch(setMinimumRatingFilterAction(rating)),
    getNeighbourhoodsDispatcher: () => dispatch(getNeighbourhoodsDispatcher()),
    getFilteredLocations: (price, neighbourhood, rating) => dispatch(getFilteredLocations(price, neighbourhood, rating))
  };
}

function mapStateToProps(state) {
  return {
    neighbourhoods: state.infobarReducer.neighbourhoods,
    priceFilter: state.infobarReducer.maxPriceFilter,
    neighbourhoodFilter: state.infobarReducer.neighbourhoodFilter,
    ratingFilter: state.infobarReducer.minimumRatingFilter
  };
}

export const Filters = connect(mapStateToProps, mapDispatchToProps)(FiltersUI);