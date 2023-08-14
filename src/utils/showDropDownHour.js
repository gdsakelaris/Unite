import { resourceActions } from "../context/resourceTemplate"

//this function will open the dropdown hour
//change popupModal to true to open modal
export default showDropDownHour =  (operationalHour, dispatch) => {
  //if the resource is not closed on the day that this timepickingfield is clicked
  if (!operationalHour.isClosed) {
    const params = {
      // [(operationalHour.dayName).toLowerCase()]: {
      //   ...operationalHour, 
      //   popUpModal: true
      // }
      popUpModal: true
    }
    //open the dropdown menu
    dispatch(resourceActions.create(params))
    //return 
  }
  //if the resource is already closed, user can't open the dropdown modal, return some kind of notfications to notice user
}
