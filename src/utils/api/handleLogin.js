//for login page
import axios from "axios";

export default handleLogin = async (email, password) => {
  // Insert your IP below
  // axios
  //   .post("http://<IP Address>:5000/login", {
  //     email,
  //     password,
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //     onLogin();
  //   })
  //   .catch((error) => {
  //     Alert.alert(
  //       "Error",
  //       "Could not log in. Please check your credentials."
  //     );
  //     console.log(error);
  //   });
  try {
    /**
     * Send post request here
              * const response = await axios.post('url', {
              *    email, 
              *    password
              * })
              * const userInfo = response.data
              * const token = response.header.token
              * return {  userToken: token,
              *           userInfo: userInfo
              *        }
    */ 
    console.log(email, password)
    
  } catch(err) {
    console.log(err)
    /**
     * Use alert to alert error to user
     * alert(err.message)
    */ 
  }
};