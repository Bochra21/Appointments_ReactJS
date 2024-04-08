
import { SET_USER_ROLE,LOGOUT_USER  } from "./../store/actions";

// set doctor and authenticate
export const setDoctor = () => ({
  type: SET_USER_ROLE,
  role: "doctor",
});
// set patient and authenticate
export const setPatient = () => ({
  type: SET_USER_ROLE,
  role: "patient",
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  authState: false,
  role: "visitor",
});