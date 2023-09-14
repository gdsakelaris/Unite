/**
 * @function getResourceKind
 * @description Get all the resources based on kind of service
 * @param {string} kindType - A kind of service
 */

import axios from 'axios';
import { GET_RESOURCE_KIND } from './apiRoutes';

const getResourceKind = async (kindType) => {
    try{
        const response = await axios.post(
            GET_RESOURCE_KIND,
            { kindofresource: kindType });
        return response.data;

    } catch (error) {
        throw new Error('Error getting resource by kind: ' + error);
    }
}

export default getResourceKind;