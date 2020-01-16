export function addDataToBarAction(data) {
  return {
    type: 'addDataToBarAction',
    value: data
  }
}

export function setTotalListingsAction(totalListings) {
  return {
    type: 'setTotalListingsAction',
    value: totalListings
  }
}

export function totalListingsDispatcher() {
  return async (dispatch) => {
    const response = await fetch('https://localhost:5001/listings/totalListings');
    const body = await response.json();
    if(response.ok) dispatch(setTotalListingsAction(body))
  }
}

export function setMaxPriceFilterAction(price) {
  return {
    type: 'setMaxPriceFilterAction',
    value: price
  }
}

export function setNeighbourhoodFilterAction(neighbourhood) {
  return {
    type: 'setNeighbourhoodFilterAction',
    value: neighbourhood
  }
}

export function setMinimumRatingFilterAction(rating) {
  return {
    type: 'setMinimumRatingFilterAction',
    value: rating
  }
}

export function setNeighbourhoodsAction(neighbourhoods) {
  return {
    type: 'setNeighbourhoodsAction',
    value: neighbourhoods
  }
}

export function getNeighbourhoodsDispatcher() {
  return async dispatch => {
    const response = await fetch('https://localhost:5001/listings/neighbourhoods');
    const body = await response.json();    
    if(response.ok) dispatch(setNeighbourhoodsAction(body))
  };
}

