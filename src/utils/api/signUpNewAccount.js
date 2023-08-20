// for sign up screen
import axios from "axios";
export default signUpNewAccount = async (name, email, password) => {

  //Move to login page after sign up account successfully
  console.log(email, password, confirmPassword, name);


  //api url
  const api_url = 'https://34.27.143.72/' + 'api/v1/client/create';


  try {
    //Send post request here
    const response = await axios.post(api_url,
      {
        name: name,
        email: email,
        password: password
      }
    )
    const userInfo = response.data
    const token = response.header.token
    return {
      userToken: token,
      userInfo: userInfo
    }

  } catch (err) {
    console.log(err)

    //Use alert to alert error to user
    //alert(err.message)

  }
};