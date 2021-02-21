import {
    CHANGE_USER
  } from '../actions'
  
  const initialState = {
    user: 'Juriah',
    sidebarOpen: false,
    layoutMobile: true
  }
  
  const reducer = (state=initialState, action) => {
    switch (action.type) {
      case CHANGE_USER:
        return {
          ...state,
          user: action.value
        };
      default:
       return state;
     }
  }
  
  export default reducer;
  