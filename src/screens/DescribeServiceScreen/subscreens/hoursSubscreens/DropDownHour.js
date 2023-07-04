//this file will create a dropdown hour for picking open time and close time of the resource
import React from 'react';
import { View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButtonsForDropDown from './CustomButtonsForDropDown';
import CustomHeaderForDropDown from './CustomHeaderForDropDown';
const DropDownHour = ({visible, setVisible}) => {
  return (
    <DateTimePickerModal
        isVisible={visible}
        mode="time"
        customConfirmButtonIOS={() => (
          <CustomButtonsForDropDown setDatePickerVisibility={setVisible}/>
        )}
        customCancelButtonIOS={() =>(<View/>)}
        onCancel={() => null}
        onConfirm={() => null}
        customHeaderIOS={() => <CustomHeaderForDropDown headerTitle={'Wednesday'}/>}
      />
  );
}
export default DropDownHour;