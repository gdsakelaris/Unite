//for login page
import axios from "axios";
import { UPDATE_USER_ROUTE } from "./apiRoutes";

const updateUser = async (email, name, password, phonenumber, userToken,setUserInfo) => {
  try {
    console.log(email, name, password, phonenumber)
    //start loading state 
    //Send post request here
    const response = await axios.post(UPDATE_USER_ROUTE, {
        email: email,
        password: password,
        name: name,
        phonenumber: phonenumber
    }, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    console.log(response.data)
    
  } catch (error) {
    console.log(error)
    alert('Failed to update user')
  }
};

export { updateUser };
