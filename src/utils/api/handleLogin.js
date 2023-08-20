//for login page
import axios from "axios";

import { getUserByID } from "./userFunctions";

export default handleLogin = async (email, password) => {

  console.log(email, password);
  
//api url
const api_url = 'https://34.27.143.72/' + 'api/v1/client/login';
  try {
    //Send post request here
    console.log("test")
    const response = await axios.post(api_url, {
      email,
      password
    })
    let token = response.header.token;
    console.log(response.data.client);
    //let userInfo = await getUserByID(token)
    let userInfo = response.data.client;

    return {
      userToken: token,
      userInfo: userInfo
    }

  } catch (err) {
    console.log(err)

    //Use alert to alert error to user
    alert(err.message)

  }
};