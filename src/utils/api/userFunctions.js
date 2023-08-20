//for login page
import axios from "axios";

//api url
const BASE_URL = 'http://34.27.143.72/';

const updateUser = async (email, name, password, phonenumber, userToken) => {
  try {
    //Send post request here
    const response = await axios.put(
      `${BASE_URL}api/v1/client/update`,
      {
        email: email,
        password: password,
        name: name,
        phonenumber: phonenumber
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });

    //check if there's an error, else return it
    if (response.status === 200) {
      return response.data.data.resources;
    } else {
      console.log(response.data.error);
    }
  } catch (error) {
    console.log("Failed to update user: " + error.message);
  }
};


const getUserByID = async (userToken) => {
  try {
    //Send post request here
    const response = await axios.get(
      `${BASE_URL}api/v1/client/get`,
      null,
      {
        headers: {
          Authorization: `${userToken}`
        }
      });

    //check if there's an error, else return it
    if (response.status === 200) {
      return response.body.data.client;
    } else {
      console.log(response.data.error);
    }
  } catch (error) {
    console.log("Failed to get user: " + error.message);
  }
};



export { updateUser, getUserByID };
