/**
 * updateImage function.
 * Updates the image array of resource-related variable using the dispatch function.
 *
 * @param {function} dispatch - A dispatch function from ResourceProvider that allows to modify the value of resource-state variable. Reasearch about useReducer hook in react native to understand the whole process of creating ResourceProvider.
 * Assuming you have access to the dispatch function from the resource context
 * const {dispatch} = useResourceContext();
 * @param {string[]} newImageArray - The new array of image URIs to replace the existing images.
 * @returns {void}
 */

import updateResource from "./updateResource";

export default updateImage = (dispatch, newImageArray) => updateResource(dispatch, {field: 'images', value: newImageArray})