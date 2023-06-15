import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Picker} from '@react-native-picker/picker';


const CustomButtonModal = ({title, styles, onPress}) => (
  <TouchableOpacity style={title === 'Save' ? styles.saveButton : styles.cancelButton} onPress={onPress}>
    <Text style={title === 'Save' ? styles.saveButtonText : styles.cancelButtonText}>{title}</Text>
  </TouchableOpacity>
)

const hideModal = (setVisible) => setVisible(false)
const CustomModalDatetimePicker = ({visible, setVisible, setOpenTime, openTime, dateClicked}) => {
  const hours = Array.from({length: 24})
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const mins = Array.from({length: 59})
  const available = ['Open', 'Close']
  let day = {}
  let openHour = ''
  let openMinute = ''
  let closeHour = ''
  let closeMinute = ''
  
  return (
    <DateTimePickerModal
    isVisible={visible}
    customPickerIOS={
      () => (
      <View style={styles.pickerContainer}>
          {/* <Picker
            style={styles.picker}
            
          >
            {days.map((e, i) => (
              <Picker.Item  label={e} value={e} key={i.toString()}/>
            ))}
          </Picker> */}

          <Picker
          style={styles.picker2}
          
          >
            {hours.map((_, i) => (
              <Picker.Item label={i.toString()} value={i.toString()} key={i.toString()}/>
            ))}
            
          </Picker>
          
          <Picker
          style={styles.picker2}
          >
            {mins.map((_, i) => (
              <Picker.Item label={i.toString()} value={i.toString()} key={i.toString()}/>
            ))}
          </Picker>

          <Picker
            style={styles.picker}
          >
            {available.map((e, i) => (
              <Picker.Item  label={e} value={e} key={i.toString()}/>
            ))}
          </Picker>
      </View> )
    }
    customConfirmButtonIOS={
      () => (
        <View style={styles.customButtonContainer}>
          <CustomButtonModal title={'Cancel'} styles={styles} onPress={() => hideModal(setVisible)}/>
          <CustomButtonModal title={'Save'} styles={styles} onPress={() => hideModal(setVisible)}/>
        </View>
      )
    }
    customCancelButtonIOS={() =>(<View/>)}
    onCancel={() => console.log('he')}
    onConfirm={() => console.log('he')}
    
    />
    
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'center',
    flexDirection:'row'
  },
  picker: {
    flex: 3,
  },
  picker2: {
    flex: 1,
  },
  saveButton: {
    width:'40%',
    height:'100%',
    borderRadius:'10%',
    backgroundColor: '#F24E1E',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.5
  },
  cancelButton: {
    width:'40%',
    height:'100%',
    borderRadius:'10%',
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.45
  },
  saveButtonText: {
    fontSize:20,
    fontWeight:'400',
    color:'white'
  },
  cancelButtonText: {
    fontSize:20,
    fontWeight:'400',
    
  },
  customButtonContainer: {
    flexDirection:'row', 
    justifyContent:'space-around', 
    height:'16%', 
    alignItems:'center'
  }

});

export default CustomModalDatetimePicker;