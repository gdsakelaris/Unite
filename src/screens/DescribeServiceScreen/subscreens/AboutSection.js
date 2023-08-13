//this file will render the about section for the describeService page
import React from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import AboutContentContainer from './aboutSubscreens/AboutContentContainer';
import InputFieldForDescription from './aboutSubscreens/InputFieldForDescription';
import InputFieldForTitle from './aboutSubscreens/InputFieldForTitle';
import { about as styles } from '../css';
const AboutSection = () => {
  return (
    <SectionContainer style={styles.aboutSection}>
      <SectionTitle title={'1 About'}/>
      <AboutContentContainer>
        <InputFieldForTitle/>
        <InputFieldForDescription/>
      </AboutContentContainer>
    </SectionContainer>
  );
}
export default AboutSection;