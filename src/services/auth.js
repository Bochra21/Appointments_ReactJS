import axios from "axios";


const instance = axios.create({
  baseURL: " http://localhost:8080/api/auth", // your API base URL
 
});

const ApiService = {
  //fetchUsers: () => instance.get('/users'),
  // Other API calls can be defined here
  createUser: (postData) => instance.post("/users", postData),
};

export default ApiService;
