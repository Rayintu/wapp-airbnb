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
//    const response = await fetch('https://localhost:5001/listings/listingLocationsList');
    const body = await response.json();
    if(response.ok) dispatch(setListingLocationsAction(body))
  }
}