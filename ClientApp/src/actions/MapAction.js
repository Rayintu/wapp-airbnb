export function changeViewportAction(viewport) {
  return {
    type: 'changeViewportAction',
    value: viewport
  }
}

export function setListingLocationsAction(listingLocations) {
  return {
    type: 'setListingLocationsAction',
    value: listingLocations
  }
}

export function totalListingsDispatcher() {
  return async (dispatch) => {
    const response = await fetch('https://localhost:5001/listings/listingLocations');
    const body = await response.json();
    if(response.ok) dispatch(setListingLocationsAction(body))
  }
}

export function setLocationDetailsAction(locationDetails) {
  return {
    type: 'setLocationDetailsAction',
    value: locationDetails
  }
}

export function getLocationDetailsDispatcher(id) {
  return async dispatch => {
    const response = await fetch(`https://localhost:5001/listings/${id}`);
    const body = await response.json();
    if(response.ok) dispatch(setLocationDetailsAction(body[0]));
  }
}