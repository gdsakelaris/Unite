// for sign up screen
import axios from "axios";
export default signUpNewAccount = (name, email, password) => {
  try {
    /**
     * Remove try catch here and place try catch in onPressSignup in SignupBtn
     * 
     * Send post request here
   axios
        .post("...."", {
            name
            email,
            password,
        })
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    */ 
  //Move to login page after sign up account successfully
  console.log(email, password, confirmPassword, name)
  
  }
  catch(err) {
    console.log(err)
  }
};