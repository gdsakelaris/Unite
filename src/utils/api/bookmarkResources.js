/**
 * @function bookmarkResource
 * @description Bookmark or save resource
 * @param {number} resourceId - An id that helps backend to determine which resource that user is bookmarking
 * @param {string} userToken - A token that authethicate user with backend
 * @param {boolean} setIsBookmarked - A function that set the isBookmarked state variable with the boolean value of whether the resource is bookmarked successfully or not
 * @returns {void}
 */


import axios from 'axios';
import { SAVE_RESOURCE_ROUTE } from './apiRoutes';
const bookmarkResources = async (resourceId, userToken, setIsBookmarked) => {
    try {
        console.log(resourceId)
        const response = await axios.post(
            SAVE_RESOURCE_ROUTE, 
            { resourceId: resourceId },
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }
        );  
        setIsBookmarked(true)
        // if (response.status === 200  && response.data.data.msg === 'Resource successfully bookmarked.'){
        //     return { success: true, message: response.data.data.msg};
        // } else {
        //     return { success: false, message: 'Bookmark resource failed.'}
        // }
    } catch (error) {
        console.log(error)
        alert('Failed to save resource')
    }
};

export default bookmarkResources;