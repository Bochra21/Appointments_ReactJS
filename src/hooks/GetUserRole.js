import { useSelector } from "react-redux";
import { isDoctor } from "./../utils/auth-functions";

const useUserRole = () => {
  const user_role = useSelector((state) => state.userSelector.role);
  return user_role;
};

const GetUserRole = () => {
  const user_role = useUserRole();
  return user_role;
};

export default GetUserRole;
