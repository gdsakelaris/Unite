/**
 * @function getPublishedResources
 * @description Get all the resources that user published
 * @param {string} userToken - A token that authethicate user with backend
 * @param {Function} setPublishedResources  - A function that set the value of publishedResources state variable with an returned array, which contains all the published resources, from the backend
 */


import axios from "axios"
import { GET_PUBLISHEDRESOURCES_ROUTE } from "./apiRoutes"
export default getPublishedResources = async (userToken, setPublishedResources) => {
  try {
    const response = await axios.get(GET_PUBLISHEDRESOURCES_ROUTE, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    })
    // const publishedResources = response.data.data.resources
    // return publishedResources
    setPublishedResources(response.data.data.resources)
  } catch(err) {
    console.log(err)
    
  }
}