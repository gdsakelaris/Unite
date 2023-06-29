import React from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import HourContentContainer from './hoursSubscreens/HourContentContainer';
import TimePickingFieldForDay from './hoursSubscreens/TimePickingFieldForDay';
import { hour as styles } from '../css';
const HourSection = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return (
    <SectionContainer style={styles.hourSection}>
      <SectionTitle title={'2 Hours'}/>
      <HourContentContainer>
        {days.map((d, i) => 
                              <TimePickingFieldForDay day={d} openAt={'0:00'} closeAt={'0:00'} key={i.toString()}/>
                              )}
      </HourContentContainer>
    </SectionContainer>
    
  )
}
export default HourSection;