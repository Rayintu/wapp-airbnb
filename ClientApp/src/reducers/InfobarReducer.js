const initialState = {
  data: null
}

export function InfobarReducer(state = initialState, action) {
  switch(action.type) {
    case 'addDataToBarAction':
      return {...state, data: action.value };
    case 'setTotalListingsAction':
      return {...state, totalListings: action.value}
    default:
      return state;
  }
}