//for login page
import axios from "axios";
import { GET_SAVEDRESOURCES_ROUTE } from "./apiRoutes";

//api url
const getbookmarkedresources = async (userToken, setSavedResources) => {
  console.log(userToken);

  try {
    //Send post request here
    const response = await axios.get(GET_SAVEDRESOURCES_ROUTE, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });

    //check if there's an error, else return it
    setSavedResources(response.data.data.resources);
  } catch (error) {
    console.log("Failed to fetch bookmarked resources: " + error.message);
    return null;
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
      console.log(response.data.error);
    }
  } catch (error) {
    console.log("Failed to delete bookmarked resources: " + error.message);
    return null;
  }
};

export { removeBookmarkedResources, getbookmarkedresources };
