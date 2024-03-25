import axios from 'axios';

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
 