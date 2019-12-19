
const initialState = {
  accesToken: null,
  userType: null
}

export function (state = initialState, action) {
  switch(action.type) {
    case 'setAccountTokenAction':
      return {...state, accesToken: action.value}
  }
}