//this file will create a dropdown hour for picking open time and close time of the resource
import React from 'react';
import { View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButtonsForDropDown from './CustomButtonsForDropDown';
import CustomHeaderForDropDown from './CustomHeaderForDropDown';
const DropDownHour = ({type, operationalHour}) => {
  //console.log(`Picking field for ${operationalHour.dayName} with type ${type}`)
  var pickedDate = ''
  return (
    <DateTimePickerModal
        isVisible={operationalHour.popUpModal}
        mode="time"
        customConfirmButtonIOS={() => {
          console.log(type, 'DropDownHour')
          return (
          <CustomButtonsForDropDown operationalHour={operationalHour} type={type} pickedDate={pickedDate}/>
        )}}
        customCancelButtonIOS={() =>(<View/>)}
        onCancel={() => null}
        onConfirm={() => null}
        customHeaderIOS={() => <CustomHeaderForDropDown headerTitle={operationalHour.dayName}/>
        }
        onChange={(date) => {pickedDate = date.toLocaleString().substring(11,15)
        console.log(type)}}
      />
  );
}
export default DropDownHour;