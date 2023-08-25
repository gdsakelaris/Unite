/**
 * @function submitResource
 * @description send resources'infos to backend to create new resource
 * @param {Object} resourceInfo - an object that contains all informations of new resource
 * @param {string} userToken - A token that authethicate user with backend
 * @param {Function} navigation - navigation object that allows user to move to "Published" screen after they have created new resource successfully
 * @param {Function} dispatch - A function from Resource Provider. Pass this function to clearResourceData()
 * 
 * Use clearResourceData() because after creating a new resource, we need to clear all data from the resource's state variable so that when the user creates another resource, they will have a resource state variable that is already set to its initial value.
 */

import axios from 'axios';
import { CREATE_RESOURCE_ROUTE } from './apiRoutes';
import clearResourceData from '../clearResourceData';
const submitResource = async (resourceInfo, userToken, navigation, dispatch) => {
  try {
    console.log(resourceInfo, userToken)
    const response = await axios.post(CREATE_RESOURCE_ROUTE, {
      ...resourceInfo
    }, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    })
    clearResourceData(dispatch)
    navigation.navigate('Published Message')
  }
  catch(err)
  {
    console.log(err)
    alert("Failed to create resource")
  }
}

export default submitResource;