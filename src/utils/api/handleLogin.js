//for login page
import axios from "axios";

//i have no idea what the url  is
//so nned to find that out

//after that, we'll want to have a template function for calls

//then we want to runardound and gind the calls and submit them

//so lets sort by something that makes it easier


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