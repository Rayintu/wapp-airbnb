import React from 'react';

import { connect } from 'react-redux';

import '../../styles/infobar.scss'

const handleFilterSubmit = event => {
  event.preventDefault();
}

const FiltersUI = () => {
  return (
    <div className="infobar__body__filters">
      <form onSubmit={handleFilterSubmit}>
        <label>Max price</label><br />
        <input type="number"></input>
        <br />
        <label>Neighbourhood</label><br />
        <select>
          <option>yeet</option>
        </select>
        <br />
        <label>Minimum review score</label><br />
        <input type="number"></input><br />

        <button type="submit">Filter</button>
      </form>
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

export const Filters = connect(mapStateToProps, mapDispatchToProps)(FiltersUI);