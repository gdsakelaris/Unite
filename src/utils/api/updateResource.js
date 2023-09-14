/**
 * @function updateResource
 * @description send resources'infos to backend to update existing resource
 * @param {Object} resource - an object that contains new informations for the existing resource
 * @param {string} userToken - A token that authethicate user with backend
 * @param {number} resourceId - An id that helps backend to determine which resource that user is updating
 * @param {Function} navigation - navigation object that allows user to move to "Published Service" screen after they have updated resource successfully
 * @param {Function} dispatch - A function from Resource Provider. Pass this function to clearResourceData()
 * 
 * Use clearResourceData() because after updating a new resource, we need to clear all data from the resource's state variable so that when the user creates or update another resource, they will have a resource state variable that is already set to its initial value.
 */

import axios from "axios";
import { UPDATE_RESOURCE_ROUTE } from "./apiRoutes";
import clearResourceData from "../clearResourceData";
export default updateResource = async (resource, userToken, resourceId, navigation, dispatch) => {
  try {
    console.log(resource)
    console.log(resourceId)
    const response = await axios.put(UPDATE_RESOURCE_ROUTE, {
      resource: {...resource},
      resourceid: resourceId

    }, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    } )
    //clear resource-state variable after update
    clearResourceData(dispatch)
    navigation.navigate('Published Service')

  } catch(err) {
    console.log(err)
    alert('Failed to update resource')
  }
}

