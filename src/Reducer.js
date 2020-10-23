const initialState = {
    list: '',
    isloggedIn: false,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_LISTS_SUCCESS':
        return {
          ...state,
          list: action.response
        };
        case 'LOGIN_SUCCESS':
        return {
          ...state,
          isloggedIn: true
        };
        case 'LOGIN_FAILED':
        return {
          ...state,
          isloggedIn: false
        };
      default:
        return state
    }
  }
  
  export default Reducer;