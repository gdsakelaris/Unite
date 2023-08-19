//for login page
import axios from "axios";


export default handleLogin = async (email, password) => {

  console.log(email, password);
  
//api url
const api_url = 'https://34.27.143.72/' + 'api/v1/client/login';
  try {
    //Send post request here
    const response = await axios.post(api_url, {
      email,
      password
    })
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