import { createStore } from 'redux'

const initialState = {
  auth: 'guest'
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        auth: action.payload
      }
    default:
      return state
  }
}

export default createStore(loginReducer)
