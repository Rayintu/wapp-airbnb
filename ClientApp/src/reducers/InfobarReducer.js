const initialState = {
  data: null,
  maxPriceFilter: -1,
  minimumRatingFilter: -1,
  neighbourhoodFilter: 'nofilter'
}

export function InfobarReducer(state = initialState, action) {
  switch(action.type) {
    case 'addDataToBarAction':
      return {...state, data: action.value };
    case 'setTotalListingsAction':
      return {...state, totalListings: action.value}
    case 'setMaxPriceFilterAction':
      return {...state, maxPriceFilter: action.value}
    case 'setMinimumRatingFilterAction':
      return {...state, minimumRatingFilter: action.value}
    case 'setNeighbourhoodFilterAction':
      return {...state, neighbourhoodFilter: action.value}
    case 'setNeighbourhoodsAction':
      return {...state, neighbourhoods: action.value}
    default:
      return state;
  }
}