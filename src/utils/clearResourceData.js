/**
 * @function clearResourceData
 * @description Clear resource state variable. Ultilized before starting to update or after creating resource 
 * @param dispatch - a dispatch function from ResourceProvider that allows to modify the value of resource-state variable. Reasearch about useReducer hook in react native to understand the whole process of creating ResourceProvider.
 * * // Assuming you have access to the dispatch function from the resource context
 * const {dispatch} = useResourceContext();
 */

import { resourceActions } from "../context/resourceTemplate";
export default clearResourceData = (dispatch) => {
  dispatch(resourceActions.clear())
}