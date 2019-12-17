const initialState = {
  viewport: {
    width: "75vw",
    height: "92.5vh",
    latitude: 52.379189,
    longitude: 4.899431,
    zoom: 8
  },
  selectedLocation: null
}

export function MapReducer(state = initialState, action) {
  switch(action.type) {
    case 'changeViewportAction':
      return {...state, viewport: action.value}
    default:
      return state;
  }
}