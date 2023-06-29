import React from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import LocationContentContainer from './locationSubscreens/LocationContentContainer';
import InputFieldForLocation from './locationSubscreens/InputFieldForLocation';
import { location as styles } from '../css';
const LocationSection = (props) => {
  return (
    <SectionContainer style={styles.locationSection}>
      <SectionTitle title={'4 Media'}/>
      <LocationContentContainer>
        <InputFieldForLocation placeholder={'www.https://myweb'}/>
      </LocationContentContainer>
    </SectionContainer>
  );
}


export default LocationSection;