import axios from "axios";
import { GET_SAVEDRESOURCES_ROUTE, REMOVE_BOOKMARKED_RESOURCE } from "./apiRoutes";

/**
 * @function getbookmarkedresources
 * @description Send request to backend to get all the bookmarked resources
 * @param {string} userToken - A token that authethicate user with backend
 * @param {Function} setSavedResources- A function that set the value of savedResources state variable with the returned array, which contains all the bookmarked resources, from the backend
 */
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
    setSavedResources(response.data.clientResponse.data.userData);
  } catch (error) {
    console.log(error);
    return null;
  }
};


/**
 * @function removeBookmarkedResources
 * @description Remove bookmarked resource
 * @param {number} resourceId - An id that helps backend to determine which resource that user is removing
 * @param {string} userToken - A token that authethicate user with backend
 * @returns {void}
 */
const removeBookmarkedResources = async (resourceId, userToken) => {

  try {
    //Send post request here
    const response = await axios.delete(REMOVE_BOOKMARKED_RESOURCE, {
        resourceId: resourceId
    }, {
      headers: {
        Authorization: `Bearer ${userToken}`
         }
  });
    console.log(response)
    //check if there's an error, else return it
    // if (response.status === 200) {
    //   return response.data.data.resources;
    // } else {
    //   console.log(response.data.error);
    // }
  } catch (error) {
    // console.log("Failed to delete bookmarked resources: " + error.message);
    // return null;
    console.log(error);
    alert("Failed to remove bookmarked resource")
  }
};

export { removeBookmarkedResources, getbookmarkedresources };
