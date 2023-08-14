//this file will create an container that stores the open time picking field and close time picking field for a single day
import React from 'react';
import { View, Pressable} from 'react-native';
import { hour as styles} from '../../css';
import { lock_closed_sharp, lock_open_sharp } from '../../icons';
import TimePickingField from './TimePickingField';
import TitleForTimePickingField from './TitleForTimePickingField';
import { lockPickingField, unlockPickingField } from '../../../../utils/lockTimePickingField';
import { useResourceContext } from '../../../../context/ResourceProvider';
//operationalHour is an object of this format of {
              //dayName: 'Friday',
              //day: 5,
              //isClosed: false,
              //openTime: '0:00',
              //closeTime: '0:00',
              //popUpModal: false } 
const TimePickingFieldForDay = ({operationalHour}) => {
  const {dispatch} = useResourceContext()
  return (
    <View style={styles.timePickingFieldForDayContainer}>
      {/* Day */}
      <Pressable onPress={() => {
        if (operationalHour.isClosed) unlockPickingField(operationalHour, dispatch)
        else lockPickingField(operationalHour, dispatch)
      }}>
      {/* status of the day */}
        {operationalHour.isClosed ? lock_closed_sharp : lock_open_sharp}
      </Pressable>
      {/* display name of the day */}
      <TitleForTimePickingField title={`${operationalHour.dayName}:`}/>
      <View style={styles.openAndCloseHourContainer}>
        {/* Hour Picking Field for Open Time  */}
        <TimePickingField type={'openTime'}  operationalHour={operationalHour}/>
        {/* to */}
        <TitleForTimePickingField title={'to'}/>
        {/* Hour Picking Field for Close Time */}
        <TimePickingField type={'closeTime'}  operationalHour={operationalHour}/>
      </View>
    </View>
  );
}
export default TimePickingFieldForDay;