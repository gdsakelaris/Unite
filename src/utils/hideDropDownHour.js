import { resourceActions } from "../context/resourceTemplate";
//this function will close the dropdown hour
export default hideDropDownHour = (operationalHour, dispatch, type) => {
    const params = { 
      // [(operationalHour.dayName).toLowerCase()]: {
      //   ...operationalHour, 
      //   popUpModal: false
      // }
      popUpModal: false
    }
    // console.log(type)
    //open the dropdown menu
    dispatch(resourceActions.create(params))
    return 
};