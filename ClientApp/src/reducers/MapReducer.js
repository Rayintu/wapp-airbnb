const initialState = {
  viewport: {
    width: "75vw",
    height: "92.5vh",
    latitude: 52.379189,
    longitude: 4.899431,
    zoom: 10
  },
  selectedLocation: undefined,
  listingLocations: null
}

export function MapReducer(state = initialState, action) {
  switch (action.type) {
    case 'changeViewportAction':
      return { ...state, viewport: action.value }
    case 'setListingLocationsAction':
      return { ...state, listingLocations: action.value }
    case 'setLocationDetailsAction':
      return { ...state, selectedLocation: action.value}
    case 'setFilteredLocationsAction':
      return {...state, listingLocations: action.value }
    default:
      return state;
  }
}