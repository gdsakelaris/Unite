// for sign up screen
import axios from "axios";
export default signUpNewAccount = (name, email, password, confirmPassword, switchPage) => {
  try {
    /**
     * Send post request here
   axios
        .post("...."", {
            name
            confirmPassword,
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
  switchPage()
    

  }
  catch(err) {
    console.log(err)
  }
};