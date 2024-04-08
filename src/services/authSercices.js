import axios from 'axios';
//import Cookies from 'js-cookie';
// Set Axios defaults
axios.defaults.withCredentials = true;
// Sign up
export const signUpUser = async (data) => {
    try {
        axios.post('http://localhost:8080/api/auth/signup',data)
          .then((response) => {
            console.log(response);
            
          }, (error) => {
            console.log(error);
          });

    } catch (error) {
    
      console.error(error);
    }
  };
 
  
// Sign in
export const logInUser = async (data) => {
  try {
    // Make the POST request
    const response = await axios.post('http://localhost:8080/api/auth/signin', data, { withCredentials: true });
    
    // Log additional information from the response
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    console.log(response.status);
    console.log("login success");
    
    // Return the entire response object
    return response;
  } catch (error) {
    // Handle errors
    console.error(error);
    throw error;
  }
};
