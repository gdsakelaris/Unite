//for login page
import axios from "axios";


//api url
const BASE_URL = 'https://34.27.143.72/';
const getbookmarkedresources = async (userToken) => {

  try {
    //Send post request here
    const response = await axios.get(`${BASE_URL}/bookmark/get`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });

    //check if there's an error, else return it
    if (response.status === 200) {
      return response.data.data.resources;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error("Failed to fetch bookmarked resources: " + error.message);
  }
};

const removeBookmarkedResources = async (resourceId, userToken) => {

  try {
    //Send post request here
    const response = await axios.delete(`${BASE_URL}/bookmark/delete`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      body:
      {
        resourceId: resourceId
      }
    });

    //check if there's an error, else return it
    if (response.status === 200) {
      return response.data.data.resources;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error("Failed to delete bookmarked resources: " + error.message);
  }
};

export { removeBookmarkedResources, getbookmarkedresources };
