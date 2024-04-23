import axios from 'axios';

axios.defaults.withCredentials = true;

export const addDoctorData = async (data) => {
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