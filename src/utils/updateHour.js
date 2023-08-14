import { resourceActions } from "../context/resourceTemplate"
export default updateHour = (operationalHour, dispatch, type, pickedDate) => {
  const params = { [(operationalHour.dayName).toLowerCase()]: {
    ...operationalHour, 
    [type]: pickedDate,
    popUpModal: false
  }
  }
  // console.log(type, pickedDate)
  // console.log(operationalHour)
  //open the dropdown menu
  dispatch(resourceActions.create(params))
  return 

}