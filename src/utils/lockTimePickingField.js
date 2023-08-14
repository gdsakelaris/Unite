import { resourceActions } from "../context/resourceTemplate"
export const lockPickingField = (operationalHour, dispatch) => {
  const params = { [(operationalHour.dayName).toLowerCase()]: {
    ...operationalHour, 
    isClosed: true
  }
  }
  //open the dropdown menu
  dispatch(resourceActions.create(params))
  return 
}
export const unlockPickingField = (operationalHour, dispatch) => {
  const params = { [(operationalHour.dayName).toLowerCase()]: {
    ...operationalHour, 
    isClosed: false
  }
  }
  //open the dropdown menu
  dispatch(resourceActions.create(params))
  return 
}