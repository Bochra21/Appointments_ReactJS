
import { SET_AUTHENTICATED,SET_USER_ROLE } from "./../store/actions";

export const setAuthenticated = () => ({
  type: SET_AUTHENTICATED,
});


export const setDoctor = () => ({
  type: SET_USER_ROLE,
  role: "doctor",
});

export const setPatient = () => ({
  type: SET_USER_ROLE,
  role: "patient",
});
