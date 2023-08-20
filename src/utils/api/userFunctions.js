//for login page
import axios from "axios";


//api url
const BASE_URL = 'http://34.27.143.72/';

const updateUser = async (email, name, password, phonenumber, userToken) => {
  try {
    //Send post request here
    const response = await axios.put(`${BASE_URL}api/v1/client/update`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      body: {
        email: email,
        password: password,
        name: name,
        phonenumber: phonenumber
      }
    });

    //check if there's an error, else return it
    if (response.status === 200) {
      return response.data.data.resources;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error("Failed to update user: " + error.message);
  }
};

export { updateUser };
