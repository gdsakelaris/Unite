//this file will render the hour section for the describeService page
import React from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import HourContentContainer from './hoursSubscreens/HourContentContainer';
import TimePickingFieldForDay from './hoursSubscreens/TimePickingFieldForDay';
import { hour as styles } from '../css';
import { useResourceContext } from '../../../context/ResourceProvider';
import DropDownHour from './hoursSubscreens/DropDownHour';

const HourSection = () => {
  //get the resource state obj 
  const {resource} = useResourceContext()
  //pass the corresponding time object for each day 
  // each object will be in this format { 
              //dayName: 'Friday',
              // day: 5,
              // isClosed: false,
              // openTime: '0:00',
              // closeTime: '0:00',
              // popUpModal: false }
  
  const days = [resource.sunday]
  return (
    <SectionContainer style={styles.hourSection}>
      <SectionTitle title={'2 Hours'}/>
      <HourContentContainer>
        {days.map((d, i) => 
                              <TimePickingFieldForDay operationalHour={d} key={i.toString()}/>
                              )}
      </HourContentContainer>
      <DropDownHour operationalHour={resource} type={'open time'}/>
    </SectionContainer>
    
  )
}
export default HourSection;