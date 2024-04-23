import axios from "axios";

axios.defaults.withCredentials = true;

export const addOrUpdateDoctor = async (userId, data) => {
  try {
    axios.post("http://localhost:8080/api/doctor?userId=${userId}", data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  } catch (error) {
    console.error(error);
  }
};
