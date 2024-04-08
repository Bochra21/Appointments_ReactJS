import * as actionTypes from "./actions";

const initialState = {
  authState: false,
  role: "visitor"
  
};




//the action is the object that we passed in dispatch
const userReducer = (state = initialState, action) => {
  switch (action.type) {
   

    case actionTypes.SET_USER_ROLE:
      return {
        ...state,
        authState: true,
        role: action.role,
      };
      case actionTypes.LOGOUT_USER:
      return {
        ...state,
        authState: false,
        role: action.role, 
      };
  
    default:
      return state;
  }
};

export default userReducer;
