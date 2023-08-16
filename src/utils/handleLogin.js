//for login page
import axios from "axios";

export default handleLogin = async (onLogin, saveUserAuth, email, password, setIsLoading) => {
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
     * Send email, password to backend for verification
     * receive the response with token and user's info (name, emai, phoneNumber, ....)
     * store token from the response's header to the asyncstorage as well as user's info from the response's body
     * direct user to homepage
    */ 
    //start the loading state
    setIsLoading(true)
    /**
     * Send post request here
              * const response = await axios.post('url', {
              *    email, 
              *    password
              * })
              * const userInfo = response.data
              * const token = response.header.token
    */ 
    console.log(email, password)
    // save returned token and userInfo to asyncstorage
    //saveUserAuth(token, userInfo)
    saveUserAuth('fake token', {'email': email, 'password': password})
    //move user to login page
    onLogin()
    //turn off the loading state
    setIsLoading(false)
  } catch(err) {
    console.log(err)
    /**
     * Use alert to alert error to user
     * alert(err.message)
    */ 
  }
};