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
    const response = await fetch('https://localhost:5001/api/Test');
    const body = await response.json();
    if(response.ok) dispatch(setTotalListingsAction(body.number))
  }
}