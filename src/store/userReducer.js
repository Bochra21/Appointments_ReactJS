import * as actionTypes from "./actions";

const initialState = {
  authState: false,
  role: "visitor",
};
//the action is the object that we passed in dispatch
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATED:
      // console.log('i am useReducer and ctionTypes.SET_AUTHENTICATED is called');
      return {
        ...state,
        authState: true,
      };

    case actionTypes.SET_USER_ROLE:
      return {
        ...state,
        role: action.role,
      };

    default:
      return state;
  }
};

export default userReducer;
